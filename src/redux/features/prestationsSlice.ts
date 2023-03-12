import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Prestation} from '../types/prestation';

export interface PrestationsState {
    basket: Prestation[];
  }

const initialState: PrestationsState = {
  basket: [],
};

export const prestationsSlice = createSlice({
  name: 'prestations',
  initialState,
  reducers: {
    addPrestation: (state, action: PayloadAction<Prestation>) => {
      state.basket.push(action.payload);
    },
    removePrestation: (state, action: PayloadAction<Prestation>) => {
      state.basket = state.basket.filter((prestation) => prestation.reference !== action.payload.reference);
    },
    clearBasket: (state) => {
      state.basket = [];
    },
  },
});

export const { addPrestation, removePrestation, clearBasket } = prestationsSlice.actions;

export const selectBasket = (state: { prestations: PrestationsState }) => state.prestations.basket;

export const selectTotalPrice = (state: { prestations: PrestationsState }) =>
  state.prestations.basket.reduce((acc, prestation) => acc + prestation.price, 0) / 100;

export const selectTotalDuration = (state: { prestations: PrestationsState }) =>
  state.prestations.basket.reduce((acc, prestation) => acc + prestation.duration, 0);

export default prestationsSlice.reducer;
