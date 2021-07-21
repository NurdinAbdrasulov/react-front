import React, { useEffect } from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import SLUGS from '../../resources/slugs';
import { Link, useHistory } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Alert, Button, Select, Table } from 'antd';
import { IconAdd } from '../../assets/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFoods } from '../../redux/actions/foodActions';
import LoadingComponent from '../../components/loading/LoadingComponent';

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
        width: 567
    },
    {
        title: 'Ккал',
        dataIndex: 'calories',
        key: 'calories',
        width: 222
    },
    {
        title: 'Белки',
        dataIndex: 'proteins',
        key: 'protein',
        width: 105
    },
    {
        title: 'Жиры',
        dataIndex: 'fats',
        key: 'fats',
        width: 105
      },
    {
        title: 'Углеводы',
        key: 'carbohydrates',
        dataIndex: 'carbohydrates',
        width: 105
    },
    {
      title: '',
      key: 'x',
      dataIndex: '',
      render: (record) => <Link to={`/products/editProduct/${record.id}`}>Изменить</Link>
    }
  ];

  const { Option } = Select;

function ActivitiesComponent() {
  const { push } = useHistory();
  const theme = useTheme();
  const classes = useStyles({ theme });
  const dispatch = useDispatch();

  const allFoods = useSelector((state) => state.allFoods);
  const { errorAllFoods, allFoodsData, loadingAllFoods } = allFoods;

  useEffect(() => {
    // if(errorAllFoods && errorAllFoods.indexOf("403") !== -1) {
    //   dispatch(signout());
    // }
    dispatch(getAllFoods());
  }, [dispatch]);

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

    return (
        <Column className={classes.container}>
          {loadingAllFoods ? (
              <LoadingComponent loading={loadingAllFoods} />
            ) : errorAllFoods ? (
              <Alert message="Error" description={errorAllFoods} type="error" showIcon />
            ) : (
            <>
              <Row
                  horizontal='space-between'
                  className={classes.lastRow}
                  breakpoints={{ 1024: 'column' }}
              >
                <Select
                  placeholder="Выберите категорию"
                  className={classes.select}
                  size='large'
                  onChange={handleChange}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="disabled" disabled>
                    Disabled
                  </Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
                <Button
                  className={classes.button}
                  type='primary'
                  size='large'
                  onClick={() => push(SLUGS.createProduct)}
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
                          total: allFoodsData && allFoodsData.length,
                          showTotal: total => `Всего ${total} продуктов`,
                          size: 'small',
                          pageSize: 3,
                          defaultCurrent: 1}}
                      columns={columns}
                      rowKey="id"
                      dataSource={allFoodsData} />
              </Row>
            </>
            )}
        </Column>
    );
}

export default ActivitiesComponent;
