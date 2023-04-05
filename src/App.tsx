import React, { useState } from "react";
import "./App.css";
import Inputfeild from "./components/Inputfeild";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent<EventTarget>) => {
    // When we send a function in other components containg event, write events's return type in function
    // in every components.
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id: Date.now(), todo, isDone: false}])
      setTodo('')
    }
  };

  return (
    <div className="App">
      <span className="title">Taskyfy</span>
      <Inputfeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
};

export default App;
