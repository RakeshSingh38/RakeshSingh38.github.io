import { useEffect, useRef, useState } from 'react';
import * as Matter from 'matter-js';

const MatterBackground = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Check for dark mode changes
  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    // Check on mount
    checkTheme();

    // Create a mutation observer to watch for dark mode class changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'class'
        ) {
          checkTheme();
        }
      });
    });

    // Start observing
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Matter.js modules
    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const Runner = Matter.Runner;
    const Bodies = Matter.Bodies;
    const Composite = Matter.Composite;
    const Mouse = Matter.Mouse;
    const Events = Matter.Events;
    const Body = Matter.Body;
    const Common = Matter.Common;

    // Create engine
    const engine = Engine.create({
      gravity: { x: 0, y: 0, scale: 0 }
    });
    const world = engine.world;

    // Dimensions
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Create renderer
    const render = Render.create({
      element: canvasRef.current,
      engine: engine,
      options: {
        width: width,
        height: height,
        wireframes: false,
        background: 'transparent',
        showVelocity: false,
      },
    });

    // Create attractor body
    const attractiveBody = Bodies.circle(
      width / 2,
      height / 2,
      Math.max(width / 25, height / 25) / 2,
      {
        render: {
          fillStyle: isDarkMode ? '#000' : '#fff',
          strokeStyle: isDarkMode ? '#000' : '#fff',
          lineWidth: 0,
        },
        isStatic: true,
      }
    );
    Composite.add(world, attractiveBody);

    // Add many bodies
    for (let i = 0; i < 60; i += 1) {
      const x = Common.random(0, width);
      const y = Common.random(0, height);
      const s = Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
      const polygonNumber = Common.random(3, 6);

      const body = Bodies.polygon(x, y, polygonNumber, s, {
        mass: s / 20,
        friction: 0,
        frictionAir: 0.02,
        angle: Math.round(Math.random() * 360),
        render: {
          fillStyle: isDarkMode ? '#222222' : '#e0e0e0',
          strokeStyle: isDarkMode ? '#000000' : '#c0c0c0',
          lineWidth: 2,
        },
      });

      const r = Common.random(0, 1);

      const circle1 = Bodies.circle(x, y, Common.random(2, 8), {
        mass: 0.1,
        friction: 0,
        frictionAir: 0.01,
        render: {
          fillStyle: r > 0.3
            ? (isDarkMode ? '#27292d' : '#d0d0d0')
            : (isDarkMode ? '#444444' : '#a0a0a0'),
          strokeStyle: isDarkMode ? '#000000' : '#c0c0c0',
          lineWidth: 2,
        },
      });

      const circle2 = Bodies.circle(x, y, Common.random(2, 20), {
        mass: 6,
        friction: 0,
        frictionAir: 0,
        render: {
          fillStyle: r > 0.3
            ? (isDarkMode ? '#334443' : '#d8e0e0')
            : (isDarkMode ? '#222222' : '#e0e0e0'),
          strokeStyle: isDarkMode ? '#111111' : '#c0c0c0',
          lineWidth: 4,
        },
      });

      const circle3 = Bodies.circle(x, y, Common.random(2, 30), {
        mass: 0.2,
        friction: 0.6,
        frictionAir: 0.8,
        render: {
          fillStyle: isDarkMode ? '#191919' : '#f0f0f0',
          strokeStyle: isDarkMode ? '#111111' : '#d0d0d0',
          lineWidth: 3,
        },
      });

      Composite.add(world, [body, circle1, circle2, circle3]);
    }

    // Create mouse
    const mouse = Mouse.create(render.canvas);

    // Custom attractors implementation
    Events.on(engine, 'afterUpdate', function () {
      if (!mouse.position.x) return;

      // Find all bodies and apply attraction
      const bodies = Composite.allBodies(world);

      for (const body of bodies) {
        if (body !== attractiveBody && !body.isStatic) {
          const forceMagnitude = 0.001;
          const bodyDistance = {
            x: attractiveBody.position.x - body.position.x,
            y: attractiveBody.position.y - body.position.y
          };

          Body.applyForce(body, body.position, {
            x: bodyDistance.x * forceMagnitude,
            y: bodyDistance.y * forceMagnitude
          });
        }
      }

      // Move the attractor body with the mouse
      Body.translate(attractiveBody, {
        x: (mouse.position.x - attractiveBody.position.x) * 0.12,
        y: (mouse.position.y - attractiveBody.position.y) * 0.12,
      });
    });

    // Handle window resize
    const handleResize = () => {
      if (render.options.width !== undefined && render.options.height !== undefined) {
        render.options.width = window.innerWidth;
        render.options.height = window.innerHeight;
        render.canvas.width = window.innerWidth;
        render.canvas.height = window.innerHeight;
      }
    };

    window.addEventListener('resize', handleResize);

    // Run the engine and renderer
    Runner.run(Runner.create(), engine);
    Render.run(render);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      Render.stop(render);
      Engine.clear(engine);
      render.canvas.remove();
    };
  }, [isDarkMode]);

  return <div id="wrapper-canvas" ref={canvasRef} className="absolute inset-0 -z-10 hidden md:block" />;
};

export default MatterBackground;
