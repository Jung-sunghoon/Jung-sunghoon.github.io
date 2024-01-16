import React from 'react'
import { useState, useEffect } from 'react'
import { Button, message } from 'antd'
import axios from 'axios'
import { BlogType } from '@src/types/types'
import './blogDetails.css'
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
        <div className="BlogDetails__BtnWrapper">
          <Button className="BlogDetails__BlogEditBtn" onClick={handleEditBlog}>
            <EditOutlined />
          </Button>
          <Button
            onClick={handleDeleteBlog}
            className="BlogDetails__BlogDeleteBtn"
          >
            <DeleteOutlined />
          </Button>
        </div>
      )
    }
    return null
  }

  return (
    <div id="BlogDetails">
      {contextHolder}
      <div className="BlogDetails__all">
        <div className="BlogDeatils__wrapper">
          <div className="BlogDetails__header">
            <div className="BlogDetails__dateAndViews">
              <span>작성일</span>
              <div className="BlogDetails__generateDate">
                {blogDetails?.creation_date
                  ? formatDate(new Date(blogDetails?.creation_date))
                  : ''}
              </div>
              <span style={{ padding: '0 0.5em' }}>조회수</span>
              <div className="BlogDetails__views">{blogDetails?.views}</div>
            </div>
          </div>
          <div className="BlogDetails__titleWrap">
            <div className="BlogDetails__title">
              <h1>{blogDetails?.title}</h1>
            </div>
          </div>
          {renderBlogEditAndDeleteBtn()}
          <div className="BlogDetails__description">
            <div
              dangerouslySetInnerHTML={{
                __html: blogDetails?.content || '',
              }}
            />
          </div>
          <div className="BlogDetails__commentBtnWrapper">
            <Link to="/blogs">
              <button
                className="BlogDetails__commentBtn"
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
