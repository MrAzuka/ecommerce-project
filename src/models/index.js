const dbConfig = require("../config/database");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./userModel")(sequelize, Sequelize);
db.Category = require("./categoryModel")(sequelize, Sequelize);
db.Product = require("./productModel")(sequelize, Sequelize);
db.Review = require("./reviewModel")(sequelize, Sequelize);

// MODEL RELATIONSHIPS
Product.belongsTo(User, { foreignKey: "vendorId" });
Product.belongsTo(Category, { foreignKey: "categoryId" });
Review.belongsTo(User, { foreignKey: "userID" });
Review.belongsTo(Product, { foreignKey: "productID" });
module.exports = db;
