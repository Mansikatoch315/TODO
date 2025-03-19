import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItem1 from "./component/TodoItem1";
import TodoItem2 from "./component/TodoItem2";
import "./App.css";
// import TodoItem1 from "./component/TodoItem1";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <center class="todo-container">
      <AppName/>
      <AddTodo/>
      <div class="items-container">
      <TodoItem1/>
      <TodoItem2/>
      </div>
        
      
      
      </center>
  );
}

export default App;
