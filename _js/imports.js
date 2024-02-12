import "https://apis.google.com/js/api.js/";

/**
 * Sample JavaScript code for youtube.playlistItems.insert
 * See instructions for running APIs Explorer code samples locally:
 * https://developers.google.com/explorer-help/code-samples#javascript
 */

const api_key = "AIzaSyCtwPR1kRopAoGgWv7mM0sA9XFl3LjRQ9U";
const my_client_id =
  "531413372347-d537hdfl72fn2870ouvjlu6njqupii9b.apps.googleusercontent.com";

function authenticate() {
  return gapi.auth2
    .getAuthInstance()
    .signIn({
      scope: "https://www.googleapis.com/auth/youtube.force-ssl",
    })
    .then(
      function () {
        console.log("Sign-in successful");
      },
      function (err) {
        console.error("Error signing in", err);
      }
    );
}
function loadClient() {
  gapi.client.setApiKey(api_key);
  return gapi.client
    .load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
    .then(
      function () {
        console.log("GAPI client loaded for API");
      },
      function (err) {
        console.error("Error loading GAPI client for API", err);
      }
    );
}
// Make sure the client is loaded and sign-in is complete before calling this method.
function execute() {
  return gapi.client.youtube.playlistItems
    .insert({
      part: ["snippet"],
      resource: {
        snippet: {
          playlistId: "PLD5kU-aj1V_CqjEVo7gxSUR7dImHI94RR",
          resourceId: {
            videoId: "PiB9jKjqDG8",
          },
        },
      },
    })
    .then(
      function (response) {
        // Handle the results here (response.result has the parsed body).
        console.log("Response", response);
      },
      function (err) {
        console.error("Execute error", err);
      }
    );
}
gapi.load("client:auth2", function () {
  gapi.auth2.init({ client_id: my_client_id });
});

const snippet = {
  snippet: {
    playlistId: "PLD5kU-aj1V_CqjEVo7gxSUR7dImHI94RR",
    resourceId: {
      videoId: "PiB9jKjqDG8",
    },
  },
};

async function testRequest() {
  //   let inputVal = document.getElementById("myInput").value;
  let requestBody = { data: snippet };

  const response = await fetch(
    "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyCtwPR1kRopAoGgWv7mM0sA9XFl3LjRQ9U",
    {
      method: "POST",
      body: JSON.stringify(snippet),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    }
  );

  alertResponse(response);
}

async function alertResponse(response) {
  if (response.ok) {
    const textData = await response.text();
    alert(textData);
  } else {
    alert(
      "The request returned a status other than 200 OK: " + response.status
    );
  }
}

let authBtn = document.getElementById("auth");
authBtn.addEventListener("click", authenticate().then(loadClient));

onclick = "authenticate().then(loadClient)";

testRequest();
