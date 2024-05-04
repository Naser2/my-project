'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { FaBookmark } from 'react-icons/fa';
import Button from './headless/button';
import { classNames } from '@/utils';
import MassiBeaute from '@/assets/images/landing-images/massi-beaute.jpg';
import SectionDetails from './SectionDetails';
const CocoChanel = ({ property }) => {
//  animate every minute btw bg-crema bg-rose
    return ( <div className="page-content LandingPage_news-landing-page__TRB9w news-landing-page LandingPage_news-landing-page--dispatch__LLKyD page-content--full-bleed">
        <div className="Dispatch_dispatch__SRiqt Dispatch_wide__GwLtS Dispatch_loaded__7inpT">
          <div aria-label href="/fr_fr/fashion" className="DispatchElement_dispatch-element__WGi9u dispatch-element " target="_self" rel>
            <div className="dispatch-element__content">
              <div className="dispatch-element__content__background dispatch-element__content__background--vertical-alignment-top dispatch-element__content__background--horizontal-alignment-center">
                <div className="dispatch-element__content__background__image">
                  <picture className="picture" style={{ aspectRatio: '1.0554973821989528' }}>
                    {/* Source tags */}
                    <img  alt="" fetchpriority="high" decoding="async" data-nimg="fill" className="responsive-image loaded blocks__item__image blocks__item__image--news-size-3" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} sizes="(min-width: 1024px) 60vw, 100vw"
                     srcSet={`${MassiBeaute.src}`} />
                  </picture>
                </div>
                {/* Background image hover element */}
                {/* <div className="DispatchElement_background-hover-element__2g3E8 dispatch-element__content__background__image">
                  <picture className="picture" style={{ aspectRatio: '1.0554973821989528' }}>
                 
                    <img alt="" fetchpriority="high" decoding="async" data-nimg="fill" className="responsive-image loaded" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} sizes="(min-width: 1024px) 60vw, 100vw" srcSet="https://puls-img.chanel.com/c_limit,w_2800/q_auto:good,dpr_auto,f_auto/1707832663809-onehpcorpoprelaunchslidingherodesktop2880x1260pxsilverjacketjpg.jp" />
                  </picture>
                </div> */}
                
              </div>

            </div>
          </div>
          <div aria-label href="/fr_fr/fashion" className=" DispatchElement_dispatch-element__WGi9u dispatch-element bg-crema bg-rose !bg-[var(--massi-grey-4)]" target="_self" rel>
            <div className="dispatch-element__content !relative">
              {/* <div className="bg-white opacity-0 dispatch-element__content__background dispatch-element__content__background--vertical-alignment-top dispatch-element__content__background--horizontal-alignment-center"> */}
                {/* <div className="dispatch-element__content__background__image">
                  <picture className="picture" style={{ aspectRatio: '1.0554973821989528' }}>
           
                    <img alt="" fetchpriority="high" decoding="async" data-nimg="fill" className="responsive-image loaded" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} sizes="(min-width: 1024px) 60vw, 100vw"
                     srcSet="https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/cdc-dispatch/29493231-127-fre-FR/cdc-dispatch_1440_1200.jpg?imwidth=384 384w, https://www.dior.com/couture/var/dior/storage/images/horizon/home-one-dior/dispatch-odd/cdc-dispatch/29493231-127-fre-FR/cdc-dispatch_1440_1200.jpg?imwidth=640 640w" />
                  </picture>
                </div> */}
                {/* Background image hover element */}
                {/* <div className="DispatchElement_background-hover-element__2g3E8 dispatch-element__content__background__image">
                  <picture className="picture" style={{ aspectRatio: '1.0554973821989528' }}>
                 
                    <img alt="" fetchpriority="high" decoding="async" data-nimg="fill" className="responsive-image loaded" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} sizes="(min-width: 1024px) 60vw, 100vw" srcSet="https://puls-img.chanel.com/c_limit,w_2800/q_auto:good,dpr_auto,f_auto/1707832663809-onehpcorpoprelaunchslidingherodesktop2880x1260pxsilverjacketjpg.jp" />
                  </picture>
                </div> */}
                
              {/* </div> */}
            
          

            
            <div className="container image-with-text__content-container xl:mt-44">
              <div className="image-with-text__content ">
                <h2 className="image-with-text__heading">MY MISSION</h2>
                <div className="rte image-with-text__title">
                  <h5>
                    Our patent-pending tech is a fusion of past and future that supports
                    hair from the inside out.
                  </h5>
                </div>
                {/* <SectionDetails style="relative max-[768px]:mt-24" announcer={""} title={"MIssion"} description={"Why do I do what I do"} cta={"Read More"}/> */}
                <button
                  className="image-with-text__cta themeBtn bg-black !text-white no_high_contrast  hover:!bg-gray-700 hover:text-white px-16"
                  width="full"
                  theme="primary"
                  href="/pages/science-technology"
                >
                  LEARN MORE
                </button>
                {/* <SectionDetails style=" max-[768px]:mt-24" announcer={""} title={"MIssion"} description={"Why do I do what I do"} cta={"Read More"}/> */}
              </div>
            </div>
 
            </div>
          </div>
        </div>
      </div>

    );
  };
  
  export default CocoChanel;