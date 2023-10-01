import axios from 'axios'

export interface IFetchSlotsResponse {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}

export const getUsers = async (since?: number) => {
  const request = axios.create()

  const { data } = await request.get<IFetchSlotsResponse[]>(
    `https://api.github.com/users${(since !== undefined) && (since !== 0) ? `?since=${since}` : ''}`
  )

  return data
}
