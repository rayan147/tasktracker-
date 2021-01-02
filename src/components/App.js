import TaskList from "./TaskList";
import {connect} from "react-redux"

function App({lists}) {
  return (
    <div style={styles.listsContainer}>
      {lists.map(list => (
        <TaskList key={list.id} title={list.title} cards={list.cards}></TaskList>
      ))}
    </div>
  )}

const styles ={
  listsContainer:{
    display:"flex",
    justifyContent:"start",
    flexWrap:"wrap",
    marginTop:"3rem",
  

  
  }
}
 const mapStateToProps = state =>({
   lists:state.lists
 })
export default connect(mapStateToProps) (App);

