"use client"

import { useState } from 'react';
import { OverlayProvider, usePreventScroll } from 'react-aria';
import MassiButton from '@/components//headless/MassiButton';
import SlideOver from '@/components/headless/SlideOver';
import HeadlessSlideOver from '@/components/headless/HeadlessSlideOver';
import MobileSideNavigation from '@/components/SephoHeader';



function SlideOutSideNav({navigationOpen, handleSetNavigationIsOpen}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHeadlessOpen, setIsHeadlessOpen] = useState(false);

  const handleOnClose = () => setIsOpen(false);

  usePreventScroll({ isDisabled: !isOpen });

  return (
    <OverlayProvider>
      <div className="bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative text-center py-3 max-w-full lg:max-w-xl lg:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-indigo-700 shadow-lg transform -skew-y-3 lg:skew-y-0 lg:-rotate-3 lg:rounded-3xl"></div>
          <div className="relative p-20 bg-white shadow-lg lg:rounded-3xl">
            <div className="max-w-md mx-auto lg:max-w-2xl">
              {/* <MassiButton onClick={() => setIsOpen(true)}>Open (Custom)</MassiButton> */}
              <MassiButton className="mx-2" onClick={() => setIsHeadlessOpen(true)}>
                Open (Headless-UI)
              </MassiButton>
            
              <HeadlessSlideOver
                open={isHeadlessOpen}
                setOpen={setIsHeadlessOpen}
                title="Item Details"
              >
                {/* <MobileSideNavigation /> */}
                <div className="flex flex-col">
                  <input type="text" className="border-gray-300 rounded-md" />
                  <MassiButton
                    className="mt-4"
                    onClick={() => setIsHeadlessOpen(false)}
                  >
                    OK
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

export default SlideOutSideNav;