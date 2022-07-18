'use strict';



;define("chat-app/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("chat-app/app", ["exports", "ember-resolver", "ember-load-initializers", "chat-app/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor() {
      super(...arguments);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("chat-app/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("chat-app/components/accept-request", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <a {{action "acceptRequest" @name}} href="#" onclick="accept(event)">
      <span class="icon" title="accept request">
          <ion-icon name="thumbs-up-outline"></ion-icon>
      </span>
  </a>
  
  
  */
  {
    "id": "+zPPagSH",
    "block": "{\"symbols\":[\"@name\"],\"statements\":[[11,\"a\"],[24,6,\"#\"],[24,\"onclick\",\"accept(event)\"],[4,[38,0],[[32,0],\"acceptRequest\",[32,1]],null],[12],[2,\"\\n    \"],[10,\"span\"],[14,0,\"icon\"],[14,\"title\",\"accept request\"],[12],[2,\"\\n        \"],[10,\"ion-icon\"],[14,3,\"thumbs-up-outline\"],[12],[13],[2,\"\\n    \"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"]],\"hasEval\":false,\"upvars\":[\"action\"]}",
    "meta": {
      "moduleName": "chat-app/components/accept-request.hbs"
    }
  });

  let AcceptRequestComponent = (_dec = Ember._action, (_class = class AcceptRequestComponent extends _component.default {
    acceptRequest(name) {
      var dummy = this;
      $.ajax({
        type: "POST",
        url: "/chatapp/acceptrequest/" + name,
        data: {},
        dataType: "text",
        success: function (data) {
          var result = JSON.parse(data);
          console.log(result.status);

          if (result.status == 1) {
            document.getElementById('accept').innerHTML = "";
          } else {
            alert("Something went wrong!! Please try later");
            console.log("request not accepted :error");
          }
        },
        error: function (jqXHR, testStatus, errorThrown) {
          console.log("error thrown: " + testStatus);
        }
      });
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "acceptRequest", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "acceptRequest"), _class.prototype)), _class));
  _exports.default = AcceptRequestComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, AcceptRequestComponent);
});
;define("chat-app/components/auth", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <form>
      <div class="text-field">
          <Input type="text" id="username" required />
          <span></span>
          <label>UserName:</label>
      </div>
      <div class="text-field">
          <Input type="password" id="password" required />
          <span></span>
          <label>Password:</label>
      </div>
      <div id="result"></div>
      <input {{action "buttonClick"}} type="submit" value="Start Chatting">
      <div class="signup_link">
          New User?<LinkTo @route="signup">Signup</LinkTo>
      </div>
  </form>
  */
  {
    "id": "gwJpllmK",
    "block": "{\"symbols\":[],\"statements\":[[10,\"form\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"text-field\"],[12],[2,\"\\n        \"],[8,\"input\",[[24,1,\"username\"],[24,\"required\",\"\"],[24,4,\"text\"]],[[],[]],null],[2,\"\\n        \"],[10,\"span\"],[12],[13],[2,\"\\n        \"],[10,\"label\"],[12],[2,\"UserName:\"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"text-field\"],[12],[2,\"\\n        \"],[8,\"input\",[[24,1,\"password\"],[24,\"required\",\"\"],[24,4,\"password\"]],[[],[]],null],[2,\"\\n        \"],[10,\"span\"],[12],[13],[2,\"\\n        \"],[10,\"label\"],[12],[2,\"Password:\"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,1,\"result\"],[12],[13],[2,\"\\n    \"],[11,\"input\"],[24,2,\"Start Chatting\"],[24,4,\"submit\"],[4,[38,0],[[32,0],\"buttonClick\"],null],[12],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"signup_link\"],[12],[2,\"\\n        New User?\"],[8,\"link-to\",[],[[\"@route\"],[\"signup\"]],[[\"default\"],[{\"statements\":[[2,\"Signup\"]],\"parameters\":[]}]]],[2,\"\\n    \"],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"action\"]}",
    "meta": {
      "moduleName": "chat-app/components/auth.hbs"
    }
  });

  let AuthComponent = (_dec = Ember.inject.service, _dec2 = Ember.inject.service('index'), _dec3 = Ember._action, (_class = class AuthComponent extends _component.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "router", _descriptor, this);

      _initializerDefineProperty(this, "auth", _descriptor2, this);
    }

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
        success: function (data) {
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
        error: function (jqXHR, testStatus, errorThrown) {
          console.log("error thrown: " + testStatus);
        }
      });
    } // if ((username == "abc") && (password == "123")) {
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


  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "auth", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "buttonClick", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "buttonClick"), _class.prototype)), _class));
  _exports.default = AuthComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, AuthComponent);
});
;define("chat-app/components/chat-sender", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <head>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  </head>
  <div class="dropzone hide" id="image-display"></div>
  <div class="bottom-bar">
      <div class="chat">
          <form id="filename">
              <div class="image-upload">
                  <label for="file-input" class="icon">
                      <ion-icon name="attach"></ion-icon>
                  </label>
  
                  <input onchange="selectFile(event)" id="file-input" type="file" name="fileUpload" accept="image/*" />
              </div>
  
          </form>
          <input type="text" placeholder="Type a message..." id="message" />
          <button id="button" {{action "sendMessage" @name}} type="submit">
              <ion-icon name="send"></ion-icon>
          </button>
      </div>
  </div>
  <div class="hide" id="image-display">
      <span onclick="closeDiv()"><b>x</b></span>
  
      <img id="file-image" src="" alt="Preview" class="hidden">
      <form id="filename">
          <input {{action "uploadFile" @name}} type="submit" value="Send" />
      </form>
  </div>
  
  <script>
      document.getElementById("message")
          .addEventListener("keyup", function (event) {
              event.preventDefault();
              if (event.keyCode === 13) {
                  document.getElementById("button").click();
              }
          });
      var fileContent;
      function selectFile(event) {
          console.log("from select file function " + event.target.files[0].name);
          fileContent = event.target.files[0];
          if (fileContent) {
              const reader = new FileReader();
              const img = document.getElementById('file-image');
              var rawData = new Blob();
  
              reader.readAsDataURL(fileContent);
              reader.onload = function () {
                  img.src = reader.result;
                  rawData = reader.result;
                  console.log(rawData);
                  var byteArray = new Uint16Array(rawData);
                  const messageObject = {
                      type: "file",
                      body: rawData,
                      MimeType: fileContent.type,
                      fileName: fileContent.name
                  }
                  console.log(byteArray);
              }
              document.getElementById('image-display').classList.remove('hide');
  
          }
      }
  
      function closeDiv() {
          console.log('from close function');
          const img = document.getElementById('file-image');
          img.src = "";
          document.getElementById('file-input').value = '';
          document.getElementById('image-display').classList.add('hide');
      }
      var lastTarget = null;
      window.addEventListener('dragenter', function (e) {
          document.getElementById('image-display').classList.remove('hide');
          document.querySelector(".dropzone").style.visibility = "";
          document.querySelector(".dropzone").style.opacity = 1;
      });
      window.addEventListener('dragdrop', function (e) {
          document.getElementById('image-display').innerHTML = "<img src=\"\" alt=\"\">";
          var files = e.target.files || e.dataTransfer.files;
          e.stopPropagation();
          e.preventDefault();
          for (var i = 0, f; f = files[i]; i++) {
              parseFile(f);
              uploadFile(f);
          }
          if (e.target === lastTarget || e.target === document) {
              document.querySelector(".dropzone").style.visibility = "hidden";
              document.querySelector(".dropzone").style.opacity = 0;
          }
      });
  </script>
  */
  {
    "id": "oTNyIpIK",
    "block": "{\"symbols\":[\"@name\"],\"statements\":[[10,\"head\"],[12],[2,\"\\n    \"],[10,\"script\"],[14,\"src\",\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"],[12],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"div\"],[14,0,\"dropzone hide\"],[14,1,\"image-display\"],[12],[13],[2,\"\\n\"],[10,\"div\"],[14,0,\"bottom-bar\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"chat\"],[12],[2,\"\\n        \"],[10,\"form\"],[14,1,\"filename\"],[12],[2,\"\\n            \"],[10,\"div\"],[14,0,\"image-upload\"],[12],[2,\"\\n                \"],[10,\"label\"],[14,\"for\",\"file-input\"],[14,0,\"icon\"],[12],[2,\"\\n                    \"],[10,\"ion-icon\"],[14,3,\"attach\"],[12],[13],[2,\"\\n                \"],[13],[2,\"\\n\\n                \"],[10,\"input\"],[14,\"onchange\",\"selectFile(event)\"],[14,1,\"file-input\"],[14,3,\"fileUpload\"],[14,\"accept\",\"image/*\"],[14,4,\"file\"],[12],[13],[2,\"\\n            \"],[13],[2,\"\\n\\n        \"],[13],[2,\"\\n        \"],[10,\"input\"],[14,\"placeholder\",\"Type a message...\"],[14,1,\"message\"],[14,4,\"text\"],[12],[13],[2,\"\\n        \"],[11,\"button\"],[24,1,\"button\"],[24,4,\"submit\"],[4,[38,0],[[32,0],\"sendMessage\",[32,1]],null],[12],[2,\"\\n            \"],[10,\"ion-icon\"],[14,3,\"send\"],[12],[13],[2,\"\\n        \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"div\"],[14,0,\"hide\"],[14,1,\"image-display\"],[12],[2,\"\\n    \"],[10,\"span\"],[14,\"onclick\",\"closeDiv()\"],[12],[10,\"b\"],[12],[2,\"x\"],[13],[13],[2,\"\\n\\n    \"],[10,\"img\"],[14,1,\"file-image\"],[14,\"src\",\"\"],[14,\"alt\",\"Preview\"],[14,0,\"hidden\"],[12],[13],[2,\"\\n    \"],[10,\"form\"],[14,1,\"filename\"],[12],[2,\"\\n        \"],[11,\"input\"],[24,2,\"Send\"],[24,4,\"submit\"],[4,[38,0],[[32,0],\"uploadFile\",[32,1]],null],[12],[13],[2,\"\\n    \"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[10,\"script\"],[12],[2,\"\\n    document.getElementById(\\\"message\\\")\\n        .addEventListener(\\\"keyup\\\", function (event) {\\n            event.preventDefault();\\n            if (event.keyCode === 13) {\\n                document.getElementById(\\\"button\\\").click();\\n            }\\n        });\\n    var fileContent;\\n    function selectFile(event) {\\n        console.log(\\\"from select file function \\\" + event.target.files[0].name);\\n        fileContent = event.target.files[0];\\n        if (fileContent) {\\n            const reader = new FileReader();\\n            const img = document.getElementById('file-image');\\n            var rawData = new Blob();\\n\\n            reader.readAsDataURL(fileContent);\\n            reader.onload = function () {\\n                img.src = reader.result;\\n                rawData = reader.result;\\n                console.log(rawData);\\n                var byteArray = new Uint16Array(rawData);\\n                const messageObject = {\\n                    type: \\\"file\\\",\\n                    body: rawData,\\n                    MimeType: fileContent.type,\\n                    fileName: fileContent.name\\n                }\\n                console.log(byteArray);\\n            }\\n            document.getElementById('image-display').classList.remove('hide');\\n\\n        }\\n    }\\n\\n    function closeDiv() {\\n        console.log('from close function');\\n        const img = document.getElementById('file-image');\\n        img.src = \\\"\\\";\\n        document.getElementById('file-input').value = '';\\n        document.getElementById('image-display').classList.add('hide');\\n    }\\n    var lastTarget = null;\\n    window.addEventListener('dragenter', function (e) {\\n        document.getElementById('image-display').classList.remove('hide');\\n        document.querySelector(\\\".dropzone\\\").style.visibility = \\\"\\\";\\n        document.querySelector(\\\".dropzone\\\").style.opacity = 1;\\n    });\\n    window.addEventListener('dragdrop', function (e) {\\n        document.getElementById('image-display').innerHTML = \\\"<img src=\\\\\\\"\\\\\\\" alt=\\\\\\\"\\\\\\\">\\\";\\n        var files = e.target.files || e.dataTransfer.files;\\n        e.stopPropagation();\\n        e.preventDefault();\\n        for (var i = 0, f; f = files[i]; i++) {\\n            parseFile(f);\\n            uploadFile(f);\\n        }\\n        if (e.target === lastTarget || e.target === document) {\\n            document.querySelector(\\\".dropzone\\\").style.visibility = \\\"hidden\\\";\\n            document.querySelector(\\\".dropzone\\\").style.opacity = 0;\\n        }\\n    });\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"action\"]}",
    "meta": {
      "moduleName": "chat-app/components/chat-sender.hbs"
    }
  });

  let ChatSenderComponent = (_dec = Ember.inject.service, _dec2 = Ember._action, _dec3 = Ember._action, (_class = class ChatSenderComponent extends _component.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "router", _descriptor, this);
    }

    sendMessage(name) {
      let message = document.getElementById("message").value; // let from = getUsername();
      // var file = document.querySelector('input[type="file"]').files[0];

      let from = localStorage.getItem('username');
      let to = name;
      var fr; // document.getElementById("message").addEventListener('change', function(e) {
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
        success: function (data) {
          var result = JSON.parse(data);

          if (result.status == 1) {
            var date = new Date();
            var dt = date.toLocaleString();
            document.getElementById('newmsg').innerHTML += "<div class=\"outgoing\"><div class=\"bubble\">" + message + "<div class=\"datetime\" style=\"font-size:small\">" + dt + "</div></div></div>"; // fr.addEventListener("loadend", function() {

            socket.send(JSON.stringify({
              type: "message",
              from: from,
              to: to,
              data: message,
              time: dt
            }));
            var object = document.getElementById("scroll");
            object.scrollTop = object.scrollHeight; // })
          } else if (result.status == 0) {
            alert("Your message is too long!!!");
          }
        },
        error: function (jqXHR, testStatus, errorThrown) {
          console.log("error thrown: " + testStatus);
        }
      });
    }

    uploadFile(name) {
      var dummy = this;
      var file = document.getElementById('filename');
      ;
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
        success: function (data) {
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
        error: function (jqXHR, testStatus, errorThrown) {
          alert("Please check your connection!!!");
          console.log("error thrown: " + testStatus);
        }
      });
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "sendMessage", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "sendMessage"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "uploadFile", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "uploadFile"), _class.prototype)), _class));
  _exports.default = ChatSenderComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, ChatSenderComponent);
});
;define("chat-app/components/deny-request", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <a {{action "denyRequest" @name}} href="#">
      <span class="icon" title="accept request">
          <ion-icon name="thumbs-down"></ion-icon>
      </span>
  </a>
  
  */
  {
    "id": "lSugnpCy",
    "block": "{\"symbols\":[\"@name\"],\"statements\":[[11,\"a\"],[24,6,\"#\"],[4,[38,0],[[32,0],\"denyRequest\",[32,1]],null],[12],[2,\"\\n    \"],[10,\"span\"],[14,0,\"icon\"],[14,\"title\",\"accept request\"],[12],[2,\"\\n        \"],[10,\"ion-icon\"],[14,3,\"thumbs-down\"],[12],[13],[2,\"\\n    \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"action\"]}",
    "meta": {
      "moduleName": "chat-app/components/deny-request.hbs"
    }
  });

  let DenyRequestComponent = (_dec = Ember._action, (_class = class DenyRequestComponent extends _component.default {
    denyRequest(name) {
      var dummy = this;
      $.ajax({
        type: "POST",
        url: "/chatapp/denyrequest/" + name,
        data: {},
        dataType: "text",
        success: function (data) {
          var result = JSON.parse(data);
          console.log(result.status);

          if (result.status == 1) {
            document.getElementById('accept').innerHTML = "";
          } else {
            alert("Something went wrong!! Please try later");
            console.log("request not accepted :error");
          }
        },
        error: function (jqXHR, testStatus, errorThrown) {
          console.log("error thrown: " + testStatus);
        }
      });
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "denyRequest", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "denyRequest"), _class.prototype)), _class));
  _exports.default = DenyRequestComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, DenyRequestComponent);
});
;define("chat-app/components/get-image", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{yield}}
  */
  {
    "id": "9qzooIdT",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[18,1,null]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "chat-app/components/get-image.hbs"
    }
  });

  class GetImageComponent extends _component.default {}

  _exports.default = GetImageComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, GetImageComponent);
});
;define("chat-app/components/image-viewer", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{#if this.isLarge}}
    <button type="button" class="image large" {{on "click" this.toggleSize}}>
      <img id="file-image" src="" alt="Preview" class="hidden">
    </button>
  {{else}}
    <button type="button" class="image" {{on "click" this.toggleSize}}>
      <img id="file-image" src="" alt="Preview" class="hidden">
    </button>
  {{/if}}
  */
  {
    "id": "YoMDMe3k",
    "block": "{\"symbols\":[],\"statements\":[[6,[37,1],[[32,0,[\"isLarge\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"  \"],[11,\"button\"],[24,0,\"image large\"],[24,4,\"button\"],[4,[38,0],[\"click\",[32,0,[\"toggleSize\"]]],null],[12],[2,\"\\n    \"],[10,\"img\"],[14,1,\"file-image\"],[14,\"src\",\"\"],[14,\"alt\",\"Preview\"],[14,0,\"hidden\"],[12],[13],[2,\"\\n  \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"  \"],[11,\"button\"],[24,0,\"image\"],[24,4,\"button\"],[4,[38,0],[\"click\",[32,0,[\"toggleSize\"]]],null],[12],[2,\"\\n    \"],[10,\"img\"],[14,1,\"file-image\"],[14,\"src\",\"\"],[14,\"alt\",\"Preview\"],[14,0,\"hidden\"],[12],[13],[2,\"\\n  \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"on\",\"if\"]}",
    "meta": {
      "moduleName": "chat-app/components/image-viewer.hbs"
    }
  });

  let ImageViewerComponent = (_dec = Ember._tracked, _dec2 = Ember._action, (_class = class ImageViewerComponent extends _component.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "isLarge", _descriptor, this);
    }

    toggleSize() {
      this.isLarge = !this.isLarge;
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "isLarge", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "toggleSize", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "toggleSize"), _class.prototype)), _class));
  _exports.default = ImageViewerComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, ImageViewerComponent);
});
;define("chat-app/components/logout", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <li class="list">
      <a {{action "logout"}} href="/" >
          <span class="icon">
              <ion-icon name="log-out-outline"></ion-icon>
          </span>
          <span class="text">Logout</span>
      </a>
  </li>
  */
  {
    "id": "KV/FF+Li",
    "block": "{\"symbols\":[],\"statements\":[[10,\"li\"],[14,0,\"list\"],[12],[2,\"\\n    \"],[11,\"a\"],[24,6,\"/\"],[4,[38,0],[[32,0],\"logout\"],null],[12],[2,\"\\n        \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n            \"],[10,\"ion-icon\"],[14,3,\"log-out-outline\"],[12],[13],[2,\"\\n        \"],[13],[2,\"\\n        \"],[10,\"span\"],[14,0,\"text\"],[12],[2,\"Logout\"],[13],[2,\"\\n    \"],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"action\"]}",
    "meta": {
      "moduleName": "chat-app/components/logout.hbs"
    }
  });

  let LogoutComponent = (_dec = Ember.inject.service, _dec2 = Ember._action, (_class = class LogoutComponent extends _component.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "router", _descriptor, this);
    }

    logout() {
      var dummy = this;
      $.ajax({
        type: "GET",
        url: "/chatapp/logout",
        data: {},
        dataType: "text",
        success: function (data) {
          localStorage.clear();
          dummy.router.transitionTo('index');
        },
        error: function (jqXHR, testStatus, errorThrown) {
          alert("Oops!!! Something went wrong... Please try later");
          console.log("error thrown: " + testStatus);
        }
      });
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "logout", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "logout"), _class.prototype)), _class));
  _exports.default = LogoutComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, LogoutComponent);
});
;define("chat-app/components/send-image", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    
  {{!--
  <form id="upload-image-form">
      <input id="file-upload" type="file" name="fileUpload" accept="image/*" />
      <label for="file-upload" id="file-drag">
          <img id="file-image" src="#" alt="Preview" class="hidden">
  
      </label>
  </form>
  
  
  
  <div id="drop-region" style="top: 30vh; height: 50vh; position: absolute; width: 100%;">
      <div id="image-preview"></div>
      <input type="file" dropzone="copy file:image/png file:image/jpg file:image/jpeg" />
  </div>
  
  <script>
      var dropRegion = document.getElementById("drop-region");
      var imagePreviewRegion = document.getElementById('image-preview');
      var fakeInput = document.createElement("input");
      fakeInput.type = "file";
      fakeInput.accept = "image/*";
      fakeInput.multiple = true;
      dropRegion.addEventListener('click', function () {
          fakeInput.click();
      });
  
  </script> --}}
  
  <script>
      var fileContent;
      function selectFile(event) {
          console.log("from select file function " + event.target.files[0].name);
          fileContent = event.target.files[0];
          if (fileContent) {
              const reader = new FileReader();
              const img = document.getElementById('file-image');
              var rawData = new Blob();
  
              reader.readAsDataURL(fileContent);
              reader.onload = function () {
                  img.src = reader.result;
                  rawData = reader.result;
                  console.log(rawData);
                  var byteArray = new Uint16Array(rawData);
                  const messageObject = {
                      type: "file",
                      body: rawData,
                      MimeType: fileContent.type,
                      fileName: fileContent.name
                  }
                  console.log(byteArray);
              }
              document.getElementById('image-display').classList.remove('hide');
  
          }
      }
  
  </script>
  */
  {
    "id": "/yJuE9wH",
    "block": "{\"symbols\":[],\"statements\":[[2,\"\\n\"],[2,\"\\n\"],[10,\"script\"],[12],[2,\"\\n    var fileContent;\\n    function selectFile(event) {\\n        console.log(\\\"from select file function \\\" + event.target.files[0].name);\\n        fileContent = event.target.files[0];\\n        if (fileContent) {\\n            const reader = new FileReader();\\n            const img = document.getElementById('file-image');\\n            var rawData = new Blob();\\n\\n            reader.readAsDataURL(fileContent);\\n            reader.onload = function () {\\n                img.src = reader.result;\\n                rawData = reader.result;\\n                console.log(rawData);\\n                var byteArray = new Uint16Array(rawData);\\n                const messageObject = {\\n                    type: \\\"file\\\",\\n                    body: rawData,\\n                    MimeType: fileContent.type,\\n                    fileName: fileContent.name\\n                }\\n                console.log(byteArray);\\n            }\\n            document.getElementById('image-display').classList.remove('hide');\\n\\n        }\\n    }\\n\\n\"],[13]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "chat-app/components/send-image.hbs"
    }
  });

  let SendImageComponent = (_dec = Ember._action, (_class = class SendImageComponent extends _component.default {
    uploadFile() {
      var file = document.getElementById('filename');
      ;
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
        success: function (data) {
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
        error: function (jqXHR, testStatus, errorThrown) {
          console.log("error thrown: " + testStatus);
        }
      });
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "uploadFile", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "uploadFile"), _class.prototype)), _class));
  _exports.default = SendImageComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, SendImageComponent);
});
;define("chat-app/components/send-request", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="request">
      <a {{action "sendRequest" @name}} href="#">
          <span class="icon" title="send request">
              <ion-icon name="paper-plane-outline"></ion-icon>
          </span>
      </a>
  </div>
  */
  {
    "id": "zzOLWKDt",
    "block": "{\"symbols\":[\"@name\"],\"statements\":[[10,\"div\"],[14,0,\"request\"],[12],[2,\"\\n    \"],[11,\"a\"],[24,6,\"#\"],[4,[38,0],[[32,0],\"sendRequest\",[32,1]],null],[12],[2,\"\\n        \"],[10,\"span\"],[14,0,\"icon\"],[14,\"title\",\"send request\"],[12],[2,\"\\n            \"],[10,\"ion-icon\"],[14,3,\"paper-plane-outline\"],[12],[13],[2,\"\\n        \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"action\"]}",
    "meta": {
      "moduleName": "chat-app/components/send-request.hbs"
    }
  });

  let SendRequestComponent = (_dec = Ember._action, (_class = class SendRequestComponent extends _component.default {
    sendRequest(name) {
      $.ajax({
        type: "POST",
        url: "/chatapp/sendrequest/" + name,
        data: {},
        dataType: "text",
        success: function (data) {
          var result = JSON.parse(data);

          if (result.status == 1) {
            document.getElementById('response').innerHTML = "<span class=\"icon\"><ion-icon name=\"checkmark\"></ion-icon></span>";
          } else {
            alert("Oops!!! Something went wrong... Please try later");
            console.log("request not sent");
          }
        },
        error: function (jqXHR, testStatus, errorThrown) {
          console.log("error thrown: " + testStatus);
        }
      });
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "sendRequest", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "sendRequest"), _class.prototype)), _class));
  _exports.default = SendRequestComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, SendRequestComponent);
});
;define("chat-app/components/sign-up", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <form>
      <div class="text-field">
          <input type="text" id="username" required>
          <span></span>
          <label>UserName:</label>
      </div>
      <div id="result"></div>
      <div class="text-field">
          <input type="password" id="password" required>
          <span></span>
          <label>Password:</label>
      </div>
      <div class="signup_link">
          <input {{action "buttonClick" }}type="submit" value="submit">
      </div>
  
  </form>
  */
  {
    "id": "Q8S+vtup",
    "block": "{\"symbols\":[],\"statements\":[[10,\"form\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"text-field\"],[12],[2,\"\\n        \"],[10,\"input\"],[14,1,\"username\"],[14,\"required\",\"\"],[14,4,\"text\"],[12],[13],[2,\"\\n        \"],[10,\"span\"],[12],[13],[2,\"\\n        \"],[10,\"label\"],[12],[2,\"UserName:\"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,1,\"result\"],[12],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"text-field\"],[12],[2,\"\\n        \"],[10,\"input\"],[14,1,\"password\"],[14,\"required\",\"\"],[14,4,\"password\"],[12],[13],[2,\"\\n        \"],[10,\"span\"],[12],[13],[2,\"\\n        \"],[10,\"label\"],[12],[2,\"Password:\"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"signup_link\"],[12],[2,\"\\n        \"],[11,\"input\"],[24,2,\"submit\"],[24,4,\"submit\"],[4,[38,0],[[32,0],\"buttonClick\"],null],[12],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"action\"]}",
    "meta": {
      "moduleName": "chat-app/components/sign-up.hbs"
    }
  });

  let SignUpCompComponent = (_dec = Ember.inject.service, _dec2 = Ember._action, (_class = class SignUpCompComponent extends _component.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "router", _descriptor, this);
    }

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
        success: function (data) {
          var result = JSON.parse(data);

          if (result.status == 1) {
            dummy.router.transitionTo('signinsuccess');
          } else {
            $('#result').html("username already exists!!! Please create a new one");
          }
        },
        error: function (jqXHR, testStatus, errorThrown) {
          console.log("error thrown: " + testStatus);
        }
      });
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "buttonClick", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "buttonClick"), _class.prototype)), _class));
  _exports.default = SignUpCompComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, SignUpCompComponent);
});
;define("chat-app/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("chat-app/controllers/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class IndexController extends Ember.Controller {// @service index;
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

  _exports.default = IndexController;
});
;define("chat-app/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("chat-app/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "and", {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
});
;define("chat-app/helpers/app-version", ["exports", "chat-app/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_) {
    let hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("chat-app/helpers/eq", ["exports", "ember-truth-helpers/helpers/equal"], function (_exports, _equal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(_exports, "equal", {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
;define("chat-app/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(_exports, "gt", {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
;define("chat-app/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(_exports, "gte", {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
;define("chat-app/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(_exports, "isArray", {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
;define("chat-app/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
});
;define("chat-app/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(_exports, "isEqual", {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
;define("chat-app/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(_exports, "lt", {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
;define("chat-app/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(_exports, "lte", {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
;define("chat-app/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-equal"], function (_exports, _notEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(_exports, "notEqualHelper", {
    enumerable: true,
    get: function () {
      return _notEqual.notEqualHelper;
    }
  });
});
;define("chat-app/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(_exports, "not", {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
;define("chat-app/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(_exports, "or", {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
;define("chat-app/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("chat-app/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("chat-app/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(_exports, "xor", {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
;define("chat-app/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "chat-app/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("chat-app/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }

  };
  _exports.default = _default;
});
;define("chat-app/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("chat-app/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("chat-app/initializers/export-application-global", ["exports", "chat-app/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("chat-app/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("chat-app/models/index", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class IndexModel extends _model.default {}

  _exports.default = IndexModel;
});
;define("chat-app/models/users", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor, _descriptor2;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let UsersModel = (_dec = attr('string'), _dec2 = attr('string'), (_class = class UsersModel extends _model.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "name", _descriptor, this);

      _initializerDefineProperty(this, "check", _descriptor2, this);
    }

    async model() {
      let value = await fetch('/chatapp/people');
      let parsed = await value.json();
      return parsed;
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "check", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = UsersModel;
});
;define("chat-app/router", ["exports", "chat-app/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor() {
      super(...arguments);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('index', {
      path: '/'
    });
    this.route('signup', {
      path: '/sign up'
    });
    this.route('chat', {
      path: '/chat/:chat_id'
    });
    this.route('welcome', {
      path: '/home'
    });
    this.route('friends', {
      path: '/friends'
    });
    this.route('people', {
      path: '/people'
    });
    this.route('signinsuccess', {
      path: '/success'
    });
    this.route('requests', {
      path: '/requests'
    });
    this.route('socket', {
      path: '/sock'
    });
  });
});
;define("chat-app/routes/chat", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor, _descriptor2;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ChatRoute = (_dec = Ember.inject.service, _dec2 = Ember.inject.service('index'), (_class = class ChatRoute extends Ember.Route {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "router", _descriptor, this);

      _initializerDefineProperty(this, "auth", _descriptor2, this);
    }

    model(params) {
      var dummy = this;
      const {
        chat_id
      } = params;
      var username = this.auth.getUser();
      localStorage.setItem('chat_id', chat_id);
      return fetch('/chatapp/chat/' + chat_id).then(function (response) {
        const isJson = response.headers.get('content-type').includes('application/json');
        const data = isJson ? response.json() : null;

        if (data == null) {
          dummy.router.transitionTo('index');
        }

        return data;
      }).then(function (json) {
        return {
          username,
          chat_id,
          json
        };
      });
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "auth", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ChatRoute;
});
;define("chat-app/routes/friends", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let FriendsRoute = (_dec = Ember.inject.service, (_class = class FriendsRoute extends Ember.Route {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "router", _descriptor, this);
    }

    async model() {
      var dummy = this;
      return fetch('/chatapp/friends').then(function (response) {
        const isJson = response.headers.get('content-type').includes('application/json');
        const data = isJson || response.data == "[]" ? response.json() : null;

        if (data == null) {
          dummy.router.transitionTo('index');
        }

        return data;
      }).then(function (json) {
        return json;
      });
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = FriendsRoute;
});
;define("chat-app/routes/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let IndexRoute = (_dec = Ember.inject.service, (_class = class IndexRoute extends Ember.Route {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "router", _descriptor, this);
    }

    async model() {
      var dummy = this;
      return fetch('/chatapp/checkSession').then(function (response) {
        const isHtml = response.headers.get('content-type').includes('application/json');
        const data = isHtml ? null : response.text();
        console.log("data is " + data);
        return data;
      }).then(function (text) {
        console.log(text);

        if (text == 1) {
          dummy.router.transitionTo('welcome');
        }

        return text;
      });
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = IndexRoute;
});
;define("chat-app/routes/people", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let PeopleRoute = (_dec = Ember.inject.service, (_class = class PeopleRoute extends Ember.Route {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "router", _descriptor, this);
    }

    async model() {
      var dummy = this;
      return fetch('/chatapp/people').then(function (response) {
        const isJson = response.headers.get('content-type')?.includes('application/json');
        const data = isJson ? response.json() : null;

        if (data == null) {
          dummy.router.transitionTo('index');
        }

        return data;
      }).then(function (json) {
        return json;
      });
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = PeopleRoute;
});
;define("chat-app/routes/requests", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let RequestsRoute = (_dec = Ember.inject.service, (_class = class RequestsRoute extends Ember.Route {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "router", _descriptor, this);
    }

    async model() {
      var dummy = this;
      return fetch('/chatapp/request').then(function (response) {
        const isJson = response.headers.get('content-type').includes('application/json');
        const data = isJson ? response.json() : null;

        if (data == null) {
          dummy.router.transitionTo('index');
        }

        return data;
      }).then(function (json) {
        return json;
      });
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = RequestsRoute;
});
;define("chat-app/routes/signinsuccess", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class SigninsuccessRoute extends Ember.Route {}

  _exports.default = SigninsuccessRoute;
});
;define("chat-app/routes/signup", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class SignupRoute extends Ember.Route {}

  _exports.default = SignupRoute;
});
;define("chat-app/routes/socket", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class SocketRoute extends Ember.Route {}

  _exports.default = SocketRoute;
});
;define("chat-app/routes/welcome", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let WelcomeRoute = (_dec = Ember.inject.service, (_class = class WelcomeRoute extends Ember.Route {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "router", _descriptor, this);
    }

    async model() {
      var dup_this = this;
      return fetch('/chatapp/welcome').then(function (response) {
        const isJson = response.headers.get('content-type').includes('application/json');
        const data = isJson ? response.json() : null;

        if (data == null) {
          dup_this.router.transitionTo('index');
        }

        return data;
      }).then(function (json) {
        return json;
      });
    } // console.log(value.length);
    // console.log(JSON.parse(value));
    // for(var i in value){
    //     console.log(i.type);
    // }
    // var {data} = await value.JSON.parse();
    // // let { data } = JSON.parse(ja);
    // // let { data } = await value.json();
    // // console.log(ja);
    // console.log(data);
    // return data?.map(model => {
    //     let { attributes } = model;
    //     return { ...attributes };
    // });
    // }


  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = WelcomeRoute;
});
;define("chat-app/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("chat-app/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("chat-app/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("chat-app/services/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let IndexService = (_dec = Ember.inject.service, _dec2 = Ember._action, _dec3 = Ember._action, _dec4 = Ember._action, (_class = class IndexService extends Ember.Service {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "router", _descriptor, this);
    }

    setUser(username) {
      localStorage.setItem('username', username);
      this.set('username', username);
      console.log("from setUSer " + this.get('username'));
      this.router.transitionTo('welcome');
    }

    getUser() {
      console.log("From service: " + this.get('username'));
      return this.get('username');
    }

    setRedirect(to) {
      console.log(to);
      this.router.transitionTo('chat', to);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "setUser", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "setUser"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getUser", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "getUser"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setRedirect", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "setRedirect"), _class.prototype)), _class));
  _exports.default = IndexService;
});
;define("chat-app/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("chat-app/templates/chat", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "eKd0p5pa",
    "block": "{\"symbols\":[\"msg\",\"@model\"],\"statements\":[[10,\"head\"],[12],[2,\"\\n    \"],[10,\"script\"],[14,\"src\",\"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js\"],[14,4,\"module\"],[12],[13],[2,\"\\n    \"],[10,\"script\"],[14,\"nomodule\",\"\"],[14,\"src\",\"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js\"],[12],[13],[2,\"\\n\\n\"],[13],[2,\"\\n\"],[10,\"div\"],[14,0,\"container\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"chatbox\"],[12],[2,\"\\n        \"],[10,\"div\"],[14,0,\"top-bar\"],[12],[2,\"\\n\"],[2,\"            \"],[10,\"div\"],[14,0,\"name\"],[12],[1,[35,2,[\"chat_id\"]]],[13],[2,\"\\n            \"],[8,\"link-to\",[],[[\"@route\"],[\"people\"]],[[\"default\"],[{\"statements\":[[2,\"\\n                \"],[10,\"img\"],[14,\"src\",\"../assets/images/back-icon2.png\"],[14,\"title\",\"go back to people\"],[14,\"alt\",\"people\"],[12],[13],[2,\"\\n\\n            \"]],\"parameters\":[]}]]],[2,\"\\n        \"],[13],[2,\"\\n        \"],[10,\"div\"],[14,0,\"middle\"],[14,1,\"scroll\"],[14,\"onload\",\"toBottom()\"],[12],[2,\"\\n            \"],[10,\"div\"],[14,0,\"msg\"],[12],[2,\"\\n\"],[6,[37,4],[[30,[36,3],[[30,[36,3],[[32,2,[\"json\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[6,[37,1],[[30,[36,0],[[32,1,[\"from\"]],[32,2,[\"chat_id\"]]],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"                \"],[10,\"div\"],[14,0,\"incoming\"],[12],[2,\"\\n                    \"],[10,\"div\"],[14,0,\"bubble\"],[12],[2,\"\\n\"],[6,[37,1],[[30,[36,0],[[32,1,[\"type\"]],\"text\"],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"                        \"],[1,[32,1,[\"message\"]]],[10,\"br\"],[12],[13],[2,\"\\n                        \"],[10,\"div\"],[14,0,\"datetime\"],[14,5,\"font-size:small;\"],[12],[2,\"\\n                            \"],[1,[32,1,[\"time\"]]],[2,\"\\n                        \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"                        \"],[10,\"div\"],[14,0,\"img-message\"],[12],[2,\"\\n                            \"],[10,\"img\"],[15,\"src\",[32,1,[\"message\"]]],[15,\"alt\",[32,1,[\"message\"]]],[12],[13],[2,\"\\n                        \"],[13],[2,\"\\n                        \"],[10,\"div\"],[14,0,\"datetime\"],[14,5,\"font-size:small;\"],[12],[2,\"\\n                            \"],[1,[32,1,[\"time\"]]],[2,\"\\n                        \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"                    \"],[13],[2,\"\\n                \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"                \"],[10,\"div\"],[14,0,\"outgoing\"],[12],[2,\"\\n                    \"],[10,\"div\"],[14,0,\"bubble\"],[12],[2,\"\\n\"],[6,[37,1],[[30,[36,0],[[32,1,[\"type\"]],\"text\"],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"                        \"],[1,[32,1,[\"message\"]]],[10,\"br\"],[12],[13],[2,\"\\n                        \"],[10,\"div\"],[14,0,\"datetime\"],[14,5,\"font-size:small;\"],[12],[2,\"\\n                            \"],[1,[32,1,[\"time\"]]],[2,\"\\n                        \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"                        \"],[10,\"div\"],[14,0,\"img-message\"],[12],[2,\"\\n                            \"],[10,\"img\"],[15,\"src\",[32,1,[\"message\"]]],[15,\"alt\",[32,1,[\"message\"]]],[12],[13],[2,\"\\n                        \"],[13],[2,\"\\n                        \"],[10,\"div\"],[14,0,\"datetime\"],[14,5,\"font-size:small;\"],[12],[2,\"\\n                            \"],[1,[32,1,[\"time\"]]],[2,\"\\n                        \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"                    \"],[13],[2,\"\\n\\n                \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[1]}]]],[2,\"                \"],[10,\"div\"],[14,1,\"newmsg\"],[12],[13],[2,\"\\n            \"],[13],[2,\"\\n        \"],[13],[2,\"\\n        \"],[8,\"chat-sender\",[],[[\"@name\"],[[34,2,[\"chat_id\"]]]],null],[2,\"\\n\\n    \"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[10,\"script\"],[12],[2,\"\\n    var object = document.getElementById(\\\"scroll\\\");\\n    object.scrollTop = object.scrollHeight;\\n\\n    var socket = new WebSocket(\\\"ws://127.0.0.1:8090/endpoint\\\");\\n    socket.binaryType = 'blob';\\n    var from = localStorage.getItem('username');\\n    var to = localStorage.getItem('chat_id');\\n    console.log(\\\"from : \\\" + localStorage.getItem('username'));\\n    console.log(\\\"to : \\\" + localStorage.getItem('chat_id'));\\n    socket.onopen = function () {\\n        console.log(\\\"socket connected\\\");\\n        socket.send(JSON.stringify({\\n            type: \\\"info\\\",\\n            from: from,\\n            to: to\\n        }))\\n    }\\n    console.log(\\\"Socket connected : \\\" + socket);\\n\\n\\n    socket.onmessage = function (event) {\\n        var date = new Date();\\n        var dt = date.toLocaleString();\\n        console.log(event.data);\\n        var data = JSON.parse(event.data);\\n        console.log(\\\"message: from \\\" + data.from + \\\" to \\\" + event.data.to);\\n        if(data.from == from && data.to == to){\\n            document.getElementById('newmsg').innerHTML += \\\"<div class=\\\\\\\"outgoing\\\\\\\"><div class=\\\\\\\"bubble\\\\\\\">\\\" + data.data + \\\"<div class=\\\\\\\"datetime\\\\\\\" style=\\\\\\\"font-size:small\\\\\\\">\\\" + dt + \\\"</div></div></div>\\\";\\n        }\\n        else\\n            document.getElementById('newmsg').innerHTML += \\\"<div class=\\\\\\\"incoming\\\\\\\"><div class=\\\\\\\"bubble\\\\\\\">\\\" + data.data + \\\"<div class=\\\\\\\"datetime\\\\\\\" style=\\\\\\\"font-size:small\\\\\\\">\\\" + dt + \\\"</div></div></div>\\\";\\n\\n        object.scrollTop = object.scrollHeight;\\n    }\\n\\n    socket.onerror = function(message) {\\n        alert(\\\"Error ...\\\" + message.code + \\\" \\\\n\\\");\\n    }\\n\"],[13],[2,\"\\n\\n\"],[10,\"link\"],[14,6,\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700\"],[14,\"rel\",\"stylesheet\"],[14,4,\"text/css\"],[12],[13]],\"hasEval\":false,\"upvars\":[\"eq\",\"if\",\"model\",\"-track-array\",\"each\"]}",
    "meta": {
      "moduleName": "chat-app/templates/chat.hbs"
    }
  });

  _exports.default = _default;
});
;define("chat-app/templates/friends", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "PuHHoqgb",
    "block": "{\"symbols\":[\"friend\",\"@model\"],\"statements\":[[10,\"head\"],[12],[2,\"\\n   \"],[10,\"script\"],[14,\"src\",\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"],[12],[13],[2,\"\\n  \"],[10,\"script\"],[14,\"src\",\"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js\"],[14,4,\"module\"],[12],[13],[2,\"\\n  \"],[10,\"script\"],[14,\"nomodule\",\"\"],[14,\"src\",\"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js\"],[12],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"div\"],[14,0,\"bg\"],[12],[2,\"\\n  \"],[10,\"h3\"],[12],[2,\"Chatty\"],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"navigation\"],[12],[2,\"\\n    \"],[10,\"ul\"],[12],[2,\"\\n      \"],[10,\"li\"],[14,0,\"list\"],[12],[2,\"\\n        \"],[8,\"link-to\",[],[[\"@route\"],[\"welcome\"]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n            \"],[10,\"ion-icon\"],[14,3,\"home-outline\"],[12],[13],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"span\"],[14,0,\"text\"],[12],[2,\"Home\"],[13],[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n      \"],[13],[2,\"\\n\\n      \"],[10,\"li\"],[14,0,\"list\"],[12],[2,\"\\n        \"],[8,\"link-to\",[],[[\"@route\"],[\"requests\"]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n            \"],[10,\"ion-icon\"],[14,3,\"person-add-outline\"],[12],[13],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"span\"],[14,0,\"text\"],[12],[2,\"Requests\"],[13],[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n      \"],[13],[2,\"\\n\\n      \"],[10,\"li\"],[14,0,\"list active\"],[12],[2,\"\\n        \"],[8,\"link-to\",[],[[\"@route\"],[\"friends\"]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n            \"],[10,\"ion-icon\"],[14,3,\"person-outline\"],[12],[13],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"span\"],[14,0,\"text\"],[12],[2,\"Friends\"],[13],[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n      \"],[13],[2,\"\\n\\n      \"],[10,\"li\"],[14,0,\"list\"],[12],[2,\"\\n        \"],[8,\"link-to\",[],[[\"@route\"],[\"people\"]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n            \"],[10,\"ion-icon\"],[14,3,\"people-outline\"],[12],[13],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"span\"],[14,0,\"text\"],[12],[2,\"People\"],[13],[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n      \"],[13],[2,\"\\n      \"],[8,\"logout\",[],[[],[]],null],[2,\"\\n      \"],[10,\"div\"],[14,0,\"indicator\"],[12],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"div\"],[14,0,\"box\"],[12],[2,\"\\n  \"],[10,\"h3\"],[12],[2,\"\\n    Your Friends\\n  \"],[13],[2,\"\\n  \"],[10,\"ul\"],[14,0,\"people\"],[12],[2,\"\\n\"],[6,[37,1],[[30,[36,0],[[30,[36,0],[[32,2]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"li\"],[14,0,\"person\"],[12],[2,\"\\n      \"],[10,\"span\"],[14,0,\"title\"],[12],[1,[32,1,[\"name\"]]],[13],[2,\"\\n      \"],[8,\"link-to\",[],[[\"@route\",\"@model\"],[\"chat\",[32,1,[\"name\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n          \"],[10,\"ion-icon\"],[14,3,\"chatbubble-ellipses-outline\"],[12],[13],[2,\"\\n        \"],[13],[2,\"\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\"  \"],[13],[2,\"\\n\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"-track-array\",\"each\"]}",
    "meta": {
      "moduleName": "chat-app/templates/friends.hbs"
    }
  });

  _exports.default = _default;
});
;define("chat-app/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "HXeNU94M",
    "block": "{\"symbols\":[],\"statements\":[[10,\"head\"],[12],[2,\"\\n    \"],[10,\"script\"],[14,\"src\",\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"],[12],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"div\"],[14,0,\"center\"],[12],[2,\"\\n    \"],[10,\"h1\"],[12],[2,\"Chatty\"],[13],[2,\"\\n    \"],[8,\"auth\",[],[[],[]],[[\"default\"],[{\"statements\":[],\"parameters\":[]}]]],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "chat-app/templates/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("chat-app/templates/people", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "0y2f1COf",
    "block": "{\"symbols\":[\"friend\",\"@model\"],\"statements\":[[10,\"head\"],[12],[2,\"\\n     \"],[10,\"script\"],[14,\"src\",\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"],[12],[13],[2,\"\\n    \"],[10,\"script\"],[14,\"src\",\"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js\"],[14,4,\"module\"],[12],[13],[2,\"\\n    \"],[10,\"script\"],[14,\"nomodule\",\"\"],[14,\"src\",\"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js\"],[12],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"div\"],[14,0,\"bg\"],[12],[2,\"\\n    \"],[10,\"h3\"],[12],[2,\"Chatty\"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"navigation\"],[12],[2,\"\\n        \"],[10,\"ul\"],[12],[2,\"\\n            \"],[10,\"li\"],[14,0,\"list\"],[12],[2,\"\\n                \"],[8,\"link-to\",[],[[\"@route\"],[\"welcome\"]],[[\"default\"],[{\"statements\":[[2,\"\\n                    \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n                        \"],[10,\"ion-icon\"],[14,3,\"home-outline\"],[12],[13],[2,\"\\n                    \"],[13],[2,\"\\n                    \"],[10,\"span\"],[14,0,\"text\"],[12],[2,\"Home\"],[13],[2,\"\\n                \"]],\"parameters\":[]}]]],[2,\"\\n            \"],[13],[2,\"\\n\\n            \"],[10,\"li\"],[14,0,\"list\"],[12],[2,\"\\n                \"],[8,\"link-to\",[],[[\"@route\"],[\"requests\"]],[[\"default\"],[{\"statements\":[[2,\"\\n                    \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n                        \"],[10,\"ion-icon\"],[14,3,\"person-add-outline\"],[12],[13],[2,\"\\n                    \"],[13],[2,\"\\n                    \"],[10,\"span\"],[14,0,\"text\"],[12],[2,\"Requests\"],[13],[2,\"\\n                \"]],\"parameters\":[]}]]],[2,\"\\n            \"],[13],[2,\"\\n\\n            \"],[10,\"li\"],[14,0,\"list\"],[12],[2,\"\\n                \"],[8,\"link-to\",[],[[\"@route\"],[\"friends\"]],[[\"default\"],[{\"statements\":[[2,\"\\n                    \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n                        \"],[10,\"ion-icon\"],[14,3,\"person-outline\"],[12],[13],[2,\"\\n                    \"],[13],[2,\"\\n                    \"],[10,\"span\"],[14,0,\"text\"],[12],[2,\"Friends\"],[13],[2,\"\\n                \"]],\"parameters\":[]}]]],[2,\"\\n            \"],[13],[2,\"\\n\\n            \"],[10,\"li\"],[14,0,\"list active\"],[12],[2,\"\\n                \"],[8,\"link-to\",[],[[\"@route\"],[\"people\"]],[[\"default\"],[{\"statements\":[[2,\"\\n                    \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n                        \"],[10,\"ion-icon\"],[14,3,\"people-outline\"],[12],[13],[2,\"\\n                    \"],[13],[2,\"\\n                    \"],[10,\"span\"],[14,0,\"text\"],[12],[2,\"People\"],[13],[2,\"\\n                \"]],\"parameters\":[]}]]],[2,\"\\n            \"],[13],[2,\"\\n            \"],[8,\"logout\",[],[[],[]],null],[2,\"\\n            \"],[10,\"div\"],[14,0,\"indicator\"],[12],[13],[2,\"\\n        \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"div\"],[14,0,\"box\"],[12],[2,\"\\n    \"],[10,\"h3\"],[12],[2,\"\\n        People\\n    \"],[13],[2,\"\\n    \"],[10,\"ul\"],[14,0,\"people\"],[12],[2,\"\\n\"],[6,[37,3],[[30,[36,2],[[30,[36,2],[[32,2]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"li\"],[14,0,\"person\"],[12],[2,\"\\n\\n            \"],[10,\"span\"],[14,0,\"title\"],[12],[1,[32,1,[\"name\"]]],[13],[2,\"\\n\"],[6,[37,1],[[30,[36,0],[[32,1,[\"type\"]],\"3\"],null]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[8,\"link-to\",[],[[\"@route\",\"@model\"],[\"chat\",[32,1,[\"name\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n                \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n                    \"],[10,\"ion-icon\"],[14,3,\"chatbubble-ellipses-outline\"],[12],[13],[2,\"\\n                \"],[13],[2,\"\\n            \"]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[]}]]],[6,[37,1],[[30,[36,0],[[32,1,[\"type\"]],\"2\"],null]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[8,\"accept-request\",[],[[\"@name\"],[[32,1,[\"name\"]]]],null],[2,\"\\n\"]],\"parameters\":[]}]]],[6,[37,1],[[30,[36,0],[[32,1,[\"type\"]],\"4\"],null]],null,[[\"default\"],[{\"statements\":[[2,\"            Request sent\\n\"]],\"parameters\":[]}]]],[6,[37,1],[[30,[36,0],[[32,1,[\"type\"]],\"1\"],null]],null,[[\"default\"],[{\"statements\":[[2,\"                \"],[8,\"send-request\",[],[[\"@name\"],[[32,1,[\"name\"]]]],null],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"        \"],[13],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\"    \"],[13],[2,\"\\n\\n\"],[13],[2,\"\\n\\n\"],[10,\"script\"],[12],[2,\"\\n    var lis = document.getElementsByClassName(\\\"people\\\").item(1);\\n    var len = lis.length;\\n    console.log(len);\\n    console.log(lis[0]);\\n    for(var i=0; i<len; i++){\\n        var li = lis[i];\\n    }\\n\"],[13],[2,\"\\n\\n\"]],\"hasEval\":false,\"upvars\":[\"eq\",\"if\",\"-track-array\",\"each\"]}",
    "meta": {
      "moduleName": "chat-app/templates/people.hbs"
    }
  });

  _exports.default = _default;
});
;define("chat-app/templates/requests", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "+q5EVGuv",
    "block": "{\"symbols\":[\"friend\",\"@model\"],\"statements\":[[10,\"head\"],[12],[2,\"\\n    \"],[10,\"script\"],[14,\"src\",\"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js\"],[14,4,\"module\"],[12],[13],[2,\"\\n    \"],[10,\"script\"],[14,\"nomodule\",\"\"],[14,\"src\",\"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js\"],[12],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"div\"],[14,0,\"bg\"],[12],[2,\"\\n    \"],[10,\"h3\"],[12],[2,\"Chatty\"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"navigation\"],[12],[2,\"\\n        \"],[10,\"ul\"],[12],[2,\"\\n            \"],[10,\"li\"],[14,0,\"list\"],[12],[2,\"\\n                \"],[8,\"link-to\",[],[[\"@route\"],[\"welcome\"]],[[\"default\"],[{\"statements\":[[2,\"\\n                    \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n                        \"],[10,\"ion-icon\"],[14,3,\"home-outline\"],[12],[13],[2,\"\\n                    \"],[13],[2,\"\\n                    \"],[10,\"span\"],[14,0,\"text\"],[12],[2,\"Home\"],[13],[2,\"\\n                \"]],\"parameters\":[]}]]],[2,\"\\n            \"],[13],[2,\"\\n\\n            \"],[10,\"li\"],[14,0,\"list active\"],[12],[2,\"\\n                \"],[8,\"link-to\",[],[[\"@route\"],[\"requests\"]],[[\"default\"],[{\"statements\":[[2,\"\\n                    \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n                        \"],[10,\"ion-icon\"],[14,3,\"person-add-outline\"],[12],[13],[2,\"\\n                    \"],[13],[2,\"\\n                    \"],[10,\"span\"],[14,0,\"text\"],[12],[2,\"Requests\"],[13],[2,\"\\n                \"]],\"parameters\":[]}]]],[2,\"\\n            \"],[13],[2,\"\\n\\n            \"],[10,\"li\"],[14,0,\"list\"],[12],[2,\"\\n                \"],[8,\"link-to\",[],[[\"@route\"],[\"friends\"]],[[\"default\"],[{\"statements\":[[2,\"\\n                    \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n                        \"],[10,\"ion-icon\"],[14,3,\"person-outline\"],[12],[13],[2,\"\\n                    \"],[13],[2,\"\\n                    \"],[10,\"span\"],[14,0,\"text\"],[12],[2,\"Friends\"],[13],[2,\"\\n                \"]],\"parameters\":[]}]]],[2,\"\\n            \"],[13],[2,\"\\n\\n            \"],[10,\"li\"],[14,0,\"list\"],[12],[2,\"\\n                \"],[8,\"link-to\",[],[[\"@route\"],[\"people\"]],[[\"default\"],[{\"statements\":[[2,\"\\n                    \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n                        \"],[10,\"ion-icon\"],[14,3,\"people-outline\"],[12],[13],[2,\"\\n                    \"],[13],[2,\"\\n                    \"],[10,\"span\"],[14,0,\"text\"],[12],[2,\"People\"],[13],[2,\"\\n                \"]],\"parameters\":[]}]]],[2,\"\\n            \"],[13],[2,\"\\n            \"],[8,\"logout\",[],[[],[]],null],[2,\"\\n            \"],[10,\"div\"],[14,0,\"indicator\"],[12],[13],[2,\"\\n        \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"div\"],[14,0,\"box\"],[12],[2,\"\\n    \"],[10,\"h3\"],[12],[2,\"\\n        Your Requests\\n    \"],[13],[2,\"\\n    \"],[10,\"ul\"],[14,0,\"people\"],[12],[2,\"\\n\"],[6,[37,1],[[30,[36,0],[[30,[36,0],[[32,2]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"li\"],[14,0,\"person\"],[12],[2,\"\\n            \"],[10,\"div\"],[14,1,\"accept\"],[12],[2,\"\\n                \"],[10,\"span\"],[14,0,\"title\"],[12],[1,[32,1,[\"name\"]]],[13],[2,\"\\n                \"],[8,\"accept-request\",[],[[\"@name\"],[[32,1,[\"name\"]]]],null],[2,\"\\n\"],[2,\"            \"],[13],[2,\"\\n\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\"    \"],[13],[2,\"\\n\\n\"],[13],[2,\"\\n\\n\"],[10,\"script\"],[12],[2,\"\\n    function accept(event){\\n        console.log(\\\"from accept() function\\\");\\n        var change = event.target;\\n        console.log(change);\\n    }\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"-track-array\",\"each\"]}",
    "meta": {
      "moduleName": "chat-app/templates/requests.hbs"
    }
  });

  _exports.default = _default;
});
;define("chat-app/templates/signinsuccess", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "RCXHEwk8",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"center\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,1,\"center\"],[12],[2,\"\\n        \"],[10,\"br\"],[12],[13],[2,\"\\n        \"],[10,\"img\"],[14,\"src\",\"../assets/images/tick2.jpg\"],[14,\"alt\",\"success\"],[12],[13],[2,\"\\n        \"],[10,\"h3\"],[12],[2,\"Your account created successfully!!!\"],[13],[2,\"\\n        \"],[10,\"h5\"],[12],[2,\"Now you are a new member:)\"],[13],[2,\"\\n        \"],[10,\"div\"],[14,0,\"signup_link\"],[12],[2,\"\\n            \"],[8,\"link-to\",[],[[\"@route\"],[\"index\"]],[[\"default\"],[{\"statements\":[[2,\"Click me to go to login page\"]],\"parameters\":[]}]]],[2,\"\\n        \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n\"],[13]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "chat-app/templates/signinsuccess.hbs"
    }
  });

  _exports.default = _default;
});
;define("chat-app/templates/signup", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "5pHZzEj6",
    "block": "{\"symbols\":[],\"statements\":[[10,\"head\"],[12],[2,\"\\n    \"],[10,\"script\"],[14,\"src\",\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"],[12],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"div\"],[14,0,\"center\"],[12],[2,\"\\n\\t\"],[10,\"h1\"],[12],[2,\"SignUp\"],[13],[2,\"\\n    \"],[8,\"sign-up\",[],[[],[]],null],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "chat-app/templates/signup.hbs"
    }
  });

  _exports.default = _default;
});
;define("chat-app/templates/socket", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "MmaAtyOm",
    "block": "{\"symbols\":[],\"statements\":[[10,\"head\"],[12],[2,\"\\n    \"],[10,\"script\"],[14,\"src\",\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"],[12],[13],[2,\"\\n    \"],[10,\"script\"],[14,\"src\",\"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js\"],[14,4,\"module\"],[12],[13],[2,\"\\n    \"],[10,\"script\"],[14,\"nomodule\",\"\"],[14,\"src\",\"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js\"],[12],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[8,\"chat-sender\",[],[[\"@name\"],[\"gfh\"]],null],[2,\"\\n\\n\"]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "chat-app/templates/socket.hbs"
    }
  });

  _exports.default = _default;
});
;define("chat-app/templates/welcome", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "pQy0/dSK",
    "block": "{\"symbols\":[\"@model\"],\"statements\":[[10,\"head\"],[12],[2,\"\\n  \"],[10,\"script\"],[14,\"src\",\"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js\"],[14,4,\"module\"],[12],[13],[2,\"\\n  \"],[10,\"script\"],[14,\"nomodule\",\"\"],[14,\"src\",\"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js\"],[12],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"link\"],[14,6,\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700\"],[14,\"rel\",\"stylesheet\"],[14,4,\"text/css\"],[12],[13],[2,\"\\n\"],[10,\"div\"],[14,0,\"bg\"],[12],[2,\"\\n  \"],[10,\"h3\"],[12],[2,\"Chatty\"],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"navigation\"],[12],[2,\"\\n    \"],[10,\"ul\"],[12],[2,\"\\n      \"],[10,\"li\"],[14,0,\"list active\"],[12],[2,\"\\n        \"],[10,\"a\"],[14,6,\"#\"],[12],[2,\"\\n          \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n            \"],[10,\"ion-icon\"],[14,3,\"home-outline\"],[12],[13],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"span\"],[14,0,\"text\"],[12],[2,\"Home\"],[13],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n\\n      \"],[10,\"li\"],[14,0,\"list\"],[12],[2,\"\\n        \"],[8,\"link-to\",[],[[\"@route\"],[\"requests\"]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n            \"],[10,\"ion-icon\"],[14,3,\"person-add-outline\"],[12],[13],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"span\"],[14,0,\"text\"],[12],[2,\"Requests\"],[13],[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n      \"],[13],[2,\"\\n\\n      \"],[10,\"li\"],[14,0,\"list\"],[12],[2,\"\\n        \"],[8,\"link-to\",[],[[\"@route\"],[\"friends\"]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n            \"],[10,\"ion-icon\"],[14,3,\"person-outline\"],[12],[13],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"span\"],[14,0,\"text\"],[12],[2,\"Friends\"],[13],[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n      \"],[13],[2,\"\\n\\n      \"],[10,\"li\"],[14,0,\"list\"],[12],[2,\"\\n        \"],[8,\"link-to\",[],[[\"@route\"],[\"people\"]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[10,\"span\"],[14,0,\"icon\"],[12],[2,\"\\n            \"],[10,\"ion-icon\"],[14,3,\"people-outline\"],[12],[13],[2,\"\\n          \"],[13],[2,\"\\n          \"],[10,\"span\"],[14,0,\"text\"],[12],[2,\"People\"],[13],[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n      \"],[13],[2,\"\\n      \"],[8,\"logout\",[],[[],[]],null],[2,\"\\n      \"],[10,\"div\"],[14,0,\"indicator\"],[12],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[10,\"div\"],[14,0,\"box\"],[12],[2,\"\\n    Hii, \"],[1,[32,1,[\"username\"]]],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[10,\"script\"],[14,\"src\",\"https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js\"],[12],[13],[2,\"\\n\\n\\n\\n\\n\"],[3,\"<div id=\\\"chatbox\\\">\\n    <div id=\\\"friendslist\\\">\\n        <div id=\\\"friends\\\">\\n            <div class=\\\"friend\\\">\\n\\n                <p>\\n                    <strong>Miro Badev</strong>\\n                    <span>mirobadev@gmail.com</span>\\n                </p>\\n            </div>\\n            <div id=\\\"search\\\">\\n                <input type=\\\"text\\\" id=\\\"searchfield\\\" value=\\\"Search contacts...\\\" />\\n            </div>\\n\\n        </div>\\n\\n    </div>\\n    \\n</div>\\n!\"],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "chat-app/templates/welcome.hbs"
    }
  });

  _exports.default = _default;
});
;define("chat-app/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("chat-app/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("chat-app/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("chat-app/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('chat-app/config/environment', [], function() {
  var prefix = 'chat-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("chat-app/app")["default"].create({"name":"chat-app","version":"0.0.0+ed03deba"});
          }
        
//# sourceMappingURL=chat-app.map
