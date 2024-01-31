import React, { useState, useEffect } from 'react'
import { Form, Input, Button, message, Upload } from 'antd'
import axios from 'axios'
import TextEditor from '@src/Components/TextEditor'
import { useNavigate } from 'react-router-dom'
import styles from './blogs.module.css'
import type { UploadFile, UploadProps } from 'antd/es/upload/interface'
import { UploadOutlined } from '@ant-design/icons'

const Create: React.FC = () => {
  const [form] = Form.useForm()
  const [initialValue] = useState({
    title: '',
    content: '',
  })
  const [messageApi, contextHolder] = message.useMessage()
  const [textEditor, setTextEditor] = useState('')
  const [type, setType] = useState<string>('')
  const navigate = useNavigate()
  const currentURL = window.location.href
  const segments = currentURL.split('/')
  const post_id = segments[segments.length - 1]
  const [fileList, setFileList] = useState<UploadFile[]>([])

  // 컴포넌트가 마운트될 때와 URL이 변경될 때 데이터를 가져오기 위한 useEffect
  // type 별로 실행 되기 위한 분기
  useEffect(() => {
    if (currentURL.includes('/create')) {
      setType('create')
    } else if (currentURL.includes(`/edit/${post_id}`)) {
      setType('edit')
      fetchBlogData()
    }
  }, [currentURL])

  // 블로그 디테일 정보 데이터를 가져오는 함수
  const fetchBlogData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_ENDPOINT}/api/blog-detail/${post_id}`,
      )

      // 정상으로 가져옴
      if (response.status === 200) {
        const blog = response?.data.blogPostDetail

        form.setFieldsValue({
          title: blog.title,
          content: blog.content,
        })
        setTextEditor(blog.content)
      }
    } catch (error) {
      console.error('Error fetching project list:', error)
    }
  }

  // 프로젝트를 생성하거나 업데이트하는 함수
  // type 별로 실행 되기 위한 분기
  const createOrUpdateBlog = async (
    type: 'create' | 'edit',
    values: any,
    textEditor: string,
    fileList: any,
  ) => {
    const requestData = {
      post_id: type === 'edit' ? post_id : null,
      title: values.title,
      content: textEditor,
      thumbnail: fileList && fileList[0]?.thumbUrl,
    }
    console.log(requestData, 'requestData')

    const response = await axios.post(
      `${import.meta.env.VITE_API_ENDPOINT}/api/blog-admin/create`,
      requestData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    return response
  }

  // Form 제출 시 실행되는 콜백 함수
  const onFinish = async (values: any) => {
    try {
      if (type !== 'create' && type !== 'edit') return

      await createOrUpdateBlog(type, values, textEditor, fileList)

      messageApi.success('게시물이 성공적으로 생성되었습니다.')
      form.resetFields()
      navigate('/blogs')
    } catch (error) {
      messageApi.error('게시물 생성 중 오류가 발생했습니다.')
      console.error('게시물 생성 중 오류:', error)
    }
  }

  // 업로드 변경 시 실행되는 콜백 함수
  const onChange: UploadProps['onChange'] = async ({
    fileList: newFileList,
  }) => {
    setFileList(newFileList)
  }

  return (
    <div id={styles.blogCreate}>
      {contextHolder}
      <Form
        form={form}
        name="create"
        onFinish={onFinish}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        initialValues={initialValue}
      >
        <div className={styles.createForm}>
          <Form.Item
            name="title"
            label="제목"
            rules={[{ required: true, message: '제목을 입력해주세요' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="대표 이미지">
            <Upload
              beforeUpload={f => {
                f
              }}
              action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              listType="picture"
              fileList={fileList}
              onChange={onChange}
              onPreview={() => {
                return
              }}
            >
              {fileList.length < 1 && (
                <Button icon={<UploadOutlined />}>Click to Image Upload</Button>
              )}
            </Upload>
          </Form.Item>
          <Form.Item name="content" label="내용">
            {type === 'create' ? (
              <TextEditor
                isNew={true}
                setTextEditor={setTextEditor}
                html={''}
              />
            ) : (
              <TextEditor
                isNew={false}
                setTextEditor={setTextEditor}
                html={textEditor}
              />
            )}
          </Form.Item>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            textAlign: 'right',
            marginRight: '30px',
          }}
        >
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {`${type === 'create' ? '생성' : '수정'}`}
            </Button>
          </Form.Item>
        </div>
      </Form>
      <div></div>
    </div>
  )
}

export default Create
