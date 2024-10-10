import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TarefaEntrada from './TarefaEntrada';

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 offset-lg-3'>
          <TarefaEntrada />
        </div>
      </div>
    </div>
  );
}

export default App;
