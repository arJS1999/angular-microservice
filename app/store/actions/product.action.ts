import { createAction } from '@ngrx/store';
import { Cart, Product } from '../model/product';

export const addProduct = createAction('Add Products', (product: Product) => ({
  product,
}));

export const addCart = createAction('Add Carts', (cart: Cart) => ({ cart }));
