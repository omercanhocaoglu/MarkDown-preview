import { useState} from "react";

import ReactMarkdown from 'react-markdown';

import "./style.css"

function MarkDown () {


  
const [markdown, setMarkdown] = useState(`# Text Here and see the result at right side!`); 








  
  
    return (
    
    
    <div className="">

        
        
        
        <div className="markdown__container">

           

        

        <textarea className="textarea" value={markdown} onChange={ (e) => setMarkdown( () => e.target.value ) } />

        <ReactMarkdown children={markdown} className="markdown__preview"  />

        </div>
        
        
    </div>
  )
};

export default MarkDown;