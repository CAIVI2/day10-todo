import {useContext} from "react";
import {TodoItem} from "./TodoItem";
import {TodoContext} from "../contexts/TodoContext";
import { List, Empty, Typography } from 'antd';

const { Title } = Typography;

export function TodoGroup() {
    const {state} = useContext(TodoContext)

    return <div>
        <Title level={4} className={"title"}>Todo List</Title>
        <List className={"todo-row"}
            dataSource={state}
            locale={{ emptyText: <Empty description={"Add the things you need to do today..."} /> }}
            renderItem={(item, index) => (
                <List.Item key={item.id}>
                    <TodoItem todo={item} index={index} />
                </List.Item>
            )}
        />
    </div>;
}