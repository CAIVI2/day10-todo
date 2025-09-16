import {useContext} from "react";
import {TodoItem} from "./TodoItem";
import {TodoContext} from "../contexts/TodoContext";
import { List, Empty, Typography } from 'antd';

const { Title } = Typography;

export function TodoGroup() {
    const {state} = useContext(TodoContext)

    return <div className="todo-group-container">
        <div className="todo-list-card">
            <Title level={4} className="todo-list-title">Todo List</Title>
            <List
                dataSource={state}
                locale={{ emptyText: <Empty className="todo-list-empty" description={"Add the things you need to do today..."} /> }}
                renderItem={(item, index) => (
                    <List.Item key={item.id} className="todo-list-item">
                        <TodoItem todo={item} index={index} />
                    </List.Item>
                )}
            />
        </div>
    </div>;
}