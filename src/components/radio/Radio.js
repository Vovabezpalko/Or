import React,{useState} from 'react'

import RadioItem from './RecipeReviewCard'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ReactPlayer from 'react-player'
import { Margin } from '@mui/icons-material';
import { connect } from "react-redux"
import {setUrls,setPlays,setStates,setNames }from '../../actions/action'
const Radio =({setRadio,play,radio,api,setPlay,setUrl,setName,playing,setState,url})=>{
return(
<>

<Box 
sx={{
   
    backgroundColor: '#030303'
   
  }}
>
<Grid container  spacing={5} justifyContent="space-around"
  alignItems="center"  
>

{ 
api.map((item,index) =>( 
         
         <Grid item xs={12} md={3}
         >
         <RadioItem
         index={index}
         img={item.image_url}
         text={item.name}
         item={item}
        playing={playing}

        setState={setState}
        setPlay={setPlay}
         setUrl={setUrl}
         setName={setName}
         
        />
         </Grid>
 ))}
</Grid>
</Box>
</>
    )
}


function mapStateToProps(state) {
  return {
    user: state.Player.user,
    year: state.Player.year,
    playing: state.Player.playing,
    url: state.Player.url,
  }
}
function mapDispatchToProps(dispatch) {
  
  return {

    setState: playing => {
   
      dispatch(setStates(playing))
    },
    setPlay: playing => {
   
      dispatch(setPlays(playing))
    },
    setUrl: url => {
   
      dispatch(setUrls(url))
    },
    setName: names => {
   
      dispatch(setNames(names))
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Radio)