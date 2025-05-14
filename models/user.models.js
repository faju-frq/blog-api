import { DataTypes } from "sequelize";

const userModel = (sequelize) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { isEmail: true },
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[0-9\-+()\s]*$/,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { underscored: true }
  );

  return User;
};

export default userModel;
