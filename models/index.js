const User = require('./user.js');
const Post = require('./post.js');
const Comment = require('./comment.js');

Post.belongsTo(User, {
    foreignKey: "userId"
});

Post.hasMany(Comment, {
    foreignKey: 'postId'
});

Comment.belongsTo(User, {
    foreignKey: 'userId'
});

Comment.hasMany(Post, {
    foreignKey: 'postId',
});

module.exports = {
    User,
    Comment,
    Post
};