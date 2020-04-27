import { history } from "../_helpers/history";
import App from "../components/app/App";

export const userService = {
  login,
  logout,
  userDetails,
  registration
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

      result.then(async data => {
        const user = await data.user;
        // console.log(user);
        user.token_type = await data.token_type;
        user.token = await data.token;
        await localStorage.setItem('avto-test-user', JSON.stringify(user));
      })
        .then(() => App.getDerivedStateFromProps())
        .then(() => history.push('/home'))
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

  fetch('https://strateg.link/public/api/logout', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
    .then(() => history.push('/login/sign-in'))
    .catch(error => {
      console.error('Error:', error);
    });
}

function registration(name, email, password) {
  fetch('https://strateg.link/public/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      name,
      email,
      password
    })
  })
    .then((res) => {
      if (res.status === 200) {

        const result = res.json();
        result.then(data => {


          localStorage.setItem('avto-test-user', JSON.stringify(data.user));
        })
          .then(() => history.push('/home'))
          .catch(err => console.log(err));
      } else {
        alert('Все поля должны быть корректно заполнены.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// https://strateg.link/public/api/details
function userDetails() {
  return JSON.parse(localStorage.getItem('avto-test-user'));
}
