const express = require('express');
const multer = require('multer');
const { createProfile, getProfile, updateProfile, deleteProfile, getUserProfileByPhoneno, deleteUser, getUserProfileByUsername } = require('../controllers/profileController');
const router = express.Router();
const upload = multer();

router.post('/userprofile/:username', upload.single('image'), createProfile);
// router.get('/userprofile/:id', getProfile);
router.put('/userprofile/:username', upload.single('image'), updateProfile);
router.delete('/userprofile/:username', deleteProfile);
router.get('/userprofileByphone_no/:phone_no', getUserProfileByPhoneno);
router.delete('/user/:username',deleteUser);
router.get('/userprofileByusername/:username', getUserProfileByUsername);

module.exports = router;
