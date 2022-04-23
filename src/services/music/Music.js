import request from "../../utils/request";
export default{
  getBannerApi(data) {
    return request(`/banner?type=0`,{method:"GET"});
  },
//  获取热门推荐歌曲
  getHotSongsApi(){
    return request(`/playlist/hot`,{method:"GET"})
  },
//  获取歌单
  getMusicItemApi(){
    return request(`/personalized?limit=${8}`,{method:"GET"})
  },
//  获取每日推荐歌曲
  getDayMusicListApi(){
    return request(`/recommend/resource?cookie=${localStorage.getItem("cookie")}`,{method:"GET"})
  },
//  新碟上架
  getNewDisApi(){
    return request(`/album/list?limit=10`,{method:"GET"});
  },
//  获取所有榜单
  getAllTopListApi(){
    return request(`/toplist`,{method:"GET"});
  },
  getTopListByIdApi(data){
    return request(`/playlist/detail?id=${data.id}`,{method:"GET"});
  },
//  获取入驻歌手
  getSingerApi(){
    return request(`/top/artists?limit=${5}`,{method:"GET"})
  },
//  热门主播
  getHotPlayerApi(){
    return request(`/dj/hot?limit=${5}`,{method:"GET"})
  }
}
