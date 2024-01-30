export interface BlogType {
  post_id: number
  title: string
  thumbnail: any
  views: number
  creation_date: string
  content: string
}

export type BlogsType = BlogType[]

export interface EventType {
  event_id: number
  event_title: string
  event_date: string
  event_type: string
  event_text: string
}

export type EventsType = EventType[]
