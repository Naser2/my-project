"use client"
import clsx from 'clsx'
import { useEffect, useState } from 'react';
import { OverlayProvider, usePreventScroll } from 'react-aria';
import MassiButton from './headless/MassiButton';
import SlideOver from './headless/SlideOver';
import HeadlessSlideOver from './headless/HeadlessSlideOver';
import { VariableIcon } from '@heroicons/react/24/outline';
import { NavTriggerComponent, OpenButton } from './HideableNavbar';


function TestSliderComponent({navigationOpen, handleSetNavigationIsOpen}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHeadlessOpen, setIsHeadlessOpen] = useState(false);

  const handleOnClose = () =>{ 
    // alert("handleOnClose")
    setIsHeadlessOpen(false);
  }

// useEffect(() => {
//   if(isHeadlessOpen){
//     return () => setIsHeadlessOpen(true)
//   } else () => setIsHeadlessOpen(false)
// },[isHeadlessOpen])
const handlesetIsHeadlessModal = (word) => {
  // // const theme =  theme === 'dark' ? "dark" : "light"; 
  // window.localStorage.setItem("theme", theme);
  console.log("VARIABLE in FUNC", word)
  setIsOpen(!isOpen)
  setIsHeadlessOpen(!isHeadlessOpen);
  console.log("VARIABLE-IN-STATE", isHeadlessOpen)
  // localStorage.setItem("theme", theme);
};

  // usePreventScroll({ isDisabled: !isOpen });

  return (
    <OverlayProvider className="z-30">
      <div className="">
        <div className="relative text-center py-0 max-w-full lg:max-w-xl lg:mx-auto">

          <div >
            <div className="max-w-md mx-auto lg:max-w-2xl h-sfull">
              <OpenButton 
                 setOpen={handlesetIsHeadlessModal}
                 isOpen={isHeadlessOpen} 
                 handleOnClose={handleOnClose}/>
              <HeadlessSlideOver
                open={isHeadlessOpen}
                setOpen={handlesetIsHeadlessModal}
                handleOnClose={handleOnClose}
                title="Test Slide Component -"
              >
                <div className="flex flex-col">
                  <input type="text" className="border-gray-300 rounded-md" />
                  <MassiButton
                    className="mt-4"
                    onClick={() => handlesetIsHeadlessModal(false)}
                  >
                    OK Headless Slide
                  </MassiButton>
                </div>
                
              </HeadlessSlideOver>
            </div>
          </div>
        </div>
      </div>
    </OverlayProvider>
  );
}

export default TestSliderComponent;


// export const OpenButton = ({isHeadlessOpen, handleOnClose, handlesetIsHeadlessModal}) => {
//   console.log("Button-OPEN ? " , isHeadlessOpen)
//   return (
//     <>
//     {/* <NavTriggerComponent /> */}
//     <label onClick={isHeadlessOpen ? ()=>handleOnClose() : ()=>handlesetIsHeadlessModal(true)}
//       // htmlFor="mobile-navigation"
//       className="menu-togglee  ml-4 hover:shadow-xl z-50"
//       id="menu-togglee">
//       <span aria-label="Close menu"  
//       id="menu-togglee" 
//       htmlFor="mobile-navigation" 
//       className={clsx(isHeadlessOpen ? 'z-50 flex  ring-[ring-[var(--google-grey-200)]] dark:bg-slate-800 dark:!text-white dark:hover:ring-white dark:ring-[var(--google-grey-500)]' : 'ring-[var(--google-grey-500)]', " dark:bg-slate-800 dark:!text-white dark:hover:ring-white navTrigger menu-toggle_menuToggle__6OaWw mobile-menu-button_indicator__mGvzn avatar-mobile-menu_button__YEcob hover:ring-1 hover:shadow-xl hover:ring-[#bdbdbd] sm:mr-1 mobile-search-magnifying-glass hover:bg-[#f2f2f2]  dark:bg-slate-800 dark:!text-white dark:hover:ring-white")}
//       data-expanded="false" data-testid="mobile-menu/trigger" type="button">
//         <div class="menu-toggle_bar__GUd1o dark:!bg-white" data-position="top"></div>
//         <div class="menu-toggle_bar__GUd1o dark:bg-white" data-position="bottom"></div>
//         <div class="menu-toggle_bar__tree" data-position="middle"></div>
//     </span>
//     </label>
//     </>
//    )
// }


