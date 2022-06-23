import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import youtubeReducer from "./redux/youtubeSlice";
import roomReducer from "./redux/roomSlice";

const store = configureStore({
  reducer: {
    youtube: youtubeReducer,
    room: roomReducer,
  },
});

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);
