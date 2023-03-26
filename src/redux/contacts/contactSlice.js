import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';

const contacts = {
  items: [],
  isLoading: false,
  error: null,
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contacts,
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchContacts.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    });
    builder.addCase(fetchContacts.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
    builder.addCase(addContact.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(addContact.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
    });
    builder.addCase(addContact.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
    builder.addCase(deleteContact.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(deleteContact.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(contact => contact.id === payload.id);
      state.items.splice(index, 1);
    });
    builder.addCase(deleteContact.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export const contactReducer = contactSlice.reducer;
