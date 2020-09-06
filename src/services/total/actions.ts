import { UPDATE_CART } from './actionTypes';

export const updateCart = (cartProducts:any) => (dispatch:any) => {
  let productQuantity = cartProducts.reduce((sum:any, p:any) => {
    sum += p.quantity;
    return sum;
  }, 0);

  let totalPrice = cartProducts.reduce((sum:any, p:any) => {
    sum += p.price * p.quantity;
    return sum;
  }, 0);

  let installments = cartProducts.reduce((greater:any, p:any) => {
    greater = p.installments > greater ? p.installments : greater;
    return greater;
  }, 0);

  let cartTotal = {
    productQuantity,
    installments,
    totalPrice,
    currencyId: 'USD',
    currencyFormat: '¥'
  };

  dispatch({
    type: UPDATE_CART,
    payload: cartTotal
  });
};
