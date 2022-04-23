import React, {useRef, useState} from "react";
import {Carousel, Button,Progress} from "antd";
import IndexStyle from "./css/Index.css";
import Header from "../components/Header.js";
import Nav from "../components/Nav";
import Footer from "../components/Footer.js";
import radioStyle from "./css/Radio.css"
import rankingStyle from "./rankingComponents/css/ranking.css";

export default function Radio() {

  const [show, setShow] = useState(100)
  //设置左右箭头 获取dom节点
  const card = useRef();
  return (
    <div>
      <Header/>
      <Nav/>
      <div className={radioStyle.container} style={{overflow: "hidden"}}>
        {/*头部*/}
        <div className={radioStyle.main} style={{marginTop: 120}}>
          <div style={{
            position: "relative",
            margin: "0 auto"
          }}>
            <Carousel arrows={true} draggable={true} ref={card}>
              <div>
                <ul className={radioStyle.ul}>
                  <li>
                    <div className={`${radioStyle.icon} ${radioStyle.icon1}`}></div>
                    <a>情感</a>
                  </li>
                  <li>
                    <div className={`${radioStyle.icon} ${radioStyle.icon2}`}></div>
                    <a>音乐推荐</a>
                  </li>
                  <li>
                    <div className={`${radioStyle.icon} ${radioStyle.icon3}`}></div>
                    <a>有声书</a>
                  </li>
                  <li>
                    <div className={`${radioStyle.icon} ${radioStyle.icon4}`}></div>
                    <a>脱口秀</a>
                  </li>
                  <li>
                    <div className={`${radioStyle.icon} ${radioStyle.icon5}`}></div>
                    <a>创作翻唱</a>
                  </li>
                  <li>
                    <div className={`${radioStyle.icon} ${radioStyle.icon6}`}></div>
                    <a>电音</a>
                  </li>
                  <li>
                    <div className={`${radioStyle.icon} ${radioStyle.icon7}`}></div>
                    <a>知识</a>
                  </li>
                  <li>
                    <div className={`${radioStyle.icon} ${radioStyle.icon8}`}></div>
                    <a>二次元</a>
                  </li>
                  <li>
                    <div className={`${radioStyle.icon} ${radioStyle.icon9}`}></div>
                    <a>明星专区</a>
                  </li>
                  <li>
                    <div className={`${radioStyle.icon} ${radioStyle.icon10}`}></div>
                    <a>生活</a>
                  </li>
                  <li>
                    <div className={`${radioStyle.icon} ${radioStyle.icon11}`}></div>
                    <a>亲子</a>
                  </li>
                  <li>
                    <div className={`${radioStyle.icon} ${radioStyle.icon12}`}></div>
                    <a>新闻资讯</a>
                  </li>
                  <li>
                    <div className={`${radioStyle.icon} ${radioStyle.icon13}`}></div>
                    <a>广播剧</a>
                  </li>
                  <li>
                    <div className={`${radioStyle.icon} ${radioStyle.icon14}`}></div>
                    <a>故事</a>
                  </li>
                  <li>
                    <div className={`${radioStyle.icon} ${radioStyle.icon15}`}></div>
                    <a>人文历史</a>
                  </li>
                  <li>
                    <div className={`${radioStyle.icon} ${radioStyle.icon16}`}></div>
                    <a>娱乐</a>
                  </li>
                  <li>
                    <div className={`${radioStyle.icon} ${radioStyle.icon17}`}></div>
                    <a>相声曲艺</a>
                  </li>
                  <li>
                    <div className={`${radioStyle.icon} ${radioStyle.icon18}`}></div>
                    <a>其他</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className={radioStyle.ul} style={{justifyContent: "left"}}>
                  <li>
                    <div className={`${radioStyle.icon} ${radioStyle.icon19}`}></div>
                    <a>常见问题</a>
                  </li>
                  <li>
                    <div className={`${radioStyle.icon} ${radioStyle.icon20}`}></div>
                    <a>我要做主播</a>
                  </li>
                </ul>
              </div>
            </Carousel>
            <span className={radioStyle.leftIcon} onClick={() => card.current.prev()} style={{marginLeft: -15}}><img
              src={require("../assets/Icon/leftSmall.png")} alt=""/></span>
            <span className={radioStyle.RightIcon} onClick={() => card.current.next()} style={{marginRight: -15}}><img
              src={require("../assets/Icon/rightSmall.png")} alt=""/></span>
          </div>

          {/* 推荐开始*/}
          <div className={`${radioStyle.flex} ${radioStyle.marginTop30}`} style={{justifyContent: "space-between"}}>
            <div>
              <div className={`${radioStyle.flex} ${radioStyle.tit}`} style={{justifyContent: "space-between"}}>
                <h3 className={radioStyle.h3}>推荐节目</h3>
                <span className={radioStyle.font1}>更多 ></span>
              </div>
              <ul className={radioStyle.itemUl}>
                <li className={`${radioStyle.item} ${radioStyle.flex}`} onMouseEnter={() => setShow(0)}
                    onMouseLeave={() => setShow(100)}>
                  <div className={`${radioStyle.flex} ${radioStyle.relative}`}>
                    <img src={require("../assets/images/singer.jpeg")} style={{width: 40, height: 40}}
                         className={radioStyle.marginLeft10} alt=""/>
                    <i className={show === 0 ? radioStyle.play : ""}></i>
                  </div>
                  <div className={radioStyle.marginLeft10}>
                    <h3 className={radioStyle.itemH3}>小王子电台</h3>
                    <p className={radioStyle.itemP}>郑FM0830电台</p>
                  </div>
                  <button className={radioStyle.btn}>明星专区</button>
                </li>
                <li className={`${radioStyle.item} ${radioStyle.flex}`} onMouseEnter={() => setShow(1)}
                    onMouseLeave={() => setShow(100)}>
                  <div className={`${radioStyle.flex} ${radioStyle.relative}`}>
                    <img src={require("../assets/images/singer.jpeg")} style={{width: 40, height: 40}}
                         className={radioStyle.marginLeft10} alt=""/>
                    <i className={show === 1 ? radioStyle.play : ""}></i>
                  </div>
                  <div className={radioStyle.marginLeft10}>
                    <h3 className={radioStyle.itemH3}>小王子电台</h3>
                    <p className={radioStyle.itemP}>郑FM0830电台</p>
                  </div>
                  <button className={radioStyle.btn}>明星专区</button>
                </li>
              </ul>
            </div>

            <div>
              <div className={`${radioStyle.flex} ${radioStyle.tit}`} style={{justifyContent: "space-between"}}>
                <h3 className={radioStyle.h3}>节目排行榜</h3>
                <span className={radioStyle.font1}>更多 ></span>
              </div>
              <ul className={radioStyle.itemUl}>
                <li className={`${radioStyle.item} ${radioStyle.flex}`} onMouseEnter={() => setShow(0)}
                    onMouseLeave={() => setShow(100)}>
                  <div className={radioStyle.marginLeft10}>
                    <div className={radioStyle.num}>01</div>
                    <a href="javascript:void (0)" className={radioStyle.upIcon}>&nbsp;&nbsp;67</a>
                  </div>
                  <div className={`${radioStyle.flex} ${radioStyle.relative}`}>
                    <img src={require("../assets/images/singer.jpeg")} style={{width: 40, height: 40}}
                         className={radioStyle.marginLeft10} alt=""/>
                    <i className={show === 0 ? radioStyle.play : ""}></i>
                  </div>
                  <div className={radioStyle.marginLeft10}>
                    <h3 className={radioStyle.itemH3}>小王子电台</h3>
                    <p className={radioStyle.itemP}>郑FM0830电台</p>
                  </div>
                  <Progress percent={30} size="small"  showInfo="false" className={radioStyle.progress}/>
                </li>

                <li className={`${radioStyle.item} ${radioStyle.flex}`} onMouseEnter={() => setShow(0)}
                    onMouseLeave={() => setShow(100)}>
                  <div className={radioStyle.marginLeft10}>
                    <div className={radioStyle.num}>02</div>
                    <a href="javascript:void (0)" className={radioStyle.downIcon}>&nbsp;&nbsp;67</a>
                  </div>
                  <div className={`${radioStyle.flex} ${radioStyle.relative}`}>
                    <img src={require("../assets/images/singer.jpeg")} style={{width: 40, height: 40}}
                         className={radioStyle.marginLeft10} alt=""/>
                    <i className={show === 0 ? radioStyle.play : ""}></i>
                  </div>
                  <div className={radioStyle.marginLeft10}>
                    <h3 className={radioStyle.itemH3}>小王子电台</h3>
                    <p className={radioStyle.itemP}>郑FM0830电台</p>
                  </div>
                  <Progress percent={30} size="small"  showInfo="false" className={radioStyle.progress}/>
                </li>
                <li className={`${radioStyle.item} ${radioStyle.flex}`} onMouseEnter={() => setShow(0)}
                    onMouseLeave={() => setShow(100)}>
                  <div className={radioStyle.marginLeft10}>
                    <div className={radioStyle.num}>03</div>
                    <a href="javascript:void (0)" className={radioStyle.newIcon}></a>
                  </div>
                  <div className={`${radioStyle.flex} ${radioStyle.relative}`}>
                    <img src={require("../assets/images/singer.jpeg")} style={{width: 40, height: 40}}
                         className={radioStyle.marginLeft10} alt=""/>
                    <i className={show === 0 ? radioStyle.play : ""}></i>
                  </div>
                  <div className={radioStyle.marginLeft10}>
                    <h3 className={radioStyle.itemH3}>小王子电台</h3>
                    <p className={radioStyle.itemP}>郑FM0830电台</p>
                  </div>
                  <Progress percent={30} size="small"  showInfo="false" className={radioStyle.progress}/>
                </li>
                <li className={`${radioStyle.item} ${radioStyle.flex}`} onMouseEnter={() => setShow(0)}
                    onMouseLeave={() => setShow(100)}>
                  <div className={radioStyle.marginLeft10}>
                    <div className={radioStyle.num2}>04</div>
                    <a href="javascript:void (0)" className={radioStyle.newIcon}></a>
                  </div>
                  <div className={`${radioStyle.flex} ${radioStyle.relative}`}>
                    <img src={require("../assets/images/singer.jpeg")} style={{width: 40, height: 40}}
                         className={radioStyle.marginLeft10} alt=""/>
                    <i className={show === 0 ? radioStyle.play : ""}></i>
                  </div>
                  <div className={radioStyle.marginLeft10}>
                    <h3 className={radioStyle.itemH3}>小王子电台</h3>
                    <p className={radioStyle.itemP}>郑FM0830电台</p>
                  </div>
                  <Progress percent={30} size="small"  showInfo="false" className={radioStyle.progress}/>
                </li>

              </ul>
            </div>
          </div>


          {/*  音乐推荐电台*/}
          <div  className={`${radioStyle.marginTop30}`}>
            <div>
              <div className={`${radioStyle.flex} ${radioStyle.tit}`}
                   style={{justifyContent: "space-between", width: "100%"}}>
                <h3 className={radioStyle.h3}>音乐推荐•电台</h3>
                <span className={radioStyle.font1}>更多 ></span>
              </div>
            </div>
            <div className={`${radioStyle.flex}`} style={{justifyContent: "space-between"}}>
              <div>
                <ul className={radioStyle.itemUl2}>
                  <li className={`${radioStyle.item2} ${radioStyle.flex}`} onMouseEnter={() => setShow(0)}
                      onMouseLeave={() => setShow(100)}>
                    <div className={`${radioStyle.flex}`}>
                      <img src={require("../assets/images/singer1.jpeg")} style={{width: 120, height: 120}} alt=""/>
                    </div>
                    <div className={radioStyle.marginLeft20}>
                      <h3 className={`${radioStyle.itemH32}`}>小王子电台</h3>
                      <p className={radioStyle.itemP} style={{marginTop: 20}}>郑FM0830电台</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <ul className={radioStyle.itemUl2}>
                  <li className={`${radioStyle.item2} ${radioStyle.flex}`} onMouseEnter={() => setShow(0)}
                      onMouseLeave={() => setShow(100)}>
                    <div className={`${radioStyle.flex}`}>
                      <img src={require("../assets/images/singer1.jpeg")} style={{width: 120, height: 120}} alt=""/>
                    </div>
                    <div className={radioStyle.marginLeft20}>
                      <h3 className={`${radioStyle.itemH32}`}>小王子电台</h3>
                      <p className={radioStyle.itemP} style={{marginTop: 20}}>郑FM0830电台</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        {/* 生活电台 */}
          <div  className={`${radioStyle.marginTop30}`}>
            <div>
              <div className={`${radioStyle.flex} ${radioStyle.tit}`}
                   style={{justifyContent: "space-between", width: "100%"}}>
                <h3 className={radioStyle.h3}>生活•电台</h3>
                <span className={radioStyle.font1}>更多 ></span>
              </div>
            </div>
            <div className={`${radioStyle.flex}`} style={{justifyContent: "space-between"}}>
              <div>
                <ul className={radioStyle.itemUl2}>
                  <li className={`${radioStyle.item2} ${radioStyle.flex}`} onMouseEnter={() => setShow(0)}
                      onMouseLeave={() => setShow(100)}>
                    <div className={`${radioStyle.flex}`}>
                      <img src={require("../assets/images/singer1.jpeg")} style={{width: 120, height: 120}} alt=""/>
                    </div>
                    <div className={radioStyle.marginLeft20}>
                      <h3 className={`${radioStyle.itemH32}`}>小王子电台</h3>
                      <p className={radioStyle.itemP} style={{marginTop: 20}}>郑FM0830电台</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <ul className={radioStyle.itemUl2}>
                  <li className={`${radioStyle.item2} ${radioStyle.flex}`} onMouseEnter={() => setShow(0)}
                      onMouseLeave={() => setShow(100)}>
                    <div className={`${radioStyle.flex}`}>
                      <img src={require("../assets/images/singer1.jpeg")} style={{width: 120, height: 120}} alt=""/>
                    </div>
                    <div className={radioStyle.marginLeft20}>
                      <h3 className={`${radioStyle.itemH32}`}>小王子电台</h3>
                      <p className={radioStyle.itemP} style={{marginTop: 20}}>郑FM0830电台</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
