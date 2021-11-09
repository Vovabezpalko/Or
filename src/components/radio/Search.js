import * as React from 'react';
import SearchResult from './SearchResult';
import api from '../../api'
import TextField from '@mui/material/TextField';



export default function Search() {
    
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
      
   
   <TextField id="outlined-basic" label="Search" variant="outlined" 
   onChange={(e) => setSearch(e.target.value)}
   sx={{
    
   }}
   size="small"
   />
{Object.keys(search).length!==0&&
    <SearchResult
   filteredPersons={filteredPersons}


   />
}
   
   </>
  );
}