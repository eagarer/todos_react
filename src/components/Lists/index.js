import { useState } from "react";

function Form({ todos, setTodos, handleTaskClick }) {
  const filters = ["All", "Active", "Completed"];

  const [selectedFilter, setSelectedFilter] = useState("All");

  const filtered = todos.filter((todo) => {
    if(selectedFilter === 'All'){
        return true;
    }else if(selectedFilter === 'Completed'){
        return todo.done === true
    }else{
        return todo.done === false;
    }
})

  const handleFilterClick = (filter) => {
    setSelectedFilter("");
    setSelectedFilter(filter);
  };

 

  return (
    <div>
      <div className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <ul className="todo-list">
          {filtered.map((todo, i) => (
            <li className={todo.done ? "completed" : "destroyed"} key={i}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  defaultChecked={todo.done}
                  onChange={() => handleTaskClick(i)}
                />
                {console.log(todo.id)}
                <label>{todo.text}</label>
                <button className="destroy"></button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer">
        <span className="todo-count">
          <strong>{todos.length}</strong>
          items left
        </span>

        <ul className="filters">
          {filters.map((filter, i) => (
            <li key={i}>
              <a href="#/" className={filter === selectedFilter ? "selected":""} onClick={()=> handleFilterClick(filter)}>
                {filter}
              </a>
            </li>
          ))}
        </ul>

        <button className="clear-completed">Clear completed</button>

      </div>
    </div>
  );
}

export default Form;
