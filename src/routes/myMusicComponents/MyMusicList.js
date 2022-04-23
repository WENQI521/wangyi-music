import React, {useState} from "react";
import {Button, Input} from "antd";
import { Link} from 'dva/router'
import MusicListStyle from "./myMusicComponentsStyle/myMusicListStyle.css";

const {TextArea} = Input;
export default function MyMusicList() {
  const [show, setShow] = useState(100);//默认隐藏
  const musicList = [
    {name: "111"},
    {name: "222"},
    {name: "333"},
    {name: "444"}
  ]
  return (
    <div style={{border:"1px solid #999999",borderTop:"none",minHeight:"100vh",paddingBottom:30}}>
      <div className={MusicListStyle.titBox}>
        <div>
          <img src={require("../../assets/images/myMusicList1.jpeg")} alt=""/>
        </div>
        <div>
          <div className={`${MusicListStyle.flex} ${MusicListStyle.spaceBetween}`}>
            <div style={{display:"flex"}}>
              <div className={MusicListStyle.musicList}></div>
              <h2 style={{ marginLeft: 10}}>我喜欢的音乐</h2>
            </div>
            <div>
              <span className={MusicListStyle.editIcon}>　</span>
              <a><Link to="/myMusic/editMusicList">编辑</Link></a>
            </div>
          </div>
          <div className={MusicListStyle.flex}>
            <img src={require("../../assets/images/userImg.jpeg")} style={{width: 35}} alt=""/>
            <a style={{marginLeft: 15, fontSize: 8, color: "#0c73c2"}}>用户名</a>
            <span style={{marginLeft: 15, fontSize: 8}}>用户创建时间</span>
          </div>
          <div className={MusicListStyle.flex}>
            <a href="javascript:void (0)" className={MusicListStyle.icon1}><span
              style={{color: "white", position: "absolute", right: 4, top: 10, fontSize: 8}}>播放</span></a>
            <a href="javascript:void (0)" className={MusicListStyle.icon2}></a>
            <a href="javascript:void (0)" className={MusicListStyle.icon3}><span
              style={{color: "#666", position: "absolute", right: 0, top: 13, fontSize: 8}}>播放</span></a>
            <a href="javascript:void (0)" className={MusicListStyle.icon4}></a>
            <a href="javascript:void (0)" className={MusicListStyle.icon5}><span
              style={{color: "#666", position: "absolute", right: 0, top: 5, fontSize: 8}}>分享</span></a>
            <a href="javascript:void (0)" className={MusicListStyle.icon4}></a>
            <a href="javascript:void (0)" className={MusicListStyle.icon6}><span
              style={{color: "#666", position: "absolute", right: 0, top: 5, fontSize: 8}}>下载</span></a>
            <a href="javascript:void (0)" className={MusicListStyle.icon4}></a>
            <a href="javascript:void (0)" className={MusicListStyle.icon7}><span
              style={{color: "#666", position: "absolute", right: 0, top: 5, fontSize: 8}}>评论</span></a>
            <a href="javascript:void (0)" className={MusicListStyle.icon4}></a>
          </div>
        </div>
      </div>
      <div className={MusicListStyle.musicListTit}>
        <div>
          <span style={{fontSize: 17, marginLeft: 40}}>歌曲列表</span>
          <span style={{color: "#ccc", fontSize: 8, marginLeft: 20}}>38首</span>
        </div>
        {
          musicList.length>0?<div>
            <span style={{fontSize: 8}}>播放:</span>
            <span style={{color: "red", fontSize: 8, marginRight: 10}}>1200次</span>
          </div>:<div></div>
        }
      </div>
      <div>
        {
          musicList.length > 0 ? <table className={MusicListStyle.tableBox}>
              <thead>
              <tr className={MusicListStyle.tr1}>
                <td colSpan={2}></td>
                <td>歌曲标题</td>
                <td>时长</td>
                <td>歌手</td>
                <td>专辑</td>
              </tr>
              </thead>
              <tbody>
              <tr onMouseEnter={() => setShow(0)} onMouseLeave={() => setShow(100)}>
                <td style={{width: 30}}>1</td>
                <td style={{width: 44}}><a href="javascript:void (0)" className={MusicListStyle.playIcon}></a></td>
                <td style={{width: 304}}>歌名</td>
                <td style={{position: "relative", width: 110}}>{
                  show === 0 ? <div><a className={MusicListStyle.addIcon}></a>
                    <a className={MusicListStyle.collectIcon}></a>
                    <a className={MusicListStyle.shareIcon}></a>
                    <a className={MusicListStyle.downloadIcon}></a>
                    <a className={MusicListStyle.deleteIcon}></a></div> : '04:30'
                }
                </td>
                <td>歌手</td>
                <td>专辑</td>
              </tr>
              <tr onMouseEnter={() => setShow(1)} onMouseLeave={() => setShow(100)}>
                <td style={{width: 30}}>1</td>
                <td style={{width: 44}}><a href="javascript:void (0)" className={MusicListStyle.playIcon}></a></td>
                <td style={{width: 304}}>歌名</td>
                <td style={{position: "relative", width: 110}}>{
                  show === 1 ? <div><a className={MusicListStyle.addIcon}></a>
                    <a className={MusicListStyle.collectIcon}></a>
                    <a className={MusicListStyle.shareIcon}></a>
                    <a className={MusicListStyle.downloadIcon}></a>
                    <a className={MusicListStyle.deleteIcon}></a></div> : '04:30'
                }
                </td>
                <td>歌手</td>
                <td>专辑</td>
              </tr>
              <tr onMouseEnter={() => setShow(2)} onMouseLeave={() => setShow(100)}>
                <td style={{width: 30}}>1</td>
                <td style={{width: 44}}><a href="javascript:void (0)" className={MusicListStyle.playIcon}></a></td>
                <td style={{width: 304}}>歌名</td>
                <td style={{position: "relative", width: 110}}>{
                  show === 2 ? <div><a className={MusicListStyle.addIcon}></a>
                    <a className={MusicListStyle.collectIcon}></a>
                    <a className={MusicListStyle.shareIcon}></a>
                    <a className={MusicListStyle.downloadIcon}></a>
                    <a className={MusicListStyle.deleteIcon}></a></div> : '04:30'
                }
                </td>
                <td>歌手</td>
                <td>专辑</td>
              </tr>
              <tr onMouseEnter={() => setShow(2)} onMouseLeave={() => setShow(100)}>
                <td style={{width: 30}}>1</td>
                <td style={{width: 44}}><a href="javascript:void (0)" className={MusicListStyle.playIcon}></a></td>
                <td style={{width: 304}}>歌名</td>
                <td style={{position: "relative", width: 110}}>{
                  show === 2 ? <div><a className={MusicListStyle.addIcon}></a>
                    <a className={MusicListStyle.collectIcon}></a>
                    <a className={MusicListStyle.shareIcon}></a>
                    <a className={MusicListStyle.downloadIcon}></a>
                    <a className={MusicListStyle.deleteIcon}></a></div> : '04:30'
                }
                </td>
                <td>歌手</td>
                <td>专辑</td>
              </tr>
              <tr onMouseEnter={() => setShow(2)} onMouseLeave={() => setShow(100)}>
                <td style={{width: 30}}>1</td>
                <td style={{width: 44}}><a href="javascript:void (0)" className={MusicListStyle.playIcon}></a></td>
                <td style={{width: 304}}>歌名</td>
                <td style={{position: "relative", width: 110}}>{
                  show === 2 ? <div><a className={MusicListStyle.addIcon}></a>
                    <a className={MusicListStyle.collectIcon}></a>
                    <a className={MusicListStyle.shareIcon}></a>
                    <a className={MusicListStyle.downloadIcon}></a>
                    <a className={MusicListStyle.deleteIcon}></a></div> : '04:30'
                }
                </td>
                <td>歌手</td>
                <td>专辑</td>
              </tr>
              <tr onMouseEnter={() => setShow(2)} onMouseLeave={() => setShow(100)}>
                <td style={{width: 30}}>1</td>
                <td style={{width: 44}}><a href="javascript:void (0)" className={MusicListStyle.playIcon}></a></td>
                <td style={{width: 304}}>歌名</td>
                <td style={{position: "relative", width: 110}}>{
                  show === 2 ? <div><a className={MusicListStyle.addIcon}></a>
                    <a className={MusicListStyle.collectIcon}></a>
                    <a className={MusicListStyle.shareIcon}></a>
                    <a className={MusicListStyle.downloadIcon}></a>
                    <a className={MusicListStyle.deleteIcon}></a></div> : '04:30'
                }
                </td>
                <td>歌手</td>
                <td>专辑</td>
              </tr>
              </tbody>
            </table> :
            <div style={{minHeight:300,display:"flex",flexDirection:"column",justifyContent:"center"}}>
              <h3 className={MusicListStyle.textAlign}>
                <i className={MusicListStyle.emptyIcon}></i>
                <span style={{marginLeft:20}}>暂无音乐</span>
              </h3>
              <p className={MusicListStyle.textAlign} style={{color: "#999999",marginTop:38}}>
                <span>点击</span>
                <i className={MusicListStyle.selectIcon}></i>
                <span>即可将你喜欢的音乐收藏到"我的音乐"　马上去</span><span style={{color: "0C73C2"}}>　发现音乐</span>
              </p>
            </div>

        }

      </div>

      <div className={MusicListStyle.musicListTit} style={{marginTop: 50}}>
        <div>
          <span style={{fontSize: 17, marginLeft: 40}}>评论</span>
          <span style={{color: "#ccc", fontSize: 8, marginLeft: 20}}>共0条评论</span>
        </div>
      </div>
      <div className={MusicListStyle.conmentBox} style={{marginTop: 20}}>
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
              <a className={MusicListStyle.face}></a>
              <a className={MusicListStyle.mail}></a>
            </div>
            <div>
              <Button type="primary" size="small">评论</Button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
