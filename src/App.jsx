import { useState } from 'react'
import Todo from './components/Todo.jsx'
import Form from './components/Form.jsx';
import FilterButton from './components/FilterButton.jsx';



function App(props) {

const [tasks, setTasks] = useState(props.tasks);
  function addTask(name) {
  const newTask = { id: "id", name, completed: false };
  setTasks([...tasks, newTask]);
}




  return (
    <>
   
     <div className="todoapp stack-large">
      <h1 className='text-4xl font-extrabold'>Todo-List Project</h1>
      <div className="filters btn-group stack-exception">
        <Form addTask={addTask}/>
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role='list'
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
       {/* <Todo name="Eat" id="todo-0" stat="completed"/>
      <Todo name="Sleep"  id="todo-1"  />
      <Todo name="Repeat" id="todo-2"/> */}
      {tasks?.map((task) => <Todo id={task.id} name={task.name} completed = {task.completed} key={task.id}/>)}
      </ul>
    </div>
    </>
  )
}

export default App
