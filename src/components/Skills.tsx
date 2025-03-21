import { useEffect, useRef } from 'react';
import ScrollAnimation from './ScrollAnimation';

interface SkillItem {
  name: string;
  level: string;
  icon: string;
}

const skillItems: SkillItem[] = [
  {
    name: 'Java',
    level: 'Proficient',
    icon: 'https://ext.same-assets.com/1411736422/1264948183.svg'
  },
  {
    name: 'Javascript',
    level: 'Good',
    icon: 'https://ext.same-assets.com/1411736422/1808825272.svg'
  },
  {
    name: 'TypeScript',
    level: 'Intermediate',
    icon: 'https://ext.same-assets.com/1411736422/707779201.svg'
  },
  {
    name: 'Spring',
    level: 'Intermediate',
    icon: 'https://ext.same-assets.com/1411736422/352002368.svg'
  },
  {
    name: 'Hibernate',
    level: 'Very Good',
    icon: 'https://ext.same-assets.com/1411736422/1910432688.svg'
  },
  {
    name: 'Postgre',
    level: 'Very Good',
    icon: 'https://ext.same-assets.com/1411736422/3964906553.svg'
  },
  {
    name: 'MySQL',
    level: 'Very Good',
    icon: 'https://ext.same-assets.com/1411736422/1886902799.svg'
  },
  {
    name: 'MongoDB',
    level: 'Intermediate',
    icon: 'https://ext.same-assets.com/1411736422/1502541318.svg'
  },
  {
    name: 'HTML5',
    level: 'Very Good',
    icon: 'https://ext.same-assets.com/1411736422/914791944.svg'
  },
  {
    name: 'CSS3',
    level: 'Good',
    icon: 'https://ext.same-assets.com/1411736422/1332161502.svg'
  },
  {
    name: 'Sass',
    level: 'Good',
    icon: 'https://ext.same-assets.com/1411736422/4032947961.svg'
  },
  {
    name: 'ReactJs',
    level: 'Very Good',
    icon: 'https://ext.same-assets.com/1411736422/2475786803.svg'
  },
  {
    name: 'NextJs',
    level: 'Intermediate',
    icon: 'https://ext.same-assets.com/1411736422/2782917589.svg'
  },
  {
    name: 'Redux',
    level: 'Good',
    icon: 'https://ext.same-assets.com/1411736422/3976718593.svg'
  },
  {
    name: 'Tailwind',
    level: 'Intermediate',
    icon: 'https://ext.same-assets.com/1411736422/1679854872.svg'
  },
  {
    name: 'Git',
    level: 'Proficient',
    icon: 'https://ext.same-assets.com/1411736422/3525748182.svg'
  },
  {
    name: 'GitHub',
    level: 'Very Good',
    icon: 'https://ext.same-assets.com/1411736422/60512440.svg'
  },
  {
    name: 'Docker',
    level: 'Intermediate',
    icon: 'https://ext.same-assets.com/1411736422/2176407613.svg'
  },
  {
    name: 'Kafka',
    level: 'Novice',
    icon: 'https://ext.same-assets.com/1411736422/2720244575.svg'
  },
  {
    name: 'Redis',
    level: 'Intermediate',
    icon: 'https://ext.same-assets.com/1411736422/3338241226.svg'
  },
  {
    name: 'Micro Services',
    level: 'Intermediate',
    icon: 'https://ext.same-assets.com/1411736422/1428641030.svg'
  },
  {
    name: 'Jira',
    level: 'Novice',
    icon: 'https://ext.same-assets.com/1411736422/1839428566.svg'
  },
  {
    name: 'VSC',
    level: 'Proficient',
    icon: 'https://ext.same-assets.com/1411736422/2700035174.svg'
  },
  {
    name: 'IntelliJ IDEA',
    level: 'Proficient',
    icon: 'https://ext.same-assets.com/1411736422/2121592230.svg'
  }
];

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Store ref value in a variable to prevent closure issues during cleanup
    const currentSkillsRef = skillsRef.current;

    // Handle touch events for mobile devices
    const handleTouchStart = (e: TouchEvent) => {
      const target = e.target as HTMLElement;
      const skillItem = target.closest('.skill-item');

      if (skillItem) {
        // Remove active class from all items
        document.querySelectorAll('.skill-item').forEach(item => {
          item.classList.remove('active', 'translate-y-[-5px]', 'shadow-lg');
        });

        // Add active class to the touched item
        skillItem.classList.add('active', 'translate-y-[-5px]', 'shadow-lg');
      }
    };

    // Add touch event listener
    if (currentSkillsRef) {
      currentSkillsRef.addEventListener('touchstart', handleTouchStart, { passive: true });
    }

    // Cleanup
    return () => {
      if (currentSkillsRef) {
        currentSkillsRef.removeEventListener('touchstart', handleTouchStart);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-12  bg-background-light dark:bg-background-dark" ref={skillsRef}>
      <div className="w-full max-w-7xl    mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-up">
          <h2 className="text-3xl font-semibold text-center text-text-light dark:text-text mb-8 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-[3px] after:bg-primary">
            Skills
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-2   sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4">
          {skillItems.map((skill, index) => (
            <ScrollAnimation
              key={index}
              animation="fade-up"
              delay={index * 50}
              duration={600}
              className="skill-item bg-white/5 border border-transparent dark:hover:border-white  dark:bg-[#171717] rounded p-3 text-center cursor-pointer flex flex-col items-center justify-center h-full shadow-md hover:translate-y-[-5px] hover:shadow-lg   transition-all duration-300 ease-in-out"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 h-10 mb-2  object-contain"
              />
              <h3 className="text-sm  text-text-light dark:text-text font-semibold mb-1">
                {skill.name}
              </h3>
              <p className="text-xs text-text-light-muted dark:text-text-light-muted font-normal transition-colors duration-300 ease-in-out group-hover:text-white">
                {skill.level}
              </p>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
