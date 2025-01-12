import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { noteData } from "../models/noteModel/NoteModel";

export interface noteState {
    noteList: noteData[];
}

const initialState: noteState = {
    noteList: [],
};

const NoteSlice = createSlice({
  name: "noteData",
  initialState,
  reducers: {
    setNote: (state, action: PayloadAction<noteState>) => {
      return action.payload;
    },
    clearNote: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { setNote, clearNote } =
NoteSlice.actions;

export default NoteSlice.reducer;
