import React, { useState } from 'react';
import TodoList from './TodoList';

function TaskInput(): JSX.Element {
  
  const [task, setTask] = useState<Task | undefined>();
  const [todoList, setTodoList] = useState<Task[]>([]);

  const createTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask({
      title: event.target.value,
      status: "to do"
    });
  }

  const addTask = () => {
    if(typeof task !== "undefined") {
      setTodoList([...todoList, task]);
    }
  }

  const removeTask = (indexToBeRemoved: number) => {
    setTodoList(todoList.filter((value, index) => {
      return indexToBeRemoved !== index;
    }))
  }

  const editTask = (oldValueIndex: number, newValue: Task) => {
    setTodoList(todoList.filter((value, index) => {
      if(oldValueIndex !== index) {
        return value;
      } else {
        return newValue;
      }
    }))
  }

  return (
    <>
      <h1>React Todo List</h1>
      <input 
        type="text" 
        name="task-name"
        id="task-name"
        placeholder="Type a new task"
        onChange={createTask}
      />
      <input type="button" value="add" onClick={addTask}/>
      <TodoList tasklist={todoList} removeItem={removeTask} editItem={editTask}/>
    </>    
  );
}

export default TaskInput;