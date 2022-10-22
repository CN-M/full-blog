const router = require('express').Router();
const {
  showUsers, registerUser, loginUser, deleteUser,
} = require('../controllers/userController');

const { guard } = require('../middleware/authMiddleware');

router.route('/register')
  .post(registerUser);

router.route('/login')
  .post(loginUser);

router.route('/users')
  .get(guard, showUsers);

router.route('/users/:userid')
  .delete(guard, deleteUser);

module.exports = router;
