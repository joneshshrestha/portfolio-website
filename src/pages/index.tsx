import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { Link, graphql, PageProps } from 'gatsby';

type HomePageData = {
  allMdx: {
    nodes: Array<{
      id: string;
      frontmatter: {
        title: string;
        date: string;
      };
      fields: {
        slug: string;
      };
    }>;
  };
};

const sentences = [
  'develop AI models.',
  'train neural networks.',
  'build machine learning systems.',
  'build recommendation engines.',
  'analyze complex datasets.',
  'optimize deep learning pipelines.',
];

const featuredProjects = [
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with Gatsby, React, and Tailwind CSS.',
    image: '/img/portfolio.jpg',
    githubLink: 'https://github.com/joneshshrestha/portfolio-website',
    demoLink: 'https://joneshshrestha.com',
  },
  {
    title: 'OMG Soundboard',
    description: 'A web application for creating and sharing soundboards.',
    image: '/img/OMGSoundboard.jpg',
    githubLink: 'https://github.com/joneshshrestha/omg-soundboard',
    demoLink: 'https://omg-soundboard.vercel.app',
  },
  {
    title: 'Backroads App',
    description: 'A travel website showcasing various tour packages and destinations.',
    image: '/img/backroads-app.jpg',
    githubLink: 'https://github.com/joneshshrestha/backroads',
    demoLink: 'https://backroads-app.vercel.app',
  },
];

const HomePage: React.FC<PageProps<HomePageData>> = ({ data }) => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const recentPosts = data.allMdx.nodes.slice(0, 5);

  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseDuration = 2000;

    const type = () => {
      const currentSentence = sentences[currentSentenceIndex];

      if (isDeleting) {
        setCurrentText(currentSentence.substring(0, currentText.length - 1));
      } else {
        setCurrentText(currentSentence.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === currentSentence) {
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseDuration);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentSentenceIndex((currentSentenceIndex + 1) % sentences.length);
      }
    };

    if (!isPaused) {
      const timeout = setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
      return () => clearTimeout(timeout);
    }
  }, [currentText, isDeleting, isPaused, currentSentenceIndex]);

  return (
    <Layout>
      <div className="space-y-16">
        <section>
          <div className="typewriter mt-10">
            <h1 className="text-2xl font-medium tracking-tight mb-3">Hi, I am Jonesh.</h1>
            <h1 className="text-2xl font-medium tracking-tight">
              I like to <span>{currentText}</span>
              <span className="inline-block w-2.5 h-9 bg-black dark:bg-white animate-blink mx-2"></span>
            </h1>
          </div>

          <div className="bio mt-8">
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              I thrive on transforming ideas into tangible, functional realities, growing and
              learning in this ever-evolving tech landscape.
            </p>
          </div>

          <div className="mt-8">
            <Link
              to="/portfolio"
              className="inline-block text-sm text-primary-light dark:text-primary-dark hover:underline"
            >
              View Featured Projects →
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-5">Recent Posts</h2>
          <div className="space-y-6">
            {recentPosts.map(post => (
              <div key={post.id} className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <Link
                  to={post.fields.slug}
                  className="text-base font-light text-gray-900 dark:text-gray-100 hover:text-primary-light dark:hover:text-primary-dark"
                >
                  {post.frontmatter.title}
                </Link>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                  {post.frontmatter.date}
                </p>
              </div>
            ))}
          </div>
          <div className="text-right mt-4">
            <Link
              to="/blog"
              className="text-sm text-primary-light dark:text-primary-dark hover:underline"
            >
              All Posts →
            </Link>
          </div>
        </section>
      </div>
      <style jsx>{`
        .cursor {
          display: inline-block;
          width: 2px;
          height: 1em;
          background-color: currentColor;
          margin-left: 2px;
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          from,
          to {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </Layout>
  );
};

export default HomePage;

export const query = graphql`
  query {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { fields: { slug: { regex: "/^/blog//" } } }
      limit: 3
    ) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
        fields {
          slug
        }
      }
    }
  }
`;

export const Head = () => <title>Jonesh Shrestha - AI/ML Engineer</title>;
