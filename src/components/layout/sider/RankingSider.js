import React, {useEffect, useState} from "react";
import {Button, Input, Menu, Modal,Layout} from "antd";
import musicStyle from "../../../routes/css/MyMusic.css";
import rankSiderStyle from "./css/rankingSider.css";
import {CaretRightOutlined,CaretDownOutlined,PlusOutlined} from '@ant-design/icons';
import { withRouter} from 'dva/router'
const {SubMenu} = Menu;
const {Sider} = Layout;
 function RankingSider(props) {
  const [singer, setSinger] = useState(0);
  const [radioNum, setRadioNum] = useState(0);
  const [radioStationNum, setRadioStationNum] = useState(0);
  const [musicNum, setMusicNum] = useState(0);
  const [CollectionMusic, setCollectionMusic] = useState(0);
  function onClickMenu(params) {
  //获取当前的menuItem的key
  const NavigateKey = params.key;
  if(NavigateKey){
    localStorage.setItem('NavigateKey',NavigateKey)
  }
  const {history} = props;
  history.push(NavigateKey,{text:111111});
}
//每次重新页面渲染的时候，清除缓存
useEffect(()=>{
  return ()=>{
    localStorage.removeItem('NavigateKey')
  }
},[])
//模态框
const [isModalVisible, setIsModalVisible] = useState(false);
const showModal = () => {
  setIsModalVisible(true);
};

const handleOk = () => {
  setIsModalVisible(false);
};

const handleCancel = () => {
  setIsModalVisible(false);
};

return(
  <div>
    {/*添加模态框*/}
    <Modal title="新建歌单" style={{backgroundColor:"#2d2d2d"}}  visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <p className={rankSiderStyle.flex}>
        <span style={{width:70}}>歌单名:</span><Input placeholder="" allowClear/>
      </p>
      <p style={{textAlign:"center"}}>可通过“收藏”将音乐添加到新歌单中</p>
    </Modal>
    <Sider className="site-layout-background" width={242}
           style={{
             overflow: 'auto',
             position: 'fixed',
             minHeight:"100vh",
             backgroundColor:"#f9f9f9",
             top: 70,
             bottom: 0
           }}>
      <Menu
        mode="inline"
        onClick={onClickMenu}
        selectedKeys={[props.location.pathname]} //默认选中
        defaultOpenKeys={localStorage.subMenuKey?[localStorage.subMenuKey]:["/myMusic/mySinger"]}  //默认展开的菜单
        style={{height: '100%', backgroundColor: "#f9f9f9", fontWeight: "bold", width: 242}}
      >
        <div className={rankSiderStyle.tit}>
          云音乐特色榜
        </div >
        <Menu.Item key="/rankingList/ranking" style={{height: 50, padding: 0,fontSize:12}}>
          <div className={rankSiderStyle.flex} style={{marginLeft: 20}}>
            <div>
              <img src={require("../../../assets/images/rank1.jpeg")} alt=""/>
            </div>
            <div>
              <div className={rankSiderStyle.font1}>飙升榜</div>
              <div className={rankSiderStyle.font2}>刚刚更新</div>
            </div>
          </div>
        </Menu.Item>
        <Menu.Item key="1" style={{height: 50, padding: 0,fontSize:12}}>
          <div className={rankSiderStyle.flex} style={{marginLeft: 20}}>
            <div>
              <img src={require("../../../assets/images/rank2.jpeg")} alt=""/>
            </div>
            <div>
              <div className={rankSiderStyle.font1}>新歌榜</div>
              <div className={rankSiderStyle.font2}>刚刚更新</div>
            </div>
          </div>
        </Menu.Item>
        <Menu.Item key="1" style={{height: 50, padding: 0,fontSize:12}}>
          <div className={rankSiderStyle.flex} style={{marginLeft: 20}}>
            <div>
              <img src={require("../../../assets/images/rank3.jpeg")} alt=""/>
            </div>
            <div>
              <div className={rankSiderStyle.font1}>原创榜</div>
              <div className={rankSiderStyle.font2}>刚刚更新</div>
            </div>
          </div>
        </Menu.Item>
        <Menu.Item key="1" style={{height: 50, padding: 0,fontSize:12}}>
          <div className={rankSiderStyle.flex} style={{marginLeft: 20}}>
            <div>
              <img src={require("../../../assets/images/rank4.jpeg")} alt=""/>
            </div>
            <div>
              <div className={rankSiderStyle.font1}>热歌榜</div>
              <div className={rankSiderStyle.font2}>刚刚更新</div>
            </div>
          </div>
        </Menu.Item>

      {/*  全球媒体榜*/}
        <div className={rankSiderStyle.tit}>全球媒体榜</div >
        <Menu.Item key="1" style={{height: 50, padding: 0,fontSize:12}}>
          <div className={rankSiderStyle.flex} style={{marginLeft: 20}}>
            <div>
              <img src={require("../../../assets/images/rank5.jpeg")} alt=""/>
            </div>
            <div>
              <div className={rankSiderStyle.font1}>黑胶VIP爱听榜</div>
              <div className={rankSiderStyle.font2}>每周四更新</div>
            </div>
          </div>
        </Menu.Item>
        <Menu.Item key="1" style={{height: 50, padding: 0,fontSize:12}}>
          <div className={rankSiderStyle.flex} style={{marginLeft: 20}}>
            <div>
              <img src={require("../../../assets/images/rank6.jpeg")} alt=""/>
            </div>
            <div>
              <div className={rankSiderStyle.font1}>云音乐说唱榜</div>
              <div className={rankSiderStyle.font2}>每周五更新</div>
            </div>
          </div>
        </Menu.Item>
        <Menu.Item key="1" style={{height: 50, padding: 0,fontSize:12}}>
          <div className={rankSiderStyle.flex} style={{marginLeft: 20}}>
            <div>
              <img src={require("../../../assets/images/rank7.jpeg")} alt=""/>
            </div>
            <div>
              <div className={rankSiderStyle.font1}>云音乐古典榜</div>
              <div className={rankSiderStyle.font2}>每周四更新</div>
            </div>
          </div>
        </Menu.Item>
        <Menu.Item key="1" style={{height: 50, padding: 0,fontSize:12}}>
          <div className={rankSiderStyle.flex} style={{marginLeft: 20}}>
            <div>
              <img src={require("../../../assets/images/rank8.jpeg")} alt=""/>
            </div>
            <div>
              <div className={rankSiderStyle.font1}>云音乐电音榜</div>
              <div className={rankSiderStyle.font2}>每周五更新</div>
            </div>
          </div>
        </Menu.Item>
        <Menu.Item key="1" style={{height: 50, padding: 0,fontSize:12}}>
          <div className={rankSiderStyle.flex} style={{marginLeft: 20}}>
            <div>
              <img src={require("../../../assets/images/rank9.jpeg")} alt=""/>
            </div>
            <div>
              <div className={rankSiderStyle.font1}>云音乐ACG榜</div>
              <div className={rankSiderStyle.font2}>每周四更新</div>
            </div>
          </div>
        </Menu.Item>
        <Menu.Item key="1" style={{height: 50, padding: 0,fontSize:12}}>
          <div className={rankSiderStyle.flex} style={{marginLeft: 20}}>
            <div>
              <img src={require("../../../assets/images/rank10.jpeg")} alt=""/>
            </div>
            <div>
              <div className={rankSiderStyle.font1}>云音乐韩语榜</div>
              <div className={rankSiderStyle.font2}>每周四更新</div>
            </div>
          </div>
        </Menu.Item>
        <Menu.Item key="1" style={{height: 50, padding: 0,fontSize:12}}>
          <div className={rankSiderStyle.flex} style={{marginLeft: 20}}>
            <div>
              <img src={require("../../../assets/images/rank11.jpeg")} alt=""/>
            </div>
            <div>
              <div className={rankSiderStyle.font1}>云音乐国电榜</div>
              <div className={rankSiderStyle.font2}>每周五更新</div>
            </div>
          </div>
        </Menu.Item>
        <Menu.Item key="1" style={{height: 50, padding: 0,fontSize:12}}>
          <div className={rankSiderStyle.flex} style={{marginLeft: 20}}>
            <div>
              <img src={require("../../../assets/images/rank12.jpeg")} alt=""/>
            </div>
            <div>
              <div className={rankSiderStyle.font1}>UK排行榜周榜</div>
              <div className={rankSiderStyle.font2}>每周一更新</div>
            </div>
          </div>
        </Menu.Item>
        <Menu.Item key="1" style={{height: 50, padding: 0,fontSize:12}}>
          <div className={rankSiderStyle.flex} style={{marginLeft: 20}}>
            <div>
              <img src={require("../../../assets/images/rank13.jpeg")} alt=""/>
            </div>
            <div>
              <div className={rankSiderStyle.font1}>美国Billboard榜</div>
              <div className={rankSiderStyle.font2}>每周三更新</div>
            </div>
          </div>
        </Menu.Item>
        <Menu.Item key="1" style={{height: 50, padding: 0,fontSize:12}}>
          <div className={rankSiderStyle.flex} style={{marginLeft: 20}}>
            <div>
              <img src={require("../../../assets/images/rank14.jpeg")} alt=""/>
            </div>
            <div>
              <div className={rankSiderStyle.font1}>Beatport全球电子舞曲榜</div>
              <div className={rankSiderStyle.font2}>每周三更新</div>
            </div>
          </div>
        </Menu.Item>
        <Menu.Item key="1" style={{height: 50, padding: 0,fontSize:12}}>
          <div className={rankSiderStyle.flex} style={{marginLeft: 20}}>
            <div>
              <img src={require("../../../assets/images/rank15.jpeg")} alt=""/>
            </div>
            <div>
              <div className={rankSiderStyle.font1}>KTV唛榜</div>
              <div className={rankSiderStyle.font2}>每周五更新</div>
            </div>
          </div>
        </Menu.Item>
        <Menu.Item key="1" style={{height: 50, padding: 0,fontSize:12}}>
          <div className={rankSiderStyle.flex} style={{marginLeft: 20}}>
            <div>
              <img src={require("../../../assets/images/rank16.jpeg")} alt=""/>
            </div>
            <div>
              <div className={rankSiderStyle.font1}>日本Oricon榜</div>
              <div className={rankSiderStyle.font2}>每周三更新</div>
            </div>
          </div>
        </Menu.Item>
        <Menu.Item key="1" style={{height: 50, padding: 0,fontSize:12}}>
          <div className={rankSiderStyle.flex} style={{marginLeft: 20}}>
            <div>
              <img src={require("../../../assets/images/rank17.jpeg")} alt=""/>
            </div>
            <div>
              <div className={rankSiderStyle.font1}>云音乐欧美热歌榜</div>
              <div className={rankSiderStyle.font2}>每周四更新</div>
            </div>
          </div>
        </Menu.Item>
        <Menu.Item key="1" style={{height: 50, padding: 0,fontSize:12}}>
          <div className={rankSiderStyle.flex} style={{marginLeft: 20}}>
            <div>
              <img src={require("../../../assets/images/rank18.jpeg")} alt=""/>
            </div>
            <div>
              <div className={rankSiderStyle.font1}>云音乐欧美新歌榜</div>
              <div className={rankSiderStyle.font2}>每天更新</div>
            </div>
          </div>
        </Menu.Item>
        <Menu.Item key="1" style={{height: 50, padding: 0,fontSize:12}}>
          <div className={rankSiderStyle.flex} style={{marginLeft: 20}}>
            <div>
              <img src={require("../../../assets/images/rank19.jpeg")} alt=""/>
            </div>
            <div>
              <div className={rankSiderStyle.font1}>法国NRJ Vos Hits周榜</div>
              <div className={rankSiderStyle.font2}>每周五更新</div>
            </div>
          </div>
        </Menu.Item>
        <Menu.Item key="1" style={{height: 50, padding: 0,fontSize:12}}>
          <div className={rankSiderStyle.flex} style={{marginLeft: 20}}>
            <div>
              <img src={require("../../../assets/images/rank20.jpeg")} alt=""/>
            </div>
            <div>
              <div className={rankSiderStyle.font1}>云音乐ACG动画榜</div>
              <div className={rankSiderStyle.font2}>更新80首</div>
            </div>
          </div>
        </Menu.Item>
        <Menu.Item key="1" style={{height: 50, padding: 0,fontSize:12}}>
          <div className={rankSiderStyle.flex} style={{marginLeft: 20}}>
            <div>
              <img src={require("../../../assets/images/rank21.jpeg")} alt=""/>
            </div>
            <div>
              <div className={rankSiderStyle.font1}>云音乐ACG游戏榜</div>
              <div className={rankSiderStyle.font2}>更新90首</div>
            </div>
          </div>
        </Menu.Item>
        <Menu.Item key="1" style={{height: 50, padding: 0,fontSize:12}}>
          <div className={rankSiderStyle.flex} style={{marginLeft: 20}}>
            <div>
              <img src={require("../../../assets/images/rank22.jpeg")} alt=""/>
            </div>
            <div>
              <div className={rankSiderStyle.font1}>云音乐ACG VOCALOID榜</div>
              <div className={rankSiderStyle.font2}>更新89首</div>
            </div>
          </div>
        </Menu.Item>

      </Menu>
    </Sider>
  </div>
)
}

export default withRouter(RankingSider)
