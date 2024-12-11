import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../../Slices/ToDoSlice";

function ToDo() {
  const [todo, setTodo] = useState("");
  const todoList = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();

    //adding todo to redux
  const addToDo = () => {
    if(todo.trim().length===0){
        return
    }
    dispatch(addTodo({ id: todoList.length + 1, todo }));
    setTodo("");
  };

//   deleting todo
  const removeTodo = (id) => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <div className="d-flex flex-column align-items-center w-100">
      <h3 className="fs-3 mt-3 mb-2">To-Do</h3>
      <div className="w-100" style={{ maxWidth: "600px" }}>
        <div className="d-flex flex-column align-items-start w-100 mt-5">
          <label htmlFor="todo">Add task</label>
          <div className="w-100 d-flex mb-2">
            <input
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              className="border w-100 rounded p-2"
              name="todo"
              id="todo"
              type="text"
            />
            <button onClick={addToDo} className="btn btn-primary w-25">
              Add To Do
            </button>
          </div>
        </div>
        <div className="border w-100 p-3 rounded">
          {todoList.map((task) => (
            <div key={task.id} className="d-flex w-100 mb-2">
              <div  className="p-3 py-2 border w-100">
                {task.todo}
              </div>
              <button onClick={()=>removeTodo(task.id)} className="btn btn-danger w-25">
                delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ToDo;
