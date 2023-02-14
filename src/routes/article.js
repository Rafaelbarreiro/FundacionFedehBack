const { Router } = require("express");
const {getAllArticles} = require ("../controllers/articles")
const router = Router();

router.get("/", getAllArticles);

module.exports = router;

