import React,{useState} from "react"
import AddCircleIcon from '@material-ui/icons/AddCircle'

const TaskButton = ({list}) => {
    const renderAddButton = ()=> {
        const buttonText = list ? "Add another list" :"Add another card"
        const buttonTextOpacity = list ? 1 : 0.5
        const buttonTextColor  =list ?"white" : "inherit"
        const buttonTextBackground = list ? "rgba(0.0.0.15)" : "inherit"
        return (
            <div style={{
                ...styles.openFormButtonGroup,
                opacity:buttonTextOpacity,
                color:buttonTextColor,
                background:buttonTextBackground
            }}>
            <AddCircleIcon/> 
        <p>{buttonText}</p>  
                </div>
        )
    }
    return (
        <>
         {renderAddButton()}   
        </>
    )
}

const styles ={
    openFormButtonGroup :{
        display:"flex",
        aliginItems:"center",
        cursor:"pointer",
        height:36,
        width:275,
        paddingLeft:10

    }
}
export default TaskButton
