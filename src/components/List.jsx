import "./List.css"
import Item from "./Item";
import { useState, useMemo, useContext } from "react";
import { TodoStateContext } from "../App";

const List = ({}) => {
    const todos = useContext(TodoStateContext);

    const [search, setSearch]= useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getFilteredData = () => {
        if(search===""){
            return todos;
        }
        return todos.filter((todo)=>
            todo.content
        .toLowerCase()
        .includes(search.toLowerCase()));
    };

    const filteredTodos = getFilteredData();

    const {totalCount, doneCount, notDoneCount} = 
        useMemo(()=>{
            console.log("호출!!")
            const totalCount = todos.length;
        const doneCount = todos.filter(
            (todo)=> todo.isDone).length;
            const notDoneCount = totalCount - doneCount;
            
            return {
                totalCount,
                doneCount,
                notDoneCount
            }
        },[todos]);

    return (<div className="List">
        <h4 className="title">Todo List✨</h4>
        <div>
            <div>total: {totalCount}</div>
            <div>done: {doneCount}</div>
            <div>notDone: {notDoneCount}</div>
        </div>
        <input 
        value={search}
        onChange={onChangeSearch}
        placeholder="Search..."/>
        <div className="todo_wrap">
            {filteredTodos.map((todo)=>{
                return <Item 
                        key={todo.id} 
                        {...todo}/>;
            })}
        </div>
    </div>);
};

export default List;