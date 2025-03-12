import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./filter/filterSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactsConfig = {
  key: "contacts",
  storage,
};

const filterConfig = {
  key: "filter",
  storage,
};

const persistContactsReducer = persistReducer(contactsConfig, contactsReducer);
const persistFilterReducer = persistReducer(filterConfig, filterReducer);

const store = configureStore({
  reducer: {
    contacts: persistContactsReducer,
    filter: persistFilterReducer,
  },
});

const persistedStore = persistStore(store);

export { store, persistedStore };
