import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const TarefaLista = () => {
    const tarefas = [
        { id: 1, descricao: 'Preparar aula de programação' },
        { id: 2, descricao: 'Fazer feira' },
        { id: 3, descricao: 'Preparar marmitas' },
    ];

    return (
        <div className='container'>
            <div className='text-center bg-warning p-3 rounded'>
                <ul className='list-group'>
                    {tarefas.map((tarefa) => (
                        <li key={tarefa.id} className='list-group-item mb-3'>
                            {tarefa.descricao}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TarefaLista;