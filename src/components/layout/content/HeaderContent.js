import React from "react";
import {Layout} from "antd";
import { Route, Switch} from 'dva/router';
import MyMusic from "../../../routes/MyMusic";
const {Content} = Layout;
export default function HeaderContent(){
  return(
    <Content style={{minHeight: "100vh", backgroundColor: "#ffffff", overflow: 'initial',marginTop:70,marginLeft:243}} className="site-layout-background">
      <Switch>
        <Route path={"/myMusic"} component={MyMusic}/>
      </Switch>
    </Content>
  )
}
