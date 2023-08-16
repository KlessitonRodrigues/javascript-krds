import { createRoot } from "react-dom/client";
import Editor from "./editor";

const App = () => {
  return <Editor />;
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);

//const script = document.createElement("script");
//script.type = "text/babel";
//script.innerHTML = jsx;
//document.body.appendChild(script);

/*
 <CodePreview
        jsCode={jsx}
        packages={[
          "https://unpkg.com/babel-standalone@6/babel.min.js",
          "https://unpkg.com/react@16/umd/react.development.js",
          "https://unpkg.com/react-dom@16/umd/react-dom.development.js",
        ]}
      />
*/

const injectScript = () => {
  const b = new Blob(["console.log('BLOB')"], { type: "text/javascript" });
  const u = URL.createObjectURL(b);
  const s = document.createElement("script");
  s.src = u;
  document.body.appendChild(s);
};
