const db = require('../config/db');



const createProfile = (req, res, next) => {
  const { user_id, name, preferred_role, project, education, address, phone_no, linkedin_profile } = req.body;
  const image = req.file ? req.file.buffer : null;


   console.log("Request Body:", req.body);
  const query = `
      INSERT INTO user_profiles (user_id, name, preferred_role, project, education, address, phone_no, linkedin_profile, image)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [user_id, name, preferred_role, project, education, address, phone_no, linkedin_profile, image];

  db.query(query, values, (err, result) => {
      if (err) {
          return next(err);
      }
      res.status(201).json({ msg: 'Profile created successfully', id: result.insertId });
  });
};




const getProfile = (req, res, next) => {
  const { id } = req.params;
  console.log("Request Body:", req.params);
  const query = 'SELECT * FROM user_profiles WHERE id = ?';
  db.query(query, [id], (err, results) => {
      if (err) {
          return next(err);
      }

      if (results.length === 0) {
          return res.status(404).json({ msg: 'Profile not found' });
      }

      const profile = results[0];
      if (profile.image) {
          profile.image = profile.image.toString('base64'); // Convert image to Base64 string
      }

      res.status(200).json(profile);
  });
};




const updateProfile = (req, res, next) => {
  const { id } = req.params;
  const { name, preferred_role, project, education, address, phone_no, linkedin_profile } = req.body;
  const image = req.file ? req.file.buffer : null;

  console.log("Request Body:", req.params,req.body);

//   const checkQuery = 'SELECT * FROM user_profiles WHERE id = ?';
  const checkQuery = 'SELECT * FROM user_profiles WHERE  phone_no = ?';
  db.query(checkQuery, [phone_no], (err, results) => 
    // db.query(checkQuery, [id], (err, results) => 
    {
      if (err) {
          return next(err);
      }

      if (results.length === 0) {
          return res.status(404).json({ msg: 'Profile not found' });
      }

      const updateQuery = `
          UPDATE user_profiles
          SET name = ?, preferred_role = ?, project = ?, education = ?, address = ?, phone_no = ?, linkedin_profile = ?, image = ?
          WHERE id = ?
      `;
      const values = [name, preferred_role, project, education, address, phone_no, linkedin_profile, image, id];

      db.query(updateQuery, values, (err, result) => {
          if (err) {
              return next(err);
          }
          res.status(200).json({ msg: 'Profile updated successfully' });
      });
  });
};



const deleteProfile = (req, res, next) => {
  const { id } = req.params;

  console.log("Request Body:", req.params);
  const checkQuery = 'SELECT * FROM user_profiles WHERE id = ?';
  db.query(checkQuery, [id], (err, results) => {
      if (err) {
          return next(err);
      }

      if (results.length === 0) {
          return res.status(404).json({ msg: 'Profile not found' });
      }

      const deleteQuery = 'DELETE FROM user_profiles WHERE id = ?';
      db.query(deleteQuery, [id], (err, result) => {
          if (err) {
              return next(err);
          }
          res.status(200).json({ msg: 'Profile deleted successfully' });
      });
  });
};



const getUserDetailsByUsername = (req, res, next) => {
    const username = req.params.username;
//   
    const phone_no = req.params.phone_no;
    // const phone_no = req.params["profileData.phone"];
    
    console.log("Request Body:", req.params);
    // const query = 'SELECT * FROM users WHERE username = ?';

    const query = 'select * from user_profiles where phone_no = ?';
    db.query(query, [phone_no], (err, results) => {
      if (err) {
        return next(err);
      }
  
      if (results.length === 0) {
        return res.status(404).json({ msg: 'User not found' });
      }
  
      res.status(200).json({ user: results[0] });
    });
  };
  


module.exports = { createProfile, getProfile, updateProfile, deleteProfile,getUserDetailsByUsername };
