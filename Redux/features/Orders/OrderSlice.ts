import { createSlice } from "@reduxjs/toolkit";

const initialState: IOrdersProps = {
  UserData: {
    formData: {
      name: "",
      email: "",
      phone: 0,
      address: "",
    },
    orderId: 0,
  },
  OrderData: [],
};

const OrderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    UpdateOrderAndUser: (state, action) => {
      const { orderId, UserData, OrderData } = action.payload;

      state.UserData = {
        ...state.UserData,
        formData: {
          ...state.UserData.formData,
          ...UserData,
        },
        orderId: orderId ?? state.UserData.orderId,
      };

      if (OrderData) {
        state.OrderData.push({
          orderId: orderId,
          ...OrderData,
        });
      }
    },
    DeleteOrderByOrderId: (state, action) => {
      state.OrderData.filter((order) => order.orderId !== action.payload);
    },
  },
});

export const { UpdateOrderAndUser, DeleteOrderByOrderId } = OrderSlice.actions;
export default OrderSlice.reducer;
