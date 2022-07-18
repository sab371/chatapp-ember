import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ChatSenderComponent extends Component {
    @service router;

    @action
    sendMessage(name) {

        let message = document.getElementById("message").value;
        // let from = getUsername();
        // var file = document.querySelector('input[type="file"]').files[0];
        let from = localStorage.getItem('username');
        let to = name;
        var fr;

        // document.getElementById("message").addEventListener('change', function(e) {
        //     e.preventDefault();
        //     var files = e.target.files || e.dataTransfer.files;
        //     for (var x = 0; x < files.length; x++) {

        //         fr = new FileReader();
        //     }
        // });

        $.ajax({
            type: "POST",
            url: "/chatapp/chatsend",
            data: {
                message: message
            },
            dataType: "text",
            success: function(data) {
                var result = JSON.parse(data);
                if (result.status == 1) {
                    var date = new Date();
                    var dt = date.toLocaleString();
                    document.getElementById('newmsg').innerHTML += "<div class=\"outgoing\"><div class=\"bubble\">" + message + "<div class=\"datetime\" style=\"font-size:small\">" + dt + "</div></div></div>";
                    // fr.addEventListener("loadend", function() {
                    socket.send(JSON.stringify({
                        type: "message",
                        from: from,
                        to: to,
                        data: message,
                        time: dt
                    }));
                    var object = document.getElementById("scroll");
                    object.scrollTop = object.scrollHeight;
                    // })

                } else if (result.status == 0) {
                    alert("Your message is too long!!!");
                }

            },
            error: function(jqXHR, testStatus, errorThrown) {
                console.log("error thrown: " + testStatus);
            }

        });
    }
    @action
    uploadFile(name) {
        var dummy = this;
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
                    closeDiv();
                    dummy.router.transitionTo('chat', name);

                } else {
                    alert("Something went wrong!! Please try again");
                }

            },
            error: function(jqXHR, testStatus, errorThrown) {
                alert("Please check your connection!!!")
                console.log("error thrown: " + testStatus);
            }

        });
    }
}