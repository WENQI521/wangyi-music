import React, {useState} from "react";
import {Row, Col, Input, Button, Menu, Dropdown, Avatar, Space, Layout, Modal, Select, AutoComplete} from "antd";
import {SearchOutlined, BorderTopOutlined,} from '@ant-design/icons';
import styles from "./css/header.css";
import headerLess from "./css/header.less";
import headerExample from "./css/headerExample.less";
import {withRouter} from 'dva/router'

const {Option} = Select;

function header(props) {
  const navList = ["发现音乐", "我的音乐", "关注", "商城", '音乐人', "下载客户端"]

  function search() {
    console.log("11111")
  }

  const [show, setShow] = useState(0);

  async function changeStyle(index) {
    console.log("index",index)
    await setShow(index);
    console.log("show",show)
  }

  const [login, setLogin] = useState(false)
  //下拉框
  const menu = (
    <Menu>
      <Menu.Item style={{width: 140}}>
        <span className={styles.icon1}></span>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={{marginLeft: 10}}>
          我的主页
        </a>
      </Menu.Item>
      <Menu.Item>
        <span className={styles.icon2}></span>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com" style={{marginLeft: 10}}>
          我的消息
        </a>
      </Menu.Item>
      <Menu.Item>
        <span className={styles.icon3}></span>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com" style={{marginLeft: 10}}>
          我的等级
        </a>
      </Menu.Item>
      <Menu.Item>
        <span className={styles.icon4}></span>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com" style={{marginLeft: 10}}>
          VIP会员
        </a>
      </Menu.Item>
      <Menu.Item>
        <span className={styles.icon5}></span>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com" style={{marginLeft: 10}}>
          个人设置
        </a>
      </Menu.Item>
      <Menu.Item>
        <span className={styles.icon6}></span>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com" style={{marginLeft: 10}}>
          实名认证
        </a>
      </Menu.Item>
      <Menu.Item>
        <span className={styles.icon7}></span>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com" style={{marginLeft: 10}}>
          退出
        </a>
      </Menu.Item>
    </Menu>);

  //  登录模态框
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [phoneModal, setPhoneModal] = useState(false);
  const [regModal, setRegModal] = useState(false);
  const [emailModal, setEmail] = useState(false);

  //二维码登录
  function showModal() {
    setIsModalVisible(true);
    setPhoneModal(false);
    setRegModal(false);
    setIsModalVisible2(true);
  };

  function handleOk() {
    setIsModalVisible(false);
    setIsModalVisible2(false);
    setPhoneModal(false);
    setRegModal(false);
  };

  function handleCancel() {
    setIsModalVisible(false);
    setIsModalVisible2(false);
    setPhoneModal(false);
    setRegModal(false);
  };

  //其他登录方式
  function showModal2() {
    setIsModalVisible(false);
    setPhoneModal(false);
    setRegModal(false);
    setEmail(false);
    setIsModalVisible2(true);
  };

  //手机号登录
  function showModalPhone() {
    setPhoneModal(true);
    setRegModal(false);
    setIsModalVisible(false);
    setIsModalVisible2(false);
    setEmail(false);
  };

  //注册
  function showModalReg() {
    setPhoneModal(false);
    setIsModalVisible(false);
    setIsModalVisible2(false);
    setEmail(false);
    setRegModal(true);
  };

  //邮箱认证
  function showModalEmail() {
    setPhoneModal(false);
    setIsModalVisible(false);
    setIsModalVisible2(false);
    setRegModal(false);
    setEmail(true);
  }

  return (
    <div className={styles.container}>
      <div className={styles.headerBox}>
        <Row style={{width: "90%", margin: "0 auto"}}>
          <Col span={15}>
            <div style={{display: "flex", justifyContent: 'space-around'}}>
              <span className={styles.wyIcon}></span>
              <Menu style={{display: "flex", justifyContent: "space-around", width: "90%"}}>
                {/*{navList.map((item, index) => {*/}
                {/*  const key = index + 1;*/}
                {/*  return <div className={styles.navLi} onClick={() => changeStyle(index)}*/}
                {/*              style={{width: "16.7%", height: "69px", position: "relative"}} key={key}>{item}*/}
                {/*    <sub className={show === index ? styles.active : styles.normal}></sub>*/}
                {/*  </div>;*/}
                {/*})}*/}
                <Menu.Item className={styles.navLi} onClick={() => {
                  changeStyle(0);
                  props.history.push("/")
                  console.log("props", props)
                }}
                     style={{width: "16.7%", height: "69px", position: "relative",margin:0}}>发现音乐
                  <sub className={show === 0 ? styles.active : styles.normal}></sub>
                </Menu.Item>
                <Menu.Item className={styles.navLi} onClick={async () => {
                  await changeStyle(1);
                  props.history.push("/myMusic/myMusicList");
                }}
                     style={{width: "16.7%", height: "69px", position: "relative"}}>我的音乐
                  <sub className={show === 1 ? styles.active : styles.normal}></sub>
                </Menu.Item>
                <Menu.Item className={styles.navLi} onClick={() => {
                  changeStyle(2);
                  props.history.push("/follow")
                }}
                     style={{width: "16.7%", height: "69px", position: "relative"}}>关注
                  <sub className={show === 2 ? styles.active : styles.normal}></sub>
                </Menu.Item>
                <Menu.Item className={styles.navLi} onClick={() => {
                  changeStyle(3);
                  props.history.push('https://music.163.com/store/product')
                }
                }
                     style={{width: "16.7%", height: "69px", position: "relative"}}>商城
                  <sub className={show === 3 ? styles.active : styles.normal}></sub>
                </Menu.Item>
                <Menu.Item className={styles.navLi} onClick={() =>{
                  changeStyle(4);
                  props.history.push("https://music.163.com/st/musician")
                }}
                     style={{width: "16.7%", height: "69px", position: "relative"}}>音乐人
                  <sub className={show === 4 ? styles.active : styles.normal}></sub>
                </Menu.Item>
                <Menu.Item className={styles.navLi} onClick={() =>{
                  changeStyle(5);
                  props.history.push("/download")
                }}
                     style={{width: "16.7%", height: "69px", position: "relative"}}>下载客户端
                  <sub className={show === 5 ? styles.active : styles.normal}></sub>
                </Menu.Item>
              </Menu>
            </div>
          </Col>














          <Col span={9}>
            {
              login ? <div style={{alignItems: "center", height: "100%"}}>
                  <Input onPressEnter={search}
                         style={{width: "180px", height: "35px", marginLeft: "60px", borderRadius: "14px", fontSize: 13}}
                         prefix={<SearchOutlined/>} placeholder="音乐/视频/电台/用户"/>
                  <Button ghost style={{
                    marginLeft: "10px",
                    border: "1px solid #4F4F4F",
                    color: "#ccc",
                    borderRadius: "20px"
                  }}>创作者中心</Button>
                  <Dropdown overlay={menu} placement="bottom" arrow>
                    <Avatar src={require("../assets/images/userImg.jpeg")} style={{marginLeft: 15}}/>
                  </Dropdown>
                </div>
                :
                <div style={{alignItems: "center", height: "100%"}}>
                  <Input onPressEnter={search} style={{
                    width: "180px",
                    height: "35px",
                    marginLeft: "60px",
                    borderRadius: "14px",
                    fontSize: 13
                  }} prefix={<SearchOutlined/>} placeholder="音乐/视频/电台/用户"/>
                  <Button ghost style={{
                    marginLeft: "10px",
                    border: "1px solid #4F4F4F",
                    color: "#ccc",
                    borderRadius: "20px"
                  }}>创作者中心</Button>
                  <Space>
                    {/*<a style={{color:"#787878",marginLeft:10}} onClick={() => openNotification('top')} icon={<BorderTopOutlined />}>登录</a>*/}
                    <a onClick={showModal} style={{color: "#787878", marginLeft: 10}}>登录</a>
                    {/*二维码登录*/}
                    <Modal title="登录" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <div>
                          <img src={require("../assets/images/phone.png")} style={{width: 125, height: 220}} alt=""/>
                        </div>
                        <div style={{marginLeft: 30, textAlign: "center", color: "#666666", fontSize: 12}}>
                          <h3 style={{fontSize: 16}}>扫码登录</h3>
                          <div style={{width: 128, height: 128}}></div>
                          <span>
                            <span>使用</span>
                            <a style={{color: "#0C73C2"}}>网易云音乐APP</a>
                            <span>扫码登录</span>
                          </span>
                        </div>
                      </div>
                      <div style={{textAlign: "center", lineHeight: 5}}>
                        <Button style={{borderRadius: 20, fontSize: 12}} onClick={showModal2}>选择其他登录方式</Button>
                      </div>
                    </Modal>
                    {/*选择其他方式模态框*/}
                    <Modal title="登录" visible={isModalVisible2} onOk={handleOk} onCancel={handleCancel}
                           style={{position: "relative"}}>
                      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <div>
                          <img src={require("../assets/images/login.png")} alt=""/>
                          <div>
                            <Button type="primary" className={styles.phoneLogin} onClick={showModalPhone}>手机号登录</Button>
                          </div>
                          <div>
                            <Button className={styles.reg} onClick={showModalReg}>注册</Button>
                          </div>
                        </div>
                        <div className={styles.login2Right}>
                          <div>
                            <i className={`${styles.wx} ${styles.icon}`}></i>
                            <span>微信登录</span>
                          </div>
                          <div>
                            <i className={`${styles.qq} ${styles.icon}`}></i>
                            <span>QQ登录</span>
                          </div>
                          <div>
                            <i className={`${styles.wb} ${styles.icon}`}></i>
                            <span>微博登录</span>
                          </div>
                          <div>
                            <i className={`${styles.wy} ${styles.icon}`}></i>
                            <span onClick={showModalEmail}>网易邮箱账号登录</span>
                          </div>
                        </div>
                      </div>
                      <div style={{
                        textAlign: "center",
                        lineHeight: 5,
                        fontSize: 12,
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        justifyContent: "center"
                      }}>
                        <input type="checkbox"/>
                        <span style={{color: "#666"}}>同意</span>
                        <span style={{color: "#507DAF"}}>《服务条款》《隐私政策》《儿童隐私政策》</span>
                        <img src={require("../assets/Icon/codeBottom.png")}
                             style={{width: 52, height: 52, position: "absolute", bottom: 0, right: 0}} alt=""/>
                      </div>
                    </Modal>

                    {/*  手机号登录*/}
                    <Modal title="手机号登录" visible={phoneModal} onOk={handleOk} onCancel={handleCancel}
                           style={{position: "relative"}}>
                      <div style={{width: 250, margin: "0 auto", fontSize: 12, marginTop: 20, color: "#666666"}}>
                        <div>
                          <Input.Group compact>
                            <Select defaultValue="Sign Up" style={{width: 70}}>
                              <Option value="Sign Up">+86</Option>
                              <Option value="Sign In">Sign</Option>
                            </Select>
                            <AutoComplete
                              style={{width: 180}}
                              placeholder="请输入手机号"
                              options={[{value: 'text 1'}, {value: 'text 2'}]}
                            />
                          </Input.Group>
                          <div style={{marginTop: 10}}>
                            <Input placeholder="请输入验证码" style={{width: 160}}/>
                            <Button style={{width: 80, marginLeft: 10, fontSize: 10, padding: 0}}>获取验证码</Button>
                          </div>
                          <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                            marginTop: 10
                          }}>
                            <div>
                              <span>密码登录</span>
                            </div>
                            <div style={{display: "flex", alignItems: "center"}}>
                              <Input type="checkbox" style={{width: 20}}/>
                              <span>自动登录</span>
                            </div>
                          </div>
                          <div>
                            <Button type="primary" className={styles.phoneLogin} style={{width: 250}}>登录</Button>
                          </div>
                        </div>
                      </div>
                      <div style={{width: "100%", height: 50}}></div>
                      <div style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        fontSize: 12,
                        borderTop: "1px solid #ddd",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        height: 48,
                        paddingLeft: 19,
                        paddingRight: 19,
                        background: "#f7f7f7"
                      }}>
                        <span style={{color: "#0C72C3"}} onClick={showModal2}> &lt;其他登录方式 </span>
                        <span style={{color: "#666"}} onClick={showModalReg}> &lt;没有账号？免费注册 </span>
                      </div>
                    </Modal>

                    {/*注册*/}
                    <Modal title="注册" visible={regModal} onOk={handleOk} onCancel={handleCancel}
                           style={{position: "relative"}}>
                      <div style={{width: 250, margin: "0 auto", fontSize: 12, marginTop: 20, color: "#666666"}}>
                        <div>
                          <Input.Group compact>
                            <Select defaultValue="Sign Up" style={{width: 70}}>
                              <Option value="Sign Up">+86</Option>
                              <Option value="Sign In">Sign</Option>
                            </Select>
                            <AutoComplete
                              style={{width: 180}}
                              placeholder="请输入手机号"
                              options={[{value: 'text 1'}, {value: 'text 2'}]}
                            />
                          </Input.Group>
                          <div style={{marginTop: 10}}>
                            <Input placeholder="设置登录密码，不少于8位" style={{width: 250}}/>
                          </div>
                          <div>
                            <Button type="primary" className={styles.phoneLogin} style={{width: 250}}>下一步</Button>
                          </div>
                        </div>
                      </div>
                      <div style={{width: "100%", height: 50}}></div>
                      <div style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        fontSize: 12,
                        borderTop: "1px solid #ddd",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        height: 48,
                        paddingLeft: 19,
                        paddingRight: 19,
                        background: "#f7f7f7"
                      }}>
                        <span style={{color: "#0C72C3"}} onClick={showModal2}> &lt;返回登录 </span>
                      </div>
                    </Modal>

                    {/*邮箱登录*/}

                    <Modal title="邮箱登录" visible={emailModal} onOk={handleOk} onCancel={handleCancel}
                           style={{position: "relative"}}>
                      <div style={{width: 250, margin: "0 auto", fontSize: 12, marginTop: 20, color: "#666666"}}>
                        <div>
                          <div>
                            <Input placeholder="请输入账号" style={{width: 250}}/>
                          </div>
                          <div style={{marginTop: 10}}>
                            <Input placeholder="请输入密码" style={{width: 250}}/>
                          </div>
                          <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                            marginTop: 10
                          }}>
                            <div style={{display: "flex", alignItems: "center"}}>
                              <Input type="checkbox" style={{width: 20}}/>
                              <span>自动登录</span>
                            </div>
                            <div>
                              <span>忘记密码？</span>
                            </div>
                          </div>
                          <div>
                            <Button type="primary" className={styles.phoneLogin} style={{width: 250}}>登录</Button>
                          </div>
                        </div>
                      </div>
                      <div style={{width: "100%", height: 50}}></div>
                      <div style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        fontSize: 12,
                        borderTop: "1px solid #ddd",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        height: 48,
                        paddingLeft: 19,
                        paddingRight: 19,
                        background: "#f7f7f7"
                      }}>
                        <span style={{color: "#0C72C3"}} onClick={showModal2}> &lt;返回登录 </span>
                      </div>
                    </Modal>
                  </Space>
                </div>
            }
          </Col>
        </Row>
      </div>
    </div>

  )
}

export default withRouter(header)
