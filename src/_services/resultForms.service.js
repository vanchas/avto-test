import { authHeader } from "../_helpers/auth-header";

export const resultForms = {
  inspection
};

const user = authHeader().Authorization;

async function inspection(phone, vin) {
  return await fetch(`/api/fb_inspection`, {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json",
      "Content-Type": "application/json",
      Authorization: `${user.token_type} ${user.token}`,
    },
    body: JSON.stringify({ phone, vin }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}

async function requestForOwnerData(phone, email) {
  return await fetch(`/api/fb_inspection`, {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Accept": "application/json",
      "Content-Type": "application/json",
      Authorization: `${user.token_type} ${user.token}`,
    },
    body: JSON.stringify({ phone, email }),
  })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
}

// async function inspection(phone) {
//   const user = authHeader().Authorization;
//   return await fetch(`/send_link`, {
//     method: "POST",
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       Authorization: `${user.token_type} ${user.token}`,
//     },
//     body: JSON.stringify({ phone, vin }),
//   })
//       .then((res) => res.json())
//       .then((data) => console.log(data))
//       .catch((err) => console.error(err));
// }
// send_link - POST, поля - email (только нужна линка на форму для возобновления)