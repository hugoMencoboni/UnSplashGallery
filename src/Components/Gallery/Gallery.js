import React, { Component } from 'react';
import  './Gallery.scoped.scss';
import Picture from '../Picture/Picture';

class Gallery extends Component {
  state = {
    lenght: 20,
  }

  render() {
    let pictures = [];
    for(let i = 0; i < this.state.lenght; i++) {
      pictures.push((<Picture key={i} position={i}></Picture>));
    }

    return (<div className="gallery__container">{pictures}</div>);
  }
}

export default Gallery;
