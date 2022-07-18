import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
    @service router;

    async model() {
        var dummy = this;
        return fetch('/chatapp/checkSession').then(function(response) {
            const isHtml = response.headers.get('content-type').includes('application/json');
            const data = isHtml ? null : response.text();
            console.log("data is " + data);
            return data;
        }).then(function(text) {
            console.log(text);
            if (text == 1) {
                dummy.router.transitionTo('welcome');
            }
            return text;
        });
    }
}