export default function Task({task}){
    return <div className="task">
        <input type="checkbox"/><h2>{task}</h2>
    </div>
}