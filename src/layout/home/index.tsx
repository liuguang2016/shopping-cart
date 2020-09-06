import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./style.module.scss";
import Header from "../../components/Header";
import Products from "../../components/Products";
import "../../mock/products";

const Home: React.FC = () => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    axios.get("/getProductsList").then((res) => {
      setProductsList(res.data);
    });
  },[]);

  return (
    <div className={style.wrapper}>
      <Header />
      <Products productsList={productsList} />
    </div>
  );
};

export default Home;
