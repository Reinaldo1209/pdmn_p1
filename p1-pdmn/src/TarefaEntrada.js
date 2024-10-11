import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const TarefaEntrada = () => {
  const [novaTarefa, setNovaTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (event) => {
    event.preventDefault();
    if (novaTarefa.trim() !== '') {
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa('');
    }
  };
  return (
    <div className='container'>
      <form onSubmit={adicionarTarefa}>
        <div className='row'>
          <div className='col-12'>
            <input type='text' className='form-control' placeholder='Digite a descrição de uma nova tarefa' value={novaTarefa} onChange={(e) => setNovaTarefa(e.target.value)}/>
          </div>
          <div className='col mt-3 d-grid gap-2'>
            <button className='btn btn-primary btn-block' type='submit'>OK</button>
          </div>
        </div>
      </form>
      <div className='text-center bg-warning p-5 rounded mt-5'>
        <ul className='list-group'>
          {tarefas.map((tarefa, index) => (
            <li key={index} className='list-group-item mb-3'>
              {tarefa}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};
export default TarefaEntrada;