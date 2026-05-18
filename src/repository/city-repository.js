const {Op}= require("sequelize");

const {City} = require ("../models/index");

class CityRepository{

  //CREATE
    async createCity({name}){
        try{
          const city = await City.create({name});
          return city;
        }
        catch (error){
          console.log("Something went wrong in the repository layer");
          throw {error};
        }
    }

  // DELETE
    async deleteCity(cityId){
     try{
        await City.destroy({
          where : {
           id:cityId
          }
        });
        return true; // we dont need to return soemthing which has been deleted.
      }
     catch (error){
          console.log("Something went wrong in the repository layer");
          throw {error};
        }
    }

    // UPDATE
    async updateCity(cityId, data){
    try {
      // The below approach also works but will not return updated objects.
      // If we are using PgSql, then returning : true will also work.
      // const city = await City.update(data, {
      //   where:{
      //     id:cityId
      //   }
      // });
      // To get updated data in mySql below is the approach..
      const city = await City.findByPk(cityId);
      city.name= data.name;
      await city.save();
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
          throw {error};
    }
    }

    // READ
    async getCity(cityId){
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
          throw {error};
    }
    }

    // Filtering the cities based on starting letters of search bar.
    async getAllCities(filter){ // since filter can be empty also in case of no search
      try {
        if(filter.name){
          const cities=await City.findAll({
            where:{
              name:{
                [Op.startsWith]:filter.name
              }
            }
          })
          return cities;
        }
        const cities= await City.findAll();
        return cities;
      } catch (error) {
        console.log("Something went wrong in the repository layer");
          throw {error};
      }
    }
}

module.exports = CityRepository;