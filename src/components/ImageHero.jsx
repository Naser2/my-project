import React from 'react';
import classNames from 'classnames';
import styles from './ImageHero.module.css'; // Import the CSS module
import Button from './headless/button';
import SectionDetails from '@/components/SectionDetails'
const ImageHero = ({ imageSrcMobile, imageSrcDesktop, title, subtitle, href, alt, cta }) => {
  return (  <div className='relative'>
    <div className={classNames(styles.imageHero, "relative SlidingHeroContainer_ForwardLink_root__EtbqJ__eBvMq")}>
 
    <div className="blocks__row blocks__row--half tall">
        <div className="blocks__item">
      <div className="blocks__item__image blocks__item__image--news-size-3">
     <picture id="_7bgmoenc6_main" className={classNames(styles.picture)}>
      <source id="_7bgmoenc6_main" media="(min-width: 601px)" srcSet={imageSrcDesktop} className='desktop bg-cover w-screen bg-cover aspect-[6/4]'/>
      <img id="_7bgmoenc6_main" src={imageSrcMobile} alt={alt} className="bg-cover w-screen !bg-contain h-screen  aspect-[5/4] entered lazyloaded " />
     </picture> 
   
    
      </div>
    
    </div>
  </div>
  <SectionDetails announcer={"Here to serve with care."} title={title} description={subtitle} cta={cta}/>

        
        </div>
        </div>
    
)

}

export default ImageHero;