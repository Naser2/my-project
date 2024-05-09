'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { FaBookmark } from 'react-icons/fa';

const AboutSection = ({ aboutData }) => {

return <div className="blocks blocks--full-width !mb-0">
  <div className="blocks__row">
    <div className="blocks__item blocks__item--half">
      <div className="blocks__item__image blocks__item__image--news-size-1 bg-white px-8 py-14 sm:py-12  py-24 xl::px-24">
        <div class="xl:!max-w-xl xl:px-24">
          <h2 class="image-with-text__heading">About Massi</h2>
        <div class="rte image-with-text__title">
        <h5 className='!text-xl xl:!text-2xl'>  {aboutData.description}

        </h5>        <button class="!mt-8 sm:!mt-[4.6vh] image-with-text__cta themeBtn bg-black !text-white no_high_contrast  hover:!bg-gray-700 hover:text-white px-16 " width="full" theme="primary" href="/about">{aboutData.title}</button>
        </div>
        </div>
        {/* <button class="image-with-text__cta themeBtn bg-black !text-white no_high_contrast  hover:!bg-gray-700 hover:text-white px-16" width="full" theme="primary" href="/pages/science-technology">LEARN MORE</button> */}
        {/* </div> */}
        {/* <p className=''>{aboutData.description}</p> */}
        {/* <img
          src="https://d2t0rs32f3fwvu.cloudfront.net/app/uploads/2023/06/06184425/Hero-London-2-960x640.jpeg"
          alt="Present Futures: Virtual and Augmented Reality in Art image"
          data-lazy-src="https://d2t0rs32f3fwvu.cloudfront.net/app/uploads/2023/06/06184425/Hero-London-2-960x640.jpeg"
          data-ll-status="loaded"
          className="entered lazyloaded"
        /> */}
        {/* <noscript>
          &lt;img
          src="https://d2t0rs32f3fwvu.cloudfront.net/app/uploads/2023/06/06184425/Hero-London-2-960x640.jpeg"
          alt="Present Futures: Virtual and Augmented Reality in Art image"&gt;
        </noscript> */}
      </div>
      {/* <a
        href={aboutData.src}
        className="blocks__item__overlay"
      >
        <div>
          <h4>{aboutData.title}</h4>
          <span className="btn btn-arrow">→</span>
        </div>
      </a> */}
    </div>
    <div className="blocks__item blocks__item--half">
      <div className="blocks__item__image blocks__item__image--news-size-1">
        <img src={aboutData.src} alt={aboutData.alt}
          // src="https://d2t0rs32f3fwvu.cloudfront.net/app/uploads/2019/08/04102832/MarkLeckey_Still012_EditHighRes-960x640.jpg"
          // alt="Mark Leckey image"
          data-lazy-src={aboutData.src}
          data-ll-status="loaded"
          className="entered lazyloaded"
        />
        {/* <noscript>
          &lt;img
          src="https://d2t0rs32f3fwvu.cloudfront.net/app/uploads/2019/08/04102832/MarkLeckey_Still012_EditHighRes-960x640.jpg"
          alt="Mark Leckey image"&gt;
        </noscript> */}
      </div>
      <a
        href="/"
        className="blocks__item__overlay "
      >
        <div className='mt-[30vh] sm:mt-[45vh]'>
          <h4>{aboutData.ctaText}</h4>
          <span className="btn btn-arrow">→</span>
        </div>
      </a>
    </div>
  
  
  </div>
  <div className="blocks__row"></div>
  <div className="blocks__row blocks__item--half"></div>
</div>
}


export default AboutSection