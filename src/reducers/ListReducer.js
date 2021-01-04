import {CONSTANTS} from "../actions"
const initialState =[
    {
        title:"Deployment",
        id:0,
        cards:[
            {
            id:1,
            text:"Bacon ipsum dolor amet ham hock prosciutto bresaola swine cow hamburger fatback jerky."},
            
            {
            id:2,
            text:"t-bone pork loin. Cow burgdoggen tri-tip jerky, tenderloin ham alcatra"
        }
        ]
    }
,

    {
        title:"Investigation Tickets",
        id:1,
        cards:[
            {
            id:1,
            text:"looks wierd "},
            
            {
            id:2,
            text:"dont know "
        }
        ]
    },
 {
        title:"Consul-template",
        id:2,
        cards:[
            {
            id:1,
            text:"endpoint doest exits in nginx"},
            
            {
            id:2,
            text:"Consul-tample not working"
        }
        ]
    }
]
let listID =50
let cardID= 4
const listReducer = (state=initialState,action)=>{
    switch (action.type){
        case CONSTANTS.ADD_LIST:
            const newList = {
                title:action.payload,
                cards:[],
                id:listID
            }
            listID ++
            return [...state, newList]
        case CONSTANTS.ADD_CARD:
            const newCard ={
                text:action.payload.text,
                id:cardID
            }
            cardID ++
          const newState =  state.map(list => {
                if(list.id === action.payload.listID){
                    return{
                        ...list,
                        cards:[...list.cards,newCard]
                    }
                } else{
                    return list
                }
                
            })
            return newState
        default:
            return state 
    }
}
export default listReducer 