import React, { useState, useEffect, useCallback } from 'react';
import {
    Form,
    Input,
    Button,
    Checkbox,
    Card
} from 'antd';
// import { UserOut}
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
                <h4 className="text-white">
                    Login
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
                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>
                            Remember me
                        </Checkbox>
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>

    );
};

Login.propTypes = {

};

export default Login;
