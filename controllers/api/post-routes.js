const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//GET ALL POSTS

router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [User]
        });

        const posts = postData.map((post) => post.get({ plain: true }));
        console.log(posts);
        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET POST BY ID

router.get('post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                User, {
                    model: Comment,
                    include: [User]
                }
            ],
        });

        if (postData) {
            const post = postData.get({ plain: true });

            res.render('single-post', { post });
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
}
)

module.exports = router;