"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { ArrowPathIcon, CalendarIcon, TruckIcon } from '@heroicons/react/24/outline' 

function FAQ() {
    const [faqs, setFaqs] = useState([]);

    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/faqs');
                if (!response.ok) {
                    throw new Error('Failed to fetch FAQs');
                }
                const data = await response.json();
                setFaqs(data);
            } catch (error) {
                console.error('Error fetching FAQs:', error);
                setFaqs(localFaqs);
            }
        };

        fetchData();
    }, []);

    const toggleFAQ = (index) => {
        setFaqs((prevFaqs) => {
            return prevFaqs.map((faq, i) => {
                if (i === index) {
                    return { ...faq, isOpen: !faq.isOpen };
                } else {
                    return faq;
                }
            });
        });
    };

    return (
        <div className='relative mt-[4vh] sm:mt-[24vh] '>
            {/* <h1 className="text-3xl text-green-400 mb-8">Frequently asked questions.</h1> */}
            <div class="hidden sm:flex px-12 space-between flex-block pb-6 sm:mt-[15vh]">
                    <div class="text-left">
                        <h2 class="text-[var(--hh-color-aged-black)]  text-left featured-product-grid__title">
                        FAQ</h2>
                      
                        </div>
                </div>
   
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <FAQHeader/>
              <div className="question pb-24  px-6 sm:px-24">
                <div>{faqs.map((faq, index) => (
                    <div key={index} className="p-4 border rounded ">
                        <h4
                            className={`flex items-center justify-between cursor-pointer ${
                                faq.isOpen ? 'text-green-400 font-medium transition-transform motion-reduce:transform-none' : ''
                            }`}
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                            <svg
                                className="w-5 h-5 text-gray-500 transform transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ transform: faq.isOpen ? 'rotate(180deg)' : '' }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </h4>
                        {faq.isOpen && <p className="mt-3">{faq.answer}</p>}
                    </div>
                ))}</div>
              </div>
               
            </div>


    <div className="bg-gray-50">
      <h2 className="sr-only">Our perks</h2>
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 px-4 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {perks.map((perk) => (
            <div key={perk.name} className="sm:flex">
              <div className="sm:flex-shrink-0">
                <div className="flow-root !fill-state-black">
                  <img className="h-24 w-28" src={perk.imageSrc} alt="" />
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
  



    <div className="bg-white">
      <h2 className="sr-only">Our perks</h2>
      <div className="mx-auto max-w-7xl divide-y divide-gray-200 lg:flex lg:justify-center lg:divide-x lg:divide-y-0 lg:py-8">
        {perks2.map((perk, perkIdx) => (
          <div key={perkIdx} className="py-8 lg:w-1/3 lg:flex-none lg:py-0">
            <div className="mx-auto flex max-w-xs items-center px-4 lg:max-w-none lg:px-8">
              <perk.icon className="h-8 w-8 flex-shrink-0 text-indigo-600" aria-hidden="true" />
              <div className="ml-4 flex flex-auto flex-col-reverse">
                <h3 className="font-medium text-gray-900">{perk.name}</h3>
                <p className="text-sm text-gray-500">{perk.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


        </div>
    );
}

export default FAQ;

const perks2 = [
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
  ]
  
const localFaqs = [
    {
      question: 'What are some common hair treatments offered at salons?',
      answer:
        'Common hair treatments offered at salons include hair coloring, haircuts, hair styling, hair straightening, hair extensions, and hair conditioning treatments.',
    },
    {
      question: 'How often should I visit a salon for hair treatments?',
      answer:
        'The frequency of salon visits for hair treatments depends on the type of treatment and your hair$quots specific needs. Generally, its recommended to get a haircut every 6-8 weeks and color treatments every 4-6 weeks.',
    },
    {
      question: 'What should I consider when choosing a hair salon?',
      answer:
        'When choosing a hair salon, consider factors such as reputation, cleanliness, the expertise of stylists, customer reviews, pricing, location, and the range of services offered.',
    },
    {
      question: 'What are the benefits of professional hair treatments?',
      answer:
        'Professional hair treatments can provide various benefits such as improved hair health, enhanced appearance, customized solutions for specific hair concerns, access to high-quality products, and expert advice from trained stylists.',
    },
    {
      question: 'How can I maintain my hair after salon treatments?',
      answer:
        'To maintain your hair after salon treatments, follow a regular hair care routine, use recommended products, protect your hair from heat and environmental damage, avoid overwashing or using harsh chemicals, and schedule regular touch-up appointments as needed.',
    },
    {
      question: 'What should I do if I experience a negative reaction to a hair treatment?',
      answer:
        'If you experience a negative reaction to a hair treatment, such as irritation, allergic reaction, or damage to your hair, immediately rinse your hair with water and seek professional help from a stylist or dermatologist. Avoid using any further products on your hair until you receive appropriate advice.',
    },
    {
      question: 'Can I get a consultation before booking a hair treatment?',
      answer:
        'Yes, most salons offer consultations before booking a hair treatment. During the consultation, you can discuss your hair goals, concerns, preferences, and any specific requirements you may have. The stylist can then recommend suitable treatments and provide personalized advice.',
    },
    {
      question: 'What are some trending hairstyles or hair colors?',
      answer:
        'Trending hairstyles and hair colors often vary based on current fashion trends, celebrity influences, and seasonal changes. Some popular trends include balayage, ombre, beach waves, pixie cuts, bob hairstyles, pastel hair colors, and vibrant hues.',
    },
    {
      question: 'Are there any natural remedies for common hair problems?',
      answer:
        'Yes, there are several natural remedies for common hair problems such as dryness, dandruff, frizz, and hair loss. These remedies may include using natural oils like coconut oil or argan oil, incorporating ingredients like honey or aloe vera into hair masks, and maintaining a healthy diet rich in vitamins and minerals.',
    },
  ];
  


  export function FAQHeader() {
    const [search, setSearch] = useState('');
    const searchFieldRef = useRef(null);

    const focusSearchField = () => {
        if (searchFieldRef.current) {
            searchFieldRef.current.focus();
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === '/') {
            focusSearchField();
            event.preventDefault();
        }
    };

    return (
        <div className="sticky inset-x-0 top-0 left-0 py-12mx-auto overflow-wrap">
              
             <Image
              src='/mccauley_7a26a24ef4.png'
              alt="Faqs background Image"
              className="dark:invert w-full h-[60vh] aspect-[4/5]"
              width={24000}
              height={2400}
              priority
            />
            {/* <image src={'/mccauley_7a26a24ef4.png'} className='w-full h-full'/> */}
           <div className='absolute inset-x-0  top-[-3vh] sm:top-[-15vh] left-0 px-6 sm:px-10'>
           <div class="space-between flex-block pt-8 mt-[15vh] sm:mt-[18vh]">
                    <div class="text-left sm:hidden">
                        <h2 class="text-[var(--hh-color-aged-black)]  text-left featured-product-grid__title">
                        FAQ</h2>
                      
                        </div>
                    {/* <div class="right massi-flex-end ">
                      <button class="!mt-[-6.6vh] image-with-text__cta themeBtn bg-black !text-white no_high_contrast  hover:!bg-gray-700 hover:text-white px-16 hidden sm:flex" width="full" theme="primary" href="/pages/science-technology">
                      Back to shop
                    </button>
                </div> */}
                </div>

            <div className="text-3xl text-2xl mb-8">Frequently asked questions.</div>
            <p class="-mt-2 sm:-mt-4 text-lg leading-8 text-gray-600 text-left ">
            Can’t find the answer you’re looking for? <br/>Reach out to our customer support team..
            </p>
            <div className="text-xs text-gray-600 text-lg">See our FAQ for more details</div>
            <div className="hidden sm:flex sm:!relative  max-w-lg -ml-[2vw]">
                <input 
                    ref={searchFieldRef}
                    value={search}
                    onKeyDown={handleKeyDown}
                    onChange={(event) => setSearch(event.target.value)}
                    type="search" name="search" placeholder="Search" className="hover:bg-white max-w-md h-10 px-5 rounded-full text-sm focus:outline-none w-full relative text-gray-600 mt-8 
                      flex ring-1 ring-[var(--agedBlack)] mx-6 rounded-full"
                />
                <button type="submit" className=" absolute top-0 mt-[5vh] right-[4vw]">
                    <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" xmlSpace="preserve" width="512px" height="512px">
                        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
                    </svg>
                </button>
            </div>
            </div> 
            <div className="grid grid-cols-2 sm:relative absolute top-10 sm:top-0  !z-40">
                <div class="right">
                      <Link class="!mt-[-6.6vh] image-with-text__cta themeBtn bg-black !text-white no_high_contrast  hover:!bg-gray-700 hover:text-white px-16 hidden sm:flex" width="full" theme="primary" href="/">
                      Back to shop
                    </Link>
                </div>
                <div class="right massi-flex-end ">
                      <Link class="!mt-[-6.6vh] image-with-text__cta themeBtn !bg-transparent !text-[var(--agedBlack)]  underline !text-white no_high_contrast  hover:!bg-gray-200 hover:!text-black px-16 hidden sm:flex" width="full" theme="primary" href="/return">
                      See Return Policies
                    </Link>
                </div>
                

            </div>
            
            <div className="relative text-gray-600 mt-8  max-w-md  ring-1 ring-[var(--agedBlack)] mx-6 sm:hidden">
                <input 
                    ref={searchFieldRef}
                    value={search}
                    onKeyDown={handleKeyDown}
                    onChange={(event) => setSearch(event.target.value)}
                    type="search" name="search" placeholder="Search" className="bg-white max-w-[75vw] h-10 px-5 rounded-full text-sm focus:outline-none w-full"
                />
                <button type="submit" className="focus:outline-none absolute right-0 top-0 mt-[2vh] mr-4">
                    <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" xmlSpace="preserve" width="512px" height="512px">
                        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}

