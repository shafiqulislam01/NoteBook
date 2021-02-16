import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {
    
    const [expand, setExpand] = useState(false);

    const [note, setNote] = useState({
        title: '',
        content: ''
    });

    const InputEvent = (event) => {
        // const value = event.target.value;
        // const name = event.target.name;
        const { name, value } = event.target;

        setNote((preVal) => {
            return {
                ...preVal,
                [name]: value,

            };
        });
        // console.log(note);
    };

    const addEvent = () => {
        props.passNote(note);
        
        setNote({
            title: '',
            content: ''
        });
    };

    const eventExpand = () =>{
        setExpand(true);
    }

    const eventExpand2 = () =>{
        setExpand(false);
    }

    return (
        <>
            <div className='main_note' onDoubleClick={eventExpand2}>
                <form>

              {  expand? (
                    <input
                        type='text'
                        name='title'
                        value={note.title}
                        onChange={InputEvent}
                        placeholder='Title'
                        autoComplete='off' /> ) :null}

                    <textarea rows='' column=''
                        name='content'
                        value={note.content}
                        onChange={InputEvent}
                        placeholder='Write a note...'
                        onClick={eventExpand}></textarea>

                </form>

              { expand? ( <Button onClick={addEvent} >
                    <AddIcon className='plus_sign' />
                </Button> ) :null}
            </div>
        </>
    )
}

export default CreateNote;