const app = angular.module('myApp.home.jobs', []);


/*
 * Route
 */
import route from './jobs.route';

app
    .config(route);


export default app;
