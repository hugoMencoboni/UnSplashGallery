import React, { Component } from 'react';
import  './Gallery.scoped.scss';
import Picture from '../Picture/Picture';
import { connect } from 'react-redux'

class Gallery extends Component {
  state = {
    lenght: 20,
  }

  render() {
    let pictures = [];
    for(let i = 0; i < this.state.lenght; i++) {
      pictures.push((<Picture key={i} position={i} theme={this.props.theme}></Picture>));
    }

    return (<div className="gallery__container">{pictures}</div>);
  }
}

const mapStateToProps = (state) => {
  return {
    theme: state.ChangeThemeReducer.theme
  }
}

export default connect(
  mapStateToProps,
  null
)(Gallery);
