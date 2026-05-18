//this is just a cleaner way of doing require of all the repository in one single line by services.
//otherwise when we will have multiple repository we wiuld have done require for each one of them.

const CrudRepository = require("./crud-repository");

module.exports = {
    CityRepository: require("./city-repository"),
    AirplaneRepository: require("./airplane-repository"),
    FlightRepository: require("./flight-repository"),
    AirportRepository: require("./airport-repository"),
    CrudRepository: require("./crud-repository")
}