import { useState } from 'react'
import Todo from './components/Todo.jsx'
import Form from './components/Form.jsx';
import FilterButton from './components/FilterButton.jsx';


function App({tasks}) {
const taskList = tasks?.map((task) => <Todo id={task.id} name={task.name} completed = {task.completed} key={task.id}/>);


  return (
    <>
    <Form/>
     <div className="todoapp stack-large">
      <h1 className='text-4xl font-extrabold'>Todo-List Project</h1>
      
      <div className="filters btn-group stack-exception">
        <Form/>
        <Form/>
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role='list'
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
       {/* <Todo name="Eat" id="todo-0" stat="completed"/>
      <Todo name="Sleep"  id="todo-1"  />
      <Todo name="Repeat" id="todo-2"/> */}
      {taskList}
      </ul>
    </div>
    </>
  )
}

export default App
