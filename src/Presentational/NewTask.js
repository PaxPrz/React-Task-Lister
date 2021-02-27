
export default function NewTask(props){
    // console.log(props.task);
    return (
        <form onSubmit={props.onSubmit}>
            <input 
                type="text" 
                name="title"
                onChange={props.onChange}
                value={props.task.title || ''}
            />
            <button type="submit">Create</button>
        </form>
    )
}