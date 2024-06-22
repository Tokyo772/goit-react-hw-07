import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

axios.defaults.baseURL = "https://6675b92ca8d2b4d072f137d7.mockapi.io/";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/co2ntacts");

      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const addContact = createAsyncThunk("contacts/addContact",
//     async (contact, thunkAPI) => {
//         try {
//             const response = await axios.post(/)
//         } catch (error) {

//         }
//     }
// );
