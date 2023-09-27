import { PdfReader } from "pdfreader";

const readPDFContent = (base64: string) => {
  return new Promise<string>((resolve) => {
    const binary = Buffer.from(base64, "base64");
    const textContent: string[] = [];
    new PdfReader({ debug: true }).parseBuffer(
      binary,
      (err: any, item: any) => {
        if (!err) textContent.push(item?.text || "");
      }
    );
    setTimeout(() => resolve(textContent.join("\n")), 1500);
  });
};
