import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class AuthComponent extends Component {
    @service router;
    @service('index') auth;

    @action
    buttonClick() {
            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;
            console.log("user is " + username);
            var dummy = this;

            $.ajax({
                type: "GET",
                url: "/auth",
                data: {
                    username: username,
                    password: password
                },
                dataType: "text",
                success: function(data) {
                    console.log(data);
                    var result = JSON.parse(data);
                    console.log(result.status);
                    if (result.status == 1) {
                        localStorage.setItem("username", username);
                        dummy.router.transitionTo('welcome');

                    } else {
                        $('#result').html("Invalid username or password");
                    }

                },
                error: function(jqXHR, testStatus, errorThrown) {
                    console.log("error thrown: " + testStatus);
                }

            });

        }
        // if ((username == "abc") && (password == "123")) {
        //     window.location.href = "home";
        // }
        // else {
        //     window.location.href = "authfailure";
        // }
        // })

    // }
    // @action
    // buttonClick() {
    //         $.ajax({
    //             type:"POST",
    //             url:"/home",
    //             data:{
    //                 username:this.username,
    //                 password:this.password
    //             },
    //             dataType:"text"
    //         })
    // console.log("hello");
    // var xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState == 4 && this.status == 200) {
    //         console.log("hello" + username + password);
    //         var result = this.responseText;
    //         if (result == "valid") {
    //             window.location.href = "auth";
    //         }
    //         else {
    //             console.log(username + " or " + password + " is incorrect");
    //         }
    //     }
    // }
    // xhr.open('POST', 'auth', true);
    // xhr.send();
    // }

}