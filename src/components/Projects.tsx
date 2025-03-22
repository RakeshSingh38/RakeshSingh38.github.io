import ScrollAnimation from './ScrollAnimation';

interface ProjectCardProps {
  number: number;
  title: string;
  description: string;
  technologies: string;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  delay?: number;
}

const ProjectCard = ({
  number,
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  imageUrl,
  delay = 0
}: ProjectCardProps) => {
  return (
    <ScrollAnimation animation="fade-up" delay={delay} duration={800}>
      <div className="bg-white/5 dark:bg-[#171717] rounded-lg overflow-hidden mb-8 shadow-sm dark:shadow-none">
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:justify-between gap-6">
            <div className="md:max-w-lg">
              <span className="text-primary mb-2 block">Project #{number}</span>
              <h3 className="text-xl md:text-2xl font-semibold text-text-light dark:text-text mb-4">{title}</h3>
              <p className="text-text-light dark:text-text mb-6 text-justify">{description}</p>

              <div className="flex space-x-4 mb-4">
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-text-light dark:text-text hover:text-primary"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>
                )}

                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-text-light dark:text-text hover:text-primary"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                )}
              </div>
            </div>

            {imageUrl && (
              <div className="md:w-80 flex-shrink-0">
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-auto rounded-md object-cover"
                />
              </div>
            )}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-[#333]">
            <p className="text-text-light-muted dark:text-[#b4b4b4] text-sm">{technologies}</p>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};

interface SmallProjectCardProps {
  title: string;
  description: string;
  technologies: string;
  githubUrl?: string;
  delay?: number;
}

const SmallProjectCard = ({
  title,
  description,
  technologies,
  githubUrl,
  delay = 0
}: SmallProjectCardProps) => {
  return (
    <ScrollAnimation animation="fade-up" delay={delay} duration={800}>
      <div className="bg-white/5 dark:bg-[#171717] rounded-lg p-6 h-full flex flex-col shadow-sm dark:shadow-none">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-semibold text-text-light dark:text-text mb-3">{title}</h3>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-text-light dark:text-text hover:text-primary"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          )}
        </div>

        <p className="text-text-light dark:text-text mb-4 text-justify flex-grow">{description}</p>

        <div className="mt-auto">
          <span className="text-text-light-muted dark:text-[#b4b4b4] text-sm">{technologies}</span>
        </div>
      </div>
    </ScrollAnimation>
  );
};

const Projects = () => {
  const featuredProjects = [
    {
      number: 1,
      title: "Virtual Voice Assistant",
      description: "Virtual Voice Assistant is a project that utilizes machine learning and natural language processing to enable users to control their devices using voice commands. Technologies used include TensorFlow, Keras, various Python libraries and RESTful APIs.",
      technologies: "Python, TensorFlow, REST APIs",
      githubUrl: "https://github.com/RakeshSingh38/Personal-Voice-Assistant",
      imageUrl: "https://ext.same-assets.com/1997590182/4083843162.png"
    },
    {
      number: 2,
      title: "Decentralized Voting System",
      description: "The Decentralized Voting System on Ethereum Blockchain offers a secure and transparent approach to elections. Utilizing Ethereum's blockchain, it guarantees tamper-proof voting records, enabling remote voting while preserving anonymity and preventing fraud.",
      technologies: "HTML, CSS, JS, Solidity, Web3.js",
      githubUrl: "https://github.com/RakeshSingh38/decentralized-voting",
      imageUrl: "https://ext.same-assets.com/1997590182/350550690.png"
    },
    {
      number: 3,
      title: "Telegram Bot",
      description: "This bot was created solely for educational purposes. It serves as a versatile Telegram bot, capable of providing wallpapers, movie or TV series information, and much more.",
      technologies: "Python, REST APIs",
      githubUrl: "https://github.com/RakeshSingh38/telegram-bot",
      liveUrl: "https://t.me/wmtv_bot",
      imageUrl: "https://ext.same-assets.com/1997590182/954907340.jpeg"
    },
    {
      number: 4,
      title: "Portfolio Website",
      description: "Personal Portfolio Website is a project that showcases my skills and projects. It was developed using HTML, CSS and JavaScript. It is a responsive website that is compatible with all devices.",
      technologies: "HTML, CSS, JS",
      githubUrl: 'https://github.com/RakeshSingh38/Portfolio-Website',
      liveUrl: "https://rakesh-singh-portfolio.vercel.app/",
      imageUrl: "/portfolio.png"
    }
  ];

  const otherProjects = [
    {
      title: "TODO_list_API",
      description: "The To-Do List API allows users to perform CRUD (Create, Read, Update, Delete) operations on a task list using API key authentication. The API uses MySQL database to store the task list and API keys.",
      technologies: "Python, MySQL, FastAPI",
      githubUrl: "https://github.com/RakeshSingh38/TODO_list_API"
    },
    {
      title: "Data Structure And Algorithms in Java",
      description: "It contains some data structures such as Arrays, Strings, Stacks, Queue and Tree implemented in Java language.",
      technologies: "Java, DSA",
      githubUrl: "https://github.com/RakeshSingh38/Java-dsa"
    },
    {
      title: "Github Home Page",
      description: "This is my Github home page where I have described my projects, skills, interests and contact information.",
      technologies: "Markdown files",
      githubUrl: "https://github.com/RakeshSingh38"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4 lg:px-36 sm:px-6">
        <ScrollAnimation animation="fade-up">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-center text-text-light dark:text-text mb-8 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-28 after:h-[3px] after:animate-pulse after:bg-primary">
              Projects
            </h2>
          </div>
        </ScrollAnimation>

        <div className="mb-16">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.number}
              number={project.number}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              imageUrl={project.imageUrl}
              delay={index * 150}
            />
          ))}
        </div>

        <ScrollAnimation animation="fade-up">
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-center after:animate-pulse after:brightness-125 text-text-light dark:text-text mb-8 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-64 after:h-[3px] after:bg-primary">
              Other Notable Projects
            </h3>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:m-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <SmallProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
