import  React,{useState} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import { connect } from "react-redux"
import {setPlays} from '../../actions/action'


import Search from './Search'




function SearchAppBar({
  setState,setRadio,setPlay,play,user,year,setYearFunction
}) {
    
    const [value,setValue]=useState('')
  return (
    <Box sx={{ flexGrow: 1, }}>
      <AppBar position="staic" sx={{backgroundColor:"#030303",marginBottom:2}}>
        <Toolbar>
         
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Yor Radio
          </Typography>
         
          
        <Search
        setState={setState}
        setRadio={setRadio}
        setPlay={setPlay}
        play={play}
        setYearFunction={setYearFunction}
        year={year}

       
        />
        </Toolbar>
      </AppBar>
    </Box>
  );
}


function mapStateToProps(state) {
  return {
    user: state.Player.user,
    year: state.Player.year,
    playing: state.Player.playing,
  }
}
function mapDispatchToProps(dispatch) {
  
  return {

    setYearFunction: playing => {
   
      dispatch(setPlays(playing))
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(SearchAppBar)