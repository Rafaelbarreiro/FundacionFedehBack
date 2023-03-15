const {Articles} = require("../db");
const jsonarticles = require ("../json/articles.json")

const populateArticles = async () => {

    for (p of jsonarticles) {
        card = await Articles.create({
            title: p.title,
            img: p.img,
            subtitle: p.subtitle,
            detail: p.detail,
            imgdetail: p.imgdetail
        })
    }
}; 
const getAllArticles = async (req, res) => {
    try {
        const articles = await Articles.findAll();
        res.status(200).json(articles)
    } catch (error) {
        res.status(400).json(error.message)
    }
}
const getArticleByID = async (req, res) =>{
    const { id } = req.params;
    try {
        const article = await Articles.findByPk(id)
            const articleId={
                id: article.id,
                title: article.title,
                subtitle: article.subtitle,
                img: article.img,
                detail: article.detail,
                imgdetail: article.imgdetail
            }
        res.status(200).send(articleId)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = {populateArticles, getAllArticles, getArticleByID}