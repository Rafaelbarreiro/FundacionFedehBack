const {Events} = require("../db");
const jsonevents = require ("../json/events.json")

const populateEvents = async () => {

    for (p of jsonevents) {
        card = await Events.create({
            title: p.title,
            img: p.img,
            subtitle: p.subtitle,
            detail: p.detail,
            imgdetail: p.imgdetail,
            date: p.date
        })
    }
}; 
const getAllEvents = async (req, res) => {
    try {
        const events = await Events.findAll();
        const reverse = events.reverse()
        res.status(200).json(reverse)
    } catch (error) {
        res.status(400).json(error.message)
    }
}
const getEventByID = async (req, res) =>{
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

module.exports = {populateEvents, getAllEvents, getEventByID}