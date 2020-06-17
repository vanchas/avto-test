import { GET_REQUESTS_DATA, GET_USERS_DATA } from "./adminActions";

const initialState = {
  data: {},
  users: []
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REQUESTS_DATA:
      return { ...state, data: action.payload }

    case GET_USERS_DATA:
      return { ...state, users: action.payload }

    default:
      return state;
  }
}
