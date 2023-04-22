import Task from "./Task";
import "../styles/tasklist.css";
import { useContext } from "react";
import { TodoListContext } from "../App";

export default function TaskList() {
  const [todoData, setTodoData] = useContext(TodoListContext);
  return (
    <div className="task-list">
      {todoData.map((item,index) => {
        console.log(item)
        return <Task key={index} task={item.task}></Task>;
      })
      
      }

      {/* <Task></Task> */}
    </div>
  );
}
