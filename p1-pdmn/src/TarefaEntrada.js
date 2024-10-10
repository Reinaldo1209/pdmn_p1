import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const TarefaEntrada = () => {

    return(
        <div className='container'>
        <form>
          <div className='row mb-3'>
            <div className='col'>
              <input type='text' className='form-control text-center' placeholder='Digite a descrição de uma nova tarefa'/>
            </div>
          </div>
          <div className='row mb-3'>
            <div className='col'>
              <div className='d-grid gap-2'>
                <button className='btn btn-primary' type='submit'>Ok</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
};
export default TarefaEntrada;