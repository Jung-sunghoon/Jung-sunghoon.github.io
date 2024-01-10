import React from 'react'
import { Card } from 'antd'
import { EyeFilled } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { BlogType } from '@src/types/types'
import { formatDate } from '@src/utils/common'
import { useNavigate } from 'react-router-dom'

const { Meta } = Card

interface BlogProps {
  blogData: BlogType
}

const Blogcard: React.FC<BlogProps> = ({ blogData }) => {
  const blogInfo = blogData
  const navigate = useNavigate()

  return (
    <Card
      style={{
        marginBottom: '30px',
        maxWidth: '400px',
        maxHeight: '300px',
      }}
      cover={
        //@ts-ignore
        <img
          height={160}
          style={{
            objectFit: 'cover',
            cursor: 'pointer',
          }}
          alt="example"
          //@ts-ignore
          src={blogInfo?.thumbnail}
          onClick={() => {
            navigate(`/blogdetails/${blogInfo?.post_id}`)
          }}
        />
      }
      actions={[
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <EyeFilled
            style={{
              marginRight: '10px',
              fontSize: '18px',
            }}
          />
          {`${blogInfo?.views}`}
        </div>,
        <div>{`${formatDate(new Date(blogInfo?.creation_date))}`}</div>,
      ]}
    >
      <Link to={`/blogdetails/${blogInfo?.post_id}`}>
        <Meta title={blogInfo?.title} />
      </Link>
    </Card>
  )
}

export default Blogcard
