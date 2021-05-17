const { Model, DataTypes } = require("sequelize");
const db = require("../util/database");

class Product extends Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: DataTypes.STRING,
        },
        price: {
          type: DataTypes.DOUBLE,
        },
        description: {
          type: DataTypes.STRING,
        },
        budget: {
          type: DataTypes.STRING,
        },
        contact_email: {
          type: DataTypes.STRING,
        },
      },
      {
        tableName: "products",
        modelName: "product",
        sequelize,
      }
    );
  }
}
