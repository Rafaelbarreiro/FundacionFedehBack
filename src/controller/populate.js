const { populateUser } = require("./users");

const populateDB = async (req, res) => {
    try {
      const count = await Product.count();
      if (!count) {
        await populateUser();
        return res.status(200).send("Database populated");
      }
      res.status(200).send("Database already populated");
    } catch (error) {
      res.status(400).send("Database error: ", error);
    }
  }
  
  module.exports = { populateDB };