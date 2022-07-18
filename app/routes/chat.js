import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ChatRoute extends Route {
    @service router;
    @service('index') auth;

    model(params) {
        var dummy = this;
        const {
            chat_id
        } = params;
        var username = this.auth.getUser();
        localStorage.setItem('chat_id', chat_id);
        return fetch('/chatapp/chat/' + chat_id).then(function(response) {
            const isJson = response.headers.get('content-type').includes('application/json');
            const data = isJson ? response.json() : null;
            if (data == null) {
                dummy.router.transitionTo('index');
            }
            return data;
        }).then(function(json) {
            return { username, chat_id, json };
        });
    }
}