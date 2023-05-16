import { useState } from "react";

export default function TodoList () {
    const [list, setList] = useState([]);
    const [newTodo, setNewTodo] = useState(null);

    const addTodo = (e) => {
        e.preventDefault();
        setList([newTodo,...list]);
        setNewTodo('');
    };

    const handleChange = (e) => {
        if(e.target.style.textDecoration === 'line-through') {
            e.target.style.textDecoration = 'none';
        } else {
            e.target.style.textDecoration = 'line-through';
        };
    };

    return (
        <div className="todo">
            {list.length !== 0 
                && <ul onClick={handleChange}>
                    {list.map(el => <li key={Math.random()*10000} className="todo__item">{el}</li>)}
                </ul>}
            <form>
                <input 
                    type='text' 
                    placeholder='Write here some task' 
                    onChange={(e)=> setNewTodo(e.target.value)}
                    value={newTodo}
                />
                <button className="todo__button" onClick={addTodo}>Add task</button>
            </form> 
        </div>
    );
};