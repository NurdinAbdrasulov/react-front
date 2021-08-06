import React, { useEffect } from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import SLUGS from '../../resources/slugs';
import { Link, useHistory } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Alert, Button, Table } from 'antd';
import { IconAdd } from '../../assets/icons';
import { useDispatch, useSelector } from 'react-redux';
import LoadingComponent from '../../components/loading/LoadingComponent';
import { getAllCategories } from '../../redux/actions/categoryActions';
import { signout } from '../../redux/actions/userActions';

const useStyles = createUseStyles((theme) => ({
    container: {
      padding: 30,
      backgroundColor: theme.color.lightWhite
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
    select: {
      width: 260,
    },
    tasks: {
        marginTop: 0,
        '@media (max-width: 1024px)': {
            marginTop: 30
        }
    }
}));

const columns = [
    {
        title: 'Название',
        dataIndex: 'name',
        key: 'name',
        width: 970
    },
    {
      title: '',
      key: 'x',
      dataIndex: '',
      render: (record) => <Link to={`/categoryProducts/editСategoryProduct/${record.id}`}>Изменить</Link>
    }
  ];

function CategoryProductsComponent() {
  const { push } = useHistory();
  const theme = useTheme();
  const classes = useStyles({ theme });
  const dispatch = useDispatch();

  const allCategories = useSelector((state) => state.allCategories);
  const { errorAllCategories, allCategoriesData, loadingAllCategories } = allCategories;

  useEffect(() => {
    if(errorAllCategories && errorAllCategories.indexOf("403") !== -1) {
      dispatch(signout());
    }
  }, [dispatch, errorAllCategories]);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

    return (
        <>
          {loadingAllCategories ? (
              <LoadingComponent loading={loadingAllCategories} />
            ) : errorAllCategories ? (
              <Alert message="Ошибка" description={errorAllCategories} type="error" showIcon />
            ) : allCategoriesData ? (
              <Column className={classes.container}>
                <Row
                    horizontal='flex-end'
                    className={classes.lastRow}
                    breakpoints={{ 1024: 'column' }}
                >
                  <Button
                    className={classes.button}
                    type='primary'
                    size='large'
                    onClick={() => push(SLUGS.createСategoryProducts)}
                    icon={<IconAdd />}>
                      Добавить продукт
                  </Button>
                </Row>
                <Row
                    horizontal='space-between'
                    className={classes.lastRow}
                    breakpoints={{ 1024: 'column' }}
                >
                    <Table
                        className={classes.table}
                        pagination={{
                            total: allCategoriesData && allCategoriesData.length,
                            showTotal: total => `Всего ${total} продуктов`,
                            size: 'small',
                            pageSize: 6,
                            defaultCurrent: 1}}
                        columns={columns}
                        rowKey="id"
                        dataSource={allCategoriesData} />
                </Row>
              </Column>
            ) : ""}
          </>
    );
}

export default CategoryProductsComponent;
