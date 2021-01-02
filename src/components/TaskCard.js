
import {Card,Typography,CardContent} from '@material-ui/core';


const TaskCard = ({text}) => {
  console.log("text",text)
    return (
            <Card >
              <CardContent>
              <Typography  color="textSecondary" gutterBottom>
         {text}
        </Typography>  
              </CardContent>
      
            
    </Card>
    )
}

export default TaskCard
