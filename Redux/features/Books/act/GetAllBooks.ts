import { AllBooks } from "@/public/Data";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);
mock.onGet("/books").reply(200, AllBooks);

const GetAllBooksThunck = createAsyncThunk(
  "books/GetAllBooks",
  async (_, thunkapi) => {
    const { rejectWithValue } = thunkapi;
    try {
      const req = await axios.get<TDataType>("/books");
      return req.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("Unexpected error");
      }
    }
  }
);

export default GetAllBooksThunck;
