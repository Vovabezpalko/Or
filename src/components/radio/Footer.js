import React,{use} from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { connect } from "react-redux"
import {setPlays}from '../../actions/action'
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';


const Footer =({setPlay,name,url,playing,setValue,value})=>{
  

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  

    return(
<>
<AppBar position="fixed-bottom "
sx={{
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#212121',
height:80,

}}
>
<Grid container justifyContent="center" alignItems="flex-end" >
<Grid item xs={6} md={3} xs={12} spacing={5}>
 <Toolbar variant="dense">
   
    <Typography variant="h6" color="inherit" component="div">
      {name}
    </Typography>
    
  
{url!=url?<PlayArrowIcon
fontSize="large"
onClick={()=>{
 setPlay(true)
 }}
/>:
playing?<StopCircleOutlinedIcon
 onClick={()=>setPlay(false)}
 fontSize="large"
 color="red"
 />:<PlayArrowIcon

 fontSize="large"
 onClick={()=>{
 
  setPlay(true)
  
  
  }}

  />
}


  </Toolbar>
   </Grid>
  <Grid item xs={3} md={3} xs={12}>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            max={1.000}
            step={0.001}
            aria-labelledby="input-slider"
            sx={{
              width:500,
              step: 1,
              min: 0,
              max: 1,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        
        </Grid>
        <Grid item>
          {value==0?
          <VolumeOffIcon
          fontSize="large"
          onClick={()=>setValue(0.500)}
          />:
          <VolumeUpIcon
          fontSize="large"
          onClick={()=>setValue(0)}
          />
          }
        

          </Grid>
  
</Grid>
  
</AppBar>
</>
    )
}

function mapStateToProps(state) {
  return {
 playing: state.Player.playing,
 name:state.Player.name,
 playing:state.Player.playing,
 url:state.Player.url
  }
}
function mapDispatchToProps(dispatch) {
  
  return {

   
    setPlay: playing => {
   
      dispatch(setPlays(playing))
    }
    
  }
}

export default  connect(mapStateToProps,mapDispatchToProps)(Footer)