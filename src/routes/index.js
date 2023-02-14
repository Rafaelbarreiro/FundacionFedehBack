const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const users = require("./users.js");
const populate = require("./populate.js");
const email = require("./email.js")
const article = require("./article.js")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/users", users);
router.use("/populateDB", populate);
router.use("/email", email);
router.use("/articles", article)

module.exports = router;

