import Service from '@ember/service';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default class IndexService extends Service {
    @service router;

    @action
    setUser(username) {
        localStorage.setItem('username', username);
        this.set('username', username);
        console.log("from setUSer " + this.get('username'));
        this.router.transitionTo('welcome');
    }
    @action
    getUser() {
        console.log("From service: " + this.get('username'));
        return this.get('username');
    }
    @action
    setRedirect(to) {
        console.log(to);
        this.router.transitionTo('chat', to);
    }
}