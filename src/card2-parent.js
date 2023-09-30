import React, {useEffect, useState} from 'react';
import BasicExample2 from './card2';
import axios from 'axios';


export default function Parent1(){
    const [messages, getMessages] = useState([]);

    useEffect(() =>{
        getAllMessages();
    }, []);

    const getAllMessages = () =>{
        axios.get('https://fullstack-task-backend.onrender.com//api/name/firstname/5')
        .then((response) => {
            const allMessages = response.data.firstNames;
            getMessages(allMessages);
        })
        .catch(error => console.error(`Error: ${error}`));
    }
// console.log(messages);
    return(
        <div>
            <BasicExample2 messages={messages}/>
        </div>
    )
}