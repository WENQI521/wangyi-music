import fetch from 'dva/fetch';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */

const baseUrl = 'http://jacklv.cn:3000';
export default function request(url, options) {
  if(options.method&&options.method=="POST"){
    if(options.body){
      options.body=JSON.stringify(options.body);
    }
    if(options.params){
      options.params=JSON.stringify(options.params)
    }
    //设置请求头
    options.headers={
      'Content-Type': 'application/json',
      token:localStorage.getItem('token')
    }
    options.credentials = "include"
  }

  return fetch(baseUrl+url, options)
    .then(response => {
      if(response.status===400){
        //    清空本地缓存
        localStorage.clear();
        //    返回登录页
        window.location.pathname = "/";
      }
      return  response.json();
    })
    .then(res=>{
      if(res.code===200){
        return Promise.resolve(res);
      }else {
        return Promise.reject(res);
      }
    })
    .catch(err => ({ err }));
}
