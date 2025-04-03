import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'

const blogPosts = [
  {
    title: 'Fly.io: The Fun, Powerful, and Free Node.js Hosting Platform',
    date: 'Aug 6, 2023',
    excerpt:
      'Learn how to deploy your Node.js applications on Fly.io, a platform that makes it easy to deploy applications close to your users.',
    slug: 'flyio-hosting',
    readTime: '10 min read',
  },
  {
    title: 'Understanding The Lightning Network',
    date: 'July 24, 2021',
    excerpt:
      'A deep dive into the Lightning Network, a second-layer solution for Bitcoin that enables instant, low-cost payments.',
    slug: 'lighting-network',
    readTime: '12 min read',
  },
]

const BlogPage = () => {
  return (
    <Layout>
      <div className='space-y-16'>
        <section>
          <div className='space-y-8'>
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className='border-t border-gray-200 dark:border-gray-700 pt-6'
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className='text-xl font-medium text-gray-900 dark:text-gray-100 hover:text-primary-light dark:hover:text-primary-dark'
                >
                  {post.title}
                </Link>
                <div className='flex items-center gap-4 mt-2 text-sm text-gray-500 dark:text-gray-400'>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <p className='mt-4 text-gray-600 dark:text-gray-300'>
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className='inline-block mt-4 text-sm text-primary-light dark:text-primary-dark hover:underline'
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default BlogPage

export const Head = () => <title>Blog - Jonesh Shrestha</title>
