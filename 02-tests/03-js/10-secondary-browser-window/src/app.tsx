import { createRoot } from "react-dom/client";

const createNewBrowserWindow = () => {
  const win = window.open("", "_blank", "width=1280,height=720");
  console.log(win);
  // win?.location.replace("http://localhost:5173/");
  win?.addEventListener("click", (ev) => console.log("click", ev));
  /*
  const iframe = window.document.createElement("iframe");
  iframe.width = "800";
  iframe.height = "600";
  iframe.src = "http://localhost:5173/";
  win?.document.body.appendChild(iframe);
  */
};

const App = () => {
  return (
    <div>
      <button type="button" onClick={createNewBrowserWindow}>
        NEW WINDOW
      </button>
    </div>
  );
};

const rootEl = document.getElementById("root");
if (rootEl) createRoot(rootEl).render(<App />);
