// "use client";
// import { Fragment } from "react";
// import { Dialog, Tab, Transition } from "@headlessui/react";
// import { XMarkIcon } from "@heroicons/react/24/outline";

// import { navigation } from "@/components/data";
// import { classNames } from "@/utils/classNames";
// // import { useMenuOpen } from "../../state";
// import { useState, useEffect } from "react"

// export function MobileMenuTabs() {
//   return (
//     <Tab.Group as="div" className="mt-2">
//       <div className="border-b border-gray-200">
//         <Tab.List className="-mb-px flex space-x-8 px-4">
//           {navigation.categories.map((category) => (
//             <Tab
//               key={category.name}
//               className={({ selected }) =>
//                 classNames(
//                   selected
//                     ? "border-indigo-600 text-indigo-600 !font-bold text-white"
//                     : "border-transparent text-gray-900 font-medium  text-gray-400",
//                   "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base"
//                 )
//               }
//             >
//               {category.name}
//             </Tab>
//           ))}
//         </Tab.List>
//       </div>
//       <Tab.Panels as={Fragment}>
//         {navigation.categories.map((category) => (
//           <Tab.Panel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
//             <div className="space-y-4">
//               {category.featured.map((item, itemIdx) => (
//                 <div
//                   key={itemIdx}
//                   className="group aspect-h-1 aspect-w-1 relative overflow-hidden rounded-md bg-gray-100"
//                 >
//                   <img
//                     src={item.imageSrc}
//                     alt={item.imageAlt}
//                     className="object-cover object-center group-hover:opacity-75"
//                   />
//                   <div className="flex flex-col justify-end">
//                     <div className="bg-white bg-opacity-60 p-4 text-base sm:text-sm">
//                       <a href={item.href} className="font-medium text-gray-900">
//                         <span className="absolute inset-0" aria-hidden="true" />
//                         {item.name}
//                       </a>
//                       <p
//                         aria-hidden="true"
//                         className="mt-0.5 text-gray-700 sm:mt-1"
//                       >
//                         Shop now
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             {category.sections.map((column, columnIdx) => (
//               <div key={columnIdx} className="space-y-10">
//                 {column.map((section) => (
//                   <div key={section.name}>
//                     <p
//                       id={`${category.id}-${section.id}-heading-mobile`}
//                       className="font-medium text-white"
//                     >
//                       {section.name}
//                     </p>
//                     <ul
//                       role="list"
//                       aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
//                       className="mt-6 flex flex-col space-y-6"
//                     >
//                       {section.items.map((item) => (
//                         <li key={item.name} className="flow-root">
//                           <a
//                             href={item.href}
//                             className="-m-2 block p-2 text-gray-500"
//                           >
//                             {item.name}
//                           </a>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </Tab.Panel>
//         ))}
//       </Tab.Panels>
//     </Tab.Group>
//   );
// }

// export function MobileMenu({menuOpen}) {
//   // const open = useMenuOpen((s) => s.open);
//   // const setOpen = useMenuOpen((s) => s.setOpen)
//   const [open, setOpen] = useState(false);

//   useEffect(() =>{
//     setOpen(menuOpen)
//   }, [menuOpen])

//   console.log("MENU-MOBILE SET-OPEN", open);
//   return (
//     <div className="bg-white h-full absolute top-0 w-full relative z-40 mt-24 bg-black" 
//         enter="transition-opacity ease-linear duration-300"
//         enterFrom="opacity-0"
//         enterTo="opacity-100"
//         leave="transition-opacity ease-linear duration-300"
//         leaveFrom="opacity-100"
//         leaveTo="opacity-0" > 
//         {open && <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
//           <div className="flex px-4 pb-2 pt-5">
//             <button
//               type="button"
//               className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
//               onClick={() => setOpen(false)}
//             >
//               <span className="sr-only">Close menu</span>
//               <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//             </button>
//           </div> 
//           </div>
//           }
//           <div className="space-y-6 border-t border-gray-200 px-4 py-6">
//             {navigation.pages.map((page) => (
//               <div key={page.name} className="flow-root">
//                 <a
//                   href={page.href}
//                   className="-m-2 block p-2 font-medium text-gray-900"
//                 >
//                   {page.name}
//                 </a>
//               </div>
//             ))}
//           </div>
//     </div> 
//   );
// }
