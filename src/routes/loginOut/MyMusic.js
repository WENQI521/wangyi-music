import React from "react";
import {Button} from "antd";
import Header from "../../components/Header";
import Footer from "../../components/Footer"
import songStyle from "../css/SongSheet.css";
import myMusicStyle from "./css/myMusic.css"
export default function MyMusic() {
return(
  <div>
    <Header/>
    <div className={songStyle.container}>
      <div className={songStyle.main}>
        <div>
          <div className={myMusicStyle.bg}>
            <div className={myMusicStyle.btnDiv} onClick={()=>{console.log(11111)}}></div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
)
}
