import React, { useEffect } from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import 'antd/dist/antd.css';
import { Button, Input, Form, Alert, notification, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import LoadingComponent from '../../components/loading/LoadingComponent';
import { deleteCategoryFood, getCategoryFood, updateCategoryFood } from '../../redux/actions/categoryActions';
import { useHistory } from 'react-router-dom';
import SLUGS from '../../resources/slugs';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { DELETE_CATEGORY_FOOD_RESET, UPDATE_CATEGORY_FOOD_RESET } from '../../redux/constants/categoryConstants';

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

function EditCategoryProductsComponent(props) {
    const categoryFoodId = props.match.params.id;
    const theme = useTheme();
    const classes = useStyles({ theme });
    const { push } = useHistory();
    const dispatch = useDispatch();

    const onFinish = (values) => {
        // console.log(values);
        dispatch(updateCategoryFood(values, categoryFoodId));
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const showDeleteConfirm = (categoryFoodData) => {
        Modal.confirm({
          title: `Вы уверены, что хотите удалить ${categoryFoodData.name}?`,
          icon: <ExclamationCircleOutlined />,
          okText: 'Да',
          okType: 'primary',
          cancelText: 'Нет',
          onOk() {
            dispatch(deleteCategoryFood(categoryFoodData.id));
          }
        });
    }

    const categoryFood = useSelector((state) => state.categoryFood);
    const { errorCategoryFood, categoryFoodData, loadingCategoryFood } = categoryFood;
    const updatedCategoryFood = useSelector((state) => state.updatedCategoryFood);
    const { errorUpdatedCategoryFood, updatedCategoryFoodData, loadingUpdateCategoryFood } = updatedCategoryFood;
    const deletedCategoryFood = useSelector((state) => state.deletedCategoryFood);
    const { errorDeletedCategoryFood, deletedCategoryFoodData, loadingDeleteCategoryFood } = deletedCategoryFood;

    useEffect(() => {
        // if(errorAllFoods && errorAllFoods.indexOf("403") !== -1) {
        //   dispatch(signout());
        // }
        if(deletedCategoryFoodData) {
            notification['success']({
                message: 'Успешно удален!',
            });
            push(SLUGS.categoryProducts);
            dispatch({ type: DELETE_CATEGORY_FOOD_RESET });
        }
        if(errorDeletedCategoryFood) {
            notification['error']({
                message: errorDeletedCategoryFood
            });
            dispatch({ type: DELETE_CATEGORY_FOOD_RESET });
        }
        if(updatedCategoryFoodData) {
            dispatch(getCategoryFood(categoryFoodId));
            notification['success']({
                message: 'Успешно изменен!',
            });
            dispatch({ type: UPDATE_CATEGORY_FOOD_RESET });
        }
        if(errorUpdatedCategoryFood) {
            notification['error']({
                message: errorUpdatedCategoryFood
            });
            dispatch({ type: UPDATE_CATEGORY_FOOD_RESET });
        }
      }, [dispatch, push, categoryFoodId, updatedCategoryFoodData, errorUpdatedCategoryFood, deletedCategoryFoodData, errorDeletedCategoryFood]);

      useEffect(() => {
        // if(errorAllFoods && errorAllFoods.indexOf("403") !== -1) {
        //   dispatch(signout());
        // }
        dispatch(getCategoryFood(categoryFoodId));
      }, [dispatch, categoryFoodId]);

    return (
        <Column className={classes.container}>
            {loadingCategoryFood || loadingUpdateCategoryFood || loadingDeleteCategoryFood ? (
                <LoadingComponent loading />
            ) : errorCategoryFood ? (
                <Alert message="Ошибка" description={errorCategoryFood} type="error" showIcon />
            ) : categoryFoodData ? (
                <Row horizontal='space-between'>
                    <Form
                        initialValues={{
                            name: categoryFoodData.name,
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
                                onClick={() => showDeleteConfirm(categoryFoodData)}
                                danger
                                ghost>
                                    Удалить категорию
                            </Button>
                        </>
                    </Row>
            ) : ""}
        </Column>
    );
}

export default EditCategoryProductsComponent;
