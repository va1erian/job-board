'use strict';

const mongoose = require('mongoose'),
    Router = require('koa-router');


//////////////////////////////
/// ROUTING
//////////////////////////////

const router = new Router();


// GET /
router.get('/', search);

// GET /top-keywords
router.get('/top-keywords', topKeywords);

// GET /:id
router.get('/:id', getById);

// POST /
router.post('/', create);

// DELETE /:id
router.delete('/:id', removeById);


// Export
module.exports = router.routes();



//////////////////////////////
/// CONTROLLER
//////////////////////////////

function *search() {
    const q = this.query.q;

    const query = {};

    if (q && q.length > 0) {
        const regexp = new RegExp(q, 'i');

        query['$or'] = [
            {'title': regexp},
            {'description': regexp},
            {'tags': regexp}
        ];
    }

    this.body = yield Job.find(query);
}

function *topKeywords() {
   this.body = yield Job.aggregate([
      { $project: { tags : 1, _id : false } }, // keep only tags field
      { $unwind : "$tags" }, //flatten tags arrays
      { $group  : { _id : "$tags" , count : { $sum : 1 } } }, // count by summing 1
      { $sort   : { count : - 1 } }, //order counts
      { $limit  : 5 } //keep only the top 5
   ]).exec();

}

function *getById() {
   const _id = this.params.id;
   this.body = yield Job.findOne({_id});
}
   

function *create() {
    const job = new Job(this.request.body);

    yield job.save();
    
    this.body = job._id;
    this.status = 201;
}


function *removeById() {
    const _id = this.params.id;

    const article = yield Job.findOne({_id});
    if (!article) {
        this.status = 404;
        this.body = `Cannot find article with id=${_id}`;
        return;
    }

    yield article.remove();

    this.status = 204;
}



//////////////////////////////
/// MODEL
//////////////////////////////

const schema = new mongoose.Schema({
    // ID => implicit

    email: String,

    title: String,

    description: String,

    tags: [String],
});


const Job = mongoose.model('Job', schema);
