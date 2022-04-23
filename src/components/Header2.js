import React from "react";
import { SearchOutlined,MailOutlined } from '@ant-design/icons';
import styles from "./css/header.css";
export default function Header2(props) {
  function goNews() {
    props.history.push("/myNews")
  }
  return(
    <div style={{position:"fixed",width:"100%",zIndex:100}}>
      <div  style={{backgroundColor:"#242424",height:"69px",lineHeight:"69px",color:"white",textAlign:"center"}}>
        <div style={{width:"98%",margin:"0 auto",height:70,display:"flex",justifyContent: 'space-between'}}>
              <span className={styles.wyIcon}></span>
            <div style={{alignItems:"center",height:"100%"}}>
              <span>小肥宅仙女</span>
              <MailOutlined style={{fontWeight:"bold",marginLeft:10}} onClick={goNews}/>
                <a style={{color:"#787878",marginLeft:15}}>|&nbsp;&nbsp;&nbsp;退出</a>
            </div>
        </div>
      </div>
    </div>
  )
}
