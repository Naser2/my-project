'use Client'

import GetInTouch from '@/assets/images/get-in-touch.jpeg'

// const ContactSection = ({ aboutData }) => {

// return <div class="py-6">
// <div class="flex-block sm:flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto lg:max-w-none sm:px-24">
//       <div class="lg:block lg:w-1/2 bg-cover" style={{"background-image":"url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')"}}></div>
//       <div class="w-[70vw] sm:w-full p-8 lg:w-1/2 sm:max-w-[23vw]">
//           <h2 class="text-2xl font-semibold text-gray-700 text-center">Brand</h2>
//           <p class="text-xl text-gray-600 text-center">Welcome back!</p>
//           <a href="#" class="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
//               <div class="px-4 py-3">
//                   <svg class="h-6 w-6" viewBox="0 0 40 40">
//                       <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107"/>
//                       <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00"/>
//                       <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50"/>
//                       <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2"/>
//                   </svg>
//               </div>
//               <h1 class="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Google</h1>
//           </a>
//           <div class="mt-4 flex items-center justify-between">
//               <span class="border-b w-1/5 lg:w-1/4"></span>
//               <a href="#" class="text-xs text-center text-gray-500 uppercase">or login with email</a>
//               <span class="border-b w-1/5 lg:w-1/4"></span>
//           </div>
//           <div class="mt-4">
//               <label class="block text-gray-700 text-sm mb-2">Name</label>
//               <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded  px-4 block w-full appearance-none py-[1em]" type="name"/>
//           </div>
//           <div class="mt-4">
//               <label class="block text-gray-700 text-sm  mb-2">Email Address</label>
//               <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded  px-4 block w-full appearance-none py-[1em]" type="email"/>
//           </div>
//           <div class="mt-4">
//               <div class="flex justify-between">
//                   <label class="block text-gray-700 text-sm mb-2">Phone</label>
//                   <a href="#" class="text-xs text-gray-500">A phone number to reach you back</a>
//               </div>
//               <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded  px-4 block w-full appearance-none py-[1em]" type="phone"/>
//           </div>
//           <div class="mt-8">
//               <button class="themeBtn  text-white !w-full">Login</button>
//           </div>
//           <div class="mt-4 flex items-center justify-between">
//               <span class="border-b w-1/5 md:w-1/4"></span>
//               <a href="#" class="text-xs text-gray-500 uppercase">or sign up</a>
//               <span class="border-b w-1/5 md:w-1/4"></span>
//           </div>
//       </div>
//   </div>
// </div>
// }


/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function ContactSection() {
  return (
    <div className="!relative isolate">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 bg-[#f5f4f2]">
        <div className="relative p-4 sm:pl-6 pb-10 pt-12 sm:pt-32 lg:static lg:px-8 lg:pt-24 lg:pb-0">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-2xl">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
              </svg>
            </div>
            <h2 className="text-3xl pb-6">Get in touch</h2>
             <img class="flex lg:block lg:w-x bg-cover aspect-[3.2/5] sm:aspect-[4.2/5]" src={GetInTouch.src}/>
            <dl className="mt-4 sm:mt-6 space-y-4 text-base leading-7 text-gray-600 p-4 sm:pl-2">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                 304 West 78th street
                  <br />
                  New York, NY, 10007
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none ">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-gray-900" href="tel:+1 (555) 234-5678">
                    +1 (355) 234-5555
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-gray-900" href="mailto:massi@ebeaute.com">
                   massi@beaute.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className='max-w-[93vw] sm:max-w-[48vw] pt-6 lg:pt-34 bg-[#fff0f0]'>
        
        <form action="#" method="POST" className="pb-24 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">  
             <h2 class="!text-xl px-6 sm:px-0 pb-6">Message Me for a faster reply</h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-1 px-6 sm:px-0">
              <div>
              <div class="mt-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2">Name</label>
                  <input   type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="first-name"
                   class="bg-gray-100/30 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded  px-4 block w-full appearance-none py-[1em]" type="name"/>
              </div>
              </div>
              {/* <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Last name
                </label>
                <div className=" mx-4 mt-4">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    class="bg-gray-100/30 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded  px-4 block w-full appearance-none py-[1em] focus:ring-[var(--agedBlack)] " type="name"/>
                </div>
              </div> */}
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 sm:px-0 py-[1em]
                    text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                     focus:ring-[var(--agedBlack)] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 sm:px-0 py-[1em]
                     text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                     placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                      focus:ring-[var(--agedBlack)] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full sm:max-w-[30vw] px-3.5  rounded-md border-0   py-[1em]
                    text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                     focus:ring-[var(--agedBlack)] sm:text-sm sm:leading-6 focus:ring-[var(--agedBlack)]"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end pl-5 sm:pl-6">
              <button
                type="submit"
                className=" themeBtn rounded-md !w-full bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>
  )
}

