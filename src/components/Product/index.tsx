import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

export interface ProductItem {
  image: string;
  name: string;
  price: number;
  id: number;
  quantity?:number;
}

const Product: React.FC<ProductItem> = ({ image, name, price, id }) => {
  return (
    <Link to={"/detail/"+id}>
      <div className={style.product}>
        <div className={style.productImage}>
          <img src={image} alt={name} />
        </div>
        <h4 className={style.productName}>{name}</h4>
        <p className={style.productPrice}>{price}</p>
      </div>
    </Link>
  );
};

export default Product;
