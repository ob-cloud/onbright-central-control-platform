import { postAction } from '@/utils/ajax'

// 授权登录模块
const login = (params) => postAction('/auth/login', { ...params, type: 0 })
const logout = (params) => postAction('/auth/logout', params)

export {
  login,
  logout
}
