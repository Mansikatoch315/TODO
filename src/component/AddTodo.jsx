import { useState } from "react";

function AddTodo({ addTodo }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleAdd = () => {
    if (todoName.trim() === "" || todoDate.trim() === "") return;
    addTodo(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div>
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
          />
        </div>

        <div className="col-4">
          <input
            type="date"
            value={todoDate}
            onChange={(e) => setTodoDate(e.target.value)}
          />
        </div>

        <div className="col-2">
          <button type="button" className="btn btn-success add-btn" onClick={handleAdd}>
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
