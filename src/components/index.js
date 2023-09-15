import { useState } from "react";
import List from "./Lists";
import Form from "./Form";

function Todos() {
  const [todos, setTodos] = useState([
    { id :0, done: true, text: "yemek yap" },
    { id :1, done: true, text: "Temizlik" },
    { id :2, done: false, text: "kod yaz" },
    { id :3, done: false, text: "egzersiz yap" },
  ]);

  const handleTaskClick = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].done = !updatedTodos[index].done;
    setTodos(updatedTodos);
  };

  return (
    <div className="todoapp">
      <Form />
      <List
        todos={todos}
        setTodos={setTodos}
        handleTaskClick={handleTaskClick}
      />
    </div>
  );
}

export default Todos;
