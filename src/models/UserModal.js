import api from "../services"
import {message} from "antd";
import {routerRedux} from "dva/router";
import {delay} from 'dva/saga';

export default {
  namespace: 'UserModal',

  state: {
    loginUser: {},
    qrimg: ""
  },

  effects: {
    * fetch({payload}, {call, put}) {  // eslint-disable-line
      yield put({type: 'save'});
    },
    //手机密码登录
    * watchPasswordLogin({payload}, {call, put}) {
      const res = yield call(api.user.loginApi, payload);
      if (res.err) {
        if (res.err.code === 502) {
          message.error(res.err.message);
        } else if (res.err.code === 400) {
          message.error(res.err.message);
        }
      } else {
        message.success("登录成功");
        localStorage.setItem("loginUser", JSON.stringify(res.profile));
        localStorage.setItem("token", res.token);
        yield put({
          type: "setLoginUser",
          payload: res.profile
        })
      }
    },
    //获取验证码
    * watchGetCode({payload}, {call, put}) {
      const res = yield call(api.user.getCodeApi, payload);
      if (res.err) {
        if (res.err.code === 400) {
          message.error(res.err.message);
        }
      }

    },
    //验证验证码
    * watchCheckCode({payload}, {call, put}) {
      const res = yield call(api.user.checkCodeApi, payload);
      if (res.err) {
        if (res.err.code === 503) {
          message.error("验证码错误，请重新输入");
        }
      } else if (res.code === 200) {
        message.success("登录成功");
      }
    },

    //  邮箱登录
    * watchEmailLogin({payload}, {call, put}) {
      const res = yield call(api.user.emailApi, payload);
      if (res.err) {
        message.error("邮箱账号错误");
      } else if (res.code === 200) {
        message.success("登录成功");
        localStorage.setItem('token', res.token);
        localStorage.setItem("cookie", res.cookie);
      }
    },

    //  生成二维码唯一key
    * watchCreateMaKey({payload}, {call, put}) {
      const keyRes = yield call(api.user.createMaKeyApi);
      if (keyRes.code === 200) {
        const key = keyRes.data.unikey;
        localStorage.setItem("QRkey",key);
        const res = yield call(api.user.createMaApi, {key});
        yield put({
          type: "setQrimg",
          payload: res.data.qrimg
        })
      }
    }
  },

  reducers: {
    save(state, action) {
      return {...state, ...action.payload};
    },
    setLoginUser(state, action) {
      return {
        ...state,
        loginUser: action.payload
      }
    },
    setQrimg(state, action) {
      return {
        ...state,
        qrimg: action.payload
      }
    }
  },

};
