function start() {
  // 2. Initialize the JavaScript client library.
  gapi.client.init({
    'apiKey': 'AIzaSyDPMc7rarDn1pgZCiRM-w6j_p1PcdH20JI',
    // clientId and scope are optional if auth is not required.
    'clientId': '269881579810-t5ovj6nm8ir2i7iokjo2glr8s79da57b.apps.googleusercontent.com',
    'scope': 'https://www.googleapis.com/auth/youtube',
  }).then(function() {
    // 3. Initialize and make the API request.
    return gapi.client.request({
      'path': 'https://people.googleapis.com/v1/people/me?requestMask.includeField=person.names',
    })
  }).then(function(response) {
    console.log(response.result);
  }, function(reason) {
    console.log('Error: ' + reason.result.error.message);
  });
};
// 1. Load the JavaScript client library.
gapi.load('client', start);
