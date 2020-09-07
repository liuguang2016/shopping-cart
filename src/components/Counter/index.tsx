import React, { useState } from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import style from "./style.module.scss";

interface Props {
  updateQuantity:Function;
}

const Counter: React.FC<Props> = ({updateQuantity}) => {
  const [value, setValue] = useState(0);

  const increment = (e: any) => {
    e.preventDefault();
    let val = value + 1;
    updateQuantity(val);
    setValue(val);
  };

  const decrement = (e: any) => {
    e.preventDefault();
    let val;
    if (value <= 1) {
      val = value;
    } else {
      val = value - 1;
    }
    updateQuantity(val);
    setValue(val);
  };

  return (
    <div className={style.stepperInput}>
      <span className={style.decrement} onClick={decrement}>
        <MinusOutlined />
      </span>
      <input type="number" className={style.quantity} value={value} readOnly />
      <span className={style.increment} onClick={increment}>
        <PlusOutlined />
      </span>
    </div>
  );
};

export default Counter;
