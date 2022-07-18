import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SendImageComponent extends Component {

    @action
    uploadFile() {

        var file = document.getElementById('filename');;

        const formData = new FormData(file);
        console.log(file);
        console.log(formData);
        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: "/sendImage",
            data: formData,
            processData: false,
            contentType: false,
            cache: false,
            success: function(data) {
                console.log(data);
                var result = JSON.parse(data);
                console.log(result.status);
                if (result.status == 1) {
                    localStorage.setItem("username", username);
                    dummy.router.transitionTo('welcome');

                } else {
                    alert("Invalid username or password");
                }

            },
            error: function(jqXHR, testStatus, errorThrown) {
                console.log("error thrown: " + testStatus);
            }

        });
    }
}