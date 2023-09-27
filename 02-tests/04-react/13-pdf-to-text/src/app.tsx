// @ts-ignore
import PDFUtil from "pdf-to-text";
import { createRoot } from "react-dom/client";

const readPDFContent = (base64: string) => {
  PDFUtil.info(
    "/home/krds/Downloads/declaration.pdf",
    (err: any, info: any) => {
      if (err) throw err;
      console.log(info);
    }
  );
};

const App = () => {
  return (
    <div>
      <input
        type="file"
        onChange={(ev) => {
          const filePath = (ev.target?.files || [])[0];
          const file = new FileReader();
          file.readAsDataURL(filePath);
          file.onload = (fileEv) => {
            console.log(fileEv);
            const dataUrl = fileEv.target?.result;
            const base64 = dataUrl?.toString().split(",")[1];
            const textContent = readPDFContent(base64);
            console.log(textContent);
          };
          file.onerror = (err) => {
            console.error(err);
          };
        }}
      />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
