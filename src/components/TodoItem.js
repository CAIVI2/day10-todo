import {useContext, useState} from "react";
import {Button, Modal, Input} from 'antd';

import {TodoContext} from "../contexts/TodoContext";
import {useNavigate} from "react-router";
import {useTodoService} from "../useTodoService";
import {EditOutlined} from "@ant-design/icons";

export function TodoItem(props) {
    const {dispatch} = useContext(TodoContext)
    const navigate = useNavigate();
    const {updateTodo, deleteTodo} = useTodoService();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editText, setEditText] = useState(props.todo.text || "");

    function makeAsDone() {
        const paramTodo = {...props.todo, done: !props.todo.done}
        updateTodo(paramTodo)
            .then((todo) => {
                dispatch({type: "UPDATE_TODO", payload: todo})
            })
    }

    function handleDelete() {
        deleteTodo(props)
            .then(() => {
                dispatch({type: "DELETE_TODO", payload: {id: props.todo.id}})
            })
    }

    function navigateToDetail() {
        navigate(`/todos/${props.todo.id}`);
    }

    function openEditModal() {
        setEditText(props.todo.text || "");
        setIsModalOpen(true);
    }

    function handleModalOk() {
        const paramTodo = {...props.todo, text: editText};
        updateTodo(paramTodo)
            .then((updated) => {
                dispatch({type: "UPDATE_TODO", payload: updated});
                setIsModalOpen(false);
            })
            .catch(() => {
                setIsModalOpen(false);
            });
    }

    function handleModalCancel() {
        setIsModalOpen(false);
    }

    return <div className="todo-row">
        <div className={"todo-item"}>
            <span className={props.todo.done ? "todo-done" : ""} onClick={makeAsDone}>
                {props.todo.text}
            </span>
            <Button className={"todo-edit-button"} size="small" shape="circle" icon={<EditOutlined/>} className={"todo-edit-button"} onClick={openEditModal}/>
        </div>
        <Button type="primary" danger size="small" className={"todo-delete-button"} onClick={handleDelete}>X</Button>
        <Button size="small" type="default" className={"todo-detail-button"} onClick={navigateToDetail}>Detail</Button>

        <Modal title="Edit Todo" open={isModalOpen} onOk={handleModalOk} onCancel={handleModalCancel} okText="Save">
            <Input autoFocus value={editText} onChange={(e) => setEditText(e.target.value)}
                   onPressEnter={handleModalOk}/>
        </Modal>
    </div>;
}