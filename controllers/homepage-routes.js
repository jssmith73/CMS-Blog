const router = require('express').Router();
const { User, Post, Comment } = require('../models');

//GET ALL POSTS for Homepage

router.get('/', async (req, res) => {

    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Comment,
                    include: {
                        model: User,
                        attributes: ['username'],
                    },
                },
            ]
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('all-posts', {
            posts,
            logged_in: req.session.logged_in
        })

    } catch (err) {
        res.status(500).json(err)
    }
});

// GET one post

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                User,
                {
                    model: Comment,
                    include: [User]
                },
            ],
        });

        if (postData) {

            const post = postData.get({ plain: true });
            console.log(post);
            res.render('single-post', { post, logged_in: req.session.logged_in });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


//Login Route

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return
    }
    res.render('login')
});


//Signup Route

router.get('signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return
    }
    res.render('signup')
});

module.exports = router;