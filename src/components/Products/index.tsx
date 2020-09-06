import React, { useState, useEffect } from "react";
import { Pagination } from "antd";
import style from "./style.module.scss";
import Product, { ProductItem } from "../Product";

interface Props {
  productsList: ProductItem[];
}

const Products: React.FC<Props> = ({ productsList }) => {
  const [pages, setPages] = useState({ total: 0, current: 1, pageSize: 12 });
  const [currentList, setCurrentList] = useState<ProductItem[][]>([]);

  useEffect(()=>{
    setPages(p=>({
      ...p,
      total: productsList.length
    }))
  },[productsList])
  useEffect(() =>{
    //处理数据
    setCurrentList(p => {
      let arr = productsList.reduce((acc:Array<ProductItem[]>, cur, idx) => {
        let size:number = pages.pageSize;
        if(idx%size){
          acc[parseInt((idx/size).toString(),10)].push(cur);
        }else{
          acc.push([cur]);
        }
        return acc;
      },[]);
      return arr;
    });
  },[productsList,pages])

  const handleChange = (value: number) => {
    setPages({
      ...pages,
      current:value
    })
  };
  return (
    <div className={style.productsWrapper}>
      <div className={style.content}>
        {currentList[pages.current-1]?.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </div>
      <div className={style.paginationBox}>
        <Pagination pageSize={pages.pageSize} current={pages.current} total={pages.total} onChange={handleChange} />
      </div>
    </div>
  );
};

export default Products;
