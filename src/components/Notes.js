import React, {useContext} from 'react'
import contextNote from '../context/notes/ContextNote';
import NoteItem from './NoteItem';

const Notes = () => {
    const context = useContext(contextNote);
  const {notes ,setNotes}  = context;
  return (
    <div className='row my-3'>
            <h2>Your Notes</h2>
      {notes.map((note)=>{
        return <NoteItem note = {note} />
      })}
    </div>
  )
}

export default Notes;
