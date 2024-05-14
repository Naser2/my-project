const  SubscribeSection =({})=>{
    
    return    <section id="Booknow" className="!relative pb-0">
    <img className="w-full h-full " src={'/book_now.webp'} alt={'Book_now image'}/>
    <img className="hidden sm:flex w-[110vw] overflow-hidden sm:w-full h-[20vh] absolute bottom-[78%] sm:bottom-[65%] left-0 z-20 ml-[4%] " src={'/subscribe_for_offers-transparent.png'} alt={'subscribe_for_offers-transparent'}/>
    <img className="sm:hidden w-[80vw] overflow-hidden h-[20vh] absolute bottom-[78%] left-0 z-20 mx-[4%] " src={'/subscribe_for_offers-transparent-mobile.png'} alt={'subscribe_for_offers-transparent'}/>
    <div className="bg-transparent sm:bg-[var(--agedBlack)] sm:px-24
    sm:grid sm:grid-cols-3 space-between sm:inline-flex sm:py-8  -pt-6">

      <div className="px-4 text-left bg-[var(--agedBlack)] sm:max-w-[25vw] rounded-sm py-4 !pb-12">
      <div className="newletter-text">
        <h2 class="text-3xl pb-6 !text-white">Newsletter</h2>  
        <p className="!text-white">Enter your email address for our mailing list to keep yourself updated with our new items, sales, discounts and events!</p>
         </div>
      <div className="subsrcibe mx-4 mx-auto  my-2 sm:mx-0">
         <form 
            className="contact-form flex-block" 
            method="post" 
            action="/contact#contact-newsletter-footer" id="contact-newsletter-footer" accept-charset="UTF-8" 
            data-newsletter-form="">
          {/* <input type="hidden" name="form_type" value="customer"/>
          <input type="hidden" name="utf8" value="✓"/> */}

            {/* <p class="newsletter-message newsletter-message--success">
                  Thanks for signing up! 
            </p>
            <p class="newsletter-message newsletter-message--error">
              <em>This customer is already subscribed!</em>
            </p> */}

            {/* <input type="hidden" name="contact[accepts_marketing]" value="true"/> */}
          <div className="w-full flex my-2 ring-1 ring-slate-100">
            <input className="input-group-field flex  py-4 w-full min-w-[20em]" 
                  aria-label="First name"
                  type="name" 
                  name="contact[first_name]" 
                  placeholder="First name" value=""/> 
              </div>
              <div className="relative ring-1 ring-slate-100">
              <input 
                 className="input-group-field w-full py-4 ing-slate-100" 
                  type="email" id="email_input_footer" 
                  placeholder={"email@newsletter.com"}
                  aria-label="email@newsletter.com" 
                  autocorrect="off" 
                  autocapitalize="off" 
                  name="contact[email]" 
                  data-newsletter-field="" 
                  required={true}/>
                <span className="input-group-btn h-full absolute top-[0em] right-0  ">
                <button type="submit" className="px-4  h-full btn caps bg-white text-black px-2 " name="subscribe" id="subscribe">
                  Join  
                </button>
              </span>
            </div>
        </form>
      </div>
      
        {/* <h2 class="text-[var(--hh-color-aged-black)]  text-left featured-product-grid__title">
        Appointments Open
        </h2>
      <p class="-mt-2 sm:-mt-4 text-lg leading-8 text-gray-600 text-left ">Schedule a 15 mins consulation or book ...
      <button class="!mt-[6.6vh] image-with-text__cta themeBtn bg-black !text-white no_high_contrast  hover:!bg-gray-700 hover:text-white px-16 hidden sm:flex" width="full" theme="primary" href="/pages/science-technology">
        Book now
        </button>
      </p> */}
      </div>
    <div className="right col-span-2 sm:pt-[0%]">
    {/* lg:w-4/12 */}
    <div class="container py-10 lg:p-0 w-full lg:w-1/2 bg-apricot ">
    <p class="mt-6 text-sm text-gray-100">The latest deals to your inbox weekly.</p>
      <form class="flex flex-col text-lg newsletter-form ">
        <div class="mb-10 serializer">
        <span>
          <p className="sm:text-white">
            <strong className="sm:!text-white">GET 10% OFF YOUR FIRST ORDER </strong>— Signup for the latest product news, first-person essays, and expert skin tips.</p>
        </span>
        </div>
      <div class="relative pb-2 md:w-1/2 lg:w-full flex items-center border-b border-ochre val-w-email">
      <input class="w-full bg-transparent outline-none uppercase font-sans placeholder-ochre text-ochre" placeholder="ENTER YOUR EMAIL" data-index="0" type="text"/>
      <div class="absolute right-0 text-ochre font-sans text-xs tracking-plus leading-relaxed">
        <span>Incorrect format, please try again.</span>
        </div></div></form>
        </div>
      {/* <button className="absolute -mt-24 !mt-[-5.6vh] image-with-text__cta themeBtn bg-black !text-white no_high_contrast  hover:!bg-gray-700 hover:text-white px-16 hidden sm:flex" width="full" theme="primary" href="/pages/science-technology">Get Offers</button> */}
      </div>
    </div>

</section>

}

export default  SubscribeSection