const app = angular.module('myApp.home.viewjob', []);

/*
 * Route
 */
import route from './viewjob.route';

app
    .config(route);


export default app;
