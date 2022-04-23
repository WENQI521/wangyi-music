import api from "../services/index.js";

export default {
  namespace: 'MusicModal',
  state: {
    bannerList: []
  },
  effects: {
    * fetch({payload}, {call, put}) {  // eslint-disable-line
      yield put({type: 'save'});
    },
    * watchGetBanner({payload}, {put, call}) {
      const res = yield call(api.music.getBannerApi);
      console.log("res", res);
      if (res.code && res.code === 200) {
        yield put({
          type: "setBannerList",
          payload: res.banners
        })
      }
    },

  },

  reducers: {
    save(state, action) {
      return {...state, ...action.payload};
    },
    setBannerList(state, action) {
      return {
        ...state,
        bannerList: action.payload
      }
    }
  },

};
