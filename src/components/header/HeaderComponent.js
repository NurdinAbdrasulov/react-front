import React, { useContext } from 'react';
import { string } from 'prop-types';
import { Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import { SidebarContext } from '../../hooks/useSidebar';
import SLUGS from '../../resources/slugs';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { signout } from '../../redux/actions/userActions';

const useStyles = createUseStyles((theme) => ({
    container: {
        height: 100,
        padding: 30,
        backgroundColor: theme.color.lightWhite
    },
    title: {
        ...theme.typography.title,
        '@media (max-width: 1080px)': {
            marginLeft: 50
        },
        '@media (max-width: 468px)': {
            fontSize: 20
        }
    }
}));

function HeaderComponent() {
    const { currentItem } = useContext(SidebarContext);
    const theme = useTheme();
    const classes = useStyles({ theme });
    const dispatch = useDispatch();

    let title;
    switch (true) {
        case currentItem === SLUGS.statistics:
            title = 'Статистика';
            break;
        case currentItem === SLUGS.users:
            title = 'Список пользователей';
            break;
        case currentItem === SLUGS.products:
            title = 'Список продуктов';
            break;
        case currentItem.includes((SLUGS.editProduct).substr(0, SLUGS.editProduct.length-3)):
            title = 'Редактировать продукт';
            break;
        case currentItem === SLUGS.createProduct:
            title = 'Создать продукт';
            break;
        case currentItem === SLUGS.categoryProducts:
            title = 'Список категорий продуктов';
            break;
        case currentItem.includes((SLUGS.editСategoryProducts).substr(0, SLUGS.editСategoryProducts.length-3)):
            title = 'Редактировать категорию';
            break;
        case currentItem === SLUGS.createСategoryProducts:
            title = 'Создать категорию';
            break;
        case currentItem === SLUGS.activity:
            title = 'Список активностей';
            break;
        case currentItem.includes((SLUGS.editActivity).substr(0, SLUGS.editActivity.length-3)):
            title = 'Редактировать активность';
            break;
        case currentItem === SLUGS.createActivity:
            title = 'Создать активность';
            break;
        case currentItem === SLUGS.usersAgreement:
            title = 'Пользовательское соглашение';
            break;
        default:
            title = '';
    }

    function onLogOutClick() {
        dispatch(signout());
    }

    return (
        <Row className={classes.container} vertical='center' horizontal='space-between'>
            <span className={classes.title}>{title}</span>
            <Button type="primary" onClick={onLogOutClick} ghost>Выйти</Button>
        </Row>
    );
}

HeaderComponent.propTypes = {
    title: string
};

export default HeaderComponent;
