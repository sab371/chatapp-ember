import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RequestsRoute extends Route {
    @service router;

    async model() {
        var dummy = this;
        return fetch('/chatapp/request').then(function(response) {
            const isJson = response.headers.get('content-type').includes('application/json');
            const data = isJson ? response.json() : null;
            if (data == null) {
                dummy.router.transitionTo('index');
            }
            return data;
        }).then(function(json) {
            return json;
        });
    }
}