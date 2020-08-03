let session;
let socket;

function getSessionAndCockies() {
  fetch('https://test.kittyandrew.dev/api/get_session', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      session = json.session;
      console.log(session);
    });
}

export function setupWebsocket(callbackOnMessage) {
  getSessionAndCockies();

  const websockedUrl = 'wss://test.kittyandrew.dev/api/messages';
  socket = new WebSocket(websockedUrl);
  // Connection opened callback
  socket.addEventListener('open', function (event) {
    console.log(event, session);
    socket.send(JSON.stringify({ event: 'start', session: session }));
  });

  socket.addEventListener('close', (event) => {
    console.log('The connection has been closed successfully.');
  });

  // Listen for incomming events
  socket.addEventListener('message', function (event) {
    let data = JSON.parse(event.data);
    if (data.event == 'new_message') {
      console.log(data);
      callbackOnMessage(data);
    }
  });
}

// Sends messages to the socket
export function sendMessage(text) {
  socket.send(
    JSON.stringify({ event: 'new_message', message: { text: text } })
  );
}
