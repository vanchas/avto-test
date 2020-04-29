import { history } from "../_helpers/history";

export const carInfoService = {
  getCarInfo
};


async function getCarInfo(value) {
  return await fetch('https://strateg.link/public/api/search', {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      search_filed: value
    })
  })
    .then((res) => {
      // console.log('res',res);

      if (res.status === 500 || res.status === 404 || res.status === 400) {
        localStorage.removeItem('avto-test-car');
        window.open(`https://www.carvertical.com/ua/poperednja-perevirka?a=avtotest&b=f1781078&data1=fc&vin=${value}`, '_blanc');
        history.push('/result');

        // } else if (res.status === 429) {
        //   alert('Вы исчерпали лимит бесплатных проверок в сутки (3 раза). Для того чтобы увеличить лимит до 30 проверок зарегистрируйтесь, это займет не более двух минут.');
        //   history.push('/login/sign-in');
      } else {
        const data = res.json();
        // console.log('res data', data);


        data.then(async carData => {
          let car = await carData;

          for (let key in car) {
            if (car[key] === null && key !== 'vin') {
              car[key] = 'Н / Д';
            }
          }
          if (car.vin === null) car.vin = 'продавець не надав VIN';

          return localStorage.setItem('avto-test-car', JSON.stringify(car));
        })
          .then(() => history.push('/result'))
          .catch(error => console.error('Error:', error));
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
