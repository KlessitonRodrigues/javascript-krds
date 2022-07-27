// Appointments_2022-5-16_1031.csv
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const run = () => {
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
        obj[clearString(header)] = rowData[i];
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

  const csvData = convertAllCsvsToJSObject(
    resolve("csvs", "YorkshireSkinCentre")
  );

  writeFileSync(resolve("YorkshireSkinCentre.json"), JSON.stringify(csvData));
};

run();
