export const contactService = {
  sendEmail
};

async function sendEmail(name, phone, vin) {
  return await fetch('/api/fb', {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      name, phone, vin
    })
  })
    .then((res) => {
      // console.log(res);

      return res.json().then(data => {
        // console.log(data);

      })
        .catch(error => {
          console.error('Error:', error);
        });
    })
}