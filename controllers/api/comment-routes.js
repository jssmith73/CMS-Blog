const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/post_:id', withAuth, (req, res) => {
    try {
        const content = req.body;
        const user_id = req.session;
    }

})

module.exports = router;