export default class Controller {
    constructor($state, $stateParams, JobsService) {
        'ngInject';

        this.$state = $state;
        this.id = $stateParams.id;        
        
        this.job = {};

        JobsService.get(this.id)
            .then((job) => this.job = job);
    }
}
