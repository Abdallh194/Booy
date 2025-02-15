import { configureStore } from "@reduxjs/toolkit";
import BooksSlice from "./features/Books/BooksSlice";
import CartSlice from "./features/Cart/CartSlice";
import WishlistSlice from "./features/Wishlist/WishlistSlice";
import OrderSlice from "./features/Orders/OrderSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      books: BooksSlice,
      cart: CartSlice,
      wishlist: WishlistSlice,
      order: OrderSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
