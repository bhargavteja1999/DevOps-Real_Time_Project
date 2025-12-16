const express = require('express');
const { registerUser, loginUser, getUserProfile, getUsers } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile);
router.get('/users', protect, getUsers); // Admin/Test route

module.exports = router;
