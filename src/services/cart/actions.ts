import { ADD_PRODUCT, REMOVE_PRODUCT, CHANGE_PRODUCT_QUANTITY } from './actionTypes';

export const addProduct = (product:any) => ({
  type: ADD_PRODUCT,
  payload: product
});

export const removeProduct = (id:number) => ({
  type: REMOVE_PRODUCT,
  payload: id
});

export const changeProductQuantity = (product:any) => ({
  type: CHANGE_PRODUCT_QUANTITY,
  payload: product
});