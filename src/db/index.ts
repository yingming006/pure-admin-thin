import Dexie, { type Table } from "dexie";

export interface Report {
  id?: number;
  name?: string;
  date?: number;
  sheetData?: any;
  clazzList?: any;
  studentList?: any;
  subjectList?: any;
  file?: any;
  created?: number;
  deleted: 0 | 1;
}

export class ReportDexie extends Dexie {
  report!: Table<Report>;

  constructor() {
    super("reportDB");
    this.version(1).stores({
      report:
        "++id, name, date, sheetData, clazzList, studentList, subjectList, file, created, deleted"
    });
  }
}

export const reportDexie = new ReportDexie();
