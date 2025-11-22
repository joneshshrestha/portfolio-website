import React from 'react';
import Layout from '../components/Layout';

const featuredProjects = [
  {
    title: 'FrozenLake Environment Optimization',
    description: 'Reinforcement learning with MDP and value iteration achieving 100% success rate.',
    image: '/img/mdp.gif',
    github:
      'https://github.com/joneshshrestha/artificial-intelligence/tree/main/Markov%20Decision%20Process',
    tech: ['Python', 'Gymnasium', 'NumPy', 'Matplotlib'],
    category: 'AI/ML',
  },
  {
    title: 'Developesr Programming Language Prediction',
    description:
      'Complete ML pipeline with cross-validation, grid search, and 77.5% test accuracy.',
    image: '/img/binary-classification.webp',
    github:
      'https://github.com/joneshshrestha/artificial-intelligence/tree/main/Developer%20Language%20Prediction',
    tech: ['Python', 'Scikit-learn', 'NumPy', 'Pandas'],
    category: 'AI/ML',
  },
  {
    title: 'Delivery Route Optimization',
    description:
      'AI search algorithms (BFS, UCS, A*) for logistics with 4x speedup using heuristics.',
    image: '/img/delivery-route.webp',
    github:
      'https://github.com/joneshshrestha/artificial-intelligence/tree/main/Delivery%20Route%20Finder',
    tech: ['Python', 'JSON', 'Graph Algorithms', 'Heuristic Search'],
    category: 'AI/ML',
  },
  {
    title: 'Advanced Evolution Simulator',
    description: 'A simulation of bipedals that try to learn to walk as humans.',
    image: '/img/advanced-evolution-simulator.webp',
    github: 'https://github.com/adityathebe/evolutionSimulator',
    demo: 'https://adityathebe.github.io/evolutionSimulator/',
    tech: ['JavaScript', 'Matter.js', 'HTML5 Canvas', 'Genetic Algorithm'],
    category: 'AI/ML',
  },
  {
    title: 'Evolution Simulator',
    description: 'JavaScript simulator for evolving artificial creatures with Tensorflow.js.',
    image: '/img/evolution-simulator.webp',
    github: 'https://github.com/joneshshrestha/Evolution-Simulator',
    demo: 'https://joneshshrestha.github.io/Evolution-Simulator/',
    tech: ['JavaScript', 'TensorFlow.js', 'HTML5 Canvas', 'Genetic Algorithm'],
    category: 'AI/ML',
  },
];

const otherProjects = [
  {
    title: 'Kantipur App',
    description: 'Latest ad-free news from Kantipur & The Kathmandu Post.',
    github: 'https://github.com/joneshshrestha/kantipur-web-scraper',
    demo: 'https://kantipur-app.fly.dev/',
    tech: ['Node.js', 'Express', 'Cheerio', 'Fly.io'],
  },
  {
    title: 'KURA (Kathmandu University Requests and Answers)',
    description: 'A platform for Kathmandu University students to ask and answer questions.',
    github: 'https://github.com/joneshshrestha/kura',
    demo: '',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Quick Sort Visualization',
    description: 'Interactive visualization of the Quick Sort algorithm.',
    github: '',
    demo: 'https://joneshshrestha.github.io/SortingVisualization/',
    tech: ['JavaScript', 'HTML5 Canvas', 'Algorithms', 'CSS'],
  },
  {
    title: 'Backroads App',
    description: 'Travel service website with ReactJS.',
    github: 'https://github.com/joneshshrestha/React-Projects/tree/main/backroads-app',
    demo: 'https://stirring-flan-803d1d.netlify.app/',
    tech: ['React', 'JavaScript', 'CSS', 'Netlify'],
  },
  {
    title: 'KU (Kathmandu University) BOT',
    description: 'A bot for Kathmandu University students.',
    github: 'https://github.com/adityathebe/KU-BOT',
    demo: '',
    tech: ['Python', 'Selenium', 'Web Automation'],
  },
  {
    title: 'Perlin Noise',
    description: 'A tool for generating Perlin noise patterns.',
    github: '',
    demo: 'https://joneshshrestha.github.io/Perlin-Noise/',
    tech: ['JavaScript', 'HTML5 Canvas', 'Procedural Generation'],
  },
  {
    title: 'OMGSoundboard',
    description: 'Android Soundboard website with Material Design and finest tunes.',
    github: 'https://github.com/joneshshrestha/OMGSoundboard.github.io',
    demo: 'https://omgsoundboard.audio/',
    tech: ['HTML', 'CSS', 'JavaScript', 'Material Design'],
  },
  {
    title: 'High Fidelity Wireframe',
    description: 'Instructor HQ website UX wireframes designed with Adobe tools.',
    github: '',
    demo: 'https://xd.adobe.com/view/0ce85bb2-f691-4086-4f4b-4121f3c28e95-7ad9/?fullscreen&hints=off',
    tech: ['Adobe XD', 'UI/UX Design'],
  },
  {
    title: 'Drum Kit',
    description: 'An interactive drum kit web application.',
    github: '',
    demo: 'https://joneshshrestha.github.io/web-development/Drum%20Kit/',
    tech: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Simon Game',
    description: 'A classic Simon memory game.',
    github: '',
    demo: 'https://joneshshrestha.github.io/web-development/Simon%20Game/',
    tech: ['JavaScript', 'jQuery', 'Game Development'],
  },
  {
    title: 'iOS App Development',
    description: 'Various iOS applications developed with Swift.',
    github: 'https://github.com/joneshshrestha/iOS-development/',
    demo: '',
    tech: ['Swift', 'iOS', 'Xcode'],
  },
];

const PortfolioPage = () => {
  return (
    <Layout>
      <div className="space-y-16">
        <section>
          <h1 className="text-2xl font-medium tracking-tight mb-3">Featured Projects</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            AI/ML projects showcasing reinforcement learning, machine learning pipelines, and
            intelligent algorithms.
          </p>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <a
                  href={project.demo || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block aspect-video bg-gray-50 dark:bg-gray-800 overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </a>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-light dark:text-primary-dark hover:underline"
                      >
                        GitHub →
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-light dark:text-primary-dark hover:underline"
                      >
                        Live Demo →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-medium tracking-tight mb-3">Other Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Web applications, tools, and experiments across various technologies.
          </p>
          <div className="space-y-4">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="border-t border-gray-200 dark:border-gray-700 pt-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 p-4 rounded-lg"
              >
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>

                {/* Tech Stack Tags for Other Projects */}
                {project.tech && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark hover:underline text-sm"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark hover:underline text-sm"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PortfolioPage;

export const Head = () => <title>Portfolio - Jonesh Shrestha</title>;
