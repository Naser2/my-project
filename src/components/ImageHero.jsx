import React from 'react';
import classNames from 'classnames';
import styles from './ImageHero.module.css'; // Import the CSS module
import Button from './headless/button';
import SectionDetails from '@/components/SectionDetails'
import Link from 'next/link';
const ImageHero = ({ imageSrcMobile, imageSrcDesktop, title, subtitle, href, alt, cta }) => {
  return (  <div className='relative'>
    <div className={classNames(styles.imageHero, "relative SlidingHeroContainer_ForwardLink_root__EtbqJ__eBvMq")}>
 
    <div id="MOBILE" className="blocks__row blocks__row--half tall">
        <div className="blocks__item sm:hidden">
      <div className="blocks__item__image blocks__item__image--news-size-3">
     <picture id="_7bgmoenc6_main" className={classNames(styles.picture)}>
      <source id="_7bgmoenc6_main" media="(min-width: 601px)" srcSet={imageSrcMobile} className='real-mobile w-screen bg-cover aspect-[4/6]'/>
      <img id="_7bgmoenc6_main" src={imageSrcMobile} alt={alt} className="!pr-[20em] bg-top bg-cover w-[100vw] h-screen  !aspect-[7/5] entered lazyloaded " />
     </picture> 
   
    
      </div>
    
    </div>
    <div id="DESKTOP" className="blocks__item hidden sm:flex">
      <div className="blocks__item__image blocks__item__image--news-size-3">
     <picture id="_7bgmoenc6_main" className={classNames(styles.picture)} >
      <img id="_7bgmoenc6_main" src={imageSrcDesktop} alt={alt} className="!pr-[20em] bg-top bg-cover  !h-[105vh] !w-full   entered lazyloaded " />
     </picture> 
   
    
      </div>
    
    </div>
  </div>
  <div className="flex-row">
    <div  class="group xl:backdrop-blur-sm md:max-w-[30em] md:mr-[120px] absolute bottom-[27vh] px-10 sm:!top-[35%] sm:inset-x-[10%] xl:inset-x-[4%]" >
    <div class="text-[var(--agedBlack)] -mt-10 pb-0  sm:py-16 text-4xl xl:text-5xl sm:font-extrabold text-white uppercase">ELevating Beauty & Conscioussnes </div>
    <div class="hidden sm:flex  !text-white  -mt-6 backdrop-blur-sm xl:group-hover:backdrop-blur-md sm:text-2xl text-[var(--agedBlack)] leading-relaxed font-medium text-base tracking-wide h-60 md:h-40 italic text-gray-600 !overflow-wrap text-ellipsis text-slate-300">
    List of services we provide to empower beauty.
      </div>
    <div id="Mobile-Service-Details" class="sm:hidden flex-block  -mb-[31vh] backdrop-blur-sm xl:group-hover:backdrop-blur-md sm:text-2xl text-[var(--agedBlack)] leading-relaxed font-medium text-base tracking-wide h-60 md:h-40 italic text-gray-600 !overflow-wrap text-ellipsis text-slate-300">
      <h1 class="relative !text-left flex flex-col text-lg md:text-2xl  text-white overlayed-text overlayed-text-shadow">
      <div class="text-h2 !text-white overlayed-text overlayed-text-shadow flex-block"
      // style="letter-spacing: normal;"
      > <h3 class="backdrop-blur-sm !text-base text-h3 !text-white" style={{"font-family": "var(--hh-font-family-primary)"}}>
        List of services we provide to empower beauty.
      </h3>
        
        </div>
      </h1>
     <h2 class="!text-white !text-xl mt-2 " style={{"font-family": "var(--hh-font-family-primary)"}}>
          Services 
        </h2>
      </div>
    </div>
 

 <div class="absolute inset-x-6 bottom-[-1.4em] sm:top-[55%] sm:inset-x-[10%] xl:inset-x-[2%] px-4 pb-16 lg:p-16 max-w-4xl">
  <h1 class="relative !text-left flex flex-col text-lg md:text-2xl  text-white overlayed-text overlayed-text-shadow">
   {/* <h3 class="text-white">Natural | Currly | Straight</h3> */}
   </h1><div class="justify-center">
    <Link  href="/services"
        className="image-with-text__cta themeBtn bg-black !text-white no_high_contrast 
              hover:!bg-gray-700 hover:text-white relative isolate inline-flex items-center
              justify-center gap-x-2  border text-base/6 font-semibold px-[calc(theme(spacing[3.5])-1px)]
              py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)] 
              sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm/6 focus:outline-none 
              data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2
              data-[focus]:outline-blue-500 data-[disabled]:opacity-50 [&amp;>[data-slot=icon]]:-mx-0.5 [&amp;>[data-slot=icon]]:my-0.5 [&amp;>[data-slot=icon]]:size-5 [&amp;>[data-slot=icon]]:shrink-0 [&amp;>[data-slot=icon]]:text-[--btn-icon] [&amp;>[data-slot=icon]]:sm:my-1 [&amp;>[data-slot=icon]]:sm:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-[hover]:[--btn-icon:ButtonText] border-zinc-950/10 text-zinc-950 data-[active]:bg-zinc-950/[2.5%] data-[hover]:bg-zinc-950/[2.5%] dark:border-white/15 dark:text-white dark:[--btn-bg:transparent] dark:data-[active]:bg-white/5 dark:data-[hover]:bg-white/5 [--btn-icon:theme(colors.zinc.500)] data-[active]:[--btn-icon:theme(colors.zinc.700)] data-[hover]:[--btn-icon:theme(colors.zinc.700)] dark:data-[active]:[--btn-icon:theme(colors.zinc.400)] dark:data-[hover]:[--btn-icon:theme(colors.zinc.400)]">
      <span>See all </span>
   <span class="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden" aria-hidden="true">
  </span></Link></div></div>

  </div>
 
        
        </div>
        </div>
    
)

}

export default ImageHero;