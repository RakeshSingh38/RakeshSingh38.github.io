import ScrollAnimation from './ScrollAnimation';

const About = () => {
  return (
    <section id="about" className="py-24 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-up" delay={100}>
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-center text-text-light dark:text-text mb-8 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-[3px] after:bg-primary">
              About
            </h2>
          </div>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto">
          <ScrollAnimation animation="fade-up" delay={200}>
            <p className="text-text-light dark:text-text mb-6 text-justify">
              Hello, I'm Rakesh Singh, based in Bangalore, India. With a deep
              passion for technology, I'm on a quest to craft innovative solutions
              in the realms of Automation and Backend Development. But that's not
              all; I've got a keen interest in the fascinating world of Blockchain.
              As a motivated and enthusiastic newcomer to the industry, I bring not
              just technical skills but also a strong sense of self-discipline and a
              collaborative spirit.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={300}>
            <p className="text-text-light dark:text-text mb-6 text-justify">
              I'm excited to apply my skills, my drive, and my love for technology
              to real-world projects, contributing to the growth and success of any
              endeavor I embark on. Let's build remarkable solutions together!
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={400}>
            <p className="text-text-light dark:text-text text-justify">
              Outside my regular developer routine, I enjoy playing cricket,
              watching movies, and listening to music.
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default About;
