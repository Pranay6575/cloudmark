import React, { useContext, useEffect } from 'react'
import contextNote from '../context/notes/ContextNote';

const About = () => {
  const a = useContext(contextNote);
  useEffect(()=>{
    a.update();
  }, [])
  return (
    <div>
        This is About {a.state.name} and he is {a.state.age} years old.
    </div>
  )
}

export default About
