// import base from '@/services/base';
// import { Result } from '@/types';
// import { BASE_ANALYSIS } from '@/config/constants';
//
// export interface IntelligentCommentStudent {
//   studentId: string;
//   studentName: string;
// }
//
// export interface IntelligentCommentLevelStudent {
//   levelGroup: number;
//   studentList: IntelligentCommentStudent[];
// }
//
// export interface SaveIntelligentCommentConfigParams {
//   scoreCardId: string;
//   classId: string;
//   gradeType: 1 | 2; // 年级类别：小学 1，初高中 2
//   appellation: 1 | 2 | 3; // 称谓：姓名全称 1、不含姓氏 2、使用你 3
//   studentList?: IntelligentCommentStudent[]; // 学生列表
//   assessmentLevelGroupList?: { key: number; name: string }[]; // 评语分组列表
//   assessmentSentenceTypeList?: { key: number; name: string }[]; // 短句类别列表
//   sentenceCfgDetailList: {
//     // 例句组合
//     sentencePattern: number; // 短句类别
//     assessmentCfgTypeList: IntelligentCommentLevelStudent[];
//   }[];
//   templateCfgDetailList: IntelligentCommentLevelStudent[]; // 范例随机
// }
//
// export type INameFlagType = '0' | '1' | '2';
// export type IScoreTypeType = '0' | '1' | '2';
// export type INumOfWordType = '100' | '150' | '200';
//
// export interface ISaveAiCommentConfigParams {
//   // 主键
//   id?: string;
//   // 姓名显示类型
//   nameFlag: INameFlagType;
//   // 成绩范围类型
//   scoreType: IScoreTypeType;
//   // 评字数
//   numOfWord: INumOfWordType;
//   // 本次成绩单id
//   scoreCardId: string;
//   // 上次成绩单id
//   scoreCardIdLast?: string;
// }
//
// export type IntelligentCommentConfig = SaveIntelligentCommentConfigParams;
//
// export interface StudentCommentDetails {
//   adminClassId: string;
//   adminClassName: string;
//   comment: string;
//   curNum: number; // 学生排列序号
//   fractionId: string; // 评语id
//   nextStudentId: string;
//   preStudentId: string;
//   scoreCardId: string;
//   studentId: string;
//   studentName: string;
//   totalNum: number; // 班级学生总数
// }
//
// export interface StudentCommentConfig {
//   scoreCardId: string;
//   studentId: string;
//   gradeType: 1 | 2; // 年级类别：小学 1，初高中 2
//   itemCfgList: {
//     cfgItemId: string;
//     typeName: string;
//     typeValue: string | null;
//   }[]; // 短句类别列表
//   levelGroupList: string[]; // 等级列表
//   templateType: 1 | 2; // 1范例随机，2例句组合
//   sentencePatternList: string[];
// }
//
// export interface SentenceComment {
//   content: string;
//   createUser: string;
//   createdAt: number;
//   gradeType: 1 | 2; // 1小学，2初高中
//   id: string;
//   levelGroup: number; // 等级
//   levelGroupName?: string; // 等级名
//   sentencePattern: number; // 例句类型
//   templateType: 1 | 2; // 1例句，2范例
//   updateUser: string;
//   updatedAt: number;
// }
//
// export type SectionComment = SentenceComment;
//
// const intelligentComment = base.injectEndpoints({
//   endpoints: (builder) => ({
//     // 保存评语设置
//     saveIntelligentCommentConfig: builder.mutation<Result, SaveIntelligentCommentConfigParams>({
//       query: (params) => {
//         return {
//           url: `${BASE_ANALYSIS}/template-assessment-cfg/saveOrUpdateCfg`,
//           method: 'POST',
//           body: params,
//         };
//       },
//     }),
//
//     // 获取评语设置
//     getIntelligentCommentConfig: builder.query<
//       Result<IntelligentCommentConfig>,
//       {
//         scoreCardId: string;
//         classId: string;
//       }
//     >({
//       query: (params) => {
//         return {
//           url: `${BASE_ANALYSIS}/template-assessment-cfg/getCfgDetail`,
//           params,
//         };
//       },
//     }),
//
//     // 生成班级模板评语
//     generateClassTemplateComment: builder.mutation<
//       Result,
//       {
//         scoreCardId: string;
//         classId: string;
//         templateType: 1 | 2; // 1范例随机，2例句组合
//       }
//     >({
//       query: (params) => {
//         return {
//           url: `${BASE_ANALYSIS}/assessment-template/batchGenerateTemplateAssessment`,
//           method: 'POST',
//           body: params,
//         };
//       },
//       invalidatesTags: ['getStudentDataDetail'],
//     }),
//
//     // 获取ai批量生成评语的状态
//     getAiCommentStatus: builder.query<Result<any>, { scoreCardId: string }>({
//       query: (params) => {
//         return {
//           url: `${BASE_ANALYSIS}/score-card/teacher/aiComment/status`,
//           method: 'GET',
//           params,
//         };
//       },
//     }),
//
//     // AI保存评语设置
//     saveAiCommentConfig: builder.mutation<Result, ISaveAiCommentConfigParams>({
//       query: (params) => {
//         return {
//           url: `${BASE_ANALYSIS}/score-card-ai-cfg/saveOrUpdate`,
//           method: 'POST',
//           body: params,
//         };
//       },
//       invalidatesTags: ['getAiCommentConfigDetails'],
//     }),
//
//     // AI评语设置详情
//     getAiCommentConfigDetails: builder.query<
//       Result<ISaveAiCommentConfigParams>,
//       { scoreCardId: string }
//     >({
//       query: (params) => {
//         return {
//           url: `${BASE_ANALYSIS}/score-card-ai-cfg/detail`,
//           method: 'GET',
//           params,
//         };
//       },
//     }),
//
//     // 获取学生评语详情
//     getStudentCommentDetails: builder.query<Result<StudentCommentDetails>, { studentId: string }>({
//       query: (params) => {
//         return {
//           url: `${BASE_ANALYSIS}/score-card-student/comment-detail`,
//           method: 'GET',
//           params,
//         };
//       },
//       providesTags: ['getStudentCommentDetails'],
//     }),
//
//     // 更新学生评语
//     updateStudentComment: builder.mutation<
//       Result,
//       {
//         studentId: string;
//         fractionId: string; // 评语id
//         comment: string;
//       }
//     >({
//       query: (params) => {
//         return {
//           url: `${BASE_ANALYSIS}/score-card-student-fraction/update-comment`,
//           method: 'POST',
//           body: params,
//         };
//       },
//       invalidatesTags: [
//         'getStudentCommentDetails',
//         'getStudentDataDetail',
//         'getStudentScoreDetails',
//       ],
//     }),
//
//     // 生成学生模板评语
//     generateStudentCommentByTemplate: builder.mutation<
//       Result<string>,
//       {
//         scoreCardId: string;
//         studentId: string;
//         gradeType: number;
//         templateType: 1 | 2; // 模板类型：范例随机 1、例句组合 2
//       }
//     >({
//       query: (params) => {
//         return {
//           url: `${BASE_ANALYSIS}/assessment-template/generateTemplateAssessment`,
//           method: 'POST',
//           body: params,
//         };
//       },
//     }),
//
//     // 生成学生ai评语
//     generateStudentCommentByAI: builder.mutation<
//       Result<string>,
//       {
//         scoreCardId: string;
//         classId: string;
//         studentId: string;
//       }
//     >({
//       query: (params) => {
//         return {
//           url: `${BASE_ANALYSIS}/score-card/teacher/aiComment`,
//           method: 'POST',
//           body: params,
//         };
//       },
//     }),
//
//     // AI改写评语
//     modifyStudentCommentByAI: builder.mutation<
//       Result<string>,
//       {
//         commentStr: string;
//       }
//     >({
//       query: (params) => {
//         return {
//           url: `${BASE_ANALYSIS}/score-card/teacher/aiModifyComment`,
//           method: 'POST',
//           body: params,
//         };
//       },
//     }),
//
//     // 获取学生评语配置
//     getStudentCommentConfig: builder.query<
//       Result<StudentCommentConfig>,
//       { scoreCardId: string; studentId: string }
//     >({
//       query: (params) => {
//         return {
//           url: `${BASE_ANALYSIS}/template-assessment-cfg/getStudentCfg`,
//           method: 'GET',
//           params,
//         };
//       },
//       providesTags: ['getStudentCommentConfig'],
//     }),
//
//     // 更新学生评语配置
//     updateStudentCommentConfig: builder.mutation<Result, StudentCommentConfig>({
//       query: (params) => {
//         return {
//           url: `${BASE_ANALYSIS}/template-assessment-cfg/saveOrUpdateStudentCfg`,
//           method: 'POST',
//           body: params,
//         };
//       },
//       invalidatesTags: ['getStudentCommentConfig'],
//     }),
//
//     // 获取例句评语
//     getSentenceComments: builder.query<Result<SentenceComment[]>, unknown>({
//       query: () => {
//         return {
//           url: `${BASE_ANALYSIS}/assessment-template/getTemplateSentence`,
//           method: 'GET',
//         };
//       },
//     }),
//
//     // 获取范例评语
//     getSectionComments: builder.query<Result<SectionComment[]>, unknown>({
//       query: () => {
//         return {
//           url: `${BASE_ANALYSIS}/assessment-template/getTemplate`,
//           method: 'GET',
//         };
//       },
//     }),
//
//     // 开始生成
//     startCreateAiComment: builder.mutation<Result, { scoreCardId: string; classId: string }>({
//       query: (params) => {
//         return {
//           url: `${BASE_ANALYSIS}/score-card/teacher/aiComment`,
//           method: 'POST',
//           body: params,
//         };
//       },
//     }),
//
//     // 修改当前ai配置的状态
//     aiCommentUpdateStatus: builder.mutation<Result, { scoreCardId: string; status: string }>({
//       query: (params) => {
//         return {
//           url: `${BASE_ANALYSIS}/score-card/teacher/aiComment/updateStatus`,
//           method: 'POST',
//           body: params,
//         };
//       },
//     }),
//   }),
// });
//
// export const {
//   useSaveIntelligentCommentConfigMutation,
//   useGetIntelligentCommentConfigQuery,
//   useLazyGetIntelligentCommentConfigQuery,
//   useGenerateClassTemplateCommentMutation,
//   useGetAiCommentStatusQuery,
//   useSaveAiCommentConfigMutation,
//   useGetAiCommentConfigDetailsQuery,
//   useGetStudentCommentDetailsQuery,
//   useLazyGetStudentCommentDetailsQuery,
//   useUpdateStudentCommentMutation,
//   useGenerateStudentCommentByTemplateMutation,
//   useGenerateStudentCommentByAIMutation,
//   useModifyStudentCommentByAIMutation,
//   useGetStudentCommentConfigQuery,
//   useUpdateStudentCommentConfigMutation,
//   useGetSentenceCommentsQuery,
//   useGetSectionCommentsQuery,
//   useStartCreateAiCommentMutation,
//   useAiCommentUpdateStatusMutation,
// } = intelligentComment;
