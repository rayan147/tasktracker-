import TaskCard from "./TaskCard"
 const TaskList = ({title,cards}) => {
    return (
        <div style={styles.container}>
         <h3>
            {title}
            {cards.map(card => <TaskCard text={card.text} />)}
        </h3>   
        </div>
        
    )
}

const styles ={
    container:{
    borderRadius:3,
    backgroundColor:"#fcc",
    width:300,
    padding:8
    }
}
export default TaskList