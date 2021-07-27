import React, { useState } from 'react';
import { Column } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import 'antd/dist/antd.css';
import { Button, Input, Form, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Modal from 'antd/lib/modal/Modal';
import { createActivity } from '../../redux/actions/activityActions';
import { useDispatch } from 'react-redux';

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

function CreateActivitiesComponent() {
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
        dispatch(createActivity(formData));
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

    return (
        <Column className={classes.container}>
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
                            onPreview={handlePreview}
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
        </Column>
    );
}

export default CreateActivitiesComponent;
