import { useState } from 'react';
import Form from './Components/Form';

function App() {
  const {height, setHeight} = useState(0);
  const {weight, setWeight} = useState(0);

  return (
    <div className="container">
      <h1>Calculadora de IMC</h1>
      <Form/>
    </div>
  )
}

export default App;