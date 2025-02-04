import { createSlice } from "@reduxjs/toolkit";
import GetAllBooksThunck from "./act/GetAllBooks";

const initialState: TBooksState = {
  Books: [],
  loading: "pending",
  error: null,
};

const BooksSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Get All Products
    builder.addCase(GetAllBooksThunck.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(GetAllBooksThunck.fulfilled, (state, action) => {
      state.loading = "succeeded";
      if (action.payload) {
        state.Books = action.payload;
      }
    });
    builder.addCase(GetAllBooksThunck.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export const {} = BooksSlice.actions;
export { GetAllBooksThunck };
export default BooksSlice.reducer;
