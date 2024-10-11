import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TarefaEntrada from './TarefaEntrada';
import TarefaLista from './TarefaLista';

function App() {
  return (
    <div className='container'>
      &nbsp;
      <div className='row'>
        <div className='col-lg-6 offset-lg-3'>
          <TarefaEntrada />
        </div>
      </div>
    </div>
  );
}

export default App;
