const {Events} = require("../db");
const jsonevents = require ("../json/events.json")

const populateEvents = async () => {

    for (p of jsonevents) {
        card = await Events.create({
            title: p.title,
            img: p.img,
            subtitle: p.subtitle,
            detail: p.detail,
            imgdetail: p.imgdetail
        })
    }
}; 
const getAllEvents = async (req, res) => {
    try {
        const events = await Events.findAll();
        res.status(200).json(events)
    } catch (error) {
        res.status(400).json(error.message)
    }
}
const geteventByID = async (req, res) =>{
    const { id } = req.params;
    try {
        const event = await Events.findByPk(id)
            const eventId={
                id: event.id,
                title: event.title,
                subtitle: event.subtitle,
                img: event.img,
                detail: event.detail,
                imgdetail: event.imgdetail
            }
        res.status(200).send(eventId)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = {populateEvents, getAllEvents, geteventByID}