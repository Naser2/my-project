"use client"

import React, { useState, useEffect } from 'react';
// import Clients from '@/components/Clients';

export default function TestimonialSection({ reviews }) {
  const [featuredReviews, setFeaturedReviews] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    // Filter featured reviews
    const featured = reviews.servicesReviews.filter(review => review.featured);
    setFeaturedReviews(featured);
  }, [reviews]);

 

  useEffect(() => {
    const handleMouseEnter = (index) => {
      setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
      setHoveredIndex(null);
    };

    document.querySelectorAll('.testimonial').forEach((element, index) => {
      element.addEventListener('mouseenter', () => handleMouseEnter(index));
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.querySelectorAll('.testimonial').forEach((element) => {
        element.removeEventListener('mouseenter', () => handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="bg-black py-14 sm:py-24 overflow-hidden">
        <div className="mx-auto md:px-6 lg:px-8">
          <div className="mx-auto max-w-none text-left">
            <div id="section-itro-wrap" className="mx-auto max-w-none px-6 lg:pl-2  text-center lg:text-left">
              <h2 className="text-white text-left" >Testimonials</h2>
              <p className="text-left  text-gray-400 text-lg ">
                Some2.5mazing people.
              </p>
            </div>
          </div>
          <section className="black-2-bg max-w-10xl py-4 sm:py-10 border-top border-1 border-gray-100 sm:p-4 !w-full">
          <div class="sm:grid sm:grid-cols-4 sm:gap-1">
          <div class="col-span-2 ...">
          <div className="utils_mobileOnly__pEh2w">
            <span aria-label="" 
            className="responsive-image loaded blocks__item__image blocks__item__image--news-size-3 sm:!max-w-[37vw] sm:!aspect-[3.5/5]" 
            data-geist-avatar="" data-version="v1" role="img" style={{ "--size": "60px" }}>
              <img data-version="v1" alt="" title="" loading="eager" width="60" height="60" decoding="async" data-nimg="1" className="responsive-image loaded sm:max-h-[65vh] col-span-2"
              src={'/testimonials-main.png'} />
            </span>
          </div>
          </div>
          <div className="utils_mobileOnly__pEh2w hidden sm:flex">
            <span aria-label="" 
            className="responsive-image loaded blocks__item__image blocks__item__image--news-size-3" data-geist-avatar="" data-version="v1" role="img" style={{ "--size": "60px" }}>
              <img data-version="v1" alt="" title="" loading="eager" width="60" height="60" decoding="async" data-nimg="1" 
              className="responsive-image loaded max-h-[65vh] !aspect-[2.5/5] hover:!h-full" 
              src={'/REVIEW-ezgif-1.gif'} />
            </span>
          </div> 
          <div class="...">
          <div className="utils_mobileOnly__pEh2w hidden sm:flex">
            <span aria-label="" 
            className="responsive-image loaded blocks__item__image blocks__item__image--news-size-3 "
             data-geist-avatar="" data-version="v1" 
             role="img" style={{ "--size": "60px" }}>
              <img data-version="v1" alt="" title="" loading="eager" width="60" height="60" decoding="async" data-nimg="1" 
              className="responsive-image loaded max-h-[65vh] !aspect-[2.5/5] hover:!h-full" 
              src={'/REVIEW-ezgif-2.gif'} />
            </span>
          </div> 
          </div>
         
        </div>
         {/* <div className="flex sm:grid sm:grid-cols-4">
          <div className="utils_mobileOnly__pEh2w">
            <span aria-label="" 
            className="responsive-image loaded blocks__item__image blocks__item__image--news-size-3 !col-span-2" data-geist-avatar="" data-version="v1" role="img" style={{ "--size": "60px" }}>
              <img data-version="v1" alt="" title="" loading="eager" width="60" height="60" decoding="async" data-nimg="1" className="responsive-image loaded sm:max-h-[65vh] col-span-2" 
              // sm:!max-w-[37vw] sm:!aspect-[2.5/5]
              src={'/testimonials-main.png'} />
            </span>
          </div> 
          <div className="utils_mobileOnly__pEh2w hidden sm:flex">
            <span aria-label="" 
            className="responsive-image loaded blocks__item__image blocks__item__image--news-size-3" data-geist-avatar="" data-version="v1" role="img" style={{ "--size": "60px" }}>
              <img data-version="v1" alt="" title="" loading="eager" width="60" height="60" decoding="async" data-nimg="1" className="responsive-image loaded max-h-[65vh] max-w-[16vw] !aspect-[2.5/5] hover:!h-full  hover:!aspect-[2/5]" 
              src={'/REVIEW-ezgif-1.gif'} />
            </span>
          </div> 
          <div className="utils_mobileOnly__pEh2w hidden sm:flex">
            <span aria-label="" 
            className="responsive-image loaded blocks__item__image blocks__item__image--news-size-3" data-geist-avatar="" data-version="v1" role="img" style={{ "--size": "60px" }}>
              <img data-version="v1" alt="" title="" loading="eager" width="60" height="60" decoding="async" data-nimg="1" className="responsive-image loaded max-h-[65vh] !w-[16vw] !aspect-[3/5]" 
              src={'/REVIEW-ezgif-2.gif'} />
            </span>
          </div> 
          <div className="reviews">
          
          </div>
          </div>  */}
            <div className="lg:px-4 group-text-change">
              <div className="flex pl-2 inline-flex overflow-x-auto flex sm:pt-4  max-w-7xl lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3 sm:space-x-4 w-full pb-8">
                {featuredReviews.map((review, index) => (
                  <div  key={index} className="testimonial  mt-4 xl:!max-w-[28vw] relative !z-10 group  max-h-[20em] flex-none px-6 mr-2 mb-6 hover:ring-1 hover:ring-orange-200 mb-12  transition-transform rounded-lg flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20 sm:px-4 xl:px-6 max-w-xs sm:max-w-lg xl:max-w-xl">
                    <figure className="reviewer-cred-text pt-2  sm:mt-10 flex flex-auto flex-col justify-between">
                      <blockquote className="sm:text-lg sm:leading-8  max-h-[12em] sm:pb-4 sm:pb-8">
                        <p className="text-gray-300/90 mb-[-0.1em] group-hover:text-white  opacity-1 z-20 text-ellipsis overflow-hidden">
                          {review.text}
                        </p>
                      </blockquote>
                      <div className='absolute group bottom-[-4em] inset-x-0 mx-[2em] flex-none !z-50 group-hover:shadow-xl xl:max-w-[30vw]'> 
                      <figcaption id="fillChild" className={`h-[4.74rem] sm:h-full sm:mt-10 flex items-center gap-x-6 group-hover:bg-white rounded-r-xl sm:rounded-r-md rounded-l-full  ${hoveredIndex === index ? 'bg-white' : 'bg-[transparent]'}`}>
                        <figure className="rounded-full group-hover:-ml-[0.3em] p-2">
                          <div className="testimonial_avatarWrapper__aFJO8 group-hover:!-pl-2 group-hover:border-2 !group-hover:ring-[1.5px] sm:flex">
                            <div className="utils_mobileOnly__pEh2w ">
                              <span aria-label="" className="avatar_avatar__3ccqO
                               testimonial_avatar__UW_Ga group-hover:!ring-2 group-hover:!ring-black " data-geist-avatar="" data-version="v1" role="img" style={{ "--size": "60px" }}>
                                <img data-version="v1" alt="" title="" loading="eager" width="60" height="60" decoding="async" data-nimg="1" className="image_intrinsic__ulrJk" src={review.image} />
                              </span>
                            </div>
                            <div className="utils_desktopOnly__RlogC sr-only sm:flexxrounded-full p-2">
                              <span aria-label="" className="avatar_avatar__3ccqO testimonial_avatar__UW_Ga" data-geist-avatar="" data-version="v1" role="img" style={{ "--size": "68px" }}>
                                <img data-version="v1" alt="" title="" loading="eager" width="68" height="68" decoding="async" data-nimg="1" className="image_intrinsic__ulrJk" src={review.image} />
                              </span>
                            </div>
                          </div>
                        </figure>
                        <div className="text-base -ml-4 hover:text-black py-2">
                          <div className="font-semibold text-white/80  group-hover:!text-[var(--agedBlack)]">
                            <TextColorChange h1={review.author} h2={review.title} initialH1="!text-gray-300" />
                          </div>
                          {/* <div className="mt-1 text-gray-400 hover:text-gray-500 group-text-grayish">
                            <TextColorChange h2={review.title} initialH2="text-gray-400" />
                          </div> */}
                        </div>
                      </figcaption></div>
                     
                    </figure>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 -mb-3">
              <div className="not-prose relative rounded-xl overflow-hidden dark:bg-slate-800/25">
                {/* Your grid of images and names */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}





// "use client"

// import React, { useState, useEffect } from 'react';
// // import TextColorChange from './TextColorChange'; // Assuming TextColorChange is a custom component



  
// Testimonial component

const TextColorChange = ({ h1, h2, p, initialH1, initialH2, initialP }) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const groupTextChange = document.querySelector('.group-text-change');

    const toggleTextColor = (isBlack) => {
      const h1TextBlack = document.querySelectorAll('.h1-text-black');
      const groupTextGrayish = document.querySelectorAll('.group-text-grayish');

      h1TextBlack.forEach((element) => {
        if (isBlack) {
          element.classList.add('text-black');
        } else {
          element.classList.remove('text-black');
        }
      });

      groupTextGrayish.forEach((element) => {
        if (isBlack) {
          element.classList.add('grayish-text');
        } else {
          element.classList.remove('grayish-text');
        }
      });
    };

    if (groupTextChange) {
      groupTextChange.addEventListener('mouseover', () => toggleTextColor(true));
      groupTextChange.addEventListener('mouseout', () => toggleTextColor(false));
      groupTextChange.addEventListener('click', () => toggleTextColor(true));
    }

    return () => {
      if (groupTextChange) {
        groupTextChange.removeEventListener('mouseover', () => toggleTextColor(true));
        groupTextChange.removeEventListener('mouseout', () => toggleTextColor(false));
        groupTextChange.removeEventListener('click', () => toggleTextColor(true));
      }
    };
  }, []);

  return (
    <div
      className="group-text-change"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {h1 && <h1 className={`h1-text ${isHovered ? '!text-white' : initialH1}`}>{h1}</h1>}
      {p && <p className={`group-text ${isHovered ? 'grayish-text' : initialH2}`}>{p}</p>}
      {h2 && <div className={`group-text ${isHovered ? 'grayish-text' : initialP}`}>{h2}</div>}
    </div>
  );
};
// export default function TestimonialSection({ reviews }) {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   useEffect(() => {
//     const handleMouseEnter = (index) => {
//       setHoveredIndex(index);
//     };

//     const handleMouseLeave = () => {
//       setHoveredIndex(null);
//     };

//     document.querySelectorAll('.testimonial').forEach((element, index) => {
//       element.addEventListener('mouseenter', () => handleMouseEnter(index));
//       element.addEventListener('mouseleave', handleMouseLeave);
//     });

//     return () => {
//       document.querySelectorAll('.testimonial').forEach((element) => {
//         element.removeEventListener('mouseenter', () => handleMouseEnter);
//         element.removeEventListener('mouseleave', handleMouseLeave);
//       });
//     };
//   }, []);

//   return (
//     <>
//       <div className="bg-black py-14 sm:py-22 overflow-hidden">
//         <div className="max-w-8xl mx-auto md:px-6 lg:px-8">
//           <div className="mx-auto max-w-7xl text-center">
//             <div id="section-itro-wrap" className="mx-auto max-w-7xl px-6 lg:px-8 mt-2 text-center lg:text-left">
//               <h2 className="text-4xl headline typography-headline large-centered dark:text-slate-100 text-white font-bold tracking-tight dark:text-white sm:text-6xl text-left">Testimonials</h2>
//               <p className="text-left p4-8 text-2xl font-bold tracking-tight text-crema text-gray-400 dark:text-white sm:pb-14 sm:text-4xl">
//                 Amazing people I was able to touch.
//               </p>
//             </div>
//           </div>
//           <section className="black-2-bg max-w-10xl py-14 sm:py-14 border-top border-1 border-gray-100 sm:p-4">
//             <div className="lg:px-8 group-text-change">
//               <div className="e flex pl-2 inline-flex overflow-x-auto flex pt-4  max-w-7xl lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3 sm:space-x-4 w-full">
//                 {reviews.servicesReviews.map((review, index) => (
//                   <div key={index} className="testimonial flex-none px-6 mr-2 mb-6 ring-1 hover:ring-gray-500 rounded-lg flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20 sm:px-4 xl:px-6 max-w-xs sm:max-w-lg xl:max-w-xl">
//                     <figure className="reviewer-cred-text mt-10 flex flex-auto flex-col justify-between">
//                       <blockquote className="text-lg leading-8">
//                         <p className="h1-text-black">
//                           "{review.text}"
//                         </p>
//                       </blockquote>
//                       <figcaption id="fillChild" className={`mt-10 flex items-center gap-x-6 testimonial_figure__LeL_Y hover:bg-white rounded-r-md rounded-l-full ${hoveredIndex === index ? 'bg-white' : ''}`}>
//                         <figure className="testimonial_figure__LeL_Y rounded-full p-2">
//                           <div className="testimonial_avatarWrapper__aFJO8 sm:flex">
//                             <div className="utils_mobileOnly__pEh2w">
//                               <span aria-label="" className="avatar_avatar__3ccqO testimonial_avatar__UW_Ga" data-geist-avatar="" data-version="v1" role="img" style={{ "--size": "60px" }}>
//                                 <img data-version="v1" alt="" title="" loading="eager" width="60" height="60" decoding="async" data-nimg="1" className="image_intrinsic__ulrJk" src={review.image} />
//                               </span>
//                             </div>
//                             <div className="utils_desktopOnly__RlogC sr-only sm:flexx testimonial_figure__LeL_Y rounded-full p-2">
//                               <span aria-label="" className="avatar_avatar__3ccqO testimonial_avatar__UW_Ga" data-geist-avatar="" data-version="v1" role="img" style={{ "--size": "68px" }}>
//                                 <img data-version="v1" alt="" title="" loading="eager" width="68" height="68" decoding="async" data-nimg="1" className="image_intrinsic__ulrJk" src={review.image} />
//                               </span>
//                             </div>
//                           </div>
//                         </figure>
//                         <div className="text-base hover:text-black">
//                           <div className="font-semibold text-white h1-text-black">
//                             <TextColorChange h1={review.author} h2={review.title} initialH1="text-white" />
//                           </div>
//                           <div className="mt-1 text-gray-400 hover:text-gray-500 group-text-grayish">
//                             <TextColorChange h2={review.title} initialH2="text-gray-400" />
//                           </div>
//                         </div>
//                       </figcaption>
//                     </figure>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="mt-4 -mb-3">
//               <div className="not-prose relative rounded-xl overflow-hidden dark:bg-slate-800/25">
//                 {/* Your grid of images and names */}
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//     </>
//   );
// }


// export default function TestimonialSection({ reviews }) {
//   const [featuredReviews, setFeaturedReviews] = useState([]);
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   useEffect(() => {
//     // Filter featured reviews
//     const featured = reviews.servicesReviews.filter(review => review.featured);
//     setFeaturedReviews(featured);
//   }, [reviews]);

 

//   useEffect(() => {
//     const handleMouseEnter = (index) => {
//       setHoveredIndex(index);
//     };

//     const handleMouseLeave = () => {
//       setHoveredIndex(null);
//     };

//     document.querySelectorAll('.testimonial').forEach((element, index) => {
//       element.addEventListener('mouseenter', () => handleMouseEnter(index));
//       element.addEventListener('mouseleave', handleMouseLeave);
//     });

//     return () => {
//       document.querySelectorAll('.testimonial').forEach((element) => {
//         element.removeEventListener('mouseenter', () => handleMouseEnter);
//         element.removeEventListener('mouseleave', handleMouseLeave);
//       });
//     };
//   }, []);

//   return (
//     <>
//       <div className="bg-black py-14 sm:py-22 overflow-hidden">
//         <div className="max-w-8xl mx-auto md:px-6 lg:px-8">
//           <div className="mx-auto max-w-7xl text-center">
//             <div id="section-itro-wrap" className="mx-auto max-w-7xl px-6 lg:px-8 mt-2 text-center lg:text-left">
//               <h2 className="text-white">Testimonials</h2>
//               <p className="text-left  text-gray-400 text-lg ">
//                 Amazing people I was able to touch.
//               </p>
//             </div>
//           </div>
//           <section className="black-2-bg max-w-10xl py-14 sm:py-14 border-top border-1 border-gray-100 sm:p-4">
//             <div className="group lg:px-8 group-text-change">
//               <div className="e flex pl-2 inline-flex overflow-x-auto flex pt-4  max-w-7xl lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3 sm:space-x-4 w-full">
//                 {featuredReviews.map((review, index) => (
//                   <div id="Fill-in-white" key={index} className="testimonial  groupo flex-none px-6 mr-2 mb-6 ring-1 hover:ring-gray-500 rounded-lg flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20 sm:px-4 xl:px-6 max-w-xs sm:max-w-lg xl:max-w-xl">
//                     <figure className="reviewer-cred-text mt-10 flex flex-auto flex-col justify-between">
//                       <blockquote className="text-lg leading-8">
//                         <p className="text-white  opacity-1 z-20">
//                           {review.text}
//                         </p>
//                       </blockquote>
//                       <figcaption id="fillChild" className={`mt-10 flex items-center gap-x-6 testimonial_figure__LeL_Y hover:bg-white rounded-r-md rounded-l-full ${hoveredIndex === index ? 'bg-white' : ''}`}>
//                         <figure className="testimonial_figure__LeL_Y rounded-full p-2">
//                           <div className="testimonial_avatarWrapper__aFJO8 sm:flex">
//                             <div className="utils_mobileOnly__pEh2w">
//                               <span aria-label="" className="avatar_avatar__3ccqO testimonial_avatar__UW_Ga" data-geist-avatar="" data-version="v1" role="img" style={{ "--size": "60px" }}>
//                                 <img data-version="v1" alt="" title="" loading="eager" width="60" height="60" decoding="async" data-nimg="1" className="image_intrinsic__ulrJk" src={review.image} />
//                               </span>
//                             </div>
//                             <div className="utils_desktopOnly__RlogC sr-only sm:flexx testimonial_figure__LeL_Y rounded-full p-2">
//                               <span aria-label="" className="avatar_avatar__3ccqO testimonial_avatar__UW_Ga" data-geist-avatar="" data-version="v1" role="img" style={{ "--size": "68px" }}>
//                                 <img data-version="v1" alt="" title="" loading="eager" width="68" height="68" decoding="async" data-nimg="1" className="image_intrinsic__ulrJk" src={review.image} />
//                               </span>
//                             </div>
//                           </div>
//                         </figure>
//                         <div className="text-base hover:text-black">
//                           <div className="font-semibold text-white h1-text-black">
//                             <TextColorChange h1={review.author} h2={review.title} initialH1="text-white" />
//                           </div>
//                           <div className="mt-1 text-gray-400 hover:text-gray-500 group-text-grayish">
//                             <TextColorChange h2={review.title} initialH2="text-gray-400" />
//                           </div>
//                         </div>
//                       </figcaption>
//                     </figure>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="mt-4 -mb-3">
//               <div className="not-prose relative rounded-xl overflow-hidden dark:bg-slate-800/25">
//                 {/* Your grid of images and names */}
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//     </>
//   );
// }
