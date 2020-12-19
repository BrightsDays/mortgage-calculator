import React from 'react';
import Form from '../form';
import './app.sass';

const App = () => {
  
  return (
    <div className="mortgage-calc">
      <h1 className="mortgage-calc__header">Ипотечный калькулятор 🏡</h1>
      <Form />
    </div>
  );
}

export default App;