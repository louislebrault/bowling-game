import React from 'react';

export default ({ rolls }) => <ul className="scoreBoard">
  {rolls.map((roll, index) =>
    <li key={index}>
      <span className="score">{roll}</span>
      <span className="modifier">X</span>
    </li>
  )}
</ul>