const {Airplane} = require('../models/index');

class AirplaneRepository{

    // GET
    async getAirplane(id){
        try {
            const airplane = await Airplane.findByPk(id);
            return airplane;
        }
        catch (error) {
            console.log("Something went wrong at the repository layer");
            throw error;
        }
    }
}

module.exports = AirplaneRepository;