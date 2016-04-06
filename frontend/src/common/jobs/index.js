export default class Service {
    constructor($http) {
        'ngInject';

        this.$http = $http;
    }


    search(q) {
        const query = {};

        if (q) {
            query.params = {q};
        }

        return this.$http
            .get('/api/jobs', query)
            .then((response) => response.data);
    }

    get(id) {
      return this.$http
               .get(`/api/jobs/${id}`)
               .then((res) => res.data);
    }


    create(newarticle) {
        return this.$http.post('/api/jobs', newarticle);
    }


    removeById(_id) {
        return this.$http.delete(`/api/jobs/${_id}`);
    }
    
    topKeywords() {
      return this.$http
         .get('/api/jobs/top-keywords')
         .then((res) => res.data);
    }
}
