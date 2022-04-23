import React from "react";
import Header from "../components/Header";
import musicStyle from "./css/MyMusic.css";
import {Layout} from "antd";
import RankingContent from "../components/layout/content/RankingContent";
import RankingSider from "../components/layout/sider/RankingSider";
import Nav from "../components/Nav";
export default function RankingList(props) {
  console.log('propsList',props)
  return(
    <div>
      <Header/>
      <Nav/>
      <div className={musicStyle.container}>
        <div className={musicStyle.main}>
          <Layout className="site-layout-background">
            <RankingSider/>
            <RankingContent />
          </Layout>
        </div>
      </div>
    </div>
  )
}
