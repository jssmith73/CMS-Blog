const {Post} = require('../models');

const postData = [
    {
        title: "Post #1",
        content: "This is my first post. This post does not have a predecessor, but it has many successors.",
        date_created: '09-21-2013',
        userId: 1
    },
    {
        title: "Post #2",
        content: "This is my second post. It's a little shorter than the last post.",
        date_created: '01-11-2021',
        userId: 2
    },
    {
        title: "Post #3",
        content: "This is the third post. Impressed?",
        date_created: '10-23-2022',
        userId: 1
    }
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;