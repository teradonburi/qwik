/** @jsxImportSource react */
import React from 'react';
import { qwikify$ } from '@builder.io/qwik-react';
import Button from '@mui/material/Button';

// Create React component standard way
function Greetings() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>Hello from React</p>
      <Button variant="contained" onClick={() => setCount(count + 1)}>Count {count}</Button>
    </div>
  );
}
 
// Specify eagerness to hydrate component on hover event.
export const QGreetings = qwikify$(Greetings, { eagerness: 'hover' });