"use client"

import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import SlidingHeroContainer from '@/components/SlidingHeroContainer'
import { heroImages } from '@/data'
import HeroGiff from '@/assets/images/ezgif-7-5ad70af6f1.gif'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function AboutPage() {
  const [open, setOpen] = useState(true)

  return (<> <div className="pointer-events-auto w-screen max-w-none relative bg-gray-200 !bg-[var(--themeColor)]">
                      <div className="pb-1 sm:pb-6">
                        <div className='pt-[14%]'>
                          <div className="relative h-[70vh] xl:h-[83vh]">
                            <img
                              className="hidden sm:flex !absolute h-full w-full object-cover"
                              src="https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&h=600&q=80"
                              alt=""
                            />
                          <img class="motion-reduce absolute sm:hidden h-full w-full object-cover" src="https://cecred.com/cdn/shop/files/Cecred_OurStory_MOBILE.jpg?v=1708294965&width=823" mobile-image="IiI=" aspect-ratio="4.828703703703703" mobile-aspect-ratio="" alt="" loading="lazy" sizes="" width="1043" height="216" />
                          </div>
  <div class="relative  container px-[5%]">
    <div class="xl:grid grid-cols-5 g text-fifty-fifty__container text-fifty-fifty__container--full-title">
        <div className='xl:col-span-3 pr-6 sm:pr-[20%]'>         
         <h2 class="h5 !mt-5 c-text text-fifty-fifty__title">Cécred Beginnings</h2>
        
        
          <p class="h2 uppercase c-text text-fifty-fifty__desc xl:text-lg">I GREW UP SWEEPING HAIR IN MY MOTHER's salon. So much of who I am came from there. I saw how she transformed hair by mixing mainstream products with textured haircare.</p>
          </div>

        
        <div className='col-span-2 pr-[5%]'>   <div class="c-text text-fifty-fifty__text">
            <p>It’s been my lifelong dream to create these hair products and bring some of my mother’s teachings to life. We started by prioritizing the needs of textured hair like mine and others who lack moisture and strength. It was important to honor past rituals while infusing our personal touch by adding advanced science to build new sacred rituals. The result was haircare defined by its performance, quality, and intention. Haircare that isn’t put into the same box others have tried to put me in as a Black woman throughout my career. Haircare that will keep my hair healthy despite how often I change it up as a performer—the coloring, high-tension styles, sewing, sweat, and buildup.</p><p></p><p>I built Cécred from the ground up. I poured into it everything I’ve learned throughout my life so we can borrow some of our past and bring it to the future. Cécred is about prioritizing yourself and all the things you hold sacred.</p>

            
          </div>
        

        

        
    </div></div>
       

</div> 
<div className=''>
    {/* <div id="_7bgmoenc6_main" className={classNames(styles.Parallax_root__si4ci, "Parallax_root__si4ci puls_parallax hero-layout_headerWrapper__niIMm")}>
                    <picture className={classNames(styles.Image_highContrastPicture__mnUVF,"hidden sm:flex gradient-mask-b-0")}> */}
                      <source media="(min-width: 601px)" srcSet={HeroGiff.src} sizes="(max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 960px) 960px, (max-width: 1024px) 1024px, (max-width: 1280px) 1280px, (max-width: 1400px) 1400px, (max-width: 1600px) 1600px, (max-width: 1920px) 1920px, (max-width: 2400px) 2400px, (max-width: 2800px) 2800px, 3200px" />
                      <img src={HeroGiff.src} alt={"imageAlt"}  className='bg-cover w-screen bg-cover !h-64 sm:!h-[90vh] sm:aspect-[3/3] ' id="_7bgmoenc6_main"/>
                    {/* </picture> */}
                    {/* <picture  className={classNames("visible md:invisible sm:hidden _7bgmoenc6_main gradient-mask-b-0")}>
                      <source media="(min-width: 601px)" srcSet={HeroGiff.src} sizes="(max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 960px) 960px, (max-width: 1024px) 1024px, (max-width: 1280px) 1280px, (max-width: 1400px) 1400px, (max-width: 1600px) 1600px, (max-width: 1920px) 1920px, (max-width: 2400px) 2400px, (max-width: 2800px) 2800px, 3200px" />
                      <img id="_7bgmoenc6_main" src={HeroGiff.src} alt={"imageAlt"}  className='bg-cover w-screen bg-cover aspect-[3/2] '/>
                    </picture> */}
                  </div>  
                  <div class="relative  container px-[5%]">
    <div class="xl:grid grid-cols-5 g text-fifty-fifty__container text-fifty-fifty__container--full-title">
        <div className='xl:col-span-3 pr-6 sm:pr-[20%]'>         
         <h2 class="h5 !mt-5 mc-text text-fifty-fifty__title">Cécred Beginnings</h2>
        
        
          <p class="h2 uppercase c-text text-fifty-fifty__desc xl:text-lg">I GREW UP SWEEPING HAIR IN MY MOTHER's salon. So much of who I am came from there. I saw how she transformed hair by mixing mainstream products with textured haircare.</p>
          </div>

        
        <div className='col-span-2 pr-[5%]'>   <div class="c-text text-fifty-fifty__text">
            <p>It’s been my lifelong dream to create these hair products and bring some of my mother’s teachings to life. We started by prioritizing the needs of textured hair like mine and others who lack moisture and strength. It was important to honor past rituals while infusing our personal touch by adding advanced science to build new sacred rituals. The result was haircare defined by its performance, quality, and intention. Haircare that isn’t put into the same box others have tried to put me in as a Black woman throughout my career. Haircare that will keep my hair healthy despite how often I change it up as a performer—the coloring, high-tension styles, sewing, sweat, and buildup.</p><p></p><p>I built Cécred from the ground up. I poured into it everything I’ve learned throughout my life so we can borrow some of our past and bring it to the future. Cécred is about prioritizing yourself and all the things you hold sacred.</p>
            <button type="button" class="themeBtn inline-flex w-full flex-shrink-0 items-center justify-center bg-[var(--agedBlack)] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#625e5e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--agedBlack)] sm:flex-1">SHop Now</button>
            
          </div>
        

        

        
    </div></div>
       

</div>  
<div className='xl:grid grid-cols-5 g text-fifty-fifty__container text-fifty-fifty__container--full-title mt-6 px-4 sm:mt-8  '>
<div className='xl:col-span-2'>
{/* <div className="sm:px-4 sm:pb-5 sm:pt-5 sm:px-0 sm:pt-0">
          <dl className="space-y-8 px-4 sm:space-y-6 sm:px-6">
            <div>
              <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Bio</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                <p>
                  Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus
                  feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum
                  aenean arcu.
                </p>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Location</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">New York, NY, USA</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Website</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">ashleyporter.com</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Birthday</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                <time dateTime="1988-06-23">June 23, 1988</time>
              </dd>
            </div>
          </dl>
      </div> */}
   
    </div>


          </div>
        </div>
     

           
    {/* </div> */}
    </div>
  </div>

  </> 
  )
}
