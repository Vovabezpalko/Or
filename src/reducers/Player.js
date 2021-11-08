import api from '../api'
const initialState = {
  url:'',
  playing:false,
  api:api,
  state:'',
  name:' '

}


//  сам редусер 
export default function Player (state = initialState,  action) {

    switch (action.type) {
        
        
        case "SET_PLAY":
        return {...state, playing: action.payload}
         
         case "SET_URL":
        return {...state, url: action.payload}
        case "SET_STATE":
          return {...state, state: action.payload}
          case "SET_NAMES":
            return {...state, name: action.payload}
  

        
        
        
        default: return state
    }
    
      
  
}