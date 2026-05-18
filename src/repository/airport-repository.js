const CrudRepository = require("./crud-repository");
const { Airport } = require("../models/index");

class AirportRepository extends CrudRepository{
    constructor(){
        super(Airport);
    }

    // This will have all the methods present in crud repository and we can add any airport specific method if required.
}

module.exports = AirportRepository;