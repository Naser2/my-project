"use client"

import { useState, useEffect } from 'react';
import styles from './SplashScreen.module.css'; // Import CSS module for styling
import { classNames } from '@/utils';
// const SplashScreen = () => {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoaded(true);
//     }, 3000); // Change the timeout duration as needed

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className={styles.splashScreen} style={{ display: isLoaded ? 'none' : 'flex' }}>
//       <div className={styles.slideIn} />
//       <div className={styles.slideOut} />
//     </div>
//   );
// };

// export default SplashScreen;

// import { useState, useEffect } from 'react';
// import styles from './SplashScreen.module.css'; // Import CSS module for styling

// const SplashScreen = () => {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoaded(true);
//     }, 3000); // Change the timeout duration as needed

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className={styles.splashScreen} style={{ display: isLoaded ? 'none' : 'flex' }}>
//       <div className={styles.slideIn} />
//       <div className={styles.curtain}>
//         <h1 className={styles.title}>Massi Beauty</h1>
//       </div>
//       <div className={styles.slideOutLeft} />
//       <div className={styles.slideOutRight} />
//     </div>
//   );
// };

// export default SplashScreen;


const SplashScreen = () => {
  const[refresh, setRefresh] = useState(true)
  const [appInitColor, setAppInitColor]= useState('bg-red-400');
  const [initBackground, setInitBackground] = useState(false);
  const [logoRise, setLogoRise] = useState(false);
  const [animationOneComplete, setAnimationOneComplete] = useState(false);
  const [blindsOuverture, setBlindsOuverture] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  // const [slaphLeave, setSpalshLeave]  = useState(false);


    useEffect(() => {
      setRefresh(false)
      
      setAppInitColor("!bg-black");
      const iniBG = setTimeout(() => {
        setAppInitColor("!bg-black");
      }, .3000); // First animation duration

      const timeInitBG = setTimeout(() => {
        setInitBackground(true);
      }, .2900); // First animation duration
  
      const starAnimation = setTimeout(() => {
        setAnimationOneComplete(true);
      }, .3000); // Second animation duration
       
    const timeBlindsOuverture = setTimeout(() => {
          setBlindsOuverture(true);
        }, .3000);

       const timerLogoRise = setTimeout(() => {
        setLogoRise(true);
      }, 1300.9900); // Second animation duration
      const timerLogoLeave = setTimeout(() => {
        setLogoLeave(true);
      }, 1300.9900); // Second animation duration
  
      // First animation duration
      const timer2 = setTimeout(() => {
        setIsLoaded(true);
      }, 2100.6004); // First animation duration
  
      // const timer2 = setTimeout(() => {
      //   setIsLoaded(true);
      // }, .9200); // Second animation duration
  
      return () => {
        clearTimeout(iniBG)
        clearTimeout(timeInitBG);
        clearTimeout(starAnimation);
         clearTimeout(timeBlindsOuverture);
        clearTimeout(timerLogoRise )
       
        clearTimeout(timer2);
      };
    }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoaded(true);
//     }, 0.5); // Change the timeout duration as needed

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className={styles.splashScreen} style={{ backgroundColor: isLoaded ? '#f8cbcb' : 'initial' }}>
//       {isLoaded ? null : <div className={styles.slideIn} />}
//     </div>
//   );
return <><div className={classNames(!appInitColor  && "bg-red-400 !z-40 h-screen w-screen ",  "bg-[var(--themeColor)] z-10 h-screen w-screen", isLoaded && "hidden")} 
                //  style={{ backgroundColor: isLoaded ? '#f8cbcb' : 'initial' }}
                 ></div>
{/* <div className={styles.slideIn} /> */}
{animationOneComplete && (
  <>
  {/* <div id="welcome-screen" className={classNames("welcome-screen-state-logo-intro")}>
            <div id="welcome-screen-background" className={classNames(!initBackground == false ?  'bg-[#927f72] absolute top-0 left-0 w-full h-screen' : '!bg-transparent !z-0')}></div>
             <div id="welcome-screen-foreground">
                <div id="welcome-screen-logo">
                    <img id="welcome-screen-logo-image" src="https://static.wixstatic.com/media/2ada6c_f5ce470294f0443f984aa05cf5ea585a~mv2.png/v1/fill/w_240,h_175,al_c,usm_0.66_1.00_0.01/2ada6c_f5ce470294f0443f984aa05cf5ea585a~mv2.png" alt=""/>
                    <div id="welcome-screen-logo-cover"></div>
                </div>    
            </div>
        </div>  */}
    <>
   {blindsOuverture == true  && (
    <>
      <div className={classNames(styles.slideInLeft, !isLoaded ? "!z-50" : "!-z-10")} style={{ animationDelay: '0.04s'}} />
      <div className={classNames(styles.slideInRight, !isLoaded ? "!z-50" : "!-z-10")} style={{ animationDelay: '0.04s' }}/>
     </>
    )
    }
    </>
   <> { logoRise && 
      ( <div id="welcome-screen" className={classNames("welcome-screen-state-logo-intro", blindsOuverture ==true ? '!z-10' :'!z-50', isLoaded && "hidden")}>
       <div id="welcome-screen-background" className={classNames(!initBackground == false ?  'bg-[#927f72] absolute top-0 left-0 w-full h-screen' : ' absolute top-0 left-0 w-full h-screen !bg-[#927f72 !z-10')}></div>
        <div id="welcome-screen-foreground">
           <div id="welcome-screen-logo">
               <img id="welcome-screen-logo-image" src="https://static.wixstatic.com/media/2ada6c_f5ce470294f0443f984aa05cf5ea585a~mv2.png/v1/fill/w_240,h_175,al_c,usm_0.66_1.00_0.01/2ada6c_f5ce470294f0443f984aa05cf5ea585a~mv2.png" alt=""/>
               <div id="welcome-screen-logo-cover"></div>
           </div>    
       </div>
   </div>)
      }</>
  </>
)}</> 

};

export default SplashScreen;


// const SplashScreen = () => {
//     const [isLoaded, setIsLoaded] = useState(false);
  
//     useEffect(() => {
//       const timer = setTimeout(() => {
//         setIsLoaded(true);
//       }, 3000); // Change the timeout duration as needed
  
//       return () => clearTimeout(timer);
//     }, []);
  
//     return (
//       <div className={styles.splashScreen} style={{ backgroundColor: isLoaded ? '#f8cbcb' : 'initial' }}>
//         <div className={styles.slideInLeft} style={{ display: isLoaded ? 'none' : 'block' }} />
//         <div className={styles.slideInRight} style={{ display: isLoaded ? 'none' : 'block' }} />
//       </div>
//     );
//   };
  
//   export default SplashScreen;



// const SplashScreen = () => {
//     const [animationOneComplete, setAnimationOneComplete] = useState(false);
//     const [isLoaded, setIsLoaded] = useState(false);
  
//     useEffect(() => {
//       const timer1 = setTimeout(() => {
//         setAnimationOneComplete(true);
//       }, 100); // First animation duration
  
//       const timer2 = setTimeout(() => {
//         setIsLoaded(true);
//       }, 600); // Second animation duration
  
//       return () => {
//         clearTimeout(timer1);
//         clearTimeout(timer2);
//       };
//     }, []);
  
//     return (
//       <div className={styles.splashScreen} style={{ backgroundColor: isLoaded ? '#f8cbcb' : 'initial' }}>
//         <div className={styles.slideIn} />
//         {animationOneComplete && (
//           <>
//             <div className={styles.slideInLeft} style={{ animationDelay: '0.2s', zIndex: 1 }} />
//             <div className={styles.slideInRight} style={{ animationDelay: '0.2s', zIndex: 1 }} />
//           </>
//         )}
//       </div>
//     );
//   };
  
//   export default SplashScreen;