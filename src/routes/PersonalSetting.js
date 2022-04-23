import React, {useState} from "react";
import {Button, Input, Tabs,Radio,DatePicker, Space,Select,Checkbox} from 'antd';
import { PlusOutlined ,CheckOutlined} from '@ant-design/icons';
import Header from "../components/Header";
import Footer from "../components/Footer";
import personalStyle from "./css/personalSetting.css";
const {TextArea} = Input;
const { Option } = Select;
const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};
export default function PersonalSetting(props) {
  const { TabPane } = Tabs;
  function callback(key) {
    console.log(key);
  }

  //性别单选
  const [value, setValue] = React.useState("女");
  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
//s省市区级联
  const [cities, setCities] = React.useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = React.useState(cityData[provinceData[0]][0]);

  const handleProvinceChange = value => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };

  const onSecondCityChange = value => {
    setSecondCity(value);
  };

//绑定按钮和解除按钮切换
  const [change,setChange]=useState(10)

  //点击按钮进入注销页面
  function goCancellation() {
    // console.log("props",props)
    props.history.push("/cancellation")
  }
  return(
   <div>
     <Header/>
     <div className={personalStyle.container}>
       <div className={personalStyle.box}>
         <h1>个人设置</h1>
         <Tabs onChange={callback} type="card"  tabBarGutter={0} tabBarStyle={{width:"100%",height:45,backgroundColor:"#f7f7f7",color:"#333333",borderTop:"2px solid #ddd"}}>
           <TabPane tab="　　基本设置　　" key="1">
             <div>
               <div style={{fontSize:12}}>
                 <div className={personalStyle.titBox}>
                   <div>
                     <div  style={{marginTop:30}}>
                       <div style={{display:"inline-block",width:70,textAlign:"right"}}>
                         <span style={{color:"red",marginTop:3}}>*　</span>
                         <span>昵称：</span>
                       </div>
                       <Input type="text" style={{width:306,height:32}} readOnly/>
                     </div>
                     <div style={{display:"flex",marginTop:10}}>
                       <span style={{display:"inline-block",width:70,textAlign:"right"}}>介绍：</span>
                       <TextArea rows={10} placeholder="评论" showCount maxLength={300} style={{width:306,height:135}}/>
                     </div>
                     <div className={personalStyle.marinTop20}>
                       <span  style={{display:"inline-block",width:70,textAlign:"right"}}>性别：</span>
                       <Radio.Group onChange={onChange} value={value}>
                         <Radio value={"男"}>男</Radio>
                         <Radio value={"女"}>女</Radio>
                         <Radio value={"保密"}>保密</Radio>
                       </Radio.Group>
                     </div>
                     <div className={personalStyle.marinTop20}>
                       <span  style={{display:"inline-block",width:70,textAlign:"right"}}>生日：</span>
                       <Space direction="vertical" size={12}>
                         <DatePicker style={{width:160}}/>
                       </Space>
                     </div>
                     <div className={personalStyle.marinTop20}>
                       <span  style={{display:"inline-block",width:70,textAlign:"right"}}>地区：</span>
                       <Select defaultValue={provinceData[0]} style={{ width: 120 }} onChange={handleProvinceChange}>
                         {provinceData.map(province => (
                           <Option key={province}>{province}</Option>
                         ))}
                       </Select>
                       <Select style={{ width: 120 }} value={secondCity} onChange={onSecondCityChange}>
                         {cities.map(city => (
                           <Option key={city}>{city}</Option>
                         ))}
                       </Select>
                     </div>
                     <div  style={{marginTop:40}}>
                       <Button type="primary" style={{width:80,borderRadius:5,marginLeft:70}}>保存</Button>
                     </div>
                   </div>
                   <div style={{marginLeft:30,marginTop:40,position:"relative"}}>
                     <img src={require("../assets/images/userImg.jpeg")} style={{width:140}} alt=""/>
                     <a className={personalStyle.photoA}>更换头像</a>
                   </div>
                 </div>
               </div>
             </div>
           </TabPane>
           <TabPane tab="　　绑定设置　　" key="2">
            <div className={`${personalStyle.flexContainer} ${personalStyle.flex}`} style={{marginTop:20}}>
              <div className={personalStyle.flex}>
                <div>
                  <i className={`${personalStyle.fontIcon} ${personalStyle.Icon}`}></i>
                </div>
                <div style={{marginLeft:10}}>
                  <h2 style={{color:"#999999"}}>手机</h2>
                  <span>使用手机注册：+86 130****5480</span>
                  <a href="javascript:void (0)" className={personalStyle.aFont}>修改</a>
                </div>
              </div>
              <div>
                <Button style={{color:"#666666",borderRadius:5}}>修改密码</Button>
              </div>
            </div>
             <div style={{marginTop:40,paddingBottom:10}}>
               <span style={{color:"#666666"}}>绑定帐号后，你可以分享音乐给那边的朋友们，还可以直接用其登录云音乐</span>
             </div>
             <div className={`${personalStyle.flexContainer} ${personalStyle.flex}`}>
               <div className={personalStyle.flex}>
                 <div>
                   <i className={`${personalStyle.yiIcon} ${personalStyle.Icon}`}></i>
                 </div>
                 <div style={{marginLeft:10}}>
                   <h2 style={{color:"#999999"}}>网易邮箱账号</h2>
                 </div>
               </div>
               <div>
                 <Button style={{color:"#666666",borderRadius:5,position:"relative"}}>
                   <PlusOutlined style={{color:"red",fontWeight:800}}/>绑定
                 </Button>
               </div>
             </div>
             <div className={`${personalStyle.flexContainer} ${personalStyle.flex}`} style={{borderTop:"1px dotted #ddd",borderBottom:"1px dotted #ddd"}}>
               <div className={personalStyle.flex}>
                 <div>
                   <i className={`${personalStyle.netIcon} ${personalStyle.Icon}`}></i>
                 </div>
                 <div style={{marginLeft:10}}>
                   <h2 style={{color:"#999999"}}>新浪微博</h2>
                 </div>
               </div>
               <div>
                 <Button style={{color:"#666666",borderRadius:5,position:"relative"}}>
                   <PlusOutlined style={{color:"red",fontWeight:800}}/>绑定
                 </Button>
               </div>
             </div>

             <div className={`${personalStyle.flexContainer} ${personalStyle.flex}`} style={{borderTop:"1px dotted #ddd",borderBottom:"1px dotted #ddd"}}>
               <div className={personalStyle.flex}>
                 <div>
                   <i className={`${personalStyle.qqIcon} ${personalStyle.Icon}`}></i>
                 </div>
                 <div style={{marginLeft:10}}>
                   <h2 style={{color:"#999999"}}>QQ</h2>
                 </div>
               </div>
               <div>
                 <Button style={{color:"#666666",borderRadius:5,position:"relative"}}>
                   <PlusOutlined style={{color:"red",fontWeight:800}}/>绑定
                 </Button>
               </div>
             </div>
             <div className={`${personalStyle.flexContainer} ${personalStyle.flex}`}>
               <div className={personalStyle.flex}>
                 <div>
                   <i className={`${personalStyle.wxIcon} ${personalStyle.Icon}`}></i>
                 </div>
                 <div style={{marginLeft:10}}>
                   <h2 style={{color:"#999999"}}>微信</h2>
                   <span>已绑定：舒欣</span>
                 </div>
               </div>
               <div>
                 {
                   change===10?
                   <Button style={{color:"#666666",borderRadius:5,position:"relative"}} onMouseEnter={()=>setChange(1)} onMouseLeave={()=>setChange(10)}>
                     <CheckOutlined style={{fontWeight:800}}/>已绑定
                   </Button>:<Button>解除绑定</Button>
                 }
               </div>
             </div>
             <div style={{textAlign:"center",marginTop:40,paddingBottom:20}}>
               <Button style={{color:"white",backgroundColor:"#c60d0b",height:36}} onClick={goCancellation}>进入注销流程</Button>
             </div>

           </TabPane>
           <TabPane tab="　　隐私设置　　" key="3">
             <div className={personalStyle.newsFlexBox}>
               <div>
                 <span style={{fontWeight:"bold"}}>私信</span>
               </div>
               <div style={{marginLeft:10}}>
                 <p style={{color:"#666666"}}>接收新私信提醒</p>
                 <p>
                   <Radio.Group  value={1}>
                     <Space direction="vertical">
                       <Radio value={1}>所有人</Radio>
                       <Radio value={2}>我关注的人</Radio>
                     </Space>
                   </Radio.Group>
                 </p>
               </div>
             </div>
             <div className={personalStyle.newsFlexBox}>
               <div>
                 <span style={{fontWeight:"bold"}}>通知</span>
               </div>
               <div style={{marginLeft:10}}>
                 <p>
                   <div style={{paddingBottom:10}}>
                     <input type="checkbox"/> <span>歌单被收藏</span>
                   </div>
                  <div style={{paddingBottom:10}}>
                    <input type="checkbox"/> <span>视频被收藏</span>
                  </div>
                   <div style={{paddingBottom:10}}>
                     <input type="checkbox"/> <span>电台被订阅</span>
                   </div>
                   <div style={{paddingBottom:10}}>
                     <input type="checkbox"/> <span>收到赞</span>
                   </div>
                   <div>
                     <input type="checkbox"/> <span>新粉丝</span>
                   </div>
                 </p>
               </div>
             </div>
             <div className={personalStyle.newsFlexBox}>
               <div>
                 <span style={{fontWeight:"bold"}}>听歌排行</span>
               </div>
               <div style={{marginLeft:10}}>
                 <p style={{color:"#666666"}}></p>
                 <p>
                   <Radio.Group  value={1}>
                     <Space direction="vertical">
                       <Radio value={1}>所有人可见</Radio>
                       <Radio value={2}>仅自己可见</Radio>
                     </Space>
                   </Radio.Group>
                 </p>
               </div>
             </div>
             <div className={personalStyle.newsFlexBox}>
               <div>
                 <span style={{fontWeight:"bold"}}>个性化服务</span>
               </div>
               <div style={{marginLeft:10}}>
                 <p style={{color:"#666666"}}></p>
                 <p>
                   <Radio.Group  value={1}>
                     <Space direction="vertical">
                       <Radio value={1}>开启</Radio>
                       <Radio value={2}>关闭（关闭后，将不会使用你的个性信息提供个性化服务）</Radio>
                     </Space>
                   </Radio.Group>
                 </p>
               </div>
             </div>
           </TabPane>
         </Tabs>
       </div>

     </div>
     <Footer/>
   </div>

 )
}
