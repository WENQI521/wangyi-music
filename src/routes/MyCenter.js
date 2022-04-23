import React, {useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MusicListStyle from "./myMusicComponents/myMusicComponentsStyle/myMusicListStyle.css";
import {Link} from "dva/router";
import {Button, Tooltip} from "antd";
import myCenterStyle from "./css/myCenter.css";
import IndexStyle from "./css/Index.css";
import myLeverStyle from "./css/myLever.css";

export default function MyCenter() {
  const [show, setShow] = useState(100);//默认隐藏
  //提示内容
  const text = "实际播放时间过短的歌曲将不纳入计算。\n" +
    "\n"
  const musicList = [
    {name: "111"},
    {name: "222"},
    {name: "333"},
    {name: "444"}
  ]
  const MusicItemList = [
    {},
    {},
    {},
    {},

  ]
  return (
    <div style={{overflow: "hidden"}}>
      <Header/>
      <div style={{marginTop: 69, backgroundColor: "#f5f5f5"}}>
        <div className={myCenterStyle.myCenterBox}>
          <div className={MusicListStyle.titBox}>
            <div>
              <img src={require("../assets/images/myMusicList1.jpeg")} alt=""
                   style={{padding: 3, border: "1px solid #999999"}}/>
            </div>
            <div style={{width:670,marginLeft:25}}>
              <div className={`${MusicListStyle.flex} ${MusicListStyle.spaceBetween}`} style={{borderBottom:"1px solid #ddd",paddingBottom:12}}>
                <div style={{display: "flex",alignItems:"center"}}>
                  <span style={{fontSize:22}}>小肥宅仙女</span>
                  <img src={require("../assets/Icon/bigVip.png")} style={{width:50,height:20,marginLeft:10}} alt=""/>
                  <span className={myCenterStyle.lvIcon} style={{marginLeft:10}}>7</span>
                  <span className={myCenterStyle.lvIcon2}></span>
                  <span className={myCenterStyle.sexIcon} style={{marginLeft:10}}></span>
                </div>
                <div>
                  <Button className={myCenterStyle.btn}>编辑个人资料</Button>
                </div>
              </div>
              <div className={MusicListStyle.flex} style={{marginTop:10,fontSize:12}}>
                <div style={{width:66,borderRight:"1px solid #ddd",height:50}}>
                  <div style={{padding:0,margin:0,color:"#666",fontSize:24}}>0</div>
                  <span>动态</span>
                </div>
                <div style={{width:66,borderRight:"1px solid #ddd",height:50,marginLeft:20}}>
                  <div style={{padding:0,margin:0,color:"#666",fontSize:24}}>17</div>
                  <span>关注</span>
                </div>
                <div style={{marginLeft:20}}>
                  <div style={{padding:0,margin:0,color:"#666",fontSize:24}}>0</div>
                  <span>粉丝</span>
                </div>
              </div>
              <div style={{marginLeft:20,marginTop:10}}>所在地区：湖北省 - 武汉市</div>
              <div style={{marginLeft:20,marginTop:10,middleAlign:"center",display:"flex"}}>
                <span>社交网络：</span><i className={myCenterStyle.logo}></i></div>
            </div>
          </div>
          {/*听歌排行*/}
          <div style={{width:900,margin:"0 auto"}}>
            <div className={MusicListStyle.musicListTit}>
              <div>
                <span style={{fontSize: 20,color:"#666666"}}>听歌排行</span>
                <span style={{color: "#ccc", fontSize: 8, marginLeft: 20}}>累计听歌2133首</span>
                <span style={{position:"relative"}}>
                  <Tooltip placement="bottom" title={text} color="#2db7f5" >
                             <i  className={myCenterStyle.icon}></i>
                  </Tooltip>
                </span>
              </div>
              {
                musicList.length > 0 ? <div>
                  <span style={{fontSize: 8}}>最近一周|</span>
                  <span style={{color: "#666", fontSize: 8, marginRight: 10}}>所有时间</span>
                </div> : <div></div>
              }
            </div>
            <div>
              {
                musicList.length > 0 ?
                  <div>
                    <table className={myCenterStyle.tableBox} style={{width:"100%"}}>
                      <tbody>
                      <tr onMouseEnter={() => setShow(0)} onMouseLeave={() => setShow(100)}>
                        <td style={{width: 30}}>1</td>
                        <td style={{width: 44}}><a href="javascript:void (0)" className={myCenterStyle.playIcon}></a></td>
                        <td style={{width: 480,position: "relative"}}>
                          歌名
                          {
                            show === 0 ? <div><a className={myCenterStyle.addIcon}></a>
                              <a className={myCenterStyle.collectIcon}></a>
                              <a className={myCenterStyle.shareIcon}></a>
                              <a className={myCenterStyle.downloadIcon}></a>
                              <a className={myCenterStyle.deleteIcon}></a></div>:<div></div>
                          }
                        </td>
                        <td style={{position:"relative"}}>
                          10次
                          <i style={{backgroundColor:"#4EB4F5",position:"absolute",top:0,left:0,width:346,height:38,opacity:0.1}}></i>
                        </td>
                      </tr>
                      <tr onMouseEnter={() => setShow(1)} onMouseLeave={() => setShow(100)}>
                        <td style={{width: 30}}>1</td>
                        <td style={{width: 44}}><a href="javascript:void (0)" className={myCenterStyle.playIcon}></a></td>
                        <td style={{width: 480,position: "relative"}}>
                          歌名
                          {
                            show === 1 ? <div><a className={myCenterStyle.addIcon}></a>
                              <a className={myCenterStyle.collectIcon}></a>
                              <a className={myCenterStyle.shareIcon}></a>
                              <a className={myCenterStyle.downloadIcon}></a>
                              <a className={myCenterStyle.deleteIcon}></a></div>:<div></div>
                          }
                        </td>
                        <td style={{position:"relative"}}>
                          10次
                          <i style={{backgroundColor:"#4EB4F5",position:"absolute",top:0,left:0,width:346,height:38,opacity:0.1}}></i>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                    <div style={{textAlign:"right",color: "#666",cursor:"pointer"}}>
                      <Link to="/listenList">查看更多></Link>
                    </div>
                  </div>

                  :
                  <div style={{minHeight: 300, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <h3 className={MusicListStyle.textAlign}>
                      <i className={MusicListStyle.emptyIcon}></i>
                      <span style={{marginLeft: 20}}>暂无音乐</span>
                    </h3>
                    <p className={MusicListStyle.textAlign} style={{color: "#999999", marginTop: 38}}>
                      <span>点击</span>
                      <i className={MusicListStyle.selectIcon}></i>
                      <span>即可将你喜欢的音乐收藏到"我的音乐"　马上去</span><span style={{color: "0C73C2"}}>　发现音乐</span>
                    </p>
                  </div>
              }
            </div>

          {/* 我创建的歌单 */}
            <div style={{marginTop:50}}>
              <div className={MusicListStyle.musicListTit}>
                <div>
                  <span style={{fontSize: 20}}>我创建的歌单</span>
                  <img src={require("../assets/Icon/black-r-icon@3x.png")} alt="" style={{display:"inline-block",marginTop:-20}}/>
                  <span style={{fontSize: 20}}>(3)</span>
                </div>
              </div>

              <div className={myCenterStyle.flexAround} style={MusicItemList.length%5==0?{justifyContent:"space-around",width:900}:{}}>
                <div className={myCenterStyle.musicItemBox}>
                  <div className={IndexStyle.musicItem}>
                    <img src={require("../assets/images/music1.jpeg")} style={{width: 140}} alt=""/>
                    <div className={IndexStyle.musicIcon}>
                      <a href="javascript:void (0)" className={IndexStyle.play}></a>
                      <span className={IndexStyle.listen}></span>
                      <span className={IndexStyle.playNum}>25万</span>
                    </div>
                  </div>
                  <a href="javascript:void (0)">好心情营业，笑赢生活点滴温暖</a>
                </div>
              </div>
            </div>

          {/* 我收藏的歌单 */}
            <div style={{marginTop:50}}>
              <div className={MusicListStyle.musicListTit}>
                <div>
                  <span style={{fontSize: 20}}>我收藏的歌单</span>
                  <img src={require("../assets/Icon/black-r-icon@3x.png")} alt="" style={{display:"inline-block",marginTop:-20}}/>
                  <span style={{fontSize: 20}}>(3)</span>
                </div>
              </div>

              <div className={myCenterStyle.flexAround} style={MusicItemList.length%5==0?{justifyContent:"space-around",width:900}:{}}>
                <div className={myCenterStyle.musicItemBox}>
                  <div className={IndexStyle.musicItem}>
                    <img src={require("../assets/images/music1.jpeg")} style={{width: 140}} alt=""/>
                    <div className={IndexStyle.musicIcon}>
                      <a href="javascript:void (0)" className={IndexStyle.play}></a>
                      <span className={IndexStyle.listen}></span>
                      <span className={IndexStyle.playNum}>25万</span>
                    </div>
                  </div>
                  <a href="javascript:void (0)">好心情营业，笑赢生活点滴温暖</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>

    </div>
  )
}
