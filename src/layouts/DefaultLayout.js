import {NavLink, Outlet} from "react-router";
import {Layout, Menu} from "antd";
import 'antd/dist/reset.css';

const {Header, Content, Footer} = Layout;

export function DefaultLayout() {
    return (
        <Layout style={{minHeight: '100vh'}}>
            <Header style={{padding: 0}}>
                <div>
                    <div className="logo"/>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        selectable={false}
                        items={[
                            {key: 'home', label: <NavLink to="/">Home</NavLink>},
                            {key: 'done', label: <NavLink to="/doneTodos">Done List Page</NavLink>},
                            {key: 'about', label: <NavLink to="/aboutUs">About US</NavLink>},
                        ]}
                    />
                </div>
            </Header>
            <Content style={{padding: '24px'}}>
                <Outlet/>
            </Content>
            <Footer style={{textAlign: 'center'}}>
                @Copyright Victor 2025
            </Footer>
        </Layout>
    );
}