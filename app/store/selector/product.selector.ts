import { productFeatureKey, productState } from '../reducers/user.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectProductState =
  createFeatureSelector<productState>(productFeatureKey);

export const selectProducts = createSelector(
  selectProductState,
  (state: productState) => state.products
);

export const selectCarts = createSelector(
  selectProductState,
  (state: productState) => state.carts
);
