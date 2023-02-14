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

module.exports = {populateArticles, getAllArticles}