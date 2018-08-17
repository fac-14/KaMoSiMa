const databaseConnection = require('../db/db_connection.js');
const { hashPassword, comparePasswords } = require('../src/bcrypt')

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
    postDoggo: function (name, breed, park, cb) {
        let query = `
        BEGIN;
        INSERT INTO dogs (dog_name, dog_breed) VALUES ('${name}', '${breed}');
        INSERT INTO spots (dog_id, park_id) VALUES ((SELECT id FROM dogs ORDER BY id DESC LIMIT 1), (SELECT id FROM parks WHERE park_name = '${park}'));
        END;
        `;
        databaseConnection.query(query, (err, res) => {
            if (err) {
                cb("Error!", null);
            }
            cb(null, res);
        });
    },
    storeUser: function (username, admin, password, email, cb) {
        admin = false;
        hashPassword(password)
            .then(res => {
                let query = `BEGIN;
                INSERT INTO users (username, is_admin, pass, email)
                VALUES ('${username}', '${admin}', '${res}', '${email}');
                END;`
                databaseConnection.query(query, (err, res) => {
                    if (err) {
                        cb("Error!", null);
                    }
                    cb(null, res);
                })
            }).catch(console.log)
    },

    checkUser: function (name, password, cb) {
        let query = `SELECT * FROM users WHERE username='${name}'`;
        databaseConnection.query(query, (err, res) => {
            if (err) {
                // cb("Errorrrrrrrrrr!", null);
                console.log('errorrrrrr')
            } else {
                comparePasswords(password, res.rows[0].pass)
                    .then(res => {
                        cb(null, res);
                    })
                    .catch(console.log);
            }
        });
    },
    listDoggo: function () {
        console.log("Here's all the PARKS a DOGGO has BEEN IN!");
    },
    parkDoggo: function () {
        console.log("Here's all the DOGS that have been in one PARK");
    },
    breedDoggo: function (cb) {
        let query = `SELECT dogs.dog_breed, count(dogs.dog_breed) FROM dogs 
        WHERE dogs.dog_breed <> '' 
        GROUP BY dogs.dog_breed ORDER BY count(dogs.dog_breed) DESC;
        `;
        databaseConnection.query(query, (err, res) => {
            if (err) {
                cb("Error!", null);
            }
            cb(null, res);
        });
    }
};

module.exports = dbQuery;