import TaskList from "./TaskList";
import {connect} from "react-redux"
import TaskButton from "./TaskButton";

function App({lists}) {
  return (
    <div style={styles.listsContainer}>
      {lists.map(list => (
        <TaskList listID={list.id} key={list.id} title={list.title} cards={list.cards}></TaskList>
      ))}
      <TaskButton list/>
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

