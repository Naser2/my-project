import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'

//  engagement, resources, recentPosts
export default function DesktopSiteMapFlyout({resources, ...props}) {
  return (
    <>
   
   <Popover className="relative isolate z-40 shadow">
      <div className="bg-white py-0">
        <div className="mx-auto max-w-7xl mx-6 lg:pr-0">
          <Popover.Button className="inline-flex items-center gap-x-1 header__primary__button bg-white focus:bg-[var(--oke-border-color)] dark:bg-black">
           <span className='dark:text-white'> {resources.name}</span>
            <ChevronDownIcon className="h-5 w-5 arrow-spin dark:text-white" aria-hidden="true" />
          </Popover.Button>
        </div>
      </div>

    <Transition id={resources.name}
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-1"
      >

       <Popover.Panel id={resources.name}   
        as={Fragment} className="absolute inset-x-50 top-[3vh] -z-10 bg-white pt-16 shadow-lg ring-1 ring-gray-900/5  w-screen xl:left-[-63vw] ml-4 pl-16 dark:bg-black ">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-6 py-10 lg:grid-cols-2 lg:px-8">
            <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8 ">
           {  resources.resources.map(data => {
            console.log("RESOURCE: " + data)
                return (
                <div id={clsx(`COLUMN-${data.name}`)} key={data.name} className="grid grid-cols-1 gap-y-0 ">
                   <div className='ml-0'><h3 className="text-sm font-medium leading-6 text-gray-500 text-left header__category__title  dark:text-white">{data.title}</h3></div> 
                    <div className="mt-6 sm:-mt-[2.7rem] flow-root">
                    <div className="-my-2 ">
                        {data.resource.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="flex gap-x-4 py-2 text-sm leading-6 text-gray-900 header__category__links dark:text-slate-200 "
                        >
                            <item.icon className="h-6 w-6 flex-none text-gray-400" aria-hidden="true" />
                            {item.name}
                        </a>
                        ))}
                    </div>
                    </div>
                </div>
                )
           })
          }
          
            </div>
          { props.latestBlogs &&  <div className="grid grid-cols-1 gap-10 sm:gap-8 lg:grid-cols-2">
              <h3 className="sr-only">{props.latestBlogs.title}</h3>
              {props.latestBlogs.resources.map((post) => (
                <article
                  key={post.id}
                  className="relative isolate flex max-w-2xl flex-col gap-x-8 gap-y-0 sm:flex-row sm:items-start lg:flex-col lg:items-stretch"
                >
                  <div className="relative flex-none">
                    <img
                      className="aspect-[2/1] w-full rounded-lg bg-gray-100 object-cover sm:aspect-[16/9] sm:h-32 lg:h-auto"
                      src={post.imageUrl}
                      alt=""
                    />
                    <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4 py-1">
                      <time dateTime={post.datetime} className="text-sm leading-6 text-gray-600 dark:text-gray-200">
                        {post.date}
                      </time>
                      <a
                        href={post.category.href}
                        className="text-left relative z-10 dark:bg-gray-800 dark:shadow-xl 
                         rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100 dark:!text-gray-100"
                      >
                        {post.category.title}
                      </a>
                    </div>
                    <h4 className="text-left mt-2 text-sm font-semibold leading-6 text-gray-900  dark:text-slate-200">
                      <a href={post.href}  className="dark:!text-white">
                        <span className="absolute inset-0 dark:!text-white" />
                        {post.title}
                      </a>
                    </h4>
                    <p className="text-left mt-2 text-sm leading-6 text-gray-600 dark:text-slate-300">{post.description}</p>
                  </div>
                </article>
              ))}
            </div>}
          </div>
        </Popover.Panel>

   
 
    </Transition>  
 </Popover>
    </>
  )
}
