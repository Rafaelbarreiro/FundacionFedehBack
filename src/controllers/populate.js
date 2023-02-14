const { populateUser } = require('./users');
const {populateArticles} = require('./articles')
const {Users} = require ('../db');
const {Articles} = require ('../db')

const populateDB = async (req, res) => {
    try {
      const count = await Users.count();
      const count2 = await Articles.count()
      if (!count && !count2) {
        await populateUser();
        await populateArticles()
        return res.status(200).send("Database populated");
      }
      res.status(200).send("Database already populated");
    } catch (error) {
      console.log(error)
      res.status(400).send( error.message);
    }
  }
  
  module.exports = { populateDB };