// import base from "@/services/base";
// import type { Result } from "@/types";
// import { BASE_ANALYSIS } from "@/config/constants";
// import { downloadResponseHandle } from "@/utils/toolUtls";
//
// export interface AnalysisItem {
//   name: string;
//   value: string;
// }
//
// export interface AnalysisAdminClass {
//   analysisVos: {
//     name: string;
//     itemVos: AnalysisItem[];
//   }[];
//   id: string;
//   name: string;
// }
//
// export interface ScoreClassDetail {
//   ackNum: number;
//   allNum: number;
//   name: string;
//   studentDetailVoList: StudentDetail[];
//   classId: string;
//   hasAssessment: boolean;
// }
//
// export interface StudentDetail {
//   id: string;
//   name: string;
//   scoreItemDetailVoList: ScoreItemDetail[];
//   scoreRelationDetailVoList: ScoreRelationDetail[];
// }
//
// export interface ScoreItemDetail {
//   id: string;
//   name: string;
//   sort: number;
//   totalScore: string;
//   type: number;
//   value: string;
// }
//
// export interface ScoreRelationDetail {}
//
// export interface Receiver {
//   createTime: number;
//   id: string;
//   identity: string;
//   mobile: string;
//   name: string;
//   profileUrl: string;
//   removeTag: number;
// }
//
// export interface SettingProps {
//   scoreCardId?: string;
//   itemScoreParamVoList: {
//     id: string;
//     name: string;
//     total: number;
//   }[];
//   itemRateList: ItemRate[];
//   fractionLineParamVoList: {
//     id: string;
//     name: string;
//     percent: number;
//   }[];
//   scoreRankParamVoList: {
//     id: string;
//     name: string;
//     valueType: number; // 0导入，1计算
//   }[];
//   segments: number[];
//   totalNum: string;
// }
//
// export interface ItemRate {
//   fullScore: number;
//   scoreCardId: string;
//   scoreCardItemId: string;
//   scoreCardItemName?: string;
//   type: number; // 0未分类，1课程，2排名，3总分，4.自动计算排名，5.自动计算总分
//   rateLineDtoList: {
//     id?: string;
//     name?: string;
//     percent: number;
//     score?: number;
//     range: string;
//   }[];
// }
//
// export interface DuplicateCheckDetails {
//   compareStudentNum: number;
//   dataList: IDataList[];
//   passRate: string;
// }
//
// export interface StudentCommentSimilarityVO {
//   // 评语
//   comment?: null | string;
//   // 评语所在值id
//   fractionId?: number | null;
//   // 相似度
//   similarity?: number | null;
//   // 学生id
//   studentId?: number | null;
//   // 学生姓名
//   studentName?: null | string;
// }
//
// export interface IDataList extends StudentCommentSimilarityVO {
//   children?: StudentCommentSimilarityVO[] | null;
// }
//
// const analysis = base.injectEndpoints({
//   endpoints: ({ query, mutation }) => ({
//     getAnalysis: query<
//       Result<{
//         adminClassVoList: AnalysisAdminClass[];
//         type: 1 | 2 | 3;
//       }>,
//       { id: string }
//     >({
//       query: params => ({
//         url: `${BASE_ANALYSIS}/score-card/analysis/integration/${params.id}`,
//         method: "GET"
//       }),
//       providesTags: ["settingInfo", "advancedSettings", "getAnalysis"]
//     }),
//     getStudentData: query<Result<any>, unknown>({
//       query: params => ({
//         url: `${BASE_ANALYSIS}/score-card/teacher/list`,
//         method: "GET"
//       })
//     }),
//     getDetailInfo: query<
//       Result<{
//         examTime: number;
//         id: string;
//         name: string;
//         publishStatus: 0 | 1; // 0 未发布 1 已发布
//         shareGroupType: 1 | 2 | 3 | 4; // 分组类型 1：默认，2：分享组， 3: 第三方分享组，4：新建分组
//         editable: 0 | 1; // 是否可编辑
//       }>,
//       { id: string }
//     >({
//       query: params => ({
//         url: `${BASE_ANALYSIS}/score-card/${params.id}`,
//         method: "GET"
//       }),
//
//       providesTags: ["detailInfo"]
//     }),
//     updateDetailInfo: mutation<
//       Result,
//       {
//         id: string;
//         name: string;
//         examTime: number;
//       }
//     >({
//       query: params => ({
//         url: `${BASE_ANALYSIS}/score-card/update-info`,
//         method: "POST",
//         body: params
//       }),
//       invalidatesTags: ["detailInfo"]
//     }),
//     getStudentDataDetail: query<
//       Result<{ name: string; scoreClassDetailVoList: ScoreClassDetail[] }>,
//       { id: string }
//     >({
//       query: params => ({
//         url: `${BASE_ANALYSIS}/score-card/teacher/${params.id}`,
//         method: "GET"
//       }),
//       providesTags: [
//         "removeReceiver",
//         "settingInfo",
//         "setStudentComment",
//         "getStudentDataDetail"
//       ]
//     }),
//     getDotChartItems: query<
//       Result<{ id: string; name: string; type: number }[]>,
//       { id: string }
//     >({
//       query: params => ({
//         url: `${BASE_ANALYSIS}/score-card-item/score-card/${params.id}`,
//         method: "GET"
//       }),
//       providesTags: ["editScore"]
//     }),
//     getPublishSettings: query<Result, { scoreCardId: string }>({
//       query: params => ({
//         url: `${BASE_ANALYSIS}/score-card-item/list`,
//         method: "GET",
//         data: params
//       })
//     }),
//     getDetailDotChartData: query<
//       Result<any>,
//       { itemId: string; scoreCardId: string }
//     >({
//       query: params => ({
//         url: `${BASE_ANALYSIS}/score-card/chart/student/${params.scoreCardId}/${params.itemId}`,
//         method: "GET"
//       }),
//       providesTags: [
//         "settingInfo",
//         "setLine",
//         "advancedSettings",
//         "getDetailDotChartData"
//       ]
//     }),
//     getSettingInfo: query<Result<any>, { scoreCardId: string }>({
//       query: params => ({
//         url: `${BASE_ANALYSIS}/score-card/setting/${params.scoreCardId}`,
//         method: "GET"
//       }),
//       providesTags: ["settingInfo"]
//     }),
//     updateSettingInfo: mutation<Result, SettingProps>({
//       query: params => ({
//         url: `${BASE_ANALYSIS}/score-card/setting`,
//         method: "POST",
//         body: params
//       }),
//       invalidatesTags: ["settingInfo"]
//     }),
//     // 获取高级设置
//     getAdvancedSettings: query<
//       Result<ItemRate[]>,
//       {
//         scoreCardId: string;
//       }
//     >({
//       query: params => ({
//         url: `${BASE_ANALYSIS}/score-card-item-rate/item-rate/list?scoreCardId=${params.scoreCardId}`,
//         method: "GET"
//       }),
//       providesTags: ["advancedSettings", "settingInfo"]
//     }),
//     // 修改高级设置
//     updateAdvancedSettings: mutation<Result, ItemRate[]>({
//       query: params => ({
//         url: `${BASE_ANALYSIS}/score-card-item-rate/item-rate/setting`,
//         method: "POST",
//         body: params
//       }),
//       invalidatesTags: ["advancedSettings"]
//     }),
//     getScoreReceivers: query<
//       Result<Receiver[]>,
//       {
//         scoreCardId: string;
//         studentId: string;
//       }
//     >({
//       query: params => ({
//         url: `${BASE_ANALYSIS}/score-card-student-relation/receive/find`,
//         body: params,
//         method: "POST"
//       }),
//       providesTags: ["removeReceiver"]
//     }),
//     removeScoreReceivers: mutation<
//       Result,
//       {
//         scoreCardId: string;
//         studentId: string;
//         removeUserId: string;
//       }
//     >({
//       query: params => ({
//         url: `${BASE_ANALYSIS}/score-card-student-relation/receive/remove`,
//         method: "POST",
//         body: params
//       }),
//       invalidatesTags: ["removeReceiver"]
//     }),
//     getTemplate: query<
//       Result<{ id: string; scoreCardId: string; templateId: string }>,
//       {
//         scoreCardId: string;
//       }
//     >({
//       query: params => ({
//         url: `${BASE_ANALYSIS}/score-card-publish-template/getByScoreCardId`,
//         method: "GET",
//         params
//       }),
//       providesTags: ["setTemplate"]
//     }),
//     saveTemplate: mutation<
//       Result,
//       {
//         scoreCardId: string;
//         templateId: number;
//       }
//     >({
//       query: params => ({
//         url: `${BASE_ANALYSIS}/score-card-publish-template/saveTemplateIdByScoreCardId`,
//         method: "GET",
//         params
//       }),
//       invalidatesTags: ["setTemplate"]
//     }),
//     setTemplate: mutation<
//       Result,
//       {
//         id: string;
//         templateId: number;
//       }
//     >({
//       query: params => ({
//         url: `${BASE_ANALYSIS}/score-card-publish-template/setTemplateIdByScoreCardId`,
//         method: "GET",
//         params
//       }),
//       invalidatesTags: ["setTemplate"]
//     }),
//     exportExcel: mutation<
//       Result,
//       {
//         id: string;
//       }
//     >({
//       query: params => ({
//         url: `${BASE_ANALYSIS}/score-card-export/exportScoreCard?scoreCardId=${params.id}`,
//         method: "GET",
//         params,
//         responseHandler: downloadResponseHandle
//       })
//     }),
//     checkCanExportCompareExcel: mutation<
//       Result,
//       {
//         scoreCardId: string;
//       }
//     >({
//       query: params => ({
//         url: `${BASE_ANALYSIS}//score-card/last-score-card/check`,
//         method: "GET",
//         params
//       })
//     }),
//     exportCompareExcel: mutation<
//       Result,
//       {
//         scoreCardId: string;
//       }
//     >({
//       query: params => ({
//         url: `${BASE_ANALYSIS}/score-card-student/advance/student/list`,
//         method: "GET",
//         params,
//         responseHandler: downloadResponseHandle
//       })
//     }),
//
//     getLogo: mutation<
//       Result<string>,
//       {
//         id: string;
//       }
//     >({
//       query: params => ({
//         url: `${BASE_ANALYSIS}/score-card/getLogoById`,
//         method: "GET",
//         params
//       })
//       // providesTags: ['setTemplate'],
//     }),
//     setLogo: mutation<
//       Result<string>,
//       {
//         id: string;
//         logoUrl: string;
//       }
//     >({
//       query: params => ({
//         url: `${BASE_ANALYSIS}/score-card/setLogoById`,
//         method: "GET",
//         params
//       })
//     }),
//     getLineSetting: query<
//       Result<
//         {
//           name: string;
//           value: string;
//           scoreCardId: string;
//           scoreCardItemId: string;
//         }[]
//       >,
//       {
//         scoreCardId: string;
//         scoreCardItemId: string;
//       }
//     >({
//       query: params => ({
//         url: `${BASE_ANALYSIS}/score-card/getAnalysis/${params.scoreCardId}/${params.scoreCardItemId}`,
//         method: "GET"
//       }),
//       providesTags: ["setLine"]
//     }),
//
//     setLineSetting: mutation<
//       Result<any>,
//       {
//         scoreCardId: string;
//         scoreCardItemId: string;
//         list: {
//           name: string;
//           value: string;
//           scoreCardId: string;
//           scoreCardItemId: string;
//         }[];
//       }
//     >({
//       query: params => {
//         return {
//           url: `${BASE_ANALYSIS}/score-card/saveAnalysis`,
//           method: "POST",
//           body: params
//         };
//       },
//       invalidatesTags: ["setLine"]
//     }),
//
//     // 导出学生评语
//     exportComment: mutation<Result, string>({
//       query: scoreCardId => ({
//         url: `${BASE_ANALYSIS}/assessment-template/exportAssessment?scoreCardId=${scoreCardId}`,
//         method: "POST",
//         responseHandler: downloadResponseHandle
//       })
//     }),
//
//     // 查重 /comment-duplicate-check/check-similar
//     getDuplicateCheckDetails: query<
//       Result<DuplicateCheckDetails>,
//       {
//         scoreCardId: string;
//         adminClassId: string;
//         similarity: string;
//       }
//     >({
//       query: params => ({
//         url: `${BASE_ANALYSIS}/comment-duplicate-check/check-similar`,
//         method: "GET",
//         params
//       })
//     })
//   })
// });
//
// export const {
//   useGetAnalysisQuery,
//   useGetStudentDataQuery,
//   useGetStudentDataDetailQuery,
//   useGetDetailInfoQuery,
//   useUpdateDetailInfoMutation,
//   useGetDotChartItemsQuery,
//   useGetDetailDotChartDataQuery,
//   useGetSettingInfoQuery,
//   useUpdateSettingInfoMutation,
//   useGetAdvancedSettingsQuery,
//   useUpdateAdvancedSettingsMutation,
//   useGetScoreReceiversQuery,
//   useRemoveScoreReceiversMutation,
//   useGetTemplateQuery,
//   useSaveTemplateMutation,
//   useSetTemplateMutation,
//   useExportExcelMutation,
//   useCheckCanExportCompareExcelMutation,
//   useExportCompareExcelMutation,
//   useGetLogoMutation,
//   useSetLogoMutation,
//   useGetLineSettingQuery,
//   useSetLineSettingMutation,
//   useExportCommentMutation,
//   useLazyGetDuplicateCheckDetailsQuery
// } = analysis;
