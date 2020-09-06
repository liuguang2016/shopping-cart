import { LOAD_CART, ADD_PRODUCT, REMOVE_PRODUCT, CHANGE_PRODUCT_QUANTITY } from './actionTypes';

export const loadCart = (products:any) => ({
  type: LOAD_CART,
  payload: products
});

export const addProduct = (product:any) => ({
  type: ADD_PRODUCT,
  payload: product
});

export const removeProduct = (product:any) => ({
  type: REMOVE_PRODUCT,
  payload: product
});

export const changeProductQuantity = (product:any) => ({
  type: CHANGE_PRODUCT_QUANTITY,
  payload: product
});