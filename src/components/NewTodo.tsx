import React, {useRef, useContext} from "react";
import { TodosContext } from "../store/todo-context";
import style from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
    const todoCtx = useContext(TodosContext);
    const textTodo = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const t = textTodo.current!.value;
        if (t.trim().length === 0)
            return;
        todoCtx.addTodo(t);
    };

    return (
        <form onSubmit={submitHandler} className={style.form}>
            <label htmlFor="text">Todo</label>
            <input type="text" id="text" ref={textTodo}/>
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodo;