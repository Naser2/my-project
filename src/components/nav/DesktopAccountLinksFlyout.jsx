import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'

//  engagement, resources, recentPosts
export default function DesktopAccountLinksFlyout({resources,session, ...props}) {
  return (
   <Popover className="relative isolate3z-30 shadow ">
  
      <div className="themeBg py-0 dark:bg-black">
        <div className="mx-auto max-w-7xl mx-2 lg:pr-4 pl-0">
          <Popover.Button className={clsx('mt-0 inline-flex items-center gap-x-1 header__primary__button')}>
          <div id="header-link header-link-account"
            className="header-link header-link-account js-tc-connect-account  header__primary__button !pr-2"
         
          >
            <span className="header-link-text pr-2 dark:text-white " data-cs-mask="">
               My Account
            </span>
            <span id="USER-ICON"  className="header__utility-item !pr-2">
              <svg className='svg'
                width={17}
                height={21}
                viewBox="0 0 20 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 22.0741C20 23.1377 19.1046 24 18 24L2 24C1.46957 24 0.960859 23.7971 0.585787 23.4359C0.210714 23.0747 0 22.5849 0 22.0741C0 20.6616 0.243014 19.2573 0.720548 17.9389C1.19805 16.6207 1.90459 15.404 2.81332 14.3648C3.72252 13.3251 4.82059 12.4792 6.05578 11.8941C7.29265 11.3083 8.63412 11 10 11C11.3659 11 12.7073 11.3083 13.9442 11.8941C15.1794 12.4792 16.2775 13.3251 17.1867 14.3648C18.0954 15.404 18.8019 16.6207 19.2795 17.9389C19.757 19.2573 20 20.6616 20 22.0741ZM2.17929 20.1481C2.2805 19.6107 2.42411 19.0836 2.60896 18.5732C3.011 17.4633 3.60028 16.4548 4.34315 15.6054C5.08601 14.7559 5.96793 14.082 6.93853 13.6223C7.90914 13.1625 8.94942 12.9259 10 12.9259C11.0506 12.9259 12.0909 13.1625 13.0615 13.6223C14.0321 14.082 14.914 14.7559 15.6569 15.6054C16.3997 16.4548 16.989 17.4633 17.391 18.5732C17.5759 19.0836 17.7195 19.6107 17.8207 20.1481C17.9396 20.7796 18 21.4251 18 22.0741L2 22.0741C2 21.4251 2.06039 20.7796 2.17929 20.1481Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 8C11.6569 8 13 6.65685 13 5C13 3.34315 11.6569 2 10 2C8.34315 2 7 3.34315 7 5C7 6.65685 8.34315 8 10 8ZM10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z"
                  fill="black"
                />
              </svg>
              <div className="tooltip-container-login hide">
                <span className="tooltip-text">
                  Profitez de vos offres et{" "}
                  <span style={{ color: "#D50032" }}>vos bons plans</span>
                </span>
                <span className="tooltip-close" />
              </div>
            </span>
          </div>
            <ChevronDownIcon className="h-5 w-5 -ml-4 arrow-spin text-[var(--agedBlack)]  dark:text-white" aria-hidden="true" />
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
        as={Fragment} className="absolute mt-8 dark:!text-white inset-x-50 top-0 -z-10
         bg-white pt-16 shadow-lg ring-1 ring-gray-900/5  w-screen left-[-78vw] ml-4 pl-16">
         <div className="dark:bg-black mx-auto grid max-w-7xl grid-cols-2 gap-x-8 gap-y-10 -mt-4 px-6 py-10 lg:grid-cols-2 lg:px-8  !w-[100vw]]">
          { !session &&  <div className="flex gap-10 sm:gap-8  dark:bg-zink-900">
                  <h3 className="sr-only">Login for Offres</h3>
              <div id="DESKTOP-FLYOUT-MENU" className="header-item header-layer">
                <div  id="account-layer" className="account-layer header-layer-content left-0">
                  {/* <div className="header-layer-inner"> */}
                    {/* <div className="account-layer-image-bottom">
                      <div className="content-asset account-layer-guest">
                
                        <p>
                          <img
                            alt="account layer"
                            className="lazy-image"
                            data-src="https://www.sephora.fr/dw/image/v2/BCVW_PRD/on/demandware.static/-/Library-Sites-SephoraV2/default/dwa5ea962a/Eventail_511x96px_BLEU.jpg"
                            title=""
                          />
                        </p>
                      </div>
                    </div> */}

                    <div className="left-side  account-layer-image-bottom  mb-8 sm:my6 rounded-md">
                      <div className="wrapper-limited !mx-8  w-full max-w-4xl px-8 py-6 flex-block   dark:bg-slate-700 dark:hover:!bg-gray-900 dark:hover:text-white rounded-xl ">
                        <div className="header">Hello!</div>
                        <div className="description">
                        Log in or create an account to enjoy all the benefits of the Massi Beauty Accoun
                        </div>
                        <a  href="/api/auth/signin">
                          <button className="btn-black-bg  dark:text-black dark:btn-black-bg button account-connect button-revamp dark:!text-black !max-w-[25em] ">
                            login/ signup
                          </button>
                        </a>
                      </div>
                    </div>
                {/* <div className="right-side">
                  <div className="menu-wrapper ">
                    <div className="menu-column grid  grid-cols-2 !w-[16em]!w-full">
        
                  {  menuItems.map((menuItem, index) => (
                    <div className="menu-item !flex" key={index}>
                        <a className="menu-item-link" href={menuItem.href}>
                        <span className="menu-item-icon">{menuItem.svg}</span>
                        <span className="menu-item-text !flex">{menuItem.itemName}</span>
                        </a>
                    </div>
                    ))}
                    </div>
                  </div>
                </div> */}
              {/* </div> */}
            </div>
           </div> 
      
            </div>}
            { session &&  <div className="grid grid-cols-1 gap-10 sm:gap-8 lg:grid-cols-2">
              <h3 className="sr-only">Login for Offres</h3>
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
                    <div className="flex items-center gap-x-4">
                      <time dateTime={post.datetime} className="text-sm leading-6 text-gray-600">
                        {post.date}
                      </time>
                      <a
                        href={post.category.href}
                        className="text-left relative z-10 rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100"
                      >
                        {post.category.title}
                      </a>
                    </div>
                    <h4 className="text-left mt-2 text-sm font-semibold leading-6 text-gray-900">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h4>
                    <p className="text-left mt-2 text-sm leading-6 text-gray-600">{post.description}</p>
                  </div>
                </article>
              ))}
            </div>}
            <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8 ">
           {  resources.resources.map(data => {
            console.log("RESOURCE: " + data)
                return (
                <div id={clsx(`COLUMN-${data.name}`)} key={data.name} className="grid grid-cols-1 gap-y-0">
                   <div className='ml-0'><h3 className="text-sm font-medium leading-6 text-gray-500 text-left header__category__title  dark:text-white ">{data.title}</h3></div> 
                    <div className="">
                    <div className="-my-2">
                        {data.resource.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className=" dark:text-slate-400 flex gap-x-4 py-2 text-sm leading-6 text-gray-900 header__category__links dark:hover:bg-gray-900 dark:hover:text-white"
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
         </div>
        </Popover.Panel>
    </Transition>  
 </Popover>
  )
}
