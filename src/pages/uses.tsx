import React from 'react';
import Layout from '../components/Layout';

const UsesPage = () => {
  return (
    <Layout>
      <div className="space-y-12">
        <section>
          <h1 className="text-2xl font-medium tracking-tight mb-6">Uses</h1>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-10">
              <div>
                <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-4">
                  Machine Learning & Data Science
                </h2>
                <div className="space-y-3">
                  <div className="flex items-baseline">
                    <a
                      href="https://www.python.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark hover:underline font-medium"
                    >
                      Python
                    </a>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                    <span className="text-gray-600 dark:text-gray-300">
                      Primary programming language
                    </span>
                  </div>
                  <div className="flex items-baseline">
                    <a
                      href="https://jupyter.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark hover:underline font-medium"
                    >
                      Jupyter Notebook
                    </a>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                    <span className="text-gray-600 dark:text-gray-300">
                      Interactive development
                    </span>
                  </div>
                  <div className="flex items-baseline">
                    <a
                      href="https://www.anaconda.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark hover:underline font-medium"
                    >
                      Anaconda
                    </a>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                    <span className="text-gray-600 dark:text-gray-300">Environment management</span>
                  </div>
                  <div className="flex items-baseline">
                    <a
                      href="https://numpy.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark hover:underline font-medium"
                    >
                      NumPy
                    </a>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                    <span className="text-gray-600 dark:text-gray-300">Numerical computing</span>
                  </div>
                  <div className="flex items-baseline">
                    <a
                      href="https://pandas.pydata.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark hover:underline font-medium"
                    >
                      Pandas
                    </a>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                    <span className="text-gray-600 dark:text-gray-300">Data manipulation</span>
                  </div>
                  <div className="flex items-baseline">
                    <a
                      href="https://scikit-learn.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark hover:underline font-medium"
                    >
                      Scikit-learn
                    </a>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                    <span className="text-gray-600 dark:text-gray-300">
                      Machine learning algorithms
                    </span>
                  </div>
                  <div className="flex items-baseline">
                    <a
                      href="https://www.tensorflow.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark hover:underline font-medium"
                    >
                      TensorFlow
                    </a>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                    <span className="text-gray-600 dark:text-gray-300">
                      Deep learning framework
                    </span>
                  </div>
                  <div className="flex items-baseline">
                    <a
                      href="https://matplotlib.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark hover:underline font-medium"
                    >
                      Matplotlib
                    </a>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                    <span className="text-gray-600 dark:text-gray-300">Data visualization</span>
                  </div>
                  <div className="flex items-baseline">
                    <a
                      href="https://seaborn.pydata.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark hover:underline font-medium"
                    >
                      Seaborn
                    </a>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                    <span className="text-gray-600 dark:text-gray-300">
                      Statistical visualization
                    </span>
                  </div>
                  <div className="flex items-baseline">
                    <a
                      href="https://gymnasium.farama.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark hover:underline font-medium"
                    >
                      Gymnasium
                    </a>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                    <span className="text-gray-600 dark:text-gray-300">Reinforcement learning</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-4">
                  Big Data & Distributed Systems
                </h2>
                <div className="space-y-3">
                  <div className="flex items-baseline">
                    <a
                      href="https://hadoop.apache.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark hover:underline font-medium"
                    >
                      Apache Hadoop
                    </a>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                    <span className="text-gray-600 dark:text-gray-300">
                      Distributed storage & processing
                    </span>
                  </div>
                  <div className="flex items-baseline">
                    <a
                      href="https://hive.apache.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark hover:underline font-medium"
                    >
                      Apache Hive
                    </a>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                    <span className="text-gray-600 dark:text-gray-300">Data warehouse queries</span>
                  </div>
                  <div className="flex items-baseline">
                    <a
                      href="https://kafka.apache.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark hover:underline font-medium"
                    >
                      Apache Kafka
                    </a>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                    <span className="text-gray-600 dark:text-gray-300">Stream processing</span>
                  </div>
                  <div className="flex items-baseline">
                    <a
                      href="https://aws.amazon.com/ec2/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark hover:underline font-medium"
                    >
                      AWS EC2
                    </a>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                    <span className="text-gray-600 dark:text-gray-300">
                      Cloud compute instances
                    </span>
                  </div>
                  <div className="flex items-baseline">
                    <a
                      href="https://aws.amazon.com/emr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark hover:underline font-medium"
                    >
                      AWS EMR
                    </a>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                    <span className="text-gray-600 dark:text-gray-300">
                      Managed Hadoop clusters
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-4">
                  Development Tools
                </h2>
                <div className="space-y-3">
                  <div className="flex items-baseline">
                    <a
                      href="https://code.visualstudio.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark hover:underline font-medium"
                    >
                      Visual Studio Code
                    </a>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                    <span className="text-gray-600 dark:text-gray-300">Code editor</span>
                  </div>
                  <div className="flex items-baseline">
                    <a
                      href="https://www.cursor.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark hover:underline font-medium"
                    >
                      Cursor
                    </a>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                    <span className="text-gray-600 dark:text-gray-300">AI-powered IDE</span>
                  </div>
                  <div className="flex items-baseline">
                    <a
                      href="https://git-scm.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark hover:underline font-medium"
                    >
                      Git
                    </a>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                    <span className="text-gray-600 dark:text-gray-300">Version control</span>
                  </div>
                  <div className="flex items-baseline">
                    <a
                      href="https://iterm2.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark hover:underline font-medium"
                    >
                      iTerm2
                    </a>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                    <span className="text-gray-600 dark:text-gray-300">Terminal emulator</span>
                  </div>
                  <div className="flex items-baseline">
                    <a
                      href="https://brew.sh/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark hover:underline font-medium"
                    >
                      Homebrew
                    </a>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                    <span className="text-gray-600 dark:text-gray-300">Package manager</span>
                  </div>
                  <div className="flex items-baseline">
                    <a
                      href="https://www.postman.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark hover:underline font-medium"
                    >
                      Postman
                    </a>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                    <span className="text-gray-600 dark:text-gray-300">API testing</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-10">
              <div>
                <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-4">
                  Cloud & Compute
                </h2>
                <div className="space-y-3">
                  <div className="flex items-baseline">
                    <a
                      href="https://www.cdm.depaul.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark hover:underline font-medium"
                    >
                      DePaul Research Servers
                    </a>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                    <span className="text-gray-600 dark:text-gray-300">GPU training & compute</span>
                  </div>
                  <div className="flex items-baseline">
                    <a
                      href="https://colab.research.google.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark hover:underline font-medium"
                    >
                      Google Colab
                    </a>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                    <span className="text-gray-600 dark:text-gray-300">Cloud notebooks</span>
                  </div>
                  <div className="flex items-baseline">
                    <a
                      href="https://mybinder.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark hover:underline font-medium"
                    >
                      Binder
                    </a>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                    <span className="text-gray-600 dark:text-gray-300">Interactive notebooks</span>
                  </div>
                  <div className="flex items-baseline">
                    <a
                      href="https://pages.github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark hover:underline font-medium"
                    >
                      GitHub Pages
                    </a>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                    <span className="text-gray-600 dark:text-gray-300">Static site hosting</span>
                  </div>
                  <div className="flex items-baseline">
                    <a
                      href="https://fly.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark hover:underline font-medium"
                    >
                      Fly.io
                    </a>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                    <span className="text-gray-600 dark:text-gray-300">Node.js app deployment</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-4">
                  Services
                </h2>
                <div className="space-y-3">
                  <div className="flex items-baseline">
                    <a
                      href="https://github.com/joneshshrestha/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark hover:underline font-medium"
                    >
                      GitHub
                    </a>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                    <span className="text-gray-600 dark:text-gray-300">Code repository</span>
                  </div>
                  <div className="flex items-baseline">
                    <a
                      href="https://bitwarden.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark hover:underline font-medium"
                    >
                      Bitwarden
                    </a>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                    <span className="text-gray-600 dark:text-gray-300">Password manager</span>
                  </div>
                  <div className="flex items-baseline">
                    <a
                      href="https://www.cloudflare.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark hover:underline font-medium"
                    >
                      Cloudflare
                    </a>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                    <span className="text-gray-600 dark:text-gray-300">Email hosting</span>
                  </div>
                  <div className="flex items-baseline">
                    <a
                      href="https://shop.ohodomain.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark hover:underline font-medium"
                    >
                      OhoDomain
                    </a>
                    <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                    <span className="text-gray-600 dark:text-gray-300">Domain provider</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-4">
                  System
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-400 uppercase tracking-wider mb-2">
                      Local Development
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-baseline">
                        <span className="font-medium text-gray-900 dark:text-gray-100">Model</span>
                        <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                        <span className="text-gray-600 dark:text-gray-300">MacBook Air 2020</span>
                      </div>
                      <div className="flex items-baseline">
                        <span className="font-medium text-gray-900 dark:text-gray-100">
                          Processor
                        </span>
                        <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                        <span className="text-gray-600 dark:text-gray-300">Apple M1</span>
                      </div>
                      <div className="flex items-baseline">
                        <span className="font-medium text-gray-900 dark:text-gray-100">GPU</span>
                        <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                        <span className="text-gray-600 dark:text-gray-300">Apple M1 8-Core</span>
                      </div>
                      <div className="flex items-baseline">
                        <span className="font-medium text-gray-900 dark:text-gray-100">RAM</span>
                        <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                        <span className="text-gray-600 dark:text-gray-300">8 GB</span>
                      </div>
                      <div className="flex items-baseline">
                        <span className="font-medium text-gray-900 dark:text-gray-100">SSD</span>
                        <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                        <span className="text-gray-600 dark:text-gray-300">Apple SSD AP0256Q</span>
                      </div>
                      <div className="flex items-baseline">
                        <span className="font-medium text-gray-900 dark:text-gray-100">OS</span>
                        <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                        <span className="text-gray-600 dark:text-gray-300">macOS Tahoe</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-400 uppercase tracking-wider mb-2 mt-6">
                      Remote Training
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-baseline">
                        <span className="font-medium text-gray-900 dark:text-gray-100">
                          Infrastructure
                        </span>
                        <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                        <span className="text-gray-600 dark:text-gray-300">
                          DePaul Research Servers
                        </span>
                      </div>
                      <div className="flex items-baseline">
                        <span className="font-medium text-gray-900 dark:text-gray-100">GPUs</span>
                        <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                        <span className="text-gray-600 dark:text-gray-300">
                          4x NVIDIA A100 80GB
                        </span>
                      </div>
                      <div className="flex items-baseline">
                        <span className="font-medium text-gray-900 dark:text-gray-100">RAM</span>
                        <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                        <span className="text-gray-600 dark:text-gray-300">1.48 TB</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-400 uppercase tracking-wider mb-2 mt-6">
                      Peripherals
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-baseline">
                        <span className="font-medium text-gray-900 dark:text-gray-100">
                          Monitors
                        </span>
                        <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                        <span className="text-gray-600 dark:text-gray-300">
                          HP EliteDisplay E232 + Acer EB225Q
                        </span>
                      </div>
                      <div className="flex items-baseline">
                        <span className="font-medium text-gray-900 dark:text-gray-100">
                          Keyboard
                        </span>
                        <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                        <span className="text-gray-600 dark:text-gray-300">
                          Epomaker TH80 Pro V2
                        </span>
                      </div>
                      <div className="flex items-baseline">
                        <span className="font-medium text-gray-900 dark:text-gray-100">Mouse</span>
                        <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                        <span className="text-gray-600 dark:text-gray-300">Apple Magic Mouse</span>
                      </div>
                      <div className="flex items-baseline">
                        <span className="font-medium text-gray-900 dark:text-gray-100">
                          Headphones
                        </span>
                        <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                        <span className="text-gray-600 dark:text-gray-300">
                          Bose QuietComfort Ultra
                        </span>
                      </div>
                      <div className="flex items-baseline">
                        <span className="font-medium text-gray-900 dark:text-gray-100">
                          Earbuds
                        </span>
                        <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                        <span className="text-gray-600 dark:text-gray-300">AirPods Pro 2</span>
                      </div>
                      <div className="flex items-baseline">
                        <span className="font-medium text-gray-900 dark:text-gray-100">
                          Smartwatch
                        </span>
                        <span className="mx-2 text-gray-500 dark:text-gray-400">-</span>
                        <span className="text-gray-600 dark:text-gray-300">
                          Apple Watch Series 9
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default UsesPage;

export const Head = () => <title>Uses - Jonesh Shrestha</title>;
