import models, { Car } from "../models";

const createCar = async (car: Car) => {
  await models.carModel.create(car);
};

createCar({
  id: 1,
  name: "Compass",
  brand: "Jeep",
  weight: 2120,
  releaseDate: new Date(2018, 2, 20),
  stillInProduction: true,
})
  .then(() => {
    console.log(models.carModel.findAll());
  })
  .catch((err) => {
    console.log(err);
  });
