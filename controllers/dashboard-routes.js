const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// GET all posts

router.get('/', async (req, res) => {

    try {
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id,
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

// GET one post

// router.get('/post/:id', async (req, res) => {
//     try {
//         const postData = await Post.findByPk(req.params.id, {
//             include: [
//                 {
//                     model: Comment,
//                     attributes: ['content']
//                 },
//             ],
//         });

//         const posts = postData.get({ plain: true });
//         res.render('homepage', { posts, logged_in: req.session.logged_in });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

module.exports = router;