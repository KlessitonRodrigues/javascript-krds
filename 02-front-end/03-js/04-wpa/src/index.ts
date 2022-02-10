import './serviceWorker'

const root = document.getElementById("root");

function render(el: HTMLElement) {
  root.appendChild(el);
}

const div = document.createElement("div");

div.innerHTML = `TEST`;

render(div);
