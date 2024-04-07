// import base from '@/services/base';
// import { BASE_SCHOOL, BASE_SYSTEM_USER } from '@/config/constants';
// import { Result, User } from '@/types';
//
// export interface School {
//   id: string;
//   systemUserId: string;
//   systemName?: string;
//   name: string;
//   nameEn: string;
//   educationSystemType: number;
//   avatar?: string;
//   verify: number;
//   status: number;
//   createTime: number;
//   schoolId: string;
//   schoolUserVO: {
//     id: string;
//     schoolId: string;
//     systemUserId: string;
//     personId: string;
//     personType: number;
//     account: string;
//     lastLogin: number;
//     status: number;
//     changePasswordTime: number;
//     name: string;
//   };
//   schoolYearList: SchoolYear[];
// }
//
// export interface SchoolInfo {
//   avatar: string;
//   createTime: number;
//   educationSystemType: number;
//   id: string;
//   name: string;
//   nameEn: null;
//   status: number;
//   systemName: string;
//   systemUserId: string;
//   verify: number;
//   provinceCode?: string;
//   cityCode?: string;
//   areaCode?: string;
// }
//
// export interface SchoolYear {
//   id: string;
//   schoolId: string;
//   name: string;
//   startDate: number;
//   endDate: number;
//   semesterVOList?: SchoolSemester[];
// }
//
// export interface SchoolSemester {
//   id: string;
//   schoolYearId: string;
//   name: string;
//   startDate: number;
//   endDate: number;
// }
//
// const schoolApi = base.injectEndpoints({
//   endpoints: ({ query, mutation }) => ({
//     // 获取学校列表
//     getSchoolList: query<Result<School[]>, { token?: string }>({
//       query: (params) => {
//         const q = {
//           url: `${BASE_SYSTEM_USER}/systemUser/getSchoolListBySystemUserId`,
//           method: 'GET',
//           headers: {} as any,
//         };
//         if (params.token) {
//           q.headers.memberToken = params.token;
//         }
//         return q;
//       },
//     }),
//     // 选择学校 // 选择学校后需要调次接口确认用户信息
//     choiceSchool: mutation<
//       Result<User>,
//       {
//         token?: string;
//         schoolUserId: string;
//       }
//     >({
//       query: (params) => {
//         const p = Object.assign({}, params);
//         const q = {
//           url: `${BASE_SYSTEM_USER}/systemUser/choice`,
//           method: 'GET',
//           params: p,
//           headers: {} as any,
//         };
//         if (p.token) {
//           q.headers.memberToken = p.token;
//           Reflect.deleteProperty(p, 'token');
//         }
//         return q;
//       },
//     }),
//     // 获取学校年，需要头部字段schoolId
//     getSchoolYear: query<
//       Result<SchoolYear>,
//       {
//         token?: string;
//         schoolId?: string;
//       }
//     >({
//       query: (params) => {
//         const q = {
//           url: `${BASE_SCHOOL}/schoolYear/current`,
//           method: 'GET',
//           headers: {} as any,
//         };
//         if (params.schoolId) {
//           q.headers.schoolId = params.schoolId;
//         }
//         if (params.token) {
//           q.headers.memberToken = params.token;
//         }
//         return q;
//       },
//     }),
//     // 获取学年学期，需要头部字段schoolYearId
//     getSchoolSemester: query<
//       Result<SchoolSemester>,
//       {
//         token?: string;
//         schoolId?: string;
//         schoolYearId?: string;
//       }
//     >({
//       query: (params) => {
//         const q = {
//           url: `${BASE_SCHOOL}/semester/current`,
//           method: 'GET',
//           headers: {} as any,
//         };
//         if (params.schoolId) {
//           q.headers.schoolId = params.schoolId;
//         }
//         if (params.schoolYearId) {
//           q.headers.schoolYearId = params.schoolYearId;
//         }
//         if (params.token) {
//           q.headers.memberToken = params.token;
//         }
//         return q;
//       },
//     }),
//
//     // 更新学校信息
//     updateSchool: mutation<
//       Result<School>,
//       {
//         name?: string;
//         provinceCode?: string;
//         cityCode?: string;
//         areaCode?: string;
//         id: string;
//         generation: string; // 0自动创建，1手动创建
//       }
//     >({
//       query: (params) => ({
//         url: `${BASE_SCHOOL}/school/update`,
//         method: 'POST',
//         body: params,
//       }),
//     }),
//   }),
// });
//
// export const {
//   useGetSchoolListQuery,
//   useChoiceSchoolMutation,
//   useLazyGetSchoolYearQuery,
//   useLazyGetSchoolSemesterQuery,
//   useUpdateSchoolMutation,
// } = schoolApi;
