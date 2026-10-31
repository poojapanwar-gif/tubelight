import { notFound } from 'next/navigation'
import BlogDetail from '@/components/Blogs/BlogDetail'
import blogPosts, { getPost } from '@/components/Blogs/blogData'
import React from 'react'

export const dynamicParams = false

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: 'Blog not found — Tubelight Communications' }
  return {
    title: `${post.title} — Tubelight Communications`,
    description: post.content?.intro || post.excerpt,
  }
}

const page = async ({ params }) => {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return <BlogDetail post={post} />
}

export default page
