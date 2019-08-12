//const CLIENT_ID = {CLIENT_ID};
//const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];
const API_KEY = 'AIzaSyAONVephJiOij7ryDiKQ-_RZ6p6Wvi4sLQ';
const PL_PODCAST = 'PLmSkFzJxyNCIpVdhtdl5WBxnca7xwg3rM';
const PL_REVIEW = 'PLmSkFzJxyNCIi21LboIt_SblqXuvnin9F';
const PL_GAMEPLAY = 'PLmSkFzJxyNCJdVQ4mZ_sz7O6dFnHCYGz8';

var pl_podcastR;
var pl_reviewR;
var pl_gameplayR;

function start() {
  console.log('inicializando');
  gapi.client.init({
    apiKey: 'AIzaSyAONVephJiOij7ryDiKQ-_RZ6p6Wvi4sLQ',
    discoveryDocs:DISCOVERY_DOCS
    //clientId: CLIENT_ID,
    //scope: SCOPES
  }).then(function(){

    console.log('inicializado req 1');
    console.log('executando');
    return gapi.client.youtube.playlistItems.list({
      playlistId: PL_PODCAST,
      part: 'snippet',
      maxResults: 50 
    });

  }).then(function(response){
    console.log(response);
    pl_podcastR = response.result;
    console.log('sucessifuly req 1:podcast');

  }, function(reason){
      console.log('error'+reason);

  }).then(function(){

    console.log('inicializado req 2');

    return gapi.client.youtube.playlistItems.list({
      playlistId: PL_REVIEW,
      part: 'snippet',
      maxResults: 50 
    });

    }).then(function(response){
      console.log(response);
      pl_reviewR = response.result;
      console.log('sucessifuly req 2:review');

    }, function(reason){
        console.log('error'+reason);

    }).then(function(){
      console.log('inicializado req 3');

      return gapi.client.youtube.playlistItems.list({
        playlistId: PL_GAMEPLAY,
        part: 'snippet',
        maxResults: 50 
      });

    }).then(function(response){
      pl_gameplayR = response.result;
      console.log('sucessifuly req 3:gameplay');

    }, function(reason){
        console.log('error'+reason);

  });

}

// 1. Load the JavaScript client library.
gapi.load('client', start);
