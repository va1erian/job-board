import jobs from './jobs';
import postjob from './postjob';
import viewjob from './viewjob';
const app = angular.module('myApp.home', [
    jobs.name,
    postjob.name,
    viewjob.name
]);


/*
 * Route
 */
import route from './home.route';

app
    .config(route);


export default app;
