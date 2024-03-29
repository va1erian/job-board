import home from './app/home';


const app = angular.module('myApp', [
    'ngMessages',
    'ui.router',
    home.name,
]);


/*
 * Configuration
 */
import logConfig from './app/index.config.log';
import routeConfig from './app/index.config.route';

app
    .config(logConfig)
    .config(routeConfig);


/*
 * Common
 */
import JobsService from './common/jobs';

app
    .service('JobsService', JobsService);
