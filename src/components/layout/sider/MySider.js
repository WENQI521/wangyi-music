import React, {useState,useEffect} from "react";
import {Menu, Layout,Button, Modal,Input} from "antd";
import musicStyle from "../../../routes/css/MyMusic.css";
import {CaretRightOutlined,CaretDownOutlined,PlusOutlined} from '@ant-design/icons';
import { withRouter} from 'dva/router'
const {SubMenu} = Menu;
const {Sider} = Layout;
function MySider(props) {
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
      {/*添加模态框*/}
      <Modal title="新建歌单" style={{backgroundColor:"#2d2d2d"}}  visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p style={{display:"flex",alignItems:"center"}}>
         <span style={{width:70}}>歌单名:</span><Input placeholder="" allowClear/>
        </p>
        <p style={{textAlign:"center"}}>可通过“收藏”将音乐添加到新歌单中</p>
      </Modal>
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
          defaultOpenKeys={localStorage.subMenuKey?[localStorage.subMenuKey]:["/myMusic/mySinger"]}  //默认展开的菜单
          style={{height: '100%', backgroundColor: "#f9f9f9", fontWeight: "bold", width: 242}}
        >
          <Menu.Item key="/myMusic/mySinger" style={{marginTop: 38}}>
            {singer === 0 ? "我的歌手" : "我的歌手(" + singer + ")"}
          </Menu.Item>
          <Menu.Item key="/myMusic/myRadio">
            {radioNum === 0 ? "我的视频" : "我的视频(" + radioNum + ")"}
          </Menu.Item>
          <Menu.Item key="/myMusic/myRadioStation">
            {radioStationNum === 0 ? "我的电台" : "我的电台(" + radioStationNum + ")"}
          </Menu.Item>
          <SubMenu style={{position:"relative"}}
                   key="nav"
                   icon={localStorage.subMenuKey=="/myMusic/myMusicList"?<CaretDownOutlined/>:<CaretRightOutlined/>}
                   title={musicNum === 0 ? "创建的歌单" : "创建的歌单(" + musicNum + ")"}>
            <Button size="small" icon={<PlusOutlined />} style={{position:"absolute",top:10,right:5}} onClick={showModal}>新建</Button>
            <Menu.Item key="/myMusic/myMusicList" style={{height: 50, padding: 0}}>
              <div className={musicStyle.flex} style={{marginLeft: 20}}>
                <div>
                  <img src={require("../../../assets/images/singer1.jpeg")} alt=""/>
                </div>
                <div>
                  <div style={{color: "black"}} className={musicStyle.fontSmall}>我喜欢的音乐</div>
                  <div className={musicStyle.fontSmall}>38首</div>
                </div>
              </div>
            </Menu.Item>
            <Menu.Item key="10" style={{height: 50, padding: 0}}>
              <div className={musicStyle.flex} style={{marginLeft: 20}}>
                <div>
                  <img src={require("../../../assets/images/singer1.jpeg")} alt=""/>
                </div>
                <div>
                  <div style={{color: "black"}} className={musicStyle.fontSmall}>xxx的2021年度歌单</div>
                  <div className={musicStyle.fontSmall}>38首</div>
                </div>
              </div>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub5"
                   icon={localStorage.subMenuKey=="/myMusic/myMusicList"?<CaretDownOutlined/>:<CaretRightOutlined/>}
                   title={CollectionMusic === 0 ? "收藏的歌单" : "收藏的歌单(" + CollectionMusic + ")"}>
            <Menu.Item key="11" style={{height: 50, padding: 0}}>
              <div className={musicStyle.flex} style={{marginLeft: 20}}>
                <div>
                  <img src={require("../../../assets/images/singer1.jpeg")} alt=""/>
                </div>
                <div>
                  <div style={{color: "black"}} className={musicStyle.fontSmall}>我喜欢的音乐</div>
                  <div className={musicStyle.fontSmall}>38首</div>
                </div>
              </div>
            </Menu.Item>
            <Menu.Item key="12" style={{height: 50, padding: 0}}>
              <div className={musicStyle.flex} style={{marginLeft: 20}}>
                <div>
                  <img src={require("../../../assets/images/singer1.jpeg")} alt=""/>
                </div>
                <div>
                  <div style={{color: "black"}} className={musicStyle.fontSmall}>xxx的2021年度歌单</div>
                  <div className={musicStyle.fontSmall}>38首</div>
                </div>
              </div>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </div>

  )
}

export default withRouter(MySider)
