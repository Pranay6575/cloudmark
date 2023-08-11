import React from "react";
import ContextNote from "./ContextNote";
import { useState } from "react";

 const StateNote = (props) =>{
    
    return(
        <ContextNote.Provider value={{}}>
         { props.children }
        </ContextNote.Provider>
    )
 }

 export default StateNote