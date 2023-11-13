import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

export const importCSVSs = () => {
  const clearString = (str: string) =>
    str.replace(/\W|\"|\'|\ /g, "").replace(" ", "");

  const convertCsvToJSObject = (csvString: string) => {
    const csvContent = csvString.split("\n");
    const csvHeaders = csvContent[0].split(",");
    const csvRows = csvContent.slice(1, -1);
    return csvRows.map((row) => {
      const rowData = row.split(",");
      return csvHeaders.reduce((obj, header, i) => {
        /* @ts-ignore */
        obj[clearString(header) || `field_${i}`] = rowData[i];
        return obj;
      }, {});
    });
  };

  const convertAllCsvsToJSObject = (folder: string) => {
    const fileList = readdirSync(folder);
    return fileList.reduce((obj, fileName) => {
      const readedCsv = readFileSync(resolve(folder, fileName));
      /* @ts-ignore */
      obj[clearString(fileName)] = convertCsvToJSObject(readedCsv.toString());
      return obj;
    }, {});
  };

  const csvData = convertAllCsvsToJSObject(resolve("src", "csv"));

  writeFileSync(resolve("src", "json", "out.json"), JSON.stringify(csvData));
};

importCSVSs();
