import React from 'react';

function getScore(rolls) {
  return rolls.reduce((acc, roll) => {
    acc.push(roll[0]  + roll[1])

    return acc;
  }, [])
}

export default ({ rolls }) => <ul className="scoreBoard">
  {getScore(rolls).map((roll, index) =>
    <li key={index}>
      <span className="score">{roll}</span>
      <span className="modifier">X</span>
    </li>
  )}
</ul>