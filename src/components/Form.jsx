import React, { useState }from 'react';
import Form from 'react-bootstrap/Form';


function FormText() {

  const addTodo = () => {
    setTodos([...todos, todo]);
  };

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const deleteToDo = (Text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== Text;
    });
    setTodos(newTodos);
  };

    return (
      <>
        <Form.Control
          type="text"
          name="toDo"
          aria-describedby="Task"
          placeholder="add task"
          value={todo}
          onChange={(event) => {
            setTodo(event.target.value);
          }}
          />
        <button className="add-button" onClick={addTodo}>Add</button>

        {todos?.length > 0 ? (
        <ul className='todo-list'>
        {todos.map((todo, index) => (
        <div className='todo'>
        <li key={index}> {todo} </li>

        <button className='delete-button'
        onClick={() => {deleteToDo(todo);
        }}>Delete</button>
        </div>
        ))}

        </ul>
        ) : (
          <div className='empty'>
            <p>No task found</p>
          </div>
        )}
      </>
    );
    }


  export default FormText;