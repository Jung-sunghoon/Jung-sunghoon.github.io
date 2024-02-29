import React from 'react'
import { Card } from 'antd'
import { EyeFilled } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { BlogType } from '@src/types/types'
import { formatDate } from '@src/utils/common'
import { useNavigate } from 'react-router-dom'
import img from '@src/assets/img'

const { Meta } = Card

interface BlogProps {
  blogData: BlogType
}

const Blogcard: React.FC<BlogProps> = ({ blogData }) => {
  const blogInfo = blogData
  const navigate = useNavigate()

  return (
    <Card
      cover={
        //@ts-ignore
        <div
          style={{
            height: '160px',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '10px',
          }}
        >
          <img
            style={{
              cursor: 'pointer',
              height: 'auto',
              width: 'auto',
            }}
            alt="example"
            //@ts-ignore
            src={blogInfo?.thumbnail || img.comImg}
          />
        </div>
      }
      style={{
        marginBottom: '30px',
        maxWidth: '700px',
        maxHeight: '500px',
      }}
      onClick={() => {
        navigate(`/blogdetails/${blogInfo?.post_id}`)
      }}
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
