import React, { useState } from 'react'
import Header from './Header'
import CreateNote from './CreateNote'
import Note from './Note'
import Footer from './Footer'

const App = () => {

  const [addItem, setAddItem] = useState([]);

  const addNote = (note) =>{
    // alert('I am clicked');

    setAddItem((preval) => {
        return [...preval,note];
    });
    // console.log(note);
  };

  const onDelete = (id) =>{
      setAddItem((preval)=>{
          return preval.filter((val,index)=>{
            return index !== id;
          })
      });
  };

  return (
    <>
      <Header />
      <CreateNote 
        passNote={addNote}
      /> 

      {addItem.map((val, index) => {
          return <Note 
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
      })}
      
      <Footer />
    </>
  );
};

export default App;