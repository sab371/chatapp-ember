import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class FriendsRoute extends Route {
    @service router;
    async model() {
        var dummy = this;
        return fetch('/chatapp/friends').then(function(response) {
            const isJson = response.headers.get('content-type').includes('application/json');
            const data = isJson || response.data == "[]" ? response.json() : null;
            if (data == null) {
                dummy.router.transitionTo('index');
            }
            return data;
        }).then(function(json) {

            return json;
        });
    }
}