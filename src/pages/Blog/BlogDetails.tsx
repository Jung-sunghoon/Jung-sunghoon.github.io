import React from 'react'
import { useState, useEffect } from 'react'
import { Button, message } from 'antd'
import axios from 'axios'
import { BlogType } from './Blogs'
import './blogDetails.css'
import { Link, useNavigate } from 'react-router-dom'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { formatDate } from '@src/utils/common'

export interface BlogDetails {}

const InfoDetails: React.FC<BlogDetails> = () => {
  const currentURL = window.location.href
  const segments = currentURL.split('/')
  const post_id = segments[segments.length - 1]
  const [blogDetails, setBlogDetails] = useState<BlogType>()
  const [messageApi, contextHolder] = message.useMessage()
  const navigate = useNavigate()

  const handleEditBlog = async () => {
    navigate(`/edit/${post_id}`)
  }

  const handleDeleteBlog = async () => {
    const confirmDelete = window.confirm('프로젝트를 삭제하시겠습니까?')
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
        messageApi.error('게시물 삭제 오류:')
      }
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_ENDPOINT}/api/blog-detail/${post_id}`,
        )
        const BlogData = response.data.blogPostDetail

        setBlogDetails(BlogData)
      } catch (error) {
        messageApi.error('오류입니다.')
      }
    }

    fetchData()
  }, [])

  const renderBlogEditAndDeleteBtn = () => {
    if (localStorage.userId === 'master') {
      return (
        <div className="infoDetails__btnWrapper">
          <Button
            className="projectDetails__projectEditBtn"
            onClick={handleEditBlog}
          >
            <EditOutlined />
          </Button>
          <Button
            onClick={handleDeleteBlog}
            className="projectDetails__projectDeleteBtn"
          >
            <DeleteOutlined />
          </Button>
        </div>
      )
    }
  }

  return (
    <div id="root">
      {contextHolder}
      <div className="infoDetails__all">
        <div className="infoDeatils__wrapper">
          <div className="infoDetails__header">
            <div className="infoDetails__dateAndViews">
              <span>작성일</span>
              <div className="infoDetails__generateDate">
                {blogDetails?.creation_date
                  ? formatDate(new Date(blogDetails?.creation_date))
                  : ''}
              </div>
              <span style={{ padding: '0 0.5em' }}>조회수</span>
              <div className="infoDetails__views">{blogDetails?.views}</div>
            </div>
          </div>
          <div className="infoDetails__titleWrap">
            <div className="infoDetails__title">{blogDetails?.title}</div>
          </div>
          {renderBlogEditAndDeleteBtn()}
          <div className="infoDetails__description">
            <div
              dangerouslySetInnerHTML={{
                __html: blogDetails?.content || '',
              }}
            />
          </div>
          <div className="projectDetails__commentBtnWrapper">
            <Link to="/blogs">
              <button
                className="projectDetails__commentBtn"
                style={{
                  marginRight: '5px',
                }}
                name="register"
              >
                뒤로 가기
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoDetails
