import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRoom = createAsyncThunk("room/requestRoom", async () => {
  const url = `${process.env.PUBLIC_URL}/DB/rooms.json`;
  const response = await axios.get(url);
  return response.data.rooms;
});

const roomSlice = createSlice({
  name: "room",
  initialState: {
    data: [],
    isLoading: false,
  },
  extraReducers: {
    [fetchRoom.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchRoom.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [fetchRoom.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default roomSlice.reducer;
