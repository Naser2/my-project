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
import { aboutData, allReviews, dispatchData, heroImages, images, navigation, proucdtsTeaser, servicesReviews, team } from "@/data";
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
import massiElevateHero from '@/assets/images/massi-elevate-hero-fotor.jpeg'
import massiElevateHeroDesktop from '@/assets/images/massi-elevate-hero-fotor-resized.png'
import Clients from '@/components/Clients';
import SubscribeSection from '@/components/SubscribeSection';
const items = [
  {
    id: 'account',
    href: 'https://www.sephora.fr/connexion/',
    text: 'Se connecter',
    tooltipText: 'Profitez de vos offres et vos bons plans',
  },
  // Add more items as needed
];

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



export default function HomePage() {
  return (
    <div className="lg:max-w max-w-none overflow-hidden">
   


      {/* <div className="relative min-h-65 p-10 flex w-full SlidingHeroContainer_ForwardLink_root__EtbqJ__eBvMq pt-4"></div> */}
    {/* <TestButton>Hello Test</TestButton> */}
      <section id="Massi-Beauty-Intro" className="relative mt-14 bg[linear-gradient(to top,#060404 0,hsl(0deg 0% 100%) 100%),linear-gradient(90deg,rgb(var(--gradient-from,85 85 85)/.2) 0,rgb(var(--gradient-to,85 85 85)/.2) 100%)]">
        <h2 className="h-0 w-0 sr-only">Introducing Wholesome beauty </h2>
        {heroImages.map((heroData, index) => (  <SlidingHeroContainer key={index} heroData={heroData}/> ))}
       </section>

    

    <section id="mission" className=" bg-gray-300 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <h2 className="h-0 w-0 sr-only">Mission</h2>
        <DispatchElements data={dispatchData} />
        
    </section>
    <section id="mission" className="bg-gray-300 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <h2 className="h-0 w-0 sr-only">Mission</h2>
        <CocoChanel property={null}/>
    </section>

       {/* <img src="http://i.giphy.com/DzIXZlXmh61na.gif" alt=""  className="w-64"/> */}
      <section id="services"  className="bg-gray-200 bg-gradient-to-r from-indigo-500 via-[var(--agedBlack)] to-[#72757b]">
        <h2 className="h-0 w-0 sr-only">Services</h2>
      {navigation.categories.map((assetsCategories, index) => {
        const Services = assetsCategories.name =='Services' ? assetsCategories : null;
        if (Services) {
          const { hero } = Services;
          if (hero) {
            return (
              <ImageHero
                imageSrcDesktop={massiElevateHeroDesktop.src}
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
              {/* <div className="absolute bottom-full  top-[-30em] left-0 right-0">
                <div className="relative h-screen sm:h-full w-full">
                  <div className="flex flex-col gap-3.5 pb-3.5 pt-2"><div><div className="h-full flex ml-1 md:w-full md:m-auto gap-0 md:gap-2 justify-center"><div className="grow"><div className="absolute bottom-full left-0 mb-4 flex w-full grow gap-2 px-1 pb-1 sm:px-2 sm:pb-0 md:static md:mb-0 md:max-w-none"><div className="grid w-full grid-flow-row grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2"><div className="flex flex-col gap-2 max-w-[12em]"><span style={{"opacity": 1, "transform": "none"}}><button className="btn relative btn-neutral group w-full whitespace-nowrap rounded-xl px-4 py-3 text-left text-token-text-primary md:whitespace-normal" as="button"><div className="flex w-full gap-2 items-center justify-center"><div className="flex w-full items-center justify-between"><div className="flex flex-col overflow-hidden"><div className="truncate">Explain nostalgia</div><div className="truncate font-normal opacity-50">to a kindergartener</div></div><div className="absolute bottom-0 right-0 top-0 flex items-center rounded-xl bg-gradient-to-l from-token-main-surface-secondary pl-6 pr-4 text-token-text-secondary opacity-0 can-hover:group-hover:opacity-100"><span className="" data-state="closed"><div className="rounded-lg bg-token-main-surface-primary p-1 shadow-xxs dark:shadow-none"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="icon-sm text-token-text-primary"><path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></span></div></div></div></button></span><span style={{"opacity": 1, "transform": "none"}}><button className="btn relative btn-neutral group w-full whitespace-nowrap rounded-xl px-4 py-3 text-left text-token-text-primary md:whitespace-normal" as="button"><div className="flex w-full gap-2 items-center justify-center"><div className="flex w-full items-center justify-between"><div className="flex flex-col overflow-hidden"><div className="truncate">Design a programming game</div><div className="truncate font-normal opacity-50">teach basics in a fun way</div></div><div className="absolute bottom-0 right-0 top-0 flex items-center rounded-xl bg-gradient-to-l from-token-main-surface-secondary pl-6 pr-4 text-token-text-secondary opacity-0 can-hover:group-hover:opacity-100"><span className="" data-state="closed"><div className="rounded-lg bg-token-main-surface-primary p-1 shadow-xxs dark:shadow-none"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="icon-sm text-token-text-primary"><path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></span></div></div></div></button></span></div><div className="flex flex-col gap-2 max-w-[12em]"><span style={{"opacity": 1, "transform": "none"}}><button className="btn relative btn-neutral group w-full whitespace-nowrap rounded-xl px-4 py-3 text-left text-token-text-primary md:whitespace-normal" as="button"><div className="flex w-full gap-2 items-center justify-center"><div className="flex w-full items-center justify-between"><div className="flex flex-col overflow-hidden"><div className="truncate">Write a message</div><div className="truncate font-normal opacity-50">that goes with a kitten gif for a friend on a rough day</div>
                  </div>
                  <div className="absolute bottom-0 right-0 top-0 flex items-center rounded-xl bg-gradient-to-l from-token-main-surface-secondary pl-6 pr-4 text-token-text-secondary opacity-0 can-hover:group-hover:opacity-100"><span className="" data-state="closed"><div className="rounded-lg bg-token-main-surface-primary p-1 shadow-xxs dark:shadow-none"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="icon-sm text-token-text-primary"><path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></span></div></div></div></button></span><span style={{"opacity": 1, "transform": "none"}}><button className="btn relative btn-neutral group w-full whitespace-nowrap rounded-xl px-4 py-3 text-left text-token-text-primary md:whitespace-normal" as="button"><div className="flex w-full gap-2 items-center justify-center"><div className="flex w-full items-center justify-between"><div className="flex flex-col overflow-hidden"><div className="truncate">Make me a personal webpage</div><div className="truncate font-normal opacity-50">after asking me three questions</div></div><div className="absolute bottom-0 right-0 top-0 flex items-center rounded-xl bg-gradient-to-l from-token-main-surface-secondary pl-6 pr-4 text-token-text-secondary opacity-0 can-hover:group-hover:opacity-100"><span className="" data-state="closed"><div className="rounded-lg bg-token-main-surface-primary p-1 shadow-xxs dark:shadow-none"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="icon-sm text-token-text-primary"><path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></span></div></div></div></button></span></div></div></div></div></div></div></div>
                  </div></div> */}
           <Slider images={images}/>
        </FadeInSection> 
     </section>

     <section id="products" className="bg[var(--hh-color-sundrenched-stone)] !relative">
          <h2 className="h-0 w-0 sr-only">Products</h2>
        
          <Products />
      
     </section>

         <section id="testimonials" className="">
          <h2 className="h-0 w-0 sr-only">Testimonials</h2>
          <TestimonialSection reviews={allReviews}/>
        </section>
       <section id="about" className="">
          <h2 className="h-0 w-0 sr-only">About Us</h2>
          <AboutSection  aboutData={aboutData}/>    
        </section>
        <div type="button" class="slider-nav slider-nav-next slider-nav-reco slider-arrow slider-arrow-svg next-arrow"></div>
        <section id="porfolio"  className="bg-gray-200 ">
          <h2 className="h-0 w-0 sr-only"> PORTFOLIO</h2>
          <Porfolio team={team} />
        </section>
        <div className="sm:grid sm:grid-cols-2">
             <img className="w-full h-full"src={'/maya-angelou.jpeg'} alt={'maya-angelou.png'}/>
             <img className="hidden sm:flex w-full h-full"src={'/quote-2.jpeg'} alt={'quote-2'}/>
        </div>
 
        <section id="CONTACT" className="!relative ">
          <h2 className="h-0 w-0 sr-only">CONTACT</h2>
          <ContactSection />
        </section>
        <SectionEadem/>
        <SubscribeSection />

        {/* <img className="w-full h-full" src={'/book_now.webp'} alt={'maya-angelou.png'}/> */}

        {/* <section id="SIGNUP" className="elative py-24 ">
          <h2 className="h-0 w-0 sr-only">SIGNUP</h2>
          <ContactSection />
        </section> */}

        {/* <div class="StyledWidgetMenu--hkf06h jnSKfE"><a class="StyledWidgetLink--4kybrr jKGdSQ"><div class="StyledWidgetIcon--eypg5o dKiKfO"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M9 1.688a7.313 7.313 0 110 14.625A7.313 7.313 0 019 1.688zm0 1.218a6.094 6.094 0 100 12.188A6.094 6.094 0 009 2.906zm0 2.438a.61.61 0 110 1.218.61.61 0 010-1.218zm.61 6.703a.61.61 0 01-1.22 0v-3.7a.61.61 0 111.22 0v3.7z" transform="translate(3 3)" fill-rule="evenodd"></path></svg></div><span class="StyledSpan--1x62xq3 cUibYJ">Learn more</span></a><button class="StyledWidgetButton--mwhbzw djuuNz"><div class="StyledWidgetIcon--eypg5o dKiKfO"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M5.812 19.138a.663.663 0 01-.943 0 .666.666 0 010-.943l2.054-2.054C4.744 14.741 4 12.805 4 12c0-1.741 2.803-6 8-6 2.001 0 3.263.607 3.961 1.103l2.242-2.241a.666.666 0 11.942.942L5.812 19.138zm4.396-6.282l2.653-2.652A1.994 1.994 0 0012 10c-1.103 0-2 .898-2 2 0 .3.08.589.208.856zM12 7.333c-4.523 0-6.667 3.744-6.667 4.667 0 .297.476 1.954 2.562 3.168l1.359-1.358c-.047-.043-.101-.075-.135-.133A3.337 3.337 0 0112 8.667c.66 0 1.293.202 1.835.562l1.162-1.161c-.55-.34-1.502-.735-2.997-.735zm0 8A.667.667 0 0111.956 14 2.198 2.198 0 0014 11.956a.666.666 0 111.33.087 3.537 3.537 0 01-3.288 3.289H12zm-1.84 1.113c.582.146 1.201.22 1.84.22 4.523 0 6.667-3.743 6.667-4.666 0-.279-.289-1.185-1.182-2.204a.667.667 0 111.004-.878C19.407 9.966 20 11.176 20 12c0 1.74-2.803 6-8 6a8.871 8.871 0 01-2.165-.262.667.667 0 11.326-1.292z" fill-rule="evenodd"></path></svg></div><span class="StyledSpan--1x62xq3 cUibYJ">Hide Brave Rewards</span></button></div> */}
   
        {/* <ProductCardDisplay productsSample={proucdtsTeaser} /> */}
        {/* <section id="section2"  className="h-[30vh] bg-gray-200">
          <h2>Testimonials</h2>
          <p>Content of section 2 goes here...</p>
        </section>
        
        <section id="About"   className="h-[30vh]">
          <h2>About Us</h2>
          <p>Content of section 3 goes here...</p>
        </section> */}
        
       
  {/* <div className="max-w-lg 3xl:max-w-xl">
  <h1 className="font-display text-4xl">
    Data to <span className="text-neon-cyan">enrich</span> your online business
  </h1>
</div>  */}
  {/* <TestSliderComponent /> */}
{/* <Header items={items} /> */}






    
    {/* <WelcomeScreen /> */}
    {/* <section id="LEGACY-PRODUCT-INFO" className="flex-auto overflow-hidden relative mx-auto mt-16 grid  max-w-container grid-cols-1 px-4 sm:mt-20 sm:px-6 lg:px-8 xl:mt-32"> */}
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
      {/* <RelatedProducts /> */}
    {/* </section> */}
  

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