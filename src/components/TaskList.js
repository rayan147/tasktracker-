import TaskCard from "./TaskCard"
import TaskButton from "./TaskButton"
 const TaskList = ({title,cards}) => {
    return (
        <div style={styles.container}>
         <h3>
            {title}
        </h3>   

            {cards.map(card => <TaskCard key={card.id} text={card.text} />)}
        <TaskButton  />
        </div>
        
    )
}

const styles ={
    container:{
    borderRadius:3,
    backgroundColor:"#fccc",
    width:300,
    padding:8,
    height:"100%",
    marginRight :"1rem"
    }
}
export default TaskList