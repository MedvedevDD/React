import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src='https://static3.depositphotos.com/1000454/256/i/600/depositphotos_2567474-stock-photo-wide-panorama-of-french-alps.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>


        </div>
    )
}
export default ProfileInfo;