// import base from '@/services/base';
// import { Result } from '@/types';
// import { BASE_ANALYSIS } from '@/config/constants';
// import { downloadResponseHandle } from '@/utils/toolUtls';
// import { GetSingleClassScoreAnalysisParams } from '@/services/analysis-table';
//
// export interface Header {
//   name: string;
//   key: string;
// }
//
// // 总分及各科得分
// export interface ZfGkdfRecord {
//   actNum: string;
//   averageScore: string;
//   fullScore: string;
//   maxScore: string;
//   minScore: string;
//   standardDeviation: string;
//   subjectName: string;
// }
//
// // 总分各分数段人数分布
// export interface ZfGfsdrsfbRecord {
//   count: string;
//   ratio: string;
//   section: string;
// }
//
// // 总分及各学科达标统计
// export interface ZfGkdblRecord {
//   ratioExcellent: string; // 优秀率
//   ratioGood: string; // 良好率
//   ratioLow: string; // 低分率
//   ratioPass: string; // 及格率
//   subjectName: string; // 科目
// }
//
// // 各班总分平均分
// export interface GbzfpjfRecord {
//   actNum: string;
//   averageScore: string;
//   className: string;
//   differ: string;
//   maxScore: string;
//   minScore: string;
//   standardDeviation: string;
// }
//
// export interface AutoHeaderTableData {
//   headers?: Header[];
//   header?: Header[];
//   data: Record<string, string>[];
//   title?: string;
// }
//
// export interface CourseReport {
//   courseName: string;
//   headers: Header[];
//   data: Record<string, string>[];
// }
//
// export interface ClassReportCourseReport {
//   className: string;
//   courseName: string;
//   dbtj: AutoHeaderTableData;
//   gfsdfb: AutoHeaderTableData;
//   ztdf: AutoHeaderTableData;
// }
//
// export interface ClassReportRecord {
//   className: string;
//   class_bjcjfb: AutoHeaderTableData;
//   class_zf_gkdbl: AutoHeaderTableData;
//   class_zf_gkdf: AutoHeaderTableData;
//   class_zf_gkdfl: AutoHeaderTableData;
//   courseReports: ClassReportCourseReport[];
// }
//
// export interface SubjectReportRecord {
//   subjectName: string;
//   subject_dbtj: AutoHeaderTableData;
//   subject_gbcj: AutoHeaderTableData;
//   subject_gbdbfx: AutoHeaderTableData;
//   subject_gbgfdrsfx: AutoHeaderTableData;
//   subject_gfsdfb: AutoHeaderTableData;
//   subject_ztcj: AutoHeaderTableData;
// }
//
// export interface ReportData {
//   zf_gkdf: ZfGkdfRecord[];
//   zf_gfsdrsfb: ZfGfsdrsfbRecord[];
//   zf_gkdbl: ZfGkdblRecord[];
//   gbzfpjf: GbzfpjfRecord[];
//   // 各班总分及各科平均分
//   gbzf_gkpjf: AutoHeaderTableData;
//   // 各班总分及各分数段人数分布
//   gbzfgfsdrsfb: AutoHeaderTableData;
//   // 各班总分及各科优秀率 (%)统计
//   gbzf_gkyxl: AutoHeaderTableData;
//   // 各班总分及各科良好率 (%)统计
//   gbzf_gklhl: AutoHeaderTableData;
//   // 各班总分及各科及格率 (%)统计
//   gbzf_gkjgl: AutoHeaderTableData;
//   // 各班总分及各科低分率 (%)统计
//   gbzf_gkdfl: AutoHeaderTableData;
//   // 各班各科成绩分析
//   courseReports: CourseReport[];
//   // 各班总分及各科排名统计
//   gbzf_gkpmtj: AutoHeaderTableData;
//   classReports: ClassReportRecord[];
//   subjectReports: SubjectReportRecord[];
//   gbzf_dbtj: AutoHeaderTableData;
// }
//
// export interface ExportPdfConfig {
//   classVos: {
//     id: string;
//     name: string;
//   }[];
//   itemVos: {
//     id: string;
//     name: string;
//     type: number; // 0未分类，1课程，2排名，3总分，4.自动计算排名，5.自动计算总分
//   }[];
// }
//
// export interface IStudentAnalysisDetails {
//   /** 现在成绩单 */
//   nowScoreCardVo: NowScoreCardVo;
//   /** 上次成绩单 */
//   lastScoreCardVo: NowScoreCardVo;
//   /** 学生成绩和进退步详情 */
//   studentVo: StudentVo;
//   /** 弱势（偏科）科目 */
//   weakSubjectList?: string[];
//   /** 排名信息 */
//   compareRankList: CompareRankList[];
// }
//
// export interface CompareRankList {
//   id: string;
//   scoreCardId?: any;
//   name: string;
//   type: number;
//   totalScore?: any;
//   sort?: any;
//   createUser?: any;
//   createdAt?: any;
//   updateUser?: any;
//   updatedAt?: any;
//   value?: any;
//   rankList: RankList[];
// }
//
// export interface RankList {
//   rank: number;
//   rankName?: any;
//   score: string;
// }
//
// export interface StudentVo {
//   id: string;
//   name: string;
//   namePy: string;
//   sign?: any;
//   scoreCardAdminClassId: string;
//   scoreCardAdminClassName: string;
//   itemVoList: ItemVoList[];
//   adminClassStudentNum: string;
// }
//
// export interface ItemVoList {
//   id: string;
//   name: string;
//   value?: any;
//   courseOrder: number;
//   type: number;
//   itemName: string;
//   nowValue: string;
//   lastValue: string;
//   advance: string;
//   beforeScore: string;
//   nowScore: string;
//   scoreAdvance: string;
//   beforeRankValue: string;
//   nowRankValue: string;
//   rankAdvance: string;
//   advanceFactor: string;
//   advanceLevel: string;
//   classAvg?: string;
//   classAvgRank?: number;
//   classRank?: number;
//   lastClassRank?: number;
//   advanceClassRank?: number;
//   classAdvanceFactor?: string;
//   gradeAvg?: string;
//   gradeAvgRank?: number;
//   gradeRank?: number;
//   lastGradeRank?: number;
//   advanceGradeRank?: any;
//   gradeAdvanceFactor?: any;
//   totalScore: string;
//   rankTrendList: RankTrendList[];
//   scoreTrendList: RankTrendList[];
//   classAdvanceLevel: string;
//   gradeAdvanceLevel: string;
//   allScoreBatchAvgRank: number; // 总考试平均排名
//   allScoreBatchAvgScore: number; // 总考试平均成绩
// }
//
// export interface RankTrendList {
//   scoreCardId: string;
//   scoreCardName: string;
//   publishStatus?: any;
//   examTime?: string;
//   createdAt?: string;
//   itemName: string;
//   itemValue?: number;
//   everyScoreAvgScore: number; // 总学生考试均分/总学生考试均分排名
// }
//
// export interface NowScoreCardVo {
//   id: string;
//   name: string;
//   remark?: any;
//   sort: number;
//   publishStatus: number;
//   roster: number;
//   url?: string;
//   examTime: number;
//   createdAt: number;
//   scoreCardGroupId?: any;
//   scoreCardGroupName?: any;
//   classCount?: any;
//   studentCount?: number;
//   highScoreOnlineDTOList?: any;
// }
//
// const exportReport = base.injectEndpoints({
//   endpoints: (build) => ({
//     getReportData: build.query<Result<ReportData>, { scoreTableId: string }>({
//       query: (params) => ({
//         url: `${BASE_ANALYSIS}/score-card/analysis/stat/${params.scoreTableId}`,
//         method: 'GET',
//       }),
//     }),
//     getExportPdfConfig: build.query<Result<ExportPdfConfig>, { scoreTableId: string }>({
//       query: (params) => ({
//         url: `${BASE_ANALYSIS}/score-card-export/analyze-config/list?scoreCardId=${params.scoreTableId}`,
//         method: 'GET',
//       }),
//       providesTags: ['getExportPdfConfig'],
//     }),
//
//     // 导出班级或这人学生成绩分析
//     exportClassScoreAnalysisExcel: build.mutation<
//       Result,
//       { scoreCardId: string; adminClassId?: string; studentId?: string }
//     >({
//       query: (params) => ({
//         method: 'GET',
//         url: `${BASE_ANALYSIS}/score-card-student/export-student-analysis`,
//         params: params,
//         responseHandler: downloadResponseHandle,
//       }),
//     }),
//
//     // 查询个人学生成绩分析
//     getExportStudentScoreAnalysisPdfData: build.query<
//       Result<IStudentAnalysisDetails>,
//       { scoreCardId: string; studentId: string }
//     >({
//       query: (params) => ({
//         method: 'GET',
//         url: `${BASE_ANALYSIS}/score-card-student/list-student-analysis`,
//         params: params,
//       }),
//     }),
//
//     // 获取示例成绩单url
//     fetchExampleUrl: build.query<Result<string>, unknown>({
//       query: () => ({
//         method: 'GET',
//         url: `/ttfs-support/upload/getUploadUrl`,
//       }),
//     }),
//   }),
// });
//
// export const {
//   useGetReportDataQuery,
//   useLazyGetReportDataQuery,
//   useGetExportPdfConfigQuery,
//
//   useExportClassScoreAnalysisExcelMutation,
//   useLazyGetExportStudentScoreAnalysisPdfDataQuery,
//   useLazyFetchExampleUrlQuery,
// } = exportReport;
