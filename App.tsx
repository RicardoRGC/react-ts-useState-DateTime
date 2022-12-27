import * as React from 'react';
import './style.css';

export default function App() {
  const [count, setCounter] = React.useState(0);
 const [hora, setHora] = React.useState(new Date());
  return (
    <div>
      <button  onClick={()=>{ 
        setCounter(count+1)
        setHora(new Date())
      } } >count</button>
      <h1>Hello StackBlitz!</h1>
      <p>Contador {count} Hora {hora.toLocaleDateString() }{hora.toLocaleTimeString()} </p>
    </div>
  );
}
