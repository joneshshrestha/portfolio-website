import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout';

type BlogPostData = {
  mdx: {
    frontmatter: {
      title: string;
      date: string;
      author: string;
    };
    body: string;
  };
};

const components = {
  h1: (props: any) => (
    <h1
      className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-gray-100 leading-tight"
      {...props}
    />
  ),
  h2: (props: any) => {
    // Special styling for TL;DR section
    if (props.children === 'TL;DR') {
      return (
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-blue-900 dark:text-blue-100 flex items-center">
          <span className="mr-2">📌</span>
          {props.children}
        </h2>
      );
    }
    return (
      <h2
        className="text-2xl sm:text-3xl font-bold mt-10 sm:mt-12 mb-4 sm:mb-5 text-gray-900 dark:text-gray-100 border-b-2 border-gray-200 dark:border-gray-700 pb-3"
        {...props}
      />
    );
  },
  h3: (props: any) => (
    <h3
      className="text-xl sm:text-2xl font-semibold mt-8 sm:mt-10 mb-3 sm:mb-4 text-gray-900 dark:text-gray-100"
      {...props}
    />
  ),
  h4: (props: any) => (
    <h4
      className="text-lg sm:text-xl font-semibold mt-6 sm:mt-8 mb-2 sm:mb-3 text-gray-900 dark:text-gray-100"
      {...props}
    />
  ),
  p: (props: any) => {
    return (
      <p
        className="mb-5 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
        {...props}
      />
    );
  },
  ul: (props: any) => (
    <ul
      className="list-disc pl-6 sm:pl-8 mb-5 text-base sm:text-lg text-gray-700 dark:text-gray-300 space-y-2"
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol
      className="list-decimal pl-6 sm:pl-8 mb-5 text-base sm:text-lg text-gray-700 dark:text-gray-300 space-y-2"
      {...props}
    />
  ),
  li: (props: any) => (
    <li className="mb-2 text-gray-700 dark:text-gray-300 leading-relaxed" {...props} />
  ),
  a: (props: any) => (
    <a
      className="text-primary-light dark:text-primary-dark hover:underline font-medium transition-colors"
      {...props}
    />
  ),
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-blue-500 dark:border-blue-400 bg-gray-50 dark:bg-gray-800/50 pl-6 pr-4 py-4 italic my-6 rounded-r-lg text-base sm:text-lg text-gray-700 dark:text-gray-300"
      {...props}
    />
  ),
  code: (props: any) => (
    <code
      className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm sm:text-base text-gray-900 dark:text-gray-100 font-mono"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre
      className="bg-gray-100 dark:bg-gray-800 p-4 sm:p-6 rounded-lg overflow-x-auto mb-6 sm:mb-8 text-sm sm:text-base text-gray-900 dark:text-gray-100 shadow-inner"
      {...props}
    />
  ),
  table: (props: any) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700" {...props} />
    </div>
  ),
  th: (props: any) => (
    <th
      className="px-4 py-3 bg-gray-50 dark:bg-gray-800 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
      {...props}
    />
  ),
  td: (props: any) => (
    <td
      className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700"
      {...props}
    />
  ),
  img: (props: any) => <img className="w-full h-auto rounded-lg my-8 shadow-lg" {...props} />,
  hr: (props: any) => (
    <hr className="my-8 border-t-2 border-gray-200 dark:border-gray-700" {...props} />
  ),
  strong: (props: any) => (
    <strong className="font-bold text-gray-900 dark:text-gray-100" {...props} />
  ),
  em: (props: any) => <em className="italic text-gray-700 dark:text-gray-300" {...props} />,
};

const BlogPostTemplate: React.FC<PageProps<BlogPostData>> = ({ data }) => {
  const { frontmatter, body } = data.mdx;

  return (
    <Layout>
      <article className="mt-8 max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100 leading-tight">
            {frontmatter.title}
          </h1>
          <div className="flex flex-wrap items-center text-sm sm:text-base text-gray-500 dark:text-gray-400">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {frontmatter.date}
            </span>
            <span className="mx-3">•</span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              {frontmatter.author}
            </span>
          </div>
        </header>

        {/* Content */}
        <div className="prose dark:prose-invert max-w-none prose-lg">
          <MDXProvider components={components}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </div>

        {/* Footer Navigation */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <a
            href="/blog"
            className="inline-flex items-center text-primary-light dark:text-primary-dark hover:underline font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to all posts
          </a>
        </div>
      </article>
    </Layout>
  );
};

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
`;

export default BlogPostTemplate;
