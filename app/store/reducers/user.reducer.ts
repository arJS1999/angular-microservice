import { createReducer, on } from '@ngrx/store';
import * as ProductAction from '../actions/product.action';
import { Cart, Product } from '../model/product';

export const productFeatureKey = 'product';

export interface productState {
  products: Product[];
  carts: Cart[];
}

export const initialState: productState = {
  products: [],
  carts: [],
};

console.log(initialState);
export const reducer = createReducer(
  initialState,
  on(ProductAction.addProduct, (state: productState, { product }) => ({
    ...state,
    products: [...state.products, product],
  })),
  on(ProductAction.addCart, (state: productState, { cart }) => ({
    ...state,
    carts: [...state.carts, cart],
  }))
);
