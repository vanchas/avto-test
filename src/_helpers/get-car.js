export const getCar = () => {

  let car = JSON.parse(localStorage.getItem('avto-test-car'));

  if (car && car.brand) {

      return { 'Found': car };
  } else {
      return {};
  }
}
