import React, { useEffect } from 'react';
import { Column } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import 'antd/dist/antd.css';
import { Button, Input, Form, notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { createCategoryFood } from '../../redux/actions/categoryActions';
import { useHistory } from 'react-router-dom';
import LoadingComponent from '../../components/loading/LoadingComponent';
import SLUGS from '../../resources/slugs';
import { CREATE_CATEGORY_FOOD_RESET } from '../../redux/constants/categoryConstants';

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

function CreateCategoryProductsComponent() {
    const theme = useTheme();
    const classes = useStyles({ theme });
    const { push } = useHistory();
    const dispatch = useDispatch();

    const onFinish = (values) => {
        dispatch(createCategoryFood(values));
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const createdCategoryFood = useSelector((state) => state.createdCategoryFood);
    const { errorCreatedCategoryFood, createdCategoryFoodData, loadingCreateCategoryFood } = createdCategoryFood;

    useEffect(() => {
        // if(errorAllFoods && errorAllFoods.indexOf("403") !== -1) {
        //   dispatch(signout());
        // }
        if(createdCategoryFoodData) {
            notification['success']({
                message: 'Успешно добавлен!',
            });
            push(SLUGS.categoryProducts);
            dispatch({ type: CREATE_CATEGORY_FOOD_RESET });
        }
        if(errorCreatedCategoryFood) {
            notification['error']({
                message: errorCreatedCategoryFood
            });
            dispatch({ type: CREATE_CATEGORY_FOOD_RESET });
        }
    }, [dispatch, createdCategoryFoodData, push, errorCreatedCategoryFood]);

    return (
        <Column className={classes.container}>
            {loadingCreateCategoryFood ? (
                <LoadingComponent loading />
            ) : (
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

                        <Form.Item style={{ paddingTop: 32}}>
                            <Button type="primary" size="large" htmlType="submit" block>
                                Сохранить
                            </Button>
                        </Form.Item>
                    </Form>
            )}
        </Column>
    );
}

export default CreateCategoryProductsComponent;
