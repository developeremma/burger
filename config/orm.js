// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers.These are the methods you will need to use in order to retrieve and store data in your database.
// selectAll()
// insertOne()
// updateOne()

var connection = require('../config/connection.js');

//function to add correct number of ?question marks to sql syntax
function printQuestionMarks(num){
    var arr = [];

    for(var i=0;i<num;i++){
        arr.push("?");
    }
    return arr.toString();
}
// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    for(var key in ob) {
        if(Object.hasOwnProperty.call(ob,key)){
            arr.push(key + "=" + ob[key]);
        }
    }
    return arr.toString();
}
// Object for all our SQL statement functions.
// selectAll()
// insertOne()
// updateOne()

var orm = {
  //method to retrieve all of the burger data from db
selectAll: function(tableInput,cb){
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err,result) {
        if(err){
            throw err;
        }
        cb(result);
        });
},
//method to add a burger
insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result){
        if(err){
            throw err;
        }
        cb(result);
    });
},
//method to update the devoured value
updateOne: function(table, objColVals, condition, cb){
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function (err, result) {
        if (err) {
            throw err;
        }

        cb(result);
    });
}
};
// Exporting the orm object for the model (burger.js)

module.exports = orm;


