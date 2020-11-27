const mysql = require("mysql");
var conn = mysql.createConnection({
  host: "sql9.freemysqlhosting.net",
  user: "sql9376945",
  password: "3hmK1iU3vK",
  database: "sql9376945"
})
conn.connect(); //creates the database connection

function queryDatabase(query){ //always use this method to query data and pass it as a SQL statement
    return new Promise(function(resolve, reject){
    conn.query(query, function (error, results, fields) { //makes query
        if (error) {
          console.log(error);
          reject();
        } 
        resolve(results);
      });
    })
  }
module.exports = {queryDatabase}; //exports the function to controller.js