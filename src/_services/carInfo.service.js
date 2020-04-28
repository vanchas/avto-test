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
      if (res.status === 500 || res.status === 404 || res.status === 400) {
        window.open(`https://www.carvertical.com/ua/poperednja-perevirka?a=avtotest&b=f1781078&data1=fc&vin=${value}`, '_blanc');
        
        localStorage.setItem('avto-test-error', JSON.stringify(car))
        // alert('Ошибка поиска по введенным данным');
        // window.location.reload(true);
      } else if (res.status === 429) {
        alert('poshol nahuy, 3 raza');
      } else {
        const data = res.json();
        console.log('res data',data);
        

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
