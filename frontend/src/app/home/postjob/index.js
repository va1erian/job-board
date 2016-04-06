const app = angular.module('myApp.home.postjob', []);


/*
 * Route
 */
import route from './postjob.route';

app
    .config(route);


export default app;
