import React from 'react'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';

const SearchItem =({item,setState,setRadio,setPlay,setUrl,playing,url,setName})=>{
 console.log(url)
    return(
<>

<Toolbar variant="dense">
   
    <Typography variant="h6" color="inherit" component="div">
      {item.name}
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
  </Toolbar>
</>
    )
}

export default SearchItem