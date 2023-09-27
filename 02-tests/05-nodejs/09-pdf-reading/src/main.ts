import fs from "fs";
import PDFParser, { Output } from "pdf2json";
import { PdfReader } from "pdfreader";

const PDF2JSON = () => {
  const pdfParser = new PDFParser();
  const writeFile = (pdfData: Output) =>
    fs.writeFile("./test/test.json", JSON.stringify(pdfData), () => {});

  pdfParser.on("pdfParser_dataError", (errData) => console.error(errData));
  pdfParser.on("pdfParser_dataReady", writeFile);

  pdfParser.loadPDF("./test/test.pdf");
};

const PDFREADER = () => {
  const writeFile = (pdfData: string) =>
    fs.writeFile("./test/test.txt", pdfData, () => {});

  fs.readFile("test/test.pdf", (err, pdfBuffer) => {
    // pdfBuffer contains the file content
    new PdfReader({ debug: true }).parseBuffer(pdfBuffer, (err, item) => {
      if (err) console.error("error:", err);
      else if (!item) console.warn("end of buffer");
      else if (item.text) console.log(item.text);
    });
  });
};

const SENDFILE = () => {};

PDFREADER();
