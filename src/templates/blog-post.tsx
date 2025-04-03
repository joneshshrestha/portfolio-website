import React from 'react'
import { graphql, PageProps } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import Layout from '../components/Layout'

type BlogPostData = {
  mdx: {
    frontmatter: {
      title: string
      date: string
      author: string
    }
    body: string
  }
}

const components = {
  h1: (props: any) => (
    <h1
      className='text-2xl sm:text-3xl font-medium mb-4 sm:mb-6 text-gray-900 dark:text-gray-100'
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className='text-xl sm:text-2xl font-medium mt-6 sm:mt-8 mb-3 sm:mb-4 text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-2'
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className='text-lg sm:text-xl font-medium mt-4 sm:mt-6 mb-2 sm:mb-3 text-gray-900 dark:text-gray-100'
      {...props}
    />
  ),
  h4: (props: any) => (
    <h4
      className='text-base sm:text-lg font-medium mt-4 sm:mt-6 mb-2 sm:mb-3 text-gray-900 dark:text-gray-100'
      {...props}
    />
  ),
  p: (props: any) => (
    <p
      className='mb-4 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed'
      {...props}
    />
  ),
  ul: (props: any) => (
    <ul
      className='list-disc pl-4 sm:pl-6 mb-4 text-sm sm:text-base text-gray-700 dark:text-gray-300 space-y-1'
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol
      className='list-decimal pl-4 sm:pl-6 mb-4 text-sm sm:text-base text-gray-700 dark:text-gray-300 space-y-1'
      {...props}
    />
  ),
  li: (props: any) => (
    <li className='mb-1 text-gray-700 dark:text-gray-300' {...props} />
  ),
  a: (props: any) => (
    <a
      className='text-primary-light dark:text-primary-dark hover:underline'
      {...props}
    />
  ),
  blockquote: (props: any) => (
    <blockquote
      className='border-l-4 border-gray-300 dark:border-gray-600 pl-3 sm:pl-4 italic my-3 sm:my-4 text-sm sm:text-base text-gray-700 dark:text-gray-300'
      {...props}
    />
  ),
  code: (props: any) => (
    <code
      className='bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-xs sm:text-sm text-gray-900 dark:text-gray-100'
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre
      className='bg-gray-100 dark:bg-gray-800 p-3 sm:p-4 rounded-lg overflow-x-auto mb-3 sm:mb-4 text-xs sm:text-sm text-gray-900 dark:text-gray-100'
      {...props}
    />
  ),
  img: (props: any) => (
    <img className='w-full h-auto rounded-lg my-4 sm:my-6' {...props} />
  ),
}

const BlogPostTemplate: React.FC<PageProps<BlogPostData>> = ({
  data,
  children,
}) => {
  const { frontmatter } = data.mdx

  return (
    <Layout>
      <article className='mt-12 sm:mt-24 max-w-3xl mx-auto'>
        <header className='mb-6 sm:mb-8'>
          <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900 dark:text-gray-100'>
            {frontmatter.title}
          </h1>
          <div className='flex flex-wrap items-center text-xs sm:text-sm text-gray-500 dark:text-gray-400'>
            <span>{frontmatter.date}</span>
            <span className='mx-2 hidden sm:inline'>•</span>
            <span className='mx-2 sm:hidden'>|</span>
            <span>{frontmatter.author}</span>
          </div>
        </header>

        <div className='prose dark:prose-invert max-w-none prose-sm sm:prose-base'>
          {children}
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        author
      }
      body
    }
  }
`

export default BlogPostTemplate
