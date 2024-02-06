import React from 'react'
import { DiscussionEmbed } from 'disqus-react'

interface DisqusCommentsProps {
  // Disqus에서 설정한 shortname
  shortname: string
  // 현재 페이지의 URL
  url: string
  // 현재 페이지의 제목
  title: string
  // 현재 페이지의 식별자 (고유한 값을 사용하면 됨)
  identifier: string
}

const Comment: React.FC<DisqusCommentsProps> = ({
  shortname,
  url,
  title,
  identifier,
}) => {
  const disqusConfig = {
    shortname: shortname,
    config: { identifier: identifier, title: title, url: url },
  }
  return (
    <>
      {/* 댓글 목록 */}
      <DiscussionEmbed {...disqusConfig} />
    </>
  )
}

export default Comment
