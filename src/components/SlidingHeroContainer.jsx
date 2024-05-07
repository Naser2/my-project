import React from 'react';
import styles from './SlidingHeroContainer.module.css';
import { classNames } from '@/utils';
import Button from './headless/button';

const SlidingHeroContainer = ({ heroData }) => {
// setTimeout and add this to photo #_7bgmoenc6_main
  const {title, subtitle, buttonLabel, buttonLink} = heroData
  const {imageSrc, imageAlt, mobileImageSrc} = heroData.image

  console.log("SlidingHeroContainer-heroData", heroData, "STYLE MODULE",  SlidingHeroContainer)

  return (
    <div id="NEW_CONTAINER" className={classNames(styles.SlidingHeroContainer, "w-full relative")}>
      <div className={classNames(styles.positioner__kzf41dxdl, "")} data-test="positioner">
        <div className={classNames(styles.block__kzf41dxdl, "Block_subDiv__vTPjd no_high_contrast")} data-test="block" data-testid="_kzf41dxdl" data-blocktype="Container" data-subtype="SlidingHero" id="Haute_Horlogerie">
          <div className={styles.ForwardLink_root__EtbqJ}>
            <div className={classNames(styles.Layout_root__WCgpP, "layout__kzf41dxdl puls-noRowMargin")} data-test="layout">
              <div className={classNames(styles.positioner__7bgmoenc6, "Block_root__nWdeU puls-noColPadding Positioner_root__N1-aO Positioner_inRow__7Z1ep puls-col-12 puls-d-flex")} data-test="positioner">
                <div className={classNames(styles.block__7bgmoenc6, "Block_subDiv__vTPjd")} data-test="block" data-testid="_7bgmoenc6" data-blocktype="Parallax" id="_7bgmoenc6">
                  <div id="_7bgmoenc6_main" className={classNames(styles.Parallax_root__si4ci, "Parallax_root__si4ci puls_parallax")}>
                    <picture className={classNames(styles.Image_highContrastPicture__mnUVF,"hidden sm:flex")}>
                      <source media="(min-width: 601px)" srcSet={imageSrc} sizes="(max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 960px) 960px, (max-width: 1024px) 1024px, (max-width: 1280px) 1280px, (max-width: 1400px) 1400px, (max-width: 1600px) 1600px, (max-width: 1920px) 1920px, (max-width: 2400px) 2400px, (max-width: 2800px) 2800px, 3200px" />
                      <img src={imageSrc} alt={imageAlt}  className='bg-cover w-screen bg-cover aspect-[3/2] ' id="_7bgmoenc6_main"/>
                    </picture>
                    <picture  className={classNames(styles.Image_highContrastPicture__mnUVF ,"visible md:invisible sm:hidden _7bgmoenc6_main")}>
                      {/* <source media="(min-width: 601px)" srcSet={mobileImageSrc} sizes="(max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 960px) 960px, (max-width: 1024px) 1024px, (max-width: 1280px) 1280px, (max-width: 1400px) 1400px, (max-width: 1600px) 1600px, (max-width: 1920px) 1920px, (max-width: 2400px) 2400px, (max-width: 2800px) 2800px, 3200px" /> */}
                      <img id="_7bgmoenc6_main" src={mobileImageSrc} alt={imageAlt}  className='bg-cover w-screen bg-cover aspect-[3/2] '/>
                    </picture>
                  </div>
                 <div className="absolute inset-x-6 max-[687px]:bottom-10 sm:top-[43em]  lg:w-1/2 bottom-8rem  px-4 pb-16 lg:p-16">
         
                <h1 class="relative !text-left flex flex-col text-lg md:text-2xl  text-white overlayed-text overlayed-text-shadow">
                    <span class="uppercase massi-anouncer text-white">Introducing</span>
                    <span class="text-h2 text-white overlayed-text overlayed-text-shadow" style={{"letterSpacing": "normal"}}>MASSI  - <span className='text-h3' style={{fontFamily:'var(--hh-font-family-primary)', 'fontSize': '0rem !important'}}>Mindful 🪷 Beauty </span> <br></br></span>
                    <h3 className='' > NYC Haircare Specialist</h3>
                </h1> 
                <div className={classNames("justify-center")}>
                  <Button className={"themeBtn bg-black !text-white no_high_contrast  hover:!bg-gray-700 hover:text-white"} 
                         href="/get-started" color="white" shape="roundedSm"><span>Seee More </span></Button>
                  </div>
            </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};
// const SlidingHeroContainer = ({ heroData }) => {
//   const {imageSrc, imageAlt, title, subtitle, buttonLabel, buttonLink} = heroData
//   console.log("SlidingHeroContainer-heroData",heroData, "STYLE MODULE",  SlidingHeroContainer)
//   return (
//     <div className={classNames(styles.SlidingHeroContainer)}>
//       <div className={classNames(styles.positioner__kzf41dxdl, "Block_root__nWdeU puls-noColPadding Positioner_root__N1-aO Positioner_inRow__7Z1ep puls-col-12 puls-d-flex")} data-test="positioner">
//         <div className={classNames(styles.block__kzf41dxdl, "Block_subDiv__vTPjd no_high_contrast")} data-test="block" data-testid="_kzf41dxdl" data-blocktype="Container" data-subtype="SlidingHero" id="Haute_Horlogerie">
//           <div className={styles.ForwardLink_root__EtbqJ}>
//             <div className={classNames(styles.Layout_root__WCgpP, "layout__kzf41dxdl puls-noRowMargin")} data-test="layout">
//               <div className={classNames(styles.positioner__7bgmoenc6, "Block_root__nWdeU puls-noColPadding Positioner_root__N1-aO Positioner_inRow__7Z1ep puls-col-12 puls-d-flex")} data-test="positioner">
//                 <div className={classNames(styles.block__7bgmoenc6, "Block_subDiv__vTPjd")} data-test="block" data-testid="_7bgmoenc6" data-blocktype="Parallax" id="_7bgmoenc6">
//                   <div id="_7bgmoenc6_main" className={classNames(styles.Parallax_root__si4ci, "puls_parallax")}>
//                     <picture className={styles.Image_highContrastPicture__mnUVF}>
//                       <source media="(min-width: 601px)" srcSet={imageSrc} sizes="(max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 960px) 960px, (max-width: 1024px) 1024px, (max-width: 1280px) 1280px, (max-width: 1400px) 1400px, (max-width: 1600px) 1600px, (max-width: 1920px) 1920px, (max-width: 2400px) 2400px, (max-width: 2800px) 2800px, 3200px" />
//                       <img src={imageSrc} alt={imageAlt} draggable="false" />
//                     </picture>
//                   </div>
//                   <div className={classNames(styles.Layout_root__WCgpP, "layout__7bgmoenc6 puls-noRowMargin Layout_isInsideVisual__cLzJO")} data-test="layout">
//                     <div className={classNames(styles.positioner__vedzmbe2y, "Block_root__nWdeU puls-noColPadding Positioner_root__N1-aO puls-bottom-center")} data-test="positioner">
//                       <div className={classNames(styles.block__vedzmbe2y, "Block_subDiv__vTPjd")} data-test="block" data-testid="_vedzmbe2y" data-blocktype="Container" id="_vedzmbe2y">
//                         <div className={styles.ForwardLink_root__EtbqJ}>
//                           <div className={classNames(styles.Layout_root__WCgpP, "layout__vedzmbe2y puls-noRowMargin")} data-test="layout">
//                             <div className={classNames(styles.positioner__jsg4oq2s3, "Block_root__nWdeU puls-noColPadding Positioner_root__N1-aO Positioner_inCol__k77-j")} data-test="positioner">
//                               <div className={classNames(styles.block__jsg4oq2s3, "Block_subDiv__vTPjd")} data-test="block" data-testid="_jsg4oq2s3" data-blocktype="Text" id="_jsg4oq2s3">
//                                 <h2 className={classNames(styles.Text_root__GCOQp, styles.Text_subtitle__7INGD, "puls-white")} data-testid="text" id="_jsg4oq2s3_main">
//                                   <span className={classNames(styles.Text_root__GCOQp, styles.Text_subtitle__7INGD)} role="presentation">{title}</span>
//                                   <span className={classNames(styles.Text_root__GCOQp, styles.Text_srOnly__GqaDE)}> </span><br />
//                                   <span className={classNames(styles.Text_root__GCOQp, styles.Text_heading2__vEE5O)} role="presentation">{subtitle}</span>
//                                 </h2>
//                               </div>
//                             </div>
//                             <div className={classNames(styles.positioner__gi2ge9yln, "Block_root__nWdeU puls-noColPadding Positioner_root__N1-aO Positioner_inCol__k77-j")} data-test="positioner">
//                               <div className={classNames(styles.block__gi2ge9yln, "Block_subDiv__vTPjd")} data-test="block" data-testid="_gi2ge9yln" data-blocktype="CTA" id="_gi2ge9yln">
//                                 <p aria-describedby="">
//                                   <a className={classNames(styles.CTA_root__6tC4C, styles.CTA_button__4KFtO, styles.CTA_primary-white__tAPK0, "puls-background-white puls-border-none puls-fake-black no_high_contrast")} id="_gi2ge9yln_main_link" target="_self" title={buttonLabel} href={buttonLink}>
//                                     <span className={classNames(styles.CTA_cta__JpHCe)} data-testid="text" id="_gi2ge9yln_main_text">{buttonLabel}</span>
//                                   </a>
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//   );
// };

export default SlidingHeroContainer