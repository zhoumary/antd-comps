import React, { useState, useEffect } from 'react';
import { Layout, message, Divider, Menu, Breadcrumb, Dropdown } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

import './Menu.css';
import Language from '../assets/地球.svg';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


const MenuLayout = props => {
    const [menus, setMenus] = useState(null);
    const [collapsed, setCollapsed] = useState(false);

    const onClick = ({ key }) => {
        if (key == 3) {
            return;
        }

        message.info(`Click on item ${key}`);
    };

    const userMenu = (
        <Menu onClick={onClick}>
            <Menu.Item key="1">User Center</Menu.Item>
            <Menu.Item key="2">User Settings</Menu.Item>
            <Menu.Item key="3">
                <a href="/">Log Out</a>
            </Menu.Item>
        </Menu>
    );

    useEffect(() => {
        // invoke API to get Permission Session to store in Cookie

    })

    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                    <Menu.Item key="4" className="commonTool">
                        <img src={Language} className="multiLang" />
                    </Menu.Item>
                    <Menu.Item key="5" className="commonTool">
                        <Dropdown overlay={userMenu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Test User
                                </a>
                        </Dropdown>
                    </Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background" collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <UserOutlined />
                                    subnav 1
                                </span>
                            }
                        >
                            <Menu.Item key="1">option1</Menu.Item>
                            <Menu.Item key="2">option2</Menu.Item>
                            <Menu.Item key="3">option3</Menu.Item>
                            <Menu.Item key="4">option4</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                                    <LaptopOutlined />
                                    subnav 2
                                </span>
                            }
                        >
                            <Menu.Item key="5">option5</Menu.Item>
                            <Menu.Item key="6">option6</Menu.Item>
                            <Menu.Item key="7">option7</Menu.Item>
                            <Menu.Item key="8">option8</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub3"
                            title={
                                <span>
                                    <NotificationOutlined />
                                        subnav 3
                                    </span>
                            }
                        >
                            <Menu.Item key="9">option9</Menu.Item>
                            <Menu.Item key="10">option10</Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 600,
                        }}
                    >
                        {props.children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );

}

export default MenuLayout;