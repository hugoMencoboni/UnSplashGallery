import React from 'react';
import  './Picture.scoped.scss';
import { uuid } from 'uuidv4';

const Picture = props => {
    const id = uuid();
    let theme = '';
    let classes = [`w-${props.w || 1}`, `h-${props.h || 1}`];
    const src = `https://source.unsplash.com/${(props.w || 1)*500}x${(props.h || 1)*500}/?${theme || 'random'}&${id}`
    return (
        <div id={id} className={classes.join(' ') + ' picture__container'}>
            <img loading="eager" src={src} alt={theme + ' picture'} className={`fade-in-${props.position}`}/>            
        </div>
    );
}

export default Picture;
