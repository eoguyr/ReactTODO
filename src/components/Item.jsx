import "./Item.css";
import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App";

const Item = ({id, isDone, content, date}) => {
    const {onUpdate, onDelete} = useContext(
        TodoDispatchContext
    );
    
    const onChangeCheckbox = () => { 
        onUpdate(id);
    };

    const onClickDeleteButton = () => {
        onDelete(id);
    };

    return (
        <div className="Item">
            <input 
            onChange={onChangeCheckbox}
            checked={isDone} 
            type="checkbox"/>
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteButton}>Delete</button>
        </div>
    )
}

export default memo(Item);