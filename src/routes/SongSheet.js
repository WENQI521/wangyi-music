import React,{useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import songStyle from "./css/SongSheet.css";
import {Button, Pagination} from "antd";
import {DownOutlined} from "@ant-design/icons";
import Nav from "../components/Nav";
export default function SongSheet(props) {
  const [show,setShow]=useState("none");
  function changeShow() {
    if(show==="none"){
      setShow('block');
    }else {
      setShow('none');
    }
  }

//  分页
  function onChange(pageNumber) {
    console.log('Page: ', pageNumber);
  }

  return(
  <div>
    <Header/>
    <Nav/>
    <div className={songStyle.container}>
      <div className={songStyle.main}>
        <div>
          <div className={songStyle.musicListTit} style={{marginTop:110}}>
            <div style={{paddingBottom:10}}>
              <span style={{fontSize: 20}}>全部</span>
              <Button style={{width:100,height:31,color:"#0C73C2",marginLeft:10}} onClick={changeShow}>选择分类<DownOutlined /></Button>
            </div>
            <div>
              <Button style={{backgroundColor:"#bc0d0f",color:"white"}}>热门</Button>
            </div>
          </div>
          <div className={songStyle.box} style={{display:show}}>
            <div style={{borderBottom:"1px solid #ddd",paddingBottom:10,paddingTop:20,paddingLeft:30,position:"relative"}}>
              <i className={songStyle.icon}></i>
              <Button style={{width:75,height:26,fontSize:12}}>全部风格</Button>
            </div>
            <div className={songStyle.flex}>
              <div className={songStyle.label}>
                <i className={`${songStyle.earthIcon} ${songStyle.bg} ${songStyle.labelRight}`}></i>
                <div className={`${songStyle.marginLeft10} ${songStyle.fontWeight}`}>语种</div>
              </div>
              <div className={songStyle.li1}>
                <a>华语</a>
                <a>欧美</a>
                <a>日语</a>
                <a>韩语</a>
                <a>粤语</a>
              </div>
            </div>
            <div className={songStyle.flex}>
              <div className={songStyle.label}>
                <i className={`${songStyle.piano} ${songStyle.bg} ${songStyle.labelRight}`}></i>
                <div className={`${songStyle.marginLeft10} ${songStyle.fontWeight}`}>风格</div>
              </div>
              <div className={songStyle.li1}>
                <a>华语</a>
                <a>欧美</a>
                <a>日语</a>
                <a>韩语</a>
                <a>粤语</a>
                <a>华语</a>
                <a>欧美</a>
                <a>日语</a>
                <a>韩语</a>
                <a>粤语</a>
                <a>华语</a>
                <a>欧美</a>
                <a>日语</a>
                <a>韩语</a>
                <a>粤语</a>
                <a>华语</a>
                <a>欧美</a>
                <a>日语</a>
                <a>韩语</a>
                <a>粤语</a>
                <a>华语</a>
                <a>欧美</a>
                <a>日语</a>
                <a>韩语</a>
                <a>粤语</a>
              </div>
            </div>
            <div className={songStyle.flex}>
              <div className={songStyle.label} >
                <i className={`${songStyle.coffee} ${songStyle.bg} ${songStyle.labelRight}`}></i>
                <div className={`${songStyle.marginLeft10} ${songStyle.fontWeight}`}>场景</div>
              </div>
              <div className={songStyle.li1}>
                <a>华语</a>
                <a>欧美</a>
                <a>日语</a>
                <a>韩语</a>
                <a>粤语</a>
              </div>
            </div>
            <div className={songStyle.flex}>
              <div className={songStyle.label} >
                <i className={`${songStyle.face} ${songStyle.bg} ${songStyle.labelRight}`}></i>
                <div className={`${songStyle.marginLeft10} ${songStyle.fontWeight}`}>情感</div>
              </div>
              <div className={songStyle.li1}>
                <a>华语</a>
                <a>欧美</a>
                <a>日语</a>
                <a>韩语</a>
                <a>粤语</a>
              </div>
            </div>

            <div className={songStyle.flex}>
              <div className={songStyle.label}  style={{paddingBottom:30}}>
                <i className={`${songStyle.music} ${songStyle.bg} ${songStyle.labelRight}`}></i>
                <div className={`${songStyle.marginLeft10} ${songStyle.fontWeight}`}>主题</div>
              </div>
              <div className={songStyle.li1}  style={{paddingBottom:30}}>
                <a>华语</a>
                <a>欧美</a>
                <a>日语</a>
                <a>韩语</a>
                <a>粤语</a>
              </div>
            </div>
          </div>

          {/*歌单*/}
          <div>
            <div className={songStyle.flexAround}>
              <div className={songStyle.musicItemBox}>
                <div className={songStyle.musicItem}>
                  <i className={songStyle.cover}></i>
                  <img src={require("../assets/images/music1.jpeg")} style={{width: 140}} alt=""/>
                  <div className={songStyle.musicIcon}>
                    <a href="javascript:void (0)" className={songStyle.play}></a>
                    <span className={songStyle.listen}></span>
                    <span className={songStyle.playNum}>25万</span>
                  </div>
                </div>
                <a href="javascript:void (0)">好心情营业，笑赢生活点滴温暖</a>
              </div>
              <div className={songStyle.musicItemBox}>
                <div className={songStyle.musicItem}>
                  <i className={songStyle.cover}></i>
                  <img src={require("../assets/images/music1.jpeg")} style={{width: 140}} alt=""/>
                  <div className={songStyle.musicIcon}>
                    <a href="javascript:void (0)" className={songStyle.play}></a>
                    <span className={songStyle.listen}></span>
                    <span className={songStyle.playNum}>25万</span>
                  </div>
                </div>
                <a href="javascript:void (0)">好心情营业，笑赢生活点滴温暖</a>
              </div>
              <div className={songStyle.musicItemBox}>
                <div className={songStyle.musicItem}>
                  <i className={songStyle.cover}></i>
                  <img src={require("../assets/images/music1.jpeg")} style={{width: 140}} alt=""/>
                  <div className={songStyle.musicIcon}>
                    <a href="javascript:void (0)" className={songStyle.play}></a>
                    <span className={songStyle.listen}></span>
                    <span className={songStyle.playNum}>25万</span>
                  </div>
                </div>
                <a href="javascript:void (0)">好心情营业，笑赢生活点滴温暖</a>
              </div>
              <div className={songStyle.musicItemBox}>
                <div className={songStyle.musicItem}>
                  <i className={songStyle.cover}></i>
                  <img src={require("../assets/images/music1.jpeg")} style={{width: 140}} alt=""/>
                  <div className={songStyle.musicIcon}>
                    <a href="javascript:void (0)" className={songStyle.play}></a>
                    <span className={songStyle.listen}></span>
                    <span className={songStyle.playNum}>25万</span>
                  </div>
                </div>
                <a href="javascript:void (0)">好心情营业，笑赢生活点滴温暖</a>
              </div>
              <div className={songStyle.musicItemBox}>
                <div className={songStyle.musicItem}>
                  <i className={songStyle.cover}></i>
                  <img src={require("../assets/images/music1.jpeg")} style={{width: 140}} alt=""/>
                  <div className={songStyle.musicIcon}>
                    <a href="javascript:void (0)" className={songStyle.play}></a>
                    <span className={songStyle.listen}></span>
                    <span className={songStyle.playNum}>25万</span>
                  </div>
                </div>
                <a href="javascript:void (0)">好心情营业，笑赢生活点滴温暖</a>
              </div>
            </div>

            {/*分页*/}
            <div style={{marginTop:40,textAlign:"center"}}>
              <Pagination showQuickJumper defaultCurrent={1} pageSize={4} total={50} onChange={onChange}/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  </div>
)
}
