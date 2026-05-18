const express = require("express");
const router = express.Router();
const {FlightMiddlewares} = require("../../middlewares/index");

const CityController = require("../../controllers/city-controller");
const FlightController = require("../../controllers/flight-controller");
const AirportController = require("../../controllers/airport-controller");

router.post("/city", CityController.create); //post req, will create  city
router.delete("/city/:id" , CityController.destroy) // delete req with id
router.get("/city/:id", CityController.get) // get req with id
router.patch("/city/:id",CityController.update)
router.get("/city", CityController.getAll)

router.post(
    '/flights', 
    FlightMiddlewares.validateCreateFlight, // when you create flight, you will hit the middleware first for validation.
    FlightController.create // then you come to controller and create the flight.
) 
router.get('/flights',FlightController.getAll) // get req, will get all the flights based on filter provided in query params.

router.get('/flights/:id', FlightController.get) // get req with id, will get the flight with that id.

router.post("/airports", AirportController.create)
router.delete("/airports/:id", AirportController.destroy)

module.exports = router;