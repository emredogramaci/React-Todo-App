import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import TodoList from './components/TodoList';
import "./index.css";

function App() {

  const [InputText, setInputText] = useState(""); //Hold input
  const [todos, setTodos] = useState([]); //Hold todo list
  const [status, setStatus] = useState(""); //Hold Todo status
  const [filteredTodos, setFilteredTodos] = useState([]); //Hold filtered todo

  useEffect(() =>{
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true)); //filter completed true
          break;
        case "active":
          setFilteredTodos(todos.filter((todo) => todo.completed === false)); //filter completed false
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    filterHandler();
  }, [todos,status]);

  return (
    <div className="App">
      <section className="todoapp">
      <Header 
        InputText={InputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList 
        todos={todos}
        setTodos={setTodos}
        status={status}
        setStatus={setStatus}
        filteredTodos={filteredTodos}
      />
      </section>
      <Footer />
    </div>
  );
}

export default App;
