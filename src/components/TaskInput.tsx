import React, { useState } from 'react';

function TaskInput() {
  
  const [taskName, setTaskName] = useState<string>('');

  return (
    <>
      <h1>React Todo List</h1>
      <input 
        type="text" 
        name="task-name"
        id="task-name"
        placeholder="Type a new task"
        onChange={event => setTaskName(event.target.value)}
      />
      <input type="button" value="add" onClick={event => event}/>
      {taskName}
    </>    
  );
}

export default TaskInput;
