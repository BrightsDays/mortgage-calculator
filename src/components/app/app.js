import React, { useState } from 'react';
import Form from '../form';
import Results from '../results';
import './app.sass';

const App = () => {
  
  return (
    <div className="mortgage-calc">
      <h1 className="mortgage-calc__header">Ипотечный калькулятор 🏡</h1>
      <Form />
      <Results />
    </div>
  );
}

export default App;