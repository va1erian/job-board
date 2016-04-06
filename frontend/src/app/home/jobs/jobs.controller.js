export default class Controller {
    constructor(JobsService) {
        'ngInject';

        this.jobsService = JobsService;

        this.topKeywords = [];
        JobsService.topKeywords().then((top) => this.topKeywords = top);

        this.jobs = [];
        this.search();
    }


    search() {
        this.jobsService
            .search(this.q)
            .then((jobs) => this.jobs = jobs);
    }


    searchByTag(tag) {
        this.q = tag;

        this.search();
    }


    removeById(_id) {
        this.jobsService
            .removeById(_id)
            .then(() => {
                for (let i = 0; i < this.jobs.length; ++i) {
                    const job = this.jobs[i];

                    if (_id === job._id) {
                        this.jobs.splice(i, 1);
                        break;
                    }
                }
            });
    }
}
