import { ProductInfo } from "../components/product/ProductInfo";
import { ImageGallery } from "../components/product/ImageGallery";
import { ColorPicker } from "../components/product/ColorPicker";
import { SizePicker } from "../components/product/SizePicker";
import { ProductDetails } from "../components/product/ProductDetails";
import { Policies } from "../components/product/Policies";
import { Reviews } from "../components/product/Reviews";
import { RelatedProducts } from "../components/product/RelatedProducts";
import { AddToCart } from "../components/product/AddToCart";
import AboutSection  from "@/components/AboutSection";
import CocoChanel from "@/components/CocoChanel";
import WelcomeScreen from "@/components/WelcomeScreen";
import Header from '@/components/SephoHeader'; // Import the Header component
import SlidingHeroContainer from '@/components/SlidingHeroContainer'; // Import the Header component
import TestButton from '@/components/TestButton';
import DispatchElements from '@/components/DispatchElements';
import { aboutData, allReviews, dispatchData, images, navigation, proucdtsTeaser, servicesReviews, team } from "@/data";
import ImageHero from '@/components/ImageHero'
import ProductCardDisplay from '@/components/ProductCardDisplay'
import TestimonialSection from '@/components/TestimonialSection'
import FadeInSection from '@/utils/FadeInSection'
import { reviews } from "../components/data";
import TalwindUiTest from "@/components/TalwindUiTest"
import TestSliderComponent from '@/components/TestSliderComponent'
import HeroGiff from '@/assets/images/ezgif-7-5ad70af6f1.gif'
import  Products from '@/components/product/Products'
import Slider from '@/components/slider/Slider'
import ContactSection from '@/components/ContactSection'
import Porfolio from '@/components/Porfolio'
import massiElevateHero from '@/assets/images/massi-elevate-hero.jpeg'

const items = [
  {
    id: 'account',
    href: 'https://www.sephora.fr/connexion/',
    text: 'Se connecter',
    tooltipText: 'Profitez de vos offres et vos bons plans',
  },
  // Add more items as needed
];
const heroImages = [
 {
  title: "La Haute Horlogerie de CHANEL",
  image: {
      imageSrc: HeroGiff.src,
      // "https://www.chanel.com/puls-img/c_limit,w_3200/q_auto:good,dpr_auto,f_auto/1710838915277-onehpcorpodslidinghero2880x1260px51jpg_1260x2880.jpg",
      imageAlt: "Image of Haute Horlogerie",
      mobileImageSrc:HeroGiff.src,
      // "https://www.chanel.com/puls-img/1710838915022-onehpcorpomslidinghero1125x1500px41jpg_1500x1125.jpg",
  },

  subtitle: "Haute Horlogerie",
  button: {
      label: "Voir plus",
      link: "/fr/horlogerie/haute-horlogerie/"
  }
}
// ,{
//   title: "La Haute Horlogerie de CHANEL",
//    image: {
//     imageSrc: "https://www.chanel.com/puls-img/c_limit,w_3200/q_auto:good,dpr_auto,f_auto/1710838915277-onehpcorpodslidinghero2880x1260px51jpg_1260x2880.jpg",
//      imageAlt: "Image of Haute Horlogerie",
//      mobileImageSrc:"https://www.chanel.com/puls-img/1710838915022-onehpcorpomslidinghero1125x1500px41jpg_1500x1125.jpg",
//     },

//   subtitle: "MAQUILLAGE",
  
//     button: {
//           label: "Découvrir",
//           link: "/fr/maquillage/rouge-allure-velvet/"
//       }
// }
]


export default function HomePage() {
  return (
    <div className="lg:max-w max-w-none overflow-hidden">
   


      {/* <div className="relative min-h-65 p-10 flex w-full SlidingHeroContainer_ForwardLink_root__EtbqJ__eBvMq pt-4"></div> */}
    {/* <TestButton>Hello Test</TestButton> */}
      <section id="massi beauty" className="relative mt-14">
        <h2 className="h-0 w-0 sr-only">Introducing Wholesome beauty </h2>
        {heroImages.map((heroData, index) => (  <SlidingHeroContainer key={index} heroData={heroData}/> ))}
       </section>

    

    <section id="mission" className=" bg-gray-300">
        <h2 className="h-0 w-0 sr-only">Mission</h2>
        <DispatchElements data={dispatchData} />
        
    </section>
    <section id="mission" className="bg-gray-300">
        <h2 className="h-0 w-0 sr-only">Mission</h2>
        <CocoChanel property={null}/>
    </section>

       {/* <img src="http://i.giphy.com/DzIXZlXmh61na.gif" alt=""  className="w-64"/> */}
      <section id="services"  className="bg-gray-200">
        <h2 className="h-0 w-0 sr-only">Services</h2>
      {navigation.categories.map((assetsCategories, index) => {
        const Services = assetsCategories.name =='Services' ? assetsCategories : null;
        if (Services) {
          const { hero } = Services;
          if (hero) {
            return (
              <ImageHero
                imageSrcDesktop={massiElevateHero.src}
                imageSrcMobile={massiElevateHero.src}
                title={hero.title}
                subtitle={hero.subtitle}
                href={hero.href}
                alt={hero.alt}
                sizes="(min-width: 601px) 640px, 100vw"
                key={index}
                cta={hero.cta}
              />
            );
            } else {
              return (
                <h1 key={index}>Missing Services Image to display</h1>
              );
            }
          }
      })} 
      </section>

      <section id="services" className="bg-gray-300 h-screen sm:h-full">
          <h2 className="h-0 w-0 sr-only">Services List</h2>
          <FadeInSection>
              <div className="absolute bottom-full  top-[-30em] left-0 right-0">
                <div className="relative h-screen sm:h-full w-full">
                  <div className="flex flex-col gap-3.5 pb-3.5 pt-2"><div><div className="h-full flex ml-1 md:w-full md:m-auto gap-0 md:gap-2 justify-center"><div className="grow"><div className="absolute bottom-full left-0 mb-4 flex w-full grow gap-2 px-1 pb-1 sm:px-2 sm:pb-0 md:static md:mb-0 md:max-w-none"><div className="grid w-full grid-flow-row grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2"><div className="flex flex-col gap-2 max-w-[12em]"><span style={{"opacity": 1, "transform": "none"}}><button className="btn relative btn-neutral group w-full whitespace-nowrap rounded-xl px-4 py-3 text-left text-token-text-primary md:whitespace-normal" as="button"><div className="flex w-full gap-2 items-center justify-center"><div className="flex w-full items-center justify-between"><div className="flex flex-col overflow-hidden"><div className="truncate">Explain nostalgia</div><div className="truncate font-normal opacity-50">to a kindergartener</div></div><div className="absolute bottom-0 right-0 top-0 flex items-center rounded-xl bg-gradient-to-l from-token-main-surface-secondary pl-6 pr-4 text-token-text-secondary opacity-0 can-hover:group-hover:opacity-100"><span className="" data-state="closed"><div className="rounded-lg bg-token-main-surface-primary p-1 shadow-xxs dark:shadow-none"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="icon-sm text-token-text-primary"><path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></span></div></div></div></button></span><span style={{"opacity": 1, "transform": "none"}}><button className="btn relative btn-neutral group w-full whitespace-nowrap rounded-xl px-4 py-3 text-left text-token-text-primary md:whitespace-normal" as="button"><div className="flex w-full gap-2 items-center justify-center"><div className="flex w-full items-center justify-between"><div className="flex flex-col overflow-hidden"><div className="truncate">Design a programming game</div><div className="truncate font-normal opacity-50">teach basics in a fun way</div></div><div className="absolute bottom-0 right-0 top-0 flex items-center rounded-xl bg-gradient-to-l from-token-main-surface-secondary pl-6 pr-4 text-token-text-secondary opacity-0 can-hover:group-hover:opacity-100"><span className="" data-state="closed"><div className="rounded-lg bg-token-main-surface-primary p-1 shadow-xxs dark:shadow-none"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="icon-sm text-token-text-primary"><path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></span></div></div></div></button></span></div><div className="flex flex-col gap-2 max-w-[12em]"><span style={{"opacity": 1, "transform": "none"}}><button className="btn relative btn-neutral group w-full whitespace-nowrap rounded-xl px-4 py-3 text-left text-token-text-primary md:whitespace-normal" as="button"><div className="flex w-full gap-2 items-center justify-center"><div className="flex w-full items-center justify-between"><div className="flex flex-col overflow-hidden"><div className="truncate">Write a message</div><div className="truncate font-normal opacity-50">that goes with a kitten gif for a friend on a rough day</div></div><div className="absolute bottom-0 right-0 top-0 flex items-center rounded-xl bg-gradient-to-l from-token-main-surface-secondary pl-6 pr-4 text-token-text-secondary opacity-0 can-hover:group-hover:opacity-100"><span className="" data-state="closed"><div className="rounded-lg bg-token-main-surface-primary p-1 shadow-xxs dark:shadow-none"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="icon-sm text-token-text-primary"><path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></span></div></div></div></button></span><span style={{"opacity": 1, "transform": "none"}}><button className="btn relative btn-neutral group w-full whitespace-nowrap rounded-xl px-4 py-3 text-left text-token-text-primary md:whitespace-normal" as="button"><div className="flex w-full gap-2 items-center justify-center"><div className="flex w-full items-center justify-between"><div className="flex flex-col overflow-hidden"><div className="truncate">Make me a personal webpage</div><div className="truncate font-normal opacity-50">after asking me three questions</div></div><div className="absolute bottom-0 right-0 top-0 flex items-center rounded-xl bg-gradient-to-l from-token-main-surface-secondary pl-6 pr-4 text-token-text-secondary opacity-0 can-hover:group-hover:opacity-100"><span className="" data-state="closed"><div className="rounded-lg bg-token-main-surface-primary p-1 shadow-xxs dark:shadow-none"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="icon-sm text-token-text-primary"><path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></span></div></div></div></button></span></div></div></div></div></div></div></div></div></div>
           <Slider images={images}/>
        </FadeInSection> 
     </section>

     <section id="products" className="bg[var(--hh-color-sundrenched-stone)] !relative">
          <h2 className="h-0 w-0 sr-only">Products</h2>
          <FadeInSection>
          <Products />
        </FadeInSection> 
     </section>

         <section id="testimonials" className="">
          <h2 className="h-0 w-0 sr-only">Testimonials</h2>
          <TestimonialSection reviews={allReviews}/>
        </section>
       <section id="about" className="">
          <h2 className="h-0 w-0 sr-only">About Us</h2>
          <AboutSection  aboutData={aboutData}/>    
        </section>
        
        <section id="porfolio"  className="bg-gray-200 ">
          <h2 className="h-0 w-0 sr-only"> PORTFOLIO</h2>
          <Porfolio team={team} />
        </section>
        

        <section id="CONTACT" className="!relative ">
          <h2 className="h-0 w-0 sr-only">CONTACT</h2>
          <ContactSection />
        </section>
      
        <section id="SIGNUP" className="">
          <h2 className="h-0 w-0 sr-only">SIGNUP</h2>
          <ContactSection />
        </section>

    {/* <TalwindUiTest /> */}
 {/* <div className="content relative">
        <p>
          <b>This example demonstrates how to hide a navbar when the user starts to scroll the page.</b>
        </p>
        <p>Scroll down this frame to see the effect!</p>
        <p>Scroll up to show the navbar.</p>
        <p>
          Lorem ipsum dolor dummy text sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.
        </p>
        <p>
          Lorem ipsum dolor dummy text sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.
        </p>
      </div> */}
        <ProductCardDisplay productsSample={proucdtsTeaser} />
        <section id="section2"  className="h-[30vh] bg-gray-200">
          <h2>Testimonials</h2>
          <p>Content of section 2 goes here...</p>
        </section>
        
        <section id="About"   className="h-[30vh]">
          <h2>About Us</h2>
          <p>Content of section 3 goes here...</p>
        </section>
        
       
  <div className="max-w-lg 3xl:max-w-xl">
  <h1 className="font-display text-4xl">
    Data to <span className="text-neon-cyan">enrich</span> your online business
  </h1>
</div> 
  {/* <TestSliderComponent /> */}
{/* <Header items={items} /> */}

{/* <div className="StyledWidgetMenu--hkf06h jnSKfE"><a className="StyledWidgetLink--4kybrr jKGdSQ"><div className="StyledWidgetIcon--eypg5o dKiKfO"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M9 1.688a7.313 7.313 0 110 14.625A7.313 7.313 0 019 1.688zm0 1.218a6.094 6.094 0 100 12.188A6.094 6.094 0 009 2.906zm0 2.438a.61.61 0 110 1.218.61.61 0 010-1.218zm.61 6.703a.61.61 0 01-1.22 0v-3.7a.61.61 0 111.22 0v3.7z" transform="translate(3 3)" fill-rule="evenodd"></path></svg></div><span className="StyledSpan--1x62xq3 cUibYJ">Learn more</span></a><button className="StyledWidgetButton--mwhbzw djuuNz"><div className="StyledWidgetIcon--eypg5o dKiKfO"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M5.812 19.138a.663.663 0 01-.943 0 .666.666 0 010-.943l2.054-2.054C4.744 14.741 4 12.805 4 12c0-1.741 2.803-6 8-6 2.001 0 3.263.607 3.961 1.103l2.242-2.241a.666.666 0 11.942.942L5.812 19.138zm4.396-6.282l2.653-2.652A1.994 1.994 0 0012 10c-1.103 0-2 .898-2 2 0 .3.08.589.208.856zM12 7.333c-4.523 0-6.667 3.744-6.667 4.667 0 .297.476 1.954 2.562 3.168l1.359-1.358c-.047-.043-.101-.075-.135-.133A3.337 3.337 0 0112 8.667c.66 0 1.293.202 1.835.562l1.162-1.161c-.55-.34-1.502-.735-2.997-.735zm0 8A.667.667 0 0111.956 14 2.198 2.198 0 0014 11.956a.666.666 0 111.33.087 3.537 3.537 0 01-3.288 3.289H12zm-1.84 1.113c.582.146 1.201.22 1.84.22 4.523 0 6.667-3.743 6.667-4.666 0-.279-.289-1.185-1.182-2.204a.667.667 0 111.004-.878C19.407 9.966 20 11.176 20 12c0 1.74-2.803 6-8 6a8.871 8.871 0 01-2.165-.262.667.667 0 11.326-1.292z" fill-rule="evenodd"></path></svg></div><span className="StyledSpan--1x62xq3 cUibYJ">Hide Brave Rewards</span></button></div>

<div className="StyledPage--fe902q khZTBp">
  <section className="GridItemStats--5i8f7y jLdpBh">
    <div className="StyledWidgetContainer--1jov4m4 cbiUxZ">
      <div className="StyledWidget--1djokeg jMVAhJ">
        <ul className="StyledStatsItemContainer--13e03tb ibMqmr">
          <li className="StyledStatsItem--wh00oi hYTCCD">
            <span className="StyledStatsItemCounter--1jb596m bhMHQz">
              2,236,852
            </span>
            <div className="StyledStatsItemDescription--1yb6osv hjGZAJ">
              Trackers &amp; ads blocked
            </div>
          </li>
          <li className="StyledStatsItem--wh00oi hYTCCD">
            <span className="StyledStatsItemCounter--1jb596m bhMHQz">8.84</span>
            <span className="StyledStatsItemText--ocvwwc iNtjSp">GB</span>
            <div className="StyledStatsItemDescription--1yb6osv hjGZAJ">
              Bandwidth saved
            </div>
          </li>
          <li className="StyledStatsItem--wh00oi hYTCCD">
            <span className="StyledStatsItemCounter--1jb596m bhMHQz">1.29</span>
            <span className="StyledStatsItemText--ocvwwc iNtjSp">days</span>
            <div className="StyledStatsItemDescription--1yb6osv hjGZAJ">
              Time saved
            </div>
          </li>
        </ul>
      </div>
      <div className="StyledWidgetMenuContainer--ksl75d eICHXB">
        <div className="StyledEllipsis--1mcbtmv coXjwo">
          <button className="IconButton--1y3qf24 hZfMQQ">
            <svg
              className="IconSVG--4xjhmv bFUiQN -13cebsx gsVqpv"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M18 14.25a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zm-6 0a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zm-6 0a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
  <section className="GridItemClock--1908i7x bMERFu">
    <div className="StyledWidgetContainer--1jov4m4 bvrbpw">
      <div className="StyledWidget--1djokeg jMVAhJ">
        <div className="StyledClock--efbcdm eGUBjy">
          <span className="StyledTime--k1g456 iaibqp">12:29 </span>
        </div>
      </div>
      <div className="StyledWidgetMenuContainer--ksl75d eICHXB">
        <div className="StyledEllipsis--1mcbtmv coXjwo">
          <button className="IconButton--1y3qf24 hZfMQQ">
            <svg
              className="IconSVG--4xjhmv bFUiQN -13cebsx gsVqpv"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M18 14.25a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zm-6 0a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zm-6 0a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
  <section className="GridItemTopSites--kc218f kPSJHu">
    <div className="StyledWidgetContainer--1jov4m4 cbiUxZ">
      <div className="StyledWidget--1djokeg eWnOVg">
        <div className="PagesContainer--1kqjrnw giwOAw">
          <div className="GridPagesContainer--7y7i32 iAVHEB">
            <div className="List--v5yyau YSsgU">
              <a
                role="button"
                tabIndex={0}
                aria-disabled="false"
                aria-roledescription="sortable"
                aria-describedby="DndDescribedBy-0"
                title="GitHub"
                href="https://github.com/"
                className="Tile--ygwtl8 ffAuA-d"
                style={{ opacity: 1 }}
              >
                <nav className="TileActionsContainer--gkhjcx keNGHe">
                  <button className="TileAction--13idoq6 dkeFtY">
                    <svg
                      width={16}
                      height={16}
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.3765 3.64109C15.3657 3.65188 15.3515 3.65525 15.3406 3.66537C15.3305 3.67617 15.3271 3.69034 15.3163 3.70113L14.3384 4.6787C14.3384 4.67937 14.3384 4.67937 14.3384 4.67937L4.68719 14.3296C4.68652 14.3302 4.68516 14.3316 4.68449 14.3323L4.68246 14.3343C4.65471 14.362 4.6202 14.3748 4.58907 14.3964C4.54914 14.4247 4.51395 14.4591 4.46659 14.4787L4.4632 14.48C4.46252 14.4807 4.46185 14.4807 4.46049 14.4814L0.92198 15.9487C0.839422 15.9831 0.752803 16 0.666861 16C0.493623 16 0.323092 15.9319 0.195194 15.8044C0.00436203 15.6134 -0.0524816 15.3267 0.051055 15.0778L1.52087 11.5338V11.5331C1.52154 11.5325 1.52222 11.5325 1.52222 11.5318C1.55538 11.4522 1.60343 11.3793 1.66568 11.3173L11.3223 1.66166C11.3223 1.66166 11.3223 1.66099 11.323 1.66099C11.323 1.66099 11.323 1.66099 11.3237 1.66031L12.3009 0.683421C12.3103 0.673301 12.3239 0.670602 12.334 0.661157C12.3442 0.649688 12.3482 0.634846 12.359 0.623377C13.1914 -0.207792 14.5441 -0.207792 15.3765 0.623377C16.2082 1.45589 16.2075 2.80992 15.3765 3.64109ZM2.37082 12.9654L1.89983 14.0995L3.03467 13.6293L2.37082 12.9654ZM4.21147 12.9202L12.9248 4.20712L11.794 3.07573L3.07933 11.7888L4.21147 12.9202ZM14.4338 1.56654C14.1212 1.25485 13.6143 1.25485 13.3017 1.56654C13.2922 1.57666 13.2787 1.58003 13.2685 1.5888C13.2584 1.60027 13.2543 1.61511 13.2435 1.62658L12.7367 2.13324L13.8674 3.26463L14.3736 2.75864C14.3844 2.74785 14.3987 2.74448 14.4095 2.73436C14.4196 2.72356 14.423 2.70939 14.4338 2.6986C14.7458 2.38624 14.7458 1.8789 14.4338 1.56654Z"
                        fillRule="evenodd"
                        fill="#212529"
                      />
                    </svg>
                  </button>
                </nav>
                <img
                  src="chrome://favicon/size/64@1x/https://github.com/"
                  className="TileFavicon--159imu3 eTFtaT"
                />
                <p className="TileTitle--1vakbel bxFJAj">GitHub</p>
              </a>
              <a
                role="button"
                tabIndex={0}
                aria-disabled="false"
                aria-roledescription="sortable"
                aria-describedby="DndDescribedBy-0"
                title="(20+) Facebook"
                href="https://www.facebook.com/"
                className="Tile--ygwtl8 ffAuA-d"
                style={{ opacity: 1 }}
              >
                <nav className="TileActionsContainer--gkhjcx keNGHe">
                  <button className="TileAction--13idoq6 dkeFtY">
                    <svg
                      width={16}
                      height={16}
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.3765 3.64109C15.3657 3.65188 15.3515 3.65525 15.3406 3.66537C15.3305 3.67617 15.3271 3.69034 15.3163 3.70113L14.3384 4.6787C14.3384 4.67937 14.3384 4.67937 14.3384 4.67937L4.68719 14.3296C4.68652 14.3302 4.68516 14.3316 4.68449 14.3323L4.68246 14.3343C4.65471 14.362 4.6202 14.3748 4.58907 14.3964C4.54914 14.4247 4.51395 14.4591 4.46659 14.4787L4.4632 14.48C4.46252 14.4807 4.46185 14.4807 4.46049 14.4814L0.92198 15.9487C0.839422 15.9831 0.752803 16 0.666861 16C0.493623 16 0.323092 15.9319 0.195194 15.8044C0.00436203 15.6134 -0.0524816 15.3267 0.051055 15.0778L1.52087 11.5338V11.5331C1.52154 11.5325 1.52222 11.5325 1.52222 11.5318C1.55538 11.4522 1.60343 11.3793 1.66568 11.3173L11.3223 1.66166C11.3223 1.66166 11.3223 1.66099 11.323 1.66099C11.323 1.66099 11.323 1.66099 11.3237 1.66031L12.3009 0.683421C12.3103 0.673301 12.3239 0.670602 12.334 0.661157C12.3442 0.649688 12.3482 0.634846 12.359 0.623377C13.1914 -0.207792 14.5441 -0.207792 15.3765 0.623377C16.2082 1.45589 16.2075 2.80992 15.3765 3.64109ZM2.37082 12.9654L1.89983 14.0995L3.03467 13.6293L2.37082 12.9654ZM4.21147 12.9202L12.9248 4.20712L11.794 3.07573L3.07933 11.7888L4.21147 12.9202ZM14.4338 1.56654C14.1212 1.25485 13.6143 1.25485 13.3017 1.56654C13.2922 1.57666 13.2787 1.58003 13.2685 1.5888C13.2584 1.60027 13.2543 1.61511 13.2435 1.62658L12.7367 2.13324L13.8674 3.26463L14.3736 2.75864C14.3844 2.74785 14.3987 2.74448 14.4095 2.73436C14.4196 2.72356 14.423 2.70939 14.4338 2.6986C14.7458 2.38624 14.7458 1.8789 14.4338 1.56654Z"
                        fillRule="evenodd"
                        fill="#212529"
                      />
                    </svg>
                  </button>
                </nav>
                <img
                  src="chrome://favicon/size/64@1x/https://www.facebook.com/"
                  className="TileFavicon--159imu3 eTFtaT"
                />
                <p className="TileTitle--1vakbel bxFJAj">(20+) Facebook</p>
              </a>
              <a
                role="button"
                tabIndex={0}
                aria-disabled="false"
                aria-roledescription="sortable"
                aria-describedby="DndDescribedBy-0"
                title="Naser2/stores"
                href="https://github.com/Naser2/stores-market-place"
                className="Tile--ygwtl8 ffAuA-d"
                style={{ opacity: 1 }}
              >
                <nav className="TileActionsContainer--gkhjcx keNGHe">
                  <button className="TileAction--13idoq6 dkeFtY">
                    <svg
                      width={16}
                      height={16}
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.3765 3.64109C15.3657 3.65188 15.3515 3.65525 15.3406 3.66537C15.3305 3.67617 15.3271 3.69034 15.3163 3.70113L14.3384 4.6787C14.3384 4.67937 14.3384 4.67937 14.3384 4.67937L4.68719 14.3296C4.68652 14.3302 4.68516 14.3316 4.68449 14.3323L4.68246 14.3343C4.65471 14.362 4.6202 14.3748 4.58907 14.3964C4.54914 14.4247 4.51395 14.4591 4.46659 14.4787L4.4632 14.48C4.46252 14.4807 4.46185 14.4807 4.46049 14.4814L0.92198 15.9487C0.839422 15.9831 0.752803 16 0.666861 16C0.493623 16 0.323092 15.9319 0.195194 15.8044C0.00436203 15.6134 -0.0524816 15.3267 0.051055 15.0778L1.52087 11.5338V11.5331C1.52154 11.5325 1.52222 11.5325 1.52222 11.5318C1.55538 11.4522 1.60343 11.3793 1.66568 11.3173L11.3223 1.66166C11.3223 1.66166 11.3223 1.66099 11.323 1.66099C11.323 1.66099 11.323 1.66099 11.3237 1.66031L12.3009 0.683421C12.3103 0.673301 12.3239 0.670602 12.334 0.661157C12.3442 0.649688 12.3482 0.634846 12.359 0.623377C13.1914 -0.207792 14.5441 -0.207792 15.3765 0.623377C16.2082 1.45589 16.2075 2.80992 15.3765 3.64109ZM2.37082 12.9654L1.89983 14.0995L3.03467 13.6293L2.37082 12.9654ZM4.21147 12.9202L12.9248 4.20712L11.794 3.07573L3.07933 11.7888L4.21147 12.9202ZM14.4338 1.56654C14.1212 1.25485 13.6143 1.25485 13.3017 1.56654C13.2922 1.57666 13.2787 1.58003 13.2685 1.5888C13.2584 1.60027 13.2543 1.61511 13.2435 1.62658L12.7367 2.13324L13.8674 3.26463L14.3736 2.75864C14.3844 2.74785 14.3987 2.74448 14.4095 2.73436C14.4196 2.72356 14.423 2.70939 14.4338 2.6986C14.7458 2.38624 14.7458 1.8789 14.4338 1.56654Z"
                        fillRule="evenodd"
                        fill="#212529"
                      />
                    </svg>
                  </button>
                </nav>
                <img
                  src="chrome://favicon/size/64@1x/https://github.com/Naser2/stores-market-place"
                  className="TileFavicon--159imu3 eTFtaT"
                />
                <p className="TileTitle--1vakbel bxFJAj">Naser2/stores</p>
              </a>
              <a
                role="button"
                tabIndex={0}
                aria-disabled="false"
                aria-roledescription="sortable"
                aria-describedby="DndDescribedBy-0"
                title="Come With You"
                href="https://tours.comewithyou.com/684/855/?age=45&password%22iloveyou23332=&email=%22jeffmurphypress@gmail.com%22"
                className="Tile--ygwtl8 ffAuA-d"
                style={{ opacity: 1 }}
              >
                <nav className="TileActionsContainer--gkhjcx keNGHe">
                  <button className="TileAction--13idoq6 dkeFtY">
                    <svg
                      width={16}
                      height={16}
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.3765 3.64109C15.3657 3.65188 15.3515 3.65525 15.3406 3.66537C15.3305 3.67617 15.3271 3.69034 15.3163 3.70113L14.3384 4.6787C14.3384 4.67937 14.3384 4.67937 14.3384 4.67937L4.68719 14.3296C4.68652 14.3302 4.68516 14.3316 4.68449 14.3323L4.68246 14.3343C4.65471 14.362 4.6202 14.3748 4.58907 14.3964C4.54914 14.4247 4.51395 14.4591 4.46659 14.4787L4.4632 14.48C4.46252 14.4807 4.46185 14.4807 4.46049 14.4814L0.92198 15.9487C0.839422 15.9831 0.752803 16 0.666861 16C0.493623 16 0.323092 15.9319 0.195194 15.8044C0.00436203 15.6134 -0.0524816 15.3267 0.051055 15.0778L1.52087 11.5338V11.5331C1.52154 11.5325 1.52222 11.5325 1.52222 11.5318C1.55538 11.4522 1.60343 11.3793 1.66568 11.3173L11.3223 1.66166C11.3223 1.66166 11.3223 1.66099 11.323 1.66099C11.323 1.66099 11.323 1.66099 11.3237 1.66031L12.3009 0.683421C12.3103 0.673301 12.3239 0.670602 12.334 0.661157C12.3442 0.649688 12.3482 0.634846 12.359 0.623377C13.1914 -0.207792 14.5441 -0.207792 15.3765 0.623377C16.2082 1.45589 16.2075 2.80992 15.3765 3.64109ZM2.37082 12.9654L1.89983 14.0995L3.03467 13.6293L2.37082 12.9654ZM4.21147 12.9202L12.9248 4.20712L11.794 3.07573L3.07933 11.7888L4.21147 12.9202ZM14.4338 1.56654C14.1212 1.25485 13.6143 1.25485 13.3017 1.56654C13.2922 1.57666 13.2787 1.58003 13.2685 1.5888C13.2584 1.60027 13.2543 1.61511 13.2435 1.62658L12.7367 2.13324L13.8674 3.26463L14.3736 2.75864C14.3844 2.74785 14.3987 2.74448 14.4095 2.73436C14.4196 2.72356 14.423 2.70939 14.4338 2.6986C14.7458 2.38624 14.7458 1.8789 14.4338 1.56654Z"
                        fillRule="evenodd"
                        fill="#212529"
                      />
                    </svg>
                  </button>
                </nav>
                <img
                  src="chrome://favicon/size/64@1x/https://tours.comewithyou.com/684/855/?age=45&password%22iloveyou23332=&email=%22jeffmurphypress@gmail.com%22"
                  className="TileFavicon--159imu3 eTFtaT"
                />
                <p className="TileTitle--1vakbel bxFJAj">Come With You</p>
              </a>
              <a
                role="button"
                tabIndex={0}
                aria-disabled="false"
                aria-roledescription="sortable"
                aria-describedby="DndDescribedBy-0"
                title="Inbox (46)"
                href="https://mail.google.com/mail/u/0/#inbox"
                className="Tile--ygwtl8 ffAuA-d"
                style={{ opacity: 1 }}
              >
                <nav className="TileActionsContainer--gkhjcx keNGHe">
                  <button className="TileAction--13idoq6 dkeFtY">
                    <svg
                      width={16}
                      height={16}
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.3765 3.64109C15.3657 3.65188 15.3515 3.65525 15.3406 3.66537C15.3305 3.67617 15.3271 3.69034 15.3163 3.70113L14.3384 4.6787C14.3384 4.67937 14.3384 4.67937 14.3384 4.67937L4.68719 14.3296C4.68652 14.3302 4.68516 14.3316 4.68449 14.3323L4.68246 14.3343C4.65471 14.362 4.6202 14.3748 4.58907 14.3964C4.54914 14.4247 4.51395 14.4591 4.46659 14.4787L4.4632 14.48C4.46252 14.4807 4.46185 14.4807 4.46049 14.4814L0.92198 15.9487C0.839422 15.9831 0.752803 16 0.666861 16C0.493623 16 0.323092 15.9319 0.195194 15.8044C0.00436203 15.6134 -0.0524816 15.3267 0.051055 15.0778L1.52087 11.5338V11.5331C1.52154 11.5325 1.52222 11.5325 1.52222 11.5318C1.55538 11.4522 1.60343 11.3793 1.66568 11.3173L11.3223 1.66166C11.3223 1.66166 11.3223 1.66099 11.323 1.66099C11.323 1.66099 11.323 1.66099 11.3237 1.66031L12.3009 0.683421C12.3103 0.673301 12.3239 0.670602 12.334 0.661157C12.3442 0.649688 12.3482 0.634846 12.359 0.623377C13.1914 -0.207792 14.5441 -0.207792 15.3765 0.623377C16.2082 1.45589 16.2075 2.80992 15.3765 3.64109ZM2.37082 12.9654L1.89983 14.0995L3.03467 13.6293L2.37082 12.9654ZM4.21147 12.9202L12.9248 4.20712L11.794 3.07573L3.07933 11.7888L4.21147 12.9202ZM14.4338 1.56654C14.1212 1.25485 13.6143 1.25485 13.3017 1.56654C13.2922 1.57666 13.2787 1.58003 13.2685 1.5888C13.2584 1.60027 13.2543 1.61511 13.2435 1.62658L12.7367 2.13324L13.8674 3.26463L14.3736 2.75864C14.3844 2.74785 14.3987 2.74448 14.4095 2.73436C14.4196 2.72356 14.423 2.70939 14.4338 2.6986C14.7458 2.38624 14.7458 1.8789 14.4338 1.56654Z"
                        fillRule="evenodd"
                        fill="#212529"
                      />
                    </svg>
                  </button>
                </nav>
                <img
                  src="chrome://favicon/size/64@1x/https://mail.google.com/mail/u/0/#inbox"
                  className="TileFavicon--159imu3 eTFtaT"
                />
                <p className="TileTitle--1vakbel bxFJAj">Inbox (46)</p>
              </a>
              <a
                role="button"
                tabIndex={0}
                aria-disabled="false"
                aria-roledescription="sortable"
                aria-describedby="DndDescribedBy-0"
                title="0.41999"
                href="https://www.binance.com/en/trade/DOGE_USDT?type=cross"
                className="Tile--ygwtl8 ffAuA-d"
                style={{ opacity: 1 }}
              >
                <nav className="TileActionsContainer--gkhjcx keNGHe">
                  <button className="TileAction--13idoq6 dkeFtY">
                    <svg
                      width={16}
                      height={16}
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.3765 3.64109C15.3657 3.65188 15.3515 3.65525 15.3406 3.66537C15.3305 3.67617 15.3271 3.69034 15.3163 3.70113L14.3384 4.6787C14.3384 4.67937 14.3384 4.67937 14.3384 4.67937L4.68719 14.3296C4.68652 14.3302 4.68516 14.3316 4.68449 14.3323L4.68246 14.3343C4.65471 14.362 4.6202 14.3748 4.58907 14.3964C4.54914 14.4247 4.51395 14.4591 4.46659 14.4787L4.4632 14.48C4.46252 14.4807 4.46185 14.4807 4.46049 14.4814L0.92198 15.9487C0.839422 15.9831 0.752803 16 0.666861 16C0.493623 16 0.323092 15.9319 0.195194 15.8044C0.00436203 15.6134 -0.0524816 15.3267 0.051055 15.0778L1.52087 11.5338V11.5331C1.52154 11.5325 1.52222 11.5325 1.52222 11.5318C1.55538 11.4522 1.60343 11.3793 1.66568 11.3173L11.3223 1.66166C11.3223 1.66166 11.3223 1.66099 11.323 1.66099C11.323 1.66099 11.323 1.66099 11.3237 1.66031L12.3009 0.683421C12.3103 0.673301 12.3239 0.670602 12.334 0.661157C12.3442 0.649688 12.3482 0.634846 12.359 0.623377C13.1914 -0.207792 14.5441 -0.207792 15.3765 0.623377C16.2082 1.45589 16.2075 2.80992 15.3765 3.64109ZM2.37082 12.9654L1.89983 14.0995L3.03467 13.6293L2.37082 12.9654ZM4.21147 12.9202L12.9248 4.20712L11.794 3.07573L3.07933 11.7888L4.21147 12.9202ZM14.4338 1.56654C14.1212 1.25485 13.6143 1.25485 13.3017 1.56654C13.2922 1.57666 13.2787 1.58003 13.2685 1.5888C13.2584 1.60027 13.2543 1.61511 13.2435 1.62658L12.7367 2.13324L13.8674 3.26463L14.3736 2.75864C14.3844 2.74785 14.3987 2.74448 14.4095 2.73436C14.4196 2.72356 14.423 2.70939 14.4338 2.6986C14.7458 2.38624 14.7458 1.8789 14.4338 1.56654Z"
                        fillRule="evenodd"
                        fill="#212529"
                      />
                    </svg>
                  </button>
                </nav>
                <img
                  src="chrome://favicon/size/64@1x/https://www.binance.com/en/trade/DOGE_USDT?type=cross"
                  className="TileFavicon--159imu3 eTFtaT"
                />
                <p className="TileTitle--1vakbel bxFJAj">0.41999</p>
              </a>
              <a
                role="button"
                tabIndex={0}
                aria-disabled="false"
                aria-roledescription="sortable"
                aria-describedby="DndDescribedBy-0"
                title="Slack"
                href="https://slack.com/intl/en-fr/help/articles/219889247-Manage-your-time-zone-preferences"
                className="Tile--ygwtl8 ffAuA-d"
                style={{ opacity: 1 }}
              >
                <nav className="TileActionsContainer--gkhjcx keNGHe">
                  <button className="TileAction--13idoq6 dkeFtY">
                    <svg
                      width={16}
                      height={16}
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.3765 3.64109C15.3657 3.65188 15.3515 3.65525 15.3406 3.66537C15.3305 3.67617 15.3271 3.69034 15.3163 3.70113L14.3384 4.6787C14.3384 4.67937 14.3384 4.67937 14.3384 4.67937L4.68719 14.3296C4.68652 14.3302 4.68516 14.3316 4.68449 14.3323L4.68246 14.3343C4.65471 14.362 4.6202 14.3748 4.58907 14.3964C4.54914 14.4247 4.51395 14.4591 4.46659 14.4787L4.4632 14.48C4.46252 14.4807 4.46185 14.4807 4.46049 14.4814L0.92198 15.9487C0.839422 15.9831 0.752803 16 0.666861 16C0.493623 16 0.323092 15.9319 0.195194 15.8044C0.00436203 15.6134 -0.0524816 15.3267 0.051055 15.0778L1.52087 11.5338V11.5331C1.52154 11.5325 1.52222 11.5325 1.52222 11.5318C1.55538 11.4522 1.60343 11.3793 1.66568 11.3173L11.3223 1.66166C11.3223 1.66166 11.3223 1.66099 11.323 1.66099C11.323 1.66099 11.323 1.66099 11.3237 1.66031L12.3009 0.683421C12.3103 0.673301 12.3239 0.670602 12.334 0.661157C12.3442 0.649688 12.3482 0.634846 12.359 0.623377C13.1914 -0.207792 14.5441 -0.207792 15.3765 0.623377C16.2082 1.45589 16.2075 2.80992 15.3765 3.64109ZM2.37082 12.9654L1.89983 14.0995L3.03467 13.6293L2.37082 12.9654ZM4.21147 12.9202L12.9248 4.20712L11.794 3.07573L3.07933 11.7888L4.21147 12.9202ZM14.4338 1.56654C14.1212 1.25485 13.6143 1.25485 13.3017 1.56654C13.2922 1.57666 13.2787 1.58003 13.2685 1.5888C13.2584 1.60027 13.2543 1.61511 13.2435 1.62658L12.7367 2.13324L13.8674 3.26463L14.3736 2.75864C14.3844 2.74785 14.3987 2.74448 14.4095 2.73436C14.4196 2.72356 14.423 2.70939 14.4338 2.6986C14.7458 2.38624 14.7458 1.8789 14.4338 1.56654Z"
                        fillRule="evenodd"
                        fill="#212529"
                      />
                    </svg>
                  </button>
                </nav>
                <img
                  src="chrome://favicon/size/64@1x/https://slack.com/intl/en-fr/help/articles/219889247-Manage-your-time-zone-preferences"
                  className="TileFavicon--159imu3 eTFtaT"
                />
                <p className="TileTitle--1vakbel bxFJAj">Slack</p>
              </a>
              <a
                role="button"
                tabIndex={0}
                aria-disabled="false"
                aria-roledescription="sortable"
                aria-describedby="DndDescribedBy-0"
                title="Babel · The compiler for next generation JavaScript"
                href="http://babeljs.io/repl/#?babili=true&evaluate=false&lineWrap=false&presets=es2015%2Creact%2Cstage-2&code="
                className="Tile--ygwtl8 ffAuA-d"
                style={{ opacity: 1 }}
              >
                <nav className="TileActionsContainer--gkhjcx keNGHe">
                  <button className="TileAction--13idoq6 dkeFtY">
                    <svg
                      width={16}
                      height={16}
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.3765 3.64109C15.3657 3.65188 15.3515 3.65525 15.3406 3.66537C15.3305 3.67617 15.3271 3.69034 15.3163 3.70113L14.3384 4.6787C14.3384 4.67937 14.3384 4.67937 14.3384 4.67937L4.68719 14.3296C4.68652 14.3302 4.68516 14.3316 4.68449 14.3323L4.68246 14.3343C4.65471 14.362 4.6202 14.3748 4.58907 14.3964C4.54914 14.4247 4.51395 14.4591 4.46659 14.4787L4.4632 14.48C4.46252 14.4807 4.46185 14.4807 4.46049 14.4814L0.92198 15.9487C0.839422 15.9831 0.752803 16 0.666861 16C0.493623 16 0.323092 15.9319 0.195194 15.8044C0.00436203 15.6134 -0.0524816 15.3267 0.051055 15.0778L1.52087 11.5338V11.5331C1.52154 11.5325 1.52222 11.5325 1.52222 11.5318C1.55538 11.4522 1.60343 11.3793 1.66568 11.3173L11.3223 1.66166C11.3223 1.66166 11.3223 1.66099 11.323 1.66099C11.323 1.66099 11.323 1.66099 11.3237 1.66031L12.3009 0.683421C12.3103 0.673301 12.3239 0.670602 12.334 0.661157C12.3442 0.649688 12.3482 0.634846 12.359 0.623377C13.1914 -0.207792 14.5441 -0.207792 15.3765 0.623377C16.2082 1.45589 16.2075 2.80992 15.3765 3.64109ZM2.37082 12.9654L1.89983 14.0995L3.03467 13.6293L2.37082 12.9654ZM4.21147 12.9202L12.9248 4.20712L11.794 3.07573L3.07933 11.7888L4.21147 12.9202ZM14.4338 1.56654C14.1212 1.25485 13.6143 1.25485 13.3017 1.56654C13.2922 1.57666 13.2787 1.58003 13.2685 1.5888C13.2584 1.60027 13.2543 1.61511 13.2435 1.62658L12.7367 2.13324L13.8674 3.26463L14.3736 2.75864C14.3844 2.74785 14.3987 2.74448 14.4095 2.73436C14.4196 2.72356 14.423 2.70939 14.4338 2.6986C14.7458 2.38624 14.7458 1.8789 14.4338 1.56654Z"
                        fillRule="evenodd"
                        fill="#212529"
                      />
                    </svg>
                  </button>
                </nav>
                <img
                  src="chrome://favicon/size/64@1x/http://babeljs.io/repl/#?babili=true&evaluate=false&lineWrap=false&presets=es2015%2Creact%2Cstage-2&code="
                  className="TileFavicon--159imu3 eTFtaT"
                />
                <p className="TileTitle--1vakbel bxFJAj">
                  Babel · The compiler for next generation JavaScript
                </p>
              </a>
              <a
                role="button"
                tabIndex={0}
                aria-disabled="false"
                aria-roledescription="sortable"
                aria-describedby="DndDescribedBy-0"
                title="Dashboard"
                href="https://accounts.binance.com/"
                className="Tile--ygwtl8 ffAuA-d"
                style={{ opacity: 1 }}
              >
                <nav className="TileActionsContainer--gkhjcx keNGHe">
                  <button className="TileAction--13idoq6 dkeFtY">
                    <svg
                      width={16}
                      height={16}
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.3765 3.64109C15.3657 3.65188 15.3515 3.65525 15.3406 3.66537C15.3305 3.67617 15.3271 3.69034 15.3163 3.70113L14.3384 4.6787C14.3384 4.67937 14.3384 4.67937 14.3384 4.67937L4.68719 14.3296C4.68652 14.3302 4.68516 14.3316 4.68449 14.3323L4.68246 14.3343C4.65471 14.362 4.6202 14.3748 4.58907 14.3964C4.54914 14.4247 4.51395 14.4591 4.46659 14.4787L4.4632 14.48C4.46252 14.4807 4.46185 14.4807 4.46049 14.4814L0.92198 15.9487C0.839422 15.9831 0.752803 16 0.666861 16C0.493623 16 0.323092 15.9319 0.195194 15.8044C0.00436203 15.6134 -0.0524816 15.3267 0.051055 15.0778L1.52087 11.5338V11.5331C1.52154 11.5325 1.52222 11.5325 1.52222 11.5318C1.55538 11.4522 1.60343 11.3793 1.66568 11.3173L11.3223 1.66166C11.3223 1.66166 11.3223 1.66099 11.323 1.66099C11.323 1.66099 11.323 1.66099 11.3237 1.66031L12.3009 0.683421C12.3103 0.673301 12.3239 0.670602 12.334 0.661157C12.3442 0.649688 12.3482 0.634846 12.359 0.623377C13.1914 -0.207792 14.5441 -0.207792 15.3765 0.623377C16.2082 1.45589 16.2075 2.80992 15.3765 3.64109ZM2.37082 12.9654L1.89983 14.0995L3.03467 13.6293L2.37082 12.9654ZM4.21147 12.9202L12.9248 4.20712L11.794 3.07573L3.07933 11.7888L4.21147 12.9202ZM14.4338 1.56654C14.1212 1.25485 13.6143 1.25485 13.3017 1.56654C13.2922 1.57666 13.2787 1.58003 13.2685 1.5888C13.2584 1.60027 13.2543 1.61511 13.2435 1.62658L12.7367 2.13324L13.8674 3.26463L14.3736 2.75864C14.3844 2.74785 14.3987 2.74448 14.4095 2.73436C14.4196 2.72356 14.423 2.70939 14.4338 2.6986C14.7458 2.38624 14.7458 1.8789 14.4338 1.56654Z"
                        fillRule="evenodd"
                        fill="#212529"
                      />
                    </svg>
                  </button>
                </nav>
                <img
                  src="chrome://favicon/size/64@1x/https://accounts.binance.com/"
                  className="TileFavicon--159imu3 eTFtaT"
                />
                <p className="TileTitle--1vakbel bxFJAj">Dashboard</p>
              </a>
              <a
                role="button"
                tabIndex={0}
                aria-disabled="false"
                aria-roledescription="sortable"
                aria-describedby="DndDescribedBy-0"
                title="(14) Codementor"
                href="https://www.codementor.io/"
                className="Tile--ygwtl8 ffAuA-d"
                style={{ opacity: 1 }}
              >
                <nav className="TileActionsContainer--gkhjcx keNGHe">
                  <button className="TileAction--13idoq6 dkeFtY">
                    <svg
                      width={16}
                      height={16}
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.3765 3.64109C15.3657 3.65188 15.3515 3.65525 15.3406 3.66537C15.3305 3.67617 15.3271 3.69034 15.3163 3.70113L14.3384 4.6787C14.3384 4.67937 14.3384 4.67937 14.3384 4.67937L4.68719 14.3296C4.68652 14.3302 4.68516 14.3316 4.68449 14.3323L4.68246 14.3343C4.65471 14.362 4.6202 14.3748 4.58907 14.3964C4.54914 14.4247 4.51395 14.4591 4.46659 14.4787L4.4632 14.48C4.46252 14.4807 4.46185 14.4807 4.46049 14.4814L0.92198 15.9487C0.839422 15.9831 0.752803 16 0.666861 16C0.493623 16 0.323092 15.9319 0.195194 15.8044C0.00436203 15.6134 -0.0524816 15.3267 0.051055 15.0778L1.52087 11.5338V11.5331C1.52154 11.5325 1.52222 11.5325 1.52222 11.5318C1.55538 11.4522 1.60343 11.3793 1.66568 11.3173L11.3223 1.66166C11.3223 1.66166 11.3223 1.66099 11.323 1.66099C11.323 1.66099 11.323 1.66099 11.3237 1.66031L12.3009 0.683421C12.3103 0.673301 12.3239 0.670602 12.334 0.661157C12.3442 0.649688 12.3482 0.634846 12.359 0.623377C13.1914 -0.207792 14.5441 -0.207792 15.3765 0.623377C16.2082 1.45589 16.2075 2.80992 15.3765 3.64109ZM2.37082 12.9654L1.89983 14.0995L3.03467 13.6293L2.37082 12.9654ZM4.21147 12.9202L12.9248 4.20712L11.794 3.07573L3.07933 11.7888L4.21147 12.9202ZM14.4338 1.56654C14.1212 1.25485 13.6143 1.25485 13.3017 1.56654C13.2922 1.57666 13.2787 1.58003 13.2685 1.5888C13.2584 1.60027 13.2543 1.61511 13.2435 1.62658L12.7367 2.13324L13.8674 3.26463L14.3736 2.75864C14.3844 2.74785 14.3987 2.74448 14.4095 2.73436C14.4196 2.72356 14.423 2.70939 14.4338 2.6986C14.7458 2.38624 14.7458 1.8789 14.4338 1.56654Z"
                        fillRule="evenodd"
                        fill="#212529"
                      />
                    </svg>
                  </button>
                </nav>
                <img
                  src="chrome://favicon/size/64@1x/https://www.codementor.io/"
                  className="TileFavicon--159imu3 eTFtaT"
                />
                <p className="TileTitle--1vakbel bxFJAj">(14) Codementor</p>
              </a>
              <a
                role="button"
                tabIndex={0}
                aria-disabled="false"
                aria-roledescription="sortable"
                aria-describedby="DndDescribedBy-0"
                title="0.00000873"
                href="https://www.binance.com/en/trade/SHIB_USDT?type=isolated"
                className="Tile--ygwtl8 ffAuA-d"
                style={{ opacity: 1 }}
              >
                <nav className="TileActionsContainer--gkhjcx keNGHe">
                  <button className="TileAction--13idoq6 dkeFtY">
                    <svg
                      width={16}
                      height={16}
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.3765 3.64109C15.3657 3.65188 15.3515 3.65525 15.3406 3.66537C15.3305 3.67617 15.3271 3.69034 15.3163 3.70113L14.3384 4.6787C14.3384 4.67937 14.3384 4.67937 14.3384 4.67937L4.68719 14.3296C4.68652 14.3302 4.68516 14.3316 4.68449 14.3323L4.68246 14.3343C4.65471 14.362 4.6202 14.3748 4.58907 14.3964C4.54914 14.4247 4.51395 14.4591 4.46659 14.4787L4.4632 14.48C4.46252 14.4807 4.46185 14.4807 4.46049 14.4814L0.92198 15.9487C0.839422 15.9831 0.752803 16 0.666861 16C0.493623 16 0.323092 15.9319 0.195194 15.8044C0.00436203 15.6134 -0.0524816 15.3267 0.051055 15.0778L1.52087 11.5338V11.5331C1.52154 11.5325 1.52222 11.5325 1.52222 11.5318C1.55538 11.4522 1.60343 11.3793 1.66568 11.3173L11.3223 1.66166C11.3223 1.66166 11.3223 1.66099 11.323 1.66099C11.323 1.66099 11.323 1.66099 11.3237 1.66031L12.3009 0.683421C12.3103 0.673301 12.3239 0.670602 12.334 0.661157C12.3442 0.649688 12.3482 0.634846 12.359 0.623377C13.1914 -0.207792 14.5441 -0.207792 15.3765 0.623377C16.2082 1.45589 16.2075 2.80992 15.3765 3.64109ZM2.37082 12.9654L1.89983 14.0995L3.03467 13.6293L2.37082 12.9654ZM4.21147 12.9202L12.9248 4.20712L11.794 3.07573L3.07933 11.7888L4.21147 12.9202ZM14.4338 1.56654C14.1212 1.25485 13.6143 1.25485 13.3017 1.56654C13.2922 1.57666 13.2787 1.58003 13.2685 1.5888C13.2584 1.60027 13.2543 1.61511 13.2435 1.62658L12.7367 2.13324L13.8674 3.26463L14.3736 2.75864C14.3844 2.74785 14.3987 2.74448 14.4095 2.73436C14.4196 2.72356 14.423 2.70939 14.4338 2.6986C14.7458 2.38624 14.7458 1.8789 14.4338 1.56654Z"
                        fillRule="evenodd"
                        fill="#212529"
                      />
                    </svg>
                  </button>
                </nav>
                <img
                  src="chrome://favicon/size/64@1x/https://www.binance.com/en/trade/SHIB_USDT?type=isolated"
                  className="TileFavicon--159imu3 eTFtaT"
                />
                <p className="TileTitle--1vakbel bxFJAj">0.00000873</p>
              </a>
              <button className="AddSiteTile--klhtg eZEDgy">
                <div className="AddSiteTileImage--1yuvzpo khAMzq">
                  <svg
                    width={20}
                    height={20}
                    xmlns="https://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 0.244141C9.58579 0.244141 9.25 0.579043 9.25 0.992167V9.22046H1C0.585786 9.22046 0.25 9.55536 0.25 9.96848C0.25 10.3816 0.585786 10.7165 1 10.7165H9.25V18.9448C9.25 19.3579 9.58579 19.6928 10 19.6928C10.4142 19.6928 10.75 19.3579 10.75 18.9448V10.7165H19C19.4142 10.7165 19.75 10.3816 19.75 9.96848C19.75 9.55536 19.4142 9.22046 19 9.22046H10.75V0.992167C10.75 0.579043 10.4142 0.244141 10 0.244141Z"
                      fillRule="evenodd"
                      fill="#fff"
                    />
                  </svg>
                </div>
                <p className="TileTitle--1vakbel bxFJAj">Add site</p>
              </button>
            </div>
            <div id="DndDescribedBy-0" style={{ display: "none" }}>
              To pick up a draggable item, press the space bar. While dragging,
              use the arrow keys to move the item. Press space again to drop the
              item in its new position, or press escape to cancel.
            </div>
            <div
              id="DndLiveRegion-0"
              role="status"
              aria-live="assertive"
              aria-atomic="true"
              style={{
                position: "fixed",
                width: 1,
                height: 1,
                margin: "-1px",
                border: 0,
                padding: 0,
                overflow: "hidden",
                clip: "rect(0px, 0px, 0px, 0px)",
                clipPath: "inset(100%)",
                whiteSpace: "nowrap"
              }}
            />
          </div>
        </div>
      </div>
      <div className="StyledWidgetMenuContainer--ksl75d gZsMpc">
        <div className="StyledEllipsis--1mcbtmv coXjwo">
          <button className="IconButton--1y3qf24 hZfMQQ">
            <svg
              className="IconSVG--4xjhmv bFUiQN -13cebsx gsVqpv"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M18 14.25a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zm-6 0a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zm-6 0a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
  <section className="GridItemWidgetStack--1pdp2cw gzmNbl">
    <div>
      <div className="StyledWidgetContainer--1jov4m4 bvrbpw">
        <div className="StyledWidget--1djokeg eFtICB">
          <div className="StyledTitleTab--tblz2j fdvBOS">
            <div className="Header--yna4q0 fSahjR">
              <div className="StyledTitle--goynxf cnRfvO">
                <div className="BraveTalkIcon--18dc153 cVFamb">
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.56 17.4014C19.4367 17.4683 19.3017 17.5 19.1667 17.5C19.005 17.5 18.8442 17.4532 18.7042 17.3604L15 14.8907V15.8334C15 16.7528 14.2525 17.5 13.3333 17.5H1.66667C0.7475 17.5 0 16.7528 0 15.8334V4.99991C0 4.08138 0.7475 3.33334 1.66667 3.33334H13.3333C14.2525 3.33334 15 4.08138 15 4.99991V5.94352L18.7042 3.47376C18.9592 3.30326 19.2892 3.28654 19.56 3.43197C19.8308 3.57739 20 3.85989 20 4.16663V16.6667C20 16.9743 19.8308 17.256 19.56 17.4014ZM18.3333 5.72454L14.6292 8.19347C14.6075 8.20768 14.5825 8.20935 14.56 8.22189C14.51 8.24947 14.4583 8.26953 14.4017 8.28624C14.3483 8.30212 14.2975 8.31299 14.2433 8.318C14.2167 8.32051 14.1933 8.33388 14.1667 8.33388C14.1383 8.33388 14.1142 8.32051 14.0858 8.31717C14.03 8.31215 13.9783 8.30129 13.925 8.28457C13.8725 8.26869 13.8242 8.24947 13.7775 8.2244C13.7317 8.20016 13.6908 8.17174 13.65 8.13914C13.605 8.10237 13.5658 8.06309 13.5292 8.01796C13.5125 7.99706 13.4883 7.98536 13.4733 7.96279C13.4592 7.94106 13.4567 7.91515 13.445 7.89259C13.4175 7.84327 13.3983 7.79313 13.3817 7.73797C13.365 7.6828 13.3533 7.63015 13.3483 7.57499C13.3458 7.54908 13.3333 7.52651 13.3333 7.5006V4.99991H1.66667V15.8652H13.3333V13.3336C13.3333 13.3077 13.3458 13.2851 13.3483 13.2592C13.3533 13.2032 13.365 13.1506 13.3817 13.0962C13.3983 13.0411 13.4175 12.9909 13.445 12.9408C13.4567 12.9182 13.4592 12.8931 13.4733 12.8714C13.4883 12.8488 13.5125 12.8363 13.53 12.8154C13.5658 12.7711 13.6042 12.7327 13.6492 12.6959C13.6908 12.6624 13.7325 12.6332 13.78 12.6081C13.825 12.5839 13.8708 12.5655 13.9208 12.5496C13.9767 12.5321 14.0317 12.5212 14.09 12.5162C14.1167 12.5128 14.1392 12.5003 14.1667 12.5003C14.1925 12.5003 14.2142 12.5128 14.2392 12.5153C14.2958 12.5204 14.3492 12.5312 14.4042 12.5479C14.4592 12.5647 14.51 12.5847 14.5592 12.6123C14.5817 12.624 14.6075 12.6257 14.6292 12.6407L18.3333 15.1096V5.72454Z"
                      fill="url(#paint0_linear)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="18.961"
                        y1="16.521"
                        x2="6.19294"
                        y2="-1.14309"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FA7250" />
                        <stop offset="0.407227" stopColor="#FF1893" />
                        <stop offset={1} stopColor="#A78AFF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                Brave Talk
              </div>
            </div>
          </div>
        </div>
        <div className="StyledWidgetMenuContainer--ksl75d gZsMpc">
          <div className="StyledEllipsis--1mcbtmv coXjwo">
            <button className="IconButton--1y3qf24 hZfMQQ">
              <svg
                className="IconSVG--4xjhmv bFUiQN -13cebsx gsVqpv"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 14.25a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zm-6 0a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zm-6 0a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z"
                  fillRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="StyledWidgetContainer--1jov4m4 bvrbpw">
        <div className="StyledWidget--1djokeg esJAFG">
          <div className="root--dkj80e hzzCVr">
            <div className="cardHeader--etn4pq gcgWfU">
              <svg viewBox="0 0 32 32" className="icon">
                <path
                  fillRule="evenodd"
                  fill="#fff"
                  d="M9.61 23.25h12.78L16 12 9.61 23.25z"
                />
                <path
                  d="M3 26.8l7.67-4.52L16 13V4a.45.45 0 00-.38.28l-6.27 11-6.26 11a.48.48 0 000 .48"
                  fill="#ff4724"
                  fillRule="evenodd"
                />
                <path
                  d="M16 4v9l5.29 9.31L29 26.8a.48.48 0 00-.05-.48l-6.26-11-6.27-11A.45.45 0 0016 4"
                  fill="#9e1f63"
                  fillRule="evenodd"
                />
                <path
                  d="M29 26.8l-7.67-4.52H10.71L3 26.8a.47.47 0 00.43.2h25.1a.47.47 0 00.43-.2"
                  fill="#662d91"
                  fillRule="evenodd"
                />
              </svg>
              <div className="cardHeaderText--apcx3a fJhZdX">Brave Rewards</div>
            </div>
            <div className="balance--q6h0n3 iXLKDt">
              <div className="needsBrowserUpdateView--gotz7m ezJBOw">
                <div className="needsBrowserUpdateContentHeader--1vtj3vu bUNAsa">
                  Oops! Your browser cannot receive Brave Private Ads.
                </div>
                <div className="needsBrowserUpdateContentBody--1lwwb0t gHrmvX">
                  Your browser needs to be updated to continue seeing ads.
                </div>
              </div>
              <div className="pendingRewards--gtjf14 iEbjqI" />
            </div>
            <div className="progressHeader--5ol7qt glPAeL">
              <div className="progressHeaderText--15r6rgf izYCJd">
                <span className="date-range">Apr 1 - Apr 30</span>&nbsp;Progress
              </div>
              <div className="progressHeaderBorder--1bcmc7c hkJmQp" />
            </div>
            <div className="progress--1gq2ppl eUcACN">
              <div className="earning--1740j0h bOXLZp">
                <div className="progressItemLabel--qshsbn gIMtUa">
                  Earning
                  <span className="earningInfo--17fdg34 doLLYj">
                    <svg
                      className="icon"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 14"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.9484 11.9502C10.6265 13.272 8.86837 14 6.99758 14c-1.87021 0-3.6283-.728-4.95083-2.0504-2.729-2.72943-2.729-7.17035 0-9.89918C3.36928.728 5.12737 0 6.99758 0c1.87079 0 3.62892.728 4.95082 2.05042C13.2715 3.37225 14 5.13042 14 7s-.7285 3.6277-2.0516 4.9502Zm-.8247-9.07495c-1.1019-1.10192-2.56703-1.70858-4.12612-1.70858-1.55851 0-3.02368.60666-4.1255 1.70858-2.274652 2.27442-2.274652 5.97508 0 8.24955 1.10182 1.1019 2.56699 1.7085 4.1255 1.7085 1.55909 0 3.02422-.6066 4.12612-1.7085C12.2261 10.0234 12.833 8.55808 12.833 7c0-1.55808-.6069-3.02283-1.7093-4.12475ZM8.16514 11.0833H5.83119c-.32168 0-.58348-.2613-.58348-.5833 0-.322.2618-.58333.58348-.58333h.58349V7.58333h-.58349c-.32168 0-.58348-.26133-.58348-.58333s.2618-.58333.58348-.58333h1.16698c.32226 0 .58348.26133.58348.58333v2.91667h.58349c.32227 0 .58348.26133.58348.58333s-.26121.5833-.58348.5833ZM6.99817 5.25c-.64337 0-1.16698-.52383-1.16698-1.16725 0-.64283.52361-1.16608 1.16698-1.16608.64394 0 1.16697.52325 1.16697 1.16608 0 .64342-.52303 1.16725-1.16697 1.16725Z"
                        fill="currentColor"
                        opacity=".8"
                      />
                    </svg>
                    <div className="tooltip">
                      <div className="earningTooltip--1co86lu ctnxIC">
                        The tokens you earn this month will begin processing on
                        May 8.
                      </div>
                    </div>
                  </span>
                </div>
                <div className="progressItemAmount--70l53l juIazc">
                  <span className="amount">0.000</span>&nbsp;
                  <span className="currency">BAT</span>
                </div>
              </div>
              <div className="giving--7j1w4f kynjec">
                <div className="progressItemLabel--qshsbn gIMtUa">Giving</div>
                <div className="progressItemAmount--70l53l juIazc">
                  <span className="amount">0.0</span>&nbsp;
                  <span className="currency">BAT</span>
                </div>
              </div>
            </div>
            <div className="settings--1ljwq3s hVaVbd">
              <a
                href="chrome://rewards"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="icon"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 21 21"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.5 18.5803c-.0832 0-.1669-.0015-.2512-.0044l-1.14198 1.7397c-.29436.4486-.85136.662-1.36877.5128-1.5706-.4468-2.99983-1.2672-4.17096-2.3853-.39236-.3758-.48528-.9659-.23928-1.4462l.94923-1.8527c-.08611-.137-.16745-.2764-.24388-.4181l-2.09794-.1112c-.53621-.0257-1.00073-.3961-1.134319-.9209C.602489 12.907.5 12.106.5 11.299c0-.807.102489-1.60799.301343-2.39677.133147-.52308.597667-.89347 1.129837-.91892l2.10198-.1114c.07643-.14173.15777-.28115.24388-.41813L3.32777 5.601c-.24596-.4802-.15304-1.07027.24024-1.44696C4.73822 3.03681 6.16745 2.21638 7.7354 1.77035c.52006-.14993 1.07706.06348 1.37137.51194l1.14203 1.73983c.0843-.00293.168-.00441.2512-.00441.0832 0 .1669.00148.2512.00441l1.142-1.73975c.2944-.44858.8511-.66161 1.3697-.51275 1.5699.44686 2.9991 1.26737 4.17 2.3853.3919.37539.4839.96394.2393 1.44616l-.9493 1.85287c.0858.1367.167.27605.2436.41795l2.0984.11122c.5354.02572 1.0006.39613 1.1342.92086.1984.78703.3009 1.58802.3009 2.39502 0 .807-.1025 1.608-.3013 2.3968-.1332.5229-.5984.8933-1.1299.9189l-2.1023.1114c-.0766.1419-.1578.2812-.2436.4179l.9507 1.8557c.2432.4794.1512 1.068-.2416 1.4442-1.17 1.1171-2.5992 1.9376-4.1674 2.384-.5203.1493-1.077-.0637-1.3714-.5122l-1.142-1.7398c-.0843.0029-.168.0044-.2512.0044zm-2.56859.6698l1.25752-1.9157c.15933-.2427.43979-.3775.72885-.3502.20072.019.39462.0288.58222.0288.1876 0 .3815-.0098.5822-.0288.2891-.0273.5696.1075.7289.3502l1.2577 1.916c1.1499-.3637 2.2034-.967 3.0924-1.7655l-1.0441-2.0378c-.1344-.2624-.1102-.5781.0627-.8169.2252-.3111.4178-.641.5761-.9878.1211-.2656.3799-.4418.6714-.4573l2.3107-.1224c.1287-.5829.1947-1.172.1947-1.7637 0-.5921-.0661-1.1816-.1946-1.7637l-2.3108-.12246c-.2915-.01545-.5503-.19166-.6714-.45725-.1583-.3468-.3509-.67674-.5761-.98782-.1729-.23883-.1971-.55449-.0627-.81689l1.0441-2.03778c-.8893-.79849-1.9421-1.40152-3.0925-1.76545L11.8111 5.2636c-.1593.24272-.4398.37746-.7289.35015-.2007-.01897-.3946-.02873-.5822-.02873-.1876 0-.3815.00976-.58222.02873-.28906.02731-.56952-.10743-.72885-.35015L7.93138 3.3478c-1.15022.36359-2.20355.96682-3.09255 1.76526l1.04408 2.03782c.13444.2624.11022.57806-.06268.81689-.2268.31326-.41944.64292-.5755.98656-.12093.26625-.38003.44303-.67205.45851l-2.31069.12245c-.12871.58291-.19467 1.17201-.19467 1.76371 0 .592.06605 1.1816.19463 1.7637l2.31073.1224c.29202.0155.55112.1923.67205.4586.15606.3436.3487.6733.5755.9865.1729.2388.19712.5545.06268.8169l-1.04406 2.0378c.88899.7983 1.94147 1.4011 3.09256 1.7652zm-1.0753-7.9511c0-2.01251 1.63139-3.64391 3.64389-3.64391s3.6439 1.6314 3.6439 3.64391c0 2.0125-1.6314 3.6439-3.6439 3.6439s-3.64389-1.6314-3.64389-3.6439zm1.56733 0c0 1.1469.92968 2.0766 2.07656 2.0766 1.1469 0 2.0766-.9297 2.0766-2.0766S11.6469 9.22241 10.5 9.22241c-1.14688 0-2.07656.92969-2.07656 2.07659z"
                  />
                </svg>
                Rewards settings
              </a>
            </div>
          </div>
        </div>
        <div className="StyledWidgetMenuContainer--ksl75d gZsMpc">
          <div className="StyledEllipsis--1mcbtmv fiJrzU">
            <button className="IconButton--1y3qf24 hZfMQQ">
              <svg
                className="IconSVG--4xjhmv bFUiQN -13cebsx gsVqpv"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 14.25a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zm-6 0a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zm-6 0a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z"
                  fillRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <button className="StyledWrapper--9ccyce rknac">
      <div className="StyledTitle--1xn7zs1 bkJXFz">
        <img
          src="6f8718d3477915993e13b8680374db4ffbc27ab36a32dd5a4af15b4a944d1984.svg"
          className="StyledEditIcon--s8wift jdtRMO"
        />
        <span>Edit Cards</span>
      </div>
    </button>
  </section>
  <footer className="Footer--1s6e5zh kVEyEi">
    <div className="FooterContent--1keml6e coNYkQ">
      <section className="GridItemCredits--va8mai kNndLw">
        <div className="PhotoName--2faa0q keqHhX">
          Photo by{" "}
          <a
            href="https://critchfieldcreativestudio.darkroom.tech/"
            rel="noreferrer noopener"
            target="_blank"
            className="Link--19kh57y dwTIVx"
          >
            Lori Jean
          </a>
        </div>
      </section>
      <section className="GridItemNavigation--1ti82rx fjdFka">
        <nav className="Navigation--i9m9ii dEkKRb">
          <div className="IconButtonContainer--msd4p3 djSkOM">
            <label className="IconButtonSideText--blucpo gdaugf">
              <button className="IconButton--1y3qf24 dMWYsU">
                <svg
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  focusable="false"
                  className="sc-fKgJPI cxbltl"
                >
                  <path d="M4 8h5.18a3 3 0 0 0 5.64 0H28a1 1 0 0 0 0-2H14.82a3 3 0 0 0-5.64 0H4a1 1 0 0 0 0 2zm8-2a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM28 15h-3.18a3 3 0 0 0-5.64 0H4a1 1 0 0 0 0 2h15.18a3 3 0 0 0 5.64 0H28a1 1 0 0 0 0-2zm-6 2a1 1 0 1 1 1-1 1 1 0 0 1-1 1zM28 24H14.82a3 3 0 0 0-5.64 0H4a1 1 0 0 0 0 2h5.18a3 3 0 0 0 5.64 0H28a1 1 0 0 0 0-2zm-16 2a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" />
                </svg>
              </button>
              Customize
            </label>
          </div>
          <a
            title="Edit Preferences"
            href="chrome://settings"
            className="IconLink--807p8i hESdhk"
          >
            <svg
              viewBox="0 0 32 32"
              aria-hidden="true"
              focusable="false"
              className="sc-bCwfaz hzzSzX"
            >
              <path d="M16 11a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3z" />
              <path d="M28.13 13.41l-2.55-.33a9.8 9.8 0 0 0-.76-1.83l1.54-2.06a1 1 0 0 0-.09-1.31l-2.22-2.2a1 1 0 0 0-1.31-.09l-2.07 1.58a10.72 10.72 0 0 0-1.76-.73l-.32-2.56a1 1 0 0 0-1-.88H14.4a1 1 0 0 0-1 .87l-.34 2.57a10 10 0 0 0-1.82.76L9.2 5.64a1 1 0 0 0-1.32.09L5.68 8a1 1 0 0 0-.08 1.27l1.56 2a10 10 0 0 0-.76 1.82l-2.53.32a1 1 0 0 0-.87 1v3.2a1 1 0 0 0 .88 1l2.5.31a10.19 10.19 0 0 0 .76 1.84l-1.51 2.06a1 1 0 0 0 .1 1.3L8 26.32a1 1 0 0 0 1.31.09l2-1.54a9.8 9.8 0 0 0 1.78.73l.33 2.53a1 1 0 0 0 1 .87h3.2a1 1 0 0 0 1-.87l.34-2.54a10.16 10.16 0 0 0 1.81-.75l2.08 1.53a1 1 0 0 0 1.3-.1l2.2-2.22a1 1 0 0 0 .09-1.31l-1.55-2a9.93 9.93 0 0 0 .74-1.79l2.53-.33a1 1 0 0 0 .87-1V14.4a1 1 0 0 0-.9-.99zM27 16.72l-2.33.28a1 1 0 0 0-.84.77 8 8 0 0 1-1 2.45 1 1 0 0 0 .06 1.14l1.42 1.87-1 1-1.92-1.41a1 1 0 0 0-1.12 0 7.89 7.89 0 0 1-2.47 1 1 1 0 0 0-.77.84L16.72 27h-1.44L15 24.68a1 1 0 0 0-.77-.85 7.61 7.61 0 0 1-2.45-1 1 1 0 0 0-1.13.06l-1.9 1.4-1-1 1.39-1.91a1 1 0 0 0 0-1.12 8.06 8.06 0 0 1-1-2.49A1 1 0 0 0 7.3 17L5 16.72v-1.44L7.32 15a1 1 0 0 0 .84-.77 8.15 8.15 0 0 1 1.05-2.49 1 1 0 0 0-.05-1.16L7.72 8.74l1-1 1.85 1.46a1 1 0 0 0 1.14.05 7.89 7.89 0 0 1 2.49-1 1 1 0 0 0 .8-.88L15.28 5h1.43L17 7.36a1 1 0 0 0 .78.85 7.86 7.86 0 0 1 2.44 1 1 1 0 0 0 1.13-.05l1.91-1.45 1 1-1.42 1.89a1 1 0 0 0-.05 1.14 8 8 0 0 1 1.05 2.49 1 1 0 0 0 .84.76l2.34.31z" />
            </svg>
          </a>
          <a
            title="View and Manage Bookmarks"
            href="chrome://bookmarks"
            className="IconLink--807p8i hESdhk"
          >
            <svg
              viewBox="0 0 32 32"
              aria-hidden="true"
              focusable="false"
              className="sc-iwajpm kydRHc"
            >
              <path d="M26.147 23.296A9.961 9.961 0 0 0 26.203 27H27a1 1 0 0 1 0 2H8.056C5.819 29 4 27.215 4 25V6.153C4 4.392 5.509 3 7.334 3h17.842C26.178 3 27 3.8 27 4.803V21a1 1 0 0 1 0 2h-.28a.998.998 0 0 1-.573.296zM24.17 23H8.056C6.915 23 6 23.898 6 25c0 1.102.915 2 2.056 2h16.112a11.954 11.954 0 0 1 0-4zM6 21.55A4.083 4.083 0 0 1 8.056 21H25V5h-4v9a1 1 0 0 1-1.634.773L16 12.012l-3.366 2.761A1 1 0 0 1 11 14V5H7.334C6.579 5 6 5.534 6 6.152v15.399zM13 5v6.886l2.366-1.94a1 1 0 0 1 1.268 0L19 11.885V5h-6z" />
            </svg>
          </a>
          <a
            title="View your browsing history"
            href="chrome://history"
            className="IconLink--807p8i hESdhk"
          >
            <svg
              viewBox="0 0 32 32"
              aria-hidden="true"
              focusable="false"
              className="sc-cxNHIi fHUQtx"
            >
              <path d="M16 7.2a1 1 0 0 0-1 1v6.945c-.595.347-1 .984-1 1.722A2 2 0 1 0 17.645 18H21.2a1 1 0 0 0 0-2h-3.406a2 2 0 0 0-.794-.855V8.2a1 1 0 0 0-1-1M30 16c0 7.72-6.28 14-14 14S2 23.72 2 16a1 1 0 0 1 2 0c0 6.617 5.383 12 12 12s12-5.383 12-12S22.617 4 16 4c-4.393 0-7.781 2.085-9.855 6h2.922a1 1 0 0 1 0 2h-5.2a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v3.18C7.327 4.185 11.224 2 16 2c7.72 0 14 6.28 14 14" />
            </svg>
          </a>
          <a
            title="You can start a private call in Brave."
            href="https://talk.brave.com/widget"
            className="IconLink--807p8i hESdhk"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M23.5 20.18a.95.95 0 01-.99-.05l-4.26-2.84v1.09c0 1.05-.86 1.91-1.92 1.91H2.92A1.92 1.92 0 011 18.38V5.92C1 4.86 1.86 4 2.92 4h13.41c1.06 0 1.92.86 1.92 1.92V7l4.26-2.84a.96.96 0 011.49.8v14.37c0 .36-.2.68-.5.85zM22.07 6.75l-4.26 2.84c-.02.02-.05.02-.08.03a.93.93 0 01-.36.11l-.09.02-.1-.02a.91.91 0 01-.64-.34c-.01-.03-.04-.04-.06-.07l-.03-.08a.92.92 0 01-.11-.37l-.02-.08V5.92H2.92v12.5h13.41V15.5l.02-.09a.9.9 0 01.04-.18.91.91 0 01.07-.18l.03-.08.07-.07a.93.93 0 01.64-.34l.1-.02.07.02a.93.93 0 01.37.11l.08.03 4.26 2.84V6.75z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </nav>
      </section>
    </div>
  </footer>
  <div className="GridItemNavigationBraveToday--1h4x6pp hTUNEk">
    <div className="Hint--slqg8z jEZrkR">
      <p>Scroll for Brave News</p>
      <div className="Graphic--1r1io2n hfzOmT">
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
          focusable="false"
          className="sc-jSFjdj sc-kfYoZR jcTaHb lpaEYv"
        >
          <path d="M16 19.047l11.04-9.2a1.5 1.5 0 0 1 1.92 2.305l-12 10a1.5 1.5 0 0 1-1.92 0l-12-10a1.5 1.5 0 1 1 1.92-2.304l11.04 9.2z" />
        </svg>
      </div>
    </div>
  </div>
</div> */}





     {/* <div id="welcome-screen-foreground">
      <div id="welcome-screen-logo">
        <img
          id="welcome-screen-logo-image"
          src="https://static.wixstatic.com/media/2ada6c_f5ce470294f0443f984aa05cf5ea585a~mv2.png/v1/fill/w_240,h_175,al_c,usm_0.66_1.00_0.01/2ada6c_f5ce470294f0443f984aa05cf5ea585a~mv2.png"
          alt=""
        />
        <div id="welcome-screen-logo-cover" />
      </div>
    </div>
  <div id="welcome-screen-background">

  
    </div> */}
          {/* <div id="welcome-screen" className="welcome-screen-state-logo-intro">
            <div id="welcome-screen-background"></div>
             <div id="welcome-screen-foreground">
                <div id="welcome-screen-logo">
                    <img id="welcome-screen-logo-image" src="https://static.wixstatic.com/media/2ada6c_f5ce470294f0443f984aa05cf5ea585a~mv2.png/v1/fill/w_240,h_175,al_c,usm_0.66_1.00_0.01/2ada6c_f5ce470294f0443f984aa05cf5ea585a~mv2.png" alt=""/>
                    <div id="welcome-screen-logo-cover"></div>
                </div>    
            </div>
        </div>   */}

        {/* <div id="welcome-screen" className="welcome-screen-state-outro"> 
            <div id="welcome-screen-background"></div>
            <div id="welcome-screen-foreground">
                <div id="welcome-screen-logo">
                    <img id="welcome-screen-logo-image" src="https://static.wixstatic.com/media/3ba387_810750d6eb2e4001a058a3d993dc07d6~mv2.jpg/v1/fill/w_240,h_164,al_c,q_80,usm_0.66_1.00_0.01/3ba387_810750d6eb2e4001a058a3d993dc07d6~mv2.jpg" alt=""/>
                    <div id="welcome-screen-logo-cover"></div>
                </div>
            </div>
            
        </div> */}


    {/* <WelcomeScreen /> */}
    <section id="LEGACY-PRODUCT-INFO" className="flex-auto overflow-hidden relative mx-auto mt-16 grid  max-w-container grid-cols-1 px-4 sm:mt-20 sm:px-6 lg:px-8 xl:mt-32">
      {/* <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8 relative overflow-auto">
        <div className="lg:col-span-5 lg:col-start-8">
          <ProductInfo />
        </div>

        <ImageGallery />

        <div className="mt-8 lg:col-span-5">
          <div>
            <ColorPicker />
            <SizePicker />
            <AddToCart  />
          </div>

          <ProductDetails />
          <Policies />
        </div>
      </div> */}

      {/* <Reviews reviews={allReviews} /> */}
      <RelatedProducts />
    </section>
      <div className="bg-crema lg:p-smm">
  <div className="flex justify-between flex-col-reverse lg:flex-row">
    <ul className="container py-10 lg:p-0 w-full lg:w-8/12 flex flex-col lg:grid lg:grid-cols-3 lg:gap-x-5">
      <li className="text-lg footer-tab">
        <input
          className="hidden"
          type="checkbox"
          id="footer-1"
          data-index={1}
        />
        <label
          htmlFor="footer-1"
          className="footer-label block py-4 lg:pt-0 lg:mb-4 text-lg font-sans uppercase"
        >
          Company
        </label>
        <div className="footer-content">
          <div className="font-serif mb-1  pt-1 lg:p-0">
            <a href="/pages/about" className="inline">
              About
            </a>
          </div>
          <div className="font-serif mb-1 ">
            <a href="/pages/store-locator" className="inline">
              Store Finder
            </a>
          </div>
          <div className="font-serif mb-1 ">
            <a href="https://codeswitch.eadem.co/" className="inline">
              Journal
            </a>
          </div>
          <div className="font-serif mb-1 ">
            <a href="/pages/beauty-burden" className="inline">
              Beauty Burden
            </a>
          </div>
          <div className="font-serif mb-1 ">
            <a href="/pages/friend" className="inline">
              Get $10 Off
            </a>
          </div>
        </div>
      </li>
      <li className="text-lg footer-tab">
        <input className="hidden" type="checkbox" id="footer-2" />
        <label
          htmlFor="footer-2"
          className="footer-label block py-4 lg:pt-0 lg:mb-4 text-lg font-sans uppercase"
        >
          Help
        </label>
        <div className="footer-content">
          <div className="font-serif mb-1  pt-1 lg:p-0">
            <a href="/pages/faq" className="inline">
              FAQ
            </a>
          </div>
          <div className="font-serif mb-1 ">
            <a href="/pages/recycling" className="inline">
              Recycling
            </a>
          </div>
          <div className="font-serif mb-1 ">
            <a href="/pages/shipping-returns" className="inline">
              Shipping &amp; Returns
            </a>
          </div>
          <div className="font-serif mb-1 ">
            <a href="/pages/contact-us" className="inline">
              Contact Us
            </a>
          </div>
        </div>
      </li>
      <li className="text-lg footer-tab">
        <input className="hidden" type="checkbox" id="footer-3" />
        <label
          htmlFor="footer-3"
          className="footer-label block py-4 lg:pt-0 lg:mb-4 font-sans uppercase"
        >
          Community
        </label>
        <div className="footer-content">
          <div className="font-serif mb-1  pt-1 lg:p-0">
            <a
              href="https://www.instagram.com/eadem.co/"
              className="inline"
              target="_blank"
            >
              Instagram
            </a>
          </div>
        </div>
      </li>
      <li className="block lg:hidden text-lg footer-tab">
        <input className="hidden" type="checkbox" id="footer-4" />
        <label
          htmlFor="footer-4"
          className="footer-label block py-4 lg:pt-0 lg:mb-4 font-sans uppercase"
        >
          Legal
        </label>
        <div className="footer-content">
          <div className="font-serif mb-1 pt-1 lg:p-0">
            <a href="/pages/terms-conditions" className="inline">
              Terms and Conditions
            </a>
          </div>
          <div className="font-serif mb-1">
            <a href="/pages/privacy-policy" className="inline">
              Privacy Policy
            </a>
          </div>
          <div className="font-serif mb-1">
            <a
              data-acsb-custom-trigger="true"
              className="inline cursor-pointer"
            >
              Accessibility
            </a>
          </div>
        </div>
      </li>
    </ul>
    <div className="container py-10 lg:p-0 w-full lg:w-4/12 bg-apricot lg:bg-crema">
      <form className="flex flex-col text-lg newsletter-form">
        <div className="mb-10 serializer">
          <span>
            <p>
              <strong>10% OFF YOUR FIRST ORDER </strong>— Signup for the latest
              product news, first-person essays, and expert skin tips.
            </p>
          </span>
        </div>
        <div className="relative pb-2 md:w-1/2 lg:w-full flex items-center border-b border-ochre val-w-email">
          <input
            className="w-full bg-transparent outline-none uppercase font-sans placeholder-ochre text-ochre"
            type="text"
            placeholder="ENTER YOUR EMAIL"
            data-index={0}
          />
          <div className="absolute right-0 text-ochre font-sans text-xs tracking-plus leading-relaxed">
            <span>Incorrect format, please try again.</span>
          </div>
          {/* <button
            type="submit"
            role="submit"
            title="submit"
            className="absolute right-0 w-3 h-3 focus:outline-none"
          >
            <svg className="fill-current text-ochre">
              <use xlinkHref="#svg-arrow" />
            </svg>
          </button> */}
        </div>
      </form>
    </div>
  </div>
</div>

    </div>
  );
}


const SectionEadem = () => {return  <div id="shopify-section-template--17756626223357__about" className="shopify-section py-12">
<div className="flex flex-col lg:flex-row">
  <div className="block lg:hidden index_pledge_mobile relative overflow-hidden mb-sx">
    <img
      className="img-full reveal"
      data-src="//eadem.co/cdn/shop/files/PLEDGE-Hero_6a8136bc-c3e8-4ce7-9e4d-3cc1c25cf449.jpg?v=1619458381"
      alt=" | Pledge | EADEM"
      src="https://eadem.co/cdn/shop/files/PLEDGE-Hero_6a8136bc-c3e8-4ce7-9e4d-3cc1c25cf449.jpg?v=1619458381"
    />
  </div>
  <div className="hidden lg:block w-1/2 h-full flex items-center relative">
    <img
      className="_pledge_img reveal"
      data-src="//eadem.co/cdn/shop/files/PLEDGE-Hero_6a8136bc-c3e8-4ce7-9e4d-3cc1c25cf449.jpg?v=1619458381"
      alt=" | Pledge | EADEM"
      src="https://eadem.co/cdn/shop/files/PLEDGE-Hero_6a8136bc-c3e8-4ce7-9e4d-3cc1c25cf449.jpg?v=1619458381"
    />
  </div>
  <div className="container lg:p-0 w-full lg:w-1/2 flex items-center justify-center">
    <div
      className="flex flex-col text-center
items-center justify-center max-width-xs"
    >
      <h3 className="text-xl flex flex-col mb-8 serializer">
        <p>Because we deserve</p>
        <p>
          <strong>BETTER, CLEANER INGREDIENTS, TOO</strong>
        </p>
      </h3>
      <div className="font-serif text-base lg:text-lg lg:mb-20 serializer">
        <span>
          <p>
            In beauty, women of color have{" "}
            <em>always been an afterthought. </em>Most products “made for us”
            contain unsafe chemicals to lighten our skin or straighten our
            hair so we’ll meet European beauty standards. No more harmful
            ingredients. <em>No more compromising.</em> No more adhering to
            “traditional” beauty standards — to us, health is (and always has
            been) the only beauty standard. <br />{" "}
          </p>
        </span>
    </div>
    <span className="hidden lg:block mb-2 text-sans-xs-caps">
      THE EADEM PLEDGE:
    </span>
    <ul className="flex flex-col lg:flex-row items-center lg:items-baseline lg:justify-between w-full my-sx lg:mb-0">
      <li className="w-full lg:w-1/4 flex flex-col items-center text-center relative text-xs mb-1 lg:mb-0">
        <div className="hidden lg:block pledge-img">
          <img
            className="img-full reveal"
            // data-src="//eadem.co/cdn/shop/files/PLEDGE-Icons-05_0ad0cad6-2829-490a-b0e1-ce5415caa06a.png?v=1619458341"
            alt="Melanin-Loving Ingredients | Pledge | EADEM"
            src="https://eadem.co/cdn/shop/files/PLEDGE-Icons-05_0ad0cad6-2829-490a-b0e1-ce5415caa06a.png?v=1619458341"
          />
        </div>
        <span className="lg:mt-8 tracking-plus">
          Melanin-Loving Ingredients
        </span>
      </li>
      <li className="w-full lg:w-1/4 flex flex-col items-center text-center relative text-xs mb-1 lg:mb-0">
        <div className="hidden lg:block pledge-img">
          <img
            className="img-full reveal"
            // data-src="//eadem.co/cdn/shop/files/PLEDGE-Icons-02_7bd73cb0-d0a2-464f-9d86-e1b09324115a.png?v=1619458341"
            alt="No Bleaching Agents | Pledge | EADEM"
            src="https://eadem.co/cdn/shop/files/PLEDGE-Icons-02_7bd73cb0-d0a2-464f-9d86-e1b09324115a.png?v=1619458341"
          />
        </div>
        <span className="lg:mt-8 tracking-plus">No Bleaching Agents</span>
      </li>
      <li className="w-full lg:w-1/4 flex flex-col items-center text-center relative text-xs mb-1 lg:mb-0">
        <div className="hidden lg:block pledge-img">
          <img
            className="img-full reveal"
            // data-src="//eadem.co/cdn/shop/files/PLEDGE-Icons-04_a5e88128-92d8-41ba-aab8-5648b313f9f0.png?v=1619458342"
            alt="Vegan | Pledge | EADEM"
            src="https://eadem.co/cdn/shop/files/PLEDGE-Icons-04_a5e88128-92d8-41ba-aab8-5648b313f9f0.png?v=1619458342"
          />
        </div>
        <span className="lg:mt-8 tracking-plus">Vegan</span>
      </li>
      <li className="w-full lg:w-1/4 flex flex-col items-center text-center relative text-xs mb-1 lg:mb-0">
        <div className="hidden lg:block pledge-img">
          <img
            className="img-full reveal"
            // data-src="//eadem.co/cdn/shop/files/PLEDGE-Icons-03_84a18cb9-c795-4862-9599-5d95184cb393.png?v=1619458341"
            alt="Cruelty-Free | Pledge | EADEM"
            src="https://eadem.co/cdn/shop/files/PLEDGE-Icons-03_84a18cb9-c795-4862-9599-5d95184cb393.png?v=1619458341"
          />
        </div>
        <span className="lg:mt-8 tracking-plus">Cruelty-Free</span>
      </li>
    </ul>
  </div>
</div>
</div>
</div>
}