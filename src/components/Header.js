import React, {useState, useRef, useEffect} from "react";
import {
  Row,
  Col,
  Input,
  Button,
  Menu,
  Dropdown,
  Avatar,
  Space,
  notification,
  Modal,
  Select,
  AutoComplete,
  message
} from "antd";
import {SearchOutlined, BorderTopOutlined,} from '@ant-design/icons';
import styles from "./css/header.css";
import headerStyle from "./css/header.less"
import {withRouter} from 'dva/router';
import {connect} from "dva";
import api from "../services/index.js"

const {Option} = Select;

function header(props) {
  const navList = ["发现音乐", "我的音乐", "关注", "商城", '音乐人', "下载客户端"]

  function search() {
    console.log("11111")
  }

  //密码登录还是短信验证码登录
  const [isPassword, setIsPassword] = useState(false);

  //接受外界传值
  const show = props.show

  async function changeStyle(index) {
    // console.log("index",index)
    // await setShow(index);
    console.log("show", show)
  }

  //下拉框
  const menu = (
    <Menu>
      <Menu.Item style={{width: 140}}>
        <span className={styles.icon1}></span>
        <a target="_blank" rel="noopener noreferrer" style={{marginLeft: 10}} onClick={()=>{
          props.history.push("/myCenter")
        }}>
          我的主页
        </a>
      </Menu.Item>
      <Menu.Item>
        <span className={styles.icon2}></span>
        <a target="_blank" rel="noopener noreferrer"  style={{marginLeft: 10}} onClick={()=>{
          props.history.push("/myNews")
        }}>
          我的消息
        </a>
      </Menu.Item>
      <Menu.Item>
        <span className={styles.icon3}></span>
        <a target="_blank" rel="noopener noreferrer" style={{marginLeft: 10}} onClick={()=>{
          props.history.push("/myLever")
        }}>
          我的等级
        </a>
      </Menu.Item>
      <Menu.Item>
        <span className={styles.icon4}></span>
        <a target="_blank" rel="noopener noreferrer" style={{marginLeft: 10}} onClick={()=>{
          props.history.push("/myVip")
        }}>
          VIP会员
        </a>
      </Menu.Item>
      <Menu.Item>
        <span className={styles.icon5}></span>
        <a target="_blank" rel="noopener noreferrer"  style={{marginLeft: 10}} onClick={()=>{
          props.history.push("/personalSetting")
        }}>
          个人设置
        </a>
      </Menu.Item>
      <Menu.Item>
        <span className={styles.icon6}></span>
        <a target="_blank" rel="noopener noreferrer"  style={{marginLeft: 10}} onClick={()=>{
          props.history.push("/realName")
        }}>
          实名认证
        </a>
      </Menu.Item>
      <Menu.Item>
        <span className={styles.icon7}></span>
        <a target="_blank" rel="noopener noreferrer"  style={{marginLeft: 10}} onClick={async()=>{
          await api.user.loginOutApi();
          setLogin(false);
          localStorage.clear();
        }}>
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
    setIsModalVisible2(false);
    createMa();
  };

  function handleOk() {
    setIsModalVisible(false);
    setIsModalVisible2(false);
    setPhoneModal(false);
    setRegModal(false);
    clearInterval(timer);
  };

  function handleCancel() {
    clearInterval(timer);
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
    clearInterval(timer);
  };

  //手机号登录
  function showModalPhone() {
    setPhoneModal(true);
    setRegModal(false);
    setIsModalVisible(false);
    setIsModalVisible2(false);
    setEmail(false);
    clearInterval(timer);
  };

  //注册
  function showModalReg() {
    setPhoneModal(false);
    setIsModalVisible(false);
    setIsModalVisible2(false);
    setEmail(false);
    setRegModal(true);
    clearInterval(timer);
  };

  //邮箱认证
  function showModalEmail() {
    setPhoneModal(false);
    setIsModalVisible(false);
    setIsModalVisible2(false);
    setRegModal(false);
    setEmail(true);
    clearInterval(timer);
  }

  //绑定输入框节点
  const passwordRef = useRef();
  const phoneRef = useRef();
  //使用远程仓库
  const dispatch = props.dispatch;


  useEffect(() => {
    checkLoginStatus(localStorage.getItem("loginId"));
  }, [])
  //登录
  //获取登录状态
  const [login, setLogin] = useState(false);
  const [loginUserId, setLoginUserId] = useState(0);
  const [userFor,setUserFor]=useState({})

  async function checkLoginStatus(id) {
    const res = await api.user.checkLoginStatusApi();
    if(res.err){
      if (res.err.data.code === 200) {
        const loginUser = await api.user.getLoginUserApi({id});
        setUserFor(loginUser);
      }
    }
  }

  //手机密码登录
  async function loginFun() {
    const password = passwordRef.current.input.value;
    const phone = phoneRef.current.input.value;
    if (password) {
      const res = await api.user.loginApi({phone, password});
      if (res.err) {
        if (res.err.code === 502) {
          message.error(res.err.message);
        } else if (res.err.code === 400) {
          message.error(res.err.message);
        }
      } else if (res.code === 200) {
        message.success("登录成功");
        localStorage.setItem("cookie",res.cookie);
        await setLoginUserId(res.account.id);
        checkLoginStatus(res.account.id);
        const refreshRes = await api.user.refreshLoginApi();
        localStorage.setItem("loginId",res.account.id);
        localStorage.setItem("token", res.token);
        handleOk();
      }
    }
  }

  //手机验证码登录
  //获取验证码
  const codeRef = useRef();
//  设置按钮状态
  const [isDisable, setDisabled] = useState(false);
  const btnRef = useRef();
  async function getCode() {
    const phone = phoneRef.current.input.value;
    if (phone) {
      const res = await api.user.getCodeApi({phone});
      if (res.err) {
        if (res.err.code === 400) {
          message.error(res.err.message);
        }
      } else {
        let count = 60;
        //设置倒计时
        let timer2 =setInterval(() => {
          count--;
          btnRef.current.innerText=count;
          setDisabled(true);
          if (count === 0) {
            setDisabled(false);
            btnRef.current.innerText="获取验证码";
            clearInterval(timer2);
          }
        }, 1000);
        message.info("验证码已发送")
      }
    } else {
      message.warning("请先输入手机号");
    }
  }

//   //验证验证码
  async function loginFunByCode() {
    const phone = phoneRef.current.input.value;
    const code = codeRef.current.input.value;
    if (code) {
      const res = await api.user.checkCodeApi({phone, code});
      if (res.err) {
        if (res.err.code === 503) {
          message.error("验证码错误，请重新输入");
        }
      } else if (res.code === 200) {
        handleOk();
        props.history.push("/");
        setLogin(true);
        message.success("登录成功");
      }
    } else {
      message.info("请先输入验证码");
    }
  }

  //邮箱验证
  const emailRef = useRef();
  const emailPassRef = useRef();
  async function emailLogin() {
    const email = emailRef.current.input.value;
    const password = emailPassRef.current.input.value;
    if (password) {
      const res = await api.user.emailApi({email, password});
      if (res.err) {
        message.error(res.err.msg);
      } else if (res.code === 200) {
        setLogin(true);
        message.success("登录成功");
        localStorage.setItem("loginId",res.account.id);
        checkLoginStatus(res.account.id);
        handleOk();
        props.history.push("/");
        localStorage.setItem("cookie", res.cookie);
      }
    } else {
      message.info("请先输入密码");
    }
  }

  //二维码生成
  var timer;
  const [QRImg, setQRimg] = useState("");
  const [MaKey, setMaKey] = useState("")

  async function createMa() {
    const keyRes = await api.user.createMaKeyApi();
    if (keyRes.code === 200) {
      const key = keyRes.data.unikey;
      await setMaKey(key);
      const res = await api.user.createMaApi(key);
      await setQRimg(res.data.qrimg);
      // timer = setInterval(async () => {
      //   const statusRes = await checkMaStatus(key);
      //   console.log("statusRes",statusRes)
      //   if (statusRes.err.code === 800) {
      //     alert('二维码已过期,请重新获取')
      //     clearInterval(timer)
      //   }
      //   if (statusRes.err.code === 803) {
      //     // 这一步会返回cookie
      //     clearInterval(timer);
      //     alert('授权登录成功');
      //     handleOk();
      //     props.history.push("/");
      //   }
      // }, 4000)
    }
  }

  //检查二维码状态
  async function checkMaStatus(key) {
    const res = await api.user.checkMaApi({key});
    return res;
  }


  return (
    <div className={styles.container}>
      <div className={styles.headerBox}>
        <Row style={{width: "90%", margin: "0 auto"}}>
          <Col span={15}>
            <div style={{display: "flex", justifyContent: 'space-around'}}>
              <span className={styles.wyIcon}></span>
              <div style={{display: "flex", justifyContent: "space-around", width: "90%"}}>
                <div className={`${styles.navLi} ${styles.liItem}`} onClick={() => {
                  changeStyle(0);
                  props.history.push("/")
                  console.log("props", props)
                }}
                >发现音乐
                  <sub className={show === 0 ? styles.active : styles.normal}></sub>
                </div>
                <div className={`${styles.navLi} ${styles.liItem}`} onClick={async () => {
                  await changeStyle(1);
                  if(localStorage.getItem('cookie')){
                    props.history.push("/myMusic/myMusicList");
                  }else {
                    props.history.push("/myMusicLoginOut");
                  }

                }}
                >我的音乐
                  <sub className={show === 1 ? styles.active : styles.normal}></sub>
                </div>
                <div className={`${styles.navLi} ${styles.liItem}`} onClick={async () => {
                  await changeStyle(2);
                  if(localStorage.getItem("cookie")){
                    props.history.push("/follow")
                  }else {
                    props.history.push("/followLoginOut")
                  }
                }}
                >关注
                  <sub className={show === 2 ? styles.active : styles.normal}></sub>
                </div>
                <div className={`${styles.navLi} ${styles.liItem}`} onClick={() => {
                  changeStyle(3);
                  if(localStorage.getItem("cookie")){
                    props.history.push("/follow")
                  }else {
                    props.history.push("/followLoginOut")
                  }
                }
                }
                >商城
                  <sub className={show === 3 ? styles.active : styles.normal}></sub>
                </div>
                <div className={`${styles.navLi} ${styles.liItem}`} onClick={() => {
                  changeStyle(4);
                  props.history.push("https://music.163.com/st/musician")
                }}
                >音乐人
                  <sub className={show === 4 ? styles.active : styles.normal}></sub>
                </div>
                <div className={`${styles.navLi} ${styles.liItem}`} onClick={() => {
                  changeStyle(5);
                  props.history.push("/download")
                }}
                >下载客户端
                  <sub className={show === 5 ? styles.active : styles.normal}></sub>
                </div>
              </div>
            </div>
          </Col>
          <Col span={9}>
            {
              localStorage.getItem("loginId") ? <div style={{alignItems: "center", height: "100%"}}>
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
                    <Modal title="登录" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
                           className={headerStyle.coupon}>
                      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <div>
                          <img src={require("../assets/images/phone.png")} style={{width: 125, height: 220}} alt=""/>
                        </div>
                        <div style={{marginLeft: 30, textAlign: "center", color: "#666666", fontSize: 12}}>
                          <h3 style={{fontSize: 16}}>扫码登录</h3>
                          <div>
                            <img src={QRImg} style={{width: 128, height: 128}} alt=""/>
                          </div>
                          <div style={{marginTop: 10}}>
                            <span>
                              <span>使用</span>
                              <a style={{color: "#0C73C2"}}>网易云音乐APP</a>
                              <span>扫码登录</span>
                            </span>
                          </div>

                        </div>
                      </div>
                      <div style={{textAlign: "center", lineHeight: 5}}>
                        <Button style={{borderRadius: 20, fontSize: 12}} onClick={showModal2}>选择其他登录方式</Button>
                      </div>
                    </Modal>
                    {/*选择其他方式模态框*/}
                    <Modal title="登录" visible={isModalVisible2} onOk={handleOk} onCancel={handleCancel}
                           style={{position: "relative"}} className={headerStyle.coupon}>
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
                           style={{position: "relative"}} className={headerStyle.coupon}>
                      <div style={{width: 250, margin: "0 auto", fontSize: 12, marginTop: 20, color: "#666666"}}>
                        <div>
                          <Input.Group compact>
                            <Select defaultValue="Sign Up" style={{width: 70}}>
                              <Option value="Sign Up">+86</Option>
                              <Option value="Sign In">Sign</Option>
                            </Select>
                            <Input
                              style={{width: 180}}
                              ref={phoneRef}
                              placeholder="请输入手机号"
                            />
                          </Input.Group>
                          {
                            isPassword ? <Input.Password placeholder={"请输入密码"} suffix="忘记密码？" ref={passwordRef}
                                                         style={{color: "#666", fontSize: 10, marginTop: 10}}/> :
                              <div style={{marginTop: 10}}>
                                <Input placeholder="请输入验证码" ref={codeRef} style={{width: 160}}/>
                                <Button style={{width: 80, marginLeft: 10, fontSize: 10, padding: 0}}
                                        onClick={getCode} disabled={isDisable} ref={btnRef}>获取验证码</Button>
                              </div>
                          }
                          <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                            marginTop: 10
                          }}>
                            <div>
                              <span onClick={() => setIsPassword(!isPassword)}>{isPassword ? "密码登录" : "短信登录"}</span>
                            </div>
                            <div style={{display: "flex", alignItems: "center"}}>
                              <Input type="checkbox" style={{width: 20}}/>
                              <span>自动登录</span>
                            </div>
                          </div>
                          <div>
                            <Button type="primary" className={styles.phoneLogin} style={{width: 250}}
                                    onClick={isPassword ? loginFun : loginFunByCode}>登录</Button>
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
                           style={{position: "relative"}} className={headerStyle.coupon}>
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
                           style={{position: "relative"}} className={headerStyle.coupon}>
                      <div style={{width: 250, margin: "0 auto", fontSize: 12, marginTop: 20, color: "#666666"}}>
                        <div>
                          <div>
                            <Input placeholder="请输入账号" ref={emailRef} style={{width: 250}}/>
                          </div>
                          <div style={{marginTop: 10}}>
                            <Input placeholder="请输入密码" ref={emailPassRef} style={{width: 250}}/>
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
                            <Button type="primary" className={styles.phoneLogin} style={{width: 250}}
                                    onClick={emailLogin}>登录</Button>
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

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    loginUser: state.UserModal.loginUser,
    qrimg: state.UserModal.qrimg
  }
}
export default connect(mapStateToProps)(withRouter(header))
