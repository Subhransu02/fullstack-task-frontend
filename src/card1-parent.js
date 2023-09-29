import React, {useEffect, useState} from 'react';
import BasicExample1 from './card1';
import axios from 'axios';


export default function Parent1(){
    const [messages, getMessages] = useState([]);
    const url = 'http://localhost:3000/api/name/firstname/5';

    useEffect(() =>{
        getAllMessages();
    }, []);

    const getAllMessages = () =>{
        axios.get('http://localhost:3000/api/name/firstname/5')
        .then((response) => {
            const allMessages = response.data.firstNames;
            getMessages(allMessages);
        })
        .catch(error => console.error(`Error: ${error}`));
    }
// console.log(messages);
    return(
        <div>
            <BasicExample1 messages={messages}/>
        </div>
    )
}