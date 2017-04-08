import React from 'react'
import './App.css';

const TodoList = (props) => {
    return(
        <ul className="App">
        {props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    )
}

export default TodoList;