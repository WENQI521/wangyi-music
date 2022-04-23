import React, {useState} from "react";
import Header from "../components/Header";
import {Button, Tabs, Select} from "antd";
import myVipStyle from "./css/myVip.css";
import Footer from "../components/Footer";

const {TabPane} = Tabs;
const {Option} = Select;

export default function MyVip() {
  const [select, setSelect] = useState(0);//默认选择第一个
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
    {}
  ]

//下拉选择
  function handleChange(value) {
    console.log(`Selected: ${value}`);
  }

  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  }

  return (
    <div style={{overflow: "hidden"}}>
      <Header/>
      <div style={{marginTop: 69, backgroundColor: "#f5f5f5"}}>
        <div className={myVipStyle.myCenterBox}>
          <div className={myVipStyle.titBox}>
            <div className={myVipStyle.aBox}>
              <a href="javascript:void (0)">本月已下载的付费歌曲></a>
              <a href="javascript:void (0)" style={{marginLeft: 20}}>我购买的单曲></a>
            </div>
            <div>
              <img src={require("../assets/images/myMusicList1.jpeg")} alt=""
                   style={{padding: 3, border: "1px solid #999999", width: 120}}/>
            </div>
            <div style={{width: 670, marginLeft: 25}}>
              <div>
                <div style={{display: "flex", alignItems: "center"}}>
                  <span style={{fontSize: 22}}>小肥宅仙女</span>
                  <img src={require("../assets/Icon/bigVip.png")} style={{width: 50, height: 20, marginLeft: 5}}
                       alt=""/>
                </div>
                <div style={{color: "#333333", fontSize: 12, marginTop: 5}}>
                  <span>
                    当前未开通
                  </span>
                </div>
              </div>
              <div style={{marginTop: 20}}>
                <Button className={myVipStyle.btn}>买会员增好友</Button>
                <Button className={myVipStyle.btn} style={{marginLeft: 15}}>使用兑换码</Button>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Tabs defaultActiveKey="1" centered>
                <TabPane key="1"
                         tab={
                           <span>
                    黑胶VIP
                    <img src={require("../assets/Icon/vipIcon.png")} style={{width: 22.8, marginLeft: 5}} alt=""/>
                  </span>
                         }>
                  <div style={{padding: "0 40px"}}>
                    <div className={myVipStyle.main}>
                      <div className={select === 0 ? myVipStyle.mainItem2 : myVipStyle.mainItem}
                           onClick={() => setSelect(0)}>
                        <div className={myVipStyle.share}>
                          <span>推荐</span>
                        </div>
                        <h3 className={myVipStyle.titFont}>连续包月</h3>
                        <h4 className={myVipStyle.moneyFont}><span style={{fontSize: 20}}>￥</span>4.8</h4>
                        <p className={myVipStyle.deleteMoneyFont}>￥13</p>
                        <div className={select === 0 ? myVipStyle.countBox2 : myVipStyle.countBox}><span>限时3.7折</span>
                        </div>
                      </div>
                      <div className={select === 1 ? myVipStyle.mainItem2 : myVipStyle.mainItem}
                           onClick={() => setSelect(1)}>
                        <div className={myVipStyle.share}>
                          <span>私信领喜马季卡</span>
                        </div>
                        <h3 className={myVipStyle.titFont}>连续包年</h3>
                        <h4 className={myVipStyle.moneyFont}><span style={{fontSize: 20}}>￥</span>88</h4>
                        <p className={myVipStyle.deleteMoneyFont}>￥138</p>
                        <div className={select === 1 ? myVipStyle.countBox2 : myVipStyle.countBox}><span>限时6.4折</span>
                        </div>
                      </div>
                      <div className={select === 2 ? myVipStyle.mainItem2 : myVipStyle.mainItem}
                           onClick={() => setSelect(2)}>
                        <h3 className={myVipStyle.titFont}>连续包季</h3>
                        <h4 className={myVipStyle.moneyFont}><span style={{fontSize: 20}}>￥</span>18</h4>
                        <p className={myVipStyle.deleteMoneyFont}>折后￥6/月</p>
                        <div className={select === 2 ? myVipStyle.countBox2 : myVipStyle.countBox}><span>限时4.7折</span>
                        </div>
                      </div>
                      <div className={select === 3 ? myVipStyle.mainItem2 : myVipStyle.mainItem}
                           onClick={() => setSelect(3)}>
                        <div className={myVipStyle.share}>
                          <span>私信领邮箱年卡</span>
                        </div>
                        <h3 className={myVipStyle.titFont}>12个月</h3>
                        <h4 className={myVipStyle.moneyFont}><span style={{fontSize: 20}}>￥</span>158</h4>
                        <p className={myVipStyle.deleteMoneyFont}>￥216</p>
                      </div>
                      <div className={select === 4 ? myVipStyle.mainItem2 : myVipStyle.mainItem}
                           onClick={() => setSelect(4)}>
                        <h3 className={myVipStyle.titFont}>6个月</h3>
                        <h4 className={myVipStyle.moneyFont}><span style={{fontSize: 20}}>￥</span>88</h4>
                        <p className={myVipStyle.deleteMoneyFont}>￥108</p>
                      </div>
                      <div className={select === 5 ? myVipStyle.mainItem2 : myVipStyle.mainItem}
                           onClick={() => setSelect(5)}>
                        <h3 className={myVipStyle.titFont}>3个月</h3>
                        <h4 className={myVipStyle.moneyFont}><span style={{fontSize: 20}}>￥</span>45</h4>
                        <p className={myVipStyle.deleteMoneyFont}>￥54</p>
                      </div>
                      <div className={select === 6 ? myVipStyle.mainItem2 : myVipStyle.mainItem}
                           onClick={() => setSelect(6)}>
                        <h3 className={myVipStyle.titFont}>1个月</h3>
                        <h4 className={myVipStyle.moneyFont}><span style={{fontSize: 20}}>￥</span>16</h4>
                        <p className={myVipStyle.deleteMoneyFont}>￥18</p>
                      </div>
                    </div>
                    <div style={{marginLeft: 20}}>
                      <div style={{marginTop:20}}>
                        <span className={myVipStyle.font}>
                          到期自动续费13元，可取消；优惠仅限1次
                          <img src={require("../assets/Icon/wenhao")} style={{width: 14}} alt=""/>
                        </span>
                      </div>
                      <div style={{marginTop:20}}>
                        <span>选择优惠券</span>
                        <span className={myVipStyle.font1} >兑换优惠券</span>
                      </div>
                      <div style={{marginTop:10}}>
                        <Select size="default" defaultValue="该活动价不支持使用优惠券" onChange={handleChange}
                                style={{width: 200, backgroundColor: "#ffffff"}}>
                          {children}
                        </Select>
                      </div>
                      <div style={{marginTop:20}}>
                        <span>支付方式</span>
                        <div className={myVipStyle.payBox}>
                          <div>
                            <img src={require("../assets/images/code.png")} style={{width: 100}} alt=""/>
                          </div>
                          <div style={{marginLeft: 20}}>
                            <p style={{margin: 0}}>使用支付宝、微信扫码支付</p>
                            <div>
                              <img src={require("../assets/images/money.png")} style={{width: 18}} alt=""/>
                              <img src={require("../assets/images/money2.png")} style={{width: 18, marginLeft: 10}}
                                   alt=""/>
                            </div>
                            <div>
                              <span style={{padding: 0, margin: 0, fontSize: 44, color: "#333333"}}>4.8</span>
                              <span>元</span>
                              <span>
                              (已省
                             <span style={{color: "#FA4F4D"}}>8.2元</span>
                              )</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div style={{marginLeft:20,width:811,margin:"0 auto",textAlign:"center",marginTop:50}}>
                      <h2 style={{padding:0,margin:0}}>
                        <span className={myVipStyle.lineSpan} style={{position:"relative"}}>黑胶VIP特权</span>
                      </h2>
                      <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
                        <div className={myVipStyle.vipIconItem}>
                          <img src={require("../assets/images/vipIcon1")} style={{width:60}} alt=""/>
                          <div>
                            <span>会员曲库</span>
                          </div>
                        </div>
                        <div className={myVipStyle.vipIconItem}>
                          <img src={require("../assets/images/vipIcon2")} style={{width:60}} alt=""/>
                          <div>
                            <span>免费下载</span>
                          </div>
                        </div>
                        <div className={myVipStyle.vipIconItem}>
                          <img src={require("../assets/images/vipIcon1")} style={{width:60}} alt=""/>
                          <div>
                            <span>铃声</span>
                          </div>
                        </div>
                        <div className={myVipStyle.vipIconItem}>
                          <img src={require("../assets/images/vipIcon3")} style={{width:60}} alt=""/>
                          <div>
                            <span>历史日推</span>
                          </div>
                        </div>
                        <div className={myVipStyle.vipIconItem}>
                          <img src={require("../assets/images/vipIcon4")} style={{width:60}} alt=""/>
                          <div>
                            <span>歌词图片</span>
                          </div>
                        </div>
                        <div className={myVipStyle.vipIconItem}>
                          <img src={require("../assets/images/vipIcon5")} style={{width:60}} alt=""/>
                          <div>
                            <span>无损音质</span>
                          </div>
                        </div>
                        <div className={myVipStyle.vipIconItem}>
                          <img src={require("../assets/images/vipIcon6")} style={{width:60}} alt=""/>
                          <div>
                            <span>广告特权</span>
                          </div>
                        </div>
                        <div className={myVipStyle.vipIconItem}>
                          <img src={require("../assets/images/vipIcon7")} style={{width:60}} alt=""/>
                          <div>
                            <span>鲸云音效</span>
                          </div>
                        </div>
                        <div className={myVipStyle.vipIconItem}>
                          <img src={require("../assets/images/vipIcon6")} style={{width:60}} alt=""/>
                          <div>
                            <span>头像挂件</span>
                          </div>
                        </div>
                        <div className={myVipStyle.vipIconItem}>
                          <img src={require("../assets/images/vipIcon6")} style={{width:60}} alt=""/>
                          <div>
                            <span>个性皮肤</span>
                          </div>
                        </div>
                      </div>
                      <h2 style={{padding:0,margin:0}}>
                        <span className={myVipStyle.lineSpan2} style={{position:"relative",fontWeight:400}}>VIP专享下载曲库</span>
                      </h2>
                      <h1 style={{color:"#333333",marginTop:10,fontSize:32,fontWeight:400}}>畅享2559万首VIP下载歌曲</h1>
                      <div><a href="javascript:void (0)" style={{color:"#328AD4"}}>查看全部></a></div>
                      <div style={{display:"flex",justifyContent:"center",marginTop:30,marginLeft:-20}}>
                        <div>
                          <div className={myVipStyle.vipImgItem}>
                            <img src={require("../assets/images/vipImg1.jpeg")} style={{width:160}} alt=""/>
                            <span className={myVipStyle.halfRadio}></span>
                          </div>
                        </div>
                        <div>
                          <div className={myVipStyle.vipImgItem}>
                            <img src={require("../assets/images/vipImg2.jpeg")} style={{width:160}} alt=""/>
                            <span className={myVipStyle.halfRadio}></span>
                          </div>
                        </div>
                        <div>
                          <div className={myVipStyle.vipImgItem}>
                            <img src={require("../assets/images/vipImg3.jpeg")} style={{width:160}} alt=""/>
                            <span className={myVipStyle.halfRadio}></span>
                          </div>
                        </div>
                        <div>
                          <div className={myVipStyle.vipImgItem}>
                            <img src={require("../assets/images/vipImg4.jpeg")} style={{width:160}} alt=""/>
                            <span className={myVipStyle.halfRadio}></span>
                          </div>
                        </div>
                      </div>
                      <div className={myVipStyle.aFootBox}>
                        <a href="javascript:void (0)">黑胶VIP服务协议</a>
                        <a href="javascript:void (0)">音乐包服务协议</a>
                        <a href="javascript:void (0)">自动续费服务协议</a>
                        <a href="javascript:void (0)">常见问题解答</a>
                      </div>
                    </div>

                  </div>


                </TabPane>
                <TabPane key="2"
                         tab={
                           <span>
                        音乐包
                        <img src={require("../assets/Icon/music.png")} style={{width: 12, marginLeft: 5}} alt=""/>
                      </span>
                         }>
                  <div style={{padding: "0 40px"}}>
                    <div className={myVipStyle.main2}>
                      <div className={select === 0 ? myVipStyle.mainItem2 : myVipStyle.mainItem}
                           onClick={() => setSelect(0)}>
                        <div className={myVipStyle.share}>
                          <span>推荐</span>
                        </div>
                        <h3 className={myVipStyle.titFont}>连续包月</h3>
                        <h4 className={myVipStyle.moneyFont}><span style={{fontSize: 20}}>￥</span>8</h4>
                        <p className={myVipStyle.deleteMoneyFont2}>折合￥8/月</p>
                      </div>
                      <div className={select === 4 ? myVipStyle.mainItem2 : myVipStyle.mainItem}
                           onClick={() => setSelect(4)}>
                        <h3 className={myVipStyle.titFont}>12个月</h3>
                        <h4 className={myVipStyle.moneyFont}><span style={{fontSize: 20}}>￥</span>88</h4>
                        <p className={myVipStyle.deleteMoneyFont2}>折合￥8/月</p>
                      </div>
                      <div className={select === 5 ? myVipStyle.mainItem2 : myVipStyle.mainItem}
                           onClick={() => setSelect(5)}>
                        <h3 className={myVipStyle.titFont}>6个月</h3>
                        <h4 className={myVipStyle.moneyFont}><span style={{fontSize: 20}}>￥</span>45</h4>
                        <p className={myVipStyle.deleteMoneyFont2}>折合￥7.5/月</p>
                      </div>
                      <div className={select === 6 ? myVipStyle.mainItem2 : myVipStyle.mainItem}
                           onClick={() => setSelect(6)}>
                        <h3 className={myVipStyle.titFont}>1个月</h3>
                        <h4 className={myVipStyle.moneyFont}><span style={{fontSize: 20}}>￥</span>8</h4>
                        <p className={myVipStyle.deleteMoneyFont2}>折合￥8/月</p>
                      </div>
                    </div>
                    <div style={{marginLeft: 20}}>
                      <div style={{marginTop:20}}>
                        <span className={myVipStyle.font}>
                          到期自动续费，可随时取消
                          <img src={require("../assets/Icon/wenhao")} style={{width: 14}} alt=""/>
                        </span>
                      </div>
                      <div style={{marginTop:20}}>
                        <span>选择优惠券</span>
                        <span className={myVipStyle.font1} >兑换优惠券</span>
                      </div>
                      <div style={{marginTop:10}}>
                        <Select size="default" defaultValue="该套餐暂无可使用的优惠券" onChange={handleChange}
                                style={{width: 200, backgroundColor: "#ffffff"}}>
                          {children}
                        </Select>
                      </div>
                      <div style={{marginTop:20}}>
                        <span>支付方式</span>
                        <div className={myVipStyle.payBox}>
                          <div>
                            <img src={require("../assets/images/code.png")} style={{width: 100}} alt=""/>
                          </div>
                          <div style={{marginLeft: 20}}>
                            <p style={{margin: 0}}>使用支付宝、微信扫码支付</p>
                            <div>
                              <img src={require("../assets/images/money.png")} style={{width: 18}} alt=""/>
                              <img src={require("../assets/images/money2.png")} style={{width: 18, marginLeft: 10}}
                                   alt=""/>
                            </div>
                            <div>
                              <span style={{padding: 0, margin: 0, fontSize: 44, color: "#333333"}}>4.8</span>
                              <span>元</span>
                              <span>
                              (已省
                             <span style={{color: "#FA4F4D"}}>8.2元</span>
                              )</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div style={{marginLeft:20,width:811,margin:"0 auto",textAlign:"center",marginTop:50}}>
                      <h2 style={{padding:0,margin:0}}>
                        <span className={myVipStyle.lineSpan} style={{position:"relative"}}>音乐包特权</span>
                      </h2>
                      <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
                        <div className={myVipStyle.vipIconItem}>
                          <img src={require("../assets/images/vipIcon1")} style={{width:60}} alt=""/>
                          <div>
                            <span>会员曲库</span>
                          </div>
                        </div>
                        <div className={myVipStyle.vipIconItem}>
                          <img src={require("../assets/images/vipIcon2")} style={{width:60}} alt=""/>
                          <div>
                            <span>免费下载</span>
                          </div>
                        </div>
                        <div className={myVipStyle.vipIconItem}>
                          <img src={require("../assets/images/vipIcon1")} style={{width:60}} alt=""/>
                          <div>
                            <span>铃声</span>
                          </div>
                        </div>
                        <div className={myVipStyle.vipIconItem}>
                          <img src={require("../assets/images/vipIcon3")} style={{width:60}} alt=""/>
                          <div>
                            <span>历史日推</span>
                          </div>
                        </div>
                        <div className={myVipStyle.vipIconItem}>
                          <img src={require("../assets/images/vipIcon04")} style={{width:60}} alt=""/>
                          <div>
                            <span>歌词图片</span>
                          </div>
                        </div>
                        <div className={myVipStyle.vipIconItem}>
                          <img src={require("../assets/images/vipIcon5")} style={{width:60}} alt=""/>
                          <div>
                            <span>无损音质</span>
                          </div>
                        </div>
                        <div className={myVipStyle.vipIconItem}>
                          <img src={require("../assets/images/vipIcon06")} style={{width:60}} alt=""/>
                          <div>
                            <span>广告特权</span>
                          </div>
                        </div>
                        <div className={myVipStyle.vipIconItem}>
                          <img src={require("../assets/images/vipIcon07")} style={{width:60}} alt=""/>
                          <div>
                            <span>鲸云音效</span>
                          </div>
                        </div>
                        <div className={myVipStyle.vipIconItem}>
                          <img src={require("../assets/images/vipIcon08")} style={{width:60}} alt=""/>
                          <div>
                            <span>头像挂件</span>
                          </div>
                        </div>
                        <div className={myVipStyle.vipIconItem}>
                          <img src={require("../assets/images/vipIcon09")} style={{width:60}} alt=""/>
                          <div>
                            <span>个性皮肤</span>
                          </div>
                        </div>
                      </div>
                      <h2 style={{padding:0,margin:0}}>
                        <span className={myVipStyle.lineSpan2} style={{position:"relative",fontWeight:400}}>VIP专享下载曲库</span>
                      </h2>
                      <h1 style={{color:"#333333",marginTop:10,fontSize:32,fontWeight:400}}>畅享2559万首VIP下载歌曲</h1>
                      <div><a href="javascript:void (0)" style={{color:"#328AD4"}}>查看全部></a></div>
                      <div style={{display:"flex",justifyContent:"center",marginTop:30,marginLeft:-20}}>
                        <div>
                          <div className={myVipStyle.vipImgItem}>
                            <img src={require("../assets/images/vipImg1.jpeg")} style={{width:160}} alt=""/>
                            <span className={myVipStyle.halfRadio}></span>
                          </div>
                        </div>
                        <div>
                          <div className={myVipStyle.vipImgItem}>
                            <img src={require("../assets/images/vipImg2.jpeg")} style={{width:160}} alt=""/>
                            <span className={myVipStyle.halfRadio}></span>
                          </div>
                        </div>
                        <div>
                          <div className={myVipStyle.vipImgItem}>
                            <img src={require("../assets/images/vipImg3.jpeg")} style={{width:160}} alt=""/>
                            <span className={myVipStyle.halfRadio}></span>
                          </div>
                        </div>
                        <div>
                          <div className={myVipStyle.vipImgItem}>
                            <img src={require("../assets/images/vipImg4.jpeg")} style={{width:160}} alt=""/>
                            <span className={myVipStyle.halfRadio}></span>
                          </div>
                        </div>
                      </div>
                      <div className={myVipStyle.aFootBox}>
                        <a href="javascript:void (0)">黑胶VIP服务协议</a>
                        <a href="javascript:void (0)">音乐包服务协议</a>
                        <a href="javascript:void (0)">自动续费服务协议</a>
                        <a href="javascript:void (0)">常见问题解答</a>
                      </div>
                    </div>
                  </div>
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      <Footer/>

    </div>
  )
}
