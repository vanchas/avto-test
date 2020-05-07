import { setLang } from "../_helpers/lang-helper";

export const languageService = {
  changeLanguage,
  changeKeyText
};


async function changeLanguage(value) {

  return await fetch('/api', {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json;charset=utf-8',
      'X-localization': value,
    }
  })
    .then((res) => {
      // console.log(res);

      res.json().then(data => {
        // console.log(data);

        setLang(data);
      })

    })
    .catch(error => {
      console.error('Error:', error);
    });
}


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
      // console.log(res);

      res.json().then(data => {
        // console.log(data);

      })

    })
    .catch(error => {
      console.error('Error:', error);
    });
}