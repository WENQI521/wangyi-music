import React from "react";
import {Layout} from "antd";
import { Route, Switch,withRouter} from 'dva/router';
import Ranking from "../../../routes/rankingComponents/Ranking";
const {Content} = Layout;
 function RankingListContent(props) {
  console.log('content',props)
  return (
    <Content style={{minHeight: "100vh", backgroundColor: "#ffffff", overflow: 'initial',marginTop:70,marginLeft:243}} className="site-layout-background">
      <Switch>
        <Route path={"/rankingList/ranking"} component={Ranking}/>
      </Switch>
    </Content>
  )
}
export default withRouter(RankingListContent)
