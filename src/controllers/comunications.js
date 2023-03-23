const {Comunications} = require("../db");
const jsoncomunications = require ("../json/comunications.json")

const populateComunications = async () => {

    for (p of jsoncomunications) {
        card = await Comunications.create({
            title: p.title,
            img: p.img,
            subtitle: p.subtitle,
            detail: p.detail,
            imgdetail: p.imgdetail,
            date: p.date,
            status: p.status
        })
    }
}; 
const getAllComunications = async (req, res) => {
    try {
        const comunications = await Comunications.findAll();
        res.status(200).json(comunications)
    } catch (error) {
        res.status(400).json(error.message)
    }
}
const getComunicationByID = async (req, res) =>{
    const { id } = req.params;
    try {
        const comunication = await Comunications.findByPk(id)
            const comunicationId={
                id: comunication.id,
                title: comunication.title,
                subtitle: comunication.subtitle,
                img: comunication.img,
                detail: comunication.detail,
                imgdetail: comunication.imgdetail
            }
        res.status(200).send(comunicationId)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = {populateComunications, getAllComunications, getComunicationByID}