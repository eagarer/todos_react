import React from "react";

function index() {
  return (
    <div>
      <div className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
        />
      </div>
    </div>
  );
}

export default index;
