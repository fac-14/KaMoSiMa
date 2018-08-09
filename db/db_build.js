const fs = require('fs');
const connection = require('./db_connection');
let sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();


const buildDatabase = (cb) => {
  connection.query(sql, (err, result) => {
    if (err) {
      console.log(err, "ERROR");
      cb(err);
    } else {
      console.log('All your base are create');
      cb(null, result);
    }
  });
};


module.exports = buildDatabase;