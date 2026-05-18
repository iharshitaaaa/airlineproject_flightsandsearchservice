const express = require ("express");
const bodyParser =require("body-parser")
// require('dotenv').config()
const city = require("./repository/city-repository")

const {PORT} = require('./config/serverConfig')
const ApiRoutes = require("./routes/index")

const {Airport, City } = require('./models/index');

const db = require('./models/index');

const setupAndStartServer = async ()=>{

    //create the express object
    const app = express();
    //  const PORT= 3000; No hardcoding since we are using dotenv.

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use("/api", ApiRoutes);// if in any incoming request u see /api we are going to map it with ApiRoutes.

    //   const airports = await City.findAll({
    //        id: 7,
    //        include : [
    //         {
    //             model: Airport
    //         }
    //        ]
    //     })
    //     console.log(airports);
        

    app.listen(PORT, async()=>{
        console.log(`Server started at ${PORT}`);
        // console.log(process.env)
        // Heavy operation so will sunchronize once the server starts.
        // db.sequelize.sync({alter:true}) // updates table in the db if there is any change in model.

        // const city = await City.findOne({
        //     where : {
        //         id: 7
        //     }
        // }); 
        // const airports = await city.getAirports(); // getMethod created by sequelize for us to get all the airports of a particular city.
        
    });
}

setupAndStartServer();
