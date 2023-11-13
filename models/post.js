const sequelize = require('sequelize');
const {Model, Datatypes} = require(sequelize);

class Post extends Model {}

Post.init(
    {
        title: Datatypes.STRING,
        body: Datatypes.STRING
    },
    {
        sequelize
    }
);

module.exports = Post
