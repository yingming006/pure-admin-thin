// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { createValidateStatus, setAuthHeaders } from '@/utils/servicesUtils';
// import { SERVER_URL } from '@/config/constants';
// import { setFeedbackState } from '@/store/feedback';
//
// const base = createApi({
//   tagTypes: [
//     'detailInfo',
//     'importFiles', // 已导入的成绩单列表
//     'removeReceiver',
//     'setTemplate',
//     'settingInfo',
//     'groupList', // 成绩分组列表
//     'scoreList', // 成绩单列表
//     'shareWhitelist', // 分享白名单列表
//     'setLine',
//     'orderList',
//     'commentSetting',
//     'setStudentComment',
//     'editScore',
//     'advancedSettings',
//     'getScoreTableCategoryConfig',
//     'getExportPdfConfig',
//     'getStudentDataDetail',
//     'getScoreOnlineConfig',
//     'getAiCommentConfigDetails', //获取ai智能生成配置详情
//     'getStudentCommentDetails',
//     'getStudentCommentConfig',
//     'getStudentScoreDetails',
//     'getGroupInvitationInfo',
//     'getTeamList', //获取团队列表
//     'getMemberList', // 获取团队成员列表
//     'getTeamScoreCardGroup', // 获取当前团队下的成绩单分组
//     'getListGroupMember', // 获取当前成绩单分组下的成员列表
//     'getRoleSettingList', // 获取团队管理下的角色列表
//     'getBatchCascadingList', // 获取级联权限
//     'getDetailDotChartData',
//     'getAnalysis',
//     'getScoreTableListWithGroup',
//     'getSubjectScoreRangeStat',
//     'getStudentsScoreDetail',
//     'getGroupRoleList',
//   ],
//   baseQuery: fetchBaseQuery({
//     baseUrl: SERVER_URL,
//     prepareHeaders: (headers) => {
//       setAuthHeaders(headers);
//       return headers;
//     },
//     fetchFn: (input, init) => {
//       return fetch(input, init).catch((error) => {
//         // 网络故障或者请求被阻止时触发
//         setFeedbackState({
//           globalMessageError: {
//             level: 'error',
//             message: '请求失败，请稍后重试！',
//           },
//         });
//         console.error('Request Error: 网络故障或者请求被阻止!', error);
//         throw error;
//       });
//     },
//     validateStatus: createValidateStatus(),
//   }),
//   endpoints: () => ({}),
// });
//
// export default base;
