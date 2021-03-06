/*
 * 页面跳转路由
 * @Author: eamiear
 * @Date: 2020-07-10 10:44:36
 * @Last Modified by: eamiear
 * @Last Modified time: 2020-07-13 18:25:38
 */


// 中台
const CCP_PREFIX = '/ccp'

export const CCP_CUSTOMER_PATH = CCP_PREFIX + '/customer/list'
export const CCP_CUSTOMER_DETAIL_PATH = CCP_PREFIX + '/customer/list/detail'

// 养老

const CPC_PREFIX = '/cpc'

export const CPC_ELDER_APPROVE_DETAIL = CPC_PREFIX + '/elder/approve/detail'

export const CPC_ELDER_LIST_DETAIL = CPC_PREFIX + '/elder/list/detail'

export const CPC_SERVICE_APPROVE_DETAIL = CPC_PREFIX + '/service/approval/detail'

export const CPC_SERVICE_RECORD_DETAIL = CPC_PREFIX + '/service/record/detail'

// 供应商

const SSC_PREFIX = '/ssc'

export const SSC_ORDER_LIST_DETAIL = SSC_PREFIX + '/order/detail'

export const SSC_SERVICE_ORDER_DETAIL = SSC_PREFIX + '/service/order/detail'
