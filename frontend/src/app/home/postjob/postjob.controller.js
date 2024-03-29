export default class Controller {
    constructor($state, JobsService) {
        'ngInject';

        this.$state = $state;
        this.jobsService = JobsService;

        this.newjob = {
            email: '',
            title: '',
            description: '',
            tags: []
        };
    }


    get tagsline() {
        return this.newjob.tags.join(',');
    }

    set tagsline(newval) {
        const newvalTrimed = newval.trim().toLowerCase();
        if ( newvalTrimed.length <= 0 ) {
            this.newjob.tags = [];
            return;
        }

        const tags = newvalTrimed.split(',');
        for (let i = 0; i < tags.length; ++i ) {
            // Remove extra spaces
            tags[i] = tags[i].trim();
        }

        this.newjob.tags = tags;
    }


    create() { 
        this.jobsService
            .create(this.newjob)
            .then((result) => {
                  console.log(result);
                this.$state.go('home.viewjob', {id: result.data})
            }
            );
    }
}
