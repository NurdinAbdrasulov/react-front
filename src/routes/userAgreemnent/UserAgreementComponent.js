import React, { useEffect, useState } from 'react';
import { Column } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import 'antd/dist/antd.css';
import { Button, Alert, notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAgreement, putUserAgreement, signout } from '../../redux/actions/userActions';
import LoadingComponent from '../../components/loading/LoadingComponent';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { PUT_USERAGREEMENT_RESET } from '../../redux/constants/userConstants';

const useStyles = createUseStyles((theme) => ({
    container: {
      padding: 30,
      backgroundColor: theme.color.lightWhite
    },
    lastRow: {
      marginTop: 30
    },
    button: {
      width: 112,
      display: 'flex',
      marginTop: '24px',
      justifyContent: 'space-around',
      alignItems: 'center'
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

function UserAgreementComponent() {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const dispatch = useDispatch();
  
  const [userAgreementState, setUserAgreementState] = useState('');

  const userAgreement = useSelector((state) => state.userAgreement);
  const { errorUserAgreement, userAgreementData, loadingUserAgreement } = userAgreement;
  const updatedUserAgreement = useSelector((state) => state.updatedUserAgreement);
  const { errorUpdatedAgreement, updatedAgreement, loadingUpdatedAgreement } = updatedUserAgreement;

  const handleChange = (value) => {
    setUserAgreementState(value);
  }

  const handleClick = (value) => {
    dispatch(putUserAgreement({text: value}));
  }

  useEffect(() => {
    if(errorUserAgreement && errorUserAgreement.indexOf("403") !== -1) {
      dispatch(signout());
    }
    if(updatedAgreement) {
      dispatch(getUserAgreement());
      notification['success']({
          message: 'Успешно сохранен!',
      });
      dispatch({ type: PUT_USERAGREEMENT_RESET });
  }
  if(errorUpdatedAgreement) {
      notification['error']({
          message: errorUpdatedAgreement
      });
      dispatch({ type: PUT_USERAGREEMENT_RESET });
  }
  }, [dispatch, errorUserAgreement, updatedAgreement, errorUpdatedAgreement]);

  useEffect(() => {
    dispatch(getUserAgreement());
  }, [dispatch]);

    return (
        <>
          {loadingUserAgreement || loadingUpdatedAgreement ? (
              <LoadingComponent loading={loadingUserAgreement} />
            ) : errorUserAgreement ? (
              <Alert message="Error" description={errorUserAgreement} type="error" showIcon />
            ) : userAgreementData ? (
            <Column className={classes.container}>
                <ReactQuill defaultValue={userAgreementData.text}
                  onChange={handleChange} />
                <Button
                  className={classes.button}
                  type='primary'
                  size='large'
                  onClick={() => handleClick(userAgreementState)}>
                    Сохранить
                </Button>
            </Column>
            ) : ""}
        </>
    );
}

export default UserAgreementComponent;