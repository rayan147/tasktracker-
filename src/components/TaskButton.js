import React,{useState} from "react"
import AddIcon from '@material-ui/icons/Add';
import {Card,Button} from "@material-ui/core"
import TextareaAutosize from 'react-textarea-autosize';
import CloseIcon from '@material-ui/icons/Close';


const TaskButton = ({list}) => {
    const [isOpen,setOpen] = useState(false)
    const [text,setText]=useState("")

      const isFormOpen = () => setOpen(!isOpen)
      const isFormClose =(e) => setOpen(false)
      const renderAddButton = ()=> {
        const buttonText = list ? "Add another list" :"Add another card"
        const buttonTextOpacity = list ? 1 : 0.5
        const buttonTextColor  =list ? "white" : "inherit"
        const buttonTextBackground = list ? "rgba(0.0.0.5)" : "inherit"
        return (
            <div onClick={isFormOpen} style={{
                ...styles.openFormButtonGroup,
                opacity:buttonTextOpacity,
                color:buttonTextColor,
                background:buttonTextBackground
            }}>
           <AddIcon style={{marginTop:12,cursor:"pointer"}}/>  
        <p>{buttonText}</p> 
         
                </div>
        )
    }
  const handleInputChange = e =>{
      return setText(e.target.value)
  }
    const renderForm =()=>{
        const placeholder = list ? "Enter a list title" : "Enter a title for this card" 
        const buttonTitle = list ? "Add list" : "Add Card"
        return <div>
            <Card  style ={{
            minHeight:85,
            minWidth:272,
            padding:"6px 8px 2px"
        }}>
            <TextareaAutosize 
            autoFocus 
            placeholder={placeholder} 
            onBlur={isFormClose}
            onChange={handleInputChange}
            value={text}
            style={{
                resize:"none",
                width:"100%",
                overflow:"hidden",
                outline:"none",
                border:"none"
            }}

            >
                </TextareaAutosize> 
            </Card>

            <div style={styles.formButtonGroup} >
        <Button varient="contained" style={{color:"white",backgroundColor:"green"}}> {buttonTitle}</Button>
        <CloseIcon  style={{marginTop:5,cursor:"pointer"}}/>
            </div>
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
        height:"100%",
       width:272,
       paddingLeft:10

    },
    formButtonGroup:{
        marginTop:10,
        display:"flex",
        justifyContent:"space-between",
        aliginItems:"center"
    }
}
export default TaskButton
