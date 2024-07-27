import { saveAs } from "file-saver";
import Papa from 'papaparse';

export const downloadFile = (data, type) => {
  if (fileTypes[type]) {
    fileTypes[type](data);
  } else {
    console.error("File type not supported");
  }
}

const fileTypes = {
  csv: (data) => {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: "text/csv" });
    saveAs(blob, "exported-activities.csv");
  },
  json: (data) => {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    saveAs(blob, "exported-activities.json");
  },
  console: (data) => {
    console.log(data);
  },
};