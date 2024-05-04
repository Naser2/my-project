

import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'
import { classNames } from '@/utils/classNames'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';
import { ArrowDownIcon } from '@heroicons/react/24/outline'

export default function ThemeSwitchModal() {
    const [currentTheme, setCurrentTheme] = useState('light');
    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()
  
    useEffect(() =>  {
     console.log("DOm Loaded MOONTED") 
     setMounted(true)
      },[])
  
    if (!mounted) return (
      // alert("WINDPOW NOT-LOADED")
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={36}
        height={36}
        sizes="36x36"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    )
  
    if (resolvedTheme === 'dark') {
      const theme =  "dark"; 
      window.localStorage.setItem("theme", theme);
  
    }
  
    if (resolvedTheme === 'light') {
      const theme =  "light"; 
      window.localStorage.setItem("theme", theme);
       }
  
  
  
  
  
// useEffect(() => {
//     const theme = localStorage.getItem("theme");
//     if (theme) {
//        setTheme(theme);
//     }
//   }, []);

  const handleThemeChange = (theme) => {
    // const theme =  theme === 'dark' ? "dark" : "light"; 
    window.localStorage.setItem("theme", theme);
    setTheme(theme);
    // localStorage.setItem("theme", theme);
  };

  return (
    <div className="left-50  mt-1 sm:top-12 w-8 text-right mr-4 ">
      <Menu as="div" className=" absolute sm:relative inline-block  left-[170px] text-left ">
        <div className=' sm:ml-[-6.5em] lg:ml-[-16em] w-[5.5em] '>
          <Menu.Button className="inline-flex pt-0 sm:pt-1 justify-center linkText px-2  py-1 text-sm  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                >
            <div className='flex justify-center text-black center linkText content-center mt-2 sm:mt-[0.2em] px-2 hidden sm:flex '>{resolvedTheme.toUpperCase()}</div>
            <ChevronDownIcon className="h-5 w-5 -ml-1 my-[0.2em]  text-black linkText arrow-spin dark:text-white" aria-hidden="true" />
          {/* {resolvedTheme == "dark" ? <MoonIcon style={"fill-slate-400  dark:fill-state-gray-200"}/> : <SunIcon stylee={"fill-slate-400 dark:fill-state-crema"}/> } */}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment} 
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="sm:ml-[-20em] pointer-events-auto w-36 hover:w-44 space-y-1 rounded-lg bg-white dark:bg-[var(--blackTheme)] 
          p-3 text-[0.8125rem] font-medium leading-6 text-slate-700 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
            <Menu.Item >
              {({ active }) => (
                <div   onClick={() => handleThemeChange('dark')}
                className={`${active ? "bg-slate-500 text-white" : 'bg-slate-50 text-white shadow-xl shadow-black'} dark:bg-[var(--blackThemeContent)] dark:!text-white flex rounded-[10px] p-1 my-1`}>
                  {!active ? (
                    <div className='flex'>
                      <div className="flex inline-flex h-6 w-6 flex-none items-center justify-center rounded-md bg-white dark:bg-transparent shadow ring-1 ring-slate-900/10">
                      <MoonIcon style={"fill-slate-400 dark:fill-state-crema"}/>
                      </div>
                    
                     { resolvedTheme =='dark' ? <div className={`${active ? "!text-white dark:!text-white" : 'dark:text-white'} ml-3`}>
                        <div className="uXoAyd"><span className="ZI7elf UCGAnb">Dark Mode</span><span className={`${active ? "text-slate-300 dark:text-teal-200" : 'text-slate-300 dark:text-white text-[var(--bbQxAb)]'} kQEH5b text-left -mt-[0.7em]`}>{resolvedTheme === 'dark' ? 'On' : 'Off'}</span></div>
                      </div>
                       : <div className="ml-3 text-slate-900">Dark</div>
                      }
                    </div>
                  ) : (
                    <div className='inline-flex'>
                      <div className="flex my-1 h-8 w-8 flex-none items-center justify-center rounded-md shadow bg-slate-500 bg-slate-500">
                        <MoonIcon style={"fill-slate-400 dark:fill-state-crema"}/>
                      </div>
                      <div className={`${active ? "text-white" : 'text-[var(--YLNNHc)]'} ml-3`}>
                        <div className="uXoAyd"><span className="ZI7elf UCGAnb">Dark Mode</span><span className={`${active ? "text-slate-300 dark:text-white" : 'dark:text-white text-[var(--bbQxAb)]'} kQEH5b text-left -mt-[0.7em]`}>{resolvedTheme === 'dark' ? 'On' : 'Off'}</span></div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div     onClick={() => handleThemeChange('light')}
                className={`${active ? "bg-sky-700 text-white ring-offset-2 ring-offset-sky-300" : 'bg-slate-50 dark:bg-[var(--blackThemeContent)] text-white shadow-xl shadow-black'} flex rounded-[10px] p-1 my-1`}>
                  {!active ? (
                    <div className='flex'>
                      <div className="flex inline-flex h-6 w-6 flex-none items-center justify-center rounded-md bg-white dark:bg-transparent shadow ring-1 ring-slate-900/10">
                        <SunIcon style={"fill-slate-400 dark:fill-state-crema"}/>
                      </div>
                     
                      { resolvedTheme === 'light' ? <div className={`${active ? "text-white" : 'text-[var(--YLNNHc)'} ml-3`}>
                        <div className="uXoAyd"><span className="ZI7elf UCGAnb text-[var(--bbQxAb)] dark:text-white">Light Mode</span><span className={`${active ? "text-slate-300 text-white" : 'text-[var(--bbQxAb)] dark:text-gray-200'} kQEH5b text-left -mt-[0.7em]`}>{resolvedTheme === 'light' ? 'On' : 'Off'}</span></div>
                      </div>
                       : <div className="ml-3 text-slate-900  dark:text-white">Light</div>
                      }
                    </div>
                  ) : (
                    <div className={`${'inline-flex'}`}>
                      <div className="flex my-1 h-8 w-8 flex-none items-center justify-center rounded-md shadow bg-slate-500 bg-slate-500">
                      <SunIcon  style={"fill-slate-400 dark:fill-state-crema"}/>
                      </div>
                      <div className={`${active ? "text-[var(--YLNNHc)] dark:text-white" : 'text-black'} ml-3`}>
                        <div className="uXoAyd"><span className="ZI7elf UCGAnb text-black dark:!text-white">Light Mode</span><span className={`${active ? "text-slate-300" : 'text-[var(--bbQxAb)]'} kQEH5b text-left -mt-[0.7em]`}>{resolvedTheme === 'light' ? 'On' : 'Off'}</span></div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

// export default function ThemeSwitchModal() {
//   const { setTheme, resolvedTheme } = useTheme()
//   const [selectedTheme, setSelectedTheme] = useState(resolvedTheme)

//   useEffect(() => {
//     setSelectedTheme(resolvedTheme)
//   }, [resolvedTheme])

//   const handleThemeChange = (theme) => {
//     setTheme(theme)
//     setSelectedTheme(theme)
//   }

//   return (
//     <div className="top-16 w-56 text-right">
//       <Menu as="div" className="relative inline-block text-left">
//         <div>
//           <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
//             Options
//             <ChevronDownIcon
//               className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
//               aria-hidden="true"
//             />
//           </Menu.Button>
//         </div>
//         <Transition
//           as={Fragment}
//           enter="transition ease-out duration-100"
//           enterFrom="transform opacity-0 scale-95"
//           enterTo="transform opacity-100 scale-100"
//           leave="transition ease-in duration-75"
//           leaveFrom="transform opacity-100 scale-100"
//           leaveTo="transform opacity-0 scale-95"
//         >
//           <Menu.Items className="pointer-events-auto w-36 hover:w-44 space-y-1 rounded-lg bg-white p-3 text-[0.8125rem] font-medium leading-6 text-slate-700 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
//             <Menu.Item>
//               {({ active }) => (
//                 <div
//                   className={`${active ? 'bg-slate-500 text-dark' : 'bg-slate-50 text-white shadow-xl shadow-black'} flex rounded-[10px] p-1 my-1`}
//                   onClick={() => handleThemeChange('dark')}
//                 >
//                   {!active ? ( <svg class="h-4 w-4 fill-slate-400"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 1C7 0.447715 7.44772 0 8 0C8.55228 0 9 0.447715 9 1V2C9 2.55228 8.55228 3 8 3C7.44772 3 7 2.55228 7 2V1ZM11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8ZM13.6563 2.34285C13.2658 1.95232 12.6326 1.95232 12.2421 2.34285L11.535 3.04996C11.1445 3.44048 11.1445 4.07365 11.535 4.46417C11.9255 4.85469 12.5587 4.85469 12.9492 4.46417L13.6563 3.75706C14.0469 3.36654 14.0469 2.73337 13.6563 2.34285ZM12.242 13.6563L11.5349 12.9492C11.1443 12.5587 11.1443 11.9255 11.5349 11.535C11.9254 11.1445 12.5585 11.1445 12.9491 11.535L13.6562 12.2421C14.0467 12.6326 14.0467 13.2658 13.6562 13.6563C13.2656 14.0468 12.6325 14.0468 12.242 13.6563ZM16 7.99902C16 7.44674 15.5523 6.99902 15 6.99902H14C13.4477 6.99902 13 7.44674 13 7.99902C13 8.55131 13.4477 8.99902 14 8.99902H15C15.5523 8.99902 16 8.55131 16 7.99902ZM7 14C7 13.4477 7.44772 13 8 13C8.55228 13 9 13.4477 9 14V15C9 15.5523 8.55228 16 8 16C7.44772 16 7 15.5523 7 15V14ZM4.46492 11.5352C4.0744 11.1447 3.44123 11.1447 3.05071 11.5352L2.3436 12.2423C1.95307 12.6329 1.95307 13.266 2.3436 13.6566C2.73412 14.0471 3.36729 14.0471 3.75781 13.6566L4.46492 12.9494C4.85544 12.5589 4.85544 11.9258 4.46492 11.5352ZM4.46477 3.04973C4.85529 3.44025 4.85529 4.07342 4.46477 4.46394C4.07424 4.85447 3.44108 4.85447 3.05055 4.46394L2.34345 3.75684C1.95292 3.36631 1.95292 2.73315 2.34345 2.34262C2.73397 1.9521 3.36714 1.9521 3.75766 2.34262L4.46477 3.04973ZM3 8C3 7.44772 2.55228 7 2 7H1C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9H2C2.55228 9 3 8.55228 3 8Z" fill="#38BDF8"></path>
//       </svg>
//                     // <SunIcon className="h-6 w-6 flex-none items-center justify-center rounded-md bg-white shadow ring-1 ring-slate-900/10" />
//                   ) : ( <svg class="h-4 w-4 fill-slate-400">
//                   <path fill-rule="evenodd" clip-rule="evenodd" d="M7.23 3.333C7.757 2.905 7.68 2 7 2a6 6 0 1 0 0 12c.68 0 .758-.905.23-1.332A5.989 5.989 0 0 1 5 8c0-1.885.87-3.568 2.23-4.668ZM12 5a1 1 0 0 1 1 1 1 1 0 0 0 1 1 1 1 0 1 1 0 2 1 1 0 0 0-1 1 1 1 0 1 1-2 0 1 1 0 0 0-1-1 1 1 0 1 1 0-2 1 1 0 0 0 1-1 1 1 0 0 1 1-1Z"></path></svg>
//                     // <MoonIcon className="h-6 w-6 flex-none items-center justify-center rounded-md bg-slate-500" />
//                   )}
//                   <div className="ml-3 text-slate-900">Dark</div>
//                 </div>
//               )}
//             </Menu.Item>
//             <Menu.Item>
//               {({ active }) => (
//                 <div
//                   className={`${active ? 'bg-orange-500 text-dark' : 'bg-slate-50 text-white shadow-xl shadow-black'} flex rounded-[10px] p-1 my-1`}
//                   onClick={() => handleThemeChange('light')}
//                 >
//                   {!active ? (
//     <svg class="h-4 w-4 fill-slate-400">
//     <path fill-rule="evenodd" clip-rule="evenodd" d="M7.23 3.333C7.757 2.905 7.68 2 7 2a6 6 0 1 0 0 12c.68 0 .758-.905.23-1.332A5.989 5.989 0 0 1 5 8c0-1.885.87-3.568 2.23-4.668ZM12 5a1 1 0 0 1 1 1 1 1 0 0 0 1 1 1 1 0 1 1 0 2 1 1 0 0 0-1 1 1 1 0 1 1-2 0 1 1 0 0 0-1-1 1 1 0 1 1 0-2 1 1 0 0 0 1-1 1 1 0 0 1 1-1Z"></path></svg>
//                   ) : (
//                     <svg class="h-4 w-4 fill-slate-400">
//                     <path fill-rule="evenodd" clip-rule="evenodd" d="M7.23 3.333C7.757 2.905 7.68 2 7 2a6 6 0 1 0 0 12c.68 0 .758-.905.23-1.332A5.989 5.989 0 0 1 5 8c0-1.885.87-3.568 2.23-4.668ZM12 5a1 1 0 0 1 1 1 1 1 0 0 0 1 1 1 1 0 1 1 0 2 1 1 0 0 0-1 1 1 1 0 1 1-2 0 1 1 0 0 0-1-1 1 1 0 1 1 0-2 1 1 0 0 0 1-1 1 1 0 0 1 1-1Z"></path></svg>
//                   )}
//                   <div className="ml-3 text-slate-900">Light</div>
//                 </div>
//               )}
//             </Menu.Item>
//           </Menu.Items>
//         </Transition>
//       </Menu>
//     </div>
//   )
// }
// export default function ThemeSwitchModal() {
//   return (
//     <div className="top-16 w-56 text-right">
//       <Menu as="div" className="relative inline-block text-left">
//         <div>
//           <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
//             Options
//             <ChevronDownIcon
//               className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
//               aria-hidden="true"
//             />
//           </Menu.Button>
//         </div>
//         <Transition
//           as={Fragment}
//           enter="transition ease-out duration-100"
//           enterFrom="transform opacity-0 scale-95"
//           enterTo="transform opacity-100 scale-100"
//           leave="transition ease-in duration-75"
//           leaveFrom="transform opacity-100 scale-100"
//           leaveTo="transform opacity-0 scale-95"
//         >
//           <Menu.Items className="pointer-events-auto w-36 hover:w-44 space-y-1 rounded-lg bg-white p-3 text-[0.8125rem] font-medium leading-6 text-slate-700 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
//             <div className="px-1 py-1 ">
//             <Menu.Item>
//               {({ active }) => (

//                     <div className={`${active ?  "bg-slate-500 text-dark" : 'bg-slate-50 text-white shadow-xl shadow-black'} flex rounded-[10px] p-1 my-1`}>
//                     { !active ? (
//                         <div className='flex'>
//                         <div class="flex inline-flex h-6 w-6 flex-none items-center justify-center rounded-md bg-white shadow ring-1 ring-slate-900/10">
//                         <svg class="h-4 w-4 fill-slate-400">
                    //       <path fill-rule="evenodd" clip-rule="evenodd" d="M7.23 3.333C7.757 2.905 7.68 2 7 2a6 6 0 1 0 0 12c.68 0 .758-.905.23-1.332A5.989 5.989 0 0 1 5 8c0-1.885.87-3.568 2.23-4.668ZM12 5a1 1 0 0 1 1 1 1 1 0 0 0 1 1 1 1 0 1 1 0 2 1 1 0 0 0-1 1 1 1 0 1 1-2 0 1 1 0 0 0-1-1 1 1 0 1 1 0-2 1 1 0 0 0 1-1 1 1 0 0 1 1-1Z"></path>
                    //       </svg>
//                          </div>
//                             <div class="ml-3 text-slate-900">
//                         Dark
//                             </div>
//                            </div>
//                         )
//                         : (
//                        <div className='inline-flex'>
//                         <div class="flex my-1 h-8 w-8 flex-none items-center justify-center rounded-md  shadow bg-slate-500 bg-slate-500">
//                         <span class="z1asCe tSAV7">
//                             <svg class={`${active &&  "stroke-white !ring-slate-500" }`} focusable="false" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><rect fill="none" height="24" width="24"></rect>
//                             <path d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"></path>
//                             </svg>
//                         </span>
//                          </div>
//                             <div class={`${active ?  "text-white" : 'text-[var(--YLNNHc)]'} ml-3`}>
//                             <div class="uXoAyd"><span class="ZI7elf UCGAnb">Dark theme</span><span  class={`${active ?  "text-slate-300" : 'text-[var(--bbQxAb)]'} kQEH5b text-left -mt-[0.7em]`}>Off</span></div>
//                             </div>
                         
//                         </div> )
//                      } 
//                    </div>
//                 )}
//                 </Menu.Item>
//                 <Menu.Item>
//               {({ active }) => (

//                     <div className={`${active ?  "bg-orange-500 text-dark" : 'bg-slate-50 text-white shadow-xl shadow-black'} flex rounded-[10px] p-1 my-1`}>
//                     { !active ? (
//                         <div className='flex'>
//                         <div class="flex inline-flex h-6 w-6 flex-none items-center justify-center rounded-md bg-white shadow ring-1 ring-slate-900/10">
//                             <svg class="h-4 w-4 fill-slate-400"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 1C7 0.447715 7.44772 0 8 0C8.55228 0 9 0.447715 9 1V2C9 2.55228 8.55228 3 8 3C7.44772 3 7 2.55228 7 2V1ZM11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8ZM13.6563 2.34285C13.2658 1.95232 12.6326 1.95232 12.2421 2.34285L11.535 3.04996C11.1445 3.44048 11.1445 4.07365 11.535 4.46417C11.9255 4.85469 12.5587 4.85469 12.9492 4.46417L13.6563 3.75706C14.0469 3.36654 14.0469 2.73337 13.6563 2.34285ZM12.242 13.6563L11.5349 12.9492C11.1443 12.5587 11.1443 11.9255 11.5349 11.535C11.9254 11.1445 12.5585 11.1445 12.9491 11.535L13.6562 12.2421C14.0467 12.6326 14.0467 13.2658 13.6562 13.6563C13.2656 14.0468 12.6325 14.0468 12.242 13.6563ZM16 7.99902C16 7.44674 15.5523 6.99902 15 6.99902H14C13.4477 6.99902 13 7.44674 13 7.99902C13 8.55131 13.4477 8.99902 14 8.99902H15C15.5523 8.99902 16 8.55131 16 7.99902ZM7 14C7 13.4477 7.44772 13 8 13C8.55228 13 9 13.4477 9 14V15C9 15.5523 8.55228 16 8 16C7.44772 16 7 15.5523 7 15V14ZM4.46492 11.5352C4.0744 11.1447 3.44123 11.1447 3.05071 11.5352L2.3436 12.2423C1.95307 12.6329 1.95307 13.266 2.3436 13.6566C2.73412 14.0471 3.36729 14.0471 3.75781 13.6566L4.46492 12.9494C4.85544 12.5589 4.85544 11.9258 4.46492 11.5352ZM4.46477 3.04973C4.85529 3.44025 4.85529 4.07342 4.46477 4.46394C4.07424 4.85447 3.44108 4.85447 3.05055 4.46394L2.34345 3.75684C1.95292 3.36631 1.95292 2.73315 2.34345 2.34262C2.73397 1.9521 3.36714 1.9521 3.75766 2.34262L4.46477 3.04973ZM3 8C3 7.44772 2.55228 7 2 7H1C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9H2C2.55228 9 3 8.55228 3 8Z" fill="#38BDF8"></path>
//                             </svg>
//                          </div>
//                         <div class="ml-3 text-slate-900">
//                             Light
//                          </div>
//                          </div>
//                         )
//                         : (
//                        <div className='inline-flex'>
//                         <div class="flex my-1 h-8 w-8 flex-none items-center justify-center rounded-md  shadow bg-slate-500 bg-slate-500">
//                         <span class="z1asCe tSAV7">
//                             <svg class={`${active &&  "stroke-white !ring-slate-500" }`}><path fill-rule="evenodd" clip-rule="evenodd" d="M7 1C7 0.447715 7.44772 0 8 0C8.55228 0 9 0.447715 9 1V2C9 2.55228 8.55228 3 8 3C7.44772 3 7 2.55228 7 2V1ZM11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8ZM13.6563 2.34285C13.2658 1.95232 12.6326 1.95232 12.2421 2.34285L11.535 3.04996C11.1445 3.44048 11.1445 4.07365 11.535 4.46417C11.9255 4.85469 12.5587 4.85469 12.9492 4.46417L13.6563 3.75706C14.0469 3.36654 14.0469 2.73337 13.6563 2.34285ZM12.242 13.6563L11.5349 12.9492C11.1443 12.5587 11.1443 11.9255 11.5349 11.535C11.9254 11.1445 12.5585 11.1445 12.9491 11.535L13.6562 12.2421C14.0467 12.6326 14.0467 13.2658 13.6562 13.6563C13.2656 14.0468 12.6325 14.0468 12.242 13.6563ZM16 7.99902C16 7.44674 15.5523 6.99902 15 6.99902H14C13.4477 6.99902 13 7.44674 13 7.99902C13 8.55131 13.4477 8.99902 14 8.99902H15C15.5523 8.99902 16 8.55131 16 7.99902ZM7 14C7 13.4477 7.44772 13 8 13C8.55228 13 9 13.4477 9 14V15C9 15.5523 8.55228 16 8 16C7.44772 16 7 15.5523 7 15V14ZM4.46492 11.5352C4.0744 11.1447 3.44123 11.1447 3.05071 11.5352L2.3436 12.2423C1.95307 12.6329 1.95307 13.266 2.3436 13.6566C2.73412 14.0471 3.36729 14.0471 3.75781 13.6566L4.46492 12.9494C4.85544 12.5589 4.85544 11.9258 4.46492 11.5352ZM4.46477 3.04973C4.85529 3.44025 4.85529 4.07342 4.46477 4.46394C4.07424 4.85447 3.44108 4.85447 3.05055 4.46394L2.34345 3.75684C1.95292 3.36631 1.95292 2.73315 2.34345 2.34262C2.73397 1.9521 3.36714 1.9521 3.75766 2.34262L4.46477 3.04973ZM3 8C3 7.44772 2.55228 7 2 7H1C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9H2C2.55228 9 3 8.55228 3 8Z" fill="#38BDF8"></path>
//                          </svg>
//                         </span>
//                          </div>
//                             <div class={`${active ?  "text-white" : 'text-[var(--YLNNHc)]'} ml-3`}>
//                             <div class="uXoAyd"><span class="ZI7elf UCGAnb">Dark theme</span><span  class={`${active ?  "text-slate-300" : 'text-[var(--bbQxAb)]'} kQEH5b text-left -mt-[0.7em]`}>Off</span></div>
//                             </div>
                         
//                         </div> )
//                      } 
//                    </div>
//                 )}
//                 </Menu.Item>
//                </div>     
          


//           </Menu.Items>
//         </Transition>
//       </Menu>
//     </div>
    
//   )
// }


// <div class="flex rounded-[10px] p-1">
//   <div class="flex h-6 w-6 flex-none items-center justify-center rounded-md bg-white shadow ring-1 ring-slate-900/10">
//       <svg class="h-4 w-4 fill-slate-400"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1.5l.31 1.242c.084.333.36.573.63.808.091.08.182.158.264.24A1 1 0 0 1 11 15H5a1 1 0 0 1-.704-1.71c.082-.082.173-.16.264-.24.27-.235.546-.475.63-.808L5.5 11H4a3 3 0 0 1-3-3V4Zm3-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z">
//         </path>
//         </svg>
//     </div>
//   <div class="ml-3">System</div>
//   </div>



export function SunIcon({props, style}) { 

{/* <div  onClick={() => setTheme('dark')}   className="flex h-6 w-6 flex-none items-center 
    justify-center rounded-md bg-white shadow ring-1 ring-slate-900/10 mobile-menu-navigation_themeSwitcher____SFD div"> */}
return     <svg {...props}  className={classNames(`${style ?? style}, h-4 w-4 fill-slate-400 dark:fill-state-crema`)}>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7 1C7 0.447715 7.44772 0 8 0C8.55228 0 9 0.447715 9 1V2C9 2.55228 8.55228 3 8 3C7.44772 3 7 2.55228 7 2V1ZM11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8ZM13.6563 2.34285C13.2658 1.95232 12.6326 1.95232 12.2421 2.34285L11.535 3.04996C11.1445 3.44048 11.1445 4.07365 11.535 4.46417C11.9255 4.85469 12.5587 4.85469 12.9492 4.46417L13.6563 3.75706C14.0469 3.36654 14.0469 2.73337 13.6563 2.34285ZM12.242 13.6563L11.5349 12.9492C11.1443 12.5587 11.1443 11.9255 11.5349 11.535C11.9254 11.1445 12.5585 11.1445 12.9491 11.535L13.6562 12.2421C14.0467 12.6326 14.0467 13.2658 13.6562 13.6563C13.2656 14.0468 12.6325 14.0468 12.242 13.6563ZM16 7.99902C16 7.44674 15.5523 6.99902 15 6.99902H14C13.4477 6.99902 13 7.44674 13 7.99902C13 8.55131 13.4477 8.99902 14 8.99902H15C15.5523 8.99902 16 8.55131 16 7.99902ZM7 14C7 13.4477 7.44772 13 8 13C8.55228 13 9 13.4477 9 14V15C9 15.5523 8.55228 16 8 16C7.44772 16 7 15.5523 7 15V14ZM4.46492 11.5352C4.0744 11.1447 3.44123 11.1447 3.05071 11.5352L2.3436 12.2423C1.95307 12.6329 1.95307 13.266 2.3436 13.6566C2.73412 14.0471 3.36729 14.0471 3.75781 13.6566L4.46492 12.9494C4.85544 12.5589 4.85544 11.9258 4.46492 11.5352ZM4.46477 3.04973C4.85529 3.44025 4.85529 4.07342 4.46477 4.46394C4.07424 4.85447 3.44108 4.85447 3.05055 4.46394L2.34345 3.75684C1.95292 3.36631 1.95292 2.73315 2.34345 2.34262C2.73397 1.9521 3.36714 1.9521 3.75766 2.34262L4.46477 3.04973ZM3 8C3 7.44772 2.55228 7 2 7H1C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9H2C2.55228 9 3 8.55228 3 8Z" fill="#38BDF8">
        </path>
    </svg>
    // </div>
}
export function MoonIcon({props,style}) {
    return  <div  className="flex h-6 w-6 flex-none dark:bg-zink-900 items-center justify-center rounded-md bg-white dark:bg-transparent shadow ring-1 ring-slate-900/10 dark:ring-1 dark:ring-yellow-400 dark:rounded-full">
    <svg {...props} className={classNames(`${style ?  style : 'fill-slate-400' } h-4 w-4`)}>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.23 3.333C7.757 2.905 7.68 2 7 2a6 6 0 1 0 0 12c.68 0 .758-.905.23-1.332A5.989 5.989 0 0 1 5 8c0-1.885.87-3.568 2.23-4.668ZM12 5a1 1 0 0 1 1 1 1 1 0 0 0 1 1 1 1 0 1 1 0 2 1 1 0 0 0-1 1 1 1 0 1 1-2 0 1 1 0 0 0-1-1 1 1 0 1 1 0-2 1 1 0 0 0 1-1 1 1 0 0 1 1-1Z" fill="currentColor">
        </path>
      </svg>
    </div>
}
