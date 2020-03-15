import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Layout } from 'antd';
import {
    Form,
    Input,
    Select,
    Checkbox,
    Button
} from 'antd';

import './Register.css';
import Language from '../assets/地球.svg';
import SAPLogo from '../assets/sap.svg';


const { Header, Footer, Content } = Layout;

const { Option } = Select;

const Register = () => {

    const [form] = Form.useForm();

    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );




    return (
        <div className="root">
            <Layout className="register">
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
                    <div className="registerContent" >
                        <Form

                            className="register-form"
                            form={form}
                            name="register"
                            onFinish={onFinish}
                            initialValues={{}}
                            scrollToFirstError
                        >
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                ]}
                            >
                                <Input
                                    placeholder="E-mail"
                                    style={{
                                        width: '100%',
                                    }}
                                />
                            </Form.Item>

                            <Form.Item
                                name="phone"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your phone number!',
                                    },
                                ]}
                            >
                                <Input
                                    addonBefore={prefixSelector}
                                    style={{
                                        width: '100%',
                                    }}
                                    placeholder="Phone Number"
                                />
                            </Form.Item>

                            <Form.Item
                                name="wechat"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your wechat number!',
                                    },
                                ]}
                            >
                                <Input
                                    placeholder="WeChat"
                                    style={{
                                        width: '100%',
                                    }}
                                />
                            </Form.Item>


                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input.Password
                                    placeholder="Password"
                                />
                            </Form.Item>

                            <Form.Item
                                name="confirm"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm your password!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(rule, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }

                                            return Promise.reject('The two passwords that you entered do not match!');
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password
                                    placeholder="Confirm Password"
                                />
                            </Form.Item>

                            <Form.Item name="agreement" valuePropName="checked" >
                                <Checkbox>
                                    I have read the <a href="">agreement</a>
                                </Checkbox>
                            </Form.Item>
                            <Form.Item
                                className="registerOrNot"
                            >
                                <Button type="primary" htmlType="submit" className="register-form-button">
                                    Register
                                </Button>
                                <a href="/">Sign in with an existing account</a>
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


export default Register;
