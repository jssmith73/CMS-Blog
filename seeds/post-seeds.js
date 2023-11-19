const {Post} = require('../models');

const postData = [
    {
        title: "Post #1",
        body: "This is my first post. This post does not have a predecessor, but it has many successors.",
        userId: 1
    },
    {
        title: "Post #2",
        body: "This is my second post. It's a little shorter than the last post.",
        userId: 1
    },
    {
        title: "Post #3",
        body: "This is the third post. Impressed?",
        userId: 1
    }
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;