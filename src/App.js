import { useState } from 'react';
import './App.css';
import Smiles from './components/Smiles';
import TodoList from './components/TodoList';
import FormikTask from './components/FormikTask';
import changeTask from './components/changeTask';
import UsersTask from './components/UsersTask';

function App() {

  const [smiles, setSmiles] = useState(true);
  const [todo, setTodo] = useState(false);
  const [form, setForm] = useState(false);
  const [users, setUsers] = useState(false);

  const handleTasks = (e) => {
    const [smilesTask, todoTask, formTask, usersTask] = changeTask(e.target.name);
    setSmiles(smilesTask);
    setTodo(todoTask);
    setForm(formTask);
    setUsers(usersTask);
  };

  return (
    <div className="App">
      <header className='header'>
        <div className='header__decor'>
          <h1 className='header__title'>React</h1>
          <h2 className='header__description'>The library for web and native user interfaces</h2>
        </div>
      </header>
      <div className='navigation'>
        <nav className='navigation__list'>
          <button name='smiles' onClick={handleTasks}>Smiles</button>
          <button name='todo' onClick={handleTasks}>Todo-list</button>
          <button name='formik' onClick={handleTasks}>Formik</button>
          <button name='users' onClick={handleTasks}>Users</button>
        </nav>
      </div>
      <main>
        {smiles && <Smiles />}
        {todo && <TodoList />}
        {form && <FormikTask />}
        {users && <UsersTask />}
      </main>
    </div>
  );
}

export default App;
