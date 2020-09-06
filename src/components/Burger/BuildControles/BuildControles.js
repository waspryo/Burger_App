import React from 'react';

import classes from './BuildControles.css';
import BuildControl from './BuildControle/BuildControle';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'Bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
]

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map(v => (
      <BuildControl key={v.label} label={v.label} />
    ))}
  </div>
)


export default buildControls