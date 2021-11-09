import React ,{useState} from 'react';

import RecipeReviewCard from './components/radio/RecipeReviewCard'
import api from './api';
import Main from './main/Main';


import './App.css';

function App() {

 
//   fetch("https://radio-world-50-000-radios-stations.p.rapidapi.com/v1/radios/getTopByCountry?query=ua", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "radio-world-50-000-radios-stations.p.rapidapi.com",
// 		"x-rapidapi-key": "1b1ec22090msh226e440b9ab89afp167fd1jsn01e86672908f"
// 	}
// })
// .then(response => response.json())
// .then(data => {
	
//   // setStae(data)
// })
// .catch(err => {
// 	console.error(err);
// });

  return (
    <div>

      
     <Main/>
      
    
    </div>
  );
}

export default App;
