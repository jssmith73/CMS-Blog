const sequelize = require('sequelize');
const {Model, Datatypes} = require(sequelize);

class Comment extends Model {}

Comment.init(
    {
        title: Datatypes.STRING,
        body: Datatypes.STRING
    },
    {
        sequelize
    }
);

module.exports = Comment