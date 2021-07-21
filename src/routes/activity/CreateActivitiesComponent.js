import React from 'react';
import { Column } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import 'antd/dist/antd.css';
import { Button, Input, Form } from 'antd';

const useStyles = createUseStyles((theme) => ({
    container: {
      width: 300,
    },
    lastRow: {
      marginTop: 30
    },
    button: {
      width: 192,
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    tasks: {
        marginTop: 0,
        '@media (max-width: 1024px)': {
            marginTop: 30
        }
    }
}));

function CreateActivitiesComponent() {
    const theme = useTheme();
    const classes = useStyles({ theme });

    const onFinish = (values) => {
        console.log(values);
        // dispatch(createProduct(values.username, values.password));
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Column className={classes.container}>
            <Form
                name="basic"
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                requiredMark={false}
                >
                    <Form.Item
                        label="Название"
                        name="name"
                        rules={[
                        {
                            required: true,
                            message: 'Пожалуйста заполните все поля!',
                        },
                        ]}
                    >
                        <Input size="large" placeholder="Введите название" />
                    </Form.Item>

                    <Form.Item
                        label="Пищевая ценность"
                        name="value"
                        rules={[
                        {
                            required: true,
                            message: 'Пожалуйста заполните все поля!',
                        },
                        ]}
                    >
                        <Input size="large" placeholder="ккал" />
                    </Form.Item>

                    <Form.Item
                        label="Белки"
                        name="proteins"
                        rules={[
                        {
                            required: true,
                            message: 'Пожалуйста заполните все поля!',
                        },
                        ]}
                    >
                        <Input size="large" placeholder="грамм" />
                    </Form.Item>

                    <Form.Item
                        label="Жиры"
                        name="fats"
                        rules={[
                        {
                            required: true,
                            message: 'Пожалуйста заполните все поля!',
                        },
                        ]}
                    >
                        <Input size="large" placeholder="грамм" />
                    </Form.Item>

                    <Form.Item
                        label="Углеводы"
                        name="carbohydrates"
                        rules={[
                        {
                            required: true,
                            message: 'Пожалуйста заполните все поля!',
                        },
                        ]}
                    >
                        <Input size="large" placeholder="грамм" />
                    </Form.Item>

                    <Form.Item style={{ paddingTop: 32}}>
                        <Button type="primary" size="large" htmlType="submit" block>
                            Сохранить
                        </Button>
                    </Form.Item>
                </Form>
        </Column>
    );
}

export default CreateActivitiesComponent;
