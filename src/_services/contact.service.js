export const contactService = {
  sendEmail
};

async function sendEmail(phone, vin) {
  return await fetch('https://api.avtotest.org/api/fb', {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      phone, vin
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