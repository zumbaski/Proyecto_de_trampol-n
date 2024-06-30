const validator = require('validator');

module.exports = (sequelize, dataType) => {
  const user = sequelize.define(
    'user',
    {
      firstName: {
        type: dataType.STRING,
        allowNull: false,
        trim: true,
      },
      lastName: {
        type: dataType.STRING,
        allowNull: false,
        trim: true,
      },
      middleName: {
        type: dataType.STRING,
        trim: true,
      },
      email: {
        type: dataType.STRING,
        allowNull: false,
        trim: true,
        lowercase: true,
        validate(value) {
          if (!validator.isEmail(value)) {
            throw new Error('Invalid email');
          }
        },
      },
      phoneNumber: {
        type: dataType.STRING,
        // allowNull: false,
        trim: true,
      },
      gender: {
        type: dataType.STRING,
        // allowNull: false,
        trim: true,
      },
      dOB: {
        type: dataType.DATE,
        // allowNull: false,
        trim: true,
      },
      occupation: {
        type: dataType.STRING,
        // allowNull: false,
        trim: true,
      },
    },
  );

  return user;
};
