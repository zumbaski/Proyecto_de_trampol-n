const sequelize = require('../config/database');
const User = require('../models/user.model');

const seedUsers = async () => {
  try {

    const users = [
      { username: 'user1', password: 'password1' },
      { username: 'user2', password: 'password2' },
    ];

    for (const userData of users) {
      const user = await User.findOne({ where: { username: userData.username } });
      if (!user) {
        await User.create(userData);
        console.log(`User ${userData.username} created.`);
      } else {
        console.log(`User ${userData.username} already exists.`);
      }
    }
  } catch (error) {
    console.error('Error seeding users:', error);
  } finally {
    await sequelize.close(); 
  }
};

module.exports = {
    seedUsers
}