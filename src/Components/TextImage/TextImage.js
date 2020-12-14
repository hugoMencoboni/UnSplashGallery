import React from 'react';
import  './TextImage.scoped.scss';

const TextImage = props => {
    let content;
    switch (props.type) {
        case 'h1':
            content = (<h1 className="text">{props.text}</h1>);
            break;
        case 'h2':
            content = (<h2 className="text">{props.text}</h2>);
            break;
        case 'h3':
            content = (<h3 className="text">{props.text}</h3>);
            break;
        case 'h4':
            content = (<h4 className="text">{props.text}</h4>);
            break;
        default:
            content = (<h1 className="text">{props.text}</h1>);
            break;            
    }

    return (<div>{content}</div>);
}

export default TextImage;
