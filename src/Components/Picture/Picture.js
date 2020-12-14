import React from 'react';
import  './Picture.scoped.scss';
import { uuid } from 'uuidv4';

const Picture = props => {
    const id = uuid();
    const src = `https://source.unsplash.com/500x500/?dog&${id}`
    return (
        <div id={id} className="picture__container">
            <img src={src} alt=""/>            
        </div>
    );
}

export default Picture;
