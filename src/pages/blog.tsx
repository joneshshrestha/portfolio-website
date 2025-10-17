import React from 'react';
import Layout from '../components/Layout';
import { Link, graphql, PageProps } from 'gatsby';

type BlogPageData = {
  allMdx: {
    nodes: Array<{
      id: string;
      frontmatter: {
        title: string;
        date: string;
        author: string;
      };
      fields: {
        slug: string;
      };
      excerpt: string;
    }>;
  };
};

const BlogPage: React.FC<PageProps<BlogPageData>> = ({ data }) => {
  const posts = data.allMdx.nodes;

  return (
    <Layout>
      <div className="space-y-16">
        <section>
          <div className="space-y-8">
            {posts.map(post => (
              <article key={post.id} className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <Link
                  to={post.fields.slug}
                  className="text-xl font-medium text-gray-900 dark:text-gray-100 hover:text-primary-light dark:hover:text-primary-dark"
                >
                  {post.frontmatter.title}
                </Link>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                  <span>{post.frontmatter.date}</span>
                  <span>•</span>
                  <span>{post.frontmatter.author}</span>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-300">{post.excerpt}</p>
                <Link
                  to={post.fields.slug}
                  className="inline-block mt-4 text-sm text-primary-light dark:text-primary-dark hover:underline"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  query {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { fields: { slug: { regex: "/^/blog//" } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          author
        }
        fields {
          slug
        }
        excerpt(pruneLength: 200)
      }
    }
  }
`;

export const Head = () => <title>Blog - Jonesh Shrestha</title>;
