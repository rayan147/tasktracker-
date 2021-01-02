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
]
const listReducer = (state=initialState,action)=>{
    switch (action.type){
        default:
            return state 
    }
}
export default listReducer 