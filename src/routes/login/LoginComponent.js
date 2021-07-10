import React from 'react';
import { Column } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';
import 'antd/dist/antd.css';
import { Button, Form, Input } from 'antd';
import { IconLogo } from '../../assets/icons';
import { signin } from '../../redux/actions/userActions';

const useStyles = createUseStyles((theme) => ({
    container: {
        backgroundColor: theme.color.darkGrayishBlue,
        height: '100vh',
    },
    block: {
        width: 364,
        padding: 32,
        borderRadius: '6px',
        backgroundColor: theme.color.baseWhite,
        '@media (max-width: 425px)': {
            width: 300
        }
    }
}));

function LoginComponent() {
    const theme = useTheme();
    const classes = useStyles({ theme });
    const dispatch = useDispatch();

    const onFinish = (values) => {
        dispatch(signin(values.username, values.password));
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Column className={classes.container}
            vertical='center'
            horizontal='center'>
            <Column className={classes.block}>
                <div style={{ paddingBottom: 32, paddingTop: 8 }}>
                    <IconLogo fill={'rgba(0, 0, 0, 0.85)'} />
                </div>
                <Form
                    name="basic"
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    requiredMark={false}
                    >
                    <Form.Item
                        label="Логин"
                        name="username"
                        rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите ваше имя пользователя!',
                        },
                        ]}
                    >
                        <Input size="large" placeholder="Введите логин" />
                    </Form.Item>

                    <Form.Item
                        label="Пароль"
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите свой пароль!',
                        },
                        ]}
                    >
                        <Input.Password size="large" placeholder="Введите пароль" />
                    </Form.Item>

                    <Form.Item style={{ paddingTop: 32}}>
                        <Button type="primary" size="large" htmlType="submit" block>
                            Войти
                        </Button>
                    </Form.Item>
                </Form>
            </Column>
        </Column>
    );
}

export default LoginComponent;