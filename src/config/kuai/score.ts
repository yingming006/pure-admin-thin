// import base from '@/services/base';
// import { BASE_ANALYSIS, BASE_EXCEL_ENGINE, BASE_SYSTEM_USER } from '@/config/constants';
// import { Result } from '@/types';
// import { AutoHeaderTableData } from '@/services/exportReport';
// import { GroupRoleType } from '@/data/groupRoleMap';
//
// export interface Course {
//   batchId: string;
//   idx: number;
//   name: string;
//   totalScore: number;
//   type: 2;
//   value: string;
// }
//
// export interface Rank {
//   batchId: string;
//   idx: number;
//   name: string;
//   totalScore: number;
//   type: 4;
//   value: string;
// }
//
// export interface TotleScore {
//   batchId: string;
//   idx: number;
//   name: string;
//   totalScore: number;
//   type: 3;
//   value: string;
// }
//
// export interface StudentInfo {
//   batchId: string;
//   idx: number;
//   name: string;
//   relationTitleRankBatchIds: null;
//   totalScore?: number;
//   type: number; // 1,学生姓名 2，课程分数；3, 总分, 4，排名； 5,班级，6，等级赋分
//   value: string;
// }
//
// export interface Student {
//   rowNo: number;
//   className: string;
//   studentName: string;
//   sign: string | number;
//   studentTitleValueMap: Record<string, StudentInfo>;
// }
//
// export interface AdminClassTitle {
//   batchId: string;
//   idx: number;
//   name: string;
//   relationTitleRankBatchIds: string[];
//   totalScore: number;
//   type: -1 | 1 | 2 | 3 | 4 | 5 | 6; // -1不导入，1,学生姓名 2，课程分数；3, 总分, 4，排名； 5,班级，6，等级赋分
// }
//
// export interface AdminClass {
//   batchId: string;
//   adminClassName: string;
//   srStudentList: Student[];
//   titleList: AdminClassTitle[];
// }
//
// export interface ParsedFileInfo {
//   parseInfo?: {
//     batchId: string;
//     status: 'PARSED' | 'UNPARSED';
//     fileName: string;
//     fileSize: number;
//     msg: string | null;
//     parseDate: string;
//     name: string;
//   };
//   srAdminClassList?: AdminClass[];
//   duplicateStudentName?: Student[];
//   type: number;
// }
//
// export interface InputScoreTableParams {
//   name: string; // 考试名
//   examTime: string; // 考试时间
//   url?: string; // 文件链接
//   totalScoreRelMap?: Record<string, string>;
//   srAdminClassList: any;
//   parseInfo?: any;
//   type?: number; // 1.单班级 2.多班级
//   hideItemIdList?: string[]; // 隐藏的列
//   studentBatchesId: number; // 学生批次表,所属届, year
//   stageGradeId: string; // 所属年级id department
//   classMappingMap: any; // 班级名及班级序列映射配置
//   duplicateStudentName?: Student[]; // 重名学生配置表
// }
//
// export interface ImportFileRecord {
//   ackNum: number;
//   allNum: number;
//   createdAt: number;
//   examTime: number;
//   id: string;
//   name: string;
//   profileUrl: string | null;
//   publishMan: string;
//   publishStatus: number;
//   publishTime: number;
// }
//
// export interface TopStudent {
//   id: string;
//   name: string;
//   values: string[];
// }
//
// export interface IStudentScoreDetail {
//   courseSummarizeVo: CourseSummarizeVo[];
//   lastScoreCard: string;
//   weakSubjectList: WeakSubjectList[];
// }
//
// export interface WeakSubjectList {
//   course: string;
//   studentList: string[];
// }
//
// export interface CourseSummarizeVo {
//   course: string;
//   summarizeDtoList: SummarizeDtoList[];
//   top5UpStudent: Top5UpStudent[];
//   top5DownStudent: Top5UpStudent[];
// }
//
// export interface Top5UpStudent {
//   className: string;
//   name: string;
//   id: string;
//   nowScore: string;
//   lastScore?: any;
//   scoreAdvance?: any;
//   nowRank: string;
//   lastRank?: any;
//   rankAdvance?: any;
//   advanceFactor?: any;
//   advanceLevel?: any;
//   order: number;
// }
//
// type IAdvanceLevel =
//   | '卓越进步'
//   | '大幅进步'
//   | '明显进步'
//   | '微小进步'
//   | '进步汇总'
//   | '无明显变化'
//   | '严重退步'
//   | '大幅退步'
//   | '明显退步'
//   | '微小退步'
//   | '退步汇总';
//
// export interface SummarizeDtoList {
//   level: IAdvanceLevel;
//   sum: number;
//   percent?: any;
// }
//
// export interface ScoreTableGroupMember {
//   teamMemberId: string;
//   memberName: string;
//   profileUrl: string; // 成员头像
// }
//
// export interface ScoreTableGroup {
//   scoreCardGroupId: string; // 分组Id
//   scoreCardGroupName: string; // 分组名称
//   teamName: string; // 团队名称
//   teamMemberList: ScoreTableGroupMember[]; // 分组成员列表
//   shareGroupType: 1 | 2 | 3 | 4; // 是共享分组类型 1：默认，2：分享组， 3: 第三方分享组， 4: 新建组 枚举值:1 2 3 4 -1
//   studentCardList: ScoreTableRecord[]; // 成绩单分组列表
//   scoreCardRank: 1 | 2 | 3 | 4 | -1; // 权限范围 枚举值: 1 2 3 4 -1
//   viewable: 0 | 1; //是否可查看
//   editable: 0 | 1; //是否可编辑
//   publishable: 0 | 1; //是否可发布
//   ownerName: string; // 分享人
//   profile: string; // 团队头像
//   currentDataRole: GroupRoleType;
//   multiRole: 0 | 1; // 0否，1是
//   teamGroupMemberId?: string;
// }
//
// export interface ScoreTableRecord {
//   examTime: number;
//   scoreCardAdminClassId: string | null;
//   scoreCardAdminClassName: string | null;
//   scoreCardCreateAt: number;
//   scoreCardGroupId: null;
//   scoreCardGroupName: string;
//   scoreCardId: string;
//   scoreCardName: string;
//   studentCreateAt: null;
//   publishStatus: number;
//   studentId: string | null;
//   studentName: string | null;
//   studentSign: string | null;
//   allNum: number;
//   ackNum: number;
//   batchYear: number;
//   batchYearName: string;
//   stageId: string; // 学段id
//   stageType: number; // 学段类型1.小学，2.初中，3.高中，4.职校，5.其他
//   stageName: string; // 学段名称
// }
//
// export interface StudentBaseInfo {
//   scoreCardId: string;
//   scoreCardName: string;
//   studentId: string;
//   studentName: string;
//   studentCreateAt: string;
//   scoreCardCreateAt: string;
//   examTime: string;
//   stageName: string;
//   studentSign: string | null;
//   scoreCardAdminClassName?: string;
// }
//
// export interface StudentScoreItem {
//   advance: number | null;
//   avgScore: string;
//   id: string;
//   name: string;
//   rankVoList: any[] | null;
//   totalScore: string;
//   type: number;
//   value: string;
//   biased: boolean; // 是否偏科
// }
//
// export interface TendencyScore {
//   createdAt: number;
//   examTime: number;
//   everyScoreAvgScore?: string;
//   itemName: string;
//   itemValue: string;
//   publishStatus: number;
//   scoreCardId: string;
//   scoreCardName: string;
// }
//
// export interface ScoreGroup {
//   createUser: string;
//   createdAt: number;
//   id: string;
//   name: string;
//   parentId: string;
//   sort: number;
//   updateUser: string;
//   updatedAt: number;
//   shareGroupType: 1 | 2 | 3 | 4; // 是共享分组类型 1：默认，2：分享组， 3: 第三方分享组
//   scoreCardRank: number; // 权限范围
//   viewable: 0 | 1; // 是否可查看
//   editable: 0 | 1; // 是否可编辑
//   publishable: 0 | 1; // 是否可发布
//   showSchoolTag: boolean; // 是否展开校园标签
// }
//
// export interface ScoreTableYear {
//   batchYear: number;
//   batchYearName: string;
//   createAt: number;
//   id: string;
// }
//
// export interface ScoreTableDepartment {
//   createAt: number;
//   id: string;
//   type: number;
//   typeName: string;
// }
//
// export interface ScoreTableCategoryConfig {
//   id: string; // 保存不需要，修改需要
//   classNo: number; // 映射的班级,1表示1班，2表示2班
//   scoreCardAdminClassName: string; // 成绩单上班级名称，显示用
//   scoreCardAdminClassId: string; // 成绩表班级id
//   studentBatchesId: number; // 学生批次表,所属届
//   stageGradeId: string; // 所属年级id
// }
//
// export interface StudentScoreDetails {
//   name: string;
//   classCount: number;
//   gradeCount: number;
//   id: string;
//   sign: string | null;
//   itemDetailVoList: StudentScoreItem[];
//   scoreCardAdminClassId: string;
//   scoreCardAdminClassName: string;
//   rankMapList: {
//     title: string;
//     valueList: {
//       value: string | number;
//     }[];
//   }[];
// }
//
// export interface CheckParsedBatchStudentScoresReturned {
//   totalCount: number;
//   successCount: number;
//   failCount: number;
//   successStudentMap: AutoHeaderTableData;
//   failStudentMap: AutoHeaderTableData;
// }
//
// export interface GroupRoleItem {
//   studentBatchesId: string;
//   userId: string;
//   teacherRole: GroupRoleType;
//   roleClassDtoList?: {
//     id: string;
//     classNo: number;
//     className: string;
//     choice: 0 | 1;
//   }[];
//   roleCourseDtoList?: {
//     id: string;
//     courseName: string;
//     choice: 0 | 1;
//   }[];
//   choice: 0 | 1;
// }
//
// const scoreApi = base.injectEndpoints({
//   endpoints: (build) => {
//     return {
//       // 导入文件并解析
//       importScoreFiles: build.mutation({
//         query: (params) => ({
//           url: `${BASE_EXCEL_ENGINE}/excel/parser/parseExamScoreFormFiles`,
//           method: 'POST',
//           body: params,
//         }),
//       }),
//       // 导入文件并解析
//       importScoreFilesByUrls: build.mutation<Result<ParsedFileInfo>, { fileUrls: string[] }>({
//         query: (params) => ({
//           method: 'POST',
//           url: `${BASE_EXCEL_ENGINE}/excel/parser/parseExamScoreFormUrls`,
//           body: params,
//         }),
//       }),
//
//       // 录入解析的数据
//       inputScoreTable: build.mutation<Result<{ id: string }>, InputScoreTableParams>({
//         query: (params) => ({
//           method: 'POST',
//           url: `${BASE_ANALYSIS}/score-card/adapter/json/scoreCardAddAdapter`,
//           body: params,
//         }),
//         invalidatesTags: ['importFiles'],
//       }),
//
//       // 获取top学生
//       // getTopStudents: build.query<
//       //   Result<TopStudent[]>,
//       //   {
//       //     scoreCardId: string;
//       //     category: number; // 1进步，2退步，3偏科
//       //     num: number;
//       //     itemId?: string; // 栏目id 类型:long  不传默认为 总分
//       //   }
//       // >({
//       //   query: ({ scoreCardId, category, num, itemId = '' }) => ({
//       //     method: 'GET',
//       //     url: `${BASE_ANALYSIS}/score-card-student/top/${scoreCardId}/${category}/${num}/${itemId}`,
//       //   }),
//       //   providesTags: ['importFiles'],
//       // }),
//
//       // 获取进退步详情
//       getStudentsScoreDetail: build.query<
//         Result<IStudentScoreDetail | null>,
//         {
//           nowScoreCardId: string;
//         }
//       >({
//         query: ({ nowScoreCardId }) => ({
//           method: 'GET',
//           url: `${BASE_ANALYSIS}/score-card-student/advance/student/analysisData?nowScoreCardId=${nowScoreCardId}`,
//         }),
//         providesTags: ['importFiles', 'getStudentsScoreDetail'],
//       }),
//
//       // 成绩单导入情况 /score-card/teacher/list
//       getImportFilesData: build.query<Result<ImportFileRecord[]>, unknown>({
//         query: () => ({
//           method: 'GET',
//           url: `${BASE_ANALYSIS}/score-card/teacher/list`,
//         }),
//         providesTags: ['importFiles'],
//       }),
//
//       // 查询已解析的成绩单列表 studentId不传查所有
//       getScoreTableList: build.query<Result<ScoreTableRecord[]>, { studentId?: string }>({
//         query: (params) => ({
//           method: 'GET',
//           url: `${BASE_ANALYSIS}/score-card/card-list/student/${params.studentId || ''}`,
//         }),
//         providesTags: ['importFiles', 'scoreList'],
//       }),
//
//       // 查询已解析的成绩单列表(分组) studentId不传查所有
//       getScoreTableListWithGroup: build.query<Result<ScoreTableGroup[]>, { studentId?: string }>({
//         query: (params) => ({
//           method: 'GET',
//           url: `${BASE_ANALYSIS}/score-card/card-list/group/student/${params.studentId || ''}`,
//         }),
//         providesTags: ['importFiles', 'scoreList', 'getScoreTableListWithGroup'],
//       }),
//
//       // 删除已解析的成绩单
//       deleteScoreTable: build.mutation<Result, { id: string }>({
//         query: (params) => ({
//           method: 'DELETE',
//           url: `${BASE_ANALYSIS}/score-card/${params.id}`,
//           body: params,
//         }),
//         invalidatesTags: ['importFiles', 'scoreList'],
//       }),
//
//       // 复制成绩单
//       copyScoreTable: build.mutation<Result, { scoreCardId: string }>({
//         query: (params) => ({
//           method: 'POST',
//           url: `${BASE_ANALYSIS}/score-card/copy?scoreCardId=${params.scoreCardId}`,
//         }),
//         invalidatesTags: ['importFiles', 'scoreList'],
//       }),
//
//       // 查询学生成绩详情
//       getStudentScoreDetails: build.query<
//         Result<StudentScoreDetails>,
//         { scoreCardId?: string; studentId?: string }
//       >({
//         query: (params) => ({
//           method: 'GET',
//           url: `${BASE_ANALYSIS}/score-card-student/advance/student/${
//             params.studentId
//               ? `${params.scoreCardId}/${params.studentId}`
//               : `${params.scoreCardId}/`
//           }`,
//         }),
//         providesTags: ['getStudentScoreDetails', 'importFiles', 'editScore'],
//       }),
//       // 修改学生成绩
//       editStudentScore: build.mutation<
//         Result<string | null>,
//         {
//           scoreCardId: string;
//           studentId: string;
//           sign?: string;
//           scoreItemReqList: { id: string; value: number }[];
//         }
//       >({
//         query: (params) => ({
//           method: 'POST',
//           url: `${BASE_ANALYSIS}/score-card-student/student/update-score`,
//           body: params,
//         }),
//         invalidatesTags: ['editScore'],
//       }),
//
//       // 查询学生成绩趋势数据
//       getStudentScoreTendency: build.query<Result<any>, { studentId: string; itemId: string }>({
//         query: (params) => ({
//           method: 'GET',
//           url: `${BASE_ANALYSIS}/score-card-student/scoreAndRankTrend/${params.studentId}/${params.itemId}`,
//         }),
//         providesTags: ['importFiles', 'editScore'],
//       }),
//
//       // 查询首页学生成绩趋势, 不传学生id查询默认
//       getStudentScoreTendencyForWorkbench: build.query<
//         Result<TendencyScore[]>,
//         { scoreCardId?: string; studentId?: string }
//       >({
//         query: (params) => ({
//           method: 'GET',
//           url: `${BASE_ANALYSIS}/score-card-student/trend/default`,
//           params,
//         }),
//         providesTags: ['importFiles'],
//       }),
//
//       // 搜索学生 /score-card-student/student/search
//       searchStudentScoreList: build.mutation<Result<StudentBaseInfo[]>, { q: string }>({
//         query: (params) => ({
//           method: 'GET',
//           url: `${BASE_ANALYSIS}/score-card-student/student/search`,
//           params,
//         }),
//       }),
//
//       // 查询成绩分组列表
//       getScoreGroupList: build.query<Result<ScoreGroup[]>, unknown>({
//         query: () => ({
//           method: 'GET',
//           url: `${BASE_ANALYSIS}/scoreCardGroup/queryCroup`,
//         }),
//         providesTags: ['groupList'],
//       }),
//
//       // 新增成绩分组
//       addScoreGroup: build.mutation<Result, { name: string }[]>({
//         query: (params) => ({
//           method: 'POST',
//           url: `${BASE_ANALYSIS}/scoreCardGroup/save`,
//           body: params,
//         }),
//         invalidatesTags: ['groupList'],
//       }),
//
//       // 删除成绩分组
//       deleteScoreGroup: build.mutation<Result, string[]>({
//         query: (params) => ({
//           method: 'POST',
//           url: `${BASE_ANALYSIS}/scoreCardGroup/del/batch`,
//           body: params,
//         }),
//         invalidatesTags: ['groupList', 'scoreList'],
//       }),
//
//       // 加入分组
//       joinScoreToGroup: build.mutation<Result, { scoreCardId: string; id: string }>({
//         query: (params) => ({
//           method: 'POST',
//           url: `${BASE_ANALYSIS}/groupRelation/joinCroup`,
//           body: params,
//         }),
//         invalidatesTags: ['scoreList'],
//       }),
//
//       // 获取工作台统计数据
//       getWorkbenchStat: build.query<
//         Result<{
//           publishNum: number;
//           receiveNum: number;
//           scoreCardNum: number;
//           studentNum: number;
//         }>,
//         unknown
//       >({
//         query: () => ({
//           method: 'GET',
//           url: `${BASE_ANALYSIS}/score-card/index`,
//         }),
//         providesTags: ['scoreList', 'importFiles'],
//       }),
//
//       // 获取各科目各分数段统计数据
//       getSubjectScoreRangeStat: build.query<
//         Result<
//           {
//             name: string;
//             segmentationVoList: { name: string; num: number }[];
//           }[]
//         >,
//         { scoreCardId: string }
//       >({
//         query: (params) => ({
//           method: 'GET',
//           url: `${BASE_ANALYSIS}/score-card/segmentation?scoreCardId=${params.scoreCardId}`,
//         }),
//         providesTags: ['getSubjectScoreRangeStat'],
//       }),
//
//       // 获取成绩单批次列表 /student-batches/list
//       getScoreTableYearList: build.query<Result<ScoreTableYear[]>, unknown>({
//         query: () => ({
//           method: 'GET',
//           url: `${BASE_ANALYSIS}/student-batches/list`,
//         }),
//       }),
//
//       // 获取已经加入成绩单的批次
//       getScoreTableYearListWithScoreCard: build.query<Result<ScoreTableYear[]>, unknown>({
//         query: () => ({
//           method: 'GET',
//           url: `${BASE_ANALYSIS}/student-batches/list-joined`,
//         }),
//       }),
//
//       // 获取成绩单学部列表 /stage-grade/list
//       getScoreTableDepartmentList: build.query<Result<ScoreTableDepartment[]>, unknown>({
//         query: () => ({
//           method: 'GET',
//           url: `${BASE_ANALYSIS}/stage-grade/list`,
//         }),
//       }),
//
//       // 获取成绩单分类配置
//       getScoreTableCategoryConfig: build.query<
//         Result<ScoreTableCategoryConfig[]>,
//         { scoreCardId: string }
//       >({
//         query: (params) => ({
//           method: 'GET',
//           url: `${BASE_ANALYSIS}/class-mapping/list-mapping`,
//           params: params,
//         }),
//         providesTags: ['getScoreTableCategoryConfig'],
//       }),
//
//       // 保存成绩单分类配置
//       saveScoreTableCategoryConfig: build.mutation<Result, ScoreTableCategoryConfig>({
//         query: (params) => ({
//           method: 'POST',
//           url: `${BASE_ANALYSIS}/class-mapping/save-mapping`,
//           body: params,
//         }),
//         invalidatesTags: [
//           'getScoreTableCategoryConfig',
//           'getExportPdfConfig',
//           'getStudentDataDetail',
//         ],
//       }),
//
//       // 获取上一份成绩单分类配置 /class-mapping/list-last-mapping
//       getPreviousScoreTableCategoryConfig: build.query<
//         Result<ScoreTableCategoryConfig[] | null>,
//         { scoreCardId: string }
//       >({
//         query: (params) => ({
//           method: 'GET',
//           url: `${BASE_ANALYSIS}/class-mapping/list-last-mapping`,
//           params: params,
//         }),
//         providesTags: ['getScoreTableCategoryConfig'],
//       }),
//
//       // 检查是否设置过成绩单分类
//       checkIfSetScoreCategory: build.mutation<Result<boolean>, { scoreCardId: string }>({
//         query: (params) => ({
//           method: 'POST',
//           url: `${BASE_ANALYSIS}/score-card/check-classify`,
//           params: params,
//         }),
//       }),
//
//       // 保存用户课表文件信息
//       saveUploadedFileUrl: build.mutation<
//         Result,
//         {
//           excelUrl: string;
//           productName: 'kuaicj' | 'kuaipk';
//           state: 0 | 1; // 0成功  1失败
//         }
//       >({
//         query: (params) => ({
//           url: `${BASE_SYSTEM_USER}/systemUser/saveUserExcel`,
//           method: 'POST',
//           body: params,
//         }),
//       }),
//
//       // 检查学生成绩是否有更新
//       checkIfStudentScoreUpdated: build.mutation<Result<boolean>, { scoreCardId: string }>({
//         query: (params) => ({
//           method: 'GET',
//           url: `${BASE_ANALYSIS}/score-card/check/scorecard/updated`,
//           params: params,
//         }),
//       }),
//
//       // 修改科目名称
//       updateCourseName: build.mutation<
//         Result,
//         { scoreCardId: string; scoreCardItemId: string; scoreCardItemName: string }
//       >({
//         query: (params) => ({
//           method: 'POST',
//           url: `${BASE_ANALYSIS}/score-card/updateSubjectName`,
//           body: params,
//         }),
//         invalidatesTags: ['advancedSettings', 'editScore', 'getStudentDataDetail'],
//       }),
//
//       // 识别批量学生成绩
//       parseBatchStudentScores: build.mutation<Result<AutoHeaderTableData>, { text: string }>({
//         query: (params) => ({
//           method: 'POST',
//           url: `${BASE_ANALYSIS}/score-card-student-fraction/scoreAnalysis`,
//           body: params,
//         }),
//       }),
//
//       // 校验已识别的学生成绩
//       checkParsedBatchStudentScores: build.mutation<
//         Result<CheckParsedBatchStudentScoresReturned>,
//         { scoreCardId: string; studentScoreMap: AutoHeaderTableData }
//       >({
//         query: (params) => ({
//           method: 'POST',
//           url: `${BASE_ANALYSIS}/score-card-student-fraction/scoreAnalysisCheck`,
//           body: params,
//         }),
//       }),
//
//       // 批量更新学生成绩
//       updateBatchStudentScores: build.mutation<
//         Result<CheckParsedBatchStudentScoresReturned>,
//         {
//           type: 1 | 2; // 1直接更新2 备份后更新
//           scoreCardId: string;
//           studentScoreMap: AutoHeaderTableData;
//         }
//       >({
//         query: (params) => ({
//           method: 'POST',
//           url: `${BASE_ANALYSIS}/score-card-student-fraction/sureUpdateScoreBatch`,
//           body: params,
//         }),
//         invalidatesTags: ['getDetailDotChartData', 'getAnalysis', 'getStudentDataDetail'],
//       }),
//
//       // 查询分组角色列表
//       getGroupRoleList: build.query<Result<GroupRoleItem[]>, { scoreCardGroupId: string }>({
//         query: (params) => ({
//           method: 'GET',
//           url: `${BASE_ANALYSIS}/teacher-role/list-user-role`,
//           params: params,
//         }),
//         providesTags: ['getGroupRoleList'],
//       }),
//
//       // 保存分组角色
//       saveGroupRole: build.mutation<
//         Result,
//         {
//           teamGroupMemberId: string;
//           scoreCardGroupId: string;
//           teacherRole: GroupRoleType;
//           roleClassDtoList?: GroupRoleItem['roleClassDtoList'];
//           roleCourseDtoList?: GroupRoleItem['roleCourseDtoList'];
//           choice: 0 | 1;
//         }
//       >({
//         query: (params) => ({
//           method: 'POST',
//           url: `${BASE_ANALYSIS}/teacher-role/switch-user-role`,
//           body: params,
//         }),
//         invalidatesTags: [
//           'getScoreTableListWithGroup',
//           'getSubjectScoreRangeStat',
//           'getStudentsScoreDetail',
//           'getGroupRoleList',
//         ],
//       }),
//     };
//   },
// });
//
// export const {
//   useImportScoreFilesMutation,
//   useImportScoreFilesByUrlsMutation,
//   useInputScoreTableMutation,
//   useGetStudentsScoreDetailQuery,
//   useGetImportFilesDataQuery,
//   useGetScoreTableListQuery,
//   useLazyGetScoreTableListQuery,
//   useGetScoreTableListWithGroupQuery,
//   useDeleteScoreTableMutation,
//   useCopyScoreTableMutation,
//   useGetStudentScoreDetailsQuery,
//   useEditStudentScoreMutation,
//   useGetStudentScoreTendencyQuery,
//   useGetStudentScoreTendencyForWorkbenchQuery,
//   useSearchStudentScoreListMutation,
//   useGetScoreGroupListQuery,
//   useAddScoreGroupMutation,
//   useDeleteScoreGroupMutation,
//   useJoinScoreToGroupMutation,
//   useGetWorkbenchStatQuery,
//   useGetSubjectScoreRangeStatQuery,
//   useGetScoreTableYearListQuery,
//   useGetScoreTableYearListWithScoreCardQuery,
//   useGetScoreTableDepartmentListQuery,
//   useGetScoreTableCategoryConfigQuery,
//   useSaveScoreTableCategoryConfigMutation,
//   useGetPreviousScoreTableCategoryConfigQuery,
//   useCheckIfSetScoreCategoryMutation,
//   useSaveUploadedFileUrlMutation,
//   useCheckIfStudentScoreUpdatedMutation,
//   useUpdateCourseNameMutation,
//   useParseBatchStudentScoresMutation,
//   useCheckParsedBatchStudentScoresMutation,
//   useUpdateBatchStudentScoresMutation,
//   useGetGroupRoleListQuery,
//   useSaveGroupRoleMutation,
// } = scoreApi;
