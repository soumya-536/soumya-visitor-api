const express = require('express')
const router = express.Router();

const visitRoutes = require('../Controllers/Visitor');

router.get('/visits', visitRoutes.getAllVisits);

module.exports = router;