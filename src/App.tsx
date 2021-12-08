import React from 'react';
import s from './App.module.css';
import {ChatBlock} from './components/ChatBlock/ChatBlock';

function App() {
    return (
        <div className={s.container}>

            <div className={s.chatBlock}>
                <ChatBlock/>
                <ChatBlock/>
                <ChatBlock/>
                <ChatBlock/>
            </div>

            <textarea className={s.messageBlock}>
222
            </textarea>

            <div className={s.buttonsBlock}>
                <button>Send</button>
            </div>
        </div>
    );
}

export default App;
