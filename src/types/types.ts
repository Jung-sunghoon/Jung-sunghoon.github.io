export interface BlogType {
  post_id: number
  title: string
  thumbnail: string
  views: number
  creation_date: string
  content: string
}

export type BlogsType = BlogType[]
