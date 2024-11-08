const Todolist = require("../models/todolistModel");
const mongoose = require("mongoose");

// Get all todolists
const getTodolists = async (req, res) => {
  const user_id = req.user._id;

  const todolists = await Todolist.find({user_id}).sort({ createAt: -1 });
  res.status(200).json(todolists);
};

// Get a todolists
const getTodolist = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such todolist" });
  }
  const todolist = await Todolist.findById(id);

  if (!todolist) {
    return res.status(404).json({ error: "No such todolist" });
  }
  res.status(200).json(todolist);
};

// create a todolists
const createTodolist = async (req, res) => {

  const { title, description } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }

  if (!description) {
    emptyFields.push("description");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill tin all the fields", emptyFields });
  }
  //   add doc to db
  try {
    const user_id = req.user._id;
    console.log(user_id, req.user._id, title,req.user, "user_id");
    const todolist = await Todolist.create({ title, description, user_id });
    res.status(200).json(todolist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a todolists
const deleteTodolist = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such todolist" });
  }
  const todolist = await Todolist.findOneAndDelete({ _id: id });

  if (!todolist) {
    return res.status(404).json({ error: "No such todolist" });
  }
  res.status(200).json(todolist);
};

// Update a todolists
const updateTodolist = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such todolist" });
  }
  const todolist = await Todolist.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );

  if (!todolist) {
    return res.status(404).json({ error: "No such todolist" });
  }
  res.status(200).json(todolist);
};

module.exports = {
  createTodolist,
  getTodolists,
  getTodolist,
  updateTodolist,
  deleteTodolist,
};
