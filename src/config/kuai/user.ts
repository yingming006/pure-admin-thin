// import base from '@/services/base';
// import { Result } from '@/types';
// import {
//   BASE_SCHEDULING,
//   BASE_SCHOOL,
//   SUPPORT_SERVICE,
//   BASE_SYSTEM_USER,
//   WX_APPID,
//   BASE_SALES,
//   BASE_ANALYSIS,
// } from '@/config/constants';
// import { School, SchoolInfo, SchoolYear } from '@/services/school';
//
// export interface User {
//   id: string;
//   name: string;
//   alias: string;
//   sex: number;
//   avatar: string;
//   mobile: string;
//   account: string;
//   lastLogin: number;
//   status: number;
//   changePasswordTime: number;
//   openId: string;
//   bindSystemUserFlag: boolean;
//   changePasswordFlag: boolean;
//   changeAliasFlag: boolean;
//   bindWeiXinFlag: boolean;
//   memberToken: string;
//   currentSchoolUserVO?: {
//     account: string;
//     changePasswordTime: number;
//     id: string;
//     lastLogin?: number;
//     name: string;
//     personId: string;
//     personType: number;
//     schoolId: string;
//     status: number;
//     systemUserId: string;
//   };
//   schoolUserVOList?: any[];
//   userStatus: 1 | 2; // 1正式用户 2游客
//   unionId: string;
// }
//
// export interface LoginByCaptchaParams {
//   mobile: string;
//   captcha: string;
// }
//
// // 短信类型，0：验证码登录；1：修改密码；2：找回密码；3：绑定手机号
// export type MessageAction = 0 | 1 | 2 | 3;
//
// export interface SendMessageParams {
//   mobile: string;
//   action: MessageAction;
// }
//
// export interface RegisterByCaptchaParams {
//   schoolName: string;
//   provinceCode: string;
//   cityCode: string;
//   areaCode: string;
//   mobile: string;
//   captcha: string;
// }
//
// export type IVipTag =
//   | 'BASE_KUAICJ'
//   | 'SCHOOL_BASE_KUAICJ'
//   | 'VIP_KUAICJ'
//   | 'S_VIP_KUAICJ'
//   | 'SCHOOL_VIP_KUAICJ';
//
// interface IVipList {
//   canRenew: boolean;
//   expirationTime: number;
//   name: string;
//   status: 0 | 1;
//   tag: IVipTag;
//   vip: boolean;
// }
//
// export interface IUserVipInfo {
//   expirationTime?: string;
//   schoolList: School[];
//   systemUserQuickExtendVo: User;
//   vip: boolean;
//   status: 0 | 1 | -1; // 0 从未开通会员，1 未到期vip，-1 已到期vip
//   roleNames: string[];
//   roleTags: IVipTag[];
//   vipList: IVipList[];
//   team: 0 | 1;
// }
//
// export interface Coupon {
//   amount: string; // 优惠金额,单位分
//   beginTime: number;
//   couponId: string;
//   couponName: string;
//   discount: number | null; //折扣（95则九五折）
//   endTime: number;
//   id: string;
//   minPrice: string; //最低消费单位分，0代表不限制
//   scopeOfApp: string;
//   scopes: string[];
//   showAmount: number; //优惠金额,单位元
//   showMinPrice: number; //最低消费单位元，0代表不限制
//   status: 0 | 1 | 2; // 0：未使用；1：已使用；2：已过期
//   systemUserId: string;
//   timeStatus: 1 | 2 | 3 | 4; // 1.正常使用，2.未到使用时间，3.已经过期, 4. 已使用
//   type: 1 | 2 | 3; //1.代金券 2.折扣券 3.无门槛券
//   usedTime: number;
//   source: 0 | 1; //0.系统发放 1.邀请
// }
//
// export interface BuyHistory {
//   billVo: {
//     bankAccount: string;
//     bankOfDeposit: string;
//     content: string;
//     enterpriseAddress: string;
//     enterpriseName: string;
//     enterpriseTaxNumber: string;
//     header: string;
//     id: string;
//     orderId: string;
//     orderSn: string;
//     receiverEmail: string;
//     receiverPhone: string;
//     status: 1 | 2 | 3; // 1未开票，2开票中，3已开票
//     systemUserId: string;
//     type: number;
//     billFileVos: {
//       id: string;
//       billId: string;
//       fileName: string;
//       fileUrl: string;
//       createdAt: string;
//     }[];
//   };
//   orderDetail: {
//     detailName: string;
//     endTime: string;
//     startTime: string;
//     productVo: {
//       id: string;
//       name: string;
//       sort: number;
//       status: number;
//       tag: string;
//     };
//     rollVo: {
//       functionVoList: null;
//       isDefault: number;
//       productVo: null;
//       roleId: null;
//       roleName: null;
//       status: number;
//     };
//   };
//   orderVo: {
//     amount: string;
//     showAmount: string;
//     discountAmount: string;
//     showDiscountAmount: string;
//     id: string;
//     orderSn: string;
//     payAmount: string;
//     showPayAmount: string;
//     payStatus: number;
//     payTime: number;
//     payType: number;
//     remark: string;
//     systemUserId: string;
//     traceTime: string;
//     details: string;
//     startTime: string;
//     endTime: string;
//   };
// }
//
// export interface InvitedRecord {
//   inviteDetailVo: {
//     id: string;
//     systemUserId: string;
//     newUserId: string;
//     status: number;
//     creator: string;
//     createTime: number;
//     updater: string;
//     updateTime: number;
//     registerTime: string;
//     couponId: string;
//     stepStatus: number;
//   };
//   couponVoList: {
//     id: string;
//     name: string;
//     beginTime: number;
//     endTime: number;
//     amount: string;
//     showAmount: string;
//     status: number;
//     scopeOfApp: string;
//   }[];
//   insideSystemUserVO: {
//     account: string;
//     avatar: null;
//     bindSystemUserFlag: boolean;
//     changePasswordFlag: boolean;
//     changePasswordTime: number;
//     currentSchoolUserVO: null;
//     id: string;
//     lastLogin: number;
//     memberToken: null;
//     mobile: string;
//     name: string;
//     password: string;
//     salt: string;
//     schoolUserVOList: null;
//     sex: number;
//     status: number;
//   };
// }
//
// export interface GroupInvitation {
//   teamId: string; // 团队id
//   teamName: string; // 团队名称
//   current: number; // 已加入人数
//   limit: number; // 用户数
//   status: 0 | 1 | 2; // 0.邀请失效，1邀请正常，2邀请异常
//   inviter: string;
//   schoolName: string;
// }
//
// const user = base.injectEndpoints({
//   endpoints: ({ query, mutation }) => ({
//     // 创建公众号二维码
//     createQrcode: mutation<Result<{ qrCodeUrl: string; scene: string }>, unknown>({
//       query: () => ({
//         url: `${BASE_SYSTEM_USER}/systemUser/wx/without/l/${WX_APPID}/qrcode`,
//         method: 'GET',
//       }),
//     }),
//     //
//     // 检查是否扫码
//     checkScan: mutation<Result<string | null>, { scene: string }>({
//       query: (params) => ({
//         url: `${BASE_SYSTEM_USER}/systemUser/wx/without/l/${WX_APPID}/checkScan`,
//         method: 'GET',
//         params: params,
//       }),
//     }),
//
//     // 扫码登录
//     loginByScanWithScene: mutation<Result<User>, { scene: string }>({
//       query: (params) => ({
//         url: `${BASE_SYSTEM_USER}/systemUser/wx/without/l/${WX_APPID}/login`,
//         method: 'GET',
//         params: params,
//       }),
//     }),
//
//     // 使用用户手机绑定微信公众号
//     bindWxWithUserPhone: mutation<
//       Result<User>,
//       { code: string; phoneNumber: string; unionid: string }
//     >({
//       query: (params) => ({
//         url: `${BASE_SYSTEM_USER}/systemUser/wx/without/l/${WX_APPID}/phone`,
//         method: 'GET',
//         params: {
//           ...params,
//           source: '2', // 1.快排课web 2.快成绩web 3.快成绩小程序 4.快课表小程序
//         },
//       }),
//     }),
//
//     loginByCaptcha: mutation<Result<User>, LoginByCaptchaParams>({
//       query: (params) => ({
//         url: `${BASE_SYSTEM_USER}/systemUser/quick/login`,
//         method: 'POST',
//         body: params,
//       }),
//     }),
//     sendMessage: mutation<Result, SendMessageParams>({
//       query: (params) => ({
//         url: `${SUPPORT_SERVICE}/support/sms/token`,
//         method: 'POST',
//         body: params,
//       }),
//     }),
//     registerByCaptcha: mutation<Result<User>, RegisterByCaptchaParams>({
//       query: (params) => ({
//         url: `${BASE_SYSTEM_USER}/systemUser/quick/register`,
//         method: 'POST',
//         body: params,
//       }),
//     }),
//     // 校验手机号是否存在
//     checkPhoneNumberIsExist: mutation<
//       Result<{
//         userCheckStatus: 1 | 2; // 1已注册，2未注册
//       }>,
//       {
//         mobile: string;
//       }
//     >({
//       query: (params) => ({
//         url: `${BASE_SYSTEM_USER}/systemUser/mobile/exist`,
//         method: 'GET',
//         params: params,
//       }),
//     }),
//
//     // 根据学校id查询学校信息
//     getSchoolInfo: query<
//       Result<SchoolInfo>,
//       {
//         id: string;
//         memberToken: string;
//       }
//     >({
//       query: (params) => ({
//         url: `${BASE_SCHOOL}/school/getExpandById`,
//         method: 'GET',
//         params: params,
//         headers: {
//           memberToken: params.memberToken,
//         },
//       }),
//     }),
//     // 分配一个游客账号 /scheduling/quick/account/without/l/allocation
//     allocateVisitorAccount: mutation<Result<User>, unknown>({
//       query: (params) => ({
//         url: `${BASE_SCHEDULING}/scheduling/quick/account/without/l/allocation`,
//         method: 'POST',
//         body: params,
//       }),
//     }),
//     // 根据学校id获取学年 /schoolYear/getBySchoolId
//     getSchoolYearBySchoolId: query<Result<SchoolYear[]>, { schoolId: string; memberToken: string }>(
//       {
//         query: (params) => ({
//           url: `${BASE_SCHOOL}/schoolYear/getBySchoolId`,
//           params: params,
//           headers: {
//             memberToken: params.memberToken,
//           },
//         }),
//       },
//     ),
//     getUserInfo: query<Result<User>, { memberToken: string }>({
//       query: (params) => ({
//         url: `${BASE_SYSTEM_USER}/systemUser/without/l/user`,
//         params: params,
//       }),
//     }),
//
//     // 获取当前用户权限标识列表
//     getCurrentUserAccessList: query<
//       Result<{ perms: string[] }>,
//       { memberToken: string; productTag: 'KUAIPK' | 'KUAICJ' }
//     >({
//       query: (params) => ({
//         url: `${BASE_SALES}/sales/permission/verification/listPermsAndUrl`,
//         params: {
//           productTag: params.productTag,
//         },
//         headers: {
//           memberToken: params.memberToken,
//         },
//       }),
//     }),
//
//     // 查询用户vip信息
//     getUserVipInfo: query<Result<IUserVipInfo>, { memberToken: string }>({
//       query: (params) => ({
//         url: `${BASE_SALES}/sales/personal-center/vip`,
//         params: {
//           ...params,
//           q: 'kuaicj',
//         },
//       }),
//     }),
//
//     // 更新用户信息
//     updateUserInfo: mutation<
//       Result,
//       {
//         alias?: string;
//         avatar?: string;
//         captcha?: string;
//         mobile?: string;
//         name?: string;
//         sex?: number;
//         format?: number;
//         status?: number;
//       }
//     >({
//       query: (params) => ({
//         url: `${BASE_SYSTEM_USER}/systemUser/update/current`,
//         method: 'POST',
//         body: params,
//       }),
//     }),
//
//     // 查询用户卡券
//     getCouponList: query<Result<Coupon[]>, unknown>({
//       query: () => ({
//         url: `${BASE_SALES}/sales/system-user-coupon/coupon`,
//       }),
//     }),
//
//     // 查询用户购买记录
//     getBuyHistoryList: query<Result<BuyHistory[]>, unknown>({
//       query: () => ({
//         url: `${BASE_SALES}/sales/order/purchaseRecord`,
//       }),
//       providesTags: ['orderList'],
//     }),
//
//     // 查询用户分享白名单
//     getShareWhitelist: query<Result<any>, unknown>({
//       query: (params) => ({
//         url: `${BASE_ANALYSIS}/score-card-roster/share/queryShareWhitelist`,
//         method: 'GET',
//         providesTags: ['shareWhitelist'],
//       }),
//     }),
//
//     // 修改用户分享白名单
//     updateShareWhitelist: mutation<Result<any>, { mobileList: string }>({
//       query: (params) => ({
//         url: `${BASE_ANALYSIS}/score-card-roster/share/updateShareWhitelist`,
//         method: 'POST',
//         body: params,
//         providesTags: ['shareWhitelist'],
//       }),
//     }),
//
//     getInvitedList: query<Result<InvitedRecord[]>, unknown>({
//       query: () => ({
//         url: `${BASE_SALES}/invite-new-user/getInviteNewUserDetail`,
//         params: {
//           inviterType: 2, // 1快排课，2快成绩
//         },
//       }),
//     }),
//
//     /**
//      * 由于产品的虚空需求，中间变更，该为兼容接口
//      * 获取一些用户初始化的信息
//      * @param step 1:获取用户是否为第一次登录，true为第一次，false相反；3:返回为true是第一次自动排，false相反
//      */
//     getUserInitInfo: mutation<Result, { step: 1 | 3 }>({
//       query: (param) => ({
//         url: `${BASE_SALES}/invite-new-user/updateNewUserCouponStep?step=${param.step}`,
//       }),
//     }),
//
//     // 邀请注册
//     registerByInvited: mutation<
//       Result<User>,
//       {
//         avatarUrl?: string;
//         code: string;
//         inviterId: string;
//         nickName?: string;
//         phoneNumber: string;
//         unionid: string;
//       }
//     >({
//       query: (params) => ({
//         url: `${BASE_SYSTEM_USER}/systemUser/wx/without/l/${WX_APPID}/invite/phone`,
//         method: 'GET',
//         params: {
//           ...params,
//           inviterType: 2, // 1快排课，2快成绩
//         },
//       }),
//     }),
//
//     // 校验是否需要完善学校信息
//     checkSchoolInfo: mutation<Result<boolean>, unknown>({
//       query: () => ({
//         url: `${BASE_ANALYSIS}/home/school/check`,
//         method: 'POST',
//       }),
//     }),
//
//     // 获取专属客服二维码
//     getServiceQrcode: query<Result<string>, unknown>({
//       query: () => ({
//         url: `${BASE_SALES}/sales/code/showQrCode`,
//         params: {
//           typeStr: 'kuaicj',
//         },
//       }),
//     }),
//
//     // 获取邀请支付成功二维码
//     getInvitePayedQrcode: query<Result<string>, unknown>({
//       query: () => ({
//         url: `${BASE_SALES}/sales/code/showQrCode`,
//         params: {
//           typeStr: 'kuaicjvip',
//         },
//       }),
//     }),
//
//     // 记录用户关键时间
//     reportImportantUserEvent: query<Result<InvitedRecord[]>, { eventName: string }>({
//       query: (params) => ({
//         url: `/base-docking/docking/jdy/data-event`,
//         params: {
//           product: 'kuaicj',
//           ...params,
//         },
//       }),
//     }),
//
//     // 创建团队邀请
//     createGroupInvitation: mutation<Result<{ code: string }>, { teamId: string }>({
//       query: (params) => ({
//         url: `${BASE_SALES}/team/create-invite`,
//         method: 'POST',
//         body: params,
//       }),
//     }),
//
//     // 获取团队邀请信息
//     getGroupInvitationInfo: query<Result<GroupInvitation>, { code: string }>({
//       query: (params) => ({
//         url: `${BASE_SALES}/team/without/l/invite-detail`,
//         params: params,
//       }),
//       providesTags: ['getGroupInvitationInfo'],
//     }),
//
//     // 接受团队邀请
//     receiveGroupInvitation: mutation<Result, { code: string }>({
//       query: (params) => ({
//         url: `${BASE_SALES}/team/invite/join`,
//         method: 'POST',
//         body: params,
//       }),
//       invalidatesTags: ['getGroupInvitationInfo'],
//     }),
//   }),
// });
//
// export const {
//   useCreateQrcodeMutation,
//   useCheckScanMutation,
//   useLoginByScanWithSceneMutation,
//   useBindWxWithUserPhoneMutation,
//
//   useSendMessageMutation,
//   useLoginByCaptchaMutation,
//   useRegisterByCaptchaMutation,
//   useCheckPhoneNumberIsExistMutation,
//   useLazyGetSchoolInfoQuery,
//   useAllocateVisitorAccountMutation,
//   useLazyGetSchoolYearBySchoolIdQuery,
//   useGetUserInfoQuery,
//   useLazyGetUserInfoQuery,
//
//   useLazyGetCurrentUserAccessListQuery,
//   useUpdateUserInfoMutation,
//   useLazyGetUserVipInfoQuery,
//
//   // 卡券及邀请
//   useGetCouponListQuery,
//   useGetBuyHistoryListQuery,
//   useGetShareWhitelistQuery,
//   useUpdateShareWhitelistMutation,
//   useGetInvitedListQuery,
//   useGetUserInitInfoMutation,
//   useRegisterByInvitedMutation,
//
//   useCheckSchoolInfoMutation,
//
//   useGetServiceQrcodeQuery,
//   useGetInvitePayedQrcodeQuery,
//
//   // 用户行为
//   useLazyReportImportantUserEventQuery,
//
//   // 团队邀请
//   useCreateGroupInvitationMutation,
//   useLazyGetGroupInvitationInfoQuery,
//   useReceiveGroupInvitationMutation,
// } = user;
