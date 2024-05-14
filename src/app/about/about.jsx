import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import backgroundGif from '@/images/vllo-3.gif'
import nas_singing_portrait from '@/images/nas_singing_portrait.jpeg'
import SocialMediaHandle, { Galery } from '@/components/Gallery'
import { useRef } from 'react'
import Link from 'next/link'
import SocialMediaGallery from '@/components/SocialMediaGallery'
//import  Bars3Icon,
// CalendarIcon,
// CogIcon,
// HomeIcon,
// MagnifyingGlassCircleIcon,
// MapIcon,
// MegaphoneIcon,
// SquaresPlusIcon,
// UserGroupIcon,
// XMarkIcon,
// '@heroicons/react/24/outline'
//import  ChevronLeftIcon,
// EnvelopeIcon,
// FunnelIcon,
// MagnifyingGlassIcon,
// PhoneIcon,
// ('@heroicons/react/20/solid')
// import founderPoster1 from '@/images/founderPoster1.jpg'

import phoneGif from '@/images/projectImages/phone/iphone_video_cropd_gif.gif'
import istaImg1 from '@/images/social/instagram-1.png'
import istaImg2 from '@/images/social/instagram-2.jpeg'
import istaImg3 from '@/images/social/instagram-3.jpeg'
import istaImg4 from '@/images/projectImages/book-club-img1.jpeg'
import istaImg5 from '@/images/social/instagram-5.jpeg'
import istaImg6 from '@/images/social/instagram-6.avif'

import aboutFounder1 from '@/images/about-nasser/about-nas1.jpg'
import aboutFounder2 from '@/images/about-nasser/about-nas2.PNG'
import aboutFounder3 from '@/images/about-nasser/about-nas3.jpg'
import aboutFounder4 from '@/images/about-nasser/about-nas4.jpg'
import aboutFounder5 from '@/images/about-nasser/about-nas5.jpg'
import aboutFounder6 from '@/images/about-nasser/about-nas6.jpg'
import { AboutSection } from '@/components/indexComponents/AboutSection'


const user = {
  name: 'Nasser Sanou',
  imageUrl: nas_singing_portrait.src,
}

const tabs = [
  { name: 'Profile', href: '/about', current: true },
  { name: 'Calendar', href: '/calendar', current: false },
  { name: 'Projects', href: '/projects', current: false },
]
const profile = {
  name: 'Nasser Sanou',
  imageUrl: nas_singing_portrait.src,
  coverImageUrl: backgroundGif,
  fields: {
    Phone: '(555) 123-4567',
    Email: 'x@example.com',
    Title: 'Senior Front-End Developer',
    Team: 'Product Development',
    Location: 'San Francisco',
    Sits: 'Oasis, 4th floor',
    Salary: '$145,000',
    Birthday: 'June 8, 1990',
  },
}


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}export const socialMedia = [
  {
    link: '/',
    id: 1,
    name: 'Intagram',
    hlink: '#',
    source: istaImg1,
    imageAlt:
      'Black machined steel pen with hexagonal grip and small white logo at top.',
  },
  {
    link: '/',
    id: 2,
    name: 'FB',
    hlink: '#',
    source: istaImg6,
    imageAlt:
      'Black machined steel pen with hexagonal grip and small white logo at top.',
  },
  {
    link: '/',
    id: 3,
    name: 'LinkedIn',
    hlink: '#',
    source: istaImg3,
    imageAlt:
      'Black machined steel pen with hexagonal grip and small white logo at top.',
  },
  {
    link: '/',
    id: 4,
    name: 'WhatsApp',
    hlink: '#',
    source: istaImg4,
    imageAlt:
      'Black machined steel pen with hexagonal grip and small white logo at top.',
  },
  {
    link: '/',
    id: 5,
    name: 'GitHub',
    hlink: '#',
    source: istaImg5,
    imageAlt:
      'Black machined steel pen with hexagonal grip and small white logo at top.',
  },
  {
    link: '/',
    id: 6,
    name: 'GitHubb',
    hlink: '#',
    source: phoneGif,
    imageAlt:
      'Black machined steel pen with hexagonal grip and small white logo at top.',
  },
  // More products...
]
//  const sectAboutRef = useRef(null)
//   const sectAboutMeRef = useRef(null)
//   const podcastsRef = useRef(null)
//   const sectProjectRef = useRef(null)
//   const blogsRef = useRef(null)
//   const learnCode = useRef(null)
//   const contactRef = useRef(null)
//   const podcastRef = useRef(null)
//   const socialsRef = useRef(null)
//   const githubRef = useRef(null)
const tabsPanel = [
  { name: 'Posts', href: '#', data:808, current: false },
  { name: 'About', href: '/diets/women', data:'2.4k', current: true },
  { name: 'Following', href: '/diets/men',data:1708, current: false },
]
export default function About() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [tabs, setTabs] = useState(tabsPanel)
   const [currentTab, setCurrent] = useState('Women')



  function setCurrentTab(tabName) {
    console.log('TAB NAME', tabName)
    const tabsState = [...tabs].map((tab) => {
      tab.current = false
      if (tab.name == tabName) {
        tab.current = true
        setCurrent(tabName)
        console.log('TabNAMe', tabName)
        // let completedtask = tasks[task.id].taskCompleted === true
        // setCompletedTasks([...completedTasks], completedtask)
      }

      return tab
    })

    console.log('updatedTasks', tabsState)
    setTabs(tabsState)
  }
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full overflow-hidden">
        ```
      */}
      <div className="mt-14 flex h-full -mb-44">
     
        {/* Static sidebar for desktop */}

       
          <div className="relative flex flex-1 overflow-hidden">
            <main className="relative flex-1 lg:px-64 overflow-y-auto focus:outline-none xl:order-last">
              {/* Breadcrumb nav should be here*/}

              <article>
                {/* Profile header */}
                <div id="USER_BACKGROUND Profile and CTA " className=''>
                  <div id="about-background-wrapper">
                    <img
                      className="landing-hero-background h-44 w-full object-cover lg:h-64"
                      src={backgroundGif.src}
                      alt=""
                    />
                  </div>
                  <div className="rmx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className=" relative -mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                      <div className="inline-flex" id="profile-image-wrapper">
                        <img
                          className="h-24 w-24 rounded-full ring-4 ring-blue-400 dark:ring-indigo-500   sm:h-32 sm:w-32"
                          src={profile.imageUrl}
                          alt=""
                        />
                      </div>
                      <span className="absolute mt-3 top-12 ml-5 sm:top-20 sm:left-36 ">
                        <h1 className=" inline-flex truncate text-2xl font-bold text-gray-900 dark:text-white">
                          {profile.name}{' '}
                          <svg
                            class="ml-2 mr-1.5 mt-2 h-5 w-5 flex-shrink-0 text-blue-400"
                            x-description="Heroicon name: mini/check-circle"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </h1>
                        <div class="font-semubold text-slate-700 dark:text-gray-400">Artist  &amp; Software Engineer</div>
                      </span>

                      <div id="FOLLOWED-BGY MOBILE" className="dark:text-gray-400 mt-6 md:pt-44 text-slate-400  md:pt-6 lg:px-6 xl:px-10 min-[500px]:hidden">Followed by <span className='text-slate-800 dark:text-gray-200'>Ct fletcher</span>,  <span className='text-slate-800 d dark:text-gray-200'>John  brown </span> and <span className='text-slate-800 d dark:text-gray-200'>Prince </span></div>
                      <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                        <div className="mt-6 min-w-0 flex-1 sm:hidden 2xl:block">
                        
                        </div>
                      
                        <div className="justify-stretch justify-end flex   gap-x-4 flex-row">
                          <button
                            type="button"
                            className="flex justify-center gap-x-1.5 rounded-md bg-white px-3 pt-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          >
                          
                            Message
                          </button>
                          <button
                            type="button"
                            className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          >
                            {/* <PhoneIcon
                              className="-ml-0.5 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            /> */}
                            Call
                          </button>
                          <button
                            type="button"
                            className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          >
                            {/* <PhoneIcon
                              className="-ml-0.5 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            /> */}
                           <span className='text-md font-bold '>+ </span> Add 
                          </button>
                          {/* TABS */}
                        </div>
                        
                      </div>
      
                    </div>
                    {/* <div className="mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden">
                      <h1 className="truncate text-2xl font-bold text-gray-900">
                        {profile.name}
                      </h1>
                    </div> */}
                  </div>                
                </div><div id="FOLLOWED_BY_DESKTOP" className="max-[500px]:hidden text-slate-400 font-semibold  dark:text-gray-400 mt-6 md:pt-6 lg:px-6 xl:px-10">Followed by <span className='text-slate-800 dark:text-gray-200'>Ct fletcher</span>,  <span className='text-slate-800 dark:text-gray-200'>Snoop doog </span> and <span className='text-slate-800  dark:text-gray-200'>Prince </span></div>

                {/* Tabs */}
                <div className="mt-6 sm:mt-2 2xl:mt-5">
                  <div className="border-b border-t border-gray-200 border-gray-200">
                    <div className="mx-auto max-w-5xl md:px-4 sm:px-6 lg:px-8">
                      <nav className="max-[600px]:justify-center -mb-px flex space-x-1" aria-label="Tabs">
                        {tabs.map((tab) => (
                          <button
                            onClick={() => setCurrentTab(tab.name)}
                            key={tab.name}
                            href={tab.href}
                            className={classNames(
                              tab.current
                                ? 'border-sky-500  text-gray-900 dark:border-indigo-500 dark:text-gray-200 '
                                : 'border-gray-100 dark:border-gray-600 text-gray-500 hover:border-gray-200 hover:text-gray-700',
                              'whitespace-nowrap border-b-2 py-1 px-10 text-sm font-medium dark:text-gray-300 '
                            )}
                            aria-current={tab.current ? 'page' : undefined}
                          >
                            <div><div class="text-slate-900 pt-1 font-bold text-md dark:text-white"> {tab.name}</div><div class="mt-0.5 font-bold text-gray-400 leading-6">{tab.data}</div></div>
                           
                          </button>
                        ))}
                      </nav>
                    </div>
                  </div>
                </div>
               {/* Tabs END */}
                {/* <div className="mt-6 sm:mt-2 2xl:mt-5 justify-stretch justify-end flex gap-x-4 ">

                </div> */}

         


       <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-1">
         <SocialMediaGallery collection={socialMedia} className="mt-10  bg-white " />
         <video controls className='md:rounded-xl px-4  md:mt-0 max-[1200px]:hidden aspect-[6/4]'
               src={'/promo-trimed.mp4'}
             />
         {/* <video controls src={"/Fiverr_PRO_2019_promo.mp4"}  className='mt-0 rounded-xl aspect-[6/4]'/> */}
        
        </div>
                <div className="mx-auto mt-6 max-w-5xl px-4 sm:px-16  lg:px-28 ">
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <dd
                        className="mt-1 max-w-prose space-y-5 text-sm text-gray-900"
                        // dangerouslySetInnerHTML={{ __html: profile.about }}
                      />
                      <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                          I’m Nasser Sanou
                          <span className="text-7xl  font-bold text-yellow-500">
                            .
                          </span>{' '}
                          I live in New York City, where I design and build the
                          future
                          <span className="text-6xl  font-bold text-yellow-500">
                            .
                          </span>
                        </h1>
                        {/* <p className="text-lg text-gray-900 dark:text-slate-200  sm:text-3xl ">
                          I’ve loved making things for as long as I can
                          remember, and wrote my first program when I was 6
                          years old, just two weeks after my mom brought home
                          the brand new Macintosh LC 550 that I taught myself to
                          type on.
                        </p> */}
                        <p className="pb-20 text-lg text-gray-900 dark:text-slate-200 sm:text-3xl">
                         {/* images?? */}
                            <div className='mx-autoflex px-4  sm:px-16 lg:px-28'>
                      <span className="pr-4 text-4xl  text-white dark:text-slate-200">
                        {/* Find me on{' '} */}
                      </span>
                      <SocialMediaHandle />
                    </div> 
                        </p>
                      </div>
                    </div>
                  </dl>
                  
                </div>
                  <div
                  id="founder-social-media"
                  className="relative" >
                      <AboutSection />
                 {/* <img
                  className="inline-block h-full w-full object-cover"
                  src={aboutFounder1.src}
                  alt=""
                /> */}
                 
                
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2">

                   {/* <img
                  className="inline-block h-full w-full object-cover 
                  lg:aspect-[8/5] lg:w-[37rem] max-w-none  bg-gray-50 object-center lg:h-[50rem] lg:pr-4"
                  src={aboutFounder2.src}
                  alt=""
                /> */}
                <img
                  className="inline-block h-full w-full object-cover lg:aspect-[7/5] lg:w-[37rem] max-w-none md:rounded-2xl bg-gray-50 object-cover lg:h-[34rem]"
                  src={aboutFounder3.src}
                  alt=""
                />
                </div>
                <div className="lg:-mt-24">  <img
                  className="h-full w-full object-cover "
                  src={aboutFounder4.src}
                  alt=""
                />
                </div>
               
                 <img
                  className="inline-block h-full w-full object-cover"
                  src={aboutFounder6.src}
                  alt=""
                /> 
                <img
                  className="inline-block lg:hidden h-full w-full object-cover"
                  src={aboutFounder5.src}
                  alt=""
                />
                
                {/**/}
                {/* <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" /> */}

                {/* Team member list */}
                {/* <div
                  id="team-member"
                  className="mx-auto mt-8 max-w-5xl px-4 pb-12 sm:px-6 lg:px-8"
                >
                  <h2 className="text-sm font-medium text-gray-500">
                    Team members
                  </h2>
                  <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {team.map((person) => (
                      <div
                        key={person.handle}
                        className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-pink-500 focus-within:ring-offset-2 hover:border-gray-400"
                      >
                        <div className="flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={person.imageUrl}
                            alt=""
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <a href="#" className="focus:outline-none">
                            <span
                              className="absolute inset-0"
                              aria-hidden="true"
                            />
                            <p className="text-sm font-medium text-gray-900">
                              {person.name}
                            </p>
                            <p className="truncate text-sm text-gray-500">
                              {person.role}
                            </p>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div> */}
              </article> <div className="max-[1415px]:contents mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
          <div className="min-[1415px]:hidden">
            <h3 className="text-sm hidden font-semibold leading-6 dark:text-white text-slate-800">
              Subscribe to my newsletter
            </h3>
            <p className="mt-2 text-sm leading-6 hidden dark:text-gray-300 text-slate-600">
              I&quot;ll send he latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
          </div>
          <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
            <label htmlFor="email-address" className="sr-only">
              Keep in touch
            </label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              required
              className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base dark:text-white text-slate-800 shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:w-56 sm:text-sm sm:leading-6"
              placeholder=" Keep in touch"
            />
            <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-sm hover:bg-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
            </main>
          </div>
        </div>
        
        <img id="LG FOOTER" 
                  className="inline-block max-[1000px]:hidden h-full w-full object-cover -mt-4"
                  src={aboutFounder5.src}
                  alt=""
                />
                 <div id="MD-HIDDEN"  className=" max-[1415px]:contents md:hidden  mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
          <div className="min-[1415px]:hidden">
            <h3 className="text-sm hidden font-semibold leading-6 dark:text-white text-slate-800">
              Subscribe to my newsletter
            </h3>
            <p className="mt-2 text-sm leading-6 hidden dark:text-gray-300 text-slate-600">
              I&quot;ll send he latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
          </div>
          <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
            <label htmlFor="email-address" className="sr-only">
              Keep in touch
            </label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              required
              className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base dark:text-white text-slate-800 shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:w-56 sm:text-sm sm:leading-6"
              placeholder="Keep in touch"
            />
            <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-sm hover:bg-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
    </>
  )
}
