import React, { useEffect } from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, signout } from '../../redux/actions/userActions';

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
  const { errorAllUsers, allUsersData } = allUsers;

  useEffect(() => {
    if(errorAllUsers && errorAllUsers.indexOf("403") !== -1) {
      dispatch(signout());
    }
    dispatch(getAllUsers());
  }, [dispatch, errorAllUsers]);

    return (
        <Column className={classes.container}>
            <Row
                horizontal='space-between'
                className={classes.lastRow}
                breakpoints={{ 1024: 'column' }}
            >
                <Table
                    className={classes.table}
                    pagination={{
                        total: 10,
                        showTotal: total => `Всего ${total} пользователей`,
                        size: 'small',
                        defaultCurrent: 1}}
                    columns={columns}
                    dataSource={allUsersData && allUsersData.content} />
            </Row>
        </Column>
    );
}

export default UsersComponent;