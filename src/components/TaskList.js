import TaskCard from "./TaskCard"
import TaskButton from "./TaskButton"
 const TaskList = ({title,cards,listID}) => {
    
    return (
        <div style={styles.container}>
         <h3>
            {title}
        </h3>   

            {cards.map(card => <TaskCard key={card.id} text={card.text} />)}
        <TaskButton listID={listID}  />
        </div>
        
    )
}

const styles ={
    container:{
    borderRadius:3,
    backgroundColor:"#fc3c",
    width:300,
    padding:8,
    height:"100%",
    marginRight :"1rem"
    }
}
export default TaskList