export const GET_REQUESTS_DATA = 'GET_REQUESTS_DATA';
export const GET_USERS_DATA = 'GET_USERS_DATA';

export const getRequestsData = (page) => async dispatch => {
  const response = await fetch(`/api/report/query?page=${page}`);
  response.json().then(data => {
    return dispatch({ type: GET_REQUESTS_DATA, payload: data });
  });
}

export const getUsersData = (page) => async dispatch => {
  const response = await fetch(`/api/report/users?page=${page}`);
  response.json().then(data => {
    return dispatch({ type: GET_USERS_DATA, payload: data });
  });
}
