import React, { useState } from "react";
import { usetodo } from "../Context/Todocontext";

function TodoForm() {
  const [todos, setTodos] = useState("");
  const { addtodo } = usetodo();

  const add = (e) => {
    e.preventDefault();
    if (!todos) return;
    addtodo({ todo: todos, completed: false }); // Fixed the object structure here
    setTodos("");
  }

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        value={todos}
        onChange={(e) => setTodos(e.target.value)}
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-3"
      />
      <button type="submit" className="rounded-r-lg px-3 py-1 bg-purple-600 text-white shrink-0">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
