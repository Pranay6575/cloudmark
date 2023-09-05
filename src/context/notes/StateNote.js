import React from "react";
import ContextNote from "./ContextNote";
import { useState } from "react";

 const StateNote = (props) =>{
    const notesInitial = [
        {
          "_id": "64ce1f580e95aefa2f043fcd",
          "user": "64c896ed66e60ed2b080d404",
          "title": "Updated New Album",
          "description": "Updated Hollywood Top 100",
          "tag": "Public",
          "date": "2023-08-05T10:07:20.512Z",
          "__v": 0
        },
        {
          "_id": "64ce1ff00e95aefa2f043fd5",
          "user": "64c896ed66e60ed2b080d404",
          "title": "My Title",
          "description": "A star is born",
          "tag": "individual",
          "date": "2023-08-05T10:09:52.196Z",
          "__v": 0
        },
        {
          "_id": "64ce59b10e95aefa2f043fe4",
          "user": "64c896ed66e60ed2b080d404",
          "title": "New Album",
          "description": "Hollywood Top 100",
          "tag": "Public",
          "date": "2023-08-05T14:16:17.824Z",
          "__v": 0
        },
        {
          "_id": "64ce1f580e95aefa2f043fcd",
          "user": "64c896ed66e60ed2b080d404",
          "title": "Updated New Album",
          "description": "Updated Hollywood Top 100",
          "tag": "Public",
          "date": "2023-08-05T10:07:20.512Z",
          "__v": 0
        },
        {
          "_id": "64ce1ff00e95aefa2f043fd5",
          "user": "64c896ed66e60ed2b080d404",
          "title": "My Title",
          "description": "A star is born",
          "tag": "individual",
          "date": "2023-08-05T10:09:52.196Z",
          "__v": 0
        },{
          "_id": "64ce1f580e95aefa2f043fcd",
          "user": "64c896ed66e60ed2b080d404",
          "title": "Updated New Album",
          "description": "Updated Hollywood Top 100",
          "tag": "Public",
          "date": "2023-08-05T10:07:20.512Z",
          "__v": 0
        },
        {
          "_id": "64ce1ff00e95aefa2f043fd5",
          "user": "64c896ed66e60ed2b080d404",
          "title": "My Title",
          "description": "A star is born",
          "tag": "individual",
          "date": "2023-08-05T10:09:52.196Z",
          "__v": 0
        },{
          "_id": "64ce1f580e95aefa2f043fcd",
          "user": "64c896ed66e60ed2b080d404",
          "title": "Updated New Album",
          "description": "Updated Hollywood Top 100",
          "tag": "Public",
          "date": "2023-08-05T10:07:20.512Z",
          "__v": 0
        },
        {
          "_id": "64ce1ff00e95aefa2f043fd5",
          "user": "64c896ed66e60ed2b080d404",
          "title": "My Title",
          "description": "A star is born",
          "tag": "individual",
          "date": "2023-08-05T10:09:52.196Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesInitial)
    
    return(
        <ContextNote.Provider value={{notes, setNotes}}>    
         { props.children }
        </ContextNote.Provider>
    )
 }

 export default StateNote