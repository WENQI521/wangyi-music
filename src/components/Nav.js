import React,{useState} from "react";
import navStyle from "./css/nav.css";
import {withRouter} from 'dva/router';
function Nav(props) {
  const NavList = ["推荐","排行榜","歌单","主播电台","歌手","新碟上架"]
  const [click,setClick]=useState(100)
 return(
   <div style={{position:"fixed",width:"100%",zIndex:100,top:68,backgroundColor:"#C20C0C",height:34}}>
     <ul style={{display:"flex",justifyContent:"space-between",alignItems:"center",height:34,width:"43%",marginLeft:240,color:"#FFFFFF"}}>
       {/*{*/}
       {/*  NavList.map((item,index)=>{*/}
       {/*    return <li key={index} style={{listStyle:"none",fontSize:12}} className={click===index?`${navStyle.li} ${navStyle.liClick}`:navStyle.li} onClick={()=>setClick(index)}>{item}</li>*/}
       {/*  })*/}
       {/*}*/}
       <li key={0} style={{listStyle:"none",fontSize:12}} className={click===0?`${navStyle.li} ${navStyle.liClick}`:navStyle.li} onClick={()=>{
         setClick(0);
         props.history.push('/')
       }}>推荐</li>
       <li key={1} style={{listStyle:"none",fontSize:12}} className={click===1?`${navStyle.li} ${navStyle.liClick}`:navStyle.li} onClick={()=>{
         setClick(1);
         props.history.push("/rankingList")
       }}>排行榜</li>
       <li key={2} style={{listStyle:"none",fontSize:12}} className={click===2?`${navStyle.li} ${navStyle.liClick}`:navStyle.li} onClick={()=>{
         setClick(2);
         props.history.push("/songSheet")
       }}>歌单</li>
       <li key={3} style={{listStyle:"none",fontSize:12}} className={click===3?`${navStyle.li} ${navStyle.liClick}`:navStyle.li} onClick={()=>{
         setClick(3);
         props.history.push("/radio");
       }}>主播电台</li>
       <li key={4} style={{listStyle:"none",fontSize:12}} className={click===4?`${navStyle.li} ${navStyle.liClick}`:navStyle.li} onClick={()=>{
         setClick(4);
         props.history.push("/")
       }}>歌手</li>
       <li key={5} style={{listStyle:"none",fontSize:12}} className={click===5?`${navStyle.li} ${navStyle.liClick}`:navStyle.li} onClick={()=>setClick(5)}>新碟上架</li>
     </ul>
   </div>

 )
}

export default withRouter(Nav);
