import Controller from '@ember/controller';
import { action } from '@ember/object';
import {inject as service} from '@ember/service';

export default class IndexController extends Controller {
    // @service index;
    // @action
    // buttonClick() {
    //     let username = document.getElementById("username").value;
    //     let password = document.getElementById("password").value;
    //     console.log("hello" + username + password);
    //     $.ajax({
    //         type: "POST",
    //         url: "/chatapp/auth",
    //         data: {
    //             username: username,
    //             password: password
    //         },
    //         dataType: "text",
    //         success: function (data) {
    //             console.log("hello" + username + password);
    //             var result = data;
    //             if (result == "valid") {
    //                 this.setProperty('success');
    //             // console.log("hello" + username + password);   let auth = this.get(this,'status')
    //             //    this.auth.setProperty('success');
    //             }
    //             else{
    //                 $('#result').html("Invalid username or password");
    //                 console.log(username + " or " + password + " is incorrect");
    //             }
    //         },
    //         error: function (jqXHR, testStatus, errorThrown) {
    //             console.log("error thrown: " + testStatus);
    //         }
    //     })
    // }
}
