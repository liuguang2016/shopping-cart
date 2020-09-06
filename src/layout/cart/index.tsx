import React from "react";
import { Button } from "antd";
import style from "./style.module.scss";
import { RouteComponentProps } from "react-router";

interface Props extends RouteComponentProps {}
const Cart: React.FC<Props> = (props) => {
  //返回上一页
  const handleBack = () => {
    props.history.go(-1);
  };
  return (
    <div className={style.wrapper}>
      <div className={style.topBox}>
        <Button type="primary" onClick={handleBack}>
          返回
        </Button>
        <div>
          <span>总金额：12¥</span>
        </div>
      </div>
      <ul>
        <li>
          <img src="https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg" alt="" />
          <div>
            <h3>名称</h3>
            <span>价格</span>
          </div>
          <div>数量</div>
          <Button type="primary">移除</Button>
        </li>
      </ul>
    </div>
  );
};

export default Cart;
