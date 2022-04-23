import React, {useState} from "react";
import noticeStyle from "./css/notice.css";
export default function Notice() {
  //hover时显示图标 默认为隐藏
  const [show, setShow] = useState(100);//默认隐藏
  return(
    <div>
      <div style={{borderBottom:"2px solid #c20c0c",width:660,margin:"0 auto",marginTop:38}}>
        <div style={{fontSize:14,fontWeight:"bold",display:"flex",height:37,justifyContent:"space-between",alignItems:"center"}}>
          <span>私信</span>
        </div>
      </div>
      <ul className={noticeStyle.ul}>
        <li className={noticeStyle.musicItem} onMouseLeave={()=>setShow(100)} onMouseEnter={()=>setShow(1)}>
          <div>
            <img src={require("../../assets/images/myRadioStation1.jpeg")} style={{width:50}} alt=""/>
          </div>
          <div style={{marginLeft:20,width:"100%"}}>
            <h3 style={{color: "black",display:"flex",justifyContent:"space-between",width:"100%"}} className={noticeStyle.titFont}>
              <span>xxx赞了你的评论</span>
              <span style={{color:"#666",fontSize:10}}>
                3月6日 20:48
                <i className={noticeStyle.timeIcon}></i>
              </span>
            </h3>
            <div style={{fontSize:9,color:"#333333",display:"block"}}>
              <span>我的评论内容</span>
            </div>
            {
              show === 1 ? <div>
                <a href="javascript:void (0)" className={noticeStyle.deleteIcon}></a>
              </div> : <div></div>
            }
          </div>
        </li>
      </ul>


    </div>
  )
}
