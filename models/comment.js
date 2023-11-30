const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const { noConflict } = require('handlebars');

class Comment extends Model {}

Comment.init(
    {
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            references: {
                model: 'Post',
                key: 'id'
            }
        }
    },
    {
        sequelize
    }
);

module.exports = Comment;