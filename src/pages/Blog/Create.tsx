// import React, { useState, useEffect } from 'react'
// import { Form, Input, Button, message } from 'antd'
// import axios from 'axios'
// import TextEditor from '@src/Components/TextEditor'
// import { useNavigate } from 'react-router-dom'
// import styles from './blogs.module.css'

// const Create: React.FC = () => {
//   const [form] = Form.useForm()
//   const [initialValue] = useState({
//     title: '',
//     content: '',
//   })
//   const [messageApi, contextHolder] = message.useMessage()
//   const [textEditor, setTextEditor] = useState('')
//   const [type, setType] = useState<string>('')
//   const navigate = useNavigate()
//   const currentURL = window.location.href
//   const segments = currentURL.split('/')
//   const post_id = segments[segments.length - 1]
//   // const [fileList, setFileList] = useState<UploadFile[]>([])
//   const [thumbnail, setThumbnail] = useState('')

//   // 컴포넌트가 마운트될 때와 URL이 변경될 때 데이터를 가져오기 위한 useEffect
//   // type 별로 실행 되기 위한 분기
//   useEffect(() => {
//     if (currentURL.includes('/create')) {
//       setType('create')
//     } else if (currentURL.includes(`/edit/${post_id}`)) {
//       setType('edit')
//       fetchBlogData()
//     }
//   }, [currentURL])

//   // 블로그 디테일 정보 데이터를 가져오는 함수
//   const fetchBlogData = async () => {
//     try {
//       const token = document.cookie
//         .split('; ')
//         .find(row => row.startsWith('token='))
//         ?.split('=')[1]
//       const response = await axios.get(
//         `${import.meta.env.VITE_API_ENDPOINT}/api/blog-detail/${post_id}`,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         },
//       )

//       // 정상으로 가져옴
//       if (response.status === 200) {
//         const blog = response?.data.blogPostDetail

//         form.setFieldsValue({
//           title: blog.title,
//           content: blog.content,
//         })
//         setThumbnail(blog.thumbnail)
//         setTextEditor(blog.content)
//       }
//     } catch (error) {
//       console.error('Error fetching project list:', error)
//     }
//   }

//   // 프로젝트를 생성하거나 업데이트하는 함수
//   // type 별로 실행 되기 위한 분기
//   const createOrUpdateBlog = async (
//     type: 'create' | 'edit',
//     values: any,
//     textEditor: string,
//   ) => {
//     const requestData = {
//       post_id: type === 'edit' ? post_id : null,
//       title: values.title,
//       content: textEditor,
//       thumbnail: thumbnail,
//     }

//     const token = document.cookie
//       .split('; ')
//       .find(row => row.startsWith('token='))
//       ?.split('=')[1]
//     const response = await axios.post(
//       `${import.meta.env.VITE_API_ENDPOINT}/api/blog-admin/create`,
//       requestData,
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//       },
//     )
//     return response
//   }

//   // Form 제출 시 실행되는 콜백 함수
//   const onFinish = async (values: any) => {
//     try {
//       if (type !== 'create' && type !== 'edit') return

//       await createOrUpdateBlog(type, values, textEditor)

//       messageApi.success('게시물이 성공적으로 생성되었습니다.')
//       form.resetFields()
//       navigate('/blogs')
//     } catch (error) {
//       messageApi.error('게시물 생성 중 오류가 발생했습니다.')
//       console.error('게시물 생성 중 오류:', error)
//     }
//   }

//   const [selectedFile, setSelectedFile] = useState<File | null>(null)
//   const [imageUrls, setImageUrls] = useState<string[]>([])

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0]
//     if (file) {
//       setSelectedFile(file)
//     }
//   }

//   useEffect(() => {
//     const fetchRepoContents = async () => {
//       try {
//         if (location.pathname.includes('/create')) {
//           setImageUrls([])
//         } else {
//           const response = await axios.get(
//             `https://api.github.com/repos/Jung-sunghoon/portfolio_img/contents/images`,
//           )
//           const images = response.data.filter(
//             (content: any) =>
//               content.type === 'file' &&
//               content.name.match(/\.(jpeg|jpg|gif|png)$/i),
//           )
//           const urls = images.map((image: any) => image.download_url)
//           setImageUrls(urls)
//         }
//       } catch (error) {
//         console.error('Error fetching repo contents:', error)
//       }
//     }
//     fetchRepoContents()
//   }, [selectedFile])

//   // 썸네일 업로드 함수
//   const handleUpload = async (event: any) => {
//     event.preventDefault()
//     if (selectedFile) {
//       try {
//         const reader = new FileReader()
//         reader.onloadend = async () => {
//           if (reader.result) {
//             const base64encoded = reader.result.toString().split(',')[1]
//             const apiURL = `https://api.github.com/repos/Jung-sunghoon/portfolio_img/contents/images/${selectedFile.name}`
//             const accessToken = import.meta.env.VITE_GITHUB_KEY

//             const response = await axios.put(
//               apiURL,
//               {
//                 message: 'Add image',
//                 content: base64encoded,
//                 branch: 'main',
//               },
//               {
//                 headers: {
//                   Authorization: `Bearer ${accessToken}`,
//                   'Content-Type': 'application/json',
//                 },
//               },
//             )

//             console.log(
//               'Image uploaded successfully:',
//               response.data.content.name,
//             )

//             // 이미지가 성공적으로 업로드된 후에 이미지 URL을 업데이트
//             setImageUrls(prevUrls => [
//               ...prevUrls,
//               response.data.content.download_url,
//             ])

//             setThumbnail(response.data.content.download_url)
//           }
//         }
//         reader.readAsDataURL(selectedFile)
//       } catch (error) {
//         console.error('Error uploading image:', error)
//       }
//     }
//   }

//   const handleDeleteThumbnail = async (event: any) => {
//     event.preventDefault()
//     setThumbnail('')
//   }

//   return (
//     <div id={styles.blogCreate}>
//       {contextHolder}
//       <Form
//         form={form}
//         name="create"
//         onFinish={onFinish}
//         labelCol={{ span: 6 }}
//         wrapperCol={{ span: 14 }}
//         initialValues={initialValue}
//       >
//         <div className={styles.createForm}>
//           <Form.Item
//             name="title"
//             label="제목"
//             rules={[{ required: true, message: '제목을 입력해주세요' }]}
//           >
//             <Input />
//           </Form.Item>

//           <Form.Item label="대표 이미지">
//             <div>
//               <div className={styles.thumbnailLoad}>
//                 {type === 'create' ? (
//                   imageUrls.length > 0 && (
//                     <img
//                       src={imageUrls[imageUrls.length - 1]}
//                       style={{ maxHeight: '180px', maxWidth: '515px' }}
//                     />
//                   )
//                 ) : (
//                   <img
//                     src={thumbnail}
//                     style={{ maxHeight: '180px', maxWidth: '515px' }}
//                   />
//                 )}
//               </div>
//               <div style={{ display: 'flex' }}>
//                 <input type="file" onChange={handleFileChange} />
//                 <button type="button" onClick={handleUpload}>
//                   Upload
//                 </button>
//                 <button type="button" onClick={handleDeleteThumbnail}>
//                   삭제
//                 </button>
//               </div>
//             </div>
//           </Form.Item>

//           <Form.Item name="content" label="내용">
//             {type === 'create' ? (
//               <TextEditor
//                 isNew={true}
//                 setTextEditor={setTextEditor}
//                 html={''}
//               />
//             ) : (
//               <TextEditor
//                 isNew={false}
//                 setTextEditor={setTextEditor}
//                 html={textEditor}
//               />
//             )}
//           </Form.Item>
//         </div>
//         <div
//           style={{
//             display: 'flex',
//             justifyContent: 'flex-end',
//             textAlign: 'right',
//             marginRight: '30px',
//           }}
//         >
//           <Form.Item>
//             <Button type="primary" htmlType="submit">
//               {`${type === 'create' ? '생성' : '수정'}`}
//             </Button>
//           </Form.Item>
//         </div>
//       </Form>
//       <div></div>
//     </div>
//   )
// }

// export default Create
