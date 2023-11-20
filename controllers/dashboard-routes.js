const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth')

//Home Route

router.get('/', async (req, res) => {

    try {

    const postData = await Post.findAll({
        where: {
            user_id: req.session.user_id,
        },
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('dashboard-handlebars');

} catch (err) {
res.redirect('/login')
}},)



module.exports = router;