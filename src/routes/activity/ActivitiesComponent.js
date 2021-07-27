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
import { getAllActivities } from '../../redux/actions/activityActions';

const useStyles = createUseStyles((theme) => ({
    container: {
      padding: 30,
      backgroundColor: theme.color.lightWhite
    },
    lastRow: {
      marginTop: 30
    },
    button: {
      width: 218,
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
      title: 'Иконка',
      dataIndex: 'icon',
      key: 'icon',
      width: 222,
      render: (activityImage) => <img src={activityImage} alt="activity icon" />
    },
    {
      title: 'Название',
      dataIndex: 'name',
      key: 'name',
      width: 567
    },
    {
      title: '',
      key: 'x',
      dataIndex: '',
      render: (record) => <Link to={`/activity/editActivity/${record.id}`}>Изменить</Link>
    }
  ];

function ActivitiesComponent() {
  const { push } = useHistory();
  const theme = useTheme();
  const classes = useStyles({ theme });
  const dispatch = useDispatch();

  const allActivities = useSelector((state) => state.allActivities);
  const { errorAllActivities, allActivitiesData, loadingAllActivities } = allActivities;

  useEffect(() => {
    // if(errorAllFoods && errorAllFoods.indexOf("403") !== -1) {
    //   dispatch(signout());
    // }
    dispatch(getAllActivities());
  }, [dispatch]);

    return (
        <Column className={classes.container}>
          {loadingAllActivities ? (
              <LoadingComponent loading={loadingAllActivities} />
            ) : errorAllActivities ? (
              <Alert message="Error" description={errorAllActivities} type="error" showIcon />
            ) : (
            <>
              <Row
                  horizontal='flex-end'
                  className={classes.lastRow}
                  breakpoints={{ 1024: 'column' }}
              >
                <Button
                  className={classes.button}
                  type='primary'
                  size='large'
                  onClick={() => push(SLUGS.createActivity)}
                  icon={<IconAdd />}>
                    Добавить активность
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
                          total: allActivitiesData && allActivitiesData.length,
                          showTotal: total => `Всего ${total} активностей`,
                          size: 'small',
                          pageSize: 3,
                          defaultCurrent: 1}}
                      columns={columns}
                      rowKey="id"
                      dataSource={allActivitiesData} />
              </Row>
            </>
            )}
        </Column>
    );
}

export default ActivitiesComponent;
