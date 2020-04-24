// import { authHeader } from '../_helpers/auth-header';

import { history } from "../_helpers/history";

export const userService = {
  login,
  logout,
  userDetails,
  // getAll
};

function login(email, password) {

  return fetch('https://strateg.link/public/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      email,
      password
    })
  }).then((res) => {
    if (res.status === 200) {

      const result = res.json();
      result.then(data => {

        localStorage.setItem('avto-test-user', JSON.stringify(data.user));
      })
        .then(() => history.push('/home'));
    }
  })
    .then(() => {
      window.location.reload(true);
    })
    .catch(error => {
      console.error(error);
    });
}

function logout() {
  localStorage.removeItem('avto-test-user');

  fetch('https://strateg.link/public/api/logout', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
    .then((res) => {
      // console.log('logout res:', res);

      history.push('/');
    })
    .then(() => {
      window.location.reload(true);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}


// https://strateg.link/public/api/details
function userDetails() {
  return JSON.parse(localStorage.getItem('avto-test-user'));
}

// function getAll() {
//     const requestOptions = {
//         method: 'GET',
//         headers: authHeader()
//     };

//     return fetch(`/users`, requestOptions).then(handleResponse);
// }

// function handleResponse(response) {
//     return response.text().then(text => {
//         const data = text && JSON.parse(text);
//         if (!response.ok) {
//             if (response.status === 401) {
//                 // auto logout if 401 response returned from api
//                 logout();
//                 window.location.reload(true);
//             }

//             const error = (data && data.message) || response.statusText;
//             return Promise.reject(error);
//         }

//         return data;
//     });
// }