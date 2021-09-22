import React, {useContext} from "react";
import {TodosContext} from "../store/todo-context";
import TodoItem from "./TodoItem";
import style from "./Todos.module.css";

const Todos : React.FC = () => {
    const todoCtx = useContext(TodosContext);
    
    return (
        <ul className={style.todos}>
            {todoCtx.items.map(item => 
                <TodoItem key={item.id} text={item.text} onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}/>
            )}
        </ul>
    );
}

export default Todos;