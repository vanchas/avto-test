import {SET_LANGUAGE, SHOW_SUCCESS} from "./appActions";

const initialState = {
  language: {},
  success: null
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return { ...state, language: action.payload }

    case SHOW_SUCCESS:
      return { ...state, success: action.payload }

    default:
      return state;
  }
}
