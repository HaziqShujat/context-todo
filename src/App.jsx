import { useEffect, useState } from 'react';
import { TodoProvider } from './Context/Todocontext';
import TodoForm from './Components/Todoform';
import TodoItem from './Components/Todoitems';

function App() {
  const [todos, setTodos] = useState([]);

  const addtodo = (todo) => {
    setTodos((oldTodos) => [...oldTodos, { id: Date.now(), ...todo }]);
  };

  const updatedtodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)));
  };

  const deletetodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggletodo = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
      )
    );
  };

  // useEffect to handle local storage (uncomment when needed)

  return (
    <div>
      <TodoProvider value={{ toggletodo, addtodo, deletetodo, todos, updatedtodo }}>
        <div className="bg-[#142031] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
              <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
              {todos.map((todo) => (
                <div key={todo.id} className="w-full">
                  <TodoItem todo={todo} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </TodoProvider>
    </div>
  );
}

export default App;
