import React from 'react';
import './tile.css';


export default class Tile extends React.Component {

    render() {
        return (
            <div className="grid-container">
                {
                    data.map(item => {
                        return <div className="grid-item">{item.text}</div>
                    })
                }
            </div>

        )
    }
}



let data = [{ id: 1, text: 'Create some basic lines of diff thickness' },
{ id: 2, text: 'Create some basic closed structures, rect, circle' },
{ id: 3, text: 'Create rendering on top' }];