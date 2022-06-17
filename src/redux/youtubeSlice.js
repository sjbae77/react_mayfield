import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchYoutube = createAsyncThunk(
  "youtube/requestYoutube",
  async () => {
    const key = "AIzaSyCNEFP7grGD77zUQvYF6Tg93dOjeA-mCjs";
    const playList = "PLKoTiVSIVIvnzOXEzNgPazzOR21NERHWz";
    const num = 4;
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playList}&maxResults=${num}`;

    const response = await axios.get(url);
    return response.data.items;
  }
);

const youtubeSlice = createSlice({
  name: "youtube",
  initialState: {
    data: [],
    isLoading: false,
  },
  extraReducers: {
    [fetchYoutube.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchYoutube.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [fetchYoutube.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default youtubeSlice.reducer;
