import '../styles/addtask.css'
import { useRef , useContext} from 'react'
import { InputContext , TodoListContext} from '../App';

export default function AddTask(){
    const [input, setInput] = useContext(InputContext);
    const [todoData, setTodoData] = useContext(TodoListContext);
    
    const inputRef = useRef(null);
  

    function handleClick(){
        if (inputRef.current.value === '') {
            return;
        }

        const taskObj = { task: inputRef.current.value };
        setTodoData([...todoData, taskObj]);
        setInput(inputRef.current.value);
        
        inputRef.current.value = '';

    }
    console.log(todoData)

    return (
        <div className="add-task">
            <input ref={inputRef} type="text" placeholder="Enter your todo...." />
            <button onClick={handleClick}>Enter</button>
        </div>
    );
}
