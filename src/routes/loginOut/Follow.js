import React from "react";
import Header from "../../components/Header";
import songStyle from "../css/SongSheet.css";
import Footer from "../../components/Footer";
import followStyle from "./css/follow.css"
export default function Follow() {
return(
  <div>
    <Header/>
    <div className={songStyle.container}>
      <div className={songStyle.main}>
        <div>
          <div className={followStyle.bg}>
            <div className={followStyle.textDiv}>
              你可以关注明星和好友品味他们的私房歌单
              <br/>
              通过他们的动态发现更多精彩音乐
            </div>
            <div className={followStyle.btnDiv} onClick={()=>{console.log(11111)}}></div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
)
}
