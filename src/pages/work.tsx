import React from 'react';
import Layout from '../components/Layout';

const workExperiences = [
  {
    company: 'DePaul University',
    companyUrl: 'https://www.cdm.depaul.edu/',
    logo: '/img/depaul-logo.svg',
    role: 'AI Research Assistant: Scientific chart mining and recognition for improved detection and recognition.',
  },
  {
    company: 'Cotiviti Nepal Pvt. Ltd.',
    companyUrl: 'https://www.cotiviti.com/',
    logo: '/img/cotiviti-logo.png',
    role: 'Software Engineer: Developed scripts, implemented clients, ETL, supported teams.',
  },
  {
    company: 'Kathmandu University',
    companyUrl: 'https://comp.ku.edu.np/',
    logo: '/img/ku-logo.webp',
    role: 'Machine Learning Researcher: Nepali image captioning using CNN and Transformer, optimizing accuracy.',
  },
  {
    company: 'Leapfrog Technology, Inc.',
    companyUrl: 'https://www.lftechnology.com/',
    logo: '/img/leapfrog-logo.webp',
    role: 'Software Engineer: Crafted TuTangle and Traveler websites, adept in Vanilla JavaScript web apps.',
  },
  {
    company: 'LIS Nepal Pvt. Ltd.',
    companyUrl: 'https://lisnepal.com.np/',
    logo: '/img/lisnepal-logo.webp',
    role: 'Business Intelligence Developer: Retail analytics solutions, SQL, ODI, Power BI, MicroStrategy reporting.',
  },
  {
    company: 'Fiverr',
    companyUrl: 'https://www.fiverr.com/joneshshrestha',
    logo: '/img/fiverr-logo.webp',
    role: 'Freelancer: Created user-friendly web apps, tracked code changes with version control.',
  },
];

const WorkPage = () => {
  return (
    <Layout>
      <div className="space-y-16">
        <section>
          <div className="space-y-8">
            {workExperiences.map((experience, index) => (
              <div key={index} className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4 flex items-center">
                    <a
                      href={experience.companyUrl}
                      className="w-full h-16 flex items-center justify-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={experience.logo}
                        alt={`${experience.company} Logo`}
                        className="max-h-full max-w-full rounded-lg"
                      />
                    </a>
                  </div>
                  <div className="md:w-3/4">
                    <a
                      href={experience.companyUrl}
                      className="text-xl font-semibold hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {experience.company}
                    </a>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">{experience.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default WorkPage;

export const Head = () => <title>Work Experience - Jonesh Shrestha</title>;
