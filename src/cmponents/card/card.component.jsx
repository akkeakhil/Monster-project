import React from 'react';

import './card.style.css';

export const Card = props =>(
  <div className='card-container'>
  <img alt='monster' src={`https://robohash.org/${props.monster.id+2}?set=set2`}/>
  <h2> {props.monster.name}</h2> 
  <p>{props.monster.email}</p>
  </div>
);
