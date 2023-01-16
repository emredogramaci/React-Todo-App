import React from 'react'

const Header = ({InputText, setInputText, todos, setTodos}) => {
    //Props handler
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        if(InputText === ""){
            alert("You can't enter an empty todo!");
            return;
        }
        setTodos([
            ...todos,
            {text: InputText, completed: false, id: Math.random() * 1000},
        ]);
        setInputText("");
    };
  return (
    <div>
        <header className="header">
            <h1>ToDo List</h1>
            <form onSubmit={submitTodoHandler}>
                <input
                    className="new-todo"
                    placeholder="What will you do today?"
                    autoFocus
                    value={InputText}
                    onChange={inputTextHandler}
                />
            </form>
        </header>
    </div>
  );
};

export default Header