import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {TodoItem} from "../components/TodoItem";
import {List, Empty, Typography} from 'antd';

const {Title} = Typography;

export function DoneListPage() {
    const {state} = useContext(TodoContext)
    const doneTodos = state.filter(item => item.done);

    return <div className="todo-group-container">
        <div className="todo-list-card">
            <Title level={4} className="todo-list-title">Done List</Title>
            <List
                dataSource={doneTodos}
                locale={{
                    emptyText: <Empty className="todo-list-empty"
                                      description={"No done things..."}/>
                }}
                renderItem={(item, index) => (
                    <List.Item key={item.id} className="todo-list-item">
                        <TodoItem todo={item} index={index}/>
                    </List.Item>
                )}
            />
        </div>
    </div>;
}