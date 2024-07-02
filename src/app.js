const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoute');
const { seedUsers } = require('./seeders/seedUser');

dotenv.config();

const app = express();
app.use(express.json());
seedUsers().catch(console.error);

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
