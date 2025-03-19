import { useState } from "react";

function TodoList({ todos, deleteTodo, editTodo, toggleStatus }) {
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editDate, setEditDate] = useState("");

  const handleEdit = (id, name, date) => {
    setEditId(id);
    setEditName(name);
    setEditDate(date);
  };

  const handleSave = (id) => {
    editTodo(id, editName, editDate);
    setEditId(null);
  };

  return (
    <div>
      {todos.map((todo) => (
        <div className="row kg-row" key={todo.id}>
          <div className="col-6">
            {editId === todo.id ? (
              <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} />
            ) : (
              todo.name
            )}
          </div>

          <div className="col-3">
            {editId === todo.id ? (
              <input type="date" value={editDate} onChange={(e) => setEditDate(e.target.value)} />
            ) : (
              todo.date
            )}
          </div>

          <div className="col-2">
            <button
              type="button"
              className={`btn btn-${todo.status === "Pending" ? "warning" : "primary"}`}
              onClick={() => toggleStatus(todo.id)}
            >
              {todo.status}
            </button>
          </div>

          <div className="col-1">
            {editId === todo.id ? (
              <button type="button" className="btn btn-success" onClick={() => handleSave(todo.id)}>
                Save
              </button>
            ) : (
              <button type="button" className="btn btn-info" onClick={() => handleEdit(todo.id, todo.name, todo.date)}>
                Edit
              </button>
            )}
          </div>

          <div className="col-1">
            <button type="button" className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
