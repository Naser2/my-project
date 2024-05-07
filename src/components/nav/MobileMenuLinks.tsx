"use client";
import { Fragment } from "react";
import { Dialog, Tab, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Popover } from "@headlessui/react";
import { navigation } from "@/data";
import { classNames } from "@/utils";
import { useMenuOpen } from "@/state";
import { useState,useEffect } from 'react';
import ThemeSwitch from "@/components/ThemeSwitch"
import { LogoMobile } from "../SephoHeader";
import { OpenButton } from "../HideableNavbar";
const refinementData = [{
  name:"Cheveux", 
  categoryContent:[
  "Cheveux",
  "-25% sur une sélection soin cheveux (1)",
  "Beauty Days Cheveux (1)",
  "Nouveautés (2)",
  "Meilleures ventes 🔥 (78)",
  "Soin cheveux parapharmacie (149)",
  "Coffret cheveux (84)",
  "Routine cheveux (28)",
  "Soin Cheveux (1.015)",
  "Accessoires (112)",
  "Coiffant et Fixant (244)",
  "Besoins (938)",
  "Type de cheveux (913)",
  "Compléments alimentaires cheveux (17)",
  "Soin cheveux Clean at Sephora (1)",
  "Cheveux Homme (206)",
  "Grands Formats (10)",
  "Mini soin cheveux (90)",
  "Sephora Collection Soin Cheveux (3)",
  "Guide soin cheveux (1)"
]},
{
  name:"Brossses", 
  categoryContent:[
  "Les Brosses en bois",
  "-25% sur une sélection soin cheveux (1)",
  "Beauty Days Cheveux (1)",
  "Nouveautés (2)",
  "Meilleures ventes 🔥 (78)",
  "Soin cheveux parapharmacie (149)",
  "Coffret cheveux (84)",
  "Routine cheveux (28)",
  "Soin Cheveux (1.015)",
  "Accessoires (112)",
  "Coiffant et Fixant (244)",
  "Besoins (938)",
  "Type de cheveux (913)",
  "Compléments alimentaires cheveux (17)",
  "Soin cheveux Clean at Sephora (1)",
  "Cheveux Homme (206)",
  "Grands Formats (10)",
  "Mini soin cheveux (90)",
  "Sephora Collection Soin Cheveux (3)",
  "Guide soin cheveux (1)"
]},
{
  name:"Moisturizers", 
  categoryContent:[
  "Naturaly Moist",
  "-25% sur une sélection soin cheveux (1)",
  "Beauty Days Cheveux (1)",
  "Nouveautés (2)",
  "Meilleures ventes 🔥 (78)",
  "Soin cheveux parapharmacie (149)",
  "Coffret cheveux (84)",
  "Routine cheveux (28)",
  "Soin Cheveux (1.015)",
  "Accessoires (112)",
  "Coiffant et Fixant (244)",
  "Besoins (938)",
  "Type de cheveux (913)",
  "Compléments alimentaires cheveux (17)",
  "Soin cheveux Clean at Sephora (1)",
  "Cheveux Homme (206)",
  "Grands Formats (10)",
  "Mini soin cheveux (90)",
  "Sephora Collection Soin Cheveux (3)",
  "Guide soin cheveux (1)"
]}
]
const NabarfooterLinks = [
  {
    text: 'My account',
    href: '/profile/',
    icon: "/",
    dataEventLabel: 'my account'
  },
 
  {
    text: 'Contact Massi',
    href: '/contact',
    dataEventLabel: 'contact an advisor'
  },
  {
    text: 'Help | Faq',
    href: '/faq',
    icon: '/_ui/responsive/theme-onechanel/assets/icons.svg?v=3.52.5-p1#pin',
    dataEventLabel: 'find a store'
  },
];

const RefinementComponent = ({ column, sectionId }) => {
  const [expandedInputId, setExpandedInputId] = useState(column.id);
  const [accordionOpen, setAccordionOpen] = useState(false);

  // console.log('SECTION _ID ', sectionId, "COLUMN-ID:", column.id);

  // useEffect(() => {
  //   const current = column.id == expandedInputId ?? null
  //   console.log('USE-EFFECT -SET ID', sectionId );
  //   setExpandedInputId(current); // Reset the expandedInputId when sectionId changes
  // }, [column]);


  const handleInputChange = ({sectionId}) => {
        setAccordionOpen(!accordionOpen)
        console.log('ACCORDION-OPEN', accordionOpen);
        console.log('1- USE-EFFECT -INPUTID', sectionId );
        console.log('2- USE-EFFECT -expandedInputId', expandedInputId);
         setExpandedInputId((prevInputId) => (prevInputId === column.id ? null : sectionId));
    
    console.log('3- USE-EFFECT -expandedInputId', expandedInputId);
  };

  return (
    <div className="refinement-content ">
      <div className="refinement category-refinement ">
        <div className="refinement-active-filters"></div>
        <input id={`${column.id}-refinement-desktop`} type="checkbox" className="hide" autocomplete="off"  onChange={()=>handleInputChange(sectionId)}/>
        <div className="refinement-title-wrapper ">
        <label
        className="refinement-title dark:active:text-[#d0a24f] dark:after:border-solid dark:after:border-white dark:after:shadow-xl  dark:hover:text-[#7d5d24] main-text-color-1 link-list-title uppercase flex justify-between text-lg sm:text-lg header__primary__button text-left -ml-4 sm:-ml-4 dark:text-white" data-filterid="category" for={`${column.id}-refinement-desktop`} data-unfold="false" style={{"font-size":"1.125rem"}}>
       {/* dark:after:bg-slate-200 rounded-full */}
         {column.name}
        </label>
        </div>
        <ul className={classNames(expandedInputId === sectionId && "!mt-[1em] sm:!mt-[-2em] xl:!mt-[-3em]",  "refinement-container category ml-[-3em] -mt-2 sm:-mt-4 xl:!-mt-2")}>
        {/* <ul  className={`refinement-container ${column.id}`}> */}
          {/* <li> */}
            <a className="refinement-link active" href="https://www.sephora.fr/shop/cheveux-c307/">
              {/* {column.name} */}
            </a>
            <ul className="category-level-1 px-6">
              {column.items.map((item, index) => (
                <li key={index} className="flex-wrap text-left dark:text-white " 
                   
                >
                  <a
                    className="refinement-link category-search-link"
                    title={`Aller à la catégorie: ${item.name}`}
                    href="#"
                    data-href={`https://www.sephora.fr/${item.href}`}
                    data-cgid={`cgid-${item.href.replace(/ /g, "-")}`}
                  >
                    <span className="name  dark:text-[#bbbdc2] dark:hover:text-[#d0a24f]">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          {/* </li> */}
        </ul>
      </div>
    </div>
  );
};

export default RefinementComponent;

export function MobileMenuLinks({categories, session,navigationOpen, handlesetIsHeadlessModal}) {
  console.log("CATEGORIES-IN-MobileLinks", categories)
  
  return ( <div className="relative w-full ">
    <div className="px-[2em] w-1/2 flex space-between transform ease-in-out duration-500"> 
    <LogoMobile session={session} navigationOpen={navigationOpen}/> 
    {/* <OpenButton navigationOpen={navigationOpen}  handlesetIsHeadlessModal={handlesetIsHeadlessModal}/> */}
     </div>

    <Tab.Group as="div" className="w-full">

    <div className="border-b border border-gray-200 w-ful border-y-4 divide-y divide-slate-700  border-indigo-500 dark:border-t-1 dark:mt-6 dark:pr-6">
      <Tab.List className="-mb-px   px-0 inline-flex  w-full shawdow-xl">
      { categories.categories.map((category, index) => {
          console.log("CATEGORIY-TAB", category)
            return   <Tab
              key={category.id}
              className={({ selected }) =>
                classNames(
                  selected
                    ? "bg-black border-cream-1 dark:bg-black text-white !ml-[-3em] !w-3/3 sm:!ml-[-3.5em] text-black w-[4em]"
                    : "border-transparent  text-black  dark:bg-white dark:text-black  !ml-[-2.5em] sm:!ml-[-3.5em] ",
                  "flex-1 whitespace-nowrap py-2  !pb-2 text-lg font-medium  w-3/3"
                )
              } style={{"transition": "all 1s", "overflow":"hidden"}}
            >
             <span>{category.name.toUpperCase()}</span> 
            </Tab>
        })}
          </Tab.List>
      </div>
     <Tab.Panels as={Fragment}>
    
    {categories.categories.map((category, categoryIndex) => {

      console.log("CATEGORY-PANEL", category)
      
      return (
          <Tab.Panel key={categoryIndex} className="ml-[2em] sm:ml-[1em] space-y-6  sm:space-y-8 sm:pl-0 sm:pb-4 pt-4 sm:pt-8  "> 
         
           {category.sections.map((section, sectionIdx) => { 
        
           return ( <div key={sectionIdx} className="sm:space-y-10 !-mt-4 mb-4 pr-2  sm:pr-8 !dark:bg-[#8080800d]">
            {section.map((section) => {
               console.log("COLUMN-SECTION:", section)
            return  <div key={section.id} className="px-[1em] sm:px-5">
                  {/* <p  id={`${section.id}-${category.name}-heading-mobile`}  className="font-medium  main-text-color-1 text-left ">
                    {section.name}
                  </p> */}
                    <ul
                    role="list"
                    aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                    className="mt-2 flex flex-col space-y-3" >
                     <RefinementComponent column={section} sectionId={section.id}/>  
                  </ul>
                </div>
              })}  
            </div>
          )}
        )}
        </Tab.Panel>
      )})}
    </Tab.Panels> 
    
  </Tab.Group>
  <div className="prose prose-sm mb-4 text-gray-500 text-left px-2">
    {/* <ul role="list"><li>Only the best materials</li><li>Ethically and locally made</li><li>Pre-washed and pre-shrunk</li><li>Machine wash cold with similar colors</li></ul></div> */}

   
          <CorporateMenu pages={navigation["pages"]}/>
        
    </div> 
    <div></div>
    <LinkMapper links={NabarfooterLinks} />
    {/* <p className="header__shop js-header-shop prose-sm px-8 pt-2 text-[1.2em] px-8" id="available_online_divisions">Site Pages</p> */}
  
    </div>
    );
  }




export const LinkMapper = ({links}) => {

  return (
    <div className="px-2 w-full bg-1  dark:bg-black">
    <ul className="group has-border is-hidden-l js-header-contact mobile-nav-bottom-links" >
      {links.map((link, index) => (
        <li key={index} className={link.className}>
          <a href={link.href} className="group__item text-[1.5em] text-left text-[#333] dark:text-white hover:bg-gray-200 dark:hover:text-black" data-event-label={link.dataEventLabel}
          //  style={{'color': '#333'}}

           >
            {link.text}
            {/* {link.icon && (
              <svg className="icon is-large is-pulled-right" focusable="false" viewBox="0 0 1 1" aria-hidden="true">
                <use xlinkHref={link.icon}></use>
              </svg>
            )} */}
          </a>
        </li>
      ))}  
      <li>
        <button className="hcm-button-cta hcm-button group__item" data-event-category="burger menu" data-event-label="High contrast">
      
          <span> Contraste élevé</span>
          {/* <svg data-test="" className="icon is-large  is-hcm is-pulled-right" focusable="false" viewBox="0 0 1 1" aria-hidden="true" xmlns:xlink="http://www.w3.org/1999/xlink">
           
          </svg> */}
        </button>
      </li>
    </ul>
    </div>
  );
};

export const CorporateMenu = ({pages}) => {
  
  console.log("PAPGES", pages)
  return (
    <ul aria-labelledby="corporate_menu ">
      {pages && pages.map((item, index) => {
        console.log("PAPGE", item)
     return    <div key={index} className="js-header-entry list-outside text-left">
          <a
            href={item.href}
            id={`corporate-menu-item-${index}`}
            className="header__primary__button js-header-link about-chanel about-chanel__margin text-left"
            role="button"
            aria-haspopup="dialog"
            data-aria-label={`menu.axis.aria.${item.name}`}
            data-event-action={item.name}
            aria-hidden="false"
            tabIndex="0"
          >
            <span data-test={`lnkAxisCategory_${item.name}`}   className="text-left dark:text-white text-[1.5em]">{item.name}</span>
            <svg
              className="icon is-xsmall is-arrow is-arrowsmallright"
              focusable="false"
              viewBox="0 0 1 1"
              aria-hidden="true"
            >
              {/* <use xlinkHref="/_ui/responsive/theme-onechanel/assets/icons.svg?v=3.52.5-p1#arrowsmallright"></use> */}
            </svg>
          </a>

          <div
            className="header__secondary js-header-nav-secondary"
            data-test="ovlyMegaMenu_ByCategoryName"
            aria-hidden="true"
            role="dialog"
            aria-label={`${item.name} navigation`}
            style={{ transform: 'initial', display: 'none' }}
          >
            <div className="header__secondary__wrapper">
              <div className="nav">
                <div className="nav-left nav-left-one">
                  <button className="button nav-item js-header-back is-hidden-l" type="button">
                    <svg
                      className="icon is-medium is-arrow is-arrowmediumleft"
                      focusable="false"
                      viewBox="0 0 1 1"
                      aria-hidden="true"
                    >
                      {/* <use xlinkHref="/_ui/responsive/theme-onechanel/assets/icons.svg?v=3.52.5-p1#arrowmediumleft"></use> */}
                    </svg>
                    <span className="is-sr-only">Retour à la navigation principale </span>
                  </button>
                </div>

                <div className="nav-center">
                  <p className="nav-item has-text-centered is-hidden-l ">
                    <span className="heading is-6">{item.name}</span>
                  </p>
                </div>

                <div className="nav-right">
                  <button className="nav-item button js-header-close header-close" type="button" data-test="btncloseMegaMenu">
                    <svg className="icon is-cross-medium" focusable="false" viewBox="0 0 1 1" aria-hidden="true">
                      {/* <use xlinkHref="/_ui/responsive/theme-onechanel/assets/icons.svg?v=3.52.5-p1#cross-medium"></use> */}
                    </svg>
                    <span className="is-sr-only">Fermer About Chanel navigation </span>
                  </button>
                </div>
              </div>

              <div className="header__columns" role="list">
                <div className="header__column">
                  <div className="header__category">
                    <p className="header__category__title" data-test="lblLevelTwoCategory_ByNames">{item.name}</p>
                    <ul className="header__category__links">
                      {/* {item.links.map((link, idx) => ( */}
                        <li key={index}>
                          <a
                            href={item.href}
                            data-linkname={item.name}
                            className="js-header-secondary-link text-left dark:text-white "
                            data-test={`lnkLevelThreeCategory_ByCategory_${index}`}
                            data-event-action={item.name}
                            data-event-label={item.name}
                            tabIndex={index}
                          >
                            {item.name}
                          </a>
                        </li>
                      {/* ))} */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      })}
    </ul>
  );
};



export function MobileMenu() {
  const open = useMenuOpen((s) => s.open);
  const setOpen = useMenuOpen((s) => s.setOpen);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" id="MASSI-MOBILE-HEADER"  className="relative z-40  " onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="bg-crema !px-6 sm:px-8 bg-black relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div className="flex px-4 pb-2 pt-5 rounded-full !mt-4 bg-cremalight ring-1 ring-orange-300!w-23 !h-23 !px-1.5 !py-1.5" style={{"width":"36px"}}>
                <button
                  type="button"
                  className="-m-2 inline-flex items-center justify-center rounded-md p-2 main-text-color1"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              {/* <MobileLinks /> */}

              <div className="space-y-6 border-t border-gray-200 !px-2 !py-6">
                {navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root q0yked">
                    <a
                      href={page.href}
                      className="-m-2 block text-[1.5em] !p-4 font-medium  dark:text-white hover:main-text-color-1"
                    >
                      {page.name}
                    </a>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 px-6 py-6">
                <a href="#" className="-m-2 flex items-center !p-2">
                  <img
                    src="https://tailwindui.com/img/flags/flag-canada.svg"
                    alt=""
                    className="block h-auto w-5 flex-shrink-0"
                  />
                  <span className="ml-3 block text-base font-medium text-gray-900">
                    CAD
                  </span>
                  <span className="sr-only">, change currency</span>
                </a>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
