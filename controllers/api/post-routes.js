const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    console.log('hello')
})

//Create Post

router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body, userId: req.session.userId,
        });


res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

//Update Post

router.put('/:id', withAuth, async (req, res) => {
    try {
         const postData = await Post.update(req.body, {
            where: {
                id: req.params.id, 
                user_id: req.session.user_id,
            }
         });

         if (!postData) {
            res.status(400).json({ message: 'No post found with this id! '});
            return;
         }

         res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Delete Post

router.delete('/:id', withAuth, async (req, res) => {
    try {
         const postData = await Post.destroy({
            where: {
                id: req.params.id, 
            }
         });

         if (!postData) {
            res.status(400).json({ message: 'No post found with this id! '});
            return;
         }

         res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// //GET ALL POSTS

// router.get('/', withAuth, async (req, res) => {
//     try {
//         const postData = await Post.findAll({
//             include: [User]
//         });

//         const posts = postData.map((post) => post.get({ plain: true }));
//         console.log(posts);
//         res.render('homepage', {
//             posts,
//             logged_in: req.session.logged_in,
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// //GET POST BY ID

// router.get('post/:id', async (req, res) => {
//     try {
//         const postData = await Post.findByPk(req.params.id, {
//             include: [
//                 User, {
//                     model: Comment,
//                     include: [User]
//                 }
//             ],
//         });

//         if (postData) {
//             const post = postData.get({ plain: true });

//             res.render('post', { post });
//         } else {
//             res.status(404).end();
//         }
//     } catch (err) {
//         res.status(500).json(err);
//     }
// }
// )

module.exports = router;