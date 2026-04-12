import { getLatestPosts } from '../lib/blog'
import IdeasClient from './IdeasClient'

export default function Ideas() {
  const posts = getLatestPosts(3)
  return <IdeasClient posts={posts} />
}
