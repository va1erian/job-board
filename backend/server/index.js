/**
 * MAIN: Configuration and main application
 */

'use strict';

const bodyParser = require('koa-bodyparser'),
    cors = require('kcors'),
    errorHandler = require('koa-error'),
    Koa = require('koa'),
    logger = require('koa-logger'),
    mongoose = require('mongoose'),
    Router = require('koa-router');


const config = require('./config');


// Connect to database
mongoose.connect(config.mongo.url);
mongoose.connection.on('error', (err) => {
    console.error('Mongoose error: ', err);

    process.exit(1);
});


// Configure KOA framework
const app = new Koa();

app.use(logger());
app.use(errorHandler());
app.use(cors());
app.use(bodyParser());


// Define routes
const router = new Router();

router.use('/api/jobs', require('./jobs'));

app.use(router.routes());


// Start server
app.listen(config.port, (err) => {
    if (err) {
        return console.error('%s server error: ', app.name, err);
    }

    console.info('Server listening at http://localhost:%d', config.port);
});
