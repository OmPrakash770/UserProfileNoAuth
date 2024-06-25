const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'user_profile_db'
});


connection.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});


// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY,username VARCHAR(50) NOT NULL UNIQUE,password VARCHAR(255) NOT NULL)";
//   connection.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table 1 users created");
//   });
// });

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE user_profiles (id INT AUTO_INCREMENT PRIMARY KEY,user_id INT,name VARCHAR(255),preferred_role VARCHAR(255),project VARCHAR(255),education VARCHAR(255),address VARCHAR(255),phone_no VARCHAR(15) UNIQUE,linkedin_profile VARCHAR(255),image LONGBLOB,FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE)";
//   connection.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table 2 user_profiles created");
//   });
// });

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE profile_logs (id INT AUTO_INCREMENT PRIMARY KEY,profile_id INT NOT NULL,action VARCHAR(50) NOT NULL,timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,FOREIGN KEY (profile_id) REFERENCES user_profiles(id) ON DELETE CASCADE)";
//   connection.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table 3 profile_logs created");
//   });
// });



module.exports = connection;
