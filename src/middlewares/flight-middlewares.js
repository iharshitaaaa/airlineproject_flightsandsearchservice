const {ClientErrorCodes} = require("../utils/error-codes");
const validateCreateFlight = (req, res, next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    ){
        // if any of the required fields are missing we come inside if
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data:{},
            success: false,
            message: "Invalid request body, please provide all the required fields to create a flight",
            err: "Missing required properties to create a flight"
        })
    }
    next();
}

module.exports = {
    validateCreateFlight
}