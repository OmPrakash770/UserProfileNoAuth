const express = require('express');
const multer = require('multer');
const { createProfile, getProfile, updateProfile, deleteProfile, getUserDetailsByUsername } = require('../controllers/profileController');
const router = express.Router();
const upload = multer();

router.post('/profiles', upload.single('image'), createProfile);
router.get('/profiles/:id', getProfile);
router.put('/profiles/:id', upload.single('image'), updateProfile);
router.delete('/profiles/:id', deleteProfile);
router.get('/user-details/:phone_no', getUserDetailsByUsername);
// router.get('/user-details/:profileData.phone', getUserDetailsByUsername);
// router.get('/user-details/:phone', (req, res) => {
//     const { phone } = req.params;  // Extract the phone number from the URL parameter
//     console.log(`Phone number from URL: ${phone}`);
//     res.send(`Register here with phone number: ${phone}`);
//   });

module.exports = router;
