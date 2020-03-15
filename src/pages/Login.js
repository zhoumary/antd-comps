import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Layout } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './Login.css';
import Language from '../assets/地球.svg';
import SAPLogo from '../assets/sap.svg';


const { Header, Footer, Content } = Layout;

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    onFinish = values => {
        console.log('Received values of form: ', values);
    };


    render() {
        return (
            <div className="root">
                <Layout className="login">
                    <Header className="language">
                        <div className="langSetting">
                            <img src={Language} className="multiLang" />
                        </div>
                    </Header>
                    <Content className="content">
                        <div className="loginTitle">
                            <img src={SAPLogo} className="logo" />
                            <span className="systemTitle">S+ POC</span>
                        </div>
                        <div className="loginContent">
                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={this.onFinish}
                            >
                                <Form.Item
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Username!',
                                        },
                                    ]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                                </Form.Item>

                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Password!',
                                        },
                                    ]}
                                >
                                    <Input
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        placeholder="Password"
                                    />
                                </Form.Item>

                                <Form.Item>
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <Checkbox>Remember me</Checkbox>
                                    </Form.Item>

                                    <a className="login-form-forgot" href="">
                                        Forgot password
                                    </a>
                                </Form.Item>

                                <Form.Item className="loginRegister">
                                    <Button type="primary" htmlType="submit" className="login-form-button" href="/user/welcome">
                                        Log in
                                    </Button>
                                    Or <a href="/user/register">register now!</a>
                                </Form.Item>
                            </Form>
                        </div>
                        <div className="footer">
                            <span>Copyright  2020 思愛普（中國）有限公司</span>
                        </div>
                    </Content>
                </Layout>

            </div>
        );
    }


}


export default Login;
