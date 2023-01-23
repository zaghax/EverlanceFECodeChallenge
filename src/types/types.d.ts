export interface cardInfoDataTypes {
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
    score: number
}

// Response from /users/{username}
export interface responseDataTypes {
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
    name: string
    company: string
    blog: string
    location: string
    email: string | null
    hireable: boolean
    bio: string | null
    twitter_username: string
    public_repos: number
    public_gists: number
    followers: number
    following: number
    created_at: string
    updated_at: string
    score: number
}

// Response from /search/users?q={username}&page=1&per_page=10
export interface responseDataTypes {
    total_count: number
    incomplete_results: boolean
    items: cardInfoDataTypes[]
}
export interface StoreState {
    cardList: cardInfoDataTypes[]
    userDetail: responseDataTypes | null
}