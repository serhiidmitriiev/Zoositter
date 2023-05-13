import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const slice = createSlice({
  name: "sitters",
  initialState: [],
  reducers: {
    sitterAdded: (sitter, action) => {
      sitter.push({
        id: ++lastId,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        pet: action.payload.pet,
        quantity: action.payload.quantity,
        dateFrom: action.payload.dateFrom,
        dateTo: action.payload.dateTo,
      });
    },
    // sitterEdited: (sitter, action) => {
    //   let edited = sitter.find((user) => user.id === sitter.id);
    //   sitter.push({

    //   })
    // },
  },
});

export const { sitterAdded } = slice.actions;
export default slice.reducer;
