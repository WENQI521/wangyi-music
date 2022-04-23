import React from "react";
import IndexStyle from "../routes/css/Index.css";

export default function Footer() {
  return (
    <div className={IndexStyle.footerContainer}>
      <div className={IndexStyle.footerDiv}>
        <div className={IndexStyle.footerLeft}>
          <p>
            <a href="javascript:void(0)">服务条款</a>
            <span>|</span>
            <a href="javascript:void(0)">隐私政策</a>
            <span>|</span>
            <a href="javascript:void(0)">儿童隐私政策</a>
            <span>|</span>
            <a href="javascript:void(0)">版权投诉指引</a>
            <span>|</span>
            <a href="javascript:void(0)">联系我们</a>
            <span>|</span>
            <a href="javascript:void(0)">广告合作</a>
            <span>|</span>
            <a href="javascript:void(0)">廉政举报</a>
          </p>
          <p>
            <span>网易公司版权所有©1997-2022　</span>
            <span>杭州乐读科技有限公司运营：</span>
            <span>浙网文[2021] 1186-054号</span>
          </p>
          <p>
            <span>粤B2-20090191-18 　 工业和信息化部备案管理系统网站 </span>
            <span>
                  <img src={require("../assets/Icon/police.png")} style={{width: 20}} alt=""/>
                </span>
            <span>浙公网安备 33010902002564号</span>
          </p>
        </div>
        <div className={IndexStyle.footerRight}>
          <div>
            <a href="javascript:void(0)" className={IndexStyle.a1}></a>
            <span>Amped Studio</span>
          </div>
          <div>
            <a href="javascript:void(0)" className={IndexStyle.a2}></a>
            <span>用户认证</span>
          </div>
          <div>
            <a href="javascript:void(0)" className={IndexStyle.a3}></a>
            <span>独立音乐人</span>
          </div>
          <div>
            <a href="javascript:void(0)" className={IndexStyle.a4}></a>
            <span>赞赏</span>
          </div>
          <div>
            <a href="javascript:void(0)" className={IndexStyle.a5}></a>
            <span>视频奖励</span>
          </div>
        </div>
      </div>
    </div>
  )
}
