import React from 'react'
import { useState, useEffect } from 'react'
// import { Blog, message } from 'antd'
// import axios from 'axios'
import { BlogType } from '@src/types/types'
import styles from './blogDetails.module.css'
import { Link } from 'react-router-dom'
// import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { formatDate } from '@src/utils/common'
import Comment from '@src/Components/DisqusComment/Comment'
import { posts } from '@src/posts/posts'

export interface BlogDetails {}

const BlogDetails: React.FC<BlogDetails> = () => {
  const currentURL = window.location.href
  const segments = currentURL.split('/')
  const post_id = Number(segments[segments.length - 1])
  const [blogDetails, setBlogDetails] = useState<BlogType>()
  // const [hasCookie, setHasCookie] = useState<boolean>(false)
  // const [messageApi, contextHolder] = message.useMessage()
  // const navigate = useNavigate()

  const pageInfo = {
    url: window.location.href,
    title: blogDetails?.title || '',
    identifier: blogDetails?.post_id?.toString() || '',
  }

  // const handleEditBlog = async () => {
  //   navigate(`/edit/${post_id}`)
  // }

  // const handleDeleteBlog = async () => {
  //   const confirmDelete = window.confirm('게시물을 삭제하시겠습니까?')
  //   if (confirmDelete) {
  //     try {
  //       const token = document.cookie
  //         .split('; ')
  //         .find(row => row.startsWith('token='))
  //         ?.split('=')[1]
  //       await axios.delete(
  //         `${
  //           import.meta.env.VITE_API_ENDPOINT
  //         }/api/blog-admin/delete/${post_id}`,
  //         {
  //           headers: { Authorization: `Bearer ${token}` },
  //         },
  //       )
  //       messageApi.success('게시물 삭제 성공')
  //       navigate('/blogs')
  //     } catch (error) {
  //       // 오류 처리
  //       messageApi.error('게시물 삭제 오류')
  //     }
  //   }
  // }

  const fetchData = async () => {
    // try {
    //   const response = await axios.get(
    //     `${import.meta.env.VITE_API_ENDPOINT}/api/blog-detail/${post_id}`,
    //   )
    //   const BlogData = response.data.blogPostDetail
    //   setBlogDetails(BlogData)
    //   // 쿠키가 있는지 확인
    //   setHasCookie(document.cookie.includes('token'))
    // } catch (error) {
    //   messageApi.error('오류입니다.')
    // }
    const blogPostDetails = posts.find(p => p.post_id == post_id)
    if (blogPostDetails) {
      setBlogDetails(blogPostDetails)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  // const renderBlogEditAndDeleteBtn = () => {
  //   if (hasCookie) {
  //     return (
  //       <div className={styles.blogDetailsBtnWrapper}>
  //         <Button
  //           className={styles.blogDetailsBlogEditBtn}
  //           onClick={handleEditBlog}
  //         >
  //           <EditOutlined />
  //         </Button>
  //         <Button
  //           onClick={handleDeleteBlog}
  //           className={styles.blogDetailsBlogDeleteBtn}
  //         >
  //           <DeleteOutlined />
  //         </Button>
  //       </div>
  //     )
  //   }
  //   return null
  // }

  return (
    <div id={styles.blogDetails}>
      {/* {contextHolder} */}
      <div className={styles.blogDetailsAll}>
        <div className={styles.blogDeatilsWrapper}>
          <div className={styles.blogDetailsHeader}>
            <div className={styles.blogDetailsTitleWrap}>
              <div className={styles.blogDetailsTitle}>
                <h1>{blogDetails?.title}</h1>
              </div>
            </div>
            <div className={styles.blogDetailsDateAndViews}>
              <span>작성일</span>
              <div className={styles.blogDetailsGenerateDate}>
                {blogDetails?.creation_date
                  ? formatDate(new Date(blogDetails?.creation_date))
                  : ''}
              </div>
              {/* <span style={{ padding: '0 0.5em' }}>조회수</span>
              <div className={styles.blogDetailsViews}>
                {blogDetails?.views}
              </div> */}
            </div>
          </div>
          {/* {renderBlogEditAndDeleteBtn()} */}
          <div className={styles.blogDetailsDescription}>
            <div
              dangerouslySetInnerHTML={{
                __html: blogDetails?.content || '',
              }}
            />
          </div>
          <article className={styles.blogDetailsCommmentsArticle}>
            <Comment shortname="jshs-portfolio" {...pageInfo} />
          </article>
          <div className={styles.blogDetailsBtnWrapper}>
            <Link to="/blogs">
              <button className={styles.blogDetailsBackBtn} name="register">
                목록으로 가기
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetails
