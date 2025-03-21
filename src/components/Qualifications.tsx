import { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

const Qualifications = () => {
  const [activeTab, setActiveTab] = useState('education');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section id="qualifications" className="py-24 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-up">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-center text-text-light dark:text-text mb-8 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-[3px] after:bg-primary">
              Qualifications
            </h2>
            <p className="text-center text-text-light dark:text-text text-lg mb-10">
              My personal journey
            </p>
          </div>
        </ScrollAnimation>

        {/* Toggle Tabs */}
        <ScrollAnimation animation="fade-up" delay={200}>
          <div className="flex justify-center mb-10">
            <div className="flex space-x-8">
              <button
                className={`flex items-center text-lg ${activeTab === 'education'
                  ? 'text-primary font-medium'
                  : 'text-text-light-muted dark:text-text-muted'
                  } hover:text-primary transition-colors focus:outline-none`}
                onClick={() => handleTabChange('education')}
              >
                <svg
                  className="w-6 h-6 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
                Education
              </button>
              <button
                className={`flex items-center text-lg ${activeTab === 'work'
                  ? 'text-primary font-medium'
                  : 'text-text-light-muted dark:text-text-muted'
                  } hover:text-primary transition-colors focus:outline-none`}
                onClick={() => handleTabChange('work')}
              >
                <svg
                  className="w-6 h-6 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
                Work
              </button>
            </div>
          </div>
        </ScrollAnimation>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          {/* Education */}
          <div className={`${activeTab === 'education' ? 'block' : 'hidden'}`}>
            <div className="relative  border-l-2 border-primary pl-7 ml-4 space-y-10">
              {/* Education 1 */}
              <ScrollAnimation animation="fade-right" delay={300} duration={800}>
                <div className="relative ">
                  <div className="absolute -left-10 w-6 h-6 rounded-full dark:bg-blue-400  border-primary animate-pulse "></div>

                  <h3 className="text-xl font-semibold text-text-light dark:text-text">Secondary School</h3>
                  <a href="https://gecbvn.ac.in/" target="_blank" rel="noreferrer" className="text-primary text-sm hover:underline">
                    DVS Engkish School ,KoparKhairane, Maharashtra, INDIA
                  </a>
                  <div className="mt-2 flex items-center text-text-light-muted dark:text-text-muted text-sm space-x-4">
                    <div className="px-3 py-1 rounded-md bg-primary/10 text-primary">Percentage: 70%</div>
                    <div className='text-white opacity-75'>2016 - 2020</div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Education 2 */}
              <ScrollAnimation animation="fade-right" delay={400} duration={800}>
                <div className="relative ">
                  <div className="absolute -left-10 w-6 h-6 rounded-full dark:bg-blue-400  border-primary animate-pulse "></div>


                  <h3 className="text-xl font-semibold text-text-light dark:text-text">Higher Secondary</h3>
                  <a href="#" className="text-primary text-sm hover:underline">
                    Yashvantrao Chavan College of Arts, commerce and Science, KoperKhairane, MH, INDIA
                  </a>
                  <div className="mt-2 flex items-center text-text-light-muted dark:text-text-muted text-sm space-x-4">
                    <div className="px-3 py-1 rounded-md bg-primary/10 text-primary">66.77%</div>
                    <div className='text-white opacity-75'>2014 - 2016</div>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="fade-right" delay={300} duration={800}>
                <div className="relative">
                  <div className="absolute -left-10 w-6 h-6 rounded-full bg-white dark:bg-blue-400 border-2 border-primary"></div>

                  <h3 className="text-xl font-semibold text-text-light dark:text-text">BE in CSE (IOT Specialization)</h3>
                  <a href="https://gecbvn.ac.in/" target="_blank" rel="noreferrer" className="text-primary text-sm hover:underline">
                    Ghansoli, Maharashtra, IN
                  </a>
                  <div className="mt-2 flex items-center text-text-light-muted dark:text-text-muted text-sm space-x-4">
                    <div className="px-3 py-1 rounded-md bg-primary/10 text-primary">CGPA: 8.24/10</div>
                    <div className='text-white opacity-75'>2016 - 2020</div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>

          {/* Work */}
          <div className={`${activeTab === 'work' ? 'block' : 'hidden'}`}>
            <div className="relative border-l-2 border-primary pl-8 ml-4 space-y-10">
              {/* Work 1 */}
              <ScrollAnimation animation="fade-right" delay={300} duration={800}>
                <div className="relative">
                  <div className="absolute -left-10 w-6 h-6 rounded-full bg-white dark:bg-background-dark border-2 border-primary"></div>

                  <h3 className="text-xl font-semibold text-text-light dark:text-text">Senior Software Developer</h3>
                  <a href="https://www.solulab.com/" target="_blank" rel="noreferrer" className="text-primary text-sm hover:underline">
                    Solulab, Ahmedabad
                  </a>
                  <div className="mt-2 text-text-light-muted dark:text-text-muted text-sm">
                    December 2021 - Present
                  </div>
                </div>
              </ScrollAnimation>

              {/* Work 2 */}
              <ScrollAnimation animation="fade-right" delay={400} duration={800}>
                <div className="relative">
                  <div className="absolute -left-10 w-6 h-6 rounded-full bg-white dark:bg-background-dark border-2 border-primary"></div>

                  <h3 className="text-xl font-semibold text-text-light dark:text-text">Software Developer</h3>
                  <a href="https://www.solulab.com/" target="_blank" rel="noreferrer" className="text-primary text-sm hover:underline">
                    Solulab, Ahmedabad
                  </a>
                  <div className="mt-2 text-text-light-muted dark:text-text-muted text-sm">
                    July 2020 - December 2021
                  </div>
                </div>
              </ScrollAnimation>

              {/* Work 3 */}
              <ScrollAnimation animation="fade-right" delay={500} duration={800}>
                <div className="relative">
                  <div className="absolute -left-10 w-6 h-6 rounded-full bg-white dark:bg-background-dark border-2 border-primary"></div>

                  <h3 className="text-xl font-semibold text-text-light dark:text-text">Software Developer Intern</h3>
                  <a href="https://www.solulab.com/" target="_blank" rel="noreferrer" className="text-primary text-sm hover:underline">
                    Solulab, Ahmedabad
                  </a>
                  <div className="mt-2 text-text-light-muted dark:text-text-muted text-sm">
                    January 2020 - June 2020
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
