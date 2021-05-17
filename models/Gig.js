const { Sequelize, Model } = require("sequelize");

class Gig extends Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: Sequelize.STRING,
        },
        technologies: {
          type: Sequelize.STRING,
        },
        description: {
          type: Sequelize.STRING,
        },
        budget: {
          type: Sequelize.STRING,
        },
        contact_email: {
          type: Sequelize.STRING,
        },
      },
      {
        tableName: "gigs",
        sequelize,
      }
    );
  }
}
// const Sequelize = require("sequelize");
// const db = require("../config/db");

// const Gig = db.define("gig", {
//   title: {
//     type: Sequelize.STRING,
//   },
//   technologies: {
//     type: Sequelize.STRING,
//   },
//   description: {
//     type: Sequelize.STRING,
//   },
//   budget: {
//     type: Sequelize.STRING,
//   },
//   contact_email: {
//     type: Sequelize.STRING,
//   },
// });

// module.exports = Gig;
