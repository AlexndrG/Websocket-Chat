import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import s from './App.module.css';
import {ChatBlock} from './components/ChatBlock/ChatBlock';

type UserType = {
    id: number
    name: string
    photo: string
    message: string
}

type MessageType = {
    userId: number
    userName: string
    photo: string
    message: string
}

let ws: WebSocket

function App() {
    const endRef = useRef<null | HTMLDivElement>(null)

    const [message, setMessage] = useState('')
    const [users, setUsers] = useState<UserType[]>([])

    useEffect(() => {
        ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

        ws.onmessage = (messageEvent) => {
            const newData = JSON.parse(messageEvent.data).map((m: MessageType) => ({
                id: m.userId,
                name: m.userName,
                photo: m.photo || 'https://www.qofa.ru/static/img/noavatar.png',
                message: m.message
            }))
            setUsers(state => [...state, ...newData])

                endRef.current?.scrollIntoView({behavior: 'smooth'})
        }
    }, [])

    // useEffect(()=>{
    //     if (endRef.current) {
    //         endRef.current.scrollIntoView({behavior: 'smooth'})
    //     }
    // },[users])


    const onTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }

    const onButtonClick = () => {
        ws.send(message)
        setMessage('')
    }

    return (
        <div className={s.container}>

            <div className={s.chatBlock}>
                {users.map((u, i) => <ChatBlock key={i} img={u.photo} name={u.name} message={u.message}/>)}
                <div ref={endRef}/>
            </div>

            <textarea
                className={s.messageBlock}
                value={message}
                placeholder={'New message'}
                onChange={onTextareaChange}
            />

            <div className={s.buttonsBlock}>
                <button
                    onClick={onButtonClick}
                >
                    Send
                </button>
            </div>
        </div>
    );
}

export default App;
