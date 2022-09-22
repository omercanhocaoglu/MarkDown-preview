import { useState, useEffect } from 'react';

import "./style.css";

function Header () {
 
const [clock, setClock] = useState();

const date = new Date().toDateString();

useEffect( () => {
    
    setInterval( () => {
    
        const time = new Date().toLocaleTimeString();

        setClock(time);

    }, 1000);
} );


 
return (
   
   
    <div className='border-bottom'>
     
     <h1 className='text-center'>Welcome to Markdown Preview</h1>

     <p className='text-end'> <strong> {clock} |  {date} </strong> </p> <br/>

     <p className='text-end'> <a className='text-none' target="blank" href=" https://www.markdownguide.org/cheat-sheet/"> Click For Tutorial </a> </p>

    

    </div>
  )
};

export default Header;