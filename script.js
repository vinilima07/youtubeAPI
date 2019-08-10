//const CLIENT_ID = {CLIENT_ID};
//const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];
const API_KEY = 'AIzaSyAONVephJiOij7ryDiKQ-_RZ6p6Wvi4sLQ';

function start() {
  console.log('inicializando');
  gapi.client.init({
    apiKey: 'AIzaSyAONVephJiOij7ryDiKQ-_RZ6p6Wvi4sLQ',
    discoveryDocs:DISCOVERY_DOCS
    //clientId: CLIENT_ID,
    //scope: SCOPES
  }).then(function(){

    console.log('inicializado');
    console.log('executando');
    return gapi.client.youtube.playlistItems.list({
      playlistId: 'PLmSkFzJxyNCIi21LboIt_SblqXuvnin9F',
      part: 'snippet',
      maxResults: 50 
    });

  }).then(function(response){
      console.log('sucessifuly');
      console.log(response);
      console.log(response.result.items[0].snippet.title);
  }, function(reason){
      console.log('error'+reason);
  });

}

// 1. Load the JavaScript client library.
gapi.load('client', start);
