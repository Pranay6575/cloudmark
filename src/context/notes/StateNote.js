import React from "react";
import ContextNote from "./ContextNote";
import { useState } from "react";

 const StateNote = (props) =>{
    const s1 = {
        "name": "Alberto",
        "age": "56"
    }
    const [state, setState] = useState(s1);
    const update = ()=>{
        setTimeout(()=>{
            setState({
                "name": "Marchel",
                "age": "45"
        })
        },1500)
    }
    return(
        <ContextNote.Provider value={{state, update}}>
         { props.children }
        </ContextNote.Provider>
    )
 }

 export default StateNote