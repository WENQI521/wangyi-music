import React from "react";
import Header from "../components/Header";
import songStyle from "./css/SongSheet.css";
import myMusicStyle from "./loginOut/css/myMusic.css";
import Footer from "../components/Footer";
export default function Download() {
  return(
    <div>
      <Header/>
      <div className={songStyle.container}>
        <div className={songStyle.main}>
          <div style={{marginTop:70}}>
           下载
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
