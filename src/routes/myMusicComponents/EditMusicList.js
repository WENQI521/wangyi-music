import React from "react";
import editStyle from "./myMusicComponentsStyle/editMusicList.css";
import {Input,Button} from "antd";
const {TextArea} = Input;
export default function EditMusicList() {
  return(
    <div style={{padding:40,fontSize:12}}>
      <div className={`${editStyle.titBox} ${editStyle.borderBottom}`}>
        <span style={{color:"#0C73C2"}}>歌单名</span>
        <span> > </span>
        <span>编辑歌单</span>
      </div>
      <div className={editStyle.titBox} style={{display:"flex"}}>
        <div>
          <div  style={{marginTop:30}}>
            <div style={{display:"inline-block",width:70,textAlign:"right"}}>
              <span style={{color:"red",marginTop:3}}>*　</span>
              <span>歌单：</span>
            </div>
            <Input type="text" style={{width:306,height:32}} readOnly/>
          </div>
          <div style={{marginTop:30}}>
            <span style={{display:"inline-block",width:70,textAlign:"right"}}>标签：</span>
            <span className={editStyle.colorBlue} style={{marginTop:10}}>选择标签</span>
          </div>
          <div>
            <span style={{display:"inline-block",width:70,textAlign:"right"}}></span>
            <span style={{color:"#999999"}}>选择适合的标签，最多选3个</span>
          </div>
          <div style={{display:"flex",marginTop:10}}>
            <span style={{display:"inline-block",width:70,textAlign:"right"}}>介绍：</span>
            <TextArea rows={10} placeholder="评论" maxLength={100} style={{width:306,height:135}}/>
          </div>
          <div  style={{marginTop:40}}>
            <span style={{display:"inline-block",width:70,textAlign:"right"}}></span>
            <Button>保存</Button>
            <Button style={{marginLeft:30}}>取消</Button>
          </div>
        </div>
        <div style={{marginLeft:30,marginTop:40,position:"relative"}}>
          <img src={require("../../assets/images/myMusicList1.jpeg")} alt=""/>
          <a style={{position:"absolute",top:170,left:0,height:30,width:"100%",backgroundColor:"rgba(137,137,137,0.36)",color:"white",textAlign:"center",paddingTop:6}}>编辑</a>
        </div>
      </div>

    </div>
  )
}
