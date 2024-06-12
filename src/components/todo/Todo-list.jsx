import React, { useState } from "react";
import "./Todo-list.css";
import TodoAdd from "./Todo-add";
import TodoFilter from "./Todo-filter";
import TodoItem from "./Todo-item";
import todo from "./todo-data";
import { nanoid } from "nanoid";

const TodoList = () => {
  const [todoList, setTodoList] = useState(todo);

  const addTask = (title) => {
    setTodoList([...todoList, { id: nanoid(), done: false, title }]);
  };
  const removeTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };
  const toggleDone = (id) => {
    const updatedtodoList = todoList.map((task) => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTodoList(updatedtodoList);
  };
  const updateTask = (id, title)=>{
    const updatedTodoList = todoList.map(task => {
      if(task.id === id){
        return{...task, title};
      }
      return task;
    });
    setTodoList(updatedTodoList);
  };
  return (
    <div className="wrapper">
      <h1>Todo List</h1>
      <TodoAdd addTask={addTask} />
      <div>
        <TodoFilter />
        <ul className="todo-list">
          {todoList.map((item, index) => (
            <TodoItem
              {...item}
              key={item.id}
              removeTask={removeTask}
              toggleDone={toggleDone}
              updateTask = {updateTask}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
