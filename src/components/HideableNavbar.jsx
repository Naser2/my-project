"use client"

import { useEffect, useState } from 'react';
import { CountrySelector, LanguagePickerIcon, LogoMobile, MobileSideNavigation, NavbarHeaderUserFlyoutComponent, SeachIcon } from './SephoHeader';
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
import SlideOutSideNav from './nav/SlideOutSideNav';
import TestSliderComponent from './TestSliderComponent';
import ThemeSwitchModal from './themeSwhitcher/ThemeSwitchModal';



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
        // currentSection.textContent.style= 'text-[var(--hh-color-aged-black)]';
      }
    });
  };

  window.addEventListener('scroll', scrollHandler);

  // Clean up the event listener on component unmount
  return () => {
    window.removeEventListener('scroll', scrollHandler);
  };
}


export const NavTriggerComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  useEffect(() => {
    const handleClick = () => {
      setIsMenuOpen(prevState => !prevState);
      navTrigger.classList.toggle('active');
    };

    const navTrigger = document.querySelector('.navTrigger');

    if (navTrigger) {
      navTrigger.addEventListener('click', handleClick);
    }

    return () => {
      if (navTrigger) {
        navTrigger.removeEventListener('click', handleClick);
      }
    };
  }, []);

  useEffect(() => {
    const mainListDiv = document.querySelector('#mainListDiv');
    if (mainListDiv) {
      if (isMenuOpen) {
        mainListDiv.classList.add('show_list');
        mainListDiv.style.display = 'block';
      } else {
        mainListDiv.classList.remove('show_list');
        mainListDiv.style.display = 'none';
      }
    }
  }, [isMenuOpen]);

  return null; // Since this is a utility component, it doesn't render any UI
};


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
    console.log("FIREDDD---> ", "handleSetNavigationIsOpen", navigationOpen)
    setNavigationOpen(!navigationOpen);
    // console.log("IN-SATENAVIGATION-OPEB---> ", "handleSetNavigationIsOpen", navigationOpen)
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
      const currentScrollPos = window.pageYOffSet || document.documentElement.scrollTop;
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
          // top: 0;
          top: 62px;
          width: 100%;
          display: block;
          /*z-index: 9;  Ensure it's below primary navbar */
        }

        .content {
          padding: 15px 15px 2500px;
          font-size: 30px;
          margin-top: 30px;
        }
      `}</style>
      <div id="navbar" className={classNames(navigationOpen ===true  ? 'hidden' : '!fixed h-[4rem] z-50 !w-full')}>
        <div className={classNames("sticky-top sticky-top-static sm:mb-0 dark:!bg-black !z-40 !w-full")}>
          <div className="" style={{ display: "block" }} ></div> 
          <NavTriggerComponent/>
          <MobileHeader navigationOpen={navigationOpen} 
              handleSetNavigationIsOpen={handleSetNavigationIsOpen} 
              session={userSession} 
              advertissment={advertissment} 
              isProfileMenuOpen={isProfileMenuOpen}
              setIsProfileMenuOpen={setIsProfileMenuOpen}
              profileImage={profileImage}
              providers={providers}/>
            
            </ div>
            <input
            id="mobile-navigation"
            type="checkbox"
            className="hide"
            autoComplete="off"
          />
            {/* <MobileSideNavigation handleSetNavigationIsOpen={handleSetNavigationIsOpen} 
                  session={userSession} 
                  advertissment={advertissment} 
                  isProfileMenuOpen={isProfileMenuOpen}
                  setIsProfileMenuOpen={setIsProfileMenuOpen}
                  profileImage={profileImage}
                  providers={providers} 
                  navigationOpen={navigationOpen} 
                  /> */}
         
          <label className="mobile-background" htmlFor="mobile-navigation" onClick={handleSetNavigationIsOpen} />
            {/* <SlideOutSideNav  navigationOpen={navigationOpen} handleSetNavigationIsOpen={handleSetNavigationIsOpen}/> */}
      
      </div>
      <div id="SECONDARY-NAVBAR" className={classNames(navigationOpen ? "hidden" : "!z-10 nav row header-sencond  bg-[var(--google-grey-50)] py-[0.4rem] px-[1rem] desktop-header show-for-mlarge align-justify w-full dark:bg-black dark:shadow-xl dark:border-t border-gray-400")}>
          <div className={`${isSlideIn ? 'slide-in' : ''} flex`}>
            <h2 id="current-section" className="px-12 py-2 overlayed-text section-anouncer-text-h2"></h2> 
          <div className='absolute right-0 inline-flex flex-end pr-[2em]'>  
           
           {/* <div className='flex inline-flex'> <hh-button theme="none" class="header__utility-item" href="/account/login">
              <span class="visually-hidden">log in</span>
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" class="icon icon-account" viewBox="0 0 10 12" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.89311 2.89386C6.89311 3.93981 6.0452 4.78772 4.99925 4.78772C3.9533 4.78772 3.10539 3.93981 3.10539 2.89386C3.10539 1.84791 3.9533 1 4.99925 1C6.0452 1 6.89311 1.84791 6.89311 2.89386ZM6.2447 5.50674C7.21957 5.04123 7.89311 4.0462 7.89311 2.89386C7.89311 1.29562 6.59748 0 4.99925 0C3.40101 0 2.10539 1.29562 2.10539 2.89386C2.10539 4.0462 2.77893 5.04123 3.7538 5.50675C1.84418 6.17148 0.37927 8.32898 0.0835895 11.0018C0.022864 11.5508 0.476609 12 1.02889 12H8.96962C9.52191 12 9.97565 11.5508 9.91493 11.0018C9.61924 8.32898 8.15433 6.17147 6.2447 5.50674ZM4.99926 6.2945C6.73931 6.2945 8.54541 8.08644 8.90786 11H1.09066C1.4531 8.08644 3.25921 6.2945 4.99926 6.2945Z" fill="currentColor"></path>
            </svg>
            </hh-button>
            <hh-button class="header__utility-item header__utility-item--cart" theme="none" href="#cart" onClick="toggleCart" data-rerender="">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" class="icon icon-cart" viewBox="0 0 12 13" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.1614 3.1545C4.1614 2.10753 5.01014 1.25879 6.05711 1.25879C7.10408 1.25879 7.95281 2.10753 7.95281 3.1545V3.69447H4.1614V3.1545ZM3.1614 4.69447V5.61573H4.1614V4.69447H7.95281V5.61573H8.95281V4.69447H10.1099V11.4921H1.88672V4.69447H3.1614ZM3.1614 3.69447V3.1545C3.1614 1.55524 4.45785 0.258789 6.05711 0.258789C7.65636 0.258789 8.95281 1.55524 8.95281 3.1545V3.69447H10.1099H11.1099V4.69447V11.4921V12.4921H10.1099H1.88672H0.886719V11.4921V4.69447V3.69447H1.88672H3.1614Z" fill="currentColor"></path>
               </svg>
              </hh-button></div> */}
             <NavbarHeaderUserFlyoutComponent/>
             {/* <span className="background-overlay" />  */}  
          <div className="language-search-wrapper">
              <div className="header-item header-layer header-item-change-site show-for-mlarge">
                {/* <LanguagePickerIcon handleCountryPickerIsOpen={handleCountryPickerIsOpen}/>  */}
                {/* <CountrySelector countryPickerIsOpen={countryPickerIsOpen} handleCountryPickerIsOpen={handleCountryPickerIsOpen}/> */}
              </div>
              <nav id="USER_RESOURCES_NAV" class="" role="navigation" aria-label="navigation principale">
              </nav>
              {/* <DesktopSearchInput /> */} 
                  
          </div>
         </div>
       </div> 
          
          
       
          
        <div className="flex sm:inline-flex ">  </div>
            </div>
      {/* Rest of your content */}
    </>
  );
};

export default HideableNavbar;





export const MobileHeader = ({session, navigation, userSession, navigationOpen, handleSetNavigationIsOpen, profileImage, isProfileMenuOpen, setIsProfileMenuOpen,providers, advertissment}) => {
 const [open, setOpen] = useState(null)
 
  const toggleNavigation = () => {
    handleSetNavigationIsOpen(); // Call the function to toggle navigation state
    setIsProfileMenuOpen(!navigationOpen); // Close profile menu if open
  };

  console.log("MOBILE_HEAADER_SESSION-->", session, "MobileHeader-OPEN ??", navigationOpen, "ADVETISSEMENT", advertissment)
 return  (
  // ${navigationOpen  && advertissment  && 'inset-x-0 z-40 animationTranfrom'}
  // 
 <div  id="MAIN-NAVIGATION-HEADER" className={classNames(` ${navigationOpen ? '!hidden' :'mobile-header '} dark:bg-black !z-50 main-navbar-bg  dark:!bg-black`)}
      style={{}}>
      {/* {navigationOpen && <UserIcon navigationOpen={navigationOpen} session={session} isProfileMenuOpen={isProfileMenuOpen} profileImage={profileImage} setIsProfileMenuOpen={setIsProfileMenuOpen}/>} */}
     <div className="flex justify-between center px-4  pr-2 sm:ml-[2vw]">
      <div className="top-left inline-flex ">
          <LogoMobile session={session} navigationOpen={navigationOpen} isProfileMenuOpen={isProfileMenuOpen}/>
             {navigationOpen && !session  &&  <> {
                  <div className='flex md:block md:ml-6 sm:absolute top-4 left-[5em]'>
                    <div className='flex items-center'>
                      
                      { providers && navigationOpen && 
                        Object.values(providers).map((provider, index) => (
                          <button
                            onClick={() => signIn(provider.id)}
                            key={index}
                            className='flex items-center text-white sm:bg-black sm:dark:bg-white sm:dark:text-black hover:bg-gray-900 sm:hover:text-white sm:dark:hover:bg-[var(--google-blue-400)] sm:dark:hover:text-white rounded-sm px-3 py-2'
                          >
                            <FaGoogle className='hidden sm:flex text-white mr-2 bg-black rounded-full px-2 py-1.5' />
                            <span className='flex  text-black'>Login for Offers</span>
                          </button>
                        ))}

                    </div>
                  </div>
                  }
              </>
            }
        </div>
   
     <div className="top-right  py-[0.5em] w-4xl justify-center  flex inline-flex grid sm:grid-cols-5 sm:mr-4">
      <ThemeSwitchModal />
     {/* <ThemeSwitch/> */}
     <div className='absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0'>
    { userSession ? <Link href='/messages' className='relative group '>
          <button
            type='button'
            className='bell_btn__yil2q  mr-4 relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none ring-ds-gray-alpha focus:ring-2 focus:!ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
          >
            <span className='absolute -inset-1.5 '></span>
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
        </Link>: 
          <div className='UNAUTHENTICATED-MESSAGE-BUTTON'>
            {/*   <Link
              href="mailto:soma@leelanyc.com"
              className="sm:mx-[2em] dark:mx-2 mt-2 flex max-h-12  w-8 items-center rounded-md bg-white py-[0.4375rem]
               px-2 pr-2 dark:pr-0 text-sm  font-semibold shadow md:mt-1 dark:!lg:pr-0 lg:pr-3 xl:-mt-0 
                text-slate-800 hover:bg-[#f2f2f2]  dark:bg-transparent dark:hover:bg-slate-900 dark:!text-white dark:hover:ring-1 dark:hover:ring-white hover:dark:rounded-full dark:hover:shadow-xl"
              id="headlessui-tabs-tab-2"
              aria-selected="true"
              tabindex="0"
              data-headlessui-state="selected"
              aria-controls="headlessui-tabs-panel-4"
          >
          <img
              className="h-5 w-5 flex-none fill-sky-500 stroke-sky-500 text-sky-500 md:h-6  md:w-6 dark:shadow-xl dark:!fill-white dark:bg-slate-200 dark:hover:bg-white rounded-full"
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/7nNmS7JFpjU.png "
              alt=""
              height="16"
              width="16"
              fill="white"
            ></img> 
         
        
          </Link>*/}
        </div>}
      </div>
      <div className='hidden sm:flex-none  inline-flex'>
             <button class="inline-flex items-center gap-x-1 header__primary__button dark:bg-black linkText" type="button" aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:r0:"><span className="dark:text-white">Our Story</span></button>
          <button className="inline-flex items-center gap-x-1 header__primary__button dark:bg-black linkText flex" type="button" aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:r0:"><span className="dark:text-white">Shop</span></button>
          <button className="inline-flex items-center gap-x-1 header__primary__button dark:bg-black linkText" type="button" aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:r0:"><span className="dark:text-white">Message</span>  </button>
          </div>

       {/* <SeachIcon session={session}/> */}
      {/* { session &&  <BellIcon/> } */}
        <CartMobile /> 
        
        {/* <OpenButton handleSetNavigationIsOpen={handleSetNavigationIsOpen}/> */}
        <TestSliderComponent  navigationOpen={navigationOpen} handleSetNavigationIsOpen={handleSetNavigationIsOpen} session={session}/>
        {/* <TestSliderComponent /> */}
    </div>
  </div>
  <input id="mobile-search-checkbox" type="checkbox" className="hide" />
</div>)
}


export const OpenButton = ({isOpen, handleOnClose, handlesetIsHeadlessModal}) => {
  const handleButton = () => {
    console.log("HANDLE --OPEN BUTT " )
    if(isOpen){
     return  handlesetIsHeadlessModal()
    } else{
     return handlesetIsHeadlessModal()
    } 
  }
  return (
    <>
    {/* <NavTriggerComponent /> */}
    <label onClick={()=>handlesetIsHeadlessModal()}
      // htmlFor="mobile-navigation"
      className="menu-togglee  ml-4 z-50 mr-[1em]"
      id="menu-togglee">
      <span aria-label="Close menu"  
      id="menu-togglee" 
      htmlFor="mobile-navigation" 
      className={classNames(`${isOpen ? "!bg-[var(--google-grey-50)] shadow-gray-400 ring-1 shadow-2xl flex k sm:mr-1 mobile-search-magnifying-glass hover:bg-white ring-[var(--google-grey-400)] dark:bg-slate-800 dark:!text-white dark:hover:ring-white dark:ring-[var(--google-grey-500)]" :
       "ring-[var(--google-grey-500)]"}`,
       "dark:bg-slate-800 dark:!text-white dark:hover:ring-white navTrigger menu-toggle_menuToggle__6OaWw mobile-menu-button_indicator__mGvzn avatar-mobile-menu_button__YEcob hover:ring-1 hover:shadow-xl hover:ring-[#bdbdbd] sm:mr-1 mobile-search-magnifying-glass dark:bg-slate-800 dark:!text-white dark:hover:ring-white")}
      data-expanded="false" data-testid="mobile-menu/trigger" type="button">
        <div className="menu-toggle_bar__GUd1o dark:!bg-white" data-position="top"></div>
        <div className="menu-toggle_bar__GUd1o dark:bg-white" data-position="bottom"></div>
        <div className="menu-toggle_bar__tree" data-position="middle"></div>
    </span>
    </label>
    </>
   )
}



