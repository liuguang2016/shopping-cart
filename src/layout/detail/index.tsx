import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { Button } from "antd";
import axios from "axios";
import style from "./style.module.scss";
import { ProductItem } from "../../components/Product";
import Counter from "../../components/Counter";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, changeProductQuantity } from "../../services/cart/actions";
import "../../mock/detail";

interface Params {
  id: any;
}
interface Props extends RouteComponentProps<Params> {}
const Detail: React.FC<Props> = (props) => {
  let id: number = props.match.params.id;
  const state = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const [detail, setDetail] = useState<ProductItem>({ image: "", name: "", price: 0, id: 0, quantity: 0 });
  
  useEffect(() => {
    axios.get(`/detail?id=${id}`).then((res) => {
      setDetail(res.data);
    });
  }, [id]);

  //返回上一页
  const handleBack = () => {
    props.history.go(-1);
  };

  //加入购物车
  const handldeAdd = () => {
    //如果商品已在购物车则修改数量
    let idArr = state.cart.products.map((item:any)=>item.id);
    if(idArr.includes(detail.id)){
      dispatch(changeProductQuantity(detail));
    }else{
      dispatch(addProduct(detail));
    }
    handleBack();
  };

  //商品数量
  const updateQuantity = (qty: number) => {
    setDetail({
      ...detail,
      quantity: qty,
    });
  };
  return (
    <div className={style.wrapper}>
      <img src={detail?.image} alt="" />
      <strong>{detail?.name}</strong>
      <p>{detail?.price}</p>
      <div className={style.counterBox}>
        <span>数量：</span>
        <Counter updateQuantity={updateQuantity} />
      </div>
      <div className={style.addBox}>
        <Button type="primary" onClick={handldeAdd}>
          加入购物车
        </Button>
      </div>
      <Button type="primary" onClick={handleBack}>
        返回
      </Button>
    </div>
  );
};

export default Detail;
