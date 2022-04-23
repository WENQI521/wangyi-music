import React, {createElement, useRef, useState} from "react";
import myRadioStationStyle from "../myMusicComponents/myMusicComponentsStyle/myRadioStation.css";
import MusicListStyle from "../myMusicComponents/myMusicComponentsStyle/myMusicListStyle.css";
import followStyle from "../css/Follow.css";
import IndexStyle from "../css/Index.css";
import {Comment, Tooltip, Avatar, Image} from 'antd';
import {DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled} from '@ant-design/icons';
import moment from "moment";
export default function My() {
  const list=[{}]
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
  return(
    <div>
      <div style={{borderBottom:"2px solid #c20c0c",width:660,margin:"0 auto",marginTop:38,paddingBottom:10}}>
        <div className={myRadioStationStyle.h1Font} style={{fontSize:14,fontWeight:"bold"}}>@我的</div>
      </div>

      <div>
        {
          list.length>0?<div>
            <div className={followStyle.boxLeft} style={{border:"none"}}>
              <div>
                <div className={followStyle.comment}>
                  <Comment
                    actions={actions}
                    author={<a style={{color: "#0C73C2", fontSize: 14}}>云音乐VIP <img
                      src={require("../../assets/Icon/vip.png")} style={{width: 15, height: 15, marginTop: -3}} alt=""/><span
                      style={{color: "#333333"}}>评论</span></a>}
                    avatar={<Avatar shape="square" src={require("../../assets/images/musicItem.jpeg")} alt="Han Solo"/>}
                    content={
                      <p>
                        <a style={{color: "#0C73C2"}}>@小肥宅仙女</a> 消息详情...
                        <div style={{backgroundColor:"#f5f5f5",paddingLeft:10}}>
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
                                <img src={require("../../assets/images/singer.jpeg")} alt=""/>
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
                              src={require("../../assets/images/img1.jpeg")}
                            />
                            <Image
                              width={110}
                              src={require("../../assets/images/img2.jpeg")}
                            />
                            <Image
                              width={110}
                              src={require("../../assets/images/img3.jpeg")}
                            />
                            <Image
                              width={110}
                              src={require("../../assets/images/img4.jpeg")}
                            />
                            <Image
                              width={110}
                              src={require("../../assets/images/img5.jpeg")}
                            />
                            <Image
                              width={110}
                              src={require("../../assets/images/img6.jpeg")}
                            />
                            <Image
                              width={110}
                              src={require("../../assets/images/img7.jpeg")}
                            />
                            <Image
                              width={110}
                              src={require("../../assets/images/img8.jpeg")}
                            />
                            <Image
                              width={110}
                              src={require("../../assets/images/img9.jpeg")}
                            />
                          </div>
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
          </div>:<div style={{minHeight:300,display:"flex",flexDirection:"column",justifyContent:"center"}}>
            <h3 className={MusicListStyle.textAlign}>
              <i className={MusicListStyle.emptyIcon}></i>
              <span style={{marginLeft:20}}>暂时没有收到@</span>
            </h3>
          </div>
        }
      </div>
    </div>
  )
}
