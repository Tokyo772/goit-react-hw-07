import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./contactsOps";

const handlePending = (state) => {
  state.loading = true;
};
const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};
const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected);
  },
});

export const selectContacts = (state) => state.contacts.items;

export default contactsSlice.reducer;

//  reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.items.push(action.payload);
//       },
//       prepare({ name, number }) {
//         return {
//           payload: {
//             name,
//             number,
//             id: nanoid(),
//           },
//         };
//       },
//     },
//     deleteContact(state, action) {
//       state.items = state.items.filter((item) => item.id !== action.payload);
//     },
//   },
