const {AirplaneRepository, FlightRepository} = require('../repository/index');
const {compareTime} = require('../utils/helper');

class FlightService{
    constructor(){
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();  
    }

    async createFlight(data){
        try {

            if (!compareTime(data.arrivalTime, data.departureTime)){
                throw {error: "Arrival time cannot be less than departure time"};
            }
            // calculating totalSeats first and then sending it along with the rest of the data.
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight =  await this.flightRepository.createFlight({...data, totalSeats: airplane.capacity}); // sending the totalSeats with data received from controller
            return flight;
        }
        catch (error){
            console.log("Something went wrong at the service layer");
            throw error;
        }
    }

    async getFlight(flightId){
        try{
            const flight = await this.flightRepository.getFlight(flightId);
            return flight;
        }
        catch (error){
            console.log("Something went wrong at the service layer");
            throw error;
        }
    }

    async getAllFlightsData(data){
        try{
            const flights = await this.flightRepository.getAllFlights(data);
            return flights;
        }
        catch (error){
            console.log("Something went wrong at the service layer");
            throw error;
        }
    }

}

module.exports = FlightService;

/**
 * flightNumber
 * airplaneId
 * departureAirportId
 * arrivalAirportId
 * arrivalTime
 * departureTime
 * price
 * totalSeats -> airplane capacity
 */
