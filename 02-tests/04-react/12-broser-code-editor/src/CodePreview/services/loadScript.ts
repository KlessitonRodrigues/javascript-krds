export const loadJSPackages = (urls: string[]) => {
  urls.forEach((url) => {
    const script = document.createElement("script");
    script.src = url;
    document.body.appendChild(script);
  });
};

export const loadJSXCode = (jsxCode: string) => {
  // @ts-ignore
  window.codePreview = document.getElementById("code-preview");
  // @ts-ignore
  window.react = document.getElementById("code-preview");

  try {
    // @ts-ignore
    const Babel = window.Babel;
    if (Babel) {
      const preset = { presets: ["react"] };
      const JsCode = Babel.transform(jsxCode, preset)?.code;
      const encodedJs = encodeURIComponent(JsCode);
      const dataUri = "data:text/javascript;charset=utf-8," + encodedJs;
      // @ts-ignore
      eval(dataUri);
    }
  } catch (e) {
    console.log(e);
  }
};
