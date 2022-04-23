import React, {useState,useEffect} from "react";
import {Menu, Layout,Button, Modal,Input} from "antd";
import myNewsSiderStyle from "./css/myNewsSider.css"
import { withRouter} from 'dva/router'
const {SubMenu} = Menu;
const {Sider} = Layout;
function MyNewsSider(props) {
  function onClickMenu(params) {
    //获取当前的menuItem的key
    const NavigateKey = params.key;
    if(NavigateKey){
      localStorage.setItem('NavigateKey',NavigateKey)
    }
    const {history} = props;
    history.push(NavigateKey);
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
  return (
    <div>
      <Sider className="site-layout-background" width={242}
             style={{
               overflow: 'auto',
               height: "100vh",
               position: 'fixed',
               top: 70,
               bottom: 0
             }}>
        <Menu
          mode="inline"
          onClick={onClickMenu}
          selectedKeys={[props.location.pathname]} //默认选中
          defaultOpenKeys={localStorage.subMenuKey?[localStorage.subMenuKey]:["/myNews/my"]}  //默认展开的菜单
          style={{height: '100%', backgroundColor: "#f9f9f9", fontWeight: "bold", width: 242,color:"#333333"}}
        >
          <Menu.Item  style={{marginTop: 38}}>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <span style={{marginLeft:10,fontSize:20,color:"#333333"}}>我的消息</span>
            </div>
          </Menu.Item>
          <Menu.Item key="/myNews/my">
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <i className={myNewsSiderStyle.myIcon}></i>
              <span style={{marginLeft:10}}>我的</span>
            </div>
          </Menu.Item>
          <Menu.Item key="/myNews/news">
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <i className={myNewsSiderStyle.newsIcon}></i>
              <span style={{marginLeft:10}}>私信</span>
            </div>
          </Menu.Item>
          <Menu.Item key="/myNews/comment">
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <i className={myNewsSiderStyle.commentIcon}></i>
              <span style={{marginLeft:10}}>评论</span>
            </div>
          </Menu.Item>
          <Menu.Item key="/myNews/notice">
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <i className={myNewsSiderStyle.noticeIcon}></i>
              <span style={{marginLeft:10}}>通知</span>
            </div>
          </Menu.Item>
          <Menu.Item key="1">
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <Button style={{borderRadius:15,width:114,color:"#999999"}}>一键已读</Button>
            </div>
          </Menu.Item>
        </Menu>
      </Sider>
    </div>

  )
}

export default withRouter(MyNewsSider)
