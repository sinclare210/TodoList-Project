import { useState } from 'react'
import { nanoid } from 'nanoid';
import Todo from './components/Todo.jsx'
import Form from './components/Form.jsx';
import FilterButton from './components/FilterButton.jsx';



function App(props) {



const [tasks, setTasks] = useState(props.tasks);
  function addTask(name) {
  const newTask = { id: `todo-${nanoid()}`, name, completed: false };
  setTasks([...tasks, newTask]);
}

function toggleTaskCompleted(id){
  const updatedTasks = tasks.map((task) => {
    if(id === task.id){
       return { ...task, completed: !task.completed };
    }
     return task;
  })
   setTasks(updatedTasks);
}

function deleteTask(id) {
  const remainingTasks = tasks.filter((task) => id !== task.id);
  setTasks(remainingTasks);
}

function editTask(id,newName){
  const editedTaskList = tasks.map((task) => {
    if(id === task.id){
      return { ...task, name: newName };
    }
    return task;
  });
   setTasks(editedTaskList);
}


  const taskList =  tasks?.map((task) => <Todo id={task.id} name={task.name} completed = {task.completed} key={task.id} toggleTaskCompleted={toggleTaskCompleted}  deleteTask={deleteTask} editTask={editTask}/>)
  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
const headingText = `${taskList.length} ${tasksNoun} remaining`;






  return (
    <>
   
     <div className="todoapp stack-large">
      <h1 className='text-4xl font-extrabold'>Todo-List Project</h1>
      <div className="filters btn-group stack-exception">
        <Form addTask={addTask}/>
      </div>
      <h2 id="list-heading">{headingText}</h2>
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
