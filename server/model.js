const mysql = require("mysql");
var conn = mysql.createConnection({
  host: "sql9.freemysqlhosting.net",
  user: "sql9376945",
  password: "3hmK1iU3vK",
  database: "sql9376945"
})
conn.connect(); //creates the database connection

function queryDatabase(query){ //Will always use this method to query data. Just pass it SQL statement
    return new Promise(function(resolve, reject){
    conn.query(query, function (error, results, fields) { //make query here
        if (error) {
          console.log(error);
          reject();
        } 

        resolve(results);
      });
    })
  }
module.exports = {queryDatabase}; //exports the function so that I can use it in controller.js