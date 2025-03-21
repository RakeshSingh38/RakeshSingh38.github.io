import { Link } from 'react-scroll/modules';
import ScrollAnimation from './ScrollAnimation';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background-light dark:bg-background-dark pt-16">
      {/* MatterJS background is added separately to the main component */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:max-w-xl">
            <ScrollAnimation animation="fade-up" delay={100} duration={800}>
              <span className="text-text-light dark:text-text mb-2 block">Hi there!</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                I am <span className="text-primary">Rakesh Singh</span>.
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={300} duration={800}>
              <p className="text-xl sm:text-2xl text-text-light dark:text-text mb-6">
                I develop efficient and scalable web solutions
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={500} duration={800}>
              <p className="text-text-light dark:text-text mb-8 text-justify">
                As a Software Engineer, I specialize in creating unique and
                captivating web solutions and experiences for people and organizations
                who appreciate distinctive craftsmanship.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={700} duration={800}>
              <div className="flex space-x-4 mb-8">
                <Link
                  to="enhanced-contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors cursor-pointer"
                >
                  Reach out
                </Link>
                <a
                  href="https://djanwbpg5dphz5ng.public.blob.vercel-storage.com/Rakesh%20Resume-qX7nVhSpqMKVZ2vjW4RFmnGfw6QPBp.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-transparent border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors"
                >
                  Resume
                </a>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation animation="fade-left" delay={500} duration={1000}>
            <div className="flex flex-col items-center gap-6">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20">
                <img
                  src="./images/profile_pic.jpg"
                  alt="Rakesh Singh profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex space-x-6">
                <a
                  href="https://github.com/RakeshSingh38"
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-light dark:text-text hover:text-primary transition-colors"
                >
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/RakeshSingh61/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-light dark:text-text hover:text-primary transition-colors"
                >
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="mailto:rakeshsinghtcp@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-light dark:text-text hover:text-primary transition-colors"
                >
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;
