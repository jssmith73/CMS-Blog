const sequelize = require('../config/connection');
const seedComment = require('./comment-seeds');
const seedPost = require('./post-seeds');
const seedUser = require('./user-seeds')

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUser();
  
    await seedComment();
  
    await seedPost();
  
    process.exit(0);
  };
  
  seedAll();