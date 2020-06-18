import { SET_LANGUAGE } from "./appActions";

const initialState = {
  language: {}
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return { ...state, language: action.payload }

    default:
      return state;
  }
}
