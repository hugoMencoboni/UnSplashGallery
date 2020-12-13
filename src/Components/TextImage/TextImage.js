import React from 'react';
import  './TextImage.scoped.scss';

const TextImage = props => {
    return (
        <div className="text">
        {props.text }
    </div>
    );
}

export default TextImage;
