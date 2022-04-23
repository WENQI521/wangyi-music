import React from "react";
import {Layout} from "antd";
import { Route, Switch} from 'dva/router';
import MySinger from "../../../routes/myMusicComponents/MySinger";
import MyMusicList from "../../../routes/myMusicComponents/MyMusicList";
import MyRadio from "../../../routes/myMusicComponents/MyRadio";
import MyRadioStation from "../../../routes/myMusicComponents/MyRadioStation";
import EditMusicList from "../../../routes/myMusicComponents/EditMusicList";
const {Content} = Layout;
export default function MyContent() {
  return (
    <Content style={{minHeight: "100vh", backgroundColor: "#ffffff", overflow: 'initial',marginTop:70,marginLeft:243}} className="site-layout-background">
      <Switch>
        <Route path={"/myMusic/mySinger"} component={MySinger}/>
        <Route path={"/myMusic/myMusicList"} component={MyMusicList}/>
        <Route path={"/myMusic/myRadio"} component={MyRadio}/>
        <Route path={"/myMusic/myRadioStation"} component={MyRadioStation}/>
        <Route path={"/myMusic/editMusicList"} component={EditMusicList}/>
      </Switch>
    </Content>
  )
}
