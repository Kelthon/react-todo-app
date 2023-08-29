type TodoListProperties = {
  tasklist: Task[],
  removeItem: (index: number) => void,
  editItem: (index: number, newValue: Task) => void,
}

function TodoList({ tasklist, removeItem, editItem }: TodoListProperties) {
  return (
    <>
      <ul className="list">
        {
          tasklist.map((task, index) => {
            return (
              <li className="list-item">
                  <div className="item">
                    <div className="item-content">{task.title}</div>
                    <div className="item-tools">
                      <button onClick={event => removeItem(index)}>edit</button>
                      <button onClick={event => removeItem(index)}>remove</button>
                    </div>
                  </div>
              </li>
            );
          })
        }
      </ul>
    </>
  );
}

export default TodoList;