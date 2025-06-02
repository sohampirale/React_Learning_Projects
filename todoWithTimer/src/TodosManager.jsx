import React, { useState } from 'react'

import PriorityTodosTable from './components/PriorityTodosTable';

//utils
import RenderSelections from './utils/RenderSelections'
import TodosTable from './components/TodosTable';
import convertSecMinHrToSec from './utils/convertSecMinHrToSec';
import randomIdGenerator from './utils/randomIdGenerator';

function TodosManager() {
    const [Todos, setTodos] = useState([[], [], [], [], []]);
    const [Task, setTask] = useState('');
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0)
    const [hours, setHours] = useState(0);
    const [priority, setPriority] = useState(5);
    const [timelySubmission, setTimelySubmissions] = useState([{ _id: '1234', task: "FIrst timely submission",timeSec: 124}]);
    const [lateSubmissions, setLateSubmissions] = useState([{_id: '5678',task: "First late submission",timeSec: 351}])

    function addNewTodo() {
        console.log('inside addNewTodo  sec = ' + seconds + ' minutes = ' + minutes + ' hours = ' + hours);

        const timeSec = convertSecMinHrToSec(seconds, minutes, hours);

        console.log('timeSec = ' + timeSec);

        const task = Task;
        const Todo = {
            _id: randomIdGenerator(),
            task,
            timeSec
        }

        const newTodos = [...Todos];
        newTodos[priority - 1].push(Todo)
        setTodos(newTodos);
        console.log('New Todo Added = ' + JSON.stringify(Todos));
    }

    console.log('Todos = ' + JSON.stringify(Todos));
    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
            <input
                type="text"
                placeholder='Enter new Todo'
                onKeyUp={(e) => setTask(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            /><br />

            <div className="flex gap-2 mb-2">
                <RenderSelections parameterName="secs" parameter={seconds} setParameter={setSeconds} length={60} min={0} />
                <RenderSelections parameterName="mins" parameter={minutes} setParameter={setMinutes} length={60} min={0} />
                <RenderSelections parameterName="hr" parameter={hours} setParameter={setHours} length={24} min={0} />
            </div>
            <label className="block mb-2 font-semibold">
                Priority
                <RenderSelections parameterName="Priority" parameter={priority} setParameter={setPriority} length={5} min={1} />
            </label>
            <button
                onClick={addNewTodo}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-6 transition"
            >
                Add To-do
            </button>
            <div className="mt-4">
                <TodosTable 
                    Todos={Todos} 
                    setTodos={setTodos} 
                    timelySubmissions={timelySubmission} 
                    setTimelySubmissions={setTimelySubmissions}
                    lateSubmissions={lateSubmissions}
                    setLateSubmissions={setLateSubmissions}
                />
            </div>
        </div>
    )
}

export default TodosManager;
