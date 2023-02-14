const { Router } = require("express");
const {getAllArticles, getArticleByID} = require ("../controllers/articles")
const router = Router();

router.get("/", getAllArticles);
router.get("/:id", getArticleByID)

module.exports = router;

