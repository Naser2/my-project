"use client"
import clsx from 'clsx'
import { useEffect, useState } from 'react';
import { OverlayProvider, usePreventScroll } from 'react-aria';
import MassiButton from './headless/MassiButton';
import SlideOver from './headless/SlideOver';
import HeadlessSlideOver from './headless/HeadlessSlideOver';
import { VariableIcon } from '@heroicons/react/24/outline';
import { NavTriggerComponent, OpenButton } from './HideableNavbar';


function TestSliderComponent({navigationOpen, handleSetNavigationIsOpen, session}) {
  const [isOpen, setIsOpen] = useState(navigationOpen);
  const [isHeadlessOpen, setIsHeadlessOpen] = useState(false);

  const handleOnClose = () =>{ 
    // alert("handleOnClose")
    setIsHeadlessOpen(false);
    return handleSetNavigationIsOpen()
  }

// useEffect(() => {
//   if(isHeadlessOpen){
//     return () => setIsHeadlessOpen(true)
//   } else () => setIsHeadlessOpen(false)
// },[isHeadlessOpen])
const handlesetIsHeadlessModal = () => {
  // // const theme =  theme === 'dark' ? "dark" : "light"; 
  // window.localStorage.setItem("theme", theme);
  // console.log("VARIABLE in FUNC", word)
  setIsOpen(!isOpen)
  setIsHeadlessOpen(!isHeadlessOpen);
 return handleSetNavigationIsOpen()
  // console.log("VARIABLE-IN-STATE", isHeadlessOpen)
  
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
                 handlesetIsHeadlessModal={handlesetIsHeadlessModal}
                 isOpen={isHeadlessOpen} 
                 handleOnClose={handlesetIsHeadlessModal}/>
              <HeadlessSlideOver
                open={isHeadlessOpen}
                handlesetIsHeadlessModal={handlesetIsHeadlessModal}
                handleOnClose={handlesetIsHeadlessModal}
                title="Test Slide Component -"
                session={session}
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
