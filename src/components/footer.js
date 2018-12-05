import React from "react";
// 静态组件 消耗小 代码少 更快 没有生命周期
const Footer = props => {
  return (
    <div className="footer">
      <h3>{props.name}</h3>
    </div>
  );
};

export default Footer;
