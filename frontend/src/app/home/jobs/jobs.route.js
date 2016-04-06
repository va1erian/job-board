import Controller from './jobs.controller.js';

export default function route($stateProvider) {
    'ngInject';

    $stateProvider
        .state('home.jobs', {
            url: '/jobs',
            templateUrl: 'app/home/jobs/jobs.html',
            controller: Controller,
            controllerAs: 'vm',
        });
}
