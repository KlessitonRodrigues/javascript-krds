const websoket = new WebSocket("ws://localhost:3001");

websoket.onopen = (ev: Event) => {
  websoket.send("test msg");
};

websoket.onmessage = (ev: MessageEvent) => {
  console.log(ev.data);
};
