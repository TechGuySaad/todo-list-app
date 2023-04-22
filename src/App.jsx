import { Route, Routes } from "react-router-dom";
import AddTask from "./components/AddTask";
import NavBar from "./components/NavBar";
import TaskList from "./components/TaskList";
import { createContext,useState } from "react";

export const InputContext = createContext();
export const TodoListContext = createContext();

function App() {
  const [input, setInput] = useState('')
  const [todoData, setTodoData] = useState([]);
  return (
    <>
      <div className="app-container">
      
        <NavBar></NavBar>
        <TodoListContext.Provider value={[todoData,setTodoData]}>
        <InputContext.Provider value={[input,setInput]}>
        <Routes>
          <Route path="/" element={<TaskList></TaskList>}>
            
          </Route>
          <Route path="/add-task" element={<AddTask></AddTask>}></Route>
        </Routes>
        </InputContext.Provider>
        </TodoListContext.Provider>
        

        
      </div>
    </>
  );
}

export default App;

// 
