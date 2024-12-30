// @ts-ignore
import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { fetchImages } from "./utils";

const App = () => {
  const [urlList, setUrlList] = useState([]);

  useEffect(() => {
    fetchImages("nfs payback wallpaper").then(setUrlList);
  }, []);

  console.log(urlList);

  return (
    <div>
      <h1>TEST</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {urlList.map((url, i) => {
          return (
            <div
              style={{
                width: "20rem",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <img width="100%" key={i} src={url} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
