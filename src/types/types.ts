export interface BlogType {
  post_id: number
  title: string
  thumbnail: string
  views: number
  creation_date: string
  content: string
}

export type BlogsType = BlogType[]

export interface EventType {
  event_id: string
  event_title: string
  event_date: string
  event_type: string
  event_text: string
}

export type EventsType = EventType[]
