const router = require('express').Router();
const userController = require('../controllers/userController');

router.route('/users').get(userController.getUsers).post(userController.createUser);
router.route('/users/:id').get(userController.getSingleUser).put(userController.updateUser).delete(userController.deleteUser);

module.exports = router;
