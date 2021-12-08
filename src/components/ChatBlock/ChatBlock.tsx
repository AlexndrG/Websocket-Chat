import React from 'react'
import s from './ChatBlock.module.css'

type PropsType = {
    img: string
    name: string
    message: string
}

export const ChatBlock = (props: PropsType) => {
    return (
        <div className={s.container}>

            <div className={s.photoName}>
                <div>
                    <img className={s.photo} src={props.img} alt={'Avatar'}/>
                </div>

                <div className={s.name}>
                    {props.name}
                </div>
            </div>

            <div className={s.message}>
                {props.message}
            </div>
        </div>
    )
}