import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./style.module.scss";
import Header from "../../components/Header";
import Products from "../../components/Products";
import { useSelector } from "react-redux";
import { formatPrice } from "../../services/util";

import "../../mock/products";

const Home: React.FC = () => {
  const [productsList, setProductsList] = useState([]);
  const state = useSelector((state: any) => state);
  //总金额
  const countPrice = () =>{
    let count = state.cart.products.reduce((sum:any, p:any) => {
      sum += p.price * p.quantity;
      return sum;
    }, 0);
    return formatPrice(count);
  }

  useEffect(() => {
    axios.get("/getProductsList").then((res) => {
      setProductsList(res.data);
    });
  },[]);

  return (
    <div className={style.wrapper}>
      <Header total={countPrice()}/>
      <Products productsList={productsList} />
    </div>
  );
};

export default Home;
