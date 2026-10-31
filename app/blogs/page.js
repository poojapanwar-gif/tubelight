import FeaturedBlog from '@/components/Blogs/FeaturedBlog'
import BlogList from '@/components/Blogs/BlogList'
import React from 'react'

export const metadata = {
  title: 'Blogs — Tubelight Communications',
  description:
    'Insights on CPaaS, RCS, SMS, WhatsApp, voice and customer engagement from the Tubelight Communications team.',
}

const page = () => {
  return (
    <>
      <FeaturedBlog />
      <BlogList />
    </>
  )
}

export default page
