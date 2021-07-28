import React, { useEffect } from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import 'antd/dist/antd.css';
import { Alert, Table } from 'antd';
import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../redux/actions/userActions';
import LoadingComponent from '../../components/loading/LoadingComponent';

const useStyles = createUseStyles((theme) => ({
    container: {
      padding: 30,
      backgroundColor: theme.color.lightWhite
    },
    lastRow: {
      marginTop: 30
    },
    table: {
        "& > :last-child": {
            textAlign: 'center'
        }
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
      title: 'Имя',
      dataIndex: 'name',
      key: 'name',
      width: 577
    },
    {
      title: 'Дата рождения',
      dataIndex: 'birthDate',
      key: 'birthDate',
      width: 222
    },
    {
      title: 'Пол',
      dataIndex: 'gender',
      key: 'gender',
      width: 105,
      render: gender => (gender === "MALE" ?
            "М" :
            "Ж"
      )
    },
    {
      title: 'Наличие диабета',
      key: 'diabetesStatus',
      dataIndex: 'diabetesStatus',
      width: 200,
      align: 'right',
      render: diabetesStatus => (diabetesStatus === "NONE" ?
            <CheckCircleTwoTone twoToneColor="#52c41a" /> :
            <CloseCircleTwoTone twoToneColor="#FF7D7D" />
      ),
    }
  ];

function UsersComponent() {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const dispatch = useDispatch();

  const allUsers = useSelector((state) => state.allUsers);
  const { errorAllUsers, allUsersData, loadingAllUsers } = allUsers;

  useEffect(() => {
    // if(errorAllUsers && errorAllUsers.indexOf("403") !== -1) {
    //   dispatch(signout());
    // }
    dispatch(getAllUsers());
  }, [dispatch]);

    return (
        <Column className={classes.container}>
          {loadingAllUsers ? (
              <LoadingComponent loading={loadingAllUsers} />
            ) : errorAllUsers ? (
              <Alert message="Error" description={errorAllUsers} type="error" showIcon />
            ) : (
            <Row
                horizontal='space-between'
                className={classes.lastRow}
                breakpoints={{ 1024: 'column' }}
            >
                <Table
                    className={classes.table}
                    pagination={{
                        total: allUsersData && allUsersData.length,
                        showTotal: total => `Всего ${total} пользователей`,
                        size: 'small',
                        pageSize: 6,
                        defaultCurrent: 1}}
                    columns={columns}
                    rowKey="id"
                    dataSource={allUsersData} />
            </Row>
            )}
        </Column>
    );
}

export default UsersComponent;