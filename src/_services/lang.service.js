export const languageService = {
  changeKeyText
};

async function changeKeyText(key, text, lang) {
  return await fetch(`/api/fields/update/${key}`, {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json;charset=utf-8',
      'X-localization': lang,
    },
    body: JSON.stringify({
      value: text
    })
  })
    .then((res) => {
      return res.json().then(data => {
      })
    })
    .catch(error => {
      console.error('Error:', error);
    });
}