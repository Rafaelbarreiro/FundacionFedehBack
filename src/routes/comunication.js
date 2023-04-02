const { Router } = require("express");
const {getAllComunications, getComunicationByID} = require ("../controllers/comunications")
const router = Router();

router.get("/", getAllComunications);
router.get("/:id", getComunicationByID)

module.exports = router;