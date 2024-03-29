import Controller from './viewjob.controller.js';

export default function route($stateProvider) {
    'ngInject';

    $stateProvider
        .state('home.viewjob', {
            url: '/view/:id',
            templateUrl: 'app/home/viewjob/viewjob.html',
            controller: Controller,
            controllerAs: 'vm',
        });
}
