import { AccordionActions } from "@material-ui/core"
import {CONSTANTS} from "."

export const addCard =(listID,text)=>{
    return{
        type:CONSTANTS.ADD_CARD,
        payload: {text,listID}
    }
}