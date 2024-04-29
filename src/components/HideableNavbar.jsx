"use client"

import { useEffect, useState } from 'react';
import { CountrySelector, LanguagePickerIcon, MobileHeader, NavbarHeaderUserFlyoutComponent } from './SephoHeader';
import Link from 'next/link';
import UnreadMessageCount from './UnreadMessageCount';
import Image from 'next/image'

import { classNames } from '@/utils';
import React, { Fragment } from 'react';
import FAQ from "./FAQ";
// import SecondaryHeader from './SecondaryHeader'
import { UserFlyoutLinks, allCategories, latestBlogs, navigation, paradigm } from '@/data';

import FancyLoader from './FancyLoader'
import Icon from './Icons';
import Cart from './Cart';
import {CartMobile } from './Cart';
import { usePathname } from 'next/navigation';

import logo from '@/assets/images/logo-white.png';
import profileDefault from '@/assets/images/profile.png';
import { FaGoogle } from 'react-icons/fa';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import { MobileMenuLinks } from './nav/MobileMenuLinks';
import DesktopSiteMapFlyout from './nav/DesktopSiteMapFlyout'
import DesktopAccountLinksFlyout from './nav/DesktopAccountLinksFlyout'

import Button  from '@/components/headless/button'
import { UserIcon } from '@heroicons/react/24/outline';

function trackActiveSection() {
  const sections = document.querySelectorAll('section[id]');
  const currentSection = document.getElementById('current-section');

  const scrollHandler = () => {
    let scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const sectionId = section.getAttribute('id');

      if (
        scrollPosition >= sectionTop &&
        scrollPosition <= sectionTop + sectionHeight
      ) {
        currentSection.textContent = section.querySelector('h2').textContent;
      }
    });
  };

  window.addEventListener('scroll', scrollHandler);

  // Clean up the event listener on component unmount
  return () => {
    window.removeEventListener('scroll', scrollHandler);
  };
}


const HideableNavbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [primaryNavHeight, setPrimaryNavHeight] = useState(0);
  const [isSlideIn, setIsSlideIn] = useState(true);
  const [countryPickerIsOpen, setCountryPickerIsOpen] = useState(false);
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [userSession, setUserSession] = useState(null);
  const [advertissment, setAadvertissment] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const { data: session } = useSession();


  const profileImage = session?.user?.image;

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    trackActiveSection();
  }, []);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const scrollHandler = () => {
      const currentScrollPos = window.scrollY;
      const shouldSlideIn = currentScrollPos < prevScrollPos;

      setIsSlideIn(shouldSlideIn);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const pathname = usePathname();

  console.log("HEADER-SESSION", session);


  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders();
      console.log("Providers-RESPONSE", res)
      setProviders(res);
    };

    setAuthProviders();
  }, []);

  console.log('HEADER-USER-SESSION', userSession)

  // useEffect(() =>{ 
      const handleCountryPickerIsOpen = () => {
          setCountryPickerIsOpen(!countryPickerIsOpen);
      };
    
  // }, [countryPickerIsOpen])

  const handleSetNavigationIsOpen = () => {
    console.log("FIREDDD---> ", "handleSetNavigationIsOpen")
    setNavigationOpen(!navigationOpen);
};

useEffect(() =>{  
// const user = session ? !null : "unathenticated"
setUserSession(session)
  }, [session])


  useEffect(() => {
    trackActiveSection();
  }, []);


  

  useEffect(() => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      setPrimaryNavHeight(navbar.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const navbar = document.getElementById('navbar');
      const secondaryNavbar = document.getElementById('SECONDARY-NAVBAR');

      if (navbar && secondaryNavbar) {
        if (prevScrollPos > currentScrollPos) {
          navbar.style.top = '0';
          secondaryNavbar.style.top = `${primaryNavHeight}px`;
        } else {
          navbar.style.top = `-${navbar.offsetHeight}px`;
          secondaryNavbar.style.top = '0';
        }
        setPrevScrollPos(currentScrollPos);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, primaryNavHeight]);

  return (
    <>
      <style jsx>{`
        #navbar {
          background-color: #333;
          position: fixed;
          top: 0; /* Ensure navbar is initially visible */
          width: 100%;
          display: block;
          transition: top 0.3s;
          z-index: 10; /* Ensure it's above other content */
        }

        #navbar a {
          float: left;
          display: block;
          color: #f2f2f2;
          text-align: center;
          padding: 15px;
          text-decoration: none;
          font-size: 17px;
        }

        #navbar a:hover {
          background-color: #ddd;
          color: black;
        }

        #SECONDARY-NAVBAR {
          position: fixed;
          top: 0;
          width: 100%;
          display: block;
          z-index: 9; /* Ensure it's below primary navbar */
        }

        .content {
          padding: 15px 15px 2500px;
          font-size: 30px;
          margin-top: 30px;
        }
      `}</style>
      <div id="navbar">
      <div className={classNames("sticky-top sticky-top-static sm:mb-0")}>
              <div className=""  style={{ display: "block" }} ></div>
              <MobileHeader navigationOpen={navigationOpen} 
                  handleSetNavigationIsOpen={handleSetNavigationIsOpen} 
                  session={userSession} 
                  advertissment={advertissment} 
                  isProfileMenuOpen={isProfileMenuOpen}
                  setIsProfileMenuOpen={setIsProfileMenuOpen}
                  profileImage={profileImage}
                  providers={providers}/>
                 
            </ div>

      </div>
      <div id="SECONDARY-NAVBAR" className="nav row desktop-header show-for-mlarge align-justify w-full">
          <div className={`${isSlideIn ? 'slide-in' : ''} flex`}>
            <h2 id="current-section" className="px-12 py-2 text-h2 text-white overlayed-text overlayed-text-shadow "></h2> 
            <div className='absolute right-0 inline-flex flex-end pr-[2em]'>  
             <NavbarHeaderUserFlyoutComponent/>
             {/* <span className="background-overlay" />  */}  
              <div className="language-search-wrapper">
            <div className="header-item header-layer header-item-change-site show-for-mlarge">
              <LanguagePickerIcon handleCountryPickerIsOpen={handleCountryPickerIsOpen}/> 
              <CountrySelector countryPickerIsOpen={countryPickerIsOpen} handleCountryPickerIsOpen={handleCountryPickerIsOpen}/>
              
            </div>
            <nav id="USER_RESOURCES_NAV" class="" role="navigation" aria-label="navigation principale">
            </nav>
            {/* <DesktopSearchInput /> */} 
                  
          </div>
          </div>
           </div> 
          
          
       
          
        <div className="flex sm:inline-flex ">
     
            { !userSession ? 
            <> 
              {!userSession && (
              <div className='flex md:block md:ml-6'>
              <div className='flex items-center'>
                
                 { providers &&
                  Object.values(providers).map((provider, index) => (
                    <button
                      onClick={() => signIn(provider.id)}
                      key={index}
                      className='flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
                    >
                      <FaGoogle className='text-white mr-2' />
                      <span>Login or Register</span>
                    </button>
                  ))}

              </div>
            </div>
            )}
            <a  href="#" className=" text-gray-400 dark:text-white hover:text-gray-500 lg:!ml-4">
                  <span className="sr-only">
                    Account
                  </span>
                 <UserIcon className="h-6 w-6 pr-24" aria-hidden="true" />
                </a>  
            </>
             : 
         <>
            <div className='absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0'>
              <Link href='/messages' className='relative group '>
                <button
                  type='button'
                  className='bell_btn__yil2q  mr-4 relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none ring-ds-gray-alpha focus:ring-2 focus:!ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                >
                  <span className='absolute -inset-1.5'></span>
                  <span className='sr-only'>View notifications</span>
                  <svg
                    className='small-svg'
                     style={{ "color": "var(--ds-gray-900)"}}
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
                    />
                  </svg>
                </button>
                <UnreadMessageCount session={userSession} />
              </Link>
            </div>
            <div className='relative ml-3'>
           
           {/* {isProfileMenuOpen && (
             <div
               id='user-menu'
               className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
               role='menu'
               aria-orientation='vertical'
               aria-labelledby='user-menu-button'
               tabIndex='-1'
             >
               <Link
                 href='/profile'
                 className='block px-4 py-2 text-sm text-gray-700'
                 role='menuitem'
                 tabIndex='-1'
                 id='user-menu-item-0'
                 onClick={() => {
                   setIsProfileMenuOpen(false);
                 }}
               >
                 Your Profile
               </Link>
               <Link
                 href='/properties/saved'
                 className='block px-4 py-2 text-sm text-gray-700'
                 role='menuitem'
                 tabIndex='-1'
                 id='user-menu-item-2'
                 onClick={() => {
                   setIsProfileMenuOpen(false);
                 }}
               >
                 Saved Properties
               </Link>
               <button
                 onClick={() => {
                   setIsProfileMenuOpen(false);
                   signOut();
                 }}
                 className='block px-4 py-2 text-sm text-gray-700'
                 role='menuitem'
                 tabIndex='-1'
                 id='user-menu-item-2'
               >
                 Sign Out
               </button>
             </div>
           )} */}
          </div>
             </> 
         
            }
            
        
         
              
             
               
              </div>
            </div>
      {/* Rest of your content */}
    </>
  );
};

export default HideableNavbar;
