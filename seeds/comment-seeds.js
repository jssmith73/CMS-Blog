const {Comment} = require('../models');

const commentData = [
    {
        content: "Comment 1",
        userId: 1,
        postId: 2,
    },
    {
        content: "Comment 2",
        userId: 2,
        postId: 1,
    },
    {
        content: "Comment 3",
        userId: 2,
        postId: 1,
    },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;