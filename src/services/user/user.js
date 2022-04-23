import React from "react";
import request from "../../utils/request";
export default{
   //密码登录
   loginApi(data) {
    return request(`/login/cellphone?phone=${data.phone}&password=${data.password}`,{method:"GET"})
  },
//   获取验证码
  getCodeApi(data){
     return request(`/captcha/sent/?phone=${data.phone}`,{method:"GET"});
  },
//  验证验证码
  checkCodeApi(data){
     return request(`/captcha/verify?phone=${data.phone}&captcha=${data.code}`,{method:"GET"})
  },
//  邮箱登录
  emailApi(data){
     return request(`/login?email=${data.email}&password=${data.password}`,{method:"GET"})
  },

//  生成二维码唯一key
  createMaKeyApi(){
     return request(`/login/qr/key`,{method:"GET"});
  }
  ,
//  根据key生成二维码
  createMaApi(data){
     return request(`/login/qr/create?qrimg=${data.key}`,{method:"GET"})
  },
//  检测二维码状态
  checkMaApi(data){
     return request(`/login/qr/check?key=${data.key}&timerstamp=${Date.now()}`,{method:"GET",withCredentials: true});
  },
//  检查登录状态
  checkLoginStatusApi(){
     return request(`/login/status?cookie=${localStorage.getItem("cookie")}`,{method:"GET",withCredentials: true})
  },
//  刷新登录
  refreshLoginApi(){
   return request(`/login/refresh?cookie=${localStorage.getItem("cookie")}`,{method:"GET",withCredentials: true})
  },
//  获取当前用户的登录信息
  getLoginUserApi(data){
     return request(`/user/detail?uid=${data.id}?cookie=${localStorage.getItem("cookie")}`,{method:"GET",withCredentials: true})
  },
//  退出登录
  loginOutApi(){
     return request(`/logout?cookie=${localStorage.getItem("cookie")}`,{method:"GET",withCredentials: true});
  }

}
