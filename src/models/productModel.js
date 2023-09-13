module.exports = function (sequelize, DataTypes) {
  return sequelize.define("product", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, // Use UUIDv4 for the ID
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2), // Adjust precision and scale as needed
      allowNull: false,
    },
    stockQuantity: {
      type: DataTypes.INTEGER,
    },
    imageUrl: {
      type: DataTypes.STRING, // Assuming a single image URL
      allowNull: true,
    },
    is_available: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    categoryId: {
      type: DataTypes.INTEGER, // Foreign key to link with Category model
      allowNull: false,
    },
  });
};
