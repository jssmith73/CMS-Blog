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
        postId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id'
            }
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            }
        },
        dateCreated: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize
    }
);

module.exports = Comment;