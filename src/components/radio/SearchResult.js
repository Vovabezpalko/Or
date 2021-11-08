import { padding } from '@mui/system';
import React, {  useEffect } from 'react';
import SearchItem from './SearchItem';
import { connect } from "react-redux"
import {setUrls,setPlays,setStates,setNames} from '../../actions/action'

const SearchResult=({filteredPersons,setState,setRadio,setPlay,playing,setUrl,setName,url})=>{
    

    useEffect(()=>{
        console.log(filteredPersons)
    }, filteredPersons)
    
 return(
<>
<div
style={{
    background: '#212121',
    position:'absolute',
    width:600,
    padding:20,
    right:-0+'%',
    top:50
}}
>

{ filteredPersons.map((item,index) =>( 
        <SearchItem
item={item}
setState={setState}
 setRadio={setRadio}
 setPlay={setPlay}
 playing={playing}
 
        
 setState={setState}
 setPlay={setPlay}
  setUrl={setUrl}
  setName={setName}
  url={url}

        />
   
))}



</div>
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
export default connect(mapStateToProps,mapDispatchToProps)(SearchResult)