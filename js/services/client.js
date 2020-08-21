import { getCookie } from './helper';

let session;
let socket;

async function getSessionAndCockies() {
  console.log('Checking for humanbios-session cookie...');
  const cookieSession = getCookie('humanbios-session');
  if (cookieSession) {
    session = cookieSession;
    console.log('Found humanbios-session cookie:', session);
    return;
  }

  console.log('Requesting Session...');
  const response = await fetch(
    'https://websocket.kittyandrew.dev/api/get_session',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    }
  );
  const json = await response.json();
  session = json.session;
  document.cookie = `humanbios-session=${session}`;
  console.log('Received Session from Server:', session);
}

export async function setupWebsocket(callbackOnMessage) {
  await getSessionAndCockies();

  const websockedUrl = 'wss://websocket.kittyandrew.dev/api/messages';
  socket = new WebSocket(websockedUrl);

  // Connection opened callback
  socket.addEventListener('open', function (event) {
    console.log('Received open event:', event);
    console.log('Sending start event with session:', session);
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
