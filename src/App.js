import React ,{useState} from 'react';

import RecipeReviewCard from './components/radio/RecipeReviewCard'
import api from './api';
import Main from './main/Main';
//fire base
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import './App.css';

function App() {

  // Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb9Zzpe2BGhU3kuYRO0mO7IIc7-j4Gb9E",
  authDomain: "fire-c55fe.firebaseapp.com",
  databaseURL: "https://fire-c55fe.firebaseio.com",
  projectId: "fire-c55fe",
  storageBucket: "fire-c55fe.appspot.com",
  messagingSenderId: "528847154674",
  appId: "1:528847154674:web:4bdb4364e8a0dbf53e0f6b",
  measurementId: "G-WBYFFD1V0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 
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
