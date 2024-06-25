
// const db = require('../config/db');

// const register = (req, res, next) => {
//   const { username, password } = req.body;
//   console.log("Request Body:", req.body);

//   if (username.length > 50) {
//       return res.status(400).json({ msg: 'Username cannot be longer than 50 characters.' });
//   }

//   const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
//   db.query(query, [username, password], (err, result) => {
//       if (err) {
//           if (err.code === 'ER_DUP_ENTRY') {
//               return res.status(400).json({ msg: 'Username already exists. Please choose a different username.' });
//           }
//           return next(err);
//       }
//       res.status(201).json({ msg: 'User registered' });
//   });
// };





// const login = (req, res, next) => {
//   const { username, password } = req.body;
//   console.log("Request Body:", req.body);

//   const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
//   db.query(query, [username, password], (err, results) => {
//       if (err) {
//           return next(err);
//       }

//       if (results.length === 0) {
//           return res.status(400).json({ msg: 'Invalid username or password' });
//       }

//       // Create a session for the user
//       req.session.user = {
//           id: results[0].id,
//           username: results[0].username
//       };

//       res.status(200).json({ msg: 'User logged in' });
//   });
// };



// const logout = (req, res, next) => {
//   console.log("Request Body:", req.body);

//   req.session.destroy((err) => {
//       if (err) {
//           return next(err);
//       }
//       res.status(200).json({ msg: 'User logged out' });
//   });
// };




// module.exports = { register, login ,logout};


// ------------------------------------------------------------------------------->Updated


const db = require('../config/db');


const register = (req, res, next) => {
  const { username, password } = req.body;
  console.log("Request Body:", req.body);

  if (username.length > 50) {
      return res.status(400).json({ msg: 'Username cannot be longer than 50 characters.' });
  }

  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(query, [username, password], (err, result) => {
      if (err) {
          if (err.code === 'ER_DUP_ENTRY') {
              return res.status(400).json({ msg: 'Username already exists. Please choose a different username.' });
          }
          return next(err);
      }
      res.status(201).json({ msg: 'User registered' });
  });
};



  const login = (req, res, next) => {
  const { username, password } = req.body;
  console.log("Request Body:", req.body);

  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(query, [username, password], (err, results) => {
      if (err) {
          return next(err);
      }

      if (results.length === 0) {
          return res.status(400).json({ msg: 'Invalid username or password' });
      }

      // Create a session for the user
      req.session.user = {
          id: results[0].id,
          username: results[0].username
      };

      res.status(200).json({ msg: 'User logged in' });
  });
};



const logout = (req, res, next) => {
  console.log("Request Body:", req.body);

  req.session.destroy((err) => {
      if (err) {
          return next(err);
      }
      res.status(200).json({ msg: 'User logged out' });
  });
};



module.exports = { register, login ,logout};