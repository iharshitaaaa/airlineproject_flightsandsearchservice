## Project Architecture

- We will be having tests folder in later stage.And during deployment we dont add tests folder to reduce the load time.
- We are going to follow role based project structure not feature based.

Project Structure would be like 
/
- src/
    index.js/
    models/
    conrollers/
    middlewares/
    services/
    utils/
    config/
    repository/

- tests/ [later]

## Project Setup
- Clone the project in your local.
- Execute `npm intall` on the same path as of your root directory of the downloaded project.
- Create a `.env` file in the root directory and add the following environment variable
     `PORT = 3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following  piece of json.
```
     {
    "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_PASSWORD>,
    "database": "Flights_Search_Db_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
    },
```
- Once you have added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db: create` and then execute `npx sequelize db:migrate`

```

## DB Design
 - Airplane Table
 - Flight Table
 - Airport Table
 - City Table
        
   - A city has many airports but an airport belongs to a respective city.

- Also as per convention, Tables names are plural and Model Class, column names are generally singular.

## Tables

### City -> id, name, createdAt, updatedAt
### Airport -> id, name, address, createdAt, updatedAt, city_id
    Relationship - City has many airports and Aiport is belong to one city (one to many)
### Airplane -> 
### City -> 

``` command to create Airport model - npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:Integer ```
