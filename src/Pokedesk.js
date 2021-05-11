import React, { Component } from 'react';
import Pokecard from './Pokecard.js';
import './Pokedesk.css';

class Pokedesk extends Component {
    render() {
        let title;
        if (this.props.isWinner) {
            title = <h1 className='Pokedesk-Winner'>Winning Side</h1>
        }
        else {
            title = <h1 className='Pokedesk-Loser'>Loosing Side</h1>
        }
        return(
            <div className="Pokedesk">
                {title}
                <h4>Total experience: {this.props.exp}</h4>
                <div className="Pokedesk-cards">
                    {this.props.pokemon.map((p) => (
                    <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Pokedesk;