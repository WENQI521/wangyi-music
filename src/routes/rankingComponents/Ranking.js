import React, {useState,createElement} from "react";
import rankingStyle from "./css/ranking.css";
import {Button, Input,Comment, Tooltip, Pagination} from "antd";
import moment from 'moment';
import { LikeOutlined,  LikeFilled } from '@ant-design/icons';
import rankStyle from "./css/rank.less";
const {TextArea} = Input;
export default function Ranking(props) {
  console.log("all",props)
  const [show, setShow] = useState(100);//默认隐藏
  const musicList = [
    {name: "111"},
    {name: "222"},
    {name: "333"},
    {name: "444"}
  ]
  //热门评论
  const [likes, setLikes] = useState(0);
  const [action, setAction] = useState(null);

  const like = () => {
    setLikes(1);
    setAction('liked');
  };

  //喜欢，回复
  const actions = [
    <div style={{display: "flex", justifyContent: "right", width: 550, margin: "0 auto"}}>
      <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
      </Tooltip>
      <span key="comment-basic-reply-to">｜回复</span>
    </div>
  ];

//  分页
  function onChange(pageNumber) {
    console.log('Page: ', pageNumber);
  }

  return(
  <div style={{border:"1px solid #999999",borderTop:"none"}}>
    <div className={rankingStyle.titBox}>
      <div>
        <img src={require("../../assets/images/myMusicList1.jpeg")} style={{width:150,height:150,padding:2,border:"1px solid #ddd"}} alt=""/>
      </div>
      <div style={{marginLeft: 20}}>
        <h2 style={{fontWeight:400,marginTop:10}}>飙升榜</h2>
        <div className={rankingStyle.flex} style={{fontSize:8}}>
          <i className={rankingStyle.timeIcon}></i>
          <span style={{marginLeft: 10, color: "#666666"}}>最近更新</span>
          <a style={{ color: "#666666"}} className={rankingStyle.marginLeft15}>04月09日</a>
          <span style={{ color: "#999999"}} className={rankingStyle.marginLeft15}>刚刚更新</span>
        </div>
        <div className={rankingStyle.flex} style={{height:37,color:"#333333",marginTop:30}}>
          <a href="javascript:void (0)" className={rankingStyle.icon1}><span
            style={{color: "white", position: "absolute", right: 4, top: 10, fontSize: 8}}>播放</span></a>
          <a href="javascript:void (0)" className={rankingStyle.icon2}></a>
          <a href="javascript:void (0)" className={rankingStyle.icon3} style={{color:"#BEBEBE",marginLeft:5}}>　　(10000)</a>
          <a href="javascript:void (0)" className={rankingStyle.icon4}></a>
          <a href="javascript:void (0)" className={rankingStyle.icon5} style={{color:"#333333",marginLeft:5}}>　　(10000)</a>
          <a href="javascript:void (0)" className={rankingStyle.icon44}></a>
          <a href="javascript:void (0)" className={rankingStyle.icon6}><span
            style={{color: "#666", position: "absolute", right: 0, top: 5, fontSize: 8}}>下载</span></a>
          <a href="javascript:void (0)" className={rankingStyle.icon44}></a>
          <a href="javascript:void (0)" className={rankingStyle.icon7} style={{color:"#333333"}}>　　(10000)</a>
          <a href="javascript:void (0)" className={rankingStyle.icon44}></a>
        </div>
      </div>
    </div>
    <div style={{padding:"0 30px 40px 40px"}}>
      <div className={rankingStyle.musicListTit}>
        <div>
          <span style={{fontSize: 17}}>歌曲列表</span>
          <span style={{color: "#ccc", fontSize: 8, marginLeft: 20}}>38首</span>
        </div>
        {
          musicList.length>0?<div>
            <span style={{fontSize: 8}}>播放:</span>
            <span style={{color: "red", fontSize: 8, marginRight: 10}}>1200次</span>
          </div>:<div></div>
        }
      </div>
      <div style={{border:"1px solid #ddd"}}>
        {
          musicList.length > 0 ? <table className={rankingStyle.tableBox}>
              <thead>
              <tr className={rankingStyle.tr1}>
                <td colSpan={2}></td>
                <td>标题</td>
                <td>时长</td>
                <td>歌手</td>
              </tr>
              </thead>
              <tbody>
              <tr onMouseEnter={() => setShow(0)} onMouseLeave={() => setShow(100)}>
                <td style={{width: 30}}>1</td>
                <td style={{width: 44}}><a href="javascript:void (0)" className={rankingStyle.newIcon}></a></td>
                <td className={`${rankingStyle.flex} ${rankingStyle.tdBig}`}>
                  <img src={require("../../assets/images/tableSinger.jpeg")} style={{width:50,height:50}} alt=""/>
                  <a href="javascript:void (0)" className={`${rankingStyle.marginLeft15} ${rankingStyle.playIcon}`}></a>
                 <span>歌名</span>
                </td>
                <td style={{position: "relative", width: 110}}>{
                  show === 0 ? <div><a className={rankingStyle.addIcon}></a>
                    <a className={rankingStyle.collectIcon}></a>
                    <a className={rankingStyle.shareIcon}></a>
                    <a className={rankingStyle.downloadIcon}></a></div> : '04:30'
                }
                </td>
                <td>歌手</td>
              </tr>
              <tr onMouseEnter={() => setShow(0)} onMouseLeave={() => setShow(100)}>
                <td style={{width: 30}}>1</td>
                <td style={{width: 44}}><a href="javascript:void (0)" className={rankingStyle.upIcon}>67</a></td>
                <td className={`${rankingStyle.flex} ${rankingStyle.tdBig}`}>
                  <img src={require("../../assets/images/tableSinger.jpeg")} style={{width:50,height:50}} alt=""/>
                  <a href="javascript:void (0)" className={`${rankingStyle.marginLeft15} ${rankingStyle.clickPlayIcon}`}></a>
                  <span>歌名</span>
                  <i className={rankingStyle.mvIcon}></i>
                </td>
                <td style={{position: "relative", width: 110}}>{
                  show === 0 ? <div><a className={rankingStyle.addIcon}></a>
                    <a className={rankingStyle.collectIcon}></a>
                    <a className={rankingStyle.shareIcon}></a>
                    <a className={rankingStyle.downloadIcon}></a></div> : '04:30'
                }
                </td>
                <td>歌手</td>
              </tr>
              <tr onMouseEnter={() => setShow(0)} onMouseLeave={() => setShow(100)}>
                <td style={{width: 30}}>1</td>
                <td style={{width: 44}}><a href="javascript:void (0)" className={rankingStyle.downIcon}>67</a></td>
                <td className={`${rankingStyle.flex} ${rankingStyle.tdBig}`}>
                  <img src={require("../../assets/images/tableSinger.jpeg")} style={{width:50,height:50}} alt=""/>
                  <a href="javascript:void (0)" className={`${rankingStyle.marginLeft15} ${rankingStyle.clickPlayIcon}`}></a>
                  <span>歌名</span>
                  <i className={rankingStyle.mvIcon}></i>
                </td>
                <td style={{position: "relative", width: 110}}>{
                  show === 0 ? <div><a className={rankingStyle.addIcon}></a>
                    <a className={rankingStyle.collectIcon}></a>
                    <a className={rankingStyle.shareIcon}></a>
                    <a className={rankingStyle.downloadIcon}></a></div> : '04:30'
                }
                </td>
                <td>歌手</td>
              </tr>
              <tr onMouseEnter={() => setShow(0)} onMouseLeave={() => setShow(100)}>
                <td style={{width: 30}}>1</td>
                <td style={{width: 44}}><a href="javascript:void (0)" className={rankingStyle.downIcon}>67</a></td>
                <td className={`${rankingStyle.flex} ${rankingStyle.tdSmall}`}>
                  <a href="javascript:void (0)" className={`${rankingStyle.marginLeft15} ${rankingStyle.clickPlayIcon}`}></a>
                  <span>歌名</span>
                  <i className={rankingStyle.mvIcon}></i>
                </td>
                <td style={{position: "relative", width: 110}}>{
                  show === 0 ? <div><a className={rankingStyle.addIcon}></a>
                    <a className={rankingStyle.collectIcon}></a>
                    <a className={rankingStyle.shareIcon}></a>
                    <a className={rankingStyle.downloadIcon}></a></div> : '04:30'
                }
                </td>
                <td>歌手</td>
              </tr>

              </tbody>
            </table> :
            <div style={{minHeight:300,display:"flex",flexDirection:"column",justifyContent:"center"}}>
              <h3 className={rankingStyle.textAlign}>
                <i className={rankingStyle.emptyIcon}></i>
                <span style={{marginLeft:20}}>暂无音乐</span>
              </h3>
              <p className={rankingStyle.textAlign} style={{color: "#999999",marginTop:38}}>
                <span>点击</span>
                <i className={rankingStyle.selectIcon}></i>
                <span>即可将你喜欢的音乐收藏到"我的音乐"　马上去</span><span style={{color: "0C73C2"}}>　发现音乐</span>
              </p>
            </div>
        }
      </div>

      {/*评论*/}
      <div className={rankingStyle.musicListTit} style={{marginTop: 50}}>
        <div>
          <span style={{fontSize: 17}}>评论</span>
          <span style={{color: "#ccc", fontSize: 8, marginLeft: 20}}>共0条评论</span>
        </div>
      </div>
      <div className={rankingStyle.conmentBox} style={{marginTop: 20}}>
        <div>
          <img src={require("../../assets/images/userImg.jpeg")} style={{width: 50}} alt=""/>
        </div>
        <div style={{flexGrow: 1, marginLeft: 10}}>
          <TextArea rows={2} placeholder="评论" maxLength={30}/>
          <div style={{
            position: "relative",
            width: "100%",
            marginTop: 10,
            justifyContent: "space-between",
            display: "flex"
          }}>
            <div>
              <a className={rankingStyle.face}></a>
              <a className={rankingStyle.mail}></a>
            </div>
            <div>
              <Button type="primary" size="small">评论</Button>
            </div>
          </div>
        </div>
      </div>

      {/*精彩评论*/}
      <div>
        <h3 style={{fontSize:12,color:"#333333",marginTop:30,borderBottom:"1px solid #ddd"}}>精彩评论</h3>
        <div>
          <Comment
            style={{borderBottom:"1px solid #ddd",paddingBottom:0}}
            className='ant-comment-inner'
            actions={actions}
            author={<a style={{color:"#0C73C2"}}>Han Solo</a>}
            avatar={
              <img src={require("../../assets/images/userImg.jpeg")} style={{width:50,height:50,borderRadius:0}} alt=""/>}
            content={
              <p>
                评论内容...
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
      {/*最新评价*/}
      <div>
        <h3 style={{fontSize:12,color:"#333333",marginTop:30,borderBottom:"1px solid #ddd"}}>最新评论(2000)</h3>
        <div>
          <Comment
            style={{borderBottom:"1px solid #ddd",paddingBottom:0}}
            className='ant-comment-inner'
            actions={actions}
            author={<a style={{color:"#0C73C2"}}>Han Solo</a>}
            avatar={
              <img src={require("../../assets/images/userImg.jpeg")} style={{width:50,height:50,borderRadius:0}} alt=""/>}
            content={
              <p>
                评论内容...
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

      {/*分页*/}
      <div style={{marginTop:40,textAlign:"center"}}>
        <Pagination showQuickJumper defaultCurrent={1} pageSize={4} total={50} onChange={onChange}/>
      </div>



    </div>



  </div>
)
}
