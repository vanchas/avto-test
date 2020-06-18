import { authHeader } from '../_helpers/auth-header';

export const GET_REQUESTS_DATA = 'GET_REQUESTS_DATA';
export const GET_USERS_DATA = 'GET_USERS_DATA';

export const getRequestsData = (page) => async dispatch => {
  const user = authHeader().Authorization;
  
  const response = await fetch(`/api/report/query?page=${page}`, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': `${user.token_type} ${user.token}`
    }
  });
  response.json().then(data => {
    return dispatch({ type: GET_REQUESTS_DATA, payload: data });
  }).catch(err => console.error('Error:', err));
}

export const getUsersData = (page) => async dispatch => {
  const user = authHeader().Authorization;

  const response = await fetch(`/api/report/users?page=${page}`, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': `${user.token_type} ${user.token}`
    }
  });
  response.json().then(data => {
    return dispatch({ type: GET_USERS_DATA, payload: data });
  }).catch(err => console.error('Error:', err));
}
