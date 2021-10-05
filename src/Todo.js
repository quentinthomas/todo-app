import React, { useEffect, useState } from 'react';
import './Todo.css';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Button, Modal,  } from '@material-ui/core';
import { Backspace, SettingsInputAntenna } from '@material-ui/icons';
import db from './firebase';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),

    },
}));


function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();

    const handleClose = () => {
        setOpen(true);
    };

    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, {merge: true})
        setOpen(false);
    }
    return (
        <>
        <Modal 
        open={open}
        onClose={e => setOpen(false)}
        >
            <div className={classes.paper}>
                
                <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
                
                <Button onClick={updateTodo}>Update</Button>
            </div>
        </Modal>
        <List>
            <ListItem>
                <ListItemAvatar>
                   
                </ListItemAvatar>
                <ListItemText primary="To do..." secondary={props.todo.todo} />
                </ListItem>
                <div className="todo__buttons">
                <button classname="todo__edit" onClick={e => setOpen(true)}>Edit</button>
            
            <Backspace className="todo__delete" onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
            </div>
            
            
            
        </List>
        </>
    )
}

export default Todo
