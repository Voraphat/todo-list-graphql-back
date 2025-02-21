// models/Todo.js
import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  text: { type: String, required: true },
  status: { type: String},
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
