import TaskCard from "./TaskCard"
import TaskButton from "./TaskButton"
 const TaskList = ({title,cards}) => {
    return (
        <div style={styles.container}>
         <h3>
            {title}
        </h3>   

            {cards.map(card => <TaskCard key={cards.id} text={card.text} />)}
        <TaskButton list />
        </div>
        
    )
}

const styles ={
    container:{
    borderRadius:3,
    backgroundColor:"#fcc",
    width:300,
    padding:8,
    marginRight:8
    }
}
export default TaskList