import React, { useCallback, useEffect, useState } from 'react'
import './blogs.css'
import { Button, Pagination } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { PlusOutlined } from '@ant-design/icons'
import { formatDate } from '../../utils/common'
import axios from 'axios'
import Search from './Search'

export interface BlogType {
  post_id: number
  title: string
  views: number
  creation_date: string
}

export type BlogTypes = BlogType[]

const Blog: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('')
  const [blogs, setBlogs] = useState<BlogTypes>([])
  const [filteredData, setFilteredData] = useState<BlogTypes>([])
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
        console.log(response.data)

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
  }, [setBlogs, searchText, performSearchAndSort])

  const handleNewPost = () => navigate('/generate')

  const renderGenerateBtn = () => {
    if (localStorage.userId === 'master') {
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
  }

  return (
    <div id="Blog">
      <div>
        <div className="Blog__Search">
          <Search onSearch={handleSearch} />
        </div>
        <div className="Blog__Wrapper">
          <table className="BlogTable">
            <colgroup>
              <col className="Col__Id"></col>
              <col className="Col__Title"></col>
              <col className="Col__Date"></col>
              <col className="Col__View"></col>
            </colgroup>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성일</th>
                <th>조회수</th>
              </tr>
            </thead>
            <tbody>
              {slicedData?.map(item => (
                <tr key={item?.post_id}>
                  <td>{item?.post_id}</td>
                  <td>
                    <Link to={`/blogdetails/${item?.post_id}`}>
                      {item?.title}
                    </Link>
                  </td>
                  <td>
                    {item?.creation_date
                      ? formatDate(new Date(item?.creation_date))
                      : ''}
                  </td>
                  <td>{item?.views}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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

export default Blog

// const Info: React.FC = () => {
//
//   };

//   return (
//     <div>
//       <div
//         style={{
//           margin: "50px 100px 0 100px",
//           paddingLeft: "30px",
//           paddingRight: "30px",
//         }}
//       >
//         <div style={{ display: "flex", justifyContent: "space-between" }}>
//           <h2>IT 정보</h2>
//
//         </div>

//
//         {renderGenerateBtn()}
//       </div>
//     </div>
//   );
// };
