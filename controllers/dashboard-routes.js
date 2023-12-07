const router = require('express').Router();
const { User, Post, Comment } = require('../models');

// GET all posts

router.get('/', async (req, res) => {

    try {
        const postData = await Post.findAll({
            where: {
                userId: req.session.userId,
            }
        })

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('user-dashboard', {
            layout: 'dashboard',
            posts,
            logged_in: true
        })

    } catch (err) {
        res.redirect('login');
    }
});


router.get('/new-post', (req, res) => {
    res.render('new-post')
});

module.exports = router;