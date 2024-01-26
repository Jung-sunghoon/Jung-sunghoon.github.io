import React from 'react'
import { useState, useEffect } from 'react'
import { Button, message } from 'antd'
import axios from 'axios'
import { BlogType } from '@src/types/types'
import styles from './blogDetails.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { formatDate } from '@src/utils/common'

export interface BlogDetails {}

const BlogDetails: React.FC<BlogDetails> = () => {
  const currentURL = window.location.href
  const segments = currentURL.split('/')
  const post_id = segments[segments.length - 1]
  const [blogDetails, setBlogDetails] = useState<BlogType>()
  const [hasCookie, setHasCookie] = useState<boolean>(false)
  const [messageApi, contextHolder] = message.useMessage()
  const navigate = useNavigate()

  const handleEditBlog = async () => {
    navigate(`/edit/${post_id}`)
  }

  const handleDeleteBlog = async () => {
    const confirmDelete = window.confirm('게시물을 삭제하시겠습니까?')
    if (confirmDelete) {
      try {
        await axios.delete(
          `${
            import.meta.env.VITE_API_ENDPOINT
          }/api/blog-admin/delete/${post_id}`,
        )
        messageApi.success('게시물 삭제 성공')
        navigate('/blogs')
      } catch (error) {
        // 오류 처리
        messageApi.error('게시물 삭제 오류')
      }
    }
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_ENDPOINT}/api/blog-detail/${post_id}`,
      )
      const BlogData = response.data.blogPostDetail

      setBlogDetails(BlogData)
      // 쿠키가 있는지 확인
      setHasCookie(document.cookie.includes('token'))
    } catch (error) {
      messageApi.error('오류입니다.')
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const renderBlogEditAndDeleteBtn = () => {
    if (hasCookie) {
      return (
        <div className={styles.blogDetailsBtnWrapper}>
          <Button
            className={styles.blogDetailsBlogEditBtn}
            onClick={handleEditBlog}
          >
            <EditOutlined />
          </Button>
          <Button
            onClick={handleDeleteBlog}
            className={styles.blogDetailsBlogDeleteBtn}
          >
            <DeleteOutlined />
          </Button>
        </div>
      )
    }
    return null
  }

  return (
    <div id={styles.blogDetails}>
      {contextHolder}
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
              <span style={{ padding: '0 0.5em' }}>조회수</span>
              <div className={styles.blogDetailsViews}>
                {blogDetails?.views}
              </div>
            </div>
          </div>
          <div className={styles.blogDetailsListContainer}>
            <div className={styles.blogDetailsList}>
              <div>gigigigi</div>
              <div>gigigigi</div>
              <div>gigigigi</div>
              <div>gigigigi</div>
              <div>gigigigi</div>
            </div>
          </div>
          {renderBlogEditAndDeleteBtn()}
          <div className={styles.blogDetailsDescription}>
            <div
              dangerouslySetInnerHTML={{
                __html: blogDetails?.content || '',
              }}
            />
          </div>
          <div className={styles.blogDetailsCommentBtnWrapper}>
            <Link to="/blogs">
              <button
                className={styles.blogDetailsCommentBtn}
                style={{
                  marginRight: '5px',
                }}
                name="register"
              >
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
