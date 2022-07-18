import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class LogoutComponent extends Component {
    @service router;

    @action
    logout() {
        var dummy = this;

        $.ajax({
            type: "GET",
            url: "/chatapp/logout",
            data: {},
            dataType: "text",
            success: function(data) {
                localStorage.clear();
                dummy.router.transitionTo('index');

            },
            error: function(jqXHR, testStatus, errorThrown) {
                alert("Oops!!! Something went wrong... Please try later");
                console.log("error thrown: " + testStatus);
            }

        });
    }
}