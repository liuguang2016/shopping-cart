import React from "react";
import { ShoppingOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import style from "./style.module.scss";

export interface Props {
  total: string;
}

const Header: React.FC<Props> = ({ total }) => {
  return (
    <header>
      <div className={style.container}>
        <div className={style.brand}>LOGO</div>
        <NavLink to="/cart">
          <div className={style.cart}>
            <div className={style.cartInfo}>
              <div>
                <span>总金额:</span>
                <span>{total}</span>
              </div>
            </div>
            <div className="cart-icon">
              <ShoppingOutlined style={{ fontSize: "50px" }} />
            </div>
          </div>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
