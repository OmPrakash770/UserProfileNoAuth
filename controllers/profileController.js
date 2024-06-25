// const db = require('../config/db');



// // const createProfile = (req, res, next) => {
// //   const { user_id, name, preferred_role, project, education, address, phone_no, linkedin_profile } = req.body;
// //   const image = req.file ? req.file.buffer : null;

// //   if(!req.body.phone_no){
 
// //     return res.status(404).json({ msg: 'Phone No cannot be Empty;' });


// //   }
// //    console.log("Request Body:", req.body);
// //   const query = `
// //       INSERT INTO user_profiles (user_id, name, preferred_role, project, education, address, phone_no, linkedin_profile, image)
// //       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
// //   `;
// //   const values = [user_id, name, preferred_role, project, education, address, phone_no, linkedin_profile, image];

// //   db.query(query, values, (err, result) => {
// //       if (err) {
// //           return next(err);
// //       }
// //       res.status(201).json({ msg: 'Profile created successfully', id: result.insertId });
// //   });
// // };
// const createProfile = (req, res, next) => {
//   const { name, preferred_role, project, education, address, phone_no, linkedin_profile } = req.body;
//   const image = req.file ? req.file.buffer : null;

//   if (!phone_no) {
//       return res.status(400).json({ msg: 'Phone No cannot be empty' });
//   }

//   console.log("Request Body:", req.body);

//   const query = `
//       INSERT INTO user_profiles (name, preferred_role, project, education, address, phone_no, linkedin_profile, image)
//       VALUES (?, ?, ?, ?, ?, ?, ?, ?)
//   `;
//   const values = [name, preferred_role, project, education, address, phone_no, linkedin_profile, image];

//   db.query(query, values, (err, result) => {
//       if (err) {
//           return next(err);
//       }

//       const logQuery = `
//           INSERT INTO profile_logs (profile_id, action)
//           VALUES (?, 'Created')
//       `;
//       db.query(logQuery, [result.insertId], (logErr, logResult) => {
//           if (logErr) {
//               return next(logErr);
//           }
//           res.status(201).json({ msg: 'Profile created successfully', id: result.insertId });
//       });
//   });
// };




// // const getProfile = (req, res, next) => {
// //   const { id } = req.params;
// //   console.log("Request Body:", req.params);
// //   const query = 'SELECT * FROM user_profiles WHERE id = ?';
// //   db.query(query, [id], (err, results) => {
// //       if (err) {
// //           return next(err);
// //       }

// //       if (results.length === 0) {
// //           return res.status(404).json({ msg: 'Profile not found' });
// //       }

// //       const profile = results[0];
// //       if (profile.image) {
// //           profile.image = profile.image.toString('base64'); // Convert image to Base64 string
// //       }

// //       res.status(200).json(profile);
// //   });
// // };
// const getProfile = (req, res, next) => {
//   const { id } = req.params;
//   console.log("Request Body:", req.params);

//   const query = 'SELECT * FROM user_profiles WHERE id = ?';
//   db.query(query, [id], (err, results) => {
//       if (err) {
//           return next(err);
//       }

//       if (results.length === 0) {
//           return res.status(404).json({ msg: 'Profile not found' });
//       }

//       const profile = results[0];
//       if (profile.image) {
//           profile.image = profile.image.toString('base64'); // Convert image to Base64 string
//       }

//       res.status(200).json(profile);
//   });
// };



// // const updateProfile = (req, res, next) => {
// //   const { id } = req.params;
// //   const { name, preferred_role, project, education, address, phone_no, linkedin_profile } = req.body;
// //   const image = req.file ? req.file.buffer : null;

// //   console.log("Request Body:", req.params,req.body);

// // //   const checkQuery = 'SELECT * FROM user_profiles WHERE id = ?';
// //   const checkQuery = 'SELECT * FROM user_profiles WHERE  phone_no = ?';
// //   db.query(checkQuery, [phone_no], (err, results) => 
// //     // db.query(checkQuery, [id], (err, results) => 
// //     {
// //       if (err) {
// //           return next(err);
// //       }

// //       if (results.length === 0) {
// //           return res.status(404).json({ msg: 'Profile not found' });
// //       }

// //       const updateQuery = `
// //           UPDATE user_profiles
// //           SET name = ?, preferred_role = ?, project = ?, education = ?, address = ?, phone_no = ?, linkedin_profile = ?, image = ?
// //           WHERE id = ?
// //       `;
// //       const values = [name, preferred_role, project, education, address, phone_no, linkedin_profile, image, id];

// //       db.query(updateQuery, values, (err, result) => {
// //           if (err) {
// //               return next(err);
// //           }
// //           res.status(200).json({ msg: 'Profile updated successfully' });
// //       });
// //   });
// // };
// const updateProfile = (req, res, next) => {
//   const { id } = req.params;
//   const { name, preferred_role, project, education, address, phone_no, linkedin_profile } = req.body;
//   const image = req.file ? req.file.buffer : null;

//   console.log("Request Body:", req.params, req.body);

//   const checkQuery = 'SELECT * FROM user_profiles WHERE id = ?';
//   db.query(checkQuery, [id], (err, results) => {
//       if (err) {
//           return next(err);
//       }

//       if (results.length === 0) {
//           return res.status(404).json({ msg: 'Profile not found' });
//       }

//       const updateQuery = `
//           UPDATE user_profiles
//           SET name = ?, preferred_role = ?, project = ?, education = ?, address = ?, phone_no = ?, linkedin_profile = ?, image = ?
//           WHERE id = ?
//       `;
//       const values = [name, preferred_role, project, education, address, phone_no, linkedin_profile, image, id];

//       db.query(updateQuery, values, (err, result) => {
//           if (err) {
//               return next(err);
//           }

//           const logQuery = `
//               INSERT INTO profile_logs (profile_id, action)
//               VALUES (?, 'Updated')
//           `;
//           db.query(logQuery, [id], (logErr, logResult) => {
//               if (logErr) {
//                   return next(logErr);
//               }
//               res.status(200).json({ msg: 'Profile updated successfully' });
//           });
//       });
//   });
// };



// // const deleteProfile = (req, res, next) => {
// //   const { id } = req.params;

// //   console.log("Request Body:", req.params);
// //   const checkQuery = 'SELECT * FROM user_profiles WHERE id = ?';
// //   db.query(checkQuery, [id], (err, results) => {
// //       if (err) {
// //           return next(err);
// //       }

// //       if (results.length === 0) {
// //           return res.status(404).json({ msg: 'Profile not found' });
// //       }

// //       const deleteQuery = 'DELETE FROM user_profiles WHERE id = ?';
// //       db.query(deleteQuery, [id], (err, result) => {
// //           if (err) {
// //               return next(err);
// //           }
// //           res.status(200).json({ msg: 'Profile deleted successfully' });
// //       });
// //   });
// // };
// const deleteProfile = (req, res, next) => {
//   const { id } = req.params;

//   console.log("Request Body:", req.params);
//   const checkQuery = 'SELECT * FROM user_profiles WHERE id = ?';
//   db.query(checkQuery, [id], (err, results) => {
//       if (err) {
//           return next(err);
//       }

//       if (results.length === 0) {
//           return res.status(404).json({ msg: 'Profile not found' });
//       }

//       const deleteQuery = 'DELETE FROM user_profiles WHERE id = ?';
//       db.query(deleteQuery, [id], (err, result) => {
//           if (err) {
//               return next(err);
//           }
//           res.status(200).json({ msg: 'Profile deleted successfully' });
//       });
//   });
// };


// const deleteUser = (req, res, next) => {
//   const { id } = req.params;
//   console.log("Request Body:", req.params);

//   const checkQuery = 'SELECT * FROM users WHERE id = ?';
//   db.query(checkQuery, [id], (err, results) => {
//       if (err) {
//           return next(err);
//       }

//       if (results.length === 0) {
//           return res.status(404).json({ msg: 'User not found' });
//       }

//       const deleteQuery = 'DELETE FROM users WHERE id = ?';
//       db.query(deleteQuery, [id], (err, result) => {
//           if (err) {
//               return next(err);
//           }
//           res.status(200).json({ msg: 'User and all related profiles deleted successfully' });
//       });
//   });
// };






// // const getUserDetailsByUsername = (req, res, next) => {
// //     // const username = req.params.username;
// // //   
// //     const phone_no = req.params.phone_no;
// //     // const phone_no = req.params["profileData.phone"];
    
// //     console.log("Request Body:", req.params);
// //     // const query = 'SELECT * FROM users WHERE username = ?';

// //     const query = 'select * from user_profiles where phone_no = ?';
// //     db.query(query, [phone_no], (err, results) => {
// //       if (err) {
// //         return next(err);
// //       }
  
// //       if (results.length === 0) {
// //         console.log("Request:",req.body);
// //         return res.status(404).json({ msg: 'User not found' });
// //       }
  
// //       res.status(200).json({ user: results[0] });
// //     });
// //   };
  
// const getUserDetailsByUsername = (req, res, next) => {
//   const phone_no = req.params.phone_no;
//   console.log("Request Body:", req.params);

//   const query = 'SELECT * FROM user_profiles WHERE phone_no = ?';
//   db.query(query, [phone_no], (err, results) => {
//       if (err) {
//           return next(err);
//       }

//       if (results.length === 0) {
//           console.log("Request:", req.body);
//           return res.status(404).json({ msg: 'User not found' });
//       }

//       res.status(200).json({ user: results[0] });
//   });
// };



// module.exports = { createProfile, getProfile, updateProfile, deleteProfile,getUserDetailsByUsername ,deleteUser};

// -------------------------------------------------------------------------------------------------->Updated

const db = require('../config/db'); // Ensure your db configuration file is correctly set up and exported

const createProfile = (req, res, next) => {
    const { name, preferred_role, project, education, address, phone_no, linkedin_profile } = req.body;
    const image = req.file ? req.file.buffer : null;
    const { username } = req.params;

    if (!username) {
        return res.status(400).json({ msg: 'Username cannot be empty' });
    }

    if (!phone_no) {
        return res.status(400).json({ msg: 'Phone No cannot be empty' });
    }

    console.log("Request Body:", req.body);

    // Step 1: Check if user exists based on username
    const userQuery = 'SELECT id FROM users WHERE username = ?';
    db.query(userQuery, [username], (err, userResults) => {
        if (err) {
            return next(err);
        }

        let user_id;

        if (userResults.length > 0) {
            // User already exists, fetch user_id
            user_id = userResults[0].id;
            checkForExistingProfile(user_id);
        } else {
            // User doesn't exist, create new user and fetch user_id
            const createUserQuery = 'INSERT INTO users (username) VALUES (?)';
            db.query(createUserQuery, [username], (createErr, createUserResult) => {
                if (createErr) {
                    return next(createErr);
                }
                user_id = createUserResult.insertId;
                createProfileWithUserId(user_id);
            });
        }

        function checkForExistingProfile(user_id) {
            const profileQuery = 'SELECT id FROM user_profiles WHERE user_id = ?';
            db.query(profileQuery, [user_id], (profileErr, profileResults) => {
                if (profileErr) {
                    return next(profileErr);
                }

                if (profileResults.length > 0) {
                    return res.status(400).json({ msg: 'User already has a profile' });
                }

                createProfileWithUserId(user_id);
            });
        }

        function createProfileWithUserId(user_id) {
            // Step 2: Insert into user_profiles with user_id
            const insertProfileQuery = `
                INSERT INTO user_profiles (user_id, name, preferred_role, project, education, address, phone_no, linkedin_profile, image)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;
            const insertProfileValues = [user_id, name, preferred_role, project, education, address, phone_no, linkedin_profile, image];

            db.query(insertProfileQuery, insertProfileValues, (insertErr, insertResult) => {
                if (insertErr) {
                    return next(insertErr);
                }

                // Log the creation of the profile
                const logQuery = `
                    INSERT INTO profile_logs (profile_id, action)
                    VALUES (?, 'Created')
                `;
                db.query(logQuery, [insertResult.insertId], (logErr, logResult) => {
                    if (logErr) {
                        return next(logErr);
                    }
                    res.status(201).json({ msg: 'Profile created successfully', id: insertResult.insertId });
                });
            });
        }
    });
};




// const getProfile = (req, res, next) => {
// //   const { id } = req.params;
//     const { username } = req.params;
//   console.log("Request Body:", req.params);

//   const query = 'SELECT * FROM user_profiles WHERE username = ?';
//   db.query(query, [username], (err, results) => {
//       if (err) {
//           return next(err);
//       }

//       if (results.length === 0) {
//           return res.status(404).json({ msg: 'Profile not found' });
//       }

//       const profile = results[0];
//       if (profile.image) {
//           profile.image = profile.image.toString('base64'); // Convert image to Base64 string
//       }

//       res.status(200).json(profile);
//   });
// };



const updateProfile = (req, res, next) => {
    const { username } = req.params;
    const { name, preferred_role, project, education, address, phone_no, linkedin_profile } = req.body;
    const image = req.file ? req.file.buffer : null;

    console.log("Request Params:", req.params);
    console.log("Request Body:", req.body);

    const userQuery = 'SELECT id FROM users WHERE username = ?';
    db.query(userQuery, [username], (err, userResults) => {
        if (err) {
            return next(err);
        }

        if (userResults.length === 0) {
            return res.status(404).json({ msg: 'User not found' });
        }

        const user_id = userResults[0].id;
        const updateQuery = `
            UPDATE user_profiles
            SET name = ?, preferred_role = ?, project = ?, education = ?, address = ?, phone_no = ?, linkedin_profile = ?, image = ?
            WHERE user_id = ?
        `;
        const values = [name, preferred_role, project, education, address, phone_no, linkedin_profile, image, user_id];

        db.query(updateQuery, values, (err, result) => {
            if (err) {
                return next(err);
            }
            res.status(200).json({ msg: 'Profile updated successfully' });
        });
    });
};




const deleteProfile = (req, res, next) => {
    const { username } = req.params;

    console.log("Request Params:", req.params);

    const userQuery = 'SELECT id FROM users WHERE username = ?';
    db.query(userQuery, [username], (err, userResults) => {
        if (err) {
            return next(err);
        }

        if (userResults.length === 0) {
            return res.status(404).json({ msg: 'User not found' });
        }

        const user_id = userResults[0].id;
        const checkQuery = 'SELECT * FROM user_profiles WHERE user_id = ?';
        db.query(checkQuery, [user_id], (err, profileResults) => {
            if (err) {
                return next(err);
            }

            if (profileResults.length === 0) {
                return res.status(404).json({ msg: 'Profile not found' });
            }

            const deleteQuery = 'DELETE FROM user_profiles WHERE user_id = ?';
            db.query(deleteQuery, [user_id], (err, result) => {
                if (err) {
                    return next(err);
                }
                res.status(200).json({ msg: 'Profile deleted successfully' });
            });
        });
    });
};



const getUserProfileByPhoneno = (req, res, next) => {
  const phone_no = req.params.phone_no;
  console.log("Request Body:", req.params);

  const query = 'SELECT * FROM user_profiles WHERE phone_no = ?';
  db.query(query, [phone_no], (err, results) => {
      if (err) {
          return next(err);
      }

      if (results.length === 0) {
          console.log("Request:", req.body);
          return res.status(404).json({ msg: 'User not found' });
      }

      res.status(200).json({ user: results[0] });
  });
};

// const getUserDetailsByUsername = (req, res, next) => {
//     const { username } = req.params;

//     console.log("Request Params:", req.params);

//     const query = 'SELECT * FROM users WHERE username = ?';
//     db.query(query, [username], (err, results) => {
//         if (err) {
//             return next(err);
//         }

//         if (results.length === 0) {
//             return res.status(404).json({ msg: 'User not found' });
//         }

//         res.status(200).json({ user: results[0] });
//     });
// };



// const deleteUser = (req, res, next) => {
//   const { id } = req.params;
//   console.log("Request Body:", req.params);

//   const checkQuery = 'SELECT * FROM users WHERE id = ?';
//   db.query(checkQuery, [id], (err, results) => {
//       if (err) {
//           return next(err);
//       }

//       if (results.length === 0) {
//           return res.status(404).json({ msg: 'User not found' });
//       }

//       const deleteQuery = 'DELETE FROM users WHERE id = ?';
//       db.query(deleteQuery, [id], (err, result) => {
//           if (err) {
//               return next(err);
//           }
//           res.status(200).json({ msg: 'User deleted successfully' });
//       });
//   });
// };


const deleteUser = (req, res, next) => {
    const { username } = req.params;

    console.log("Request Params:", req.params);

    const userQuery = 'SELECT id FROM users WHERE username = ?';
    db.query(userQuery, [username], (err, userResults) => {
        if (err) {
            return next(err);
        }

        if (userResults.length === 0) {
            return res.status(404).json({ msg: 'User not found' });
        }

        const user_id = userResults[0].id;

        const deleteProfileLogsQuery = 'DELETE FROM profile_logs WHERE profile_id IN (SELECT id FROM user_profiles WHERE user_id = ?)';
        const deleteProfilesQuery = 'DELETE FROM user_profiles WHERE user_id = ?';
        const deleteUserQuery = 'DELETE FROM users WHERE id = ?';

        db.query(deleteProfileLogsQuery, [user_id], (err, result) => {
            if (err) {
                return next(err);
            }

            db.query(deleteProfilesQuery, [user_id], (err, result) => {
                if (err) {
                    return next(err);
                }

                db.query(deleteUserQuery, [user_id], (err, result) => {
                    if (err) {
                        return next(err);
                    }
                    res.status(200).json({ msg: 'User and related data deleted successfully' });
                });
            });
        });
    });
};




const getUserProfileByUsername = (req, res, next) => {
    const { username } = req.params;
    console.log("Request Params:", req.params);

    const userQuery = 'SELECT id FROM users WHERE username = ?';

    // First, find the user by username
    db.query(userQuery, [username], (err, userResults) => {
        if (err) {
            console.error('Error fetching user:', err);
            return next(err);
        }

        if (userResults.length === 0) {
            console.log('User not found with username:', username);
            return res.status(404).json({ msg: 'User profile not found' });
        }

        const user_id = userResults[0].id;

        // Now, find the profile by user_id
        const profileQuery = `
            SELECT up.id, up.user_id,up.name, up.preferred_role, up.project, up.education, up.address, up.phone_no, up.linkedin_profile, up.image
            FROM user_profiles up
            WHERE up.user_id = ?
        `;

        db.query(profileQuery, [user_id], (err, profileResults) => {
            if (err) {
                console.error('Error fetching profile:', err);
                return next(err);
            }

            if (profileResults.length === 0) {
                console.log('Profile not found for user_id:', user_id);
                return res.status(404).json({ msg: 'User profile not found' });
            }

            const profile = profileResults[0];
            if (profile.image) {
                profile.image = profile.image.toString('base64'); // Convert image to Base64 string
            }

            console.log('Profile fetched successfully:', profile);
            res.status(200).json(profile);
        });
    });
};







module.exports = { createProfile, updateProfile, deleteProfile,getUserProfileByPhoneno ,deleteUser,getUserProfileByUsername};