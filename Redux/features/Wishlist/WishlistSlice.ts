import { createSlice } from "@reduxjs/toolkit";

declare interface ICartState {
  items: number[];
  productFullInfo: TDataType;
  loading: "pending" | "succeeded" | "failed";
  error: string | null;
  notavailabletoWishlist: boolean;
}

const initialState: ICartState = {
  items: [],
  productFullInfo: [],
  loading: "pending",
  error: null,
  notavailabletoWishlist: false,
};

const WishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    AddItemToWishList: (state, action) => {
      const id = action.payload;
      let isexist = false;
      state.items.forEach((p) => {
        if (p == id) {
          isexist = true;
          state.notavailabletoWishlist = true;
        }
      });
      if (!isexist) {
        state.items.push(id);
        state.notavailabletoWishlist = false;
      }
    },
    DeleteFavItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((e) => e !== id);
    },
    getwishlistFulInfo: (state, action) => {
      state.productFullInfo = action.payload;
    },
  },
});

export const { AddItemToWishList, DeleteFavItem, getwishlistFulInfo } =
  WishlistSlice.actions;
export default WishlistSlice.reducer;
