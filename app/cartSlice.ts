import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getCartDataFromLS,
  setCartDataIntoLS,
} from "../util/localStorageHelper";
import { mockCartData } from "./mocks/mock";
import type { RootState } from "./store";
import { ICartState } from "./types/cartTypes";

const initialState: ICartState = {
  data: [],
};

let initialCartState;
const dataFromLS = getCartDataFromLS();
if (dataFromLS) {
  initialCartState = { data: dataFromLS };
} else {
  initialCartState = {
    data: mockCartData.map((item) => ({ ...item, count: 0 })),
  };
}

export const cartSlice = createSlice({
  name: "modifyCart",
  initialState: initialCartState,
  // The `reducers` field lets us define reducers and generate associated actions.
  // In this example, 'increment', 'decrement' and 'incrementByAmount' are actions. They can be triggered from outside this slice, anywhere in the app.
  // So for example, if we make a dispatch to the 'increment' action here from the index page, it will get triggered and change the value of the state from 0 to 1.
  reducers: {
    updateData: (state, data) => {
      state.data = data.payload;
    },

    modify: (state, data) => {
      state.data = state.data.map((item) => {
        if (item.id === data.payload.id) {
          item = data.payload;
        }
        setCartDataIntoLS(state.data);
        return item;
      });
    },
  },
});
// Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
export const { modify, updateData } = cartSlice.actions;

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
// export const selectCount = (state: RootState) => state.cart.value;

export const selectData = (state: RootState) => state.cart.data;

// exporting the reducer here, as we need to add this to the store
export default cartSlice.reducer;
