const express = require('express')
const router = express.Router();

const visitRoutes = require('../Controllers/Visitor');

router.get('/getVisitors', visitRoutes.getVisitors);
router.get('/getVisits', visitRoutes.getVisits);
router.get('/visits', visitRoutes.getAllVisits);

module.exports = router;
