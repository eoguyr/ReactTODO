import "./Editor.css";
import { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../App";

const Editor = ({}) => {
    const {onCreate} = useContext(TodoDispatchContext);
    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const onsubmit = () => {
        if (content === "") {
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    };

    const onKeydown = (e)=> {
        if (e.keyCode ===13) {
            onsubmit();
        }
    }

    return (<div className="Editor">
        <input
        ref={contentRef} 
        value={content}
        onKeyDown={onKeydown}
        onChange={onChangeContent}
        placeholder="New Todo..."/>
        <button onClick={onsubmit}>Add</button>
            </div>);
};

export default Editor;