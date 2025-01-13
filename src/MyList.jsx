function MyList({selectedDay,updateTask}){
    const editMyTask = (myInput,value) => {
        updateTask({
            ...selectedDay,
            [myInput]:value
        })
    }
    if(!selectedDay) return <p className="plan">My plan</p>
    return (
<       div className="whole-plan">            
                <input type="text" className="myInput" id="title" 
                        value={selectedDay.title} 
                        onChange={(e)=>editMyTask("title",e.target.value)}/>
                <textarea placeholder="Write your task here" id="taskForADay"
                        value={selectedDay.taskForADay}
                        onChange={(e)=>editMyTask("taskForADay",e.target.value)}/>
                <textarea placeholder="More Details" id="taskForADay"
                        value={selectedDay.details}
                        onChange={(e)=>editMyTask("details",e.target.value)}/>                   
        </div>
    )    
}
export default MyList;