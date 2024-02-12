async function getYTData() {
  const response = await fetch(
    "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=PLD5kU-aj1V_CqjEVo7gxSUR7dImHI94RR&key=AIzaSyCtwPR1kRopAoGgWv7mM0sA9XFl3LjRQ9U"
  );
  const jsonData = await response.json();
  console.log(jsonData);
}

getYTData();

const snippet = {
  snippet: {
    playlistId: "PLD5kU-aj1V_CqjEVo7gxSUR7dImHI94RR",
    resourceId: {
      videoId: "PiB9jKjqDG8",
    },
  },
};

async function testRequest() {
  let requestBody = { data: snippet };

  const response = await fetch(
    "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=PLD5kU-aj1V_CqjEVo7gxSUR7dImHI94RR&key=AIzaSyCtwPR1kRopAoGgWv7mM0sA9XFl3LjRQ9U",
    {
      method: "POST",
      body: JSON.stringify(snippet),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization:
          "Bearer 531413372347-d537hdfl72fn2870ouvjlu6njqupii9b.apps.googleusercontent.com",
        Accept: "application/json",
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

testRequest();
