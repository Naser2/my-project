import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import MessageInput from './MessageInput'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ChatBox({open, handleChatBoxModal, inbox}) {
  // const [open, setOpen] = useState(true)

  return (
    <div className=''>
    <Transition.Root show={open} as={Fragment}>
      <Dialog className="relative z-10" onClose={()=>handleChatBoxModal()}>
        <div className="inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-y-scroll">
            <div className="pointer-events-none absolute  top-[21vh] !right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-2xl">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-base font-semibold leading-6 text-gray-900"> <div class="h-16 border-b flex justify-between items-center w-full px-5 py-2 shadow-sm">
                    <div class="flex items-center">
                        <img class="h-10 w-10 overflow-hidden rounded-full" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixlib=rb-1.2.1&amp;q=60&amp;raw_url=true&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500" alt=""/>
                        <h6 class="font-semibold ml-3 ">Mircel Jones</h6>
                    </div>
                    <div class="flex items-center space-x-5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 bg-slate-50 rounded-full stroke-slate-400 p-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                        </svg>

                    </div>
                </div>
                </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center ">
                          <button
                            type="button"
                            className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                            onClick={() => handleChatBoxModal(false)}
                          >
                            <span className="absolute -inset-2.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Main */}
                    <div class="h-full px-10 py-4 divide-y divide-gray-200 !overflow-y-scroll mb-24">
                    {/* <!-- message container --> */}
                    <div class="text-center  my-5">
                        <hr class="-mb-3"/>
                        <span class="text-xs text-slate-300 font-medium bg-white px-3 -mt-3">Wednesday, Feburary
                            5</span>
                    </div>
                    {/* <!-- messages --> */}
                    <div class="w-full flex flex-start overflow-y-auto">
                        <div class="sm:w-1/2">
                            <div class="flex items-center">
                                <img class="h-5 w-5 overflow-hidden rounded-full" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixlib=rb-1.2.1&amp;q=60&amp;raw_url=true&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500" alt=""/>
                                <p class="font-semibold ml-3 text-sm text-slate-600">Mircel Jones <span class="text-slate-400 text-xs">3:21 PM</span></p>
                            </div>

                            <div class="mt-3 w-full bg-slate-50 p-4 rounded-b-xl rounded-tr-xl">
                                <p class=" text-sm text-slate-500">
                                    Hey all, <br/>
                                    There are many variation of passages of Lorem ipsum avaliable, but the jority have alternation in some form , by injected humor, or randomise words which don't look even slightly believable.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- me --> */}
                    <div class="w-full flex justify-end mt-3">
                        <div class=" ">
                            <div class="flex items-center justify-end">
                                <p class="font-semibold mr-3 text-sm text-slate-600">Me <span class="text-slate-400 text-xs">3:25 PM</span></p>

                                <img class="h-5 w-5 overflow-hidden rounded-full" src="https://source.unsplash.com/random/500x500/?face" alt=""/>
                             
                            </div>

                            <div class="mt-3 w-full bg-[var(--agedBlack)] p-4 rounded-b-xl rounded-tl-xl">
                                <p class=" text-sm !text-white">
                                    Hey, <br/>
                                    we are own hidden lake forest which is netural lake are generaly found in mountain.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="text-center  my-5">
                        <hr class="-mb-3"/>
                        <span class="text-xs text-slate-300 font-medium bg-white px-3 -mt-3">Today, 2:15 AM
                            5</span>
                    </div>
                    {/* <!-- messages --> */}
                    <div class="w-full flex flex-start">
                        <div class="">
                            <div class="flex items-center">
                                <img class="h-5 w-5 overflow-hidden rounded-full" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixlib=rb-1.2.1&amp;q=60&amp;raw_url=true&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500" alt=""/>
                                <p class="font-semibold ml-3 text-sm text-slate-600">Mircel Jones <span class="text-slate-400 text-xs">3:21 PM</span></p>
                            </div>

                            <div class="mt-3  bg-slate-50 p-4 rounded-b-xl rounded-tr-xl">
                                <p class=" text-sm text-slate-500">
                                    ok, Thanks
                                </p>
                            </div>
                        </div>
                    </div>

                 <MessageInput/> 
                </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    </div>
  )
}
