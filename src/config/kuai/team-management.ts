// import base from '@/services/base';
// import { BASE_SALES, BASE_ANALYSIS } from '@/config/constants';
// import { Result } from '@/types';
//
// export type IStageListCode = 1 | 2 | 3 | 4 | 5 | 6;
// interface IStageList {
//   code: IStageListCode;
//   desc: string;
// }
//
// interface ICreateReam {
//   name: string;
//   stage: IStageListCode;
//   productTag: 'kuaicj';
// }
//
// export type IRole = 0 | 1 | 2;
//
// export interface ITeamItem {
//   // 创建时间
//   createdAt?: null | string;
//   // 创建人
//   createUser?: null | string;
//   // 有效期结束时间
//   endTime?: null | string;
//   // 主键Id
//   id?: string;
//   // 拥有者ID, 在b_system_user的id
//   ownerId?: number | null;
//   // 有效期开始时间
//   startTime?: null | string;
//   // 团队等级（校园基础版base:1、校园vip版:vip:2)
//   teamLevel?: number | null;
//   // 团队名
//   teamName?: null | string;
//   // 更新时间
//   updatedAt?: null | string;
//   // 更新人
//   updateUser?: null | string;
//   // 团队用户数
//   userLimit?: number | null;
//   // 用户角色
//   role: IRole;
//   // 成员头像
//   profile?: string | null;
//   curNum: number;
// }
//
// // 团队成员Obj
// export interface IMemberObj {
//   //当前人数
//   curNum?: number | null;
//   memberList?: ITeamMemberItem[] | null;
//   //团队id
//   teamId?: string;
//   //团队名称
//   teamName?: null | string;
//   //人数限制
//   userLimit?: number | null;
// }
//
// // 团队成员
// export interface ITeamMemberItem {
//   //主键Id
//   id: string;
//   //成员名
//   memberName?: null | string;
//   //手机号
//   phoneNumber?: null | string;
//   //角色（拥有者 0,管理员admin:1、成员member:2)
//   role?: IRole;
//   //用户ID
//   systemUserId?: string;
//   //团队表Id
//   teamId?: string;
//   // 成员头像
//   profile?: string | null;
//   // 用户名称
//   userName?: string | null;
// }
//
// // 团队权限列表
// export interface TeamGroupMemberWrapperVo {
//   // 分组id
//   groupId?: string;
//   // 组团队成员
//   groupMemberList?: GroupMemberDetailVo[] | null;
//   // 组名称
//   groupName?: null | string;
//   // 是否打开
//   open: 0 | 1;
//   // 团队id
//   teamId?: string;
//   stageGradeId?: string | null;
//   studentBatchesId?: string | null;
// }
//
// // 分组成员详情
// export interface GroupMemberDetailVo {
//   // 成员id
//   memberId?: string;
//   // 成员名称
//   memberName?: null | string;
//   // 成员头像
//   profile?: null | string;
// }
//
// // 成绩单分组成员列表
// export interface GroupMemberPermitVo {
//   // 编辑权限  0,无，1有
//   editable?: number | null;
//   // 成员名称
//   memberName?: null | string;
//   // 手机号
//   mobile?: null | string;
//   // 无权限 ：0:其他权限有一个为1， 1:其他权限都为0
//   noPermit?: number | null;
//   // 成员头像
//   profile?: null | string;
//   // 发布权限  0,无，1有
//   publishable?: number | null;
//   // 成员团队组id
//   teamGroupMemberId?: string | null;
//   // 团队成员id
//   teamMemberId?: number | null;
//   // 团队权限id
//   teamMemberPermitId?: string | null;
//   // 用户昵称
//   userName?: null | string;
//   // 查看权限  0,无，1有
//   viewable?: number | null;
// }
//
// export interface IEditGroupMemberListParams {
//   teamId?: string;
//   groupId?: string;
//   memberListReqs: {
//     memberId: string;
//   }[];
// }
//
// export interface TeacherRoleWrapperVo {
//   // 班级详情
//   classList?: RoleClassWrapperVo[] | null;
//   // 年级主任
//   gradeTeacherList?: TeacherRoleVo[] | null;
//   // 科目头
//   headerList?: RoleCourseWrapperVo[] | null;
// }
//
// export interface RoleClassWrapperVo {
//   // 班级名称
//   className?: null | string;
//   // 班级序号
//   classNo?: number | null;
//   // 班主任
//   classTeacherList?: TeacherRoleVo[] | null;
//   // 班级id
//   roleClassId?: number | null;
//   // 任课教师详情
//   roleCourseList?: RoleCourseWrapperVo[] | null;
// }
//
// export interface TeacherRoleVo {
//   // 角色类型
//   roleType?: number | null;
//   // 成员id
//   teamMemberId: string | null;
//   // 成员名称
//   teamMemberName: null | string;
// }
//
// export interface RoleCourseWrapperVo {
//   // 课程名称
//   courseName?: null | string;
//   // 课程id
//   roleCourseId: string;
//   // 任课老师
//   teacherRoleVoList?: TeacherRoleVo[] | null;
// }
//
// // 获取班级科目详情列表
// export interface ShareGroupWrapperVo {
//   //班级标号
//   classNoList?: string[] | null;
//   //课程list
//   courseNameList?: string[] | null;
//   //分组详情
//   shareGroupList?: ShareGroupVo[] | null;
// }
//
// export interface ShareGroupVo {
//   //班级数
//   adminClassNum?: null | string;
//   //班级名称
//   classNameList?: string[] | null;
//   //班级序号列表
//   classNoList?: string[] | null;
//   //课程名称列表
//   courseNameList?: string[] | null;
//   //分组名称
//   groupName?: null | string;
//   //成绩单数
//   scoreCardNum?: string | null;
//   //分享人
//   shareName?: null | string;
//   //分享id
//   shareUserId?: null | string;
// }
//
// export interface TeacherRoleStageGradeVo {
//   memberBatchesVoList?: TeacherRoleStudentBatchesVo[] | null;
//   // 学段
//   stageGradeId?: number | null;
//   // 1.小学，2初中，3.高中，4.职校，5.其他
//   type?: number | null;
//   typeName: string;
// }
//
// export interface TeacherRoleStudentBatchesVo {
//   // 批次，2023年
//   batchYear?: number | null;
//   // 学生批次id
//   studentBatchedId?: number | null;
// }
//
// export type IRoleType = 1 | 2 | 3;
//
// const schoolApi = base.injectEndpoints({
//   endpoints: ({ query, mutation }) => ({
//     // 获取学段列表
//     getStageList: query<Result<IStageList[]>, unknown>({
//       query: (params) => {
//         return {
//           url: `${BASE_SALES}/team/list-stage`,
//           method: 'GET',
//         };
//       },
//     }),
//
//     // 团队重新命名
//     reTeamName: mutation<Result<string>, { id: string; name: string }>({
//       query: (params) => {
//         return {
//           url: `${BASE_SALES}/team/rename`,
//           method: 'POST',
//           body: params,
//         };
//       },
//       invalidatesTags: ['getTeamList'],
//     }),
//
//     // 获取团队列表
//     getTeamList: query<Result<ITeamItem[]>, unknown>({
//       query: (params) => {
//         return {
//           url: `${BASE_SALES}/team/list-team`,
//           method: 'GET',
//           params: { productTag: 'kuaicj' },
//         };
//       },
//       providesTags: ['getTeamList'],
//     }),
//
//     // 创建团队
//     createTeam: mutation<Result<string>, ICreateReam>({
//       query: (params) => {
//         return {
//           url: `${BASE_SALES}/team/create-free`,
//           method: 'POST',
//           body: { ...params, productTag: 'kuaicj' },
//         };
//       },
//       invalidatesTags: ['getTeamList'],
//     }),
//
//     // 移交团队
//     transferReam: mutation<Result<unknown>, { fromTeamMemberId: string; toTeamMemberId: string }>({
//       query: (params) => {
//         return {
//           url: `${BASE_SALES}/team/transfer`,
//           method: 'POST',
//           body: params,
//         };
//       },
//       invalidatesTags: ['getTeamList', 'getMemberList'],
//     }),
//
//     // 解散团队
//     dissolveReam: mutation<Result<string>, { id: string; name: string }>({
//       query: (params) => {
//         return {
//           url: `${BASE_SALES}/team/disband`,
//           method: 'POST',
//           body: params,
//         };
//       },
//       invalidatesTags: ['getTeamList'],
//     }),
//
//     // 根据团队id获取成员列表
//     getMemberList: query<Result<IMemberObj>, { id?: string }>({
//       query: (data) => {
//         return {
//           url: `${BASE_SALES}/team/list-member`,
//           method: 'POST',
//           body: data,
//         };
//       },
//       providesTags: ['getMemberList'],
//     }),
//
//     // 修改成员昵称
//     updateMemberNickname: mutation<Result<string>, { teamMemberId: string; memberName: string }>({
//       query: (params) => {
//         return {
//           url: `${BASE_SALES}/team/member/rename`,
//           method: 'POST',
//           body: params,
//         };
//       },
//       invalidatesTags: ['getMemberList'],
//     }),
//
//     // 修改团队头像
//     updateTeamProfile: mutation<Result<string>, { profile: string; id: string }>({
//       query: (params) => {
//         return {
//           url: `${BASE_SALES}/team/update-profile`,
//           method: 'POST',
//           body: { ...params, productTag: 'kuaicj' },
//         };
//       },
//       invalidatesTags: ['getTeamList'],
//     }),
//
//     // 修改团队成员角色
//     updateTeamMemberRole: mutation<Result<string>, { teamMemberId: string; role: IRole }>({
//       query: (params) => {
//         return {
//           url: `${BASE_SALES}/team/member/update-role`,
//           method: 'POST',
//           body: params,
//         };
//       },
//       invalidatesTags: ['getMemberList'],
//     }),
//
//     // 移除团队成员
//     removeTeamMember: mutation<Result<string>, { teamMemberId: string; teamId: string }>({
//       query: (params) => {
//         return {
//           url: `${BASE_SALES}/team/member/remove`,
//           method: 'POST',
//           body: params,
//         };
//       },
//       invalidatesTags: [
//         'getMemberList',
//         'getTeamList',
//         'getTeamScoreCardGroup',
//         'getRoleSettingList',
//       ],
//     }),
//
//     // 退出团队
//     memberExitTeam: mutation<Result<string>, { teamMemberId: string; teamId: string }>({
//       query: (params) => {
//         return {
//           url: `${BASE_SALES}/team/member/exit`,
//           method: 'POST',
//           body: params,
//         };
//       },
//       invalidatesTags: ['getMemberList', 'getTeamList'],
//     }),
//
//     // 根据团队id获取当前团队下的成绩单分组
//     getTeamScoreCardGroup: query<Result<TeamGroupMemberWrapperVo[]>, { teamId?: string }>({
//       query: (params) => {
//         return {
//           url: `${BASE_ANALYSIS}/team-group-member/list-group`,
//           method: 'GET',
//           params,
//         };
//       },
//       providesTags: ['getTeamScoreCardGroup'],
//     }),
//
//     // 根据成绩单分组id获取当前团队下的成员权限
//     getListGroupMember: query<Result<GroupMemberPermitVo[]>, { teamId?: string; groupId?: string }>(
//       {
//         query: (data) => {
//           return {
//             url: `${BASE_ANALYSIS}/team-group-member/list-group-member-permit`,
//             method: 'POST',
//             body: data,
//           };
//         },
//         providesTags: ['getListGroupMember'],
//       },
//     ),
//
//     // 修改协作组的成员列表
//     editGroupMemberList: mutation<Result<unknown>, IEditGroupMemberListParams>({
//       query: (data) => {
//         return {
//           url: `${BASE_ANALYSIS}/team-group-member/update-member`,
//           method: 'POST',
//           body: data,
//         };
//       },
//       invalidatesTags: ['getTeamScoreCardGroup'],
//     }),
//
//     // 修改协作组的状态
//     editGroupStatus: mutation<
//       Result<unknown>,
//       {
//         groupId?: string;
//         teamId?: string;
//         status: 0 | 1;
//       }
//     >({
//       query: (data) => {
//         return {
//           url: `${BASE_ANALYSIS}/team-group-member/switch`,
//           method: 'POST',
//           body: data,
//         };
//       },
//       invalidatesTags: ['getTeamScoreCardGroup'],
//     }),
//
//     // 修改协作组的成员权限
//     editGroupMemberRole: mutation<
//       Result<unknown>,
//       {
//         teamMemberPermitId: string;
//         viewable?: 0 | 1;
//         editable: 0 | 1;
//       }
//     >({
//       query: (data) => {
//         return {
//           url: `${BASE_ANALYSIS}/team-group-member/update-member-permit`,
//           method: 'POST',
//           body: data,
//         };
//       },
//       invalidatesTags: ['getListGroupMember'],
//     }),
//
//     // 获取角色设置列表详情
//     getRoleSettingList: query<
//       Result<TeacherRoleWrapperVo>,
//       {
//         studentBatchesId: string;
//         stageGradeId?: string;
//         teamId: string;
//       }
//     >({
//       query: (data) => {
//         return {
//           url: `${BASE_ANALYSIS}/teacher-role/list`,
//           method: 'POST',
//           body: data,
//         };
//       },
//       providesTags: ['getRoleSettingList'],
//     }),
//
//     // 添加年级主任
//     roleSettingAddGradeTeacher: mutation<
//       Result<unknown>,
//       {
//         studentBatchesId: string;
//         stageGradeId?: string;
//         teamId: string;
//         teamMemberIdList: string[];
//         roleType: IRoleType;
//       }
//     >({
//       query: (data) => {
//         return {
//           url: `${BASE_ANALYSIS}/teacher-role/add-grade-teacher`,
//           method: 'POST',
//           body: data,
//         };
//       },
//       invalidatesTags: ['getRoleSettingList', 'getBatchCascadingList'],
//     }),
//
//     // 删除年级主任
//     roleSettingDelGradeTeacher: mutation<
//       Result<unknown>,
//       {
//         studentBatchesId: string;
//         stageGradeId?: string;
//         teamId: string;
//         teamMemberIdList: string[];
//         roleType: IRoleType;
//       }
//     >({
//       query: (data) => {
//         return {
//           url: `${BASE_ANALYSIS}/teacher-role/del-grade-teacher`,
//           method: 'POST',
//           body: data,
//         };
//       },
//       invalidatesTags: ['getRoleSettingList'],
//     }),
//
//     // 角色设置添加班级
//     roleSettingAddClass: mutation<
//       Result<unknown>,
//       {
//         studentBatchesId: string;
//         stageGradeId?: string;
//         teamId: string;
//       }
//     >({
//       query: (data) => {
//         return {
//           url: `${BASE_ANALYSIS}/teacher-role/add-class`,
//           method: 'POST',
//           body: data,
//         };
//       },
//       invalidatesTags: ['getRoleSettingList'],
//     }),
//
//     // 角色设置添加科目
//     roleSettingAddCourse: mutation<
//       Result<unknown>,
//       {
//         studentBatchesId: string;
//         stageGradeId?: string;
//         teamId: string;
//         courseNameList: string[];
//       }
//     >({
//       query: (data) => {
//         return {
//           url: `${BASE_ANALYSIS}/teacher-role/add-course`,
//           method: 'POST',
//           body: data,
//         };
//       },
//       invalidatesTags: ['getRoleSettingList'],
//     }),
//
//     // 添加班主任和老师
//     roleSettingAddClassTeacher: mutation<
//       Result<unknown>,
//       {
//         studentBatchesId: string;
//         stageGradeId?: string;
//         teamId: string;
//         roleCourseId?: string;
//         roleClassId: string;
//         roleType: IRoleType;
//         teamMemberIdList: string[];
//       }
//     >({
//       query: (data) => {
//         return {
//           url: `${BASE_ANALYSIS}/teacher-role/add-teacher`,
//           method: 'POST',
//           body: data,
//         };
//       },
//       invalidatesTags: ['getRoleSettingList'],
//     }),
//
//     // 删除班级 /teacher-role/del-course
//     roleSettingDelClass: mutation<
//       Result<unknown>,
//       {
//         studentBatchesId: string;
//         stageGradeId?: string;
//         teamId: string;
//         roleClassId?: string;
//       }
//     >({
//       query: (data) => {
//         return {
//           url: `${BASE_ANALYSIS}/teacher-role/del-class`,
//           method: 'POST',
//           body: data,
//         };
//       },
//       invalidatesTags: ['getRoleSettingList'],
//     }),
//
//     // 删除科目 /teacher-role/del-course
//     roleSettingDelCourse: mutation<
//       Result<unknown>,
//       {
//         studentBatchesId: string;
//         stageGradeId?: string;
//         teamId: string;
//         roleCourseId?: string;
//       }
//     >({
//       query: (data) => {
//         return {
//           url: `${BASE_ANALYSIS}/teacher-role/del-course`,
//           method: 'POST',
//           body: data,
//         };
//       },
//       invalidatesTags: ['getRoleSettingList'],
//     }),
//
//     // 获取班级和科目详情
//     getClassCourseList: query<
//       Result<ShareGroupWrapperVo>,
//       {
//         studentBatchesId: string;
//         stageGradeId?: string;
//         teamId: string;
//       }
//     >({
//       query: (params) => {
//         return {
//           url: `${BASE_ANALYSIS}/teacher-role/last-course-class`,
//           method: 'POST',
//           body: params,
//         };
//       },
//     }),
//
//     // 新增和删除科目或者班级
//     updateClassCourse: mutation<
//       Result<ShareGroupWrapperVo>,
//       {
//         studentBatchesId: string;
//         stageGradeId?: string;
//         teamId: string;
//         type: 0 | 1;
//         classNoList?: string[];
//         courseNameList?: string[];
//       }
//     >({
//       query: (data) => {
//         return {
//           url: `${BASE_ANALYSIS}/teacher-role/update-course-class`,
//           method: 'POST',
//           body: data,
//         };
//       },
//       invalidatesTags: ['getRoleSettingList'],
//     }),
//
//     // 获取批次级联下拉
//     getBatchCascadingList: query<Result<TeacherRoleStageGradeVo[]>, { teamId: string }>({
//       query: (params) => {
//         return {
//           url: `${BASE_ANALYSIS}/team-group-member/list-member-batches`,
//           method: 'GET',
//           params,
//         };
//       },
//       providesTags: ['getBatchCascadingList'],
//     }),
//
//     // 更新批次权限
//     updateMemberBatchLimit: mutation<
//       Result<unknown>,
//       {
//         groupId: string;
//         studentBatchesId: string;
//         stageGradeId?: string;
//         teamId: string;
//       }
//     >({
//       query: (data) => {
//         return {
//           url: `${BASE_ANALYSIS}/team-group-member/update-member-batches`,
//           method: 'POST',
//           body: data,
//         };
//       },
//       invalidatesTags: ['getTeamScoreCardGroup'],
//     }),
//   }),
// });
//
// export const {
//   useGetStageListQuery,
//   useReTeamNameMutation,
//   useGetTeamListQuery,
//   useCreateTeamMutation,
//   useTransferReamMutation,
//   useDissolveReamMutation,
//   useGetMemberListQuery,
//   useUpdateMemberNicknameMutation,
//   useUpdateTeamProfileMutation,
//   useUpdateTeamMemberRoleMutation,
//   useRemoveTeamMemberMutation,
//   useMemberExitTeamMutation,
//   useGetTeamScoreCardGroupQuery,
//   useGetListGroupMemberQuery,
//   useEditGroupMemberListMutation,
//   useEditGroupStatusMutation,
//   useEditGroupMemberRoleMutation,
//   useGetRoleSettingListQuery,
//   useRoleSettingAddGradeTeacherMutation,
//   useRoleSettingDelGradeTeacherMutation,
//   useRoleSettingAddClassMutation,
//   useRoleSettingAddCourseMutation,
//   useRoleSettingAddClassTeacherMutation,
//   useRoleSettingDelClassMutation,
//   useRoleSettingDelCourseMutation,
//   useGetClassCourseListQuery,
//   useUpdateClassCourseMutation,
//   useGetBatchCascadingListQuery,
//   useUpdateMemberBatchLimitMutation,
// } = schoolApi;
