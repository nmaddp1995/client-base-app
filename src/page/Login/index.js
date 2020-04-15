import React, { useState, useEffect, useCallback } from 'react';
import {
    Form,
    Input,
    Button,
    Checkbox,
    Card,
    Col,
    Row
} from 'antd';
import { UserOutlined, LockOutlined, FacebookOutlined, GoogleOutlined, DownloadOutlined } from '@ant-design/icons';
import cx from 'classnames';

import styles from './styles.module.scss';
import './styles.scss';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
};

const rightItem = {
    wrapperCol: { offset: 16, span: 16 }
};

const Login = () => {
    const onFinish = useCallback((values) => {
        console.log('values', values);
    }, []);

    const onFinishFailed = useCallback((errInfo) => {
        console.log('errInfo', errInfo);
    }, []);
    return (
        <div className={styles['container']}>
            <Card className={styles['card-login']}>
                <h4 className={styles['title']}>
                    LOGIN
                </h4>
                <Form
                    {...layout}
                    name="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    className="login-form"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!'
                            }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item {...tailLayout} name="remember" valuePropName="checked" style={{ marginTop: '-15px' }}>
                        <Checkbox className="text-white">
                            Remember me
                        </Checkbox>
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Form.Item>
                    <Form.Item {...rightItem} style={{ marginTop: '-15px' }}>
                        <a href="https://www.google.com.vn/" target="_blank" rel="noopener noreferrer" className="text-white">
                            Forgot password?
                        </a>
                    </Form.Item>
                </Form>
                <div className="mt-n3">
                    <div className="d-flex justify-content-center text-white">
                        Or login with
                    </div>
                    <Row className="d-flex justify-content-center my-3">
                        <Button type="primary" shape="round" icon={<FacebookOutlined />} size="middle" className="mr-3">
                            Facebook
                        </Button>
                        <Button type="primary" shape="round" icon={<GoogleOutlined />} size="middle">
                            Google
                        </Button>
                    </Row>
                </div>
            </Card>
        </div>

    );
};

Login.propTypes = {

};

export default Login;
