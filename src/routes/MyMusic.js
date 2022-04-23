import React from "react";
import Header from "../components/Header";
import {Layout} from 'antd';
import musicStyle from "./css/MyMusic.css";
//引入组件
import MyContent from "../components/layout/content/MyContent";
import MySider from "../components/layout/sider/MySider";
export default function MyMusic() {
  return (
    <div>
      <Header show={1}/>
      <div className={musicStyle.container}>
        <div className={musicStyle.main}>
          <Layout className="site-layout-background">
            <MySider/>
            <MyContent/>
          </Layout>
        </div>
      </div>
    </div>
  )
}
