const express = require('express');
const uploadDocument = require('../controllers/documentcontroller');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/upload', uploadDocument);




module.exports = router;
