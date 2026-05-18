const CityService = require('../services/city-service');

const cityService = new CityService(); // created a global constructor

// Method type - POST , data - req.body
const create = async(req, res) =>{
   try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
        data : city,
        success: true,
        message: " Successfully created a city",
        err: {}
    })
   } catch (error) {
    console.log(error);
    return res.status(501).json({
      data: {},
      success: false,
      message: "Unable to create a city",
      err: {error}
    })
   }
}

// Method type - delete , url- /city/:id , cityId - req.params.body
const destroy = async(req, res) =>{
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
        data : response ,
        success: true,
        message: " Successfully deleted the city",
        err: {}
    })
   } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to delete the city",
      err: {error}
    })
   }
}

// Method type - get , uRL- /city/:id , data - req.params.body
const get = async(req, res) =>{
  try {
    const city = await cityService.getCity(req.params.id);
    return res.status(200).json({
        data : city,
        success: true,
        message: "Successfully fetched the city",
        err: {}
    })
   } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to fetch the city",
      err: {error}
    })
   }
}

// Method: get, url - /city
const getAll = async(req,res) =>{
  try {
    const cities= await cityService.getAllCities(req.query);
    return res.status(200).json({
     data: cities,
     success: true,
     message: "Successfully fetched the cities",
     err: {}
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to fetch the cities",
      err: {error}
    })
  }
}

// Method type - update, data - req.body
const update = async(req, res) =>{
  try {
    const city = await cityService.updateCity(req.params.id, req.body);
    return res.status(200).json({
      data:city,
      success: true,
      message: "Successfully fetched the city",
      err: {}
    })
   } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to update the city",
      err: {error}
    })
   }
}

module.exports = {
  create,
  destroy,
  update,
  get,
  getAll,
};