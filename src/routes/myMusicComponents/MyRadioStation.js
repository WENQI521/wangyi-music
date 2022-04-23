import React, {useState} from "react";
import myRadioStationStyle from "./myMusicComponentsStyle/myRadioStation.css"
import IndexStyle from "../css/Index.css";
export default function MyRadioStation() {
  const [radioStationNum, setRadioStationNum] = useState(0);
  //hover时显示图标 默认为隐藏
  const [show, setShow] = useState(100);//默认隐藏
  return(
    <div>
      <div style={{borderBottom:"2px solid #c20c0c",width:660,margin:"0 auto",marginTop:38}}>
        <div className={myRadioStationStyle.h1Font}> {radioStationNum === 0 ? "我的电台" : "我的电台(" + radioStationNum + ")"}</div>
      </div>
      <ul className={myRadioStationStyle.ul}>
        <li className={myRadioStationStyle.musicItem} onMouseLeave={()=>setShow(100)} onMouseEnter={()=>setShow(1)}>
          <div>
            <img src={require("../../assets/images/myRadioStation1.jpeg")} style={{width:50}} alt=""/>
          </div>
          <div style={{marginLeft:20}}>
            <h3 style={{color: "black"}} className={myRadioStationStyle.titFont}>xxx歌手</h3>
            <div style={{fontSize:9,color:"#333333",display:"block"}}>
              <span>by </span>
              <span>3个mv</span>
            </div>
            {
              show === 1 ? <div>
                <a href="javascript:void (0)" className={myRadioStationStyle.shareIcon}></a>
                <a href="javascript:void (0)" className={myRadioStationStyle.deleteIcon}></a>
              </div> : <div></div>
            }
          </div>
        </li>
      </ul>


    </div>
  )
}
