import * as React from 'react';
import SearchResult from './SearchResult';
import api from '../../api'



export default function Search({setState,setRadio,setPlay,play,setYearFunction}) {
    
    const [search, setSearch] = React.useState('');
    console.log(api)
    function handleSubmit(event) {
        event.preventDefault();
        console.log('search:', search);
        
      }


      const filteredPersons = api.filter(
        person => {
          return (
            person
            .name
            .toLowerCase()
            .includes(search.toLowerCase())
          );
        }
      );
      
     

  return (
      <>
      
   <form>
       <input
       id='search'
       
       placeholder="Search"
       value={search}
       onChange={(e) => setSearch(e.target.value)}
       style={{
        
          width:600,
            padding: "5px",
            fontSize: "17px",
            borderWidth: "1px",
            borderColor: "#CCCCCC",
            backgroundColor: " ",
            color: "#000000",
            borderStyle: "solid",
            borderRadius: "4px",
            boxShadow: "0px 0px 5px rgba(66,66,66,.75)",
            textShadow: "0px 0px 5px rgba(66,66,66,.75)"
        
           
       }}
       >
       
       </input>

   </form>
{Object.keys(search).length!==0&&
    <SearchResult
   filteredPersons={filteredPersons}


   />
}
   
   </>
  );
}