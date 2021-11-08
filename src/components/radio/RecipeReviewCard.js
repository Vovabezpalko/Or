import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';


import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';

import { connect } from "react-redux"
import { Margin } from '@mui/icons-material';




const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

 function RadioItem({img,text,item,setState,index,setRadio,setPlay,setUrl,playing,url,setName

}) {
  const [expanded, setExpanded] = React.useState(false);
  




  return (
    <Card sx={{ maxWidth: 345 ,marginLeft:"auto",marginRight:"auto"}}>
      
      <CardMedia
        component="img"
        height="194"
        image={img}
        alt="Paella dish"
      />
      <CardContent>
      <Typography variant="h6" color="inherit" component="div">
      {text}
    </Typography>


{url!=item.uri?<PlayArrowIcon

fontSize="large"
onClick={()=>{
 setUrl(item.uri)
 setPlay(true)
setState(item.uri)
setName(item.name)
 
 }}

 />:
playing?<StopCircleOutlinedIcon
 onClick={()=>setPlay(false)}
 fontSize="large"
 color="red"
 />:<PlayArrowIcon

 fontSize="large"
 onClick={()=>{
  setUrl(item.uri)
  setPlay(true)
  setName(item.name)
  setState(item.uri)
  
  }}

  />
}



      </CardContent>
     
     
 
    </Card>
  );
}


function mapStateToProps(state) {
  return {
   
    playing: state.Player.playing,
    url: state.Player.url,
  }
}
function mapDispatchToProps(dispatch) {
  
  return {

    
    
  }
}



 export default connect(mapStateToProps,mapDispatchToProps)(RadioItem)