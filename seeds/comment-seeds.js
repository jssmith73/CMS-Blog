const {Comment} = require('../models');

const commentData = [
    {
        content: "Comment 1"
    },
    {
        content: "Comment 2"
    },
    {
        content: "Comment 3"
    },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;