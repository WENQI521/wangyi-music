import React from "react";
import {Layout} from "antd";
import { Route, Switch} from 'dva/router';
import My from "../../../routes/myNewsComponents/My";
import News from "../../../routes/myNewsComponents/News";
import Notice from "../../../routes/myNewsComponents/Notice";
import Comment from "../../../routes/myNewsComponents/Comment";
const {Content} = Layout;
export default function MyNewsContent() {
  return (
    <Content style={{minHeight: "100vh", backgroundColor: "#ffffff", overflow: 'initial',marginTop:70,marginLeft:242}} className="site-layout-background">
      <Switch>
        <Route path={"/myNews/my"} component={My}/>
        <Route path={"/myNews/news"} component={News}/>
        <Route path={"/myNews/notice"} component={Notice}/>
        <Route path={"/myNews/comment"} component={Comment}/>
      </Switch>
    </Content>
  )
}
