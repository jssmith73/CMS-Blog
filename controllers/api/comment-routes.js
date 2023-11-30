const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/post/:id', withAuth, async (req, res) => {
    try {
        const content = req.body;
        const user_id = req.session;
        const post_id = req.params.post_id;

        const newComment = await Comment.create({
            content, 
            user_id,
            post_id,
        })

        res.status(200).json.apply(newComment);
    } catch (err) {
        res.status(400).json(err);
    }

});

router.delete('/:id', withAuth, async (req, res) => {
    try {
    const commentData = await Comment.destroy({
        where: {
            id: req.params.id,
            user_id: req.session.user_id,
        },
    });

    if (!commentData) {
        res.status(400).json({ message: 'No associated comment found!' });
        return;
    }

    res.status(200).json(commentData);
} catch (err) {
    res.status(500).json(err);
}},)

module.exports = router;