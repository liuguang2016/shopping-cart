import React from "react";
import { ShoppingOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import style from "./style.module.scss";

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

function Header() {
  return (
    <header>
      <div className={style.container}>
        <div className={style.brand}>LOGO</div>
        <NavLink to="/cart">
          <div className={style.cart}>
            <div className={style.cartInfo}>
              <table>
                <tbody>
                  <tr>
                    <td>商品种类</td>
                    <td>:</td>
                    <td>
                      <strong>3</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>总金额</td>
                    <td>:</td>
                    <td>
                      <strong>332</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="cart-icon">
              <ShoppingOutlined style={{ fontSize: "50px" }} />
            </div>
          </div>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
