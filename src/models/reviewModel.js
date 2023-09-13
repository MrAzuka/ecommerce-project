module.exports = function (sequelize, DataTypes) {
  return sequelize.define("review", {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    productID: {
      type: DataTypes.UUID, // Foreign Key to link with with Product Model
    },
    userID: {
      type: DataTypes.UUID, // Foreign Key to link with with User Model
    },
    review_text: {
      type: DataTypes.TEXT,
    },
    rating: {
      type: DataTypes.INTEGER,
      values: [1, 2, 3, 4, 5],
    },
  });
};
