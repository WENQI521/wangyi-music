import React, {useState} from "react";
import musicStyle from "../css/MyMusic.css";
export default function MySinger() {
  const [singer, setSinger] = useState(0);
return(
  <div>
    <div style={{borderBottom:"2px solid #c20c0c",width:660,margin:"0 auto",marginTop:38}}>
      <div className={musicStyle.h1Font}>{singer === 0 ? "我的歌手" : "我的歌手(" + singer + ")"}</div>
    </div>
    <div className={musicStyle.musicItem}>
      <div>
        <img src={require("../../assets/images/myMusic1.jpeg")} alt=""/>
      </div>
      <div style={{marginLeft:20}}>
        <h3 style={{color: "black"}} className={musicStyle.fontTit}>xxx歌手</h3>
        <div className={musicStyle.fontSmall} style={{margin:0}}>
          <span>37个专辑</span>
          <span>3个mv</span>
        </div>
      </div>
    </div>
    <div className={musicStyle.musicItem}>
      <div>
        <img src={require("../../assets/images/myMusic1.jpeg")} alt=""/>
      </div>
      <div style={{marginLeft:20}}>
        <h3 style={{color: "black"}} className={musicStyle.fontTit}>xxx歌手</h3>
        <div className={musicStyle.fontSmall} style={{margin:0}}>
          <span>37个专辑</span>
          <span>3个mv</span>
        </div>
      </div>
    </div>
  </div>
)
}
