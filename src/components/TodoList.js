import React from 'react';
import Todo from './Todo';
import TodoFooter from './TodoFooter';

const TodoList = ({todos, setTodos, status, setStatus, filteredTodos}) => {
  return (
    <div>
        <section className="main">
            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark All as Completed</label>
            <ul className="todo-list">
                {filteredTodos.map((todo) => 
                    (
                        <Todo
                            todo={todo}
                            key={todo.id}
                            setTodos={setTodos}
                            todos={todos}
                        />
                    )
                )}
            </ul>
        </section>
        <TodoFooter 
            todos={todos}
            setTodos={setTodos}
            status={status}
            setStatus={setStatus}
        />
    </div>
  );
};

export default TodoList