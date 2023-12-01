const User = require('./user.js');
const Post = require('./post.js');
const Comment = require('./comment.js');

User.hasMany(Post, {
    foreignKey: 'userId'
}),

User.hasMany(Comment, {
    foreignKey: 'userId'
}),

Comment.belongsTo(Post, {
    foreignKey: 'postId'
})

module.exports = {
    User,
    Comment,
    Post
};