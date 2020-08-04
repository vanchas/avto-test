import {GET_REQUESTS_DATA, GET_SECRET_FORMS_VALUES, GET_USERS_DATA} from "./adminActions";

const initialState = {
  data: {},
  users: [],
  formDetails: null
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REQUESTS_DATA:
      return { ...state, data: action.payload }

    case GET_SECRET_FORMS_VALUES:
      return { ...state, formDetails: action.payload }

    case GET_USERS_DATA:
      return { ...state, users: action.payload }

    default:
      return state;
  }
}
