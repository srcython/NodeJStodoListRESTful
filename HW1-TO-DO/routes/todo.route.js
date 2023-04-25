const router = require("express").Router();
const todoController = require("../controllers/todo.controller.js")

router.post("/", todoController.create)

router.get("/", todoController.findAll)

router.get("/:id", todoController.findOne)

router.put("/:id", todoController.update)

router.delete("/:id", todoController.remove)


module.exports = router;