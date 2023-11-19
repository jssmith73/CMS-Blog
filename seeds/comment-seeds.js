const {Comment} = require('../models');

const commentData = [
    {
        body: "Comment 1"
    },
    {
        body: "Comment 2"
    },
    {
        body: "Comment 3"
    },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;