/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { MobileSideNavigation } from '../SephoHeader';
import classNames from 'classnames';
import { OpenButton } from '../HideableNavbar';
import { set } from 'mongoose';


export default function HeadlessSlideOver({ open, setOpen,  handleOnClose,title, children }) {

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 overflow-scroll mt-[7em]"
        open={open}
        onClose={setOpen}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 backdrop-blur-sm bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="margin-can-be-set-here">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="relative w-screen max-w-md">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className={classNames(open ? "z-50 absolute top-[-2em] left-[9em] ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4" : "absolute top-0 left-0 ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4")}>
                  <OpenButton 
                    setOpen={setOpen}
                    isOpen={open} 
                    handleOnClose={handleOnClose}/>
                    {/* <button
                      className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close panel</span>
                   
                    </button> */}
                  </div>
                </Transition.Child>
                
                <MobileSideNavigation/>
                {/* <div className={classNames(open ? "absolute top-0 right-24 z-50" : "h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll !mt-[10em] z-40")}>
                   <OpenButton  isOepn={open} />
                  <div className="px-4 sm:px-6">
                    <Dialog.Title className="text-lg font-medium text-gray-900">
                      {title} Headless Component
                    </Dialog.Title>
                  </div>
                  
                  <div className="mt-6 relative flex-1 px-4 sm:px-6">
         
                    {children}
                   
                  </div>
                </div> */}
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}