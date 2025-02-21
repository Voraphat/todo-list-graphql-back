// resolvers/todoResolver.js
import Todo from '../models/Todo.js';

const todoResolver = {
  getTodos: async () => {
    try {
      const todos = await Todo.find();
      return todos;
    } catch (err) {
      throw err;
    }
  },
  getTodo: async ({ id }) => {
    try {
      const todo = await Todo.findById(id);
      return todo;
    } catch (err) {
      throw err;
    }
  },
  addTodo: async ({ text }) => {
    const todo = new Todo({
      text,
      status: 'todo'
    });
    try {
      await todo.save();
      return todo;
    } catch (err) {
      throw err;
    }
  },
  toggleTodo: async ({ id,status }) => {
    try {
      const todo = await Todo.findById(id);
      if (!todo) throw new Error('Todo not found');
      todo.status = status;
      await todo.save();
      return todo;
    } catch (err) {
      throw err;
    }
  },
  deleteTodo: async ({ id }) => {
    try {
      const todo = await Todo.findById(id);
      if (!todo) throw new Error('Todo not found');
      await todo.deleteOne();
      return todo;
    } catch (err) {
      throw err;
    }
  },
};

export default todoResolver;
