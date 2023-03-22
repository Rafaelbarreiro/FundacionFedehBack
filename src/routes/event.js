const { Router } = require("express");
const {getAllEvents, getEventByID} = require ("../controllers/events")
const router = Router();

router.get("/", getAllEvents);
router.get("/:id", getEventByID)

module.exports = router;