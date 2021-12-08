import React from 'react';
import s from './App.module.css';
import {ChatBlock} from './components/ChatBlock/ChatBlock';

function App() {
    return (
        <div className={s.container}>

            <div className={s.chatBlock}>
                <ChatBlock
                    img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNIe25xV_kwCg1siz7EkBiL3cYXNwDh_6xaQ&usqp=CAU'}
                    name={'Valeria'}
                    message={'Message1'}
                />
                <ChatBlock
                    img={'https://www.pngkey.com/png/full/302-3022338_a-blank-face-avatar-formal.png'}
                    name={'Vasya'}
                    message={'Message2'}
                />
                <ChatBlock
                    img={'https://thumbs.dreamstime.com/b/vectorial-blank-face-avatar-7046081.jpg'}
                    name={'Nik'}
                    message={'Message3'}
                />
                <ChatBlock
                    img={'https://cdn2.iconfinder.com/data/icons/avatars-and-smileys/64/blankface-512.png'}
                    name={'Japan'}
                    message={'Message4'}
                />
            </div>


            <textarea className={s.messageBlock}>
                New message
            </textarea>


            <div className={s.buttonsBlock}>
                <button>Send</button>
            </div>
        </div>
    );
}

export default App;
