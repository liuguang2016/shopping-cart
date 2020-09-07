import { ADD_PRODUCT, REMOVE_PRODUCT, CHANGE_PRODUCT_QUANTITY } from "./actionTypes";

interface ProductItem {
  image: string;
  name: string;
  price: number;
  id: number;
  quantity?:number;
  [propName: string]: any;
}

const initialState = {
  products: [],
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((item:ProductItem) => item.id !== action.payload),
      };
    case CHANGE_PRODUCT_QUANTITY:
      return {
        ...state,
        products: state.products.map((item:ProductItem)=>{
          let result;
          if(item.id === action.payload.id){
            result = Object.assign(item, action.payload)
          }else{
            result = item;
          }
          return result;
        }),
      };
    default:
      return state;
  }
}
