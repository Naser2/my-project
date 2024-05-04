'use client'

import Image from 'next/image'

import { classNames } from '@/utils';
import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import Button  from '@/components/headless/button'
import clsx from 'clsx'
import  LoggedInUserImage from '@/assets/images/profile.png'
import  AuthenticatedUserImage from '@/assets/images/AuthenticatedUserImage.png'
import FAQ from "./FAQ";
// import SecondaryHeader from './SecondaryHeader'
import { UserFlyoutLinks, allCategories, latestBlogs, navigation, paradigm } from '@/data';

import FancyLoader from './FancyLoader'
import Icon from './Icons';
import Cart from './Cart';
import {CartMobile } from './Cart';
// import HeaderNavigationLinks from './SecondaryHeader';
import UnreadMessageCount from './UnreadMessageCount';

import Link from 'next/link';
import { usePathname } from 'next/navigation';


import logo from '@/assets/images/logo-white.png';
import profileDefault from '@/assets/images/profile.png';
import { FaGoogle } from 'react-icons/fa';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import { MobileMenuLinks } from './nav/MobileMenuLinks';
import DesktopSiteMapFlyout from './nav/DesktopSiteMapFlyout'
import DesktopAccountLinksFlyout from './nav/DesktopAccountLinksFlyout'
import ThemeSwitch from './ThemeSwitch';
import ThemeSwitchModal from './themeSwhitcher/ThemeSwitchModal'
const countries = [
    {
      name: "France",
      // flagSrc: "/on/demandware.static/Sites-Sephora_FR-Site/-/default/dwc0fe45eb/images/svg-icons/flags/fr-flag.svg",
      locale: "FR",
      fullLocale: "France - Français",
      redirectLocale: "fr_FR"
    },
    {
      name: "Belgique",
      // flagSrc: "/on/demandware.static/Sites-Sephora_FR-Site/-/default/dw155fa044/images/svg-icons/flags/be-flag.svg",
      locale: "FR",
      fullLocale: "Belgique - Français",
      redirectLocale: "fr_FR"
    },
    {
      name: "Bulgarie",
      // flagSrc: "/on/demandware.static/Sites-Sephora_FR-Site/-/default/dw356c0d9a/images/svg-icons/flags/bg-flag.svg",
      locale: "FR",
      fullLocale: "Bulgarie - Français",
      redirectLocale: "fr_FR"
    },
    {
      name: "Estonie",
      // flagSrc: "/on/demandware.static/Sites-Sephora_FR-Site/-/default/dwa737fba7/images/svg-icons/flags/ee-flag.svg",
      locale: "FR",
      fullLocale: "Estonie - Français",
      redirectLocale: "fr_FR"
    },
    {
      name: "Hongrie",
      // flagSrc: "/on/demandware.static/Sites-Sephora_FR-Site/-/default/dw8c8529ed/images/svg-icons/flags/hu-flag.svg",
      locale: "FR",
      fullLocale: "Hongrie - Français",
      redirectLocale: "fr_FR"
    },
    {
      name: "Irlande",
      // flagSrc: "/on/demandware.static/Sites-Sephora_FR-Site/-/default/dw980d1df9/images/svg-icons/flags/ie-flag.svg",
      locale: "FR",
      fullLocale: "Irlande - Français",
      redirectLocale: "fr_FR"
    },
    {
      name: "Lettonie",
      // flagSrc: "/on/demandware.static/Sites-Sephora_FR-Site/-/default/dw065a4bfc/images/svg-icons/flags/lv-flag.svg",
      locale: "FR",
      fullLocale: "Lettonie - Français",
      redirectLocale: "fr_FR"
    },
    {
      name: "Lituanie",
      // flagSrc: "/on/demandware.static/Sites-Sephora_FR-Site/-/default/dw6045be49/images/svg-icons/flags/lt-flag.svg",
      locale: "FR",
      fullLocale: "Lituanie - Français",
      redirectLocale: "fr_FR"
    },
    {
      name: "Luxembourg",
      // flagSrc: "/on/demandware.static/Sites-Sephora_FR-Site/-/default/dw9ef5dd06/images/svg-icons/flags/lu-flag.svg",
      locale: "FR",
      fullLocale: "Luxembourg - Français",
      redirectLocale: "fr_FR"
    },
    {
      name: "Pays Bas",
      // flagSrc: "/on/demandware.static/Sites-Sephora_FR-Site/-/default/dw9969a5df/images/svg-icons/flags/nl-flag.svg",
      locale: "FR",
      fullLocale: "Pays Bas - Français",
      redirectLocale: "fr_FR"
    },
    {
      name: "Slovaquie",
      // flagSrc: "/on/demandware.static/Sites-Sephora_FR-Site/-/default/dw633a4192/images/svg-icons/flags/sk-flag.svg",
      locale: "FR",
      fullLocale: "Slovaquie - Français",
      redirectLocale: "fr_FR"
    },
    {
      name: "Slovénie",
      // flagSrc: "/on/demandware.static/Sites-Sephora_FR-Site/-/default/dwfb6c467a/images/svg-icons/flags/si-flag.svg",
      locale: "FR",
      fullLocale: "Slovénie - Français",
      redirectLocale: "fr_FR"
    }
  ];
  

  export const SubscribeComponent = () => {
    return     ( <div id="SUBCRIBTION-MODAL-or-PAGE" role="main" className=" bg-white page-content clearfix main-content">
    <div className="content">
      <div id="primary" className="primary-content column medium-12 small-12">
        <div className="login-page-wrapper">
          <div className="account-login checkout-login row">
            <div className="medium-6 small-12 login-form-box">
              <div className="login-wrapper newsubscription-login-wrapper">
                <div className="login-email newsubscription-login-email">
                  <h1 className="title">Se connecter / s’inscrire</h1>
                  <span className="newsubscription-login-info">
                    Renseignez <strong>votre adresse email</strong> pour vous
                    connecter ou créer un compte
                  </span>
                  <form
                    action="https://www.sephora.fr/on/demandware.store/Sites-Sephora_FR-Site/fr_FR/SephoraCard-RoutingAccountGlobal"
                    method="post"
                    className="form-horizontal email-form flex-wrap"
                    noValidate="novalidate"
                  >
                    <fieldset className="flex1">
                      <div className="form-row  required  idz_hide ">
                        <div className="field-wrapper">
                          <input
                            data-cs-mask=""
                            className="required input-text ui-autocomplete-input"
                            type="email"
                            id="dwfrm_crmsephoracard_email"
                            name="dwfrm_crmsephoracard_email"
                            defaultValue=""
                            placeholder=""
                            data-msg-required="Veuillez vérifier votre adresse <span>Email</span>."
                            maxLength={70}
                            minLength={0}
                          />
                          <label htmlFor="dwfrm_crmsephoracard_email">
                            <span>
                              <span>Email</span>
                              <span className="required-indicator">*</span>
                            </span>
                          </label>
                          <ul
                            id="ui-id-1"
                            tabIndex={0}
                            className="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front"
                            style={{ display: "none" }}
                          />
                        </div>
                      </div>
                      <input
                        type="hidden"
                        name="csrf_token"
                        defaultValue="cnLdVVBlUFDi8xC2CF2jWJRmUUGPfZ109HG46F-wchbw0_YTShLLqa9XbeJjlmgnPqitavRPtPAijm1NzzITmZMCX0ue57vU8WSKVV-DyM7LO8-JBeTZRgMHlF_U4kYQ5AolRz6Lx7iDJ4cM94nJJwguVIH-z8B78bO3eewVmNQ37OOPrC4="
                      />
                    </fieldset>
                    <div className="form-row form-button">
                      <button
                        type="submit"
                        className="button"
                        value="Appliquer"
                        name="dwfrm_crmsephoracard_confirm"
                        disabled=""
                      >
                        ok
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <input
                type="hidden"
                id="snapinChatSwitcher"
                defaultValue="true"
              />
              <div id="login-legal-foldable" className="login-legal-wrapper">
                <div className="content-asset login-legal-foldable">
                  <p
                    className="informations-required-field"
                    style={{ textAlign: "justify" }}
                  >
                    * Informations obligatoires
                  </p>
                  <p className="mention-required-field hide">
                    ** Champs obligatoires pour adhérer au programme de
                    fidélité
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    <strong>
                      L’ouverture d’un compte Sephora est réservée aux
                      personnes âgées de 16 ans et plus.
                    </strong>
                  </p>
                  <br />
                  <p style={{ textAlign: "justify" }}>
                    Créez un compte gratuitement et accédez simplement à un
                    ensemble de services personnalisés :
                  </p>
                  <ul>
                    <li>Gestion et suivi de vos commandes</li>
                    <li>Mise à jour de vos données personnelles</li>
                    <li>
                      Gestion de vos inscriptions aux communications relatives
                      aux dernières tendances et offres exclusives Sephora
                    </li>
                    <li>
                      Devenir le cas échéant membre de notre programme de
                      fidélité et consulter vos avantages cumulés avec la
                      carte de fidélité Sephora
                    </li>
                  </ul>
                  <p />
                  <br />
                  <p style={{ textAlign: "justify", marginBottom: 10 }}>
                    <strong>
                      Utilisation de vos données personnelles&nbsp;:
                    </strong>
                  </p>
                  <ul
                    className="accordion "
                    data-responsive-accordion-tabs="accordion"
                    data-allow-all-closed="true"
                    id="tqk7h8-responsiveaccordiontabs"
                    role="tablist"
                    data-e="pr4q1w-e"
                  >
                    <li className="accordion-item" data-accordion-item="">
                      <p style={{ textAlign: "left" }}>
                        Les données personnelles communiquées dans le cadre de
                        ce formulaire sont destinées à Sephora SAS.
                      </p>
                      <a
                        href="#"
                        className="accordion-title"
                        aria-controls="oy7ap3-accordion"
                        role="tab"
                        id="oy7ap3-accordion-label"
                        aria-expanded="false"
                        aria-selected="false"
                      >
                        <u>
                          Tout savoir sur l’utilisation de vos données et de
                          vos droits.
                        </u>
                      </a>
                      <div
                        className="accordion-content"
                        data-tab-content=""
                        role="tabpanel"
                        aria-labelledby="oy7ap3-accordion-label"
                        aria-hidden="true"
                        id="oy7ap3-accordion"
                      >
                        <p style={{ textAlign: "justify" }}>
                          Les données personnelles communiquées lors de la
                          création de votre compte ou par la suite à
                          l’occasion de l’utilisation de nos produits et
                          services sont destinées à Sephora SAS et seront
                          traitées aux fins de:
                          <br />- Vous permettre de gérer votre compte et vous
                          fournir les services associés, et le cas échéant
                          gérer votre adhésion au programme fidélité&nbsp;;
                          <br />- Comprendre vos besoins et préférences pour
                          créer votre profil client et effectuer des analyses
                          et statistiques commerciales afin d’organiser des
                          activités promotionnelles et des concours et vous
                          adresser, sous réserve de votre consentement, des
                          offres susceptibles de vous intéresser;&nbsp;
                          <br />- Afficher de la publicité ciblée sur notre
                          site ainsi que sur d’autres sites en fonction de vos
                          choix relatifs à l’utilisation des cookies.
                          <br />
                          Pour connaître nos pratiques en matière de collecte,
                          utilisation et communication de vos données
                          personnelles, exercer vos droits, d’accès, de
                          rectification et de suppression, modifier vos
                          options en matière de prospection commerciale ou
                          organiser le sort de vos données post-mortem, et
                          connaître les autres droits dont vous disposez,
                          veuillez lire notre{" "}
                          <a href="https://www.sephora.fr/donnees-personnelles.html">
                            <u>Politique données personnelles et cookies</u>
                          </a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>)
  }


  export const SectionLoader = ({countryPickerIsOpen, handleCountryPickerIsOpen}) => {

     return  (<div id="SECTION-LOADER" className="section-loader">
            <div id=" LanguagePickerIcon" className="language-select-wrapper country-language-wrapper" onClick={()=>handleCountryPickerIsOpen}>
            {/* <ul className="vertical menu accordion-menu access-menu">
                <li className="access-menu-item">
                <div className="selected-site dropdown-with-arrow language-selector-arrow custom-language-selector-arrow burger-menu-entry js-show-languages-modal">
                    <img
                    className="country-selector-image"
                    src="https://www.sephora.fr/on/demandware.static/Sites-Sephora_FR-Site/-/default/dwc0fe45eb/images/svg-icons/flags/fr-flag.svg"
                    />
                    <span className="hide-for-medium">France - Français</span>
                    <input
                    type="hidden"
                    id="selectedCountryID"
                    defaultValue="FR"
                    />
                    <input
                    type="hidden"
                    id="selectedCountryName"
                    defaultValue="France - Français"
                    />
                </div>
                </li>
            </ul> */}
            <div className="arrow show-for-mlarge" />
            </div>
         </div>
    );
  };
  

  
export const CountrySelector = ({countryPickerIsOpen, handleCountryPickerIsOpen}) => {
    // console.log("CountrySELECTOR --FIred")
  return (
    <div className={classNames(`${countryPickerIsOpen ? "modal-and-pop-over-bg popup-dialog-layer max-w-[4em] ui-dialog ui-corner-all ui-widget ui-widget-content ui-front  language-selector-dialog" : 'hidden' }`)} role="dialog" aria-describedby="languages-dialog-container" aria-labelledby="ui-id-2"
    // style={{"transform": "translateX(-360px)"}}
    >

      <div className="ui-dialog-titlebar ui-corner-all ui-widget-header ui-helper-clearfix !mt-24">
        <span id="ui-id-2" className="ui-dialog-title">VOTRE PAYS DE LIVRAISON</span>
        <button type="button" className="ui-button ui-corner-all ui-widget ui-button-icon-only ui-dialog-titlebar-close !rounded-full !bg-gray-200" title="Fermer" onClick={handleCountryPickerIsOpen} style={{"borderRadius":" 9999px"}}>
          <svg className="svg-inline close-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.92781 10.3431C8.53729 9.95257 8.53729 9.3194 8.92781 8.92888C9.31833 8.53836 9.9515 8.53836 10.342 8.92888L23.0699 21.6568C23.4605 22.0473 23.4605 22.6805 23.0699 23.071C22.6794 23.4615 22.0463 23.4615 21.6557 23.071L8.92781 10.3431Z" fill="black"></path>
            <path d="M10.3419 23.0712C9.95135 23.4617 9.31818 23.4617 8.92766 23.0712C8.53713 22.6807 8.53713 22.0475 8.92766 21.657L21.6556 8.92908C22.0461 8.53855 22.6793 8.53855 23.0698 8.92908C23.4603 9.3196 23.4603 9.95277 23.0698 10.3433L10.3419 23.0712Z" fill="black"></path>
          </svg>
        </button>
      </div>
      <div id="languages-dialog-container" className="dialog-content ui-dialog-content ui-widget-content">
        <ul className="show-languages-list">
          {countries.map((country, index) => (
            <div className="q0yked" key={index} >
            <a href="/setprefs?hl=en&prev=https://www.google.com/search?q%3D--ntp-extra-content-effect-multiplier%26oq%3D--ntp-extra-content-effect-multiplier%26aqs%3Dchrome..69i57.846j0j1%26sourceid%3Dchrome%26ie%3DUTF-8%26pccc%3D1&sig=0_niwPn-BIp2jwtmelwr-p9Dv3_4k%3D&cs=2&sa=X&ved=2ahUKEwiprcitw96FAxWHN2IAHQIZBCYQqsEHegQIBBAJ&ictx=1">
              <span className="z1asCe tSAV7">
                <svg
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 24 24"
                  height={24}
                  viewBox="0 0 24 24"
                  width={24}
                >
                  <rect fill="none" height={24} width={24} />
                  <path d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z" />
                </svg>
              </span>
              <div className="uXoAyd">
                <span className="ZI7elf UCGAnb">Dark theme</span>
                <span className="kQEH5b text-left">Off</span>
              </div>
            </a>
          </div>
          
            // <li key={index} className="show-languages-item hover:bg-slate-100" >
            //   <div className="js-change-site-link change-site-flag-name lisitem-anchors-gaps" data-language={country.redirectLocale} data-redirectlocale={country.redirectLocale} data-redirectfulllocale={country.fullLocale}>
            //     <div className="country-selector-image-wrapper">
            //       <img className="country-selector-image lazy-image lisitem-anchors-at-light" data-src={country.flagSrc} src={country.flagSrc} style={{ opacity: 1 }} alt={country.name} />
            //       {country.name}
            //     </div>
            //   </div>
            //   <div className="language-link-wrapper">
            //     <div className="change-site-flag-name site-language-link site-language-link-after language-link-extended hide" data-language={country.locale} data-redirectlocale={country.redirectLocale} data-redirectfulllocale={country.fullLocale}>
            //       {country.locale}
            //     </div>
            //   </div>
            // </li>
          ))}
        </ul>
        <div className="divider-line"></div>
        <div className="link-underline">
          <p><a href="https://www.sephora.fr/pays.html">Découvrir nos sites internationaux</a></p>
        </div>
      </div>
    </div>
  );
};


const HeaderItem = ({ id, href, text, tooltipText }) => (
  <div className="header-item header-layer" id={`header-item-${id}`}>
    <div className="header-link-wrapper">
      <a className="header-link header-link-account js-tc-connect-account" href={href}>
        <span className="header-link-text" data-cs-mask="">
          {text}
        </span>
        <span className="header-link-icon">
          <svg width="17" height="21" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* SVG path */}
          </svg>
          <div className="tooltip-container-login" style={{ display: 'none' }}>
            <span className="tooltip-text">
              {tooltipText}
            </span>
            <span className="tooltip-close"></span>
          </div>
        </span>
      </a>
      <div className="arrow"></div>
    </div>
    {/* Rest of the component */}
  </div>
);

const AccountLayer = () => (
  <div className="account-layer header-layer-content">
    {/* Account layer content */}
  </div>
);

// const Header = ({ items }) => (
//   <div className="header">
//     {items.map((item, index) => (
//       <HeaderItem key={index} {...item} />
//     ))}
//     <AccountLayer />
//   </div>
// );

export const SectionLoaderSVG = ({countryPickerIsOpen}) => {
    return (
      <div id="SectionLoaderSVG" className="section-loader">
        <svg
          id="section-loader-svg"
          className="hide"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width={40}
          height={40}
        >
          <circle
            className="loader-circle-border"
            r="40%"
            cx="50%"
            cy="50%"
            style={{ fill: "rgb(238, 238, 238)", strokeWidth: 0 }}
          />
          <mask id="mask">
            <circle r="45%" cx="50%" cy="50%" className="c-mask-circle" />
          </mask>
          <g mask="url(#mask)">
            <circle
              r="50%"
              cx="50%"
              cy="50%"
              style={{ fill: "rgb(255, 255, 255)", strokeWidth: 0 }}
            />
            <g id="clip-trs">
              <rect
                x="-200%"
                y={0}
                width="400%"
                height="15%"
                style={{ fill: "black" }}
              />
              <rect
                x="-200%"
                y="30%"
                width="400%"
                height="15%"
                style={{ fill: "black" }}
              />
              <rect
                x="-200%"
                y="60%"
                width="400%"
                height="15%"
                style={{ fill: "black" }}
              />
              <rect
                x="-200%"
                y="90%"
                width="400%"
                height="15%"
                style={{ fill: "black" }}
              />
              <rect
                x="-200%"
                y="120%"
                width="400%"
                height="15%"
                style={{ fill: "black" }}
              />
              <rect
                x="-200%"
                y="150%"
                width="400%"
                height="15%"
                style={{ fill: "black" }}
              />
              <rect
                x="-200%"
                y="180%"
                width="400%"
                height="15%"
                style={{ fill: "black" }}
              />
              <rect
                x="-200%"
                y="210%"
                width="400%"
                height="15%"
                style={{ fill: "black" }}
              />
              <rect
                x="-200%"
                y="240%"
                width="400%"
                height="15%"
                style={{ fill: "black" }}
              />
              <rect
                x="-200%"
                y="270%"
                width="400%"
                height="15%"
                style={{ fill: "black" }}
              />
              <rect
                x="-200%"
                y="300%"
                width="400%"
                height="15%"
                style={{ fill: "black" }}
              />
            </g>
          </g>
        </svg>
      </div>
    );
  };
  
 export const LanguagePickerIcon=({handleCountryPickerIsOpen})=> { 
    // const [isOpen, setIsOpen] = useState(false);
  
    // const handleClick = () => {
    //   setIsOpen(!isOpen);
    // };
  

     return  (
    <div id=" LanguagePickerIcon" className="language-select-wrapper country-language-wrapper" onClick={handleCountryPickerIsOpen}>
   <ul className="vertical menu accordion-menu access-menu">
     <li className="access-menu-item">
    
       <div className="selected-site dropdown-with-arrow language-selector-arrow custom-language-selector-arrow burger-menu-entry js-show-languages-modal">
   
         <img
           className="country-selector-image"
           src="https://www.sephora.fr/on/demandware.static/Sites-Sephora_FR-Site/-/default/dwc0fe45eb/images/svg-icons/flags/fr-flag.svg"
         />
         <span className="hide-for-medium">Fran ce - Français</span>
         <input
           type="hidden"
           id="selectedCountryID"
           defaultValue="FR"
         />
         <input
           type="hidden"
           id="selectedCountryName"
           defaultValue="France - Français"
         />
       </div>
     </li>
   </ul>
   <div className="arrow show-for-mlarge" />
 </div>)
 }


 const NavTriggerComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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



// export const ScrollHandlerComponent = () => {
//   useEffect(() => {
//     let scrollTimer;

//     const handleScroll = () => {
//       const nav = document.querySelector('.nav');
//       if (nav) {
//         if (window.scrollY > 160) {
//           nav.classList.add('affix');
//           nav.classList.add('animationTransform');
//           console.log("OK");
//           // Add animationTransform class half a second after adding affix class
//           clearTimeout(scrollTimer);
//           scrollTimer = setTimeout(() => {
//             // Insert animationTransform class as the second class
//             const classes = nav.classList;
//             if (classes.length > 1) {
//               classes.remove('animationTransform');
//               // classes.add('animationTransform');
//             } else {
//               classes.add('animationTransform');
//             }
//             // Add trasnpaprent class when scrolled 40px down
//             if (window.scrollY > 90) {
//               nav.classList.add('bg-[#2c2c2ce8]');
//             }
//           }, 500);
//         } else {
//           nav.classList.remove('affix');
//           nav.classList.remove('animationTransform');
//           nav.classList.remove('bg-[#2c2c2ce8]');
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       clearTimeout(scrollTimer); // Clear timeout when component unmounts
//     };
//   }, []);

//   return null; // Since this is a utility component, it doesn't render any UI
// };

export const ScrollHandlerComponent = () => {
  useEffect(() => {
    let scrollTimer;

    const handleScroll = () => {
      const nav = document.querySelector('.nav');
      const primaryNav = document.querySelector('.sticky-top');


      if (nav && primaryNav) {
        if (window.scrollY > 160) {
          // primaryNav.classList.add('hidden'); 
          primaryNav.style.top ='0px'
          nav.classList.add('affix');
          nav.classList.add('fixed');
          // nav.classList.add('animationTransform');

          // Add animationTransform class half a second after adding affix class
          clearTimeout(scrollTimer);
          scrollTimer = setTimeout(() => {
            const classes = nav.classList;
            // if (classes.length > 1) {
            //   // classes.remove('animationTransform');
            //   primaryNav.style.top = '0px'
            //   nav.style.top = '54px'
            //   // primaryNav.classList.add('absolute')
            // }
            //  else 
            if ( !scrollTimer ||  nav.classList.contains('affix')) {
              // classes.add('animationTransform');
              primaryNav.style.top = '0px'
              // nav.classList.remove('fixed')
            
              primaryNav.classList.add('fixed') 
              nav.classList.add('relative')
              primaryNav.style.top =`${primaryNav.clientHeight}px`;
            }

            // Add bg-[#2c2c2ce8] class when scrolled 40px down
            if (window.scrollY > 90) {
              nav.classList.add('bg-[#2c2c2ce8]');
              // primaryNav.classList.add('fixed')
            }
          }, 500);
        } else {
          nav.classList.remove('affix');
          // nav.classList.remove('animationTransform');
          nav.classList.remove('bg-[#2c2c2ce8]');
          primaryNav.style.top = '160';
          primaryNav.classList.add('!fixed')
        }

        // Check if scrolling has stopped
        if (!scrollTimer ||  !scrollTimer && nav.classList.contains('affix')) {
          // nav.classList.remove('animationTransform')
          // primaryNav.style.top = '160';
          // nav.classList.add('fixed')

          primaryNav.classList.add('!sti')
         ; // Add class to make Primary nav sticky
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimer); // Clear timeout when component unmounts
    };
  }, []);

  return null; // Since this is a utility component, it doesn't render any UI
};
// function trackActiveSection() {
//   const sections = document.querySelectorAll('section[id]');
//   const navLinks = document.querySelectorAll('.secondary-nav a');

//   const scrollHandler = () => {
//     let scrollPosition = window.scrollY + 100;

//     sections.forEach((section) => {
//       const sectionTop = section.offsetTop;
//       const sectionHeight = section.clientHeight;
//       const sectionId = section.getAttribute('id');

//       if (
//         scrollPosition >= sectionTop &&
//         scrollPosition <= sectionTop + sectionHeight
//       ) {
//         navLinks.forEach((link) => {
//           link.classList.remove('active');
//           if (link.getAttribute('href').slice(1) === sectionId) {
//             link.classList.add('active');
//           }
//         });
//       }
//     });
//   };

//   window.addEventListener('scroll', scrollHandler);
// }
// export const ScrollHandlerComponent = () => {
//   useEffect(() => {
//     const handleScroll = () => {
//       const nav = document.querySelector('.nav');
//       const primaryNav = document.querySelector('.sticky-top');

//       if (nav && primaryNav) {
//         if (window.scrollY > 160) {
//           nav.style.top = `${primaryNav.clientHeight}px`;
//           // alert("CLIENT-HEIGHT: " + window.scrollY)
//           nav.classList.add('affix');
//           nav.classList.add('fixed');
//           nav.classList.add('animationTransform');
//         } else {
//           nav.classList.remove('affix');
  
//           nav.classList.remove('animationTransform');
//           nav.style.top = '0';
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return null; // Since this is a utility component, it doesn't render any UI
// };
// const Hamburger = (handleSetNavigationIsOpen) => {
//   return (
//     <>  
   
//       <NavTriggerComponent /> {/* Rendering the NavTriggerComponent */}
   
//       <div className='menu-toggle_menuToggle__6OaWw mobile-menu-button_indicator__mGvzn avatar-mobile-menu_button__YEcob geist-show-on-tablet -mr-[0.5em]  flex'>
//         <label onClick={handleSetNavigationIsOpen}
//             htmlFor="mobile-navigation"
//             className="menu-togglee"
//             id="menu-togglee">
//                   <span className="navTrigger" onClick={handleSetNavigationIsOpen}>
//                   <div class="menu-toggle_bar__GUd1o" data-position="top"></div>
//                   <div class="menu-toggle_bar__GUd1o" data-position="bottom"></div>
//                   <div class="menu-toggle_bar__tree" data-position=""></div>
//                   </span>
//               </label>
//         </div>
      
//     </>
//   );
// }
export const MobileHeader = ({session, navigation, userSession, navigationOpen, handleSetNavigationIsOpen, profileImage, isProfileMenuOpen, setIsProfileMenuOpen,providers, advertissment}) => {
  console.log("MOBILE_HEAADER_SESSION-->", session, "MobileHeader-OPEN ??", navigationOpen, "ADVETISSEMENT", advertissment)
 return  (<div  id="SEPHORA-MOBILE-HEADER" className={classNames(`${navigationOpen  && advertissment  && 'inset-x-0 z-40 animationTranfrom'} 
    ${navigationOpen ? '!bg-white  dark:!bg-black' : "bg-transparent" } 
     mobile-header bg-white dark:bg-black z-50` )}
      style={{}}>
      {navigationOpen && <UserIcon navigationOpen={navigationOpen} session={session} isProfileMenuOpen={isProfileMenuOpen} profileImage={profileImage} setIsProfileMenuOpen={setIsProfileMenuOpen}/>}
  <div className="flex justify-between h-full  center px-4 pb-4 pr-2 sm:ml-[44vw]">
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
   
     <div className="top-right py-[1em]  sm:my-2 justify-center flex inline-flex grid grid-cols-3 sm:py-2 sm:mr-4">
      <ThemeSwitchModal />
     {/* <ThemeSwitch/> */}
     <div className='absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto  md:pr-0'> </div> <div className='absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0'>
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
            <Link
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
            <span className="px-2 invisible hover:visible  hover:text-blue-500 lg:mx-2 lg:text-lg" >
              Message
            </span>
          </Link>
        </div>}
      </div>
     
       <SeachIcon session={session}/>
      { session &&  <BellIcon/> }
        <CartMobile /> 
        
        <OpenButton handleSetNavigationIsOpen={handleSetNavigationIsOpen}/>
        {/* <TestSliderComponent /> */}
    </div>
  </div>
  <input id="mobile-search-checkbox" type="checkbox" className="hide" />
</div>)
}


export const SeachIcon = ({session}) => {
  return  <div
  className="load-algolia center"
  data-fake-searchbar-needed="false"
>
  <button className={classNames(!session && "w-[26px]  h-[26px] sm:w-[32px] sm:h-[32px] mt-[0.26em] mx-2 sm:mt-0 hover:ring-1 hover:shadow-xl hover:ring-[#bdbdbd] sm:mr-1 mobile-search-magnifying-glass hover:bg-[#f2f2f2]  dark:bg-slate-800 dark:!text-white dark:hover:ring-white")}>
    <svg
      className="svg-inline search-icon w-[16px] h-[16px] dark:!fill-white dark:stroke-white px-2"
      xmlns="http://www.w3.org/2000/svg"
      width={21}
      height={21}
      viewBox="0 0 18 18"
    >
      <path
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19.35 19.35l-5.68-5.68 5.68 5.68zM8.31 15.618A7.31 7.31 0 1 1 8.31 1a7.31 7.31 0 0 1 0 14.619z"
      />
    </svg>
  </button>
</div>
}

export const OpenButton = ({navigationOpen, handleSetNavigationIsOpen}) => {
  return (
    <>
    {/* <NavTriggerComponent /> */}
    <label onClick={handleSetNavigationIsOpen}
      // htmlFor="mobile-navigation"
      className="menu-togglee  ml-4 hover:shadow-xl z-50"
      id="menu-togglee">
      <span aria-label="Close menu"  
      id="menu-togglee" 
      htmlFor="mobile-navigation" 
      className={classNames(navigationOpen ? 'flex  ring-[ring-[var(--google-grey-200)]] dark:bg-slate-800 dark:!text-white dark:hover:ring-white dark:ring-[var(--google-grey-500)]' : 'ring-[var(--google-grey-500)]', " dark:bg-slate-800 dark:!text-white dark:hover:ring-white navTrigger menu-toggle_menuToggle__6OaWw mobile-menu-button_indicator__mGvzn avatar-mobile-menu_button__YEcob hover:ring-1 hover:shadow-xl hover:ring-[#bdbdbd] sm:mr-1 mobile-search-magnifying-glass hover:bg-[#f2f2f2]  dark:bg-slate-800 dark:!text-white dark:hover:ring-white")}
      data-expanded="false" data-testid="mobile-menu/trigger" type="button">
        <div class="menu-toggle_bar__GUd1o dark:!bg-white" data-position="top"></div>
        <div class="menu-toggle_bar__GUd1o dark:bg-white" data-position="bottom"></div>
        <div class="menu-toggle_bar__tree" data-position="middle"></div>
    </span>
    </label>
    </>
   )
}


// function trackActiveSection() {
//   const sections = document.querySelectorAll('section[id]');
//   const nav = document.querySelector('.nav');

//   const scrollHandler = () => {
//     let scrollPosition = window.scrollY + 100;

//     sections.forEach((section) => {
//       const sectionTop = section.offsetTop;
//       const sectionHeight = section.clientHeight;
//       const sectionId = section.getAttribute('id');

//       if (
//         scrollPosition >= sectionTop &&
//         scrollPosition <= sectionTop + sectionHeight
//       ) {
//         nav.textContent = section.querySelector('h2').textContent;
//       }
//     });
//   };

//   window.addEventListener('scroll', scrollHandler);

//   // Clean up the event listener on component unmount
//   return () => {
//     window.removeEventListener('scroll', scrollHandler);
//   };
// }
// function trackActiveSection() {  --- WORKS
//   const sections = document.querySelectorAll('section[id]');
//   const currentSection = document.getElementById('current-section');

//   const scrollHandler = () => {
//     let scrollPosition = window.scrollY + 100;

//     sections.forEach((section) => {
//       const sectionTop = section.offsetTop;
//       const sectionHeight = section.clientHeight;
//       const sectionId = section.getAttribute('id');

//       if (
//         scrollPosition >= sectionTop &&
//         scrollPosition <= sectionTop + sectionHeight
//       ) {
//         currentSection.textContent = section.querySelector('h2').textContent;
//       }
//     });
//   };

//   window.addEventListener('scroll', scrollHandler);

//   // Clean up the event listener on component unmount
//   return () => {
//     window.removeEventListener('scroll', scrollHandler);
//   };
// }
// function trackActiveSection() { GREEAT 
//   const sections = document.querySelectorAll('section[id]');
//   const currentSection = document.getElementById('current-section');

//   const scrollHandler = () => {
//     let scrollPosition = window.scrollY + 100;

//     sections.forEach((section) => {
//       const sectionTop = section.offsetTop;
//       const sectionHeight = section.clientHeight;
//       const sectionId = section.getAttribute('id');

//       if (
//         scrollPosition >= sectionTop &&
//         scrollPosition <= sectionTop + sectionHeight
//       ) {
//         currentSection.textContent = section.querySelector('h2').textContent;
//       }
//     });
//   };

//   window.addEventListener('scroll', scrollHandler);

//   // Clean up the event listener on component unmount
//   return () => {
//     window.removeEventListener('scroll', scrollHandler);
//   };
// }

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
export const Header = ({ items }) => {
    const [countryPickerIsOpen, setCountryPickerIsOpen] = useState(false);
    const [navigationOpen, setNavigationOpen] = useState(false);
    const [userSession, setUserSession] = useState(null);
    const [advertissment, setAadvertissment] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  
    const { data: session } = useSession();


    const profileImage = session?.user?.image;

    const [providers, setProviders] = useState(null);
    const [isSlideIn, setIsSlideIn] = useState(true);

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
      // Specify any dependencies if necessary
    }, []);
  
    useEffect(() => {
      const handleScroll = () => {
        const nav = document.querySelector('.nav');
        const placeholder = document.querySelector('.placeholder');
    
        if (nav) {
          const navRect = nav.getBoundingClientRect();
          const navHeight = navRect.height;
    
          if (window.scrollY > 50) {
            nav.classList.add('affix');
            placeholder.style.height = `${navHeight}px`; // Set height of placeholder to match nav height
          } else {
            nav.classList.remove('affix');
            placeholder.style.height = '0'; // Reset placeholder height when nav is not fixed
          }
        }
      };
    
      window.addEventListener('scroll', handleScroll);
    
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
    return (
  
      <div id="MOBIL-NAV-HEADER" className='h-[3em] dark:bg-black z-40'> 
         <ScrollHandlerComponent/>
         {/* <NavTriggerComponent /> */}
      <nav className=" z-40 h-[3.5em] sm:h-[4em] dark:bg-black ">
        <div id="wrapper" className="pt_account_login newsubscription-wrapper">
          {/* <SectionLoader countryPickerIsOpen={countryPickerIsOpen} handleCountryPickerIsOpen={handleCountryPickerIsOpen}/> */}
          <header>
            <meta
              property="og:image"
              content="https://www.sephora.fr/on/demandware.static/-/Sites/default/dw25e2e9ad/1200x600-generique-03.jpg"
            />
            { !navigationOpen &&  advertissment  &&   <div
              className="persistent-banner row"
              style={{
                color: "rgb(0, 0, 0)",
                background:
                  "none 0% 0% / auto repeat scroll padding-box border-box rgb(248, 229, 219)"
              }}
            >
              <div
                className="htmlcontent"
                id="persistent-banner-global-content-wrapper-0"
              >
                <div
                  className="htmlcontent-body !text-black"
                  style={{ backgroundColor: "#F8E5DB", color: "black" }}
                >
                  {" "}
                  <a className="text-black dark:text-white"
                    href="https://www.sephora.fr/promotion-exclu-web-all/"
                    style={{ color: "black", width: "100%" }}
                  >
                    <strong>Offre fidélité</strong> : <strong>-25%</strong> sur une
                    sélection de produits !
                  </a>
                </div>
              </div>
            </div>}
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

            {/* <div class="placeholder"></div> */}
          {/*    <div className="nav row desktop-header show-for-mlarge align-justify w-full">
            <div className={`${isSlideIn ? 'slide-in' : ''}`}>
            <h2 id="current-section" className="px-12 text-h2 text-white overlayed-text overlayed-text-shadow ">MASSI</h2>
            </div>
                
              <div className="language-search-wrapper">
                <div className="header-item header-layer header-item-change-site show-for-mlarge">
                 <LanguagePickerIcon handleCountryPickerIsOpen={handleCountryPickerIsOpen}/> 
                </div>
                <nav id="main-navigation" class="header__primary" role="navigation" aria-label="navigation principale">
                
                
               </nav>
             
              </div>
              
           <div className=" sm:inline-flex ">
            {!userSession ? 
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
            <a  href="#" className="!p-2 text-gray-400 hover:text-gray-500 lg:!ml-4">
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
           
           {isProfileMenuOpen && (
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
           )}
          </div>
             </> 
         
            }
            
        
         
               <NavbarHeaderUserFlyoutComponent />
                <span className="background-overlay" />
             
               
              </div>
            </div> */}
            <div id="agent-banner-placeholder" />
            <div className="global-search-popin">
              <div className="search-popin"></div>
              <span className="search-popin-overlay" />
            </div>
            <div
              id="sessionData"
              className="hide"
              data-customer-authenticated="false"
            />
          </header>
          <input
            id="mobile-navigation"
            type="checkbox"
            className="hide"
            autoComplete="off"
          />
        <MobileSideNavigation  navigationOpen={navigationOpen} handleSetNavigationIsOpen={handleSetNavigationIsOpen}/>
          <label className="mobile-background" htmlFor="mobile-navigation" onClick={handleSetNavigationIsOpen} />
        {/* <SomeNavigationIcons/> */}
        
          <div className="back-to-top-btn">
            <div className="arrow" />
          </div>
        </div>
        <iframe
          src="about:blank"
          height={0}
          width={0}
          tabIndex={-1}
          title="empty"
          className="hidden"
          style={{ display: "none" }}
        />
        <form id="smt-q-form" style={{ display: "none" }} noValidate="novalidate">
          <input type="hidden" name="Quantity" defaultValue={1} />
          <input type="hidden" name="cartAction" defaultValue="add" />
          <input type="hidden" name="pid" defaultValue="" />
          <input type="submit" />
        </form>
       <CountrySelector countryPickerIsOpen={countryPickerIsOpen} handleCountryPickerIsOpen={handleCountryPickerIsOpen}/>
        <div
          role="log"
          aria-live="assertive"
          aria-relevant="additions"
          className="ui-helper-hidden-accessible"
        />
        <div
          role="status"
          aria-live="assertive"
          aria-relevant="additions"
          className="ui-helper-hidden-accessible"
        />
        <BottomTabs user={userSession}/>
   </nav>
   </div>
     
      
      )

}
export const SomeNavigationIcons = ()=> {
    return  <div className="" id="hidden-icons">
    <svg id="CLOSE-ICON"
      className="svg-inline close-icon"
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.92781 10.3431C8.53729 9.95257 8.53729 9.3194 8.92781 8.92888C9.31833 8.53836 9.9515 8.53836 10.342 8.92888L23.0699 21.6568C23.4605 22.0473 23.4605 22.6805 23.0699 23.071C22.6794 23.4615 22.0463 23.4615 21.6557 23.071L8.92781 10.3431Z"
        fill="black"
      />
      <path
        d="M10.3419 23.0712C9.95135 23.4617 9.31818 23.4617 8.92766 23.0712C8.53713 22.6807 8.53713 22.0475 8.92766 21.657L21.6556 8.92908C22.0461 8.53855 22.6793 8.53855 23.0698 8.92908C23.4603 9.3196 23.4603 9.95277 23.0698 10.3433L10.3419 23.0712Z"
        fill="black"
      />
    </svg>
    <svg
      className="svg-inline pin-icon"
      width={65}
      height={71}
      viewBox="0 0 65 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_925_26149)">
        <g filter="url(#filter1_d_925_26149)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 30.1322C8 16.8133 18.8479 6 32.2458 6C45.6464 6 56.4917 16.8134 56.4917 30.1322C56.4917 34.6557 54.5089 39.3372 50.9065 44.1309C47.2977 48.9329 41.9557 53.9933 34.9609 59.3203C34.1831 59.9128 33.2303 60.2361 32.2471 60.2361C31.2638 60.2361 30.3109 59.9127 29.5331 59.3202C22.5372 53.9933 17.1946 48.9329 13.5856 44.1309C9.98273 39.3372 8 34.6557 8 30.1322Z"
            fill="white"
          />
          <path
            d="M34.3551 58.5248L34.355 58.5248C33.7509 58.9849 33.0109 59.2361 32.2471 59.2361C31.4833 59.2361 30.7431 58.9849 30.139 58.5247L30.1389 58.5246C23.1829 53.2281 17.9183 48.2313 14.385 43.5301C10.8545 38.8326 9 34.3592 9 30.1322C9 17.3695 19.3962 7 32.2458 7C45.098 7 55.4917 17.3696 55.4917 30.1322C55.4917 34.3592 53.6372 38.8326 50.107 43.5301C46.574 48.2313 41.3099 53.2281 34.3551 58.5248Z"
            stroke="black"
            strokeWidth={2}
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M34.4984 32.7958C34.5918 38.2288 30.5234 42 30.5234 42C32.9424 36.7389 30.6782 34.007 29.7185 29.5156C28.4577 23.6091 33.0644 18 33.0644 18C30.42 23.0518 34.4446 29.6345 34.4984 32.7958Z"
          fill="black"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_925_26149"
          x={0}
          y={0}
          width="64.4917"
          height="70.2361"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={4} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_925_26149"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_925_26149"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_925_26149"
          x={0}
          y={0}
          width="64.4917"
          height="70.2361"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={4} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_925_26149"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_925_26149"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
    <svg
      className="svg-inline pin-icon-active"
      width={65}
      height={71}
      viewBox="0 0 65 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_925_26379)">
        <g filter="url(#filter1_d_925_26379)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 30.1322C8 16.8133 18.8479 6 32.2458 6C45.6464 6 56.4917 16.8134 56.4917 30.1322C56.4917 34.6557 54.5089 39.3372 50.9065 44.1309C47.2977 48.9329 41.9557 53.9933 34.9609 59.3203C34.1831 59.9128 33.2303 60.2361 32.2471 60.2361C31.2638 60.2361 30.3109 59.9127 29.5331 59.3202C22.5372 53.9933 17.1946 48.9329 13.5856 44.1309C9.98273 39.3372 8 34.6557 8 30.1322Z"
            fill="black"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M34.4984 32.7958C34.5918 38.2288 30.5234 42 30.5234 42C32.9424 36.7389 30.6782 34.007 29.7185 29.5156C28.4577 23.6091 33.0644 18 33.0644 18C30.42 23.0518 34.4446 29.6345 34.4984 32.7958Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_925_26379"
          x={0}
          y={0}
          width="64.4912"
          height="70.2361"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={4} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_925_26379"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_925_26379"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_925_26379"
          x={0}
          y={0}
          width="64.4912"
          height="70.2361"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={2} />
          <feGaussianBlur stdDeviation={4} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_925_26379"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_925_26379"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  </div>

}
const UserIcon = ({session, navigationOpen, profileImage, isProfileMenuOpen, setIsProfileMenuOpen})=> {

//  const  session = true 
  return <>{ navigationOpen  &&
      <div id ="USER-AVATAR" class="mt-[1.2em] sm:mt-[0.5em] mx-4 sm:!my-[1em] !absolute top-0 inset-left-0  mb-1 block flex items-center gap-2 lg:mt-6  xl:top-[0.5em] lg:px-4 lg:px-4 ">
    
           <div>
             <button
               type='button'
               className='dark:bg-gray-600 p-1 ring-2 dark:ring-gray-500 elative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 ring-offset-gray-300 focus:ring-offset-gray-800'
               id='user-menu-button'
               aria-expanded={isProfileMenuOpen}
               aria-haspopup='true'
               onClick={() => setIsProfileMenuOpen((prev) => !prev)}
             >
               <span className='absolute -inset-1.5'></span>
               <span className='sr-only'>Open user menu</span>
              {!session ? 
 <svg className='fill-state-gray-400 dark:fill-state-gray-600  h-6 w-6 ' width="17" height="21" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path fill-rule="evenodd" clip-rule="evenodd" d="M20 22.0741C20 23.1377 19.1046 24 18 24L2 24C1.46957 24 0.960859 23.7971 0.585787 23.4359C0.210714 23.0747 0 22.5849 0 22.0741C0 20.6616 0.243014 19.2573 0.720548 17.9389C1.19805 16.6207 1.90459 15.404 2.81332 14.3648C3.72252 13.3251 4.82059 12.4792 6.05578 11.8941C7.29265 11.3083 8.63412 11 10 11C11.3659 11 12.7073 11.3083 13.9442 11.8941C15.1794 12.4792 16.2775 13.3251 17.1867 14.3648C18.0954 15.404 18.8019 16.6207 19.2795 17.9389C19.757 19.2573 20 20.6616 20 22.0741ZM2.17929 20.1481C2.2805 19.6107 2.42411 19.0836 2.60896 18.5732C3.011 17.4633 3.60028 16.4548 4.34315 15.6054C5.08601 14.7559 5.96793 14.082 6.93853 13.6223C7.90914 13.1625 8.94942 12.9259 10 12.9259C11.0506 12.9259 12.0909 13.1625 13.0615 13.6223C14.0321 14.082 14.914 14.7559 15.6569 15.6054C16.3997 16.4548 16.989 17.4633 17.391 18.5732C17.5759 19.0836 17.7195 19.6107 17.8207 20.1481C17.9396 20.7796 18 21.4251 18 22.0741L2 22.0741C2 21.4251 2.06039 20.7796 2.17929 20.1481Z" fill="currentColor">
   
 </path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 8C11.6569 8 13 6.65685 13 5C13 3.34315 11.6569 2 10 2C8.34315 2 7 3.34315 7 5C7 6.65685 8.34315 8 10 8ZM10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z" fill="currentColor"></path>
</svg>
               :
               
               <div id="header-link header-link-account"
               class="ring-1 rounded-full p-1.5 px-2 ring-black bg-[#eca57a]">
                <Image
                className={classNames(session ?  "ring-orange-300" : "ring-gray-400", "h-9 w-9 sm:w-12 sm:w-12 rounded-full object-cover ring-2")}
                src={profileImage || profileDefault}
                alt="user icon"
                width={64}
                height={64}
              />
                {/* <span class="header-link-text" data-cs-mask="">My Account</span> */}
                {/* <span id="USER-ICON" class="header-link-icon">
                  <svg width="17" height="21" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20 22.0741C20 23.1377 19.1046 24 18 24L2 24C1.46957 24 0.960859 23.7971 0.585787 23.4359C0.210714 23.0747 0 22.5849 0 22.0741C0 20.6616 0.243014 19.2573 0.720548 17.9389C1.19805 16.6207 1.90459 15.404 2.81332 14.3648C3.72252 13.3251 4.82059 12.4792 6.05578 11.8941C7.29265 11.3083 8.63412 11 10 11C11.3659 11 12.7073 11.3083 13.9442 11.8941C15.1794 12.4792 16.2775 13.3251 17.1867 14.3648C18.0954 15.404 18.8019 16.6207 19.2795 17.9389C19.757 19.2573 20 20.6616 20 22.0741ZM2.17929 20.1481C2.2805 19.6107 2.42411 19.0836 2.60896 18.5732C3.011 17.4633 3.60028 16.4548 4.34315 15.6054C5.08601 14.7559 5.96793 14.082 6.93853 13.6223C7.90914 13.1625 8.94942 12.9259 10 12.9259C11.0506 12.9259 12.0909 13.1625 13.0615 13.6223C14.0321 14.082 14.914 14.7559 15.6569 15.6054C16.3997 16.4548 16.989 17.4633 17.391 18.5732C17.5759 19.0836 17.7195 19.6107 17.8207 20.1481C17.9396 20.7796 18 21.4251 18 22.0741L2 22.0741C2 21.4251 2.06039 20.7796 2.17929 20.1481Z" fill="black">
                      
                    </path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 8C11.6569 8 13 6.65685 13 5C13 3.34315 11.6569 2 10 2C8.34315 2 7 3.34315 7 5C7 6.65685 8.34315 8 10 8ZM10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z" fill="black"></path>
                </svg> */}
                {/* <div class="tooltip-container-login hide">
                <span class="tooltip-text">Profitez de vos offres et <span >vos bons plans</span></span>
                <span class="tooltip-close"></span></div> 
                </span>*/}
                </div>
}
              
             </button>
           </div>
        
  
      </div> 
    } </>  
  }

 

// function Example() {
//     return <Button href="/get-started" color="dark" shape="roundedFull" iconName={"addIcon"}/>
//   }



export const HeaderNavigationLinks = ({ dataToMap }) => {
  console.log("HeaderNavigationLinks-dataToMap", dataToMap)
  return (
    <div className=''>
      <div className="nav-level-3 js-nav-3 active C304" data-cat-id="C304" data-default-active="true" data-tc-category-name="body and bath">
      </div>
      <div className="nav-top-category tc-top-category is-dropdown-submenu-parent opens-right" data-tc-category-name="hair" role="menuitem" aria-haspopup="true" aria-label="cheveux" data-is-click="false">
        {/* <a className="js-tc-nav-click-event top-category-link text-center has-sub-menu " style={{ '-topCategoryLinkColor': 'black' }} href="https://www.sephora.fr/shop/cheveux-c307/?listview=true">
          Cheveuxxxx
        </a> */}
        <ul className="top-category-menu menu-vertical menu submenu is-dropdown-submenu first-sub vertical fully-loaded" data-submenu role="menubar" style={{}}>
          <div className="nav-level-3-wrapper">
          <MobileMenuLinks categories={navigation}  /> 
          </div>
        </ul>
      </div>

    </div>
  );
};

// export default HeaderNavigationLinks;

// translate-x-fullnav-menu-mobile   ${navigationOpen ? 'translate-x-0 transition duration-150 ease-in-out': 'translate-x-full'}
export const MobileSideNavigation = ({sessiopn,navigationOpen,handleSetNavigationIsOpen,  handleCountryPickerIsOpen}) => {
    return   ( <nav id="mobile-navigation" className={clsx(`nav-menu-mobile  !top-[1em] mt-[2.50em] sm:mt-[3.5em] dark:bg-black`)} role="navigation">
                <div className="nav-content">
                  <div className="language-select-wrapper country-language-wrapper">
                
                    <div className="arrow show-for-mlarge" />
                  </div>
                  
                  <HeaderNavigationLinks  dataToMap={navigation}/>
                  {/* <FancyLoader /> */}
                  <div className='menu-wrapper'>
                    {/* <FAQ /> */}
                  </div>
                </div>
            
          {/* ADD ITEM or CREATE BUTTON */}
          {/* <ul className="absolute bottom-0 vertical menu accordion-menu access-menu">
                <li className="access-menu-item mobile-header show-for-small hide-for-mlarge mr-0">
                  <div className="selected-site dropdown-with-arrow language-selector-arrow custom-language-selector-arrow burger-menu-entry js-show-languages-modal top-left">
                    <UserIcon navigationOpen={navigationOpen} user={user}/>
                    <input type="hidden" id="selectedCountryID" defaultValue="FR" />
                    <input
                      type="hidden"
                      id="selectedCountryName"
                      defaultValue="Customer - Name"
                    />     
                    <div className='ml-4' style={{"justify-content": "flex-end"}}> 
                    <OpenButton/>
                  

                    <Example/>
                    </div><span className='top-right '>
                      
              
                  </span>   
                </div>
                
                </li>
              </ul> */}
            </nav>)
}



export const DesktopSearchInput =() => {
    return   <div className="header-search search-auto-complete">
    <div
      className="load-algolia algolia-search-input-box"
      data-fake-searchbar-needed="true"
    >
      <span className="algolia-fake-search-placeholder">
        <svg
          className="svg-inline search-icon"
          xmlns="http://www.w3.org/2000/svg"
          width={21}
          height={21}
          viewBox="0 0 21 21"
        >
          {" "}
          <path
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.35 19.35l-5.68-5.68 5.68 5.68zM8.31 15.618A7.31 7.31 0 1 1 8.31 1a7.31 7.31 0 0 1 0 14.619z"
          />{" "}
        </svg>
        Search for a product or a brand…...
      </span>
    </div>
  </div>
}

const NavbarHeaderUserFlyoutComponentLinks = [

]
export const NavbarHeaderUserFlyoutComponent =({session})=> {
    return  ( 
      <div className="flex z-20 bg-[whitesmoke]">   
        <DesktopSiteMapFlyout resources={paradigm} latestBlogs={latestBlogs}/>
        <DesktopAccountLinksFlyout resources={UserFlyoutLinks} latestBlogs={latestBlogs} session={session}/>
        {/* <DesktopSectionFlyout resources={UserFlyoutLinks}/> */}
    
         </div>)
}

// const LogoMobile = ({navigationOpen, user}) => {
//   // alert("NavigationOpen" + navigationOpen)
//     return <>{navigationOpen  && !user ?
//     <div className="logo-mobile"> 
//      <text x="51%" y="50%" text-anchor="middle" fontSize="48" fill="#000000"  className={classNames(`${navigationOpen  ? "text-black" : "text-white", "LogoText" }`)}>
//       MASSI</text>
// </div> : <div className="logo-mobile"> 
//      <text x="50%" y="50%" text-anchor="middle" fontSize="48" fill="#000000"  className={classNames(`${!navigationOpen  &&  "text-white LogoText" }`)}>
//       MAssSSI</text>
// </div>}</>
//     //  <text x="50%" y="50%" text-anchor="middle" fontSize="48" fill="#000000" font-family="Arial" className={classNames(`${navigationOpen  ? "text-black" : "text-white","LogoText" }`)}></text>


// }



export  const LogoMobile = ({ navigationOpen, session }) => {
  const [logoColor, setLogoColor] = useState('text-white');

  useEffect(() => {
    console.log("NAVIGATIO-LOGOB",  navigationOpen, "USER-->", session);
    if (!navigationOpen && !session) {
      setLogoColor('text-black !ml-4 dark:text-white');
    }

     else {
      setLogoColor('text-black dark:text-white');
    }
  }, [navigationOpen, session]);
// nav-center xl::w-[88vw]
  return (
  <> { !navigationOpen && <div className=' -ml-4 justify-center nav-item '>
    <div className="logo-mobile mt-[1em] sm:pt-0 sm:mt-0">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122 32" fill="none" class="w1">
  <g>
    <path d="M4.46748 22.876C3.01762 22.1257 1.9119 21.0604 1.14714 19.671C0.382381 18.2847 0 16.6637 0 14.808C0 12.9524 0.385567 11.3314 1.15989 9.94504C1.93421 8.5587 3.05586 7.49039 4.53121 6.7401C6.00657 5.98981 7.77189 5.61621 9.82719 5.61621C10.6875 5.61621 11.5352 5.69649 12.37 5.86013C13.2049 6.02069 13.9537 6.26461 14.6229 6.58881V9.70421H14.5177C13.8486 9.33061 13.1252 9.04963 12.3445 8.86129C11.5638 8.67295 10.8214 8.58032 10.1172 8.58032C8.11604 8.58032 6.53871 9.11756 5.38838 10.189C4.23806 11.2604 3.6613 12.8011 3.6613 14.8111C3.6613 16.8212 4.22212 18.3341 5.34696 19.4086C6.4718 20.48 8.00769 21.0172 9.95784 21.0172C10.713 21.0172 11.481 20.903 12.2649 20.6714C13.0456 20.4429 13.7976 20.1125 14.5177 19.6895H14.6229V22.8296C13.2176 23.6139 11.567 24.0029 9.66786 24.0029C7.64762 24.0029 5.91416 23.6293 4.4643 22.879L4.46748 22.876Z" fill="currentColor"></path>
    <path d="M26.4843 8.88615V13.3292H34.39V16.1112H26.4843V20.7333H34.97V23.6943H23.0078V5.92513H34.97V8.88615H26.4843ZM30.4356 0H34.441L30.7255 3.72675H27.6952L30.4356 0Z" fill="currentColor"></path>
    <path d="M46.5417 22.876C45.0918 22.1257 43.9861 21.0604 43.2214 19.671C42.4566 18.2847 42.0742 16.6637 42.0742 14.808C42.0742 12.9524 42.4598 11.3314 43.2341 9.94504C44.0084 8.5587 45.1301 7.49039 46.6054 6.7401C48.0808 5.98981 49.8461 5.61621 51.9014 5.61621C52.7618 5.61621 53.6094 5.69649 54.4442 5.86013C55.2791 6.02069 56.0279 6.26461 56.6971 6.58881V9.70421H56.592C55.9228 9.33061 55.1994 9.04963 54.4188 8.86129C53.6381 8.67295 52.8956 8.58032 52.1914 8.58032C50.1903 8.58032 48.6129 9.11756 47.4626 10.189C46.3123 11.2604 45.7355 12.8011 45.7355 14.8111C45.7355 16.8212 46.2963 18.3341 47.4212 19.4086C48.546 20.48 50.0819 21.0172 52.0321 21.0172C52.7873 21.0172 53.5552 20.903 54.3391 20.6714C55.1198 20.4429 55.8718 20.1125 56.592 19.6895H56.6971V22.8296C55.2919 23.6139 53.6412 24.0029 51.7421 24.0029C49.7218 24.0029 47.9884 23.6293 46.5385 22.879L46.5417 22.876Z" fill="currentColor"></path>
    <path d="M89.6601 8.88582V13.3289H97.5658V16.1108H89.6601V20.733H98.1457V23.694H86.1836V5.9248H98.1457V8.88582H89.6601Z" fill="currentColor"></path>
    <path d="M117.317 7.00856C118.668 7.73106 119.697 8.76232 120.398 10.0993C121.099 11.4362 121.453 13.0047 121.453 14.8109C121.453 16.6172 121.102 18.1857 120.398 19.5226C119.694 20.8596 118.668 21.8877 117.317 22.6133C115.962 23.3358 114.347 23.6971 112.467 23.6971H105.695V5.9248H112.467C114.347 5.9248 115.962 6.28606 117.317 7.00856ZM116.38 19.2015C117.32 18.1981 117.788 16.7345 117.788 14.8109C117.788 12.8874 117.317 11.4238 116.38 10.4204C115.44 9.41689 114.136 8.91361 112.467 8.91361H109.172V20.7083H112.467C114.136 20.7083 115.44 20.205 116.38 19.2015Z" fill="currentColor"></path>
    <path d="M74.9229 16.4165C76.0636 15.9904 76.924 15.3451 77.5039 14.4775C78.0839 13.6099 78.3739 12.5539 78.3739 11.3127C78.3739 9.55892 77.7844 8.22199 76.6085 7.30497C75.4327 6.38486 73.6578 5.9248 71.2871 5.9248H64.6719V23.694H68.1515V18.831L71.7587 17.5435L75.1587 23.6909H78.9793L74.9229 16.4134V16.4165ZM68.1515 13.9526V8.91052H71.2871C72.482 8.91052 73.3519 9.09887 73.8968 9.47247C74.4417 9.84607 74.7126 10.4852 74.7126 11.3868C74.7126 11.8808 74.6297 12.4242 74.3557 12.8627C74.0147 13.403 73.4029 13.6099 72.8166 13.8198L68.1515 15.484V13.9557V13.9526Z" fill="currentColor"></path>
  </g>
</svg>
      {/* <text
        x="51%"
        y="50%"
        textAnchor="middle"
        fontSize="48"
        fill="#000000"
        className={classNames('LogoText', logoColor)}
      >
        MASSI
      </text> */}
    </div></div>}</>
  );
};
export default Header


const menuItems = [
    {
      itemName: "Se connecter",
      href: "https://www.sephora.fr/connexion/",
      svg: (
        <svg
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
      ),
    },
    {
      itemName: "Mon beauty compte",
      href: "https://www.sephora.fr/mon-compte/",
      svg: (
        <svg
          className="svg-inline account-icon color-red"
          xmlns="http://www.w3.org/2000/svg"
          width={21}
          height={22}
          viewBox="0 0 21 22"
        >
          <path d="M9.9 10.5C6.2 10.5 2.8 12.7 1.4 16.2L0.7 18.1C0.6 18.4 0.5 18.7 0.5 19 0.5 20.4 1.6 21.5 3 21.5L18 21.5C18.3 21.5 18.6 21.4 18.9 21.3 20.2 20.8 20.8 19.3 20.3 18.1L19.6 16.2C18.2 12.7 14.8 10.5 11.1 10.5L9.9 10.5ZM10.2 0.5C8.3 0.5 6.7 2.1 6.7 4L6.7 4.4C6.7 6.3 8.3 7.9 10.2 7.9L10.7 7.9C12.6 7.9 14.2 6.3 14.2 4.4L14.2 4C14.2 2.1 12.6 0.5 10.7 0.5L10.2 0.5Z" />
        </svg>
      ),
    },
    {
      itemName: "Mes achats",
      href: "https://www.sephora.fr/mes-achats/",
      svg: (
        <svg
          className="svg-inline basket-icon color-red"
          xmlns="http://www.w3.org/2000/svg"
          width={22}
          height={18}
          viewBox="0 0 22 18"
        >
          <path d="M0.7 5.5L4.4 17.2 18.2 17.2 21.3 5.5 0.7 5.5Z" />
          <path d="M6.5 5.9C7 2.5 8.5 0.9 11.1 0.9 13.8 0.9 15.2 2.5 15.5 5.9" />
        </svg>
      ),
    },
    {
      itemName: "Retours & échanges",
      href: "https://www.sephora.fr/retours-exchanges/",
      svg: (
        <svg
          width={21}
          height={20}
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.3333 7.66663H7.66667C7.02467 7.66663 6.5 8.1913 6.5 8.8333V12.1666C6.5 12.8086 7.02467 13.3333 7.66667 13.3333H20.3333C20.9753 13.3333 21.5 12.8086 21.5 12.1666V8.8333C21.5 8.1913 20.9753 7.66663 20.3333 7.66663ZM2.16667 16.5C1.18133 16.5 0.375 17.3063 0.375 18.2916C0.375 19.2769 1.18133 20.0833 2.16667 20.0833H18.8333C19.8187 20.0833 20.625 19.2769 20.625 18.2916C20.625 17.3063 19.8187 16.5 18.8333 16.5H2.16667ZM13.8333 0.75H7.16667C6.52317 0.75 6 1.27317 6 1.91663V4.66663H14V1.91663C14 1.27317 13.4768 0.75 13.8333 0.75Z"
            fill="#222B45"
          />
        </svg>
      ),
    },
    {
      itemName: "Echantillons offerts",
      href: "https://www.sephora.fr/e-shop/landing",
      svg: (
        <svg
          width={22}
          height={21}
          viewBox="0 0 22 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.375 0.75C0.375 0.336579 0.711579 0 1.125 0H20.875C21.2884 0 21.625 0.336579 21.625 0.75V8.25H20.125V1.5H1.875V8.25H0.375V0.75ZM0.375 9.75C0.375 9.33658 0.711579 9 1.125 9H3V18.75H0.375C0.336579 18.75 0.3125 18.7322 0.296572 18.7121C0.280644 18.6921 0.272949 18.6714 0.27511 18.6504L0.703583 10.9004C0.711595 10.8551 0.732838 10.8128 0.764618 10.7786C0.796398 10.7445 0.836203 10.7206 0.879024 10.7092C0.921845 10.6978 0.966204 10.6995 1.00773 10.7142C1.04926 10.7289 1.08673 10.7566 1.11658 10.7945C1.14642 10.8324 1.16769 10.8792 1.17757 10.9304L1.60411 18.6804C1.61213 18.7257 1.63281 18.768 1.66467 18.8021C1.69653 18.8362 1.73639 18.8601 1.77921 18.8715C1.82203 18.8829 1.8668 18.8819 1.90937 18.8685C1.95195 18.8551 1.99117 18.8297 2.02442 18.7944C2.05767 18.759 2.08378 18.7147 2.10011 18.6652C2.11644 18.6157 2.12249 18.5634 2.11856 18.5111L1.69158 10.7611H20.125V9.75H13.625V11.25H10.375V9.75H3.375V11.25H0.375V9.75ZM21.625 19.5H0.375C0.336579 19.5 0.3125 19.5178 0.296572 19.5379C0.280644 19.558 0.272949 19.5786 0.27511 19.5996L0.703583 27.3496C0.711595 27.3949 0.732838 27.4372 0.764618 27.4714C0.796398 27.5055 0.836203 27.5294 0.879024 27.5408C0.921845 27.5522 0.966204 27.5505 1.00773 27.5358C1.04926 27.5211 1.08673 27.4934 1.11658 27.4555C1.14642 27.4176 1.16769 27.3708 1.17757 27.3196L1.60411 19.5696C1.61213 19.5243 1.63281 19.482 1.66467 19.4479C1.69653 19.4138 1.73639 19.3899 1.77921 19.3785C1.82203 19.3671 1.8668 19.3681 1.90937 19.3815C1.95195 19.3949 1.99117 19.4203 2.02442 19.4556C2.05767 19.491 2.08378 19.5353 2.10011 19.5848C2.11644 19.6343 2.12249 19.6866 2.11856 19.7389L1.69158 27.4889C1.69158 27.6925 1.78864 27.8919 1.96212 28.0632C2.13561 28.2345 2.37599 28.3676 2.63225 28.4436C2.88852 28.5195 3.15021 28.5354 3.40945 28.4899C3.66868 28.4444 3.91653 28.3398 4.13508 28.1866C4.35363 28.0335 4.53717 27.8363 4.67206 27.6087C4.80695 27.3812 4.88867 27.1285 4.91158 26.8666L5.33856 19.1166H20.625L21.054 26.8666C21.077 27.1285 21.1587 27.3812 21.2936 27.6087C21.4285 27.8363 21.612 28.0335 21.8305 28.1866C22.049 28.3398 22.2968 28.4444 22.556 28.4899C22.8153 28.5354 23.077 28.5195 23.3333 28.4436C23.5896 28.3676 23.8301 28.2345 24.0036 28.0632C24.1771 27.8919 24.2742 27.6925 24.2742 27.4889L23.8472 19.7389C23.8432 19.6866 23.8493 19.6343 23.8657 19.5848C23.882 19.5353 23.9081 19.491 23.9413 19.4556C23.9745 19.4203 24.0137 19.3949 24.0563 19.3815C24.0988 19.3681 24.1436 19.3671 24.1864 19.3785C24.2292 19.3899 24.269 19.4138 24.3009 19.4479C24.3328 19.482 24.3535 19.5243 24.3615 19.5696L24.788 27.3196C24.7979 27.3708 24.8192 27.4176 24.849 27.4555C24.8789 27.4934 24.9164 27.5211 24.9579 27.5358C24.9994 27.5505 25.0438 27.5522 25.0866 27.5408C25.1294 27.5294 25.1692 27.5055 25.201 27.4714C25.2328 27.4372 25.254 27.3949 25.262 27.3496L25.6895 19.5996C25.6927 19.5786 25.6849 19.558 25.6691 19.5379C25.6532 19.5178 25.6291 19.5 25.5917 19.5H21.625Z" fill="#222B45" />
        </svg>
      ),
    },
    {
        itemName: "Suivre Ma commande",
        href: "https://www.sephora.fr/track-order",
        svg: (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width={27}
            height={21}
            viewBox="0 0 27 21"
          >
            <g fill="none" fillRule="evenodd">
              <g stroke="#000">
                <g>
                  <g>
                    <g>
                      <g>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.852 6.285V4.833c0-.552.448-1 1-1H24.52c.552 0 1 .448 1 1V19.5c0 .552-.448 1-1 1H9.852c-.552 0-1-.448-1-1v-1.773"
                          transform="translate(-739 -9) translate(15 9) translate(623) translate(72) translate(29)"
                        />
                        <path
                          strokeLinecap="round"
                          d="M5.5 8.667L17.039 8.667M3 12L14.539 12M.5 15.333L12.039 15.333"
                          transform="translate(-739 -9) translate(15 9) translate(623) translate(72) translate(29)"
                        />
                        <path
                          strokeLinejoin="round"
                          d="M14.852.5h4.465c.552 0 1 .448 1 1v2.333l-6.465-.029V1.5c0-.552.448-1 1-1z"
                          transform="translate(-739 -9) translate(15 9) translate(623) translate(72) translate(29)"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        ),
      },
      {
        itemName: "Mon programme de fidélité",
        href: "https://www.sephora.fr/programme-fidelite",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="14"
            viewBox="0 0 19 14"
          >
            <path d="M16.4 14L3.1 14C1.5 14 0 12.7 0 11.2L0 2.6C0 1.2 1.5 0 3.1 0L16.4 0C17.9 0 19 1.2 19 2.6L19 11.2C19 12.7 17.9 14 16.4 14ZM16.4 13C17.3 13 18 12.3 18 11.4L18 2.6C18 1.7 17.3 1 16.4 1L2.8 1C1.9 1 1 1.7 1 2.6L1 11.4C1 12.3 1.9 13 2.8 13L16.4 13ZM9.2 7C8.9 6.1 8.8 4.7 11 3C10.4 3.7 10 4.7 10.9 7C11.5 8.7 10 10.3 9 11C9.4 10.5 10.1 9.6 9.2 7Z" />
          </svg>
        ),
      },
      {
        itemName: "Prendre un rendez-vous",
        href: "https://www.sephora.fr/rdv",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path d="M14 3L16 5H4L6 3H4L3 2V18H17V2L16 3H14ZM14 14V16H12V14H10V16H8V14H6V12H14V14ZM14 10V12H6V10H14ZM8 7V9H6V7H8Z" />
          </svg>
        ),
      },
      {
        itemName: "Mes communications",
        href: "https://www.sephora.fr/communications",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="16"
            viewBox="0 0 24 16"
          >
            <path d="M2 1A1 1 0 0 0 1 2v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm0-1h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm8.783 7.374l-.57.822-9.476-6.57.57-.822 9.476 6.57zm7.53-6.575l.61.792-8.581 6.61-.61-.792 8.581-6.61z" />
          </svg>
        ),
      },
      {
        itemName: "Besoin d'aide",
        href: "https://www.sephora.fr/aide",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
          >
            <path d="M9.5 19C4.3 19 0 14.7 0 9.5 0 4.3 4.3 0 9.5 0 14.7 0 19 4.3 19 9.5 19 14.7 14.7 19 9.5 19ZM9.5 18C14.2 18 18 14.2 18 9.5 18 4.8 14.2 1 9.5 1 4.8 1 1 4.8 1 9.5 1 14.2 4.8 18 9.5 18ZM9 12L10.1 12C10.1 11.2 10.3 10.5 10.8 10 11.7 9.2 12.2 8.7 12.2 7.8 12.2 6.2 11 5.1 9.5 5.1 8.6 5.1 7.7 5.5 7.2 6.2 6.8 6.7 6.6 7.2 6.6 8L7.7 8C7.7 7.5 7.8 7.3 7.9 7.1 8.2 6.7 8.9 6.2 9.5 6.2 10.3 6.2 11 6.9 11 7.8 11 8.2 10.8 8.5 10.2 9.1 9.6 9.7 9.4 10 9.4 10.3L9.3 10C9 10.1 9 10.2 9 10.3 9 10.6 9 11 9.5 11 9.8 11 10 11 10 11L11 11C11 11 11 11 11 11.1 11 11.3 11 11.4 10.9 11.5 10.7 11.7 10.5 11.9 10.2 12 10 12 9.7 12 9.5 12 9ZM8.5 15.4C8.5 15.7 8.3 15.9 8 15.9 7.7 15.9 7.5 15.7 7.5 15.4 7.5 15.1 7.7 14.9 8 14.9 8.3 14.9 8.5 15.1 8.5 15.4Z" />
          </svg>
        ),
      },
      { itemName: "Mes Information",
      href: "https://www.sephora.fr/aide",
        svg:( <svg
            className="filter-icon color-red"
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
          >
            <path
              fill="#000"
              d="M18.4 11.9l-.7-.5-.1-.2V8.8l.1-.2.7-.5c.7-.5.9-1.3.4-2l-1.3-2.2c-.4-.7-1.2-.9-1.9-.6a3 3 0 0 0-.8.4h-.2c-.6-.5-1.3-.9-2-1.2a.2.2 0 0 1-.2-.2l-.1-.9C12.2.6 11.6 0 10.8 0H8.1c-.7 0-1.2.5-1.4 1.2l-.1 1-.1.2c-.7.3-1.4.7-2 1.2-.1.1-.2.1-.2 0l-.9-.3-.5-.2c-.7 0-1.1.3-1.4.7L.2 6.1c-.4.7-.2 1.5.4 2l.7.5.1.2v2.4l-.1.2-.6.4c-.7.5-.9 1.3-.5 2L1.5 16c.4.7 1.2 1 1.9.6l.7-.3h.3c.6.5 1.3.9 2 1.2l.2.2.1.9c.1.7.7 1.3 1.4 1.3h2.7c.7 0 1.3-.5 1.4-1.2l.1-1 .1-.2c.7-.3 1.4-.7 2-1.2.1-.1.1-.1.2 0l.9.4c.7.3 1.4 0 1.8-.6l1.3-2.3c.6-.7.4-1.5-.2-1.9zm-.5 1.5l-1.2 2.2c-.2.4-.4.4-.8.3l-1.3-.6h-.2a7 7 0 0 1-2.8 1.6l-.1.2-.1 1.2v.3c0 .3-.2.4-.5.4H8.1c-.3 0-.5-.2-.5-.5L7.5 17c0-.1 0-.2-.2-.2-1-.3-1.9-.9-2.7-1.6h-.3l-1.3.6c-.3.1-.6.1-.7-.2L1 13.4c-.2-.3-.1-.5.2-.7l1.2-.8.1-.2a8.6 8.6 0 0 1 0-3.2l-.1-.2-1.2-1c-.3-.2-.3-.4-.1-.7l1.3-2.2c.1-.3.4-.4.7-.3l1.4.6.7-.5c.7-.5 1.4-.9 2.2-1.1l.2-.2.1-1.4c0-.3.2-.5.5-.5h2.6c.3 0 .5.2.5.5l.1 1.5.2.2c1 .3 1.9.9 2.7 1.6h.3l1.3-.6c.3-.1.6-.1.7.2l1.3 2.3c.2.3.1.5-.2.7l-1.2.8-.1.2c.2 1.1.2 2.1 0 3.2l.1.2 1.2.8c.3.2.4.5.2.8zM9.5 6a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4c.1-2.2-1.8-4-4-4zm0 7.1A3.1 3.1 0 0 1 6.4 10c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1z"
            />
          </svg>)
      }
    ];
    

  

    const BottomTabs =({user})=> {
      console.log("BOTTOM-TABS", user);
    return  ( 
    <div class="w-full ">
<section id="bottom-navigation" class="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"/> 
	<section id="bottom-navigation" class="block fixed inset-x-0 bottom-0 z-10 bg-white shadow">
		<div id="tabs" class="flex justify-between">
			<a href="#" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
				<svg width="25" height="25" viewBox="0 0 42 42" class="inline-block mb-1">
			    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
			        <path d="M21.0847458,3.38674884 C17.8305085,7.08474576 17.8305085,10.7827427 21.0847458,14.4807396 C24.3389831,18.1787365 24.3389831,22.5701079 21.0847458,27.6548536 L21.0847458,42 L8.06779661,41.3066256 L6,38.5331279 L6,26.2681048 L6,17.2542373 L8.88135593,12.4006163 L21.0847458,2 L21.0847458,3.38674884 Z" fill="currentColor" fill-opacity="0.1"></path>
			        <path d="M11,8 L33,8 L11,8 Z M39,17 L39,36 C39,39.3137085 36.3137085,42 33,42 L11,42 C7.6862915,42 5,39.3137085 5,36 L5,17 L7,17 L7,36 C7,38.209139 8.790861,40 11,40 L33,40 C35.209139,40 37,38.209139 37,36 L37,17 L39,17 Z" fill="currentColor"></path>
			        <path d="M22,27 C25.3137085,27 28,29.6862915 28,33 L28,41 L16,41 L16,33 C16,29.6862915 18.6862915,27 22,27 Z" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.1"></path>
			        <rect fill="currentColor" transform="translate(32.000000, 11.313708) scale(-1, 1) rotate(-45.000000) translate(-32.000000, -11.313708) " x="17" y="10.3137085" width="30" height="2" rx="1"></rect>
			        <rect fill="currentColor" transform="translate(12.000000, 11.313708) rotate(-45.000000) translate(-12.000000, -11.313708) " x="-3" y="10.3137085" width="30" height="2" rx="1"></rect>
			    </g>
				</svg>
				<span class="tab tab-home block text-xs">Home</span>
			</a>
			<a href="#" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
				<svg width="25" height="25" viewBox="0 0 42 42" class="inline-block mb-1">
			    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
		        <path d="M14.7118754,20.0876892 L8.03575361,20.0876892 C5.82661462,20.0876892 4.03575361,18.2968282 4.03575361,16.0876892 L4.03575361,12.031922 C4.03575361,8.1480343 6.79157254,4.90780265 10.4544842,4.15995321 C8.87553278,8.5612583 8.1226025,14.3600511 10.9452499,15.5413938 C13.710306,16.6986332 14.5947501,18.3118357 14.7118754,20.0876892 Z M14.2420017,23.8186831 C13.515543,27.1052019 12.7414284,30.2811559 18.0438552,31.7330419 L18.0438552,33.4450645 C18.0438552,35.6542035 16.2529942,37.4450645 14.0438552,37.4450645 L9.90612103,37.4450645 C6.14196811,37.4450645 3.09051926,34.3936157 3.09051926,30.6294627 L3.09051926,27.813861 C3.09051926,25.604722 4.88138026,23.813861 7.09051926,23.813861 L14.0438552,23.813861 C14.1102948,23.813861 14.1763561,23.8154808 14.2420017,23.8186831 Z M20.7553776,32.160536 C23.9336213,32.1190063 23.9061943,29.4103976 33.8698747,31.1666916 C34.7935223,31.3295026 35.9925894,31.0627305 37.3154077,30.4407183 C37.09778,34.8980343 33.4149547,38.4450645 28.9036761,38.4450645 C24.9909035,38.4450645 21.701346,35.7767637 20.7553776,32.160536 Z" fill="currentColor" opacity="0.1"></path>
		        <g transform="translate(2.000000, 3.000000)">
		            <path d="M8.5,1 C4.35786438,1 1,4.35786438 1,8.5 L1,13 C1,14.6568542 2.34314575,16 4,16 L13,16 C14.6568542,16 16,14.6568542 16,13 L16,4 C16,2.34314575 14.6568542,1 13,1 L8.5,1 Z" stroke="currentColor" stroke-width="2"></path>
		            <path d="M4,20 C2.34314575,20 1,21.3431458 1,23 L1,27.5 C1,31.6421356 4.35786438,35 8.5,35 L13,35 C14.6568542,35 16,33.6568542 16,32 L16,23 C16,21.3431458 14.6568542,20 13,20 L4,20 Z" stroke="currentColor" stroke-width="2"></path>
		            <path d="M23,1 C21.3431458,1 20,2.34314575 20,4 L20,13 C20,14.6568542 21.3431458,16 23,16 L32,16 C33.6568542,16 35,14.6568542 35,13 L35,8.5 C35,4.35786438 31.6421356,1 27.5,1 L23,1 Z" stroke="currentColor" stroke-width="2"></path>
		            <path d="M34.5825451,33.4769886 L38.3146092,33.4322291 C38.8602707,33.4256848 39.3079219,33.8627257 39.3144662,34.4083873 C39.3145136,34.4123369 39.3145372,34.4162868 39.3145372,34.4202367 L39.3145372,34.432158 C39.3145372,34.9797651 38.8740974,35.425519 38.3265296,35.4320861 L34.5944655,35.4768456 C34.048804,35.4833899 33.6011528,35.046349 33.5946085,34.5006874 C33.5945611,34.4967378 33.5945375,34.4927879 33.5945375,34.488838 L33.5945375,34.4769167 C33.5945375,33.9293096 34.0349773,33.4835557 34.5825451,33.4769886 Z" fill="currentColor" transform="translate(36.454537, 34.454537) rotate(-315.000000) translate(-36.454537, -34.454537) "></path>
		            <circle stroke="currentColor" stroke-width="2" cx="27.5" cy="27.5" r="7.5"></circle>
		        </g>
		    	</g>
				</svg>
				<span class="tab tab-kategori block text-xs">Category</span>
			</a>
			<a href="#" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
				<svg width="25" height="25" viewBox="0 0 42 42" class="inline-block mb-1">
			    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
		        	<path d="M20.5890101,0.254646884 C12.8696785,5.50211755 8.0025785,14.258415 14.1941217,18.8708225 C23.16683,25.5550669 13.3362326,40.2698884 33.1021758,38.4149164 C29.6814884,40.8311956 25.5065164,42.2507054 21,42.2507054 C9.40202025,42.2507054 0,32.8486852 0,21.2507054 C0,9.79003409 9.18071714,0.473634138 20.5890101,0.254646884 Z" fill="currentColor" opacity="0.1"></path>
		        	<path d="M25.9500282,20.3643496 L22.4308312,38.2677802 C22.3775703,38.5387376 22.1147395,38.7152155 21.8437821,38.6619546 C21.6570955,38.6252584 21.507413,38.4857901 21.4576354,38.3021581 L16.5951895,20.3643496 L20.099732,4.44663907 C20.1385204,4.27046145 20.2692032,4.12883813 20.4417012,4.07604096 C20.7057521,3.99522179 20.9853245,4.14376046 21.0661436,4.40781135 L25.9500282,20.3643496 Z M21.3022963,22.2852638 C22.4068658,22.2852638 23.3022963,21.3898333 23.3022963,20.2852638 C23.3022963,19.1806943 22.4068658,18.2852638 21.3022963,18.2852638 C20.1977268,18.2852638 19.3022963,19.1806943 19.3022963,20.2852638 C19.3022963,21.3898333 20.1977268,22.2852638 21.3022963,22.2852638 Z" fill="currentColor" transform="translate(21.272609, 20.629524) rotate(-315.000000) translate(-21.272609, -20.629524) "></path>
		        	<circle stroke="currentColor" stroke-width="2" cx="21" cy="21" r="20"></circle>
		    		</g>
					</svg>
				<span class="tab tab-explore block text-xs">Explore</span>
			</a>
			<a href="#" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
				<svg width="25" height="25" viewBox="0 0 42 42" class="inline-block mb-1">
			    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
		        <path d="M14.7118754,20.0876892 L8.03575361,20.0876892 C5.82661462,20.0876892 4.03575361,18.2968282 4.03575361,16.0876892 L4.03575361,12.031922 C4.03575361,8.1480343 6.79157254,4.90780265 10.4544842,4.15995321 C8.87553278,8.5612583 8.1226025,14.3600511 10.9452499,15.5413938 C13.710306,16.6986332 14.5947501,18.3118357 14.7118754,20.0876892 Z M14.2420017,23.8186831 C13.515543,27.1052019 12.7414284,30.2811559 18.0438552,31.7330419 L18.0438552,33.4450645 C18.0438552,35.6542035 16.2529942,37.4450645 14.0438552,37.4450645 L9.90612103,37.4450645 C6.14196811,37.4450645 3.09051926,34.3936157 3.09051926,30.6294627 L3.09051926,27.813861 C3.09051926,25.604722 4.88138026,23.813861 7.09051926,23.813861 L14.0438552,23.813861 C14.1102948,23.813861 14.1763561,23.8154808 14.2420017,23.8186831 Z M20.7553776,32.160536 C23.9336213,32.1190063 23.9061943,29.4103976 33.8698747,31.1666916 C34.7935223,31.3295026 35.9925894,31.0627305 37.3154077,30.4407183 C37.09778,34.8980343 33.4149547,38.4450645 28.9036761,38.4450645 C24.9909035,38.4450645 21.701346,35.7767637 20.7553776,32.160536 Z" fill="currentColor" opacity="0.1"></path>
		        <g transform="translate(2.000000, 3.000000)">
		            <path d="M8.5,1 C4.35786438,1 1,4.35786438 1,8.5 L1,13 C1,14.6568542 2.34314575,16 4,16 L13,16 C14.6568542,16 16,14.6568542 16,13 L16,4 C16,2.34314575 14.6568542,1 13,1 L8.5,1 Z" stroke="currentColor" stroke-width="2"></path>
		            <path d="M4,20 C2.34314575,20 1,21.3431458 1,23 L1,27.5 C1,31.6421356 4.35786438,35 8.5,35 L13,35 C14.6568542,35 16,33.6568542 16,32 L16,23 C16,21.3431458 14.6568542,20 13,20 L4,20 Z" stroke="currentColor" stroke-width="2"></path>
		            <path d="M23,1 C21.3431458,1 20,2.34314575 20,4 L20,13 C20,14.6568542 21.3431458,16 23,16 L32,16 C33.6568542,16 35,14.6568542 35,13 L35,8.5 C35,4.35786438 31.6421356,1 27.5,1 L23,1 Z" stroke="currentColor" stroke-width="2"></path>
		            <path d="M34.5825451,33.4769886 L38.3146092,33.4322291 C38.8602707,33.4256848 39.3079219,33.8627257 39.3144662,34.4083873 C39.3145136,34.4123369 39.3145372,34.4162868 39.3145372,34.4202367 L39.3145372,34.432158 C39.3145372,34.9797651 38.8740974,35.425519 38.3265296,35.4320861 L34.5944655,35.4768456 C34.048804,35.4833899 33.6011528,35.046349 33.5946085,34.5006874 C33.5945611,34.4967378 33.5945375,34.4927879 33.5945375,34.488838 L33.5945375,34.4769167 C33.5945375,33.9293096 34.0349773,33.4835557 34.5825451,33.4769886 Z" fill="currentColor" transform="translate(36.454537, 34.454537) rotate(-315.000000) translate(-36.454537, -34.454537) "></path>
		            <circle stroke="currentColor" stroke-width="2" cx="27.5" cy="27.5" r="7.5"></circle>
		        </g>
		    	</g>
				</svg>
				<span class="tab tab-whishlist block text-xs">Whishlist</span>
			</a>
			<a href='#' class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
			<span class="">
        <svg  width="25" height="25" class="inline-block mb-1" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20 22.0741C20 23.1377 19.1046 24 18 24L2 24C1.46957 24 0.960859 23.7971 0.585787 23.4359C0.210714 23.0747 0 22.5849 0 22.0741C0 20.6616 0.243014 19.2573 0.720548 17.9389C1.19805 16.6207 1.90459 15.404 2.81332 14.3648C3.72252 13.3251 4.82059 12.4792 6.05578 11.8941C7.29265 11.3083 8.63412 11 10 11C11.3659 11 12.7073 11.3083 13.9442 11.8941C15.1794 12.4792 16.2775 13.3251 17.1867 14.3648C18.0954 15.404 18.8019 16.6207 19.2795 17.9389C19.757 19.2573 20 20.6616 20 22.0741ZM2.17929 20.1481C2.2805 19.6107 2.42411 19.0836 2.60896 18.5732C3.011 17.4633 3.60028 16.4548 4.34315 15.6054C5.08601 14.7559 5.96793 14.082 6.93853 13.6223C7.90914 13.1625 8.94942 12.9259 10 12.9259C11.0506 12.9259 12.0909 13.1625 13.0615 13.6223C14.0321 14.082 14.914 14.7559 15.6569 15.6054C16.3997 16.4548 16.989 17.4633 17.391 18.5732C17.5759 19.0836 17.7195 19.6107 17.8207 20.1481C17.9396 20.7796 18 21.4251 18 22.0741L2 22.0741C2 21.4251 2.06039 20.7796 2.17929 20.1481Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10 8C11.6569 8 13 6.65685 13 5C13 3.34315 11.6569 2 10 2C8.34315 2 7 3.34315 7 5C7 6.65685 8.34315 8 10 8ZM10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z" fill="black"></path>
          </svg><div class="tooltip-container-login hide"><span class="tooltip-text">Profitez de vos offres<span style={{"color":"#D50032"}}>vos bons plans</span></span><span class="tooltip-close"></span></div><div class="offer-gift-icon"><div class="offers-count-wrap hide"><div class="offers-count"></div></div></div></span>
				<span class="tab tab-account block text-xs">Account</span>
			</a>
		</div>
	</section>
</div>)

    }


  const BellIcon = function({handleSetNavigationIsOpen}){
      
        return (
          <label className="stack_stack__iZkUS stack inline-flex py-2 px-1 sm:p-4 sm:p-1 " data-version="v1" style={{
            '-stackFlex': 'initial',
            '-stackDirection': 'row',
            '-stackAlign': 'center',
            '-stackJustify': 'flex-start',
            '-stackPadding': '0px',
            '-stackGap': '8px'
          }}>
            <div className=''>
              <button   className="sm:mx-2 bell_btn__yil2q ring-transparent hover:ring-[var(--ds-gray-900)] hover:ring-1 hover:ring-black rounded-full mt-[0.2em] hover:bg-white"
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:rkl:"
                data-state="closed"
                aria-label="notifications"
  
                data-testid="notifications/bell"
              >
                <span className="bell_buttonContent__IPiYG">
                  <div className="bell_icon__U0zUM">
                    <svg
                      data-testid="geist-icon"
                      height={16}
                      strokeLinejoin="round"
                      viewBox="0 0 16 16"
                      width={16}
                      style={{ width: '16px', height: '16px', color: 'var(--ds-gray-900)' }}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.9925 0C4.95079 0 2.485 2.46579 2.485 5.5075V8.22669C2.485 8.77318 2.21321 9.28388 1.75992 9.58912L1.33108 9.8779L1 10.1009V10.5V11.25V12H1.75H14.25H15V11.25V10.5V10.0986L14.666 9.87596L14.2306 9.58565C13.7741 9.28137 13.5 8.76913 13.5 8.22059V5.5075C13.5 2.46579 11.0342 0 7.9925 0ZM3.985 5.5075C3.985 3.29422 5.77922 1.5 7.9925 1.5C10.2058 1.5 12 3.29422 12 5.5075V8.22059C12 9.09029 12.36 9.91233 12.9801 10.5H3.01224C3.62799 9.91235 3.985 9.09303 3.985 8.22669V5.5075ZM10.7486 13.5H9.16778L9.16337 13.5133C9.09591 13.716 8.94546 13.9098 8.72067 14.0501C8.52343 14.1732 8.27577 14.25 8.00002 14.25C7.72426 14.25 7.47661 14.1732 7.27936 14.0501C7.05458 13.9098 6.90412 13.716 6.83666 13.5133L6.83225 13.5H5.25143L5.41335 13.9867C5.60126 14.5516 5.99263 15.0152 6.48523 15.3226C6.92164 15.5949 7.44461 15.75 8.00002 15.75C8.55542 15.75 9.07839 15.5949 9.5148 15.3226C10.0074 15.0152 10.3988 14.5516 10.5867 13.9867L10.7486 13.5Z"
                        fill="var(--ds-gray-900)"
                      />
                    </svg>
                  </div>
                </span>
              </button>
            </div>
            <UnreadMessageCount session={session} />
          </label>
        );  
    }
    

    const CartIcon = function({}){
      
      return (
        <label className="stack_stack__iZkUS stack inline-flex p-2 sm:p-4 sm:p-1 " data-version="v1" style={{
          '-stackFlex': 'initial',
          '-stackDirection': 'row',
          '-stackAlign': 'center',
          '-stackJustify': 'flex-start',
          '-stackPadding': '0px',
          '-stackGap': '8px'
        }}>
          <div className=''>
            <button   className="sm:mx-2 bell_btn__yil2q hover:ring-1 hover:ring-black rounded-full mt-[0.2em] hover:bg-white"
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:rkl:"
              data-state="closed"
              aria-label="notifications"

              data-testid="notifications/bell"
            >
              <span className="bell_buttonContent__IPiYG">
                <div className="bell_icon__U0zUM">
                  <svg
                    data-testid="geist-icon"
                    height={16}
                    strokeLinejoin="round"
                    viewBox="0 0 16 16"
                    width={16}
                    style={{ width: '16px', height: '16px', color: 'var(--ds-gray-900)' }}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.9925 0C4.95079 0 2.485 2.46579 2.485 5.5075V8.22669C2.485 8.77318 2.21321 9.28388 1.75992 9.58912L1.33108 9.8779L1 10.1009V10.5V11.25V12H1.75H14.25H15V11.25V10.5V10.0986L14.666 9.87596L14.2306 9.58565C13.7741 9.28137 13.5 8.76913 13.5 8.22059V5.5075C13.5 2.46579 11.0342 0 7.9925 0ZM3.985 5.5075C3.985 3.29422 5.77922 1.5 7.9925 1.5C10.2058 1.5 12 3.29422 12 5.5075V8.22059C12 9.09029 12.36 9.91233 12.9801 10.5H3.01224C3.62799 9.91235 3.985 9.09303 3.985 8.22669V5.5075ZM10.7486 13.5H9.16778L9.16337 13.5133C9.09591 13.716 8.94546 13.9098 8.72067 14.0501C8.52343 14.1732 8.27577 14.25 8.00002 14.25C7.72426 14.25 7.47661 14.1732 7.27936 14.0501C7.05458 13.9098 6.90412 13.716 6.83666 13.5133L6.83225 13.5H5.25143L5.41335 13.9867C5.60126 14.5516 5.99263 15.0152 6.48523 15.3226C6.92164 15.5949 7.44461 15.75 8.00002 15.75C8.55542 15.75 9.07839 15.5949 9.5148 15.3226C10.0074 15.0152 10.3988 14.5516 10.5867 13.9867L10.7486 13.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </span>
            </button>
          </div>
       
        </label>
      );  
  }
  