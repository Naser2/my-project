"use client"
import { useState, useRef, useEffect } from 'react';



const SlideOffComponent = ({ element }) => {
  const [isHovered, setIsHovered] = useState(false);
  const wrapperRef = useRef(null);
  const elementRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const navigationBarHeight = 80; // Adjust this value according to your actual navigation bar height

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setScrollPosition(scrollTop);
    };

    const handleWindowResize = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };

    if (isListening) {
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleWindowResize);
    } else {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleWindowResize);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [isListening]);

  useEffect(() => {
    if (!isListening) {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
  }, [isListening]);

  useEffect(() => {
    const containerHeight = wrapperRef.current?.clientHeight || 0;

    if (!isHovered && scrollPosition > containerHeight + 150) {
      setIsHovered(true);
    }

    if (scrollPosition > containerHeight + 200) {
      setIsListening(false);
      setIsHovered(false);
    }

    const section = document.getElementById('Massi-Beauty-Intro');
    const sectionRect = section?.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (!isListening && sectionRect && sectionRect.top <= window.innerHeight && scrollTop <= (sectionRect.bottom || 0) - 200) {
      setIsListening(true);
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
  }, [scrollPosition, isHovered, isListening]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsHovered(true);
      setIsListening(true); // Start listening for scroll events after timeout
    }, 4000); // Set timeout for 4 seconds

    return () => clearTimeout(timeout);
  }, []);

  const handleClick = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={wrapperRef}
      className="relative"
      style={{
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100vw',
        height: '102vh',
        transition: 'transform 0.75s ease-in-out',
        transform: isHovered ? 'translateY(-100%)' : 'translateY(0)',
      }}
      onClick={handleClick} // Trigger slide-off behavior on click
    >
      <div ref={elementRef}>{element}</div>
    </div>
  );
};

export default SlideOffComponent;

// import { useState, useRef } from 'react';

// const SlideOffComponent = ({ element }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const wrapperRef = useRef(null);
//   const elementRef = useRef(null);

//   // Function to measure the width of the element
//   const measureWidth = () => {
//     if (elementRef.current) {
//       return elementRef.current.offsetWidth;
//     }
//     return 0;
//   };

//   // Function to slide off the element
//   const slideOff = () => {
//     const width = measureWidth();
//     wrapperRef.current.style.transition = 'transform 0.75s ease-in-out';
//     wrapperRef.current.style.transform = `translateX(-${width}px)`;
//   };

//   // Function to slide in the element
//   const slideIn = () => {
//     wrapperRef.current.style.transition = 'transform 0.75s ease-in-out';
//     wrapperRef.current.style.transform = 'translateX(0)';
//   };

//   return (
//     <div
//       ref={wrapperRef}
//       className="relative overflow-hidden"
//       style={{
//         position: 'absolute',
//         left: 0,
//         bottom: 0,
//         width: '100vw',
//         height: '102vh',
//         transition: 'transform 3.75s ease-in-out',
//         transform: isHovered ? 'translateX(-100%)' : 'translateX(0)',
//       }}
//       onMouseEnter={() => {
//         setIsHovered(true);
//         slideOff();
//       }}
//       onMouseLeave={() => {
//         setIsHovered(false);
//         slideIn();
//       }}
//     >
//       <div ref={elementRef}>{element}</div>
//     </div>
//   );
// };

// export default SlideOffComponent;

// import { useState, useRef, useEffect } from 'react';

// const SlideOffComponent = ({ element }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const wrapperRef = useRef(null);
//   const elementRef = useRef(null);
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY || document.documentElement.scrollTop;
//       setScrollPosition(scrollTop);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const handleMouseMove = (event) => {
//     const wrapperRect = wrapperRef.current.getBoundingClientRect();
//     const mouseY = event.clientY;
//     const wrapperCenterY = wrapperRect.top + wrapperRect.height / 2;
//     const distanceFromCenter = Math.abs(mouseY - wrapperCenterY);

//     if (distanceFromCenter <= 200) {
//       setIsHovered(true);
//     } else {
//       setIsHovered(false);
//     }
//   };

//   const handleMouseClick = (event) => {
//     const isInsideWrapper = wrapperRef.current.contains(event.target);
//     if (!isInsideWrapper) {
//       setIsHovered(false);
//     }
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   const containerHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;

//   const shouldSlideIn = scrollPosition < containerHeight;

//   return (
//     <div
//       ref={wrapperRef}
//       className="relative overflow-hidden"
//       style={{
//         position: 'absolute',
//         left: 0,
//         bottom: 0,
//         width: '100vw',
//         height: '102vh',
//         transition: 'transform 1.15s ease-in-out',
//         transform: isHovered || shouldSlideIn ? 'translateY(-100%)' : 'translateY(0)',
//       }}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       onClick={handleMouseClick}
//     >
//       <div ref={elementRef}>{element}</div>
//     </div>
//   );
// };

// export default SlideOffComponent;


// const SlideOffComponent = ({ element }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const wrapperRef = useRef(null);
//   const elementRef = useRef(null);

//   // Function to measure the width of the element
//   const measureWidth = () => {
//     if (elementRef.current) {
//       return elementRef.current.offsetWidth;
//     }
//     return 0;
//   };

//   // Function to slide off the element
//   const slideOff = () => {
//     const width = measureWidth();
//     wrapperRef.current.style.transition = 'transform 0.5s ease-in-out';
//     wrapperRef.current.style.transform = `translateX(-${width}px)`;
//   };

//   // Function to slide in the element
//   const slideIn = () => {
//     wrapperRef.current.style.transition = 'transform 0.5s ease-in-out';
//     wrapperRef.current.style.transform = 'translateY(0)';
//   };

//   return (
//     <div
//       ref={wrapperRef}
//       className="relative overflow-hidden"
//       style={{ position: 'absolute', left: 0, bottom: 0 , width:'100vw', height:'102vh'}}
//       onMouseEnter={() => {
//         setIsHovered(true);
//         slideOff();
//       }}
//       onMouseLeave={() => {
//         setIsHovered(false);
//         slideIn();
//       }}
//     >
//       <div ref={elementRef}>{element}</div>
//     </div>
//   );
// };

// export default SlideOffComponent;