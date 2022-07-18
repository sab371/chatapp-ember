import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class DenyRequestComponent extends Component {
    @action
    denyRequest(name) {
        var dummy = this;
        $.ajax({
            type: "POST",
            url: "/chatapp/denyrequest/" + name,
            data: {

            },
            dataType: "text",
            success: function(data) {
                var result = JSON.parse(data);
                console.log(result.status);
                if (result.status == 1) {
                    document.getElementById('accept').innerHTML = "";
                } else {
                    alert("Something went wrong!! Please try later");
                    console.log("request not accepted :error")
                }
            },
            error: function(jqXHR, testStatus, errorThrown) {
                console.log("error thrown: " + testStatus);
            }

        });
    }
}