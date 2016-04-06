import Controller from './postjob.controller.js';

export default function route($stateProvider) {
    'ngInject';

    $stateProvider
        .state('home.postjob', {
            url: '/postjob',
            templateUrl: 'app/home/postjob/postjob.html',
            controller: Controller,
            controllerAs: 'vm',
        });
}
