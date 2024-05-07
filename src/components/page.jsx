

import Image from 'next/image'
// import { useState, useEffect } from 'react'
import { Border } from '@/components/Border'
import { GiftCardSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageAngelaFisher from '@/images/team/angela-fisher.jpeg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpeg'
import imageBlakeReid from '@/images/team/blake-reid.jpeg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpeg'
import imageDriesVincent from '@/images/team/dries-vincent.jpeg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpeg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpeg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpeg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpeg'
import imageNasserSanou from '@/images/team/Nasser-Sanou.png'
import imageMichaelFoster from '@/images/team/michael-foster.jpeg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpeg'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'

import massiLG from '@/images/massi/massi_imageLG.jpeg'
import massi from '@/images/massi/massi_image.jpeg'
import client1 from '@/images/massi/client-1.png'
import client2  from '@/images/massi/client-2.jpeg'
import client3 from '@/images/massi/client-3.jpeg'
import client4 from '@/images/massi/client-4.jpeg'
import client5 from '@/images/massi/client-5.png'

import Bessseller1 from '@/images/massi/Bessseller-1.webp'
import Bessseller2  from '@/images/massi/Bessseller-2.webp'
import Bessseller3 from '@/images/massi/Bessseller-3.png'
import clsx from 'clsx'
import Intro from '@/components/Intro'


function Culture() {
  return (
    <div className="lg:mx-8 mt-24 min-[400px]:rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        eyebrow2={{text: "Our Founder", href:'/founder'}}
        title="Balance your passion with your passion for life."
        invert
        highlight={true}
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Loyalty" invert>
            Our team has been with us since the beginning because none of them
            are allowed to have LinkedIn profiles.
          </GridListItem>
          <GridListItem title="Trust" invert>
            We don’t care when our team works just as long as they are working
            every waking second.
          </GridListItem>
          <GridListItem title="Compassion" invert>
            You never know what someone is going through at home and we make
            sure to never find out.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  // {
  //   title: 'Leadership',
  //   people: [
  //     {
  //       name: 'Nasser Sanou',
  //       role: 'Co-Founder / CEO',
  //       image: { src: imageNasserSanou },
  //     },
  //     {
  //       name: 'Michael Foster',
  //       role: 'Co-Founder / CTO',
  //       image: { src: imageMichaelFoster },
  //     },
  //     {
  //       name: 'Dries Vincent',
  //       role: 'Design & Front-End ',
  //       image: { src: imageDriesVincent },
  //     },
  //   ],
  // },
  {
    title: 'Recent Clients',
    people: [
      {
        name: ' Beautiful & blonde',
        role: 'Wig Coloring & Frontal Installation ✨',
        image: { src: client1 },
      },
      {
        name: 'Color Me Blond ',
        role: 'Coloring & Frontal Installation✨',
        image: { src: imageAngelaFisher },
      },

      {
        name: 'Once Blonde-Always blonde',
        role: 'VP, Human Resources ✨',
        image: { src: client5  },
      },
      {
        name: 'Better in blond',
        role: 'Double process color✨',
        image: { src: client2 },
      },
      {
        name: 'Client Calm',
        role: 'Silk press & updo + Silk press & Ponytail ✨',
        image: { src: client3 },
      },
      {
        name: 'Better in blond',
        role:  'Double process color✨',
        image: { src: client4 },
      },
     
    ],
  },
]
const bestSellers = [
  {
    title: 'Best Sellers',
    people: [
      {
        name: '5x5 HD LACE CLOSURE',
        role: '$220',
        image: { src: Bessseller1 },
        href: 'https://mbeautehair.glossgenius.com/services/5x5-hd-lace-closure'
      },
      {
        name: 'No Slip | Wig Grip',
        role: '$12',
        image: { src: Bessseller2 },
        href: 'https://mbeautehair.glossgenius.com/services/5x5-hd-lace-closure'
      },
      {
        name: '5x5 | ‘PRE-LIGHTENED’',
        role: '$520',
        image: { src: Bessseller3 },
        href: 'https://mbeautehair.glossgenius.com/services/5x5-hd-lace-closure'
      },
      {
        name: '5x5 | ‘PRE-LIGHTENED’',
        role: '$520',
        image: { src: Bessseller3 },
        href: 'https://mbeautehair.glossgenius.com/services/5x5-hd-lace-closure'
      },
    ],
  },
]
function Team() {
  return (
    // <Container className="mt-4 sm:mt-24 lg:mt-12">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
              {/* <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn> */}
            {/* <Border as={FadeIn} /> */}
            <div className="grid grid-cols-1 gap-6 pt-4 sm:pt-6 lg:grid-cols-3 xl:gap-8">
            
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover  transition duration-500 motion-safe:group-hover:scale-105 aspec-[2/4]"
                          />
                          {/* grayscale */}
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white group-hover:text-[#f1cc8f]">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    // </Container>
  )
}

function BestSellers() {


  return (
    // <Container className="mt-4 sm:mt-24 lg:mt-12">
      <div className="max-[700px]:mt-[-12%] lg:space-y-24 mx-auto max-w-7xl">
        {bestSellers.map((group) => (
          <FadeInStagger key={group.title}>
              <FadeIn>
                <h2 className="text-center mt-24 font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
            {/* <Border as={FadeIn} /> */}
            <div className="grid grid-cols-1 gap-6 pt-4 sm:pt-16 lg:grid-cols-3 xl:gap-8">
            
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <a key={person.name}   href='https://mbeautehair.glossgenius.com/services/5x5-hd-lace-closure'>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-1xl bg-neutral-100 rind-black ring-0">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover  transition duration-500 motion-safe:group-hover:scale-105 aspec-[2/4]"
                          />
                          {/* grayscale */}
                          <div className="relative inset-0  bottom-0 flex flex-col justify-end p-6">
                      {/* bg-gradient-to-t from-black to-black/0 to-40%  */}
                            <p className="font-display text-base/6 font-semibold tracking-wide text-black">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-black">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn> 
                     
                    </a>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    // </Container>
  )
}


export const metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function Massi() {
  let blogArticles = (await loadMDXMetadata('blog')).slice(0, 2)

  

  return (
    <>
     
    <div className='page-container drawer-page-content massi'>
      <div className='main-content'>
        <div className="relative -mt-38 lg:-mt-[5%] slideshow__slide  slick-slide slick-current slick-active index-section " data-slick-index="0" aria-hidden="false"
        style={{width:"100%", position: 'relative', left: '0px', top: '0px', 'z-index':'999', opacity: 1}} 
        >
          <a href="https://mbeautehair.glossgenius.com/services" className="slideshow__link" tabindex="0">
          <img src={massiLG.src} className='h-full w-full max-[700px]:hidden'/>
          <img src={massi.src} className='h-full w-full min-[700px]:hidden'/>
            {/* <img src="//erinhhair.com/cdn/shop/files/8C896AC9-881F-453B-8BA2-29D98F935A69.png?v=1676572821"/> */}
          </a> 
       <Intro />
        </div>
       {/* <Container className="mt-16"> */}
       <FadeInStagger key={'New Collection'}>
        <FadeIn>
          <div id="shopify-section-1a23616c-8a74-41e2-a062-803892398db5" className="relative shopify-section index-section  overflow-hidden">
              <div className="page-width pt-4 sm:pt-12" id="1a23616c-8a74-41e2-a062-803892398db5"> 
                <div className="section-header home text-center wow fadeIn" style={{visibility: 'visible', animationName:'fadeIn'}}>
                  <h2>NEW COLLECTION</h2>      
                      <p> CUSTOM WIGS | PRE-SELECTED STYLES &amp; COLOR</p>        
                </div>
                  <div id="products-1a23616c-8a74-41e2-a062-803892398db5" className="grid-products">
                  <Team />
                  </div>
                </div>
              </div>  
            </FadeIn> 
        </FadeInStagger>
     
        {/* </Container> */}
       </div>
     </div>
   
     <div id="quiz-kit-intro" className="py-24 relative sc-AxjAm knkQuy center-center " 
    //  data-aos="fade-up" 
     > 
     <FadeInStagger key={'Book Now 2'}>
        <FadeIn>
       <picture>
        <source media="(max-width: 767px)" srcset="https://d33x1o3gj9io8i.cloudfront.net/images/4190/OqULuoMQkaQGSqCQuu46" type="image/gif"/>
        <source media="(max-width: 1200px)" srcset="https://d33x1o3gj9io8i.cloudfront.net/images/4190/md_DnRYal1MQ7qrNOSkcVUP" type="image/gif"/>
        <img src="https://d33x1o3gj9io8i.cloudfront.net/images/4190/DnRYal1MQ7qrNOSkcVUP" alt="NEED A LITTLE HELP?"/>
        </picture>
        </FadeIn> 
        </FadeInStagger>
    
        <FadeInStagger key={'Book Now 2'}>
        <FadeIn>
        <div id="quiz-kit-question-image" className="sc-fzpdbB gZFNLC md:bottom-[-79%] mx-auto max-w-7xl px-6 lg:px-8 ">
      
      <div id="quiz-kit-container"
       className="sc-AxirZ jddkUx center-center  min-[600px]:bg-black  opacity-0.5">
         <h1 id="quiz-kit-intro-title" 
         // style={{fontFamily:"Questrial", fontSize:"40", fontWeight:"700", color:"#ffffff" ,letterSpacing:"0", annimationName:"fade-up"}} 
          className="sc-AxhCb bNQaQH aos-init aos-animate min-[600px]:!text-white" 
         style={{fontWeight: '700', width: '100%', margin: '0px auto 20px', lineHeight: '1.2', fontSize: '40px', textTransform: "none" ,letterSpacing: "initial"}}>
         NEED A SERVICE?</h1><p id="quiz-kit-intro-text" font-size="16" font-family="Questrial" color="#ffffff" font-weight="400" letter-spacing="0" data-aos="fade-up" data-aos-delay="150"
          className="sc-AxhCb bosNnv aos-init aos-animate  min-[600px]:text-slate-100 -mt-4" 
         // style="font-weight: 400; width: 100%; margin: 0px auto 20px; line-height: 1.5; font-size: 16px; color: rgb(255, 255, 255); text-transform: none; letter-spacing: initial;"
         >
           Review my catalogue, and explore the perfect service for you. </p >
           <div className="gap-x-6  md:gap-x-24">
           <a href="https://mbeautehair.glossgenius.com/contact"><button href="https://mbeautehair.glossgenius.com/contact"
           id="quiz-kit-intro-button" kind="fill" font-size="13" font-family="Rubik" letter-spacing="0" font-weight="600" data-aos="fade-up" data-aos-delay="300"
          className="sc-fznxsB cYgHSw aos-init aos-animate mr-6"
          style={{padding: '16px', borderRadius: "0px", width: "auto", minWidth: "160px", fontSize: '13px', fontWeight: '600', margin: '10px 0px 0px', color: 'black', backgroundColor: 'white', border: '1px solid rgb(0, 0, 0)', lineHeight: '1.3', height: 'auto', minHeight: 'auto', letterSpacing: "initial"}}>Contact</button></a>
          <a href="https://mbeautehair.glossgenius.com/services"><button href="https://mbeautehair.glossgenius.com/services"
           id="quiz-kit-intro-button" kind="fill" font-size="13" font-family="Rubik" letter-spacing="0" font-weight="600" data-aos="fade-up" data-aos-delay="300"
          className="sc-fznxsB cYgHSw aos-init aos-animate bg-black min-[600px]:bg-[#e09e35]" 
          style={{padding: '16px', borderRadius: "0px", width: "auto", minWidth: "160px", fontSize: '13px', fontWeight: '600', margin: '10px 0px 0px', color: 'rgb(255, 255, 255)', border: '1px solid rgb(0, 0, 0)', lineHeight: '1.3', height: 'auto', minHeight: 'auto', letterSpacing: "initial"}}>Booking</button></a>
           </div>
          
          
          </div>
       </div>
     
            </FadeIn> 
        </FadeInStagger>
    
          
          {/* <div id="quiz-kit-intro-overlay" className="sc-fznJRM bTIjTR" 
           style={{display: 'block', backgroundColor: 'rgb(0, 0, 0)', opacity: "0.58"}}></div> */}
           
           </div>


       
          <div className='text-center mt-32 bg-black border-t border-black min-[700px]:hidden' />

   

      {/* <Culture /> */}

      <BestSellers />



 
{/* <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div> */}

 <GiftCardSection /> 
<div className="group bg-[#faebd7]  lg:bg-black relative pt-14 lg:mt-24 slideshow__slide  slick-slide slick-current slick-active " data-slick-index="0" aria-hidden="false"
style={{width:"100%", position: 'relative', left: '0px', top: '0px',  opacity: 1}} 
>
  <div href="https://mbeautehair.glossgenius.com/services" className="slideshow__link flex" tabindex="0">
      <img src={massiLG.src} className='h-full w-full max-[700px]:hidden'/>
      <img src={massi.src} className='h-full w-full min-[700px]:hidden'/>
   <FadeInStagger key={'INTRO'}>
    <FadeIn>
      
    <div className="absolute inset-x-0 lg:inset-x-20 top-[54%] md:top-[50%] lg:top-40%] mx-6 rounded-md py-4  md:py-12 md:px-12 scontent-center !bg-[#e09e353d] transition duration-150 transform home text-center wow fadeIn text-white max-w-7xl justify-centr mx-auto rs-parallax-wrap  min-[600px]:mt-[10%]"  style={{visibility:"visible", animationName:"fadeIn"}}>
    <div className="rs-parallax-wrap mb-4 inset-x-0 xl:!pb-24"  style={{position: 'absolute' , display: 'block' ,'pointer-events': 'auto', 'z-index': 9, visibility: 'visible', perspective: '601px'}}>
     <h2 className={clsx('animation !font-bold  inline-flex text-[wheat] !text-[2.3em]  lg:text-[wheat] md:!text-[5em]  lg:!text-[4em] xl:!text-[6em]  signature-font  animated-logo pb-12')}
     >
       MBEAUTE NOIR</h2>
     </div> 
     <div className='justify-center lg:text-3xl lg:text-[wheat] max-[700px]:pt-[10%] pt-[12%] xl:pt-[11%]'>
    <p className={clsx('justify-center text-[1em] transition duration-250 transform text-sm text-white !text-[#f8e8cd] ')}> A specialist at your service.</p>
     </div> 
     {/* <div className='justify-center max-[700px]:hidden lg:text-3xl lg:text-[wheat] md:max-w-2xl md:px-[20%]  pt-14  lg:pt-24  xl:!mt-24 lg:max-w-4xl lg:px-[10%] xl:max-w-7xl xl:px-[0%] xl:text-center'>
    <p className='transition duration-150 ease-in-out justify-center max-[700px]:hidden lg:text-3xl lg:text-[wheat]'> NYC haircare specialist located in Harlem. Our goal is to promote clean beauty. <span className='max-[700px]:hidden'>Where mindfulness and wellness meet consciousness. Glow inside and out with us! </span> </p>
     </div>  */}
     <div >
     <div className="justify-center flex align-center pt-2 lg:pt-10 ease-in duration-300">
        <a className={clsx(" hover:!text-[#f8e8cd]  !border-[wheat] ClassicButton_button__ETGhE transition !text-[#845201] group-hover:!text-[wheat] duration-150 transform btn text-black justify-center bg-[#efc680ba]  !border-[wheat]] group-hover:!bg-black flex align-center border-2  max-w-2xl m-4 transition ease-in-out delay-250 group-hover:-translate-y-1 group-hover:scale-110 duration-360")} href="https://mbeautehair.glossgenius.com/services">Book Now </a>
     </div>
     </div> 
  
    
    </div>
    </FadeIn>
    </FadeInStagger>
  </div>
 
  <div class="px-6 pt-0 md:pt-0  sm:mx-0 sm:pt-5 md:px-12 border-b border-orange-300 bg-[#6420ff] bg-[rgb(137,96,86)]">
  <a href="https://mbeautehair.glossgenius.com/gift-card"  class="mx-auto max-w-7xl p-0 md:px-4 lg:px-8  grid w-full grid-cols-2">
           <ul className="max-w-4xl lg:max-w-none flex text-sm font-medium text-center text-gray-500 dark:text-gray-400">
              <li>
                <span className="inline-block w-full py-2 px-3">
                  <h3 class="-mb-1 product-details__product-title text-xl  font-semibold !text-white" itemprop="name" style={{"text-transform": 'none !important' }}>Learn More</h3>
                </span>
              </li>
            </ul>
              <div class="flex justify-end">
                <button data-tooltip-target="card-nav-tabs-example-copy-clipboard-tooltip" data-tooltip-placement="bottom" type="button"  className="flex items-center px-3 py-2 text-xs font-medium text-gray-600 hover:text-blue-700">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" viewBox="0 0 44 44" width="24" aria-hidden="true" style={{color: 'white'}} class="Navbar_chevronDown__BsZjb rotate-[-85deg]"><path d="M11 9l11 11 11-11"></path></svg>
                </button>
              </div>
            </a>  
        </div>
    </div>
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-accessibility color-fg-accent mr-2">
    <path d="M9.923 5.302c.063.063.122.129.178.198H14A.75.75 0 0 1 14 7h-3.3l.578 5.163.362 2.997a.75.75 0 0 1-1.49.18L9.868 13H6.132l-.282 2.34a.75.75 0 0 1-1.49-.18l.362-2.997L5.3 7H2a.75.75 0 0 1 0-1.5h3.9a2.54 2.54 0 0 1 .176-.198 3 3 0 1 1 3.847 0ZM9.2 7.073h-.001a1.206 1.206 0 0 0-2.398 0L6.305 11.5h3.39ZM9.5 3a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 3Z"></path>
</svg>
      <PageLinks
        className="!text-left z-[999]"
        title="Contact"
        intro="Please fell free to reach out to us if you have any question."
        pages={blogArticles}
        padding={true}
      
      />
      

     
 {/* <div class="flex flex-col justify-center h-screen">
	<div
		class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
		<div class="w-full md:w-1/3 bg-white grid place-items-center">
			<img src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="tailwind logo" className="rounded-xl" />
    </div>
			<div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
				<div class="flex justify-between item-center">
					<p class="text-gray-500 font-medium hidden md:block">Vacations</p>
					<div class="flex items-center">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
							fill="currentColor">
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
						</svg>
						<p class="text-gray-600 font-bold text-sm ml-1">
							4.96
							<span class="text-gray-500 font-normal">(76 reviews)</span>
						</p>
					</div>
					<div class="">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-pink-500" viewBox="0 0 20 20"
							fill="currentColor">
							<path fill-rule="evenodd"
								d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
								clip-rule="evenodd" />
						</svg>
					</div>
					<div class="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
						Superhost</div>
				</div>
				<h3 class="font-black text-gray-800 md:text-3xl text-xl">The Majestic and Wonderful Bahamas</h3>
				<p class="md:text-lg text-gray-500 text-base">The best kept secret of The Bahamas is the country’s sheer
					size and diversity. With 16 major islands, The Bahamas is an unmatched destination</p>
				<p class="text-xl font-black text-gray-800">
					$110
					<span class="font-normal text-gray-600 text-base">/night</span>
				</p>
			</div>
		</div>
	</div> */}
    </>
  )
}
