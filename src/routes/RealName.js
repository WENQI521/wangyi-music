import React, {useState} from "react";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";
import realNameStyle from "./css/realName.css";
import realLessStyle from "./css/realName.less"
import {Input, Select, AutoComplete, Button, Upload,message} from "antd";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
const {Option} = Select;

export default function RealName() {
  const children = [];
  //下拉选框
  for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  }

  function handleChange(value) {
    console.log(`Selected: ${value}`);
  }

  //上传图片
  async function onPreview(file) {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  }


  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  //数据改变时调用
  function handleChange(info){
    if (info.file.status === 'uploading') {
      setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };
  const [state,setState]=useState({loading:false});
  //上传框内容  当上传时为loading，未上传的时候为选中文件
  const uploadButton = (
    <div>
      {state.loading ? <LoadingOutlined /> : <div style={{ marginTop: 90 }}>
        <Button style={{width:92,height:32}}>选择文件</Button>
      </div>}
    </div>
  );

  return (
    <div>
      <Header2/>
      <div style={{backgroundColor: "#f2f2f2", width: "100%"}}>
        <div style={{overflow: "hidden"}}>
          <div className={realNameStyle.container}>
            <div className={realNameStyle.titBox}>
              <p style={{margin: 0}}>实名认证</p>
            </div>
            <div style={{marginTop: 50}} className={realNameStyle.flex}>
            <span className={realNameStyle.label}>
              <span style={{color: "red"}}>*</span>
            <span style={{color: "#333333"}}>真实姓名</span>
            </span>
              <Input placeholder="请输入真实姓名" style={{width: 420}}/>
              <span className={realNameStyle.marginLeft10}>审核通过后不可更改</span>
            </div>

            <div style={{marginTop: 20}} className={realNameStyle.flex}>
              <span className={realNameStyle.label}>
                  <span style={{color: "red"}}>*</span>
                  <span style={{color: "#333333", fontSize: 12}}>手机号</span>
                </span>
              <Input.Group compact style={{width: 296}}>
                <Select defaultValue="Sign Up" style={{width: 74, backgroundColor: "#fafafa"}}>
                  <Option value="Sign Up">86</Option>
                  <Option value="Sign In">Sign In</Option>
                </Select>
                <AutoComplete
                  style={{width: 222}}
                  placeholder="请输入您的手机号"
                />
              </Input.Group>
              <Button style={{width: 114}} className={realNameStyle.marginLeft10}>更改</Button>
              <span className={realNameStyle.marginLeft10}>审核后将绑定到云音乐帐号中</span>
            </div>

            <div style={{marginTop: 20}} className={realNameStyle.flex}>
            <span className={realNameStyle.label}>
              <span style={{color: "red"}}>*</span>
              <span style={{color: "#333333"}}>验证码</span>
            </span>
              <Input placeholder="请输入验证码" style={{width: 296}}/>
              <Button style={{width: 114, color: "white", background: "#3977ca"}}
                      className={realNameStyle.marginLeft10}>获取验证码</Button>
              <span className={realNameStyle.marginLeft10}>审核通过后不可更改</span>
            </div>
            <div style={{marginTop: 20}} className={realNameStyle.flex}>
             <span className={realNameStyle.label}>
                <span style={{color: "#333333"}}>国家/地区</span>
             </span>
              <Select defaultValue="a1" onChange={handleChange} style={{width: 420}}>
                {children}
              </Select>
              <span className={realNameStyle.marginLeft10}>审核通过后不可更改</span>
            </div>
            <div style={{marginTop: 20}} className={realNameStyle.flex}>
              <span className={realNameStyle.label}>
                <span style={{color: "red"}}>*</span>
                <span style={{color: "#333333"}}>证件号码</span>
              </span>
              <Input placeholder="请输入身份证号码" style={{width: 420}}/>
              <span className={realNameStyle.marginLeft10}>审核通过后不可更改</span>
            </div>

            <div style={{marginTop: 20}} className={realNameStyle.flex}>
              <div className={realNameStyle.label}></div>
              <div className={`${realNameStyle.flex} ${realNameStyle.marginLeft10}`}>
                <div>
                  <div>
                    <span>手持证件人像图</span>
                  </div>
                  <div className={realNameStyle.uploadImgBox}>
                    <img src={require("../assets/images/id1")} style={{width: 133}} alt=""/>
                    {/*上传图片*/}
                    <div style={{position:"absolute",top:0,left:0}}>
                      <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        onChange={handleChange}
                        onPreview={onPreview}
                        className='ant-upload-select-picture-card'
                      >
                        {state.imageUrl ? <img src={state.imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                      </Upload>
                    </div>
                  </div>
                </div>
                <div className={realNameStyle.marginLeft10}>
                  <div>
                    <span>证件正面图</span>
                  </div>
                  <div className={realNameStyle.uploadImgBox}>
                    <img src={require("../assets/images/id2")} style={{width: 133}} alt=""/>
                    {/*上传图片*/}
                    <div style={{position:"absolute",top:0,left:0}}>
                      <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        onChange={handleChange}
                        onPreview={onPreview}
                        className='ant-upload-select-picture-card'
                      >
                        {state.imageUrl ? <img src={state.imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                      </Upload>
                    </div>
                  </div>
                </div>
                <div className={realNameStyle.marginLeft10}>
                  <div>
                    <span>证件反面图</span>
                  </div>
                  <div className={realNameStyle.uploadImgBox}>
                    <img src={require("../assets/images/id3")} style={{width: 133}} alt=""/>
                    {/*上传图片*/}
                    <div style={{position:"absolute",top:0,left:0}}>
                      <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        onChange={handleChange}
                        onPreview={onPreview}
                        className='ant-upload-select-picture-card'
                      >
                        {state.imageUrl ? <img src={state.imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                      </Upload>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${realNameStyle.textScroll} ${realNameStyle.marginLeft10}`}>
                <p style={{color:"#FF3A3A"}}>• 实名认证信息一经绑定，不支持解绑</p>
                <p>• 根据国家规定，请提供本人手持有效证件正面的照片， 须露出上半身，且人脸和证件文字必须清晰可见。 并提供有效证件的正反面照片（非身份证的证件照片中必须包含姓名、证件号码、本人照片及有效期限）</p>
                <p>• 有效证件包括个人身份证、护照（中国台湾为台胞证）等</p>
                <p>• 证件正面反面图中有效证件占整体图片比例不得低于80%，拍摄时不要手持，背景应尽量选择白色，避免反光、遮挡等情况</p>
                <p>• 图片大小不超过5M</p>
              </div>
            </div>
            <div style={{display:"flex",marginTop:30}}>
               <span className={realNameStyle.label}></span>
              <input type="checkbox" style={{marginTop:3}}/>
              <p className={`${realNameStyle.pBox} ${realNameStyle.marginLeft10}`}>经审慎考虑，同意平台收集真实姓名、身份证号码及证件信息、手机号码及验证码（均属个人敏感信息），以核实本人身份，保障账号安全。</p>
            </div>
            <div className={realNameStyle.borderBottom}></div>
            <div style={{textAlign:"center",paddingTop:40,paddingBottom:65}}>
              <Button style={{width:160,height:32}} className={realNameStyle.greyBtn}>提交审核</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
