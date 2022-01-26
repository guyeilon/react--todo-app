import React, { useState } from 'react';
import AddToDo from './AddToDo';
import ListToDos from './ListTodos';

import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Todos = () => {
  const auth = useSelector(state => state.auth);
  const [todo, setTodo] = useState({
    name: '',
    isComplete: false,
  });

  if (!auth._id) return <Navigate to='/signin' />;
  return (
    <>
      <AddToDo todo={todo} setTodo={setTodo} />
      <ListToDos setTodo={setTodo} />
    </>
  );
};

export default Todos;
