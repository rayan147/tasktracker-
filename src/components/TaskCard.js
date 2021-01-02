
import {Card,Typography,CardContent} from '@material-ui/core';


const TaskCard = ({text}) => {
    return (
            <Card style={stlyes.cardContainer} >
              <CardContent>
              <Typography  color="textSecondary" gutterBottom>
         {text}
        </Typography>  
              </CardContent>
      

    </Card>
    )
}

const stlyes ={
  cardContainer:{
    marginBottom: 8
  }
}
export default TaskCard
