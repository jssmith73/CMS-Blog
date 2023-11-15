const router = require('express').Router();

const postRoutes = require('./home-routes');
const commentRoutes = require('../routes/comment-routes');
const userRoutes = require('../routes/user-routes');

router.use('/post', postRoutes);
router.use('/comment', commentRoutes);
router.use('/user', userRoutes);

module.exports = router;
