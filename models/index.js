const User = require('./user.js');
const Post = require('./post.js');
const Comment = require('./comment.js');

Post.belongsTo(User, {
    foreignKey: "userId",
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

module.exports = {
    User,
    Comment,
    Post
};