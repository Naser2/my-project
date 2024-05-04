
'use client'

import { useState, useEffect } from 'react';
import wig3 from '@/assets/images/products/wigs/wig-3.jpeg'

import wig3Reveal from '@/assets/images/products/wigs/wig-3-hover.webp'
import wig2 from '@/assets/images/products/wigs/wigs-2.jpeg'
import wig2Reveal from '@/assets/images/products/wigs/wig-2-hover.webp'
import wig1 from '@/assets/images/products/wigs/wig-1.webp'
import wig1Reveal from '@/assets/images/products/wigs/wig-1-hover.webp'
import { StarIcon } from '@heroicons/react/20/solid'
import {classNames} from '@/utils/classNames.js'
const products = [
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      subtitle:
      'Illo sint voluptas. Blessinvoluptates culpa eligendi..',
      description:
        'Illo sint voluptas. Bless voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      imageUrl:wig3.src,
      imageReavealUrl:wig3Reveal.src,
      price: '$38',
      datetime: '2020-03-16',
      
      author: {
        name: 'Michael Foster',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      price: '$35',
      rating: 5,
      reviewCount: 512,
    },
    {
        id: 2,
        title: 'Boost your conversion rate',
        href: '#',
        subtitle:
        'Illo sint voluptas. Blessinvoluptates culpa eligendi..',
        description:
          'Illo sint voluptas. Bless voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:wig2.src,
        imageReavealUrl:wig2Reveal.src,
        price: '$38',
        datetime: '2020-03-16',
        
        author: {
          name: 'Michael Foster',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        price: '$35',
        rating: 4.8,
        reviewCount: 312,
      },
      {
        id: 3,
        title: 'Boost your conversion rate',
        href: '#',
        subtitle:
        'Illo sint voluptas. Blessinvoluptates culpa eligendi..',
        description:
          'Illo sint voluptas. Bless voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:wig1.src,
        imageReavealUrl:wig1Reveal.src,
        price: '$38',
        datetime: '2020-03-16',
        
        author: {
          name: 'Michael Foster',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        price: '$35',
        rating: 3.9,
        reviewCount: 148,
      },
  ]
  
  export default function Products() {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    useEffect(() => {
      const prevButton = document.querySelector('[data-carousel-prev]');
      const nextButton = document.querySelector('[data-carousel-next]');
  
      if (prevButton && nextButton) {
        prevButton.style.display = currentSlide === 0 ? 'none' : 'flex';
        nextButton.style.display = currentSlide === products.length - 1 ? 'none' : 'flex';
      }
    }, [currentSlide]);
  
    const goToNextSlide = () => {
      setCurrentSlide((prevSlide) => Math.min(prevSlide + 1, products.length - 1));
    };
  
    const goToPrevSlide = () => {
      setCurrentSlide((prevSlide) => Math.max(prevSlide - 1, 0));
    };
  
    return (
      <div className="bg-[var(--massi-grey-4)] py-12 sm:py-32">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
            <div className='grid drid-cols-2 flex space-between'>
               <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Products</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice. 
            </p>
           
             </div>  
             <button
                  className="image-with-text__cta themeBtn bg-black !text-white no_high_contrast  hover:!bg-gray-700 hover:text-white px-16 hidden sm:flex"
                  width="full"
                  theme="primary"
                  href="/pages/science-technology"
                >
                 Shop NOW
                </button>
            </div>
         
          <div className="overflow-x-scroll flex relative max-w-8xl mx-auto dark:bg-slate-800 dark:highlight-white/5 shadow-lg flex-inline divide-x dark:divide-slate-200/5">
            {products.map((product, index) => (
              <article
                key={product.id}
                //  justify-end
                // className="first:-pl-4 last:pr-6 !aspect-[16.8/31] w-[63vw] flex-none mx-2 sm:w-[34.4vw] xl:sm:w-[28.3vw] relative isolate flex flex-col overflow-hidden ease-in-out" data-carousel-item
                className={`first:-pl-4 last:pr-6 !aspect-[16.8/31] w-[63vw] flex-none mx-2 sm:w-[34.4vw] xl:sm:w-[28.3vw] relative isolate flex flex-col overflow-hidden ease-in-out ${currentSlide === index ? 'slide-in' : ''}`}
              >
                <img src={product.imageUrl} alt="" className="-z-10 h-full w-full object-cover products-display-image" />
                {/* <img src={product.imageUrl} alt="" className="image-element card-image__hover  absolute inset-0 -z-10 h-full w-full object-cover products-display-image" /> */}
                {/* <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" /> */}
                {/* <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" /> */}
  
                    <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300 pt-4">
                    <div className='flex'><h3 className="text-lg font-semibold leading-6 text-[var(--massi-grey-0)] dark:text-white">
                    <a href={product.href}>
                        <span className="" />
                        {product.title}
                    </a>
                    </h3>
                        <time dateTime={product.datetime} className="pl-4 text-black">
                        {product.price}
                        </time></div>
                    <div className="flex-block -mt-0 items-center gap-x-4">
                        <div className="flex gap-x-2.5 text-gray-500">
                            {product.subtitle}
                        </div>
                <div className="mt-0">
                <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                  <p className="text-sm text-gray-700">
                    {product.rating}
                    <span className="sr-only"> out of 5 stars</span>
                  </p>
                  <div className="ml-1 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <div aria-hidden="true" className="ml-4 text-sm text-gray-300">
                    ·
                  </div>
                    <div className="ml-4 flex hidden sm:flex">
                        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                        All {product.reviewCount} reviews
                        </a>
                    </div>
                    </div>
                   </div>
                
                    {/* <div className="oke-stars-foreground fill-state-black text-black stroke-black" style={{"width": "98.1633%"}}><svg height="18" viewBox="0 0 87.11111111111111 16" aria-hidden="true"><use x="0" id="#oke-star-filled" href="#oke-star-filled"></use><use x="17.77777777777778" href="#oke-star-filled"></use><use x="35.55555555555556" href="#oke-star-filled"></use><use x="53.333333333333336" href="#oke-star-filled"></use><use x="71.11111111111111" href="#oke-star-filled"></use></svg></div> */}
                  </div>
                </div>
      
              </article>
            ))}
        <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        </div>
        <button
        type="button"
        className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={goToPrevSlide}
      >
      <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                <span class="hidden">Previous</span>
            </span>
      </button>
      <button
        type="button"
        className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={goToNextSlide}
      >
        <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="hidden">Next</span>
        </span>
        </button>
        
          </div>
          <button
            className="!mt-12 image-with-text__cta themeBtn bg-black !text-white no_high_contrast  hover:!bg-gray-700 hover:text-white px-16 sm:hidden"
            width="full"
            theme="primary"
            href="/pages/science-technology"
        >
            Shop NOW
        </button>
        </div>
      </div>
    )
  }
  