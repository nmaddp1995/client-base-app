import React from 'react';
import {
    Form,
    Input,
    Button,
    Card,
    Row
} from 'antd';
import { useDispatch } from 'react-redux';

import styles from './styles.module.scss';
import './styles.scss';
import { signupSaga } from '../../module/action/user';

const layout = {
    labelCol: { span: 10 },
    wrapperCol: { span: 14 }
};

const tailLayout = {
    wrapperCol: { offset: 10, span: 14 }
};

const MIN_PASSWORD_LENGTH = 6;

const initialValues = {
    username: 'nmaddp1995',
    email: 'a@gmail.com',
    password: '123456789',
    confirmPassword: '123456789'
};

const Signup = () => {
    const dispatch = useDispatch();
    const onSignup = (values) => {
        const { username, email, password } = values;
        dispatch(signupSaga({
            username, email, password
        }));
    };

    const onValidateFailed = (errInfo) => {
        console.log(errInfo);
    };


    return (
        <div className={styles['container']}>
            <Card className={styles['card-signup']}>
                <h4 className={styles['title']}>
                    Signup
                </h4>
                <Form
                    {...layout}
                    name="signup-form"
                    initialValues={initialValues}
                    onFinish={onSignup}
                    onFinishFailed={onValidateFailed}
                    className="signup-form"
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
                        label="Email"
                        name="email"
                        defaultValue="a@gmail.com"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!'
                            },
                            {
                                type: 'email',
                                message: 'The input is not valid email!'
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!'
                            },
                            {
                                validator: (rule, value) => {
                                    if (!value || value.length >= MIN_PASSWORD_LENGTH) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Password has at least 6 characters'));
                                }
                            }
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label="Confirm Password"
                        name="confirmPassword"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please input your confirm password!'
                            },
                            ({ getFieldValue }) => ({
                                validator: (rule, value) => {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                }
                            })
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Signup
                        </Button>
                    </Form.Item>
                </Form>
                <Row className="mt-4 justify-content-center">
                    <span>
                        Already have an account? &nbsp;
                    </span>
                    <a href="/login">Login</a>
                </Row>
            </Card>
        </div>

    );
};

Signup.propTypes = {

};

export default Signup;
