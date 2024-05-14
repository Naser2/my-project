

import Image from 'next/image';
import { ArrowPathIcon, CalendarIcon, TruckIcon } from '@heroicons/react/24/outline' 

function Page() {
    

    return (
        <div className='relative mt-[16vh] '>


<div class="bg-gray-100 ">
    <div className="sm:grid grid-cols-2 mt-12 sm:mt-24">
        <div className="imagery px-4">

 <div className="bg-gray-50/2 container mx-auto  ">

      <div className=" mx-auto  max-w-2xl py-0 sm:px-2 sm:py-6 lg:px-4"> 
      <h2 class=" mb-4 py-4 px-4 text-[var(--hh-color-aged-black)]  text-left featured-product-grid__title">Merch Policy</h2>  
        <div className="mx-autogap-x-8 gap-y-12 px-4 lg:max-w-none pt-12 sm:px-12  lg:gap-y-16 bg-gray-50 ">
          {perks.map((perk) => (
            <div key={perk.name} className="sm:flex">
              <div className="sm:flex-shrink-0">
                <div className="flow-root !fill-state-black">
           {/* <img className="h-24 w-28" src={perk.imageSrc} alt="" /> */}
               {  perk.imageSrc ?   <img className="h-24 w-28" src={perk.imageSrc} alt="" /> :   <perk.icon className="h-8 w-8 flex-shrink-0 text-indigo-600" aria-hidden="true" />}
                </div>
              </div>
              <div className="mt-3 sm:ml-3 sm:mt-0">
                <h3 className="text-sm font-medium text-gray-900">{perk.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{perk.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  




        </div>
 <div class="container mx-auto py-8">
        <h2 class=" mb-4 py-4 px-4 text-[var(--hh-color-aged-black)]  text-left featured-product-grid__title">Sevices Policy</h2>
        <div className="bg-white px-4">
      <div className="mx-auto  max-w-lg  py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-autogap-x-8 gap-y-12 px-4 lg:max-w-none  lg:gap-y-16">
          {perks2.map((perk) => (
            <div key={perk.name} className="sm:flex">
              <div className="sm:flex-shrink-0">
                <div className="flow-root !fill-state-black">
           {/* <img className="h-24 w-28" src={perk.imageSrc} alt="" /> */}
               {  perk.imageSrc ?   <img className="h-24 w-28" src={perk.imageSrc} alt="" /> :   <perk.icon className="h-8 w-8 flex-shrink-0 text-indigo-600" aria-hidden="true" />}
                </div>
              </div>
              <div className="mt-3 sm:ml-3 sm:mt-0">
                <h3 className="text-sm font-medium text-gray-900">{perk.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{perk.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
        
    </div>


    </div>
    <div class="container mx-auto  py-8">
    <h2 class=" mb-4 py-4 px-4 text-[var(--hh-color-aged-black)]  text-left featured-product-grid__title">Privacy  Policy</h2>
        <div className="bg-white">
      <h2 className="sr-only">Our perks</h2>
      <div className="mx-auto  max-w-lg  py-24 sm:px-2 sm:py-32 lg:px-4">
      <div id="Privacy" className='px-8'>
         <p class="mb-4 ">
            This privacy policy sets out how our website uses and protects any information that you give us when you use
            this
            website.
        </p>

        <h2 class="text-2xl font-bold mb-2">Information We Collect</h2>

        <p class="mb-4">
            We may collect the following information:
        </p>

        <ul class="list-disc list-inside mb-4">
            <li>Your name and contact information</li>
            <li>Demographic information</li>
            <li>Other information relevant to customer surveys and/or offers</li>
        </ul>

        <h2 class="text-2xl font-bold mb-2">How We Use the Information</h2>

        <p class="mb-4">
            We require this information to understand your needs and provide you with a better service, and in
            particular
            for
            the following reasons:
        </p>

        <ul class="list-disc list-inside mb-4">
            <li>Internal record keeping</li>
            <li>Improving our products and services</li>
            <li>Sending promotional emails about new products, special offers, or other information which we think you
                may
                find
                interesting</li>
            <li>From time to time, we may also use your information to contact you for market research purposes. We may
                contact
                you by email, phone, or mail. We may use the information to customize the website according to your
                interests.</li>
        </ul>

        <h2 class="text-2xl font-bold mb-2">Security</h2>

        <p class="mb-4">
            We are committed to ensuring that your information is secure. In order to prevent unauthorized access or
            disclosure,
            we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the
            information we collect online.
        </p>

        <h2 class="text-2xl font-bold mb-2">Cookies</h2>

        <p class="mb-4">
            A cookie is a small file that asks permission to be placed on your computer's hard drive. Once you agree,
            the
            file
            is added, and the cookie helps analyze web traffic or lets you know when you visit a particular site.
            Cookies
            allow
            web applications to respond to you as an individual. The web application can tailor its operations to your
            needs,
            likes, and dislikes by gathering and remembering information about your preferences.
        </p>

        <p class="mb-4">
            Overall, cookies help us provide you with a better website by enabling us to monitor which pages you find
            useful
            and which you do not. A cookie in no way gives us access to your computer or any information about you,
            other
            than
            the data you choose to share with us.
        </p>

        <h2 class="text-2xl font-bold mb-2">Links to Other Websites</h2>

        <p class="mb-4">
            Our website may contain links to other websites of interest. However, once you have used these links to
            leave
            our
            site, you should note that we do not have any control over that other website. Therefore, we cannot be
            responsible
            for the protection and privacy of any information which you provide whilst visiting such sites and such
            sites
            are
            not governed by this privacy statement. You should exercise caution and look at the privacy statement
            applicable
            to
            the website in question.
        </p>

        <h2 class="text-2xl font-bold mb-2">Controlling Your Personal Information</h2>

        <p class="mb-4">
            You may choose to restrict the collection or use of your personal information in the following ways:
        </p>

        <ul class="list-disc list-inside mb-4">
            <li>If you have previously agreed to us using your personal information for direct marketing purposes, you
                may
                change your mind at any time by writing to or emailing us at [email protected]</li>
            <li>We will not sell, distribute, or lease your personal information to third parties unless we have your
                permission
                or are required by law to do so. We may use your personal information to send you promotional
                information
                about
                third parties which we think you may find interesting if you tell us that you wish this to happen.</li>
            <li>You may request details of personal information which we hold about you. If you would like a copy of the
                information held on you, please write to [Your Company Name, Address, City, State, Zip Code] or email
                [email protected]</li>
            <li>If you believe that any information we are holding on you is incorrect or incomplete, please write to or
                email
                us as soon as possible at the above address. We will promptly correct any information found to be
                incorrect.
            </li>
        </ul>

        <p class="mb-4">
            This privacy policy is subject to change without notice.
        </p>
      </div>
     
      </div>
    
   
    </div>
 </div>

   
</div>
</div>
)}


export default Page



const perks2 = [
    { name: '10-year all-inclusive warranty', description: 'We’ll replace it with a new one', icon: CalendarIcon },
    { name: 'Free shipping on returns', description: 'Send it back for free', icon: ArrowPathIcon },
    { name: 'Free, contactless delivery', description: 'The shipping is on us', icon: TruckIcon },
    { name: '10-year all-inclusive warranty', description: 'We’ll replace it with a new one', icon: CalendarIcon },
    { name: 'Free shipping on returns', description: 'Send it back for free', icon: ArrowPathIcon },
    { name: 'Free, contactless delivery', description: 'The shipping is on us', icon: TruckIcon },
  ]
const perks = [
    {
      name: 'Free delivery',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg',
      description:
        "Order now and you'll get delivery absolutely free. Well, it's not actually free, we just price it into the products. Someone's paying for it, and it's not us.",
    },
    {
      name: '10-year warranty',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-light.svg',
      description:
        "We have a 10 year warranty with every product that you purchase, whether thats a new pen or organizer, you can be sure we'll stand behind it.",
    },
    {
      name: 'Exchanges',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg',
      description:
        'We understand that when your product arrives you might not particularly like it, or you ordered the wrong thing. Conditions apply here.',
    },
    {
      name: 'For the planet',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg',
      description:
        "Like you, we love the planet, and so we've pledged 1% of all sales to the preservation and restoration of the natural environment.",
    },
    // { name: '10-year all-inclusive warranty', description: 'We’ll replace it with a new one', icon: CalendarIcon },
    // { name: 'Free shipping on returns', description: 'Send it back for free', icon: ArrowPathIcon },
   
    {
        name: '10-year warranty',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-light.svg',
        description:
          "We have a 10 year warranty with every product that you purchase, whether thats a new pen or organizer, you can be sure we'll stand behind it.",
      },
      {
        name: 'Exchanges',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg',
        description:
          'We understand that when your product arrives you might not particularly like it, or you ordered the wrong thing. Conditions apply here.',
      },
  ]