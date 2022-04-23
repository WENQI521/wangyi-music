import React, {useState} from "react";
import NewsStyle from "./css/news.css";
import myRadioStationStyle from "../myMusicComponents/myMusicComponentsStyle/myRadioStation.css";
import commentStyle from "./css/comment.css";
export default function Comment() {
  //hover时显示图标 默认为隐藏
  const [show, setShow] = useState(100);//默认隐藏
 return(
   <div>
     <div style={{borderBottom:"2px solid #c20c0c",width:660,margin:"0 auto",marginTop:38}}>
       <div style={{fontSize:14,fontWeight:"bold",display:"flex",height:37,justifyContent:"space-between",alignItems:"center"}}>
         <span>评论</span>
       </div>
     </div>
     <ul className={myRadioStationStyle.ul}>
       <li className={commentStyle.musicItem} onMouseLeave={()=>setShow(100)} onMouseEnter={()=>setShow(1)}>
         <div>
           <img src={require("../../assets/images/myRadioStation1.jpeg")} style={{width:50}} alt=""/>
         </div>
         <div style={{padding:"11px 20px 14px 20px",width:"100%",backgroundColor:"#f2f2f2",height:117,fontSize:10,marginLeft:20}}>
           <h3 style={{color: "#0C73C2",display:"flex",justifyContent:"space-between",width:"100%"}} className={myRadioStationStyle.titFont}>
             <span>xxx歌手</span>
             <span style={{color:"#666"}}>
                3月6日 20:48
                <i className={NewsStyle.timeIcon}></i>
              </span>
           </h3>
           <div style={{color:"#333333",marginTop:10}}>
             <span>回复我：xxxxxx</span>
           </div>
           <div style={{color:"#666",marginTop:10}}>
             <span>我的评论：xxxxxx</span>
           </div>
          <div style={{textAlign:"right",color: "#0C73C2"}}>回复</div>
         </div>
       </li>
     </ul>


   </div>
 )
}
