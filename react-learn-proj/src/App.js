import './App.css';
import Header from './components/Header.js';
import React from 'react'
import { useState } from 'react'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask';



const App = () => {

  const [showAddTask, setShowAddTask] = useState(true);
  const [tasks, setTasks] = useState([
    {
      id:1,
      text: 'Doctors Appointmment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id:2,
      text: 'Meeting at school',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id:3,
      text: 'Food Shopping',
      day: 'Feb 6th at 3pm',
      reminder: false,
    }
  ])
//add Task
  const addTask = (task) => {
    //get a list of all ids
    const ids = tasks.map(task => {
      return task.id
    });
    //get the highest id of them all
    let max = Math.max(...ids);
    //increment by one
    max += 1;
    const newTask = {max, ...task};
    setTasks([...tasks, newTask]);
    
  }
//Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
      (task.id === id ? {...task, reminder: 
        !task.reminder} : task)))
    
    console.log(id)
  }

  return (
    <div className="container">
      <Header onAdd = {() => setShowAddTask(!showAddTask)} showAddTask = {showAddTask}/>
      {showAddTask && <AddTask onAdd = {addTask} showAdd = {showAddTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks = {tasks} 
        onDelete = {deleteTask} 
        onToggle = {toggleReminder}/>
      ) : (
        'No Tasks To Show'
      )} 
    </div>
  );
}

//class based component
// We do need to import react so  
// class App extends React.Component {
//   render(){
//     return (
//       <Header />
//     )
//   }
// }

export default App;
