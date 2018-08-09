const databaseConnection = require('../db/db_connection.js');

const dbQuery = {
    getDoggo: function (cb) {
        // will be databaseConnection.query when live :D 
        let query = 'SELECT dogs.dog_name, dogs.dog_breed, parks.park_name FROM dogs INNER JOIN spots ON spots.dog_id = dogs.id INNER JOIN parks ON spots.park_id = parks.id';
        databaseConnection.query(query, (err, res) => {
            if (err) {
                cb("Error!", null);
            }
            cb(null, res);
        });
    },
    postDoggo: function () {
        console.log("I'm POSTING DOGGO data");
    },
    listDoggo: function () {
        console.log("Here's all the PARKS a DOGGO has BEEN IN!");
    },
    parkDoggo: function () {
        console.log("Here's all the DOGS that have been in one PARK");
    },
    breedDoggo: function () {
        console.log("Here's all the BREEDS of doggo!");
    }
};

module.exports = dbQuery;