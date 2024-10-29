const { db, DataTypes, Model } = require("../db");

class Coffee extends Model {}
Coffee.init(
  {
    name: DataTypes.STRING,
    roaster: DataTypes.STRING,
    date: DataTypes.String,
    location: DataTypes.STRING,
    origin: DataTypes.STRING,
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        min: 1,
        max: 5,
        isInt: true,
      },
    },
    review: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "coffee",
  }
);

module.exports = {
  Coffee,
};
