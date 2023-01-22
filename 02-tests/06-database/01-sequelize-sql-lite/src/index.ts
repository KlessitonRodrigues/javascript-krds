import http from "http";

import database from "./config/database";
import initModels, { Car } from "./models";
import getHttpBody from "./utils/getHttpBody";

const run = async () => {
  const db = await database();
  const models = initModels(db);

  // Create database tables for all models
  await db.sync();

  // Create simple controller with routes
  const controller = (url: string, method: string, data: any) => {
    const routes: Record<string, any> = {
      "/cars": {
        GET: async () => await models.cars.findAll(),
        POST: async (data: Car) => await models.cars.create(data),
      },
    };

    return routes[url][method](data);
  };

  // Create a simple api with http server
  const server = http.createServer(async (req, res) => {
    const url = req.url || "";
    const method = req.method || "";
    const body = await getHttpBody(req);

    try {
      console.log(await controller(url, method, body));
    } catch (error) {
      console.log(error);
    } finally {
      res.statusCode = 200;
      res.end();
    }
  });

  server.listen(4000, () => console.log("running http://localhost:4000"));
};

run().catch((err) => console.log(err));

/**
 * 
    models.cars.create({
      name: "Compass",
      brand: "Jeep",
      weight: 2120,
      releaseDate: new Date(2018, 2, 20),
      stillInProduction: true,
    });
 */
