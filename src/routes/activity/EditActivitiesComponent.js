import React, { useEffect, useState } from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import 'antd/dist/antd.css';
import { Button, Input, Form, Upload, Alert } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Modal from 'antd/lib/modal/Modal';
import { createActivity, getActivity } from '../../redux/actions/activityActions';
import { useDispatch, useSelector } from 'react-redux';
import { IconAdd } from '../../assets/icons';
import LoadingComponent from '../../components/loading';

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
    const dispatch = useDispatch();

    const [fileList, setFileList] = useState([]);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');

    const onFinish = async(values) => {
        let formData = new FormData();
        formData.append("icon", fileList[0].originFileObj);
        formData.append("name", values.name);
        formData.append("id", activityId);
        dispatch(createActivity(formData, activityId));
    };

    const handlePreview = async file => {
        if (!file.url && !file.preview) {
          file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewVisible(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    
    const handleChange = ({ fileList }) => setFileList(fileList);

    const handleCancel = () => setPreviewVisible(false);

    const dummyRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
          onSuccess("ok");
        }, 0);
    };

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

    console.log(activityData);
    console.log(fileList)

    useEffect(() => {
        // if(errorAllFoods && errorAllFoods.indexOf("403") !== -1) {
        //   dispatch(signout());
        // }
        if(activityData) {
            let oneActivity = [{
                uid: activityData.id,
                name: activityData.name,
                status: 'done',
                url: activityData.icon
            }];
            setFileList(oneActivity);
        } else {
            dispatch(getActivity(activityId));
        }
      }, [dispatch, activityId, activityData]);

    return (
        <Column className={classes.container}>
            {loadingActivity ? (
              <LoadingComponent loading={loadingActivity} />
            ) : errorActivity ? (
              <Alert message="Error" description={errorActivity} type="error" showIcon />
            ) : (
                <Row horizontal='space-around'>
                    <Form
                        name="basic"
                        width="300px"
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
                                    message: 'Пожалуйста, заполните поля!',
                                },
                                ]}
                            >
                                <Input size="large" placeholder="Введите название" />
                            </Form.Item>

                            <Form.Item
                                label="Upload"
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
                                    defaultFileList={[...fileList]}
                                    onPreview={handlePreview}
                                    onChange={handleChange}
                                    customRequest={dummyRequest}
                                >{fileList.length >= 5 ? null : uploadButton}
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
                        type='primary'
                        size='large'
                        onClick={() => alert("Hi")}
                        icon={<IconAdd />}>
                            Добавить активность
                    </Button>
                </Row>
                )}
        </Column>
    );
}

export default EditActivitiesComponent;
