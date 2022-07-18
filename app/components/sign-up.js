import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SignUpCompComponent extends Component {
    @service router;

    @action
    buttonClick() {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        var dummy = this;

        $.ajax({
            type: "POST",
            url: "/register",
            data: {
                username: username,
                password: password
            },
            dataType: "text",
            success: function(data) {
                var result = JSON.parse(data);
                if (result.status == 1) {
                    dummy.router.transitionTo('signinsuccess');
                } else {
                    $('#result').html("username already exists!!! Please create a new one");
                }
            },
            error: function(jqXHR, testStatus, errorThrown) {
                console.log("error thrown: " + testStatus);
            }
        });
    }
}