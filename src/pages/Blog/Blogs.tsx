import React, { useCallback, useEffect, useState } from 'react'
import './blogs.css'
import { Button, List, Pagination } from 'antd'
import { useNavigate } from 'react-router-dom'
import { PlusOutlined } from '@ant-design/icons'
import axios from 'axios'
import Search from './Search'
import { BlogType, BlogsType } from '@src/types/types'
import Blogcard from '@src/Components/BlogCard/Blogcard'

const Blogs: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('')
  const [blogs, setBlogs] = useState<BlogsType>([])
  const [filteredData, setFilteredData] = useState<BlogsType>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pageSize] = useState<number>(10)
  const handlePageChange = (page: number) => setCurrentPage(page)
  const navigate = useNavigate()

  const slicedData = filteredData?.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  )

  const handleSearch = (text: string) => setSearchText(text)

  const performSearchAndSort = useCallback(() => {
    let filtered = [...blogs] // 원본 데이터를 보존하기 위해 복사

    if (searchText) {
      filtered = filtered.filter(item =>
        item?.title.toLowerCase().includes(searchText.toLowerCase()),
      )
    }

    setFilteredData(filtered)
  }, [blogs, searchText])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_ENDPOINT}/api/blog/list`,
        )

        const data = response.data.blogPosts.reverse()
        setBlogs(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    performSearchAndSort()
  }, [blogs, searchText])

  const handleNewPost = () => navigate('/create')

  const renderGenerateBtn = () => {
    return (
      <div className="Floating__Btn">
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={handleNewPost}
        />
      </div>
    )
  }

  return (
    <div id="Blog">
      <div>
        <div className="Blog__Search">
          <Search onSearch={handleSearch} />
        </div>
        <List
          style={{
            marginTop: '30px',
            marginLeft: '30px',
            marginRight: '30px',
          }}
          grid={{ gutter: 12, xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 6 }}
          dataSource={slicedData} // 페이지네이션에 따라 잘라낸 데이터를 사용
          renderItem={(item: BlogType) => (
            <List.Item>
              <Blogcard blogData={item} />
            </List.Item>
          )}
        />
      </div>
      <div style={{ marginTop: '10px' }}>
        <Pagination
          className="Blog__Page"
          current={currentPage}
          total={filteredData?.length}
          pageSize={pageSize}
          showSizeChanger={false} // 페이지 크기 변경 옵션 숨김
          onChange={handlePageChange}
        />
      </div>
      {renderGenerateBtn()}
    </div>
  )
}

export default Blogs
