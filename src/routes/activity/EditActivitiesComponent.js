import React, { useEffect, useState } from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import 'antd/dist/antd.css';
import { Button, Input, Form, Upload, Alert, notification, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { deleteActivity, getActivity, updateActivity } from '../../redux/actions/activityActions';
import { useDispatch, useSelector } from 'react-redux';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import LoadingComponent from '../../components/loading';
import { DELETE_ACTIVITY_RESET, UPDATE_ACTIVITY_RESET } from '../../redux/constants/activityConstants';
import { useHistory } from 'react-router-dom';
import SLUGS from '../../resources/slugs';

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

function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
}

function EditActivitiesComponent(props) {
    const activityId = props.match.params.id;
    const theme = useTheme();
    const classes = useStyles({ theme });
    const { push } = useHistory();
    const dispatch = useDispatch();

    const [fileList, setFileList] = useState([]);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');

    const onFinish = async(values) => {
        var formData = new FormData();
        if(values.icon[0].url) {
            const blob = await fetch(values.icon[0].url).then((res) => res.blob());
            formData.append("icon", blob);
        } else {
            formData.append("icon", fileList[0].originFileObj);
            formData.append("name", values.name);
            formData.append("id", activityId);
        }
        dispatch(updateActivity(formData, activityId));
    };

    const handlePreview = async file => {
        if (!file.url && !file.preview) {
          file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewVisible(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
    };
    
    const handleChange = ({ fileList }) => setFileList(fileList);

    const handleCancel = () => setPreviewVisible(false);

    const dummyRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
          onSuccess("ok");
        }, 0);
    };

    const showDeleteConfirm = (activityData) => {
        Modal.confirm({
          title: `Вы уверены, что хотите удалить ${activityData.name}?`,
          icon: <ExclamationCircleOutlined />,
          okText: 'Да',
          okType: 'primary',
          cancelText: 'Нет',
          onOk() {
            dispatch(deleteActivity(activityData.id));
          }
        });
    }

    const normFile = (e) => {
        if (Array.isArray(e)) {
          return e;
        }
        return e && e.fileList;
    };

    const uploadButton = (
        <div>
          <PlusOutlined />
          <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    const activity = useSelector((state) => state.activity);
    const { errorActivity, activityData, loadingActivity } = activity;
    const updatedActivity = useSelector((state) => state.updatedActivity);
    const { errorUpdatedActivity, updatedActivityData, loadingUpdateActivity } = updatedActivity;
    const deletedActivity = useSelector((state) => state.deletedActivity);
    const { errorDeletedActivity, deletedActivityData, loadingDeleteActivity } = deletedActivity;

    useEffect(() => {
        // if(errorAllFoods && errorAllFoods.indexOf("403") !== -1) {
        //   dispatch(signout());
        // }
        if(deletedActivityData) {
            notification['success']({
                message: 'Успешно удален!',
            });
            push(SLUGS.activity);
            dispatch({ type: DELETE_ACTIVITY_RESET });
        }
        if(errorDeletedActivity) {
            notification['error']({
                message: errorDeletedActivity
            });
            dispatch({ type: DELETE_ACTIVITY_RESET });
        }
        if(updatedActivityData) {
            dispatch(getActivity(activityId));
            notification['success']({
                message: 'Успешно изменен!',
            });
            dispatch({ type: UPDATE_ACTIVITY_RESET });
        }
        if(errorUpdatedActivity) {
            notification['error']({
                message: errorUpdatedActivity
            });
            dispatch({ type: UPDATE_ACTIVITY_RESET });
        }
        if(activityData) {
            setFileList([{
                uid: activityData.id,
                name: activityData.name,
                status: 'done',
                url: "http://" + activityData.icon
            }])
        }
      }, [dispatch, activityId, activityData, deletedActivityData, updatedActivityData, errorDeletedActivity, errorUpdatedActivity, push]);

      useEffect(() => {
        // if(errorAllFoods && errorAllFoods.indexOf("403") !== -1) {
        //   dispatch(signout());
        // }
        dispatch(getActivity(activityId));
      }, [dispatch, activityId]);

    return (
        <>
            {loadingActivity || loadingDeleteActivity || loadingUpdateActivity ? (
              <LoadingComponent loading={loadingActivity} />
            ) : errorActivity ? (
              <Alert message="Error" description={errorActivity} type="error" showIcon />
            ) : activityData ? (
            <Column className={classes.container}>
                <Row horizontal='space-between'>
                    <Form
                        initialValues={{
                            name: activityData.name,
                            icon: [{
                                uid: activityData.id,
                                name: activityData.name,
                                status: 'done',
                                url: "http://" + activityData.icon
                            }]
                        }}
                        name="basic"
                        layout="vertical"
                        onFinish={onFinish}
                        requiredMark={false}
                        style={{ width: "300px" }}
                        >
                            <Form.Item
                                label="Название"
                                name="name"
                                rules={[
                                {
                                    required: true,
                                    message: 'Пожалуйста, заполните поля!',
                                },
                                ]}
                            >
                                <Input size="large" placeholder="Введите название" />
                            </Form.Item>

                            <Form.Item
                                label="Иконка"
                                name="icon"
                                valuePropName="fileList"
                                getValueFromEvent={normFile}
                                rules={[
                                {
                                    required: true,
                                    message: 'Пожалуйста, загрузите иконку!',
                                }]}
                            >
                                <Upload
                                    name="avatar"
                                    listType="picture-card"
                                    onPreview={handlePreview}
                                    maxCount={1}
                                    onChange={handleChange}
                                    customRequest={dummyRequest}
                                >{fileList.length >= 1 ? null : uploadButton}
                                </Upload>
                            </Form.Item>

                            <Modal
                                visible={previewVisible}
                                title={previewTitle}
                                footer={null}
                                onCancel={handleCancel}
                                >
                                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                            </Modal>

                            <Form.Item style={{ paddingTop: 32}}>
                                <Button type="primary" size="large" htmlType="submit" block>
                                    Сохранить
                                </Button>
                            </Form.Item>
                    </Form>
                    <Button
                        className={classes.button}
                        size='large'
                        onClick={() => showDeleteConfirm(activityData)}
                        danger
                        ghost>
                            Удалить продукт
                    </Button>
                </Row>
            </Column>
            ) : ""}
        </>
    );
}

export default EditActivitiesComponent;
