import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import {HashRouter} from 'react-router-dom'
import Index from "./routes/Index.js";
import MyMusic from "./routes/MyMusic.js";
import Follow from "./routes/Follow";
import MyCenter from "./routes/MyCenter";
import ListenList from "./routes/ListenList";
import MyNews from "./routes/MyNews";
import MyLever from "./routes/MyLever";
import MyVip from "./routes/MyVip";
import PersonalSetting from "./routes/PersonalSetting";
import Cancellation from "./routes/Cancellation";
import RealName from "./routes/RealName";
import RankingList from "./routes/RankingList";
import SongSheet from "./routes/SongSheet";
import Radio from "./routes/Radio";
import myMusicLoginOut from "./routes/loginOut/MyMusic";
import FollowLoginOut from "./routes/loginOut/Follow";
import Download from "./routes/Download";
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';
function RouterConfig({history}) {
  return (
    <ConfigProvider locale={zhCN}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Index}/>
          <Route path={"/myMusic"} component={MyMusic}/>
          <Route path={"/follow"} component={Follow}/>
          <Route path={"/myCenter"} component={MyCenter}/>
          <Route path={"/listenList"} component={ListenList}/>
          <Route path={"/myNews"} component={MyNews}/>
          <Route path={"/myLever"} component={MyLever}/>
          <Route path={"/myVip"} component={MyVip}/>
          <Route path={"/personalSetting"} component={PersonalSetting}/>
          <Route path={"/cancellation"} component={Cancellation}/>
          <Route path={"/realName"} component={RealName}/>
          <Route path={"/rankingList"} component={RankingList}/>
          <Route path={"/songSheet"} component={SongSheet}/>
          <Route path={"/radio"} component={Radio}/>
          <Route path={"/myMusicLoginOut"} component={myMusicLoginOut}/>
          <Route path={"/followLoginOut"} component={FollowLoginOut}/>
          <Route path={"/download"} component={Download}/>
        </Switch>
      </Router>
    </ConfigProvider>

  );
}

export default RouterConfig;
