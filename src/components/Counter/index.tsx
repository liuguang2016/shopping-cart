import React, { useState } from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import style from "./style.module.scss";

const Counter: React.FC = () => {
  const [value, setValue] = useState(0);
  const increment = (e: any) => {
    e.preventDefault();
    let val = value + 1;
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
    setValue(val);
  };

  return (
    <div className={style.stepperInput}>
      <span className={style.decrement} onClick={decrement}>
        <PlusOutlined />
      </span>
      <input type="number" className={style.quantity} value={value} readOnly />
      <span className={style.increment} onClick={increment}>
        <MinusOutlined />
      </span>
    </div>
  );
};

export default Counter;
