import React,{useState} from "react"
import AddIcon from '@material-ui/icons/Add';
import {Card} from "@material-ui/core"
import TextareaAutosize from 'react-textarea-autosize';
const TaskButton = ({list}) => {
    const [isOpen,setOpen] = useState(false)
      const isFormOpen =( ) => setOpen(!isOpen)
      const renderAddButton = ()=> {
        const buttonText = list ? "Add another list" :"Add another card"
        const buttonTextOpacity = list ? 1 : 0.5
        const buttonTextColor  =list ?"white" : "inherit"
        const buttonTextBackground = list ? "rgba(0.0.0.5)" : "inherit"
        return (
            <div onClick={isFormOpen} style={{
                ...styles.openFormButtonGroup,
                opacity:buttonTextOpacity,
                color:buttonTextColor,
                background:buttonTextBackground
            }}>
           <AddIcon/>  
        <p>{buttonText}</p> 
         
                </div>
        )
    }
  
    const renderForm =()=>{
        const placeholder = list ? "Enter a list title" : "Enter a title for this card" 
        const buttonTitle = list ? "Add list" : "Add Card"
        return <div>
            <Card>
            <TextareaAutosize>
                </TextareaAutosize> 
            </Card>
        </div>
    }
    return (
        <>
         {isOpen ? renderForm() : renderAddButton()}   
        </>
    )
}

const styles ={
    openFormButtonGroup :{
        display:"flex",
        aliginItems:"center",
        cursor:"pointer",
        height:36,
       

    }
}
export default TaskButton
