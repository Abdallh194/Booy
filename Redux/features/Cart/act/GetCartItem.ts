import { AllBooks } from "@/public/Data";
import { RootState } from "@/Redux/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);
mock.onGet("/books").reply(200, AllBooks);

const GetAllCartBooksThunk = createAsyncThunk(
  "books/getAllCartBooks",
  async (_, thunkapi) => {
    const { getState, fulfillWithValue } = thunkapi;
    const { cart, books } = getState() as RootState;
    const { Books } = books;
    const itemsId = Object.keys(cart.items);
    if (!itemsId.length) {
      return fulfillWithValue([]);
    }
    const ItemFullInfo = Books.filter((el) =>
      itemsId.includes(el.id.toLocaleString())
    );
    return ItemFullInfo;
  }
);

export default GetAllCartBooksThunk;
