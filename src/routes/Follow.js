import React, {useRef, useState, createElement} from "react";
import {Comment, Tooltip, Avatar, Image} from 'antd';
import moment from 'moment';
import {DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled} from '@ant-design/icons';
import Header from "../components/Header";
import IndexStyle from "./css/Index.css";
import followStyle from "./css/Follow.css";
import {Button, Carousel} from "antd";

export default function Follow() {
  const contentStyle1 = {
    width: "100%",
    background: '#97c7d9',
    display: "flex",
    justifyContent: "center"
  };
  //设置左右箭头 获取dom节点
  const card = useRef();
  //hover时显示图标 默认为隐藏
  const [show, setShow] = useState(100);//默认隐藏

  //评论
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };

  const actions = [
    <div style={{display: "flex", justifyContent: "right", width: 550, margin: "0 auto"}}>
      <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
      </Tooltip>,
      <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        <span className="comment-action">{dislikes}</span>
      </span>
      </Tooltip>,
      <span key="comment-basic-reply-to">分享</span>
    </div>
  ];

  //是否关注
  const [select, setSelect] = useState(0);
  function changeSelect(index) {
    setSelect(index);
    setTimeout(() => {
      setSelect(0);
    }, 200)
  }

  return (
    <div style={{overflow: "hidden"}}>
      <Header show={2}/>
      <div style={{marginTop: 69}}>
        <div className={followStyle.container}>
          <div className={followStyle.boxLeft}>
            <div className={followStyle.circle}>
              <div>
                <a href="javascript:void (0)" className={IndexStyle.title}>动态</a>
              </div>
              <div>
                   <span style={{display: "flex", justifyContent: "center"}}>
                   <a className={followStyle.titRightIcon1}></a>
                   <a className={followStyle.titRightIcon2}></a>
                   </span>
              </div>
            </div>
            <div>
              <div className={followStyle.comment}>
                <Comment
                  actions={actions}
                  author={<a style={{color: "#0C73C2", fontSize: 14}}>云音乐VIP <img
                    src={require("../assets/Icon/vip.png")} style={{width: 15, height: 15, marginTop: -3}} alt=""/><span
                    style={{color: "#333333"}}>分享歌单</span></a>}
                  avatar={<Avatar shape="square" src={require("../assets/images/musicItem.jpeg")} alt="Han Solo"/>}
                  content={
                    <p>
                      <a style={{color: "#0C73C2"}}>#今日份的皮#</a> “你没事吧？”“我美式😏”
                      <br/>
                      让黑哥看看，上班第一天都有谁在靠咖啡续命？🤔
                      <br/>
                      <a style={{
                        backgroundColor: "#f9f9f9",
                        border: "1px solid #e2e2e2",
                        color: "#0C73C2",
                        fontSize: 10,
                        height: 23,
                        display: "block",
                        width: 80,
                        textAlign: "center"
                      }}>
                        <i className={followStyle.netIcon}> </i>
                        网页链接
                      </a>
                      <a style={{color: "#0C73C2", marginTop: 20}}> #今日份的皮#</a>
                      <div>
                        <div style={{
                          display: "flex",
                          backgroundColor: "#f5f5f5",
                          alignItems: "center",
                          height: 64,
                          width: 545,
                          marginTop: 10
                        }}>
                          <div style={{marginLeft: 10}}>
                            <img src={require("../assets/images/singer.jpeg")} alt=""/>
                          </div>
                          <div style={{marginLeft: 15}}>
                            <h4>
                              <span style={{
                                color: "#e03f40",
                                fontSize: 9,
                                border: "1px solid #e03f40",
                                padding: "1px 5px"
                              }}>歌单</span>
                              <span style={{color: "#333333", marginLeft: 10, fontSize: 13}}>从《如果爱忘了》听|心语推歌墙</span>
                            </h4>
                            <span style={{color: "#999999", fontSize: 10}}>by 云音乐VIP</span>
                          </div>
                        </div>
                      </div>
                      <div className={followStyle.pictureBox}>
                        <Image
                          width={110}
                          src={require("../assets/images/img1.jpeg")}
                        />
                        <Image
                          width={110}
                          src={require("../assets/images/img2.jpeg")}
                        />
                        <Image
                          width={110}
                          src={require("../assets/images/img3.jpeg")}
                        />
                        <Image
                          width={110}
                          src={require("../assets/images/img4.jpeg")}
                        />
                        <Image
                          width={110}
                          src={require("../assets/images/img5.jpeg")}
                        />
                        <Image
                          width={110}
                          src={require("../assets/images/img6.jpeg")}
                        />
                        <Image
                          width={110}
                          src={require("../assets/images/img7.jpeg")}
                        />
                        <Image
                          width={110}
                          src={require("../assets/images/img8.jpeg")}
                        />
                        <Image
                          width={110}
                          src={require("../assets/images/img9.jpeg")}
                        />
                      </div>
                    </p>
                  }
                  datetime={
                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                      <span>{moment().fromNow()}</span>
                    </Tooltip>
                  }
                />
              </div>
            </div>
          </div>
          <div className={IndexStyle.boxRight} style={{width: 296}}>
            <div className={IndexStyle.rightHeader}>
              <div style={{marginTop: 20, paddingBottom: 20}}>
                <div className={IndexStyle.userImgDiv}>
                  <div style={{padding: 4, border: "1px solid #ccc"}}>
                    <img src={require("../assets/images/userImg.jpeg")} alt=""/>
                  </div>
                  <div style={{marginLeft: -30}}>
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
            </div>

            <div>
              <div className={IndexStyle.tit} style={{width: 236}}>
                <p>明星用户</p>
                <span className={IndexStyle.fontGrey}>换一批</span>
              </div>
              <div>
                <div className={IndexStyle.flex}
                     style={{width: 236, backgroundColor: "#ffffff", border: "none", position: "relative"}}
                     onMouseEnter={() => setShow(1)} onMouseLeave={() => setShow(100)}>
                  <div>
                    <img src={require("../assets/images/singerP1.jpeg")} style={{width: 45}} alt=""/>
                  </div>
                  <div style={{marginLeft: 10}}>
                    <span style={{color: "#333333", fontSize: 12}}>
                      张惠妹aMEI
                      <span>
                        <img
                          src={require("../assets/Icon/vip.png")} style={{width: 15, height: 15, marginTop: -3}}
                          alt=""/>
                      </span>
                    </span>
                    <p style={{color: "#9B9B9B", padding: 0, fontSize: 12}}>台湾歌手张惠妹</p>
                    {
                      select === 0 ? <span className={followStyle.addBtn}
                                           onClick={() => changeSelect(1)}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关注</span> :
                        <span className={followStyle.selectBox} onClick={changeSelect}>
                          <span className={followStyle.selectIcon}>　</span>
                          <span style={{fontSize: 12, color: "#666666", marginLeft: 5}}>已关注</span>
                        </span>
                    }

                    {
                      show === 1 ? <i className={followStyle.deleteIcon}></i> : <i></i>
                    }
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={IndexStyle.tit} style={{width: 236}}>
                <p>感兴趣的人</p>
                <span className={IndexStyle.fontGrey}>换一批</span>
              </div>
              <div>
                <div className={IndexStyle.flex}
                     style={{width: 236, backgroundColor: "#ffffff", border: "none", position: "relative"}}
                     onMouseEnter={() => setShow(1)} onMouseLeave={() => setShow(100)}>
                  <div>
                    <img src={require("../assets/images/singerP1.jpeg")} style={{width: 45}} alt=""/>
                  </div>
                  <div style={{marginLeft: 10}}>
                    <span style={{color: "#333333", fontSize: 12}}>
                      张惠妹aMEI
                      <span>
                        <img
                          src={require("../assets/Icon/vip.png")} style={{width: 15, height: 15, marginTop: -3}}
                          alt=""/>
                      </span>
                    </span>
                    <p style={{color: "#9B9B9B", padding: 0, fontSize: 12}}>台湾歌手张惠妹</p>
                    {
                      select === 0 ? <span className={followStyle.addBtn}
                                           onClick={() => changeSelect(2)}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关注</span> :
                        <span className={followStyle.selectBox} onClick={changeSelect}>
                          <span className={followStyle.selectIcon}>　</span>
                          <span style={{fontSize: 12, color: "#666666", marginLeft: 5}}>已关注</span>
                        </span>
                    }
                    {
                      show === 1 ? <i className={followStyle.deleteIcon}></i> : <i></i>
                    }
                  </div>
                </div>
              </div>
            </div>
            <div style={{textAlign:"center"}}>添加微博好友，和他们分享音乐</div>
            <Button style={{
              width: 208,
              height: 31,
              borderRadius: 4,
              marginTop: 20,
              marginLeft: 20,
              backgroundColor: "#f4f4f4",
              fontSize: 13,
              fontWeight: "bold"
            }}>申请称为网易音乐人</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
