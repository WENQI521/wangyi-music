import React, {useState} from "react";
import musicStyle from "../css/MyMusic.css";
import myRadioStyle from "./myMusicComponentsStyle/myRadio.css";
export default function MyRadio() {
  const [radioNum, setRadioNum] = useState(0);
  return(
    <div>
      <div style={{borderBottom:"2px solid #c20c0c",width:660,margin:"0 auto",marginTop:38}}>
        <div className={musicStyle.h1Font}>
          {radioNum === 0 ? "我的视频" : "我的视频(" + radioNum + ")"}
        </div>
      </div>
      {/*  */}
      <div className={myRadioStyle.flexAround}>
        <div className={myRadioStyle.radioItem}>
          <div className={myRadioStyle.radioBox}>
            <div className={myRadioStyle.topIcon}>
              <a href="javascript:void (0)" className={myRadioStyle.radioIcon}></a>
            </div>
            <img src={require("../../assets/images/music1.jpeg")} style={{width: 140}} alt=""/>
            <span className={myRadioStyle.radioTime}>00:43</span>
          </div>
          <a href="javascript:void (0)" style={{fontSize:12}}>好心情营业，笑赢生活点滴温暖</a>
          <a href="javascript:void (0)" style={{fontSize:9,color:"#333333",display:"block"}}>by xxxx歌手</a>
        </div>
        <div className={myRadioStyle.radioItem}>
          <div className={myRadioStyle.radioBox}>
            <div className={myRadioStyle.topIcon}>
              <a href="javascript:void (0)" className={myRadioStyle.radioIcon}></a>
            </div>
            <img src={require("../../assets/images/music1.jpeg")} style={{width: 140}} alt=""/>
            <span className={myRadioStyle.radioTime}>00:43</span>
          </div>
          <a href="javascript:void (0)" style={{fontSize:12}}>好心情营业，笑赢生活点滴温暖</a>
          <a href="javascript:void (0)" style={{fontSize:9,color:"#333333",display:"block"}}>by xxxx歌手</a>
        </div>
        <div className={myRadioStyle.radioItem}>
          <div className={myRadioStyle.radioBox}>
            <div className={myRadioStyle.topIcon}>
              <a href="javascript:void (0)" className={myRadioStyle.radioIcon}></a>
            </div>
            <img src={require("../../assets/images/music1.jpeg")} style={{width: 140}} alt=""/>
            <span className={myRadioStyle.radioTime}>00:43</span>
          </div>
          <a href="javascript:void (0)" style={{fontSize:12}}>好心情营业，笑赢生活点滴温暖</a>
          <a href="javascript:void (0)" style={{fontSize:9,color:"#333333",display:"block"}}>by xxxx歌手</a>
        </div>
        <div className={myRadioStyle.radioItem}>
          <div className={myRadioStyle.radioBox}>
            <div className={myRadioStyle.topIcon}>
              <a href="javascript:void (0)" className={myRadioStyle.radioIcon}></a>
            </div>
            <img src={require("../../assets/images/music1.jpeg")} style={{width: 140}} alt=""/>
            <span className={myRadioStyle.radioTime}>00:43</span>
          </div>
          <a href="javascript:void (0)" style={{fontSize:12}}>好心情营业，笑赢生活点滴温暖</a>
          <a href="javascript:void (0)" style={{fontSize:9,color:"#333333",display:"block"}}>by xxxx歌手</a>
        </div>
      </div>
    </div>
  )
}
