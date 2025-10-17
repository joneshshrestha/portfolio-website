import React, { useState } from 'react';
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

// Helper function to clean excerpt (remove TL;DR content)
const cleanExcerpt = (excerpt: string): string => {
  // Remove "TL;DR" and anything after it until we hit the main content
  const tldrPattern = /TL;DR[\s\S]*?(?=\n\n[A-Z]|$)/;
  let cleaned = excerpt.replace(tldrPattern, '').trim();

  // If excerpt is now too short or empty, just remove the "TL;DR" prefix
  if (cleaned.length < 50) {
    cleaned = excerpt.replace(/^TL;DR\s*/i, '').trim();
  }

  return cleaned;
};

// Helper function to categorize blogs based on keywords
const getBlogCategory = (title: string, excerpt: string): string => {
  const text = (title + ' ' + excerpt).toLowerCase();

  if (
    text.includes('reinforcement') ||
    text.includes('mdp') ||
    text.includes('frozenlake') ||
    text.includes('value iteration')
  ) {
    return 'Reinforcement Learning';
  }
  if (
    text.includes('deep learning') ||
    text.includes('cnn') ||
    text.includes('neural network') ||
    text.includes('evolution')
  ) {
    return 'Deep Learning';
  }
  if (
    text.includes('clustering') ||
    text.includes('kmeans') ||
    text.includes('dbscan') ||
    text.includes('hdbscan')
  ) {
    return 'Clustering';
  }
  if (
    text.includes('classification') ||
    text.includes('svm') ||
    text.includes('decision tree') ||
    text.includes('random forest') ||
    text.includes('logistic')
  ) {
    return 'Classification';
  }
  if (
    text.includes('regression') ||
    text.includes('linear regression') ||
    text.includes('softmax')
  ) {
    return 'Regression';
  }
  if (
    text.includes('dimensionality') ||
    text.includes('pca') ||
    text.includes('tsne') ||
    text.includes('umap')
  ) {
    return 'Dimensionality Reduction';
  }
  if (text.includes('pipeline') || text.includes('gridsearch') || text.includes('hyperparameter')) {
    return 'ML Engineering';
  }
  if (text.includes('eda') || text.includes('exploratory') || text.includes('preprocessing')) {
    return 'Data Science';
  }
  if (text.includes('route') || text.includes('search') || text.includes('algorithm')) {
    return 'Algorithms';
  }
  if (text.includes('fly.io') || text.includes('lightning') || text.includes('hosting')) {
    return 'DevOps';
  }

  return 'Machine Learning';
};

const BlogPage: React.FC<PageProps<BlogPageData>> = ({ data }) => {
  const posts = data.allMdx.nodes;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Categorize all posts
  const postsWithCategories = posts.map(post => ({
    ...post,
    category: getBlogCategory(post.frontmatter.title, post.excerpt),
  }));

  // Get unique categories
  const categories = [
    'All',
    ...Array.from(new Set(postsWithCategories.map(post => post.category))),
  ];

  // Filter posts by category
  const filteredPosts =
    selectedCategory === 'All'
      ? postsWithCategories
      : postsWithCategories.filter(post => post.category === selectedCategory);

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-medium tracking-tight mb-3">Blog</h1>
              <p className="text-gray-600 dark:text-gray-300">
                Technical deep-dives into machine learning, AI algorithms, and data science
                projects.
              </p>
            </div>
            <a
              href="/rss.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1.5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium rounded-md transition-colors"
              title="Subscribe to RSS Feed"
            >
              <svg className="w-3.5 h-3.5 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z" />
              </svg>
              RSS
            </a>
          </div>
        </section>

        {/* Category Filter */}
        <section>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white dark:bg-blue-500'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
          </div>
        </section>

        {/* Blog Posts */}
        <section>
          <div className="space-y-8">
            {filteredPosts.map(post => (
              <article
                key={post.id}
                className="border-t border-gray-200 dark:border-gray-700 pt-6 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 p-6 rounded-lg"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    {/* Category Badge */}
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full mb-3">
                      {post.category}
                    </span>

                    <Link
                      to={post.fields.slug}
                      className="block text-xl font-semibold text-gray-900 dark:text-gray-100 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                    >
                      {post.frontmatter.title}
                    </Link>

                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                      <span>{post.frontmatter.date}</span>
                      <span>•</span>
                      <span>{post.frontmatter.author}</span>
                    </div>

                    <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                      {cleanExcerpt(post.excerpt)}
                    </p>

                    <Link
                      to={post.fields.slug}
                      className="inline-block mt-4 text-sm font-medium text-primary-light dark:text-primary-dark hover:underline"
                    >
                      Read full article →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No posts found in this category.</p>
          </div>
        )}
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
