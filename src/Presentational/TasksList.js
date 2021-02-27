
export default function TasksList(props){
    return (
        <ul>
            {props.tasks.map((task, index) => {
                return (<li key={task.id}>
                    {index+1} - <u>{task.title}</u>
                    <span 
                        onClick={()=>props.onDelete(task.id)}
                        style={{color: "red", cursor: "pointer"}}
                        // key={task.id}
                    > X </span>
                </li>)
            })}
        </ul>
    )
}