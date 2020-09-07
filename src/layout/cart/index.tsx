import React from "react";
import { Button } from "antd";
import { RouteComponentProps } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../../services/cart/actions";
import { formatPrice } from "../../services/util";
import style from "./style.module.scss";

interface Props extends RouteComponentProps {}
const Cart: React.FC<Props> = (props) => {
  const state = useSelector((state: any) => state);
  console.log(state);
  const dispatch = useDispatch();

  //返回上一页
  const handleBack = () => {
    props.history.go(-1);
  };

  //移除
  const handleDelete = (id: number) => {
    dispatch(removeProduct(id));
  };

  //总金额
  const countPrice = () =>{
    let count = state.cart.products.reduce((sum:any, p:any) => {
      sum += p.price * p.quantity;
      return sum;
    }, 0);
    return formatPrice(count);
  }
  return (
    <div className={style.wrapper}>
      <div className={style.topBox}>
        <Button type="primary" onClick={handleBack}>
          返回
        </Button>
        <div>
          <span>
            总金额：{countPrice()}
            {state.total.data.currencyFormat}
          </span>
        </div>
      </div>
      <ul>
        {state.cart.products.map((item: any) => (
          <li key={item.id}>
            <img src={item.image} alt="" />
            <div className={style.priceBox}>
              <h3>{item.name}</h3>
              <span>价格:{item.price}</span>
            </div>
            <div className={style.quantityBox}>数量:{item.quantity}</div>
            <Button type="primary" onClick={()=>{handleDelete(item.id)}}>
              移除
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
