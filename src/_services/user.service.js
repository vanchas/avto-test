import { history } from "../_helpers/history";
import App from "../components/app/App";

export const userService = {
  login,
  logout,
  userDetails,
  registration
};

function login(email, password) {

  return fetch('/api/login', {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      email,
      password
    })
  }).then((res) => {
    if (res.status === 200) {
      const result = res.json();
      // console.log(res);

      result.then(async data => {
        // console.log(data);
        const user = await data.user;
        user.token = await data.token;
        user.token_type = await data.token_type;
        localStorage.setItem('avto-test-user', JSON.stringify(user));
      })
        .then(() => history.push('/home'))
        .then(() => App.getDerivedStateFromProps())
        .catch(err => console.log(err));
    } else {
      alert('Неверно введен логин или пароль.');
    }
  })
    .catch(error => {
      console.error(error);
    });
}

function logout() {
  localStorage.removeItem('avto-test-user');

  fetch('/api/logout', {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
    .then(() => history.push('/login/sign-in'))
    .catch(error => {
      console.error('Error:', error);
    });
}

function registration(email, password) {
  fetch('/api/register', {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      email,
      password
    })
  })
    .then((res) => {
      console.log(res);

      if (res.status === 201 || res.status === 200) {

        // const result = res.json();
        // result.then(data => {
        //   console.log(data);

        //   localStorage.setItem('avto-test-user', JSON.stringify(data.user));
        // })
        // .then(() => {
        // window.open(`${email}`, '_blanc');
        // }).then(() => {
        history.push('/login/sign-in');
        // window.location.reload(true);
        // })
        // .catch(err => console.log(err));
      } else {
        alert('Не вдалося зареєструватися')
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// /api/details
function userDetails() {
  return JSON.parse(localStorage.getItem('avto-test-user'));
}
