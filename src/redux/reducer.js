//여러개의 데이터 리듀서를 합쳐주는 함수 import
import { combineReducers } from "redux";

const youtubeReducer = (state = { youtube: [] }, action) => {
  switch (action.type) {
    case "SET_YOUTUBE":
      return { ...state, youtube: action.payload };

    default:
      return state;
  }
};

//각 리듀서 데이터객체를 하나로 합쳐서 내보냄
const reducers = combineReducers({ youtubeReducer });
export default reducers;
