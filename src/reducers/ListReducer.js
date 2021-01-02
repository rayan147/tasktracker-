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

const listReducer = (state=initialState,action)=>{
    switch (action.type){
        default:
            return state 
    }
}
export default listReducer 