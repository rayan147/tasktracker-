import TaskList from "./TaskList";
import {connect} from "react-redux"

function App({lists}) {
  console.log(lists)
  return (
    <div>Hello task manager
      {lists.map(list => (
        <TaskList title={list.title} cards={list.cards}></TaskList>
      ))}
    </div>
  )}


 const mapStateToProps = state =>({
   lists:state.lists
 })
export default connect(mapStateToProps) (App);

