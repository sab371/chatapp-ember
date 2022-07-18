import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
    location = config.locationType;
    rootURL = config.rootURL;
}

Router.map(function() {
    this.route('index', { path: '/' });
    this.route('signup', { path: '/sign up' });
    this.route('chat', { path: '/chat/:chat_id' });
    this.route('welcome', { path: '/home' });
    this.route('friends', { path: '/friends' });
    this.route('people', { path: '/people' });
    this.route('signinsuccess', { path: '/success' });
    this.route('requests', { path: '/requests' });
    this.route('socket', { path: '/sock' });
});