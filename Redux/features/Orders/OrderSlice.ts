import { createSlice } from "@reduxjs/toolkit";

declare interface IOrdersProps {
  UserData: IFormData;
  OrderData: TDataType;
}

const initialState: IOrdersProps = {
  UserData: {
    formData: {
      name: "",
      email: "",
      phone: 0,
      address: "",
    },
  },
  OrderData: [],
};

const OrderSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    ConfirmAddOrder: (state, action) => {
      state.OrderData.push(...action.payload);
    },
    GetUserData: (state, action) => {
      state.UserData = action.payload;
    },
  },
});

export const { ConfirmAddOrder, GetUserData } = OrderSlice.actions;
export default OrderSlice.reducer;
