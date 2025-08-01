import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characters: [],
  status: "idle",
  error: null,
};

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    getCharacters: (state, { type, payload }) => {
      return { ...state, characters: payload };
    },
    charDetail: (state, { type, payload }) => {
      return { ...state, characters: payload };
    },
  },
});

export const { getCharacters, charDetail } = characterSlice.actions;
const charactersReducers = characterSlice.reducer;

export default charactersReducers;
