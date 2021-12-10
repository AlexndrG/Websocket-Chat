import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import s from './App.module.css';
import {ChatBlock} from './components/ChatBlock/ChatBlock';

type MessageType = {
    userId: number
    userName: string
    photo: string
    message: string
}

function App() {
    const endRef = useRef<null | HTMLDivElement>(null)

    const [ws, setWs] = useState<WebSocket>()
    const [message, setMessage] = useState('')
    const [users, setUsers] = useState<MessageType[]>([])

    if (ws) {
        ws.onmessage = (messageEvent) => {
            const newData = JSON.parse(messageEvent.data)
            setUsers([...users, ...newData])

            endRef.current?.scrollIntoView({behavior: 'smooth'})
        }
    }

    useEffect(() => {
        const localWs = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
        setWs(localWs)
    }, [])

    const onTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }

    const onButtonClick = () => {
        if (ws) {
            ws.send(message)
            setMessage('')
        }
    }

    return (
        <div className={s.container}>

            <div className={s.chatBlock}>
                {users.map((u, i) =>
                    <ChatBlock
                        key={i}
                        img={u.photo || 'https://www.qofa.ru/static/img/noavatar.png'}
                        name={u.userName}
                        message={u.message}
                    />)}
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
    )
}

export default App;
