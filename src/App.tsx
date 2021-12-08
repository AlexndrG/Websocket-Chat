import React, {ChangeEvent, useEffect, useState} from 'react';
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

    const [message, setMessage] = useState('')
    const [users, setUsers] = useState<UserType[]>([])
/*
    const [users, setUsers] = useState(
        [
            {
                id: 1,
                name: 'Valeria',
                photo: 'https://yt3.ggpht.com/ytc/AKedOLReFYMv0P3Nr5TmcwWjOaVrzzcv3xn6CVEkGo3uqA=s900-c-k-c0x00ffffff-no-rj',
                message: 'Message 1...',
            },
            {
                id: 2,
                name: 'Vasya',
                photo: 'https://www.pngkey.com/png/full/302-3022338_a-blank-face-avatar-formal.png',
                message: 'jdf o9gkjwdfvjp934ujhfl kwjendf9q283 h4ifjn3kl4fn d8 lk32',
            },
            {
                id: 3,
                name: 'Nik',
                photo: 'https://thumbs.dreamstime.com/b/vectorial-blank-face-avatar-7046081.jpg',
                message: 'dfkmv 09du jltkgm dlfvn908dsh vlkj wne4.,rng swdkfjv so9d78h',
            },
            {
                id: 4,
                name: 'Japan',
                photo: 'https://cdn2.iconfinder.com/data/icons/avatars-and-smileys/64/blankface-512.png',
                message: '238974h kjsdncil8qwelkf qkljsn s',
            },
        ]
    )
*/

    useEffect(() => {
        ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

        // ws.onmessage = (messageEvent) => {
        //     console.log(messageEvent)
        // }

        ws.onmessage = (messageEvent) => {
            const newData = JSON.parse(messageEvent.data).map((m: MessageType) => ({
                id: m.userId,
                name: m.userName,
                // photo: m.photo || 'https://p.kindpng.com/picc/s/21-211168_transparent-person-icon-png-png-download.png',
                photo: m.photo || 'https://www.qofa.ru/static/img/noavatar.png',
                message: m.message
            }))
            // setUsers([...users, ...newData])
            setUsers(state =>[...state, ...newData])

            // alert(e.data)
            // console.log(e.data)
            // console.log(messageEvent)
        }
    }, [])

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
                {users.map((u,i) => <ChatBlock key={i} img={u.photo} name={u.name} message={u.message}/>)}
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
