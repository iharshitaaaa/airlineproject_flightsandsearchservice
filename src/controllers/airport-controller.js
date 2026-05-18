const { AirportService } = require("../services/index");

const airportService = new AirportService();

const create = async (req, res) => {
    try{
        const airport = await airportService.create(req.body);
        return res.status(201).json({
            data: airport,
            success: true,
            message: "Successfully created an airport",
            err: {}
        })
    }
    catch (error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to create an airport",
            err: {error}
        })
    }
}

const destroy = async (req, res) => {
    try{
        const response = await airportService.destroy(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted the airport",
            err: {}
        })
    }
    catch (error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to delete the airport",
            err: {error}
        })
    }
}

module.exports = {
    create,
    destroy,
}
