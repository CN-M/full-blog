const router = require('express').Router();
const {
  showUsers, showSingleUser, registerUser, loginUser, deleteUser, updateUser,
} = require('../controllers/userController');

const { guard, protect } = require('../middleware/authMiddleware');

router.route('/register')
  .post(registerUser);

router.route('/login')
  .post(loginUser);

router.route('/users')
  .get(guard, showUsers);
// .get(protect, showUsers);

router.route('/:account')
  .get(showSingleUser)
  .delete(guard, deleteUser)
  .put(guard, updateUser);

module.exports = router;
