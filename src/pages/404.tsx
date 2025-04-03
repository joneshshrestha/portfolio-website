import * as React from 'react'
import { Link, HeadFC, PageProps } from 'gatsby'
import Layout from '../components/Layout'

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className='mt-12 sm:mt-24 flex flex-col items-center justify-center text-center'>
        <h1 className='text-3xl sm:text-4xl font-bold mb-4'>Page not found</h1>
        <p className='text-muted-light dark:text-muted-dark mb-8 max-w-md'>
          Sorry, I couldn't find what you were looking for. 😔
          {process.env.NODE_ENV === 'development' ? (
            <span className='block mt-2'>
              Page might be missing in{' '}
              <code className='bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm'>
                src/pages/
              </code>
              .
            </span>
          ) : null}
        </p>
        <Link
          to='/'
          className='inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-light dark:bg-primary-dark hover:opacity-90'
        >
          Go home
        </Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found | Jonesh Shrestha</title>
