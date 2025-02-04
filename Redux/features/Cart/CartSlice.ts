import { createSlice } from "@reduxjs/toolkit";
import GetAllCartBooksThunk from "./act/GetCartItem";

const initialState: ICartState = {
  items: {},
  productFullInfo: [],
  CartwithQuantity: [],
  UserOrders: [],
  loading: "pending",
  error: null,
  confirmorder: false,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddItemToCart: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
    IncreaseQty: (state, action) => {
      const id = action.payload;
      state.items[id]++;
    },
    DecreaseQty: (state, action) => {
      const id = action.payload;
      state.items[id]--;
    },
    DeleteItemFromCard: (state, action) => {
      const id = action.payload;
      delete state.items[id];
      state.productFullInfo = state.productFullInfo.filter((e) => e.id !== id);
    },
    clearcartproductfullinfo: (state) => {
      state.productFullInfo = [];
      state.items = {};
    },
    AddOrderToUser: (state, action) => {
      state.UserOrders.push(...action.payload);
    },
    ConfirmOrder: (state) => {
      state.confirmorder = !state.confirmorder;
    },
  },
  extraReducers: (builder) => {
    //Get All Products
    builder.addCase(GetAllCartBooksThunk.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(GetAllCartBooksThunk.fulfilled, (state, action) => {
      state.loading = "succeeded";
      if (action.payload) {
        state.productFullInfo = action.payload.map((product) => ({
          ...product,
          category: product.cat ?? "Unknown",
        }));
      }
    });
    builder.addCase(GetAllCartBooksThunk.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});
export { GetAllCartBooksThunk };
export const {
  AddItemToCart,
  IncreaseQty,
  DecreaseQty,
  DeleteItemFromCard,
  clearcartproductfullinfo,
  AddOrderToUser,
  ConfirmOrder,
} = CartSlice.actions;

export default CartSlice.reducer;
