function registerSelf() {
  return fetch("http://guestbook.example.com/register", {
    method: 'POST',
    body: {
      firstName: "Jason",
      registryMessage: "Hello, this is my message to the registry"
    }
  })
  .then(function(result) => {
    return result.json();
  }).then(function(json) {
    return json.message;
  });
}