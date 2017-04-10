import React from 'react';
import WaveSVG from './Waves_updated.svg';
import './Wave.scss';

class Wave extends React.Component{
    render(){
        return (
            <div styleName="wave" dangerouslySetInnerHTML={{__html: WaveSVG }} />
        );
    }
}

export default Wave;
