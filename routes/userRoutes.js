const router = require('express').Router();
const { getUsers, getSingleUser, createUser, updateUser, deleteUser } = require('../controllers/userController');

// GET all users
router.route('/').get(getUsers);

// GET a single user by ID, PUT to update a user by ID, DELETE to remove a user by ID
router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser);

// POST a new user
router.route('/').post(createUser);

module.exports = router;
