import { authHeader } from "../_helpers/auth-header";

export const resultForms = {
  formFetch
};

const user = authHeader().Authorization;

async function formFetch(formName, phone, vin, email) {
  let body
  let id

  if (formName === 'owner') {
    body = JSON.stringify({ phone, email })
    id = 1
  } else if (formName === 'inspection') {
    body = JSON.stringify({ phone, vin })
    id = 2
  } else if (formName === 'monitoring') {
    body = JSON.stringify({ vin, email })
    id = 3
  } else if (formName === 'discount') {
    body = JSON.stringify({ email })
    id = 4
  } else if (formName === 'bonus') {
    body = JSON.stringify({ email })
    id = 5
  }

  return await fetch(`https://api.avtotest.org/api/fb_inspection/${id}`, {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      // "Accept": "application/json",
      "Content-Type": "application/json",
      Authorization: `${user.token_type} ${user.token}`,
    },
    body: body,
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}
