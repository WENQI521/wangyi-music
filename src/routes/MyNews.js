import React from "react";
import Header from "../components/Header";
import {Layout} from 'antd';
import musicStyle from "./css/MyMusic.css";
//引入组件
import MyNewsContent from "../components/layout/content/MyNewsContent";
import MyNewsSider from "../components/layout/sider/MyNewsSider";
export default function MyNews() {
  return (
    <div>
      <Header/>
      <div className={musicStyle.container}>
        <div className={musicStyle.main}>
          <Layout className="site-layout-background">
            <MyNewsSider/>
            <MyNewsContent/>
          </Layout>
        </div>
      </div>
    </div>
  )
}
