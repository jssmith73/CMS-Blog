const sequelize = require("sequelize");
const bcrypt = require('bycrypt');
const { Model, DataTypes} = require(sequelize);

class User extends Model {

    checkPassword(loginPw) {
        return bcrypt.comparSync(loginPw, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [10]
            }
        }
    }
)

module.exports = User
