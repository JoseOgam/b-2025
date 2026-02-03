import { createSlice } from "@reduxjs/toolkit";
interface contact {
  fullname: string;
  email: string;
  contact: string;
  message: string;
}

interface contactState {
  messages: contact[];
}
const initialState: contactState = {
  messages: [],
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
