import { useEffect, useState } from "react";
import AceEditor from "react-ace";
// import brace from 'brace';
//import "brace/mode/jsx";
//import "brace/theme/tomorrow";
import "ace-builds/src-noconflict/mode-tsx";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-error_marker";
import CodePreview from "./CodePreview";

const jsx = `
  import react from "react";
  import reactDOM from "react-dom";
  
  const App = () => {  
    return (
      <div>
        <h1>Hello, world! 123 123 123</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    )};

  ReactDOM.render(<App />, document.getElementById("code-preview"));
  `;

const Editor = () => {
  const [code, setCode] = useState(jsx);

  useEffect(() => {
    // @ts-ignore
    if (window.Babel) {
      try {
        // @ts-ignore
        const jsCode = window.Babel.transform(code, {
          presets: ["react"],
        })?.code;
        console.log(jsCode);
        eval(jsCode);
      } catch (e) {
        console.error;
      }
    }
  }, [code]);

  return (
    <div>
      <AceEditor
        mode="tsx"
        theme="monokai"
        name="editor"
        width="100%"
        fontSize={20}
        editorProps={{ $blockScrolling: true }}
        value={code}
        onChange={(newValue) => setCode(newValue)}
        enableLiveAutocompletion
        enableBasicAutocompletion
        enableSnippets
      />

      <CodePreview
        jsxCode={code}
        packages={[
          "https://unpkg.com/babel-standalone@6/babel.min.js",
          "https://unpkg.com/react@16/umd/react.development.js",
          "https://unpkg.com/react-dom@16/umd/react-dom.development.js",
          // "https://unpkg.com/styled-components@4.3.2/dist/styled-components.min.js",
        ]}
      />
    </div>
  );
};

export default Editor;
