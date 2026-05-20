const {Flights} = require('../models/index');
const {Op} = require('sequelize');

class FlightRepository{

    #createFilter(data){
        let filter = {};

        if(data.arrivalAirportId){ // if present in incoming req
            filter.arrivalAirportId = data.arrivalAirportId; // add it to filter object
        }
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }
        if(data.minPrice && data.maxPrice){ // we will check for both price first thenfor individual price otherwise it will override the filter object and we will end up with only one price filter in the end
            Object.assign(filter, {[Op.and]: [{price: {[Op.gte]: data.minPrice}}, {price: {[Op.lte]: data.maxPrice}}]})
        }
        if(data.minPrice){ // since we need to compare, will use op and assign operator to filter out the flights with minPrice
            Object.assign(filter, {price : {[Op.gte]: data.minPrice}}) // gte -> greater than equal to
        }
        if(data.maxPrice){
            Object.assign(filter, {price : {[Op.lte] : data.maxPrice}})
        }
        return filter;
    }
 
    //CREATE
    async createFlight (data){
        try{
            const flight = await Flights.create(data);
            return flight;
        }
        catch (error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    //get single flight based on id for use case like boarding pass
    async getFlight(flightId){
        try{
            const flight = await Flights.findByPk(flightId);
            return flight;
        }
        catch (error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getAllFlights(filter){
        try{
            const filteredFlights = this.#createFilter(filter);
            const flights = await Flights.findAll(
                {
                    where: filteredFlights
                });
            return flights;
        }
        catch (error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async updateFlight(flightId, data){ // need id to update the specific flight once booking is done
        try{
            await Flights.update(data, {
                where : {
                    id: flightId
                }
            });
            return true;
        } catch(error){
            throw new AppError(
                'RepositoryError',
                'Cannot update the booking',
                'There was some error while updating the booking, please try again later',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }

}


module.exports = FlightRepository;

/**
 *where :{
    arrivalAirportId: 3,
    departureAirportId: 5,
    price: {[Op.gte]: 5000
    }
 * 
 **/