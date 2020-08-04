import { history } from "../_helpers/history";

export const carInfoService = {
  getCarInfo,
};

async function getCarInfo(value) {
  return await fetch("/api/search", {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      search_filed: value,
    }),
  })
    .then((res) => {
      if (res.status === 500 || res.status === 400 || res.status === 404) {
        localStorage.removeItem("avto-test-car");
        window.open(
          `https://www.carvertical.com/ua/poperednja-perevirka?a=avtotest&b=f1781078&data1=fc&vin=${value}`,
          "_blanc"
        );
        history.push("/result");
      } else if (res.status === 203) {
        const data = res.json();
        data.then((car) => {
          if (car.error && car.error.vehicle) {
              // vin: {wmi: "WBA", vds: "8H9108", vis: "0K694016"}
              localStorage.setItem(
              "avto-test-car",
              JSON.stringify({...car.error.vehicle, vin: `${car.error.vin.wmi}${car.error.vin.vds}${car.error.vin.vis}`})
            );
            setTimeout(() => {
              window.open(
                `https://www.carvertical.com/ua/poperednja-perevirka?a=avtotest&b=f1781078&data1=fc&vin=${value}`,
                "_blanc"
              );
              history.push("/result");
            }, 1000);
          }
        });
      } else {
        const data = res.json();
        data
          .then(async (carData) => {
            let car = await carData;
            for (let key in car) {
              if (car[key] === null && key !== "vin") {
                car[key] = "Н / Д";
              }
            }
            if (car.vin === null) car.vin = "продавець не надав VIN";
            return localStorage.setItem("avto-test-car", JSON.stringify(car));
          })
          .then(() => history.push("/result"))
          .catch((error) => console.error("Error:", error));
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
