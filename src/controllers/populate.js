const { populateUser } = require("./users");
const {Users} = require ('../db')

const populateDB = async (req, res) => {
    try {
      const count = await Users.count();
      if (!count) {
        await populateUser();
        return res.status(200).send("Database populated");
      }
      res.status(200).send("Database already populated");
    } catch (error) {
      res.status(400).send( error.message);
    }
  }
  
  module.exports = { populateDB };