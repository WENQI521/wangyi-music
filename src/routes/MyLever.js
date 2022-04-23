import React from "react";
import Header from "../components/Header.js";
import Footer from "../components/Footer";
import myLeverStyle from "./css/myLever.css";
import {Progress,Tooltip} from 'antd';
import myCenterStyle from "./css/myCenter.css";
export default function MyLever() {
  const text='\n' +
    '听歌量是指累计播放的歌曲数量而非播放次数，并且实际播放时间过短的歌曲将不纳入计算，每天最多计算300首。\n' +
    '\n' +
    '登录天数是指使用云音乐的天数，在多端同时使用不会被重复计算。\n' +
    '\n'
    return (
        <div>
          <Header/>
          <div style={{backgroundColor:"#f5f5f5",minHeight:"100vh",overflow:"hidden"}}>
            <div style={{marginTop:69}}>
              <div className={myLeverStyle.container}>
                <div className={myLeverStyle.main}>
                  <div className={myLeverStyle.h1Font}>
                    当前等级：
                    <span style={{ position: "relative"}}>
                    <i className={myLeverStyle.leverIcon}></i>
                  </span>
                    <span className={myLeverStyle.leverNum}>7</span>
                  </div>
                  <div>
                    <div className={myLeverStyle.sub}>
                      <div className={myLeverStyle.subbg}>
                        {/*等级背景色*/}
                        <div style={{width:625.44,height:10,backgroundImage:"linear-gradient(to right,#ffa58d,#f96964)"}}>
                          <span></span>
                        </div>
                      </div>
                      <div className={myLeverStyle.subNum}>
                          {/*滑块间隙*/}
                          <div className={myLeverStyle.divison}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        <div className={myLeverStyle.divNum}>
                          <ul>
                            {/*数字*/}
                            <li className={myLeverStyle.before}>0</li>
                            <li className={myLeverStyle.before}>1</li>
                            <li className={myLeverStyle.before}>2</li>
                            <li className={myLeverStyle.before}>3</li>
                            <li className={myLeverStyle.before}>4</li>
                            <li className={myLeverStyle.before}>5</li>
                            <li className={myLeverStyle.before}>6</li>
                            <li className={myLeverStyle.over}>7</li>
                            <li>8</li>
                            <li>9</li>
                            <li>10</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <span style={{fontSize:10,color:"#666"}}>等级数据每天下午2点更新</span>
                    </div>
                  </div>
                  <div style={{borderBottom:"1px solid #ddd",paddingBottom:35}}>
                    <div className={myLeverStyle.h1Font} style={{marginTop:30}}>当前等级特权：</div>
                    <div className={myLeverStyle.font2}>
                      <span style={{color:"red"}}>*</span>
                      <span>60G音乐云盘免费容量</span>
                    </div>
                    <div className={myLeverStyle.font2}>
                      <span style={{color:"red"}}>*</span>
                      <span>黑名单上限80</span>
                    </div>
                    <div className={myLeverStyle.font2}>
                      <span style={{color:"red"}}>*</span>
                      <span>云音乐商城满100减9元优惠券</span>
                    </div>
                    <div className={myLeverStyle.font2}>
                      <span style={{color:"red"}}>*</span>
                      <span>价值400云贝</span>
                    </div>
                    <div  style={{color:"#0E73BA",fontSize:12,marginTop:40}}>
                      <span>了解等级特权></span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div style={{middleAlign:"center"}}>
                       <span>距离下一个等级:</span>
                        <span style={{ position: "relative",marginLeft:10}}><i className={myLeverStyle.leverIcon2}></i></span>
                        <span className={myLeverStyle.leverNum2}>8</span>
                        <span style={{position:"relative"}}>
                           <Tooltip placement="bottom" title={text} color="#2db7f5" >
                             <i  className={myLeverStyle.icon}></i>
                           </Tooltip>
                        </span>
                      </div>
                      <div style={{fontSize:10,color:"#999999",marginTop:30}}>
                        <span>听歌：</span>
                        <Progress percent={70} size="small" style={{width:190}} strokeColor="#f75757" />
                        <span style={{marginLeft:10}}>还需听歌1000首</span>
                      </div>
                      <div style={{fontSize:10,color:"#999999",marginTop:20}}>
                        <span>登录：</span>
                        <Progress percent={100} size="small" style={{width:190}} strokeColor="#f75757" />
                        <span style={{marginLeft:10}}>还需登录0天</span>
                      </div>
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
