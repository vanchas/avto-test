import { history } from "../_helpers/history";

export const carInfoService = {
  getCarInfo
};


async function getCarInfo(value) {
  return await fetch('https://strateg.link/public/api/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      search_filed: value
    })
  })
    .then((res) => {
      const data = res.json();
      data.then(car => {
        return localStorage.setItem('avto-test-car', JSON.stringify(car));
      })
        .then(() => history.push('/result'))
        .catch(error => console.error(error));
})
    .catch (error => {
  console.error(error);
});
}
