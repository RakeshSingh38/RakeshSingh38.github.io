import { useEffect, useRef, ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'flip';
  duration?: number;
  delay?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
}

const ScrollAnimation = ({
  children,
  animation = 'fade-up',
  duration = 800,
  delay = 0,
  threshold = 0.2,
  className = '',
  once = true
}: ScrollAnimationProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    // Initially hide the element
    const initialClass = `opacity-0 ${getAnimationClass(animation, true)}`;
    currentElement.classList.add(...initialClass.split(' '));

    const animatedClass = `opacity-100 transform-none transition-all duration-${duration} delay-${delay} ease-out`;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animation classes when element is in view
          currentElement.classList.add(...animatedClass.split(' '));
          currentElement.classList.remove(...initialClass.split(' '));

          // Unobserve if animation should only happen once
          if (once) {
            observer.unobserve(currentElement);
          }
        } else if (!once) {
          // Remove animation classes when element is out of view (if not once)
          currentElement.classList.remove(...animatedClass.split(' '));
          currentElement.classList.add(...initialClass.split(' '));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: threshold,
      rootMargin: '0px'
    });

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [animation, duration, delay, threshold, once]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

// Helper function to get animation classes
const getAnimationClass = (animation: string, initial: boolean): string => {
  switch (animation) {
    case 'fade-up':
      return initial ? 'translate-y-10' : '';
    case 'fade-down':
      return initial ? 'translate-y-[-10px]' : '';
    case 'fade-left':
      return initial ? 'translate-x-[-10px]' : '';
    case 'fade-right':
      return initial ? 'translate-x-10' : '';
    case 'zoom-in':
      return initial ? 'scale-95' : '';
    case 'flip':
      return initial ? 'rotateX-90' : '';
    default:
      return '';
  }
};

export default ScrollAnimation;
