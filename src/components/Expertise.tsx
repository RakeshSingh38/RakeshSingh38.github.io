import { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

interface ExpertiseItemProps {
  title: string;
  description: string[];
  icon: React.ReactNode;
  delay?: number;
}

const ExpertiseItem = ({ title, description, icon, delay = 0 }: ExpertiseItemProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <ScrollAnimation animation="fade-up" delay={delay} duration={800} className="h-full">
      <div className="flex flex-col bg-white/5 dark:bg-[#171717] rounded-lg p-6 shadow-sm h-full">
        <div className="text-primary mb-4">{icon}</div>

        <h3 className="text-xl font-semibold text-text-light dark:text-text mb-2">{title}</h3>

        {!expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="mt-2 text-primary hover:underline text-sm self-start"
          >
            View More
          </button>
        )}

        {expanded && (
          <>
            <div className="mt-2 text-text-light dark:text-text">
              <ul className="space-y-2">
                {description.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </ScrollAnimation>
  );
};

const Expertise = () => {
  const expertiseItems: ExpertiseItemProps[] = [
    {
      title: 'Web Development',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      description: [
        'I develop responsive and modern websites using React, Next.js, and other frontend technologies.',
        'I build scalable backend systems using Node.js, Express, and MongoDB.',
        'I create engaging user interfaces with Tailwind CSS, styled-components and other CSS frameworks.',
        'I implement user authentication, authorization, and data management solutions.'
      ]
    },
    {
      title: 'Mobile Development',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      ),
      description: [
        'I develop cross-platform mobile applications using React Native and Expo.',
        'I build native-like user experiences with smooth animations and transitions.',
        'I integrate mobile-specific features like camera, geolocation, and push notifications.',
        'I publish applications to App Store and Google Play Store.'
      ]
    },
    {
      title: 'Blockchain Development',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <path d="M12 18v-6"></path>
          <path d="M8 15h8"></path>
        </svg>
      ),
      description: [
        'I develop decentralized applications (dApps) using Ethereum, Solidity, and web3.js.',
        'I implement smart contracts for various use cases including NFTs, DeFi, and DAO.',
        'I create secure and gas-efficient blockchain solutions.',
        'I connect blockchain backends with modern frontend technologies.'
      ]
    },
    {
      title: 'UI/UX Design',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
          <path d="M2 2l7.586 7.586"></path>
          <circle cx="11" cy="11" r="2"></circle>
        </svg>
      ),
      description: [
        'I create user-centered designs with a focus on usability and accessibility.',
        'I develop wireframes, prototypes, and high-fidelity mockups using Figma and Adobe XD.',
        'I conduct user research and usability testing to improve design decisions.',
        'I implement design systems for consistent user experiences across platforms.'
      ]
    },
    {
      title: 'Backend Development',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      ),
      description: [
        'I design and implement RESTful APIs and GraphQL services.',
        'I work with databases like MongoDB, PostgreSQL, MySQL, and Redis.',
        'I develop microservices and serverless architectures using Node.js and AWS technologies.',
        'I implement authentication, authorization, and security best practices.'
      ]
    }
  ];

  return (
    <section id="expertise" className="py-24 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-up">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-center text-text-light dark:text-text mb-8 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-[3px] after:bg-primary">
              Expertise
            </h2>
            <p className="text-center text-text-light dark:text-text text-lg mb-10">
              Areas of Interest
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseItems.map((item, index) => (
            <ExpertiseItem
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
