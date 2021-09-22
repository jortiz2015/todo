import React from "react";
import Todo from "../models/todos";
import TodoItem from "./TodoItem";
import style from "./Todos.module.css";

const Todos : React.FC<{items: Todo[]; onRemoveTodo: (id: string) => void}> = (props) => {
    return (
        <ul className={style.todos}>
            {props.items.map(item => 
                <TodoItem key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}/>
            )}
        </ul>
    );
}

export default Todos;