const {User} = require('../models');

const userData = [
    {
        username: "jman1359",
        password: "password123"
    },
    {
        username: "johndoe23",
        password: "str0ngpassw0rd"
    }
]

const seedPost = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedPost;