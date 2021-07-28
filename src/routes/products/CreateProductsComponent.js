import React, { useEffect } from 'react';
import { Column } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import 'antd/dist/antd.css';
import { Button, Input, Form, Select, Alert, notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../../redux/actions/categoryActions';
import { useHistory } from 'react-router-dom';
import LoadingComponent from '../../components/loading/LoadingComponent';
import { createFood } from '../../redux/actions/foodActions';
import { CREATE_FOOD_RESET } from '../../redux/constants/foodConstants';
import SLUGS from '../../resources/slugs';

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

function CreateProductsComponent() {
    const theme = useTheme();
    const classes = useStyles({ theme });
    const { push } = useHistory();
    const dispatch = useDispatch();

    const onFinish = (values) => {
        dispatch(createFood(values));
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const allCategories = useSelector((state) => state.allCategories);
    const { errorAllCategories, allCategoriesData, loadingAllCategories } = allCategories;
    const createdFood = useSelector((state) => state.createdFood);
    const { errorCreatedFood, createdFoodData, loadingCreateFood } = createdFood;

    useEffect(() => {
        // if(errorAllFoods && errorAllFoods.indexOf("403") !== -1) {
        //   dispatch(signout());
        // }
        if(createdFoodData) {
            notification['success']({
                message: 'Успешно добавлен!',
            });
            push(SLUGS.products);
            dispatch({ type: CREATE_FOOD_RESET });
        }
        if(errorCreatedFood) {
            notification['error']({
                message: errorCreatedFood
            });
            dispatch({ type: CREATE_FOOD_RESET });
        }
    }, [dispatch, createdFoodData, push, errorCreatedFood]);

    useEffect(() => {
        // if(errorAllFoods && errorAllFoods.indexOf("403") !== -1) {
        //   dispatch(signout());
        // }
        dispatch(getAllCategories());
    }, [dispatch]);

    return (
        <>
            {loadingAllCategories || loadingCreateFood ? (
                <LoadingComponent loading />
            ) : errorAllCategories ? (
                <Alert message="Ошибка" description={errorAllCategories} type="error" showIcon />
            ) : allCategoriesData ? (
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
                            label="Категория"
                            name="categoryId"
                            rules={[
                                    {
                                        required: true,
                                        message: 'Пожалуйста, выберите один из них!',
                                    },
                                ]}
                                >
                                <Select placeholder="Выберите категорию">
                                    {allCategoriesData.map(({id, name}) => {
                                        return <Select.Option key={id} value={id}>{name}</Select.Option>
                                    })}
                                </Select>
                        </Form.Item>

                        <Form.Item
                            label="Пищевая ценность"
                            name="calories"
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
            ) : ""}
        </>
    );
}

export default CreateProductsComponent;
