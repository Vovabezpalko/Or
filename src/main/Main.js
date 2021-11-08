import React,{useState} from 'react'
import Header from '../components/radio/Header'
import Radio from '../components/radio/Radio'
import Footer from '../components/radio/Footer'
import ReactPlayer from 'react-player'
import { connect } from "react-redux"


const Main =({url,playing,api,state})=>{
  const [value, setValue] = React.useState(1);
    const [play,setPlay]=React.useState(false)
    const [radio,setRadio]=useState('')
   console.log(value)
    return(
<>
<div style={{
    height:0
}}>
<ReactPlayer 
url={url}
playing={playing}
controls={false}
volume={value}

/>
</div>

<Header

setRadio={setRadio}
setPlay={setPlay}
play={play}

/>
<Radio

api={api}
/>


 {Object.keys(state).length!==0&&
    <Footer
state={state}
setPlay={setPlay}
play={play}
radioName={radio.name}
setValue={setValue}
value={value}
/>
} 


</>

    )
}

function mapStateToProps(state) {
    return {
     
      url: state.Player.url,
      playing: state.Player.playing,
      api: state.Player.api,
    state:state.Player.state
    }
  }

export default  connect(mapStateToProps)(Main)
