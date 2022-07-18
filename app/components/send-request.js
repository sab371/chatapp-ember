import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SendRequestComponent extends Component {
    @action
    sendRequest(name) {
        $.ajax({
            type: "POST",
            url: "/chatapp/sendrequest/" + name,
            data: {

            },
            dataType: "text",
            success: function(data) {
                var result = JSON.parse(data);
                if (result.status == 1) {
                    document.getElementById('response').innerHTML = "<span class=\"icon\"><ion-icon name=\"checkmark\"></ion-icon></span>";
                } else {
                    alert("Oops!!! Something went wrong... Please try later");
                    console.log("request not sent");
                }
            },
            error: function(jqXHR, testStatus, errorThrown) {
                console.log("error thrown: " + testStatus);
            }

        });
    }
}