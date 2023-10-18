import { configureStore, createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "list",
  initialState: [],
  reducers: {
    addItem(state: any, action: any) {
      state.push(action.payload);
    },
    removeItem(state: any, action: any) {
      const index = state.indexOf(action.payload);

      // splice will remove the item from the array
      // where the index of that item is
      state.splice(index, 1);
    },
  },
});

const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
  },
});

export { store };
export const { addItem, removeItem } = itemsSlice.actions;
