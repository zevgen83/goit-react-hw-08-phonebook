import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contacts/contactSlice';
import { filterReduser } from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReduser,
  },
});
