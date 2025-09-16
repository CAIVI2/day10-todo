import React from 'react';
import {Row, Col, Card, Typography, Avatar, List, Button, Divider, Tag, Space} from 'antd';

const {Title, Paragraph, Text} = Typography;

const features = [
    'Add, delete and toggle todos',
    'Persisted via mock API',
    'Responsive centered layout with Ant Design',
    'Accessible actions and clear visual feedback',
];

const contributors = [
    {name: 'Victor Cai', role: 'Full Stack'},
];

export function AboutPage() {
    return (
        <Row justify="center" style={{padding: 24}}>
            <Col xs={24} sm={20} md={16} lg={12} xl={10}>
                <Card>
                    <Title level={3}>About This Todo App</Title>
                    <Paragraph>
                        This sample Todo application demonstrates a small React app built with
                        Ant Design components for layout and controls. It focuses on a clean
                        user experience with centered layout, easy-to-use forms, and a simple
                        reducer-based state management for todos.
                    </Paragraph>
                    <Paragraph>
                        Key ideas showcased here include using Ant Design's Layout, List,
                        Input and Button components for a consistent UI, and keeping
                        application logic in small reusable hooks and reducers.
                    </Paragraph>
                    <Divider/>
                    <Title level={5}>Features</Title>
                    <List
                        size="small"
                        dataSource={features}
                        renderItem={(item) => (
                            <List.Item>
                                <Text>{item}</Text>
                            </List.Item>
                        )}
                        style={{marginBottom: 12}}
                    />
                    <Divider/>
                    <Title level={5}>Contributors</Title>
                    <List
                        size="small"
                        dataSource={contributors}
                        renderItem={(person) => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={
                                        <Avatar>{person.name.split(' ').map(n => n[0]).slice(0, 2).join('')}</Avatar>}
                                    title={<Text strong>{person.name}</Text>}
                                    description={<Text type="secondary">{person.role}</Text>}
                                />
                            </List.Item>
                        )}
                    />
                    <Divider/>
                    <Space direction="vertical" style={{width: '100%'}}>
                        <div>
                            <Text strong>Version: </Text>
                            <Tag color="blue">v1.0.0</Tag>
                        </div>
                        <div>
                            <Button type="primary" style={{marginRight: 8}} href="/">Go Home</Button>
                            <Button type="default" href="mailto:caivi2@oocl.com">Contact</Button>
                        </div>
                    </Space>
                </Card>
            </Col>
        </Row>
    );
}