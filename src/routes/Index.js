import Hearder from "../components/Header.js";
import Nav from "../components/Nav";
import {Carousel, Button} from 'antd';
import IndexStyle from "./css/Index.css";
import React, {useRef, useState, useEffect} from "react";
import Footer from "../components/Footer.js";
import {connect} from "dva";
import api from "../services/index.js";

function Index(props) {
  const contextStyle = {
    width: "100%",
    display: "flex",
    height: 273,
    justifyContent: "center",
    backgroundImage: "linear-gradient(to right,rgba(149, 104, 104, 0.67), rgba(4, 111, 144, 0.5), rgba(108, 65, 37, 0.71))"
    // border:"1px solid red"
  }

  //设置左右箭头 获取dom节点
  const card = useRef();
  const card2 = useRef();
  //hover时显示图标 默认为隐藏
  const [show, setShow] = useState(0);//默认隐藏

  //初始换数据
  useEffect(() => {
    getBanner();
    getHotSongs();
    getHotMusicItemList();
    getDayMusic();
    getNewDis();
    getTopList();
    getSinger();
    getHotPlayer();
  }, [])


  //获取轮播图
  const [bannerList, setBannerList] = useState([]);

  async function getBanner() {
    const banners = await api.music.getBannerApi();
    setBannerList(banners.banners || []);
  }

  //获取热门推荐歌曲
  const [hotSongsList, setHotSongsList] = useState([]);
  async function getHotSongs() {
    const res = await api.music.getHotSongsApi();
    setHotSongsList(res.tags);
  }

  //获取热门歌单
  const [hotMusicItem, setMusicItem] = useState([]);
  async function getHotMusicItemList() {
      const res = await api.music.getMusicItemApi();
      setMusicItem(res.result);
  }
  //根据类别进行检索
  function getMusicByType(cat) {
    props.history.push("/songSheet",{cat});
  }

  //获取每日推荐
  const [dayMusic, setDayMusic] = useState([]);
  async function getDayMusic() {
    if (localStorage.getItem("cookie") != null) {
      const res = await api.music.getDayMusicListApi();
      setDayMusic(res.recommend);
    }
  }
  //新碟上架
  const [newDis,setNewDis]=useState([]);
  async function getNewDis() {
      const res = await api.music.getNewDisApi();
      setNewDis(res.products);
  }

  //获取榜单
 // 飙升榜
  const [upList,setUpList]=useState([]);
  //新歌榜
  const [newList,setNewList]=useState([]);
  //原创榜
  const [ownList,setOwnList]=useState([]);
 async function getTopList() {
    const res = await api.music.getAllTopListApi();
    console.log("res",res);
    const Up = res.list.filter(item=>{
      return item.name==="飙升榜"
    })[0];
   const New = res.list.filter(item=>{
     return item.name==="新歌榜"
   })[0];
   const own = res.list.filter(item=>{
     return item.name === "原创榜"
   })[0];
   const upRes = await api.music.getTopListByIdApi({id:Up.id});
   const newRes = await api.music.getTopListByIdApi({id:New.id});
   const ownRes = await api.music.getTopListByIdApi({id:own.id});
   setNewList(newRes.playlist.tracks);
   setUpList(upRes.playlist.tracks);
   setOwnList(ownRes.playlist.tracks);
  }


  //获取入驻歌手
  const [singerList,setSingerList]=useState([]);
 async function getSinger() {
    const res = await api.music.getSingerApi();
    setSingerList(res.artists);
  }

  //获取热门主播
  const [hotPlayer,setHotPlayer]=useState([]);
async function getHotPlayer() {
    const res = await api.music.getHotPlayerApi();
    setHotPlayer(res.djRadios);
 }

  return (
    <div style={{overflow: " hidden"}}>
      <Hearder show={0}/>
      <Nav/>
      <div style={{position: "relative", marginTop: 100}}>
        {/*轮播图*/}
        <Carousel autoplay ref={card} style={{height: 273}}>
          {
            bannerList.map((item, index) => {
              return <div key={index}>
                <div style={contextStyle}>
                  <div>
                    <img style={{margin: "0 auto", width: 736}} src={item.imageUrl} alt=""/>
                  </div>
                  <div className={IndexStyle.bgDownload}></div>
                </div>
              </div>
            })
          }
        </Carousel>
        <span className={IndexStyle.leftIcon} onClick={() => {
          card.current.prev();
        }}>
          <img src={require("../assets/Icon/left.png")} style={{width: 36}} alt=""/>
        </span>
        <span className={IndexStyle.RightIcon} onClick={() => card.current.next()}>
          <img src={require("../assets/Icon/right.png")} style={{width: 36}} alt=""/>
        </span>
      </div>
      <div>
      </div>
      <div className={IndexStyle.container}>
        <div className={IndexStyle.boxLeft}>
          <div>
            {/*热门推荐*/}
            <div className={IndexStyle.circle}>
              <div>
                <a className={IndexStyle.title}>热门推荐</a>
                <div className={IndexStyle.tab1}>
                  {
                    hotSongsList.map((item, index) => {
                      if (index < 5) {
                        return <a onClick={()=>{getMusicByType(item.name)}}>{item.name}<span className={IndexStyle.space}>|</span></a>
                      }
                    })
                  }
                </div>
              </div>
              <div>
                   <span style={{display: "flex", justifyContent: "center"}}>
                   <a className={IndexStyle.more}>更多</a>
                   <i className={IndexStyle.rightIcon}>&nbsp;</i>
                  </span>
              </div>
            </div>
            {/*歌单开始*/}
            <div className={IndexStyle.flexAround}>
              {
                hotMusicItem.map((item, index) => {
                  return <div className={IndexStyle.musicItemBox}  onClick={() => {
                    console.log(item.id)
                  }}>
                    <div className={IndexStyle.musicItem}>
                      <i className={IndexStyle.cover}></i>
                      <img src={item.picUrl} style={{width: 140}} alt=""/>
                      <div className={IndexStyle.musicIcon}>
                        <a className={IndexStyle.play}></a>
                        <span className={IndexStyle.listen}></span>
                        <span className={IndexStyle.playNum}
                              style={{fontSize: 10}}>{parseInt(item.playCount / 10000)}万</span>
                      </div>
                    </div>
                    <a>{item.name}</a>
                  </div>
                })
              }
            </div>

            {/*个性化推荐*/}
            <div>
              {
                localStorage.getItem("cookie") ? <div>
                  <div className={IndexStyle.circle}>
                    <div>
                      <a href="javascript:void (0)" className={IndexStyle.title}>个性化推荐</a>
                    </div>
                  </div>
                  <div className={IndexStyle.flexAround}>
                    <div className={IndexStyle.musicItemBox}>
                      <div className={IndexStyle.musicItem}>
                        <a href="javascript:void (0)" className={IndexStyle.dataIcon}></a>
                        <span className={IndexStyle.date}>星期六</span>
                        <span className={IndexStyle.day}>2</span>
                      </div>
                      <a href="javascript:void (0)">每日歌曲推荐</a>
                      <p className={IndexStyle.like}>根据你的口味生成，每天6:00更新</p>
                    </div>
                    {
                      dayMusic ?
                        dayMusic.map((item, index) => {
                          if (index < 3) {
                            return <div className={IndexStyle.musicItemBox}>
                              <div className={IndexStyle.musicItem} onClick={() => {
                                console.log(item.id)
                              }}>
                                <img src={item.picUrl} style={{width: 140, height: 140}} alt=""/>
                                <div className={IndexStyle.musicIcon}>
                                  <a href="javascript:void (0)" className={IndexStyle.play}></a>
                                  <span className={IndexStyle.listen}></span>
                                  <span className={IndexStyle.playNum}>{parseInt(item.playcount / 10000)}万</span>
                                </div>
                              </div>
                              <a href="javascript:void (0)">{item.name}</a>
                              <a href="javascript:void(0)" className={IndexStyle.like}>{item.copywriter}</a>
                            </div>
                          }
                        }) : <div></div>
                    }
                  </div>
                </div> : <div></div>
              }
            </div>


            {/*  新碟上线*/}
            <div className={IndexStyle.circle}>
              <div>
                <a href="javascript:void (0)" className={IndexStyle.title}>新碟上架</a>
              </div>
              <div>
                   <span style={{display: "flex", justifyContent: "center"}}>
                   <a href="javascript:void (0)" className={IndexStyle.more}>更多</a>
                   <i className={IndexStyle.rightIcon}>&nbsp;</i>
                   </span>
              </div>
            </div>
            <div style={{
              position: "relative",
              width: 680,
              margin: "0 auto",
              backgroundColor: "#f5f5f5",
              marginLeft: 20,
              marginTop: 20,
              border: "1px solid #eee",
              height: 184
            }}>
              <Carousel autoplay arrows={true} draggable={true} ref={card2} style={{paddingLeft:20,paddingRight:20}}>
                <div>
                  <ul className={IndexStyle.ul} style={{padding: 0}}>
                    {
                      newDis.map((item,index)=>{
                        if(index<5){
                          return  <li onClick={()=>{console.log(item.albumId)}}>
                                  <div className={IndexStyle.ul_div}>
                                        <img src={item.coverUrl} style={{width:100,height:100}} alt=""/>
                                        <a href="javascript:void (0)" className={IndexStyle.bg_music}></a>
                                        <a href="javascript:void (0)" className={IndexStyle.play}></a>
                                      </div>
                                      <a className={IndexStyle.overText}>{item.albumName}</a>
                                      <a className={IndexStyle.like}>{item.artistName}</a>
                                  </li>
                        }
                      })
                    }
                  </ul>
                </div>
                <div>
                  <ul className={IndexStyle.ul} style={{padding: 0}}>
                    {
                      newDis.map((item,index)=>{
                        if(index>=5){
                          return  <li onClick={()=>{console.log(item.albumId)}}>
                            <div className={IndexStyle.ul_div}>
                              <img src={item.coverUrl} style={{width:100,height:100}} alt=""/>
                              <a href="javascript:void (0)" className={IndexStyle.bg_music}></a>
                              <a href="javascript:void (0)" className={IndexStyle.play}></a>
                            </div>
                            <a  className={IndexStyle.overText}>{item.albumName}</a>
                            <a className={IndexStyle.like}>{item.artistName}</a>
                          </li>
                        }
                      })
                    }
                  </ul>
                </div>
              </Carousel>
              <span className={IndexStyle.leftIcon} onClick={() => card2.current.prev()} style={{left:1}}>
                <img src={require("../assets/Icon/leftSmall.png")} alt=""/></span>
              <span className={IndexStyle.RightIcon} onClick={() => card2.current.next()} style={{right:1}}>
                <img src={require("../assets/Icon/rightSmall.png")} alt=""/></span>
            </div>
            {/*  榜单*/}
            <div className={IndexStyle.circle}>
              <div>
                <a href="javascript:void (0)" className={IndexStyle.title}>榜单</a>
              </div>
              <div>
                   <span style={{display: "flex", justifyContent: "center"}}>
                   <a href="javascript:void (0)" className={IndexStyle.more}>更多</a>
                   <i className={IndexStyle.rightIcon}>&nbsp;</i>
                   </span>
              </div>
            </div>

            <div className={IndexStyle.boxSort}>
              <div style={{backgroundColor: "#f4f4f4", border: "1px solid #ccc"}}>
                <div className={IndexStyle.titBox}>
                  <div className={IndexStyle.titDiv}>
                    <img className={IndexStyle.titImgBg} src={require("../assets/images/upMusic.jpeg")} alt=""/>
                    <a href="javascript:void(0)" className={IndexStyle.titImgBgIcon}></a>
                  </div>
                  <div className={IndexStyle.titIcon}>
                    <a href="javascript:void(0)" style={{fontWeight: "bold", fontSize: 16}}>飙升榜</a>
                    <a href="javascript:void (0)" className={IndexStyle.titIconPlay}></a>
                    <a href="javascript:void(0)" className={IndexStyle.titIconAdd}></a>
                  </div>
                </div>
                {/*  歌单*/}
                <ul className={IndexStyle.ulList}>
                  {
                    upList.map((item,index)=>{
                      if(index<10){
                        return  <li onMouseLeave={() => setShow(100)}>
                          <div>
                            <span style={{color: "#c10d0c", padding: "0 10px", fontWeight: "bold", marginLeft: 20}}>{index+1}</span>
                            <a href="javascript:void(0)" onMouseEnter={() => setShow(item.id)} style={{fontSize: 12}}>{item.name}</a>
                          </div>
                          {
                            show === item.id ? <div className={IndexStyle.titIcon}>
                              <a href="javascript:void (0)" className={IndexStyle.playSmall}></a>
                              <a href="javascript:void (0)" className={IndexStyle.add}></a>
                              <a href="javascript:void (0)" className={IndexStyle.collect}></a>
                            </div> : <div></div>
                          }
                        </li>
                      }
                    })
                  }
                  <li>
                    <div style={{textAlign: "right", width: "100%", paddingRight: 20}}>
                      <a href="javascript:void(0)">查看全部></a>
                    </div>
                  </li>
                </ul>
              </div>

              <div style={{backgroundColor: "#f4f4f4", border: "1px solid #ccc", borderLeft: "none"}}>
                <div className={IndexStyle.titBox}>
                  <div className={IndexStyle.titDiv}>
                    <img className={IndexStyle.titImgBg} src={require("../assets/images/newMusic.jpeg")} alt=""/>
                    <a href="javascript:void(0)" className={IndexStyle.titImgBgIcon}></a>
                  </div>
                  <div className={IndexStyle.titIcon}>
                    <a href="javascript:void(0)" style={{fontWeight: "bold", fontSize: 16}}>新歌榜</a>
                    <a href="javascript:void (0)" className={IndexStyle.titIconPlay}></a>
                    <a href="javascript:void(0)" className={IndexStyle.titIconAdd}></a>
                  </div>
                </div>
                {/*  歌单*/}
                <ul className={IndexStyle.ulList}>
                  {
                    newList.map((item,index)=>{
                      if(index<10){
                        return  <li onMouseLeave={() => setShow(100)}>
                          <div>
                            <span style={{color: "#c10d0c", padding: "0 10px", fontWeight: "bold", marginLeft: 20,textAlign:"left"}}>{index+1}</span>
                            <a href="javascript:void(0)" onMouseEnter={() => setShow(item.id)} style={{fontSize: 12}}>{item.name}</a>
                          </div>
                          {
                            show === item.id ? <div className={IndexStyle.titIcon}>
                              <a href="javascript:void (0)" className={IndexStyle.playSmall}></a>
                              <a href="javascript:void (0)" className={IndexStyle.add}></a>
                              <a href="javascript:void (0)" className={IndexStyle.collect}></a>
                            </div> : <div></div>
                          }
                        </li>
                      }
                    })
                  }
                  <li>
                    <div style={{textAlign: "right", width: "100%", paddingRight: 20}}>
                      <a href="javascript:void(0)">查看全部></a>
                    </div>
                  </li>
                </ul>
              </div>


              <div style={{backgroundColor: "#f4f4f4", border: "1px solid #ccc", borderLeft: "none"}}>
                <div className={IndexStyle.titBox}>
                  <div className={IndexStyle.titDiv}>
                    <img className={IndexStyle.titImgBg} src={require("../assets/images/ownMusic.jpeg")} alt=""/>
                    <a href="javascript:void(0)" className={IndexStyle.titImgBgIcon}></a>
                  </div>
                  <div className={IndexStyle.titIcon}>
                    <a href="javascript:void(0)" style={{fontWeight: "bold", fontSize: 16}}>原创榜</a>
                    <a href="javascript:void (0)" className={IndexStyle.titIconPlay}></a>
                    <a href="javascript:void(0)" className={IndexStyle.titIconAdd}></a>
                  </div>
                </div>
                {/*  歌单*/}
                <ul className={IndexStyle.ulList}>
                  {
                    ownList.map((item,index)=>{
                      if(index<10){
                        return  <li onMouseLeave={() => setShow(100)}>
                          <div>
                            <span style={{color: "#c10d0c", padding: "0 10px", fontWeight: "bold", marginLeft: 20}}>{index+1}</span>
                            <a href="javascript:void(0)" onMouseEnter={() => setShow(item.id)} style={{fontSize: 12}}>{item.name}</a>
                          </div>
                          {
                            show === item.id ? <div className={IndexStyle.titIcon}>
                              <a href="javascript:void (0)" className={IndexStyle.playSmall}></a>
                              <a href="javascript:void (0)" className={IndexStyle.add}></a>
                              <a href="javascript:void (0)" className={IndexStyle.collect}></a>
                            </div> : <div></div>
                          }
                        </li>
                      }
                    })
                  }
                  <li>
                    <div style={{textAlign: "right", width: "100%", paddingRight: 20}}>
                      <a href="javascript:void(0)">查看全部></a>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
            <div style={{height: 35, width: "100%"}}></div>
          </div>


        </div>
        <div className={IndexStyle.boxRight}>
          {
            localStorage.getItem("loginId") ? <div className={IndexStyle.rightHeader}>
                <div style={{marginTop: 20, paddingBottom: 20}}>
                  <div className={IndexStyle.userImgDiv}>
                    <div style={{padding: 4, border: "1px solid #ccc"}}>
                      <img src={require("../assets/images/userImg.jpeg")} alt=""/>
                    </div>
                    <div>
                      <h4 className={IndexStyle.userNameDiv}>
                        <a href="javascript:void (0)">小肥宅</a>
                        <span className={IndexStyle.vip1}>

                </span>
                      </h4>
                      <span className={IndexStyle.lv}>
                 7
                  <i className={IndexStyle.lvi}></i>
              </span>
                      <div>
                        <Button type="primary" style={{marginTop: 15, borderRadius: 6, width: 95}}>
                          签到
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={IndexStyle.numList}>
                  <div>
                    <div>0</div>
                    <div>动态</div>
                  </div>
                  <div>
                    <div>0</div>
                    <div>关注</div>
                  </div>
                  <div>
                    <div>0</div>
                    <div>粉丝</div>
                  </div>
                </div>
              </div> :
              <div style={{background: "#e6e6e6", fontSize: 12}}>
                <div style={{width: 205, margin: "0 auto", padding: "16px 0", color: "#666"}}>
                  登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
                  <div style={{textAlign: "center"}}>
                    <Button type="primary" danger style={{color: "white"}}>用户登录</Button>
                  </div>
                </div>
              </div>
          }
          <div>
            <div className={IndexStyle.tit}>
              <p>入驻歌手</p>
              <span className={IndexStyle.fontGrey}>查看全部></span>
            </div>
            <div>
              {
                singerList.map((item,index)=>{
                  if(index<5){
                    return   <div className={IndexStyle.flex}>
                                <div>
                                  <img src={item.picUrl} style={{width:62,height:62}} alt=""/>
                                </div>
                                <div style={{marginLeft: 20}}>
                                  <h3>{item.name}</h3>
                                  <p className={IndexStyle.fontGrey}>{item.alias}</p>
                                </div>
                              </div>
                  }
                })
              }
              <Button style={{
                width: 208,
                height: 31,
                marginLeft: 24,
                borderRadius: 4,
                marginTop: 20,
                backgroundColor: "#f4f4f4",
                fontSize: 13,
                fontWeight: "bold"
              }}>申请称为网易音乐人</Button>
            </div>
          </div>


          <div>
            <div className={IndexStyle.tit}>
              <p>热门主播</p>
              <span className={IndexStyle.fontGrey}>查看全部></span>
            </div>
            {
              hotPlayer.map((item,index)=>{
                return    <div className={IndexStyle.flex} style={{backgroundColor: "#ffffff", border: "none"}} onClick={()=>{console.log(item.id)}}>
                            <div>
                              <img src={item.picUrl} style={{width:40,height:40}} alt=""/>
                            </div>
                            <div style={{marginLeft: 10}}>
                              <span style={{display: "block", color: "black"}} className={IndexStyle.fontSmall}>{item.name}</span>
                              <span className={IndexStyle.fontSmall}>{item.rcmdtext}</span>
                            </div>
                          </div>
              })
            }
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    bannerList: state.MusicModal.bannerList
  }
}
export default connect(mapStateToProps)(Index);
