function MyTask({taskPlan,addTask,deleteTask,selectedDay,setSelectedDay}){
    return(
        <div>  
            <div>
                <button className="button-add" onClick={addTask}>Add</button>  
            </div>    
            <div className="note">
                {taskPlan.map(({title,id,taskForADay})=> (
                    <div key={id} className={`task ${id === selectedDay ? 'selected':'default'}`}
                        onClick={()=>setSelectedDay(id)}>
                        <p className="title">{title.substring(0,20)}</p>
                        <p className="title">{taskForADay.substring(0,30)}</p>
                        <button className="button-delete" onClick={()=>deleteTask(id)}>Delete</button> 
                    </div>
                ))}
            </div>           
        </div>
    )
}
export default MyTask;