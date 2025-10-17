import React from 'react';
import Layout from '../components/Layout';

const featuredProjects = [
  {
    title: 'Advanced Evolution Simulator',
    description: 'A simulation of bipedals that try to learn to walk as humans.',
    image: '/img/advanced-evolution-simulator.jpg',
    github: 'https://github.com/adityathebe/evolutionSimulator',
    demo: 'https://adityathebe.github.io/evolutionSimulator/',
  },
  {
    title: 'Evolution Simulator',
    description: 'JavaScript simulator for evolving artificial creatures with Tensorflow.js.',
    image: '/img/evolution-simulator.jpg',
    github: 'https://github.com/joneshshrestha/Evolution-Simulator',
    demo: 'https://joneshshrestha.github.io/Evolution-Simulator/',
  },
];

const otherProjects = [
  {
    title: 'Kantipur App',
    description: 'Latest ad-free news from Kantipur & The Kathmandu Post.',
    github: 'https://github.com/joneshshrestha/kantipur-web-scraper',
    demo: 'https://kantipur-app.fly.dev/',
  },
  {
    title: 'KURA (Kathmandu University Requests and Answers)',
    description: 'A platform for Kathmandu University students to ask and answer questions.',
    github: 'https://github.com/joneshshrestha/kura',
    demo: '',
  },
  {
    title: 'KU (Kathmandu University) BOT',
    description: 'A bot for Kathmandu University students.',
    github: 'https://github.com/adityathebe/KU-BOT',
    demo: '',
  },
  {
    title: 'Quick Sort Visualization',
    description: 'Interactive visualization of the Quick Sort algorithm.',
    github: '',
    demo: 'https://joneshshrestha.github.io/SortingVisualization/',
  },
  {
    title: 'Perlin Noise',
    description: 'A tool for generating Perlin noise patterns.',
    github: '',
    demo: 'https://joneshshrestha.github.io/Perlin-Noise/',
  },
  {
    title: 'Backroads App',
    description: 'Travel service website with ReactJS.',
    github: 'https://github.com/joneshshrestha/React-Projects/tree/main/backroads-app',
    demo: 'https://stirring-flan-803d1d.netlify.app/',
  },
  {
    title: 'OMGSoundboard',
    description: 'Android Soundboard website with Material Design and finest tunes.',
    github: 'https://github.com/joneshshrestha/OMGSoundboard.github.io',
    demo: 'https://omgsoundboard.audio/',
  },
  {
    title: 'High Fidelity Wireframe',
    description: 'Instructor HQ website UX wireframes designed with Adobe tools.',
    github: '',
    demo: 'https://xd.adobe.com/view/0ce85bb2-f691-4086-4f4b-4121f3c28e95-7ad9/?fullscreen&hints=off',
  },
  {
    title: 'Drum Kit',
    description: 'An interactive drum kit web application.',
    github: '',
    demo: 'https://joneshshrestha.github.io/web-development/Drum%20Kit/',
  },
  {
    title: 'Facebook Phishing Site',
    description: 'A mock Facebook login page for educational purposes.',
    github: 'https://github.com/joneshshrestha/mock-fb-login-page',
    demo: '',
  },
  {
    title: 'Simon Game',
    description: 'A classic Simon memory game.',
    github: '',
    demo: 'https://joneshshrestha.github.io/web-development/Simon%20Game/',
  },
  {
    title: 'iOS App Development',
    description: 'Various iOS applications developed with Swift.',
    github: 'https://github.com/joneshshrestha/iOS-development/',
    demo: '',
  },
];

const PortfolioPage = () => {
  return (
    <Layout>
      <div className="space-y-16">
        <section>
          <h1 className="text-2xl font-medium tracking-tight mb-3">Featured Projects</h1>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="block">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-contain rounded-t-lg"
                  />
                </a>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-light dark:text-primary-dark hover:underline"
                      >
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-light dark:text-primary-dark hover:underline"
                      >
                        Live Demo
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
          <div className="space-y-4">
            {otherProjects.map((project, index) => (
              <div key={index} className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{project.description}</p>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark hover:underline"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark hover:underline"
                    >
                      Live Demo
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
