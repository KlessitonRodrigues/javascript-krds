import CarsModel, { Car } from "../models/cars";

const createCar = async (car: Car) => {
  await CarsModel.create(car);
};

createCar({
  name: "Compass",
  brand: "Jeep",
  weight: 2120,
  releaseDate: new Date(2018, 2, 20),
  stillInProduction: true,
})
  .then(() => {
    console.log(CarsModel.findAll());
  })
  .catch((err) => {
    console.log(err);
  });
