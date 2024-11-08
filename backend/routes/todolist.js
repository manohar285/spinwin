const express = require("express");

const {
  createTodolist,
  getTodolist,
  getTodolists,
  deleteTodolist,
  updateTodolist,
} = require("../controllers/todolistController");

const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

router.use(requireAuth);

// Get all todolists
router.get("/", getTodolists);

// Get a todolist
router.get("/:id", getTodolist);

// Post a todolist
router.post("/", createTodolist);

// Delete a todolist
router.delete("/:id", deleteTodolist);

// Update a todolist
router.patch("/:id", updateTodolist);

module.exports = router;
