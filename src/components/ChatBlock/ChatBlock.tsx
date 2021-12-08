import React from 'react'
import s from './ChatBlock.module.css'

export const ChatBlock = () => {
    return (
        <div className={s.container}>

            <div className={s.photoName}>
                <div >
                    <img
                        className={s.photo}
                        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNIe25xV_kwCg1siz7EkBiL3cYXNwDh_6xaQ&usqp=CAU'}
                        alt={'Photo'}
                    />
                </div>

                <div className={s.name}>
                    Name
                </div>
            </div>

            <div className={s.message}>
                Message...
            </div>
        </div>
    )
}