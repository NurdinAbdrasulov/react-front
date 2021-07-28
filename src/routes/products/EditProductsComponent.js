import React, { useEffect } from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import 'antd/dist/antd.css';
import { Button, Input, Form, Alert, Select, notification, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import LoadingComponent from '../../components/loading/LoadingComponent';
import { deleteFood, getFood, updateFood } from '../../redux/actions/foodActions';
import { getAllCategories } from '../../redux/actions/categoryActions';
import { DELETE_FOOD_RESET, UPDATE_FOOD_RESET } from '../../redux/constants/foodConstants';
import { useHistory } from 'react-router-dom';
import SLUGS from '../../resources/slugs';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const useStyles = createUseStyles((theme) => ({
    container: {
    //   width: 300,
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

function EditProductsComponent(props) {
    const foodId = props.match.params.id;
    const theme = useTheme();
    const classes = useStyles({ theme });
    const { push } = useHistory();
    const dispatch = useDispatch();

    const onFinish = (values) => {
        // console.log(values);
        dispatch(updateFood(values, foodId));
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const showDeleteConfirm = (foodData) => {
        Modal.confirm({
          title: `Вы уверены, что хотите удалить ${foodData.name}?`,
          icon: <ExclamationCircleOutlined />,
          okText: 'Да',
          okType: 'primary',
          cancelText: 'Нет',
          onOk() {
            dispatch(deleteFood(foodData.id));
          }
        });
    }

    const food = useSelector((state) => state.food);
    const { errorFood, foodData, loadingFood } = food;
    const allCategories = useSelector((state) => state.allCategories);
    const { errorAllCategories, allCategoriesData, loadingAllCategories } = allCategories;
    const updatedFood = useSelector((state) => state.updatedFood);
    const { errorUpdatedFood, updatedfoodData, loadingUpdateFood } = updatedFood;
    const deletedFood = useSelector((state) => state.deletedFood);
    const { errorDeletedFood, deletedfoodData, loadingDeleteFood } = deletedFood;

    useEffect(() => {
        // if(errorAllFoods && errorAllFoods.indexOf("403") !== -1) {
        //   dispatch(signout());
        // }
        if(deletedfoodData) {
            notification['success']({
                message: 'Успешно удален!',
            });
            push(SLUGS.products);
            dispatch({ type: DELETE_FOOD_RESET });
        }
        if(errorDeletedFood) {
            notification['error']({
                message: errorDeletedFood
            });
            dispatch({ type: DELETE_FOOD_RESET });
        }
        if(updatedfoodData) {
            dispatch(getFood(foodId));
            dispatch(getAllCategories());
            notification['success']({
                message: 'Успешно изменен!',
            });
            dispatch({ type: UPDATE_FOOD_RESET });
        }
        if(errorUpdatedFood) {
            notification['error']({
                message: errorUpdatedFood
            });
            dispatch({ type: UPDATE_FOOD_RESET });
        }
      }, [dispatch, push, foodId, updatedfoodData, errorUpdatedFood, deletedfoodData, errorDeletedFood]);

      useEffect(() => {
        // if(errorAllFoods && errorAllFoods.indexOf("403") !== -1) {
        //   dispatch(signout());
        // }
        dispatch(getFood(foodId));
        dispatch(getAllCategories());
      }, [dispatch, foodId]);

    return (
        <Column className={classes.container}>
            {loadingFood || loadingAllCategories || loadingUpdateFood || loadingDeleteFood ? (
                <LoadingComponent loading />
            ) : errorFood || errorAllCategories ? (
                <Alert message="Ошибка" description={errorFood} type="error" showIcon />
            ) : foodData && allCategoriesData ? (
                <Row horizontal='space-between'>
                    <Form
                        initialValues={{
                            name: foodData.name,
                            categoryId: foodData.category.id,
                            calories: foodData.calories,
                            proteins: foodData.proteins,
                            fats: foodData.fats,
                            carbohydrates: foodData.carbohydrates
                        }}
                        style={{ width: "300px" }}
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
                                <Select>
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
                        <>
                            <Button
                                className={classes.button}
                                size='large'
                                onClick={() => showDeleteConfirm(foodData)}
                                danger
                                ghost>
                                    Удалить продукт
                            </Button>
                        </>
                    </Row>
            ) : ""}
        </Column>
    );
}

export default EditProductsComponent;
