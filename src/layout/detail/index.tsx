import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { Button } from "antd";
import axios from "axios";
import style from "./style.module.scss";
import { ProductItem } from "../../components/Product";
import Counter from "../../components/Counter";
import "../../mock/detail";

interface Params {
  id: any;
}
interface Props extends RouteComponentProps<Params> {}
const Detail: React.FC<Props> = (props) => {
  let id: number = props.match.params.id;
  const [detail, setDetail] = useState<ProductItem>();

  useEffect(() => {
    axios.get(`/detail?id=${id}`).then((res) => {
      setDetail(res.data);
    });
  }, [id]);

  //返回上一页
  const handleBack = () => {
    props.history.go(-1);
  };
  return (
    <div className={style.wrapper}>
      <img src={detail?.image} alt="" />
      <strong>{detail?.name}</strong>
      <p>{detail?.price}</p>
      <div className={style.counterBox}>
        <span>数量：</span>
        <Counter />
      </div>
      <Button type="primary" onClick={handleBack}>
        返回
      </Button>
    </div>
  );
};

export default Detail;
