const testVar = {};

function testFunc() {
  return "hi";
}

function registerSelf() {
  return fetch("http://guestbook.example.com/register", {
    method: "POST",
    body: {
      firstName: "Jessica",
      registryMessage: "Registered"
    }
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      return json.message;
    });
}

let formData = {
  firstName: "Jessica",
  registryMessage: "This is a message"
};

let configObj = {
  method: "POST",
  body: formData
};

function errorSelf() {
  return fetch("http://guestbook.example.com/register-error", configObj)
    .then(function(res) {
      return res.json();
    })
    .then(function(json) {
      return json.messsage;
    })
    .catch(function(x) {
      return ":(";
    });
}