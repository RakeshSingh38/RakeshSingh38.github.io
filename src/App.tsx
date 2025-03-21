import { useEffect } from 'react';
import About from './components/About';
import EnhancedContact from './components/EnhancedContact';
import Expertise from './components/Expertise';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import MatterBackground from './components/MatterBackground';
import Projects from './components/Projects';
import Qualifications from './components/Qualifications';
import Skills from './components/Skills';

function App() {
  // Set the initial theme based on localStorage or system preference
  useEffect(() => {
    // Check if theme is stored in localStorage
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      // If no theme is stored, use system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  return (
    <div className="h-screen px-11 bg-background-light dark:bg-background-dark">
      {/* <MatterBackground /> */}
      <Header />
      <main className='px-20'>
        <Hero />
        <About />
        <Projects />
        <Skills />
        {/* New sections added from Guglielmo Cerri's portfolio */}
        <Qualifications />
        <Expertise />
        <EnhancedContact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
