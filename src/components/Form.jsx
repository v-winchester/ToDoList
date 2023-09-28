import React, { useState }from 'react';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';


function Task() {

  const addTodo = () => {
        setTodos([...todos, todo]);
  };

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  

  const deleteToDo = (Text) => {
  const newTodos = todos.filter((todo) => {
    
  return todo !== Text;});
         setTodos(newTodos);};


  return (
      <>
        <Form.Control
          type="text"
          className='input'
          name="input"
          placeholder="add task"
          value={todo}
          onChange={(event) => {
            setTodo(event.target.value);
          }}
          /> <button className="add-button" onClick={addTodo}>Add</button>

        
        <ListGroup className='todo-list'>
        {todos.map((todo, index) => (
          
        <div className='todo' >
        <ListGroup.Item key={index}> {todo} </ListGroup.Item>

        <button className='delete-button'
        onClick={() => {deleteToDo(todo);
        }}>
        Delete
        </button>
        </div>
        ))}

        </ListGroup>
       
      </>
    );
    }


  export default Task;