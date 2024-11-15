const router = require('express').Router();
const userRoutes = require('./userRoutes'); // Ensure this path is correct

router.use('/users', userRoutes); // This will route requests from /api/users to userRoutes

module.exports = router;