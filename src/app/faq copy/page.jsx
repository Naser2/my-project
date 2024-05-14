"use client"

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

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
        <div className='relative mt-[10vh] '>
            {/* <h1 className="text-3xl text-green-400 mb-8">Frequently asked questions.</h1> */}
            

   
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="mx-4 space-between flex-block py-8 mt-12 sm:mt-[6vh]">
                    <div class="text-left">
                        <h2 class="text-[var(--hh-color-aged-black)]  text-left featured-product-grid__title">
                        FAQ</h2>
                        <p class="-mt-2 sm:-mt-4 text-lg leading-8 text-gray-600 text-left ">
                            An extessensive body of work Massi.
                            {/* An extessensive body of work Massi.
                            An extessensive body of work Massi.
                            An extessensive body of work Massi.  An extessensive body of work Massi.
                            An extessensive body of work Massi. */}
                            </p>
                        </div>
                    <div class="right massi-flex-end ">
                      <button class="!mt-[-6.6vh] image-with-text__cta themeBtn bg-black !text-white no_high_contrast  hover:!bg-gray-700 hover:text-white px-16 hidden sm:flex" width="full" theme="primary" href="/pages/science-technology">
                 Back to shop
                    </button>
                </div></div>
              <FAQHeader/>
              <div className="question py-12  sm:py-24 px-6 sm:px-24">
                <div>{faqs.map((faq, index) => (
                    <div key={index} className="p-4 border rounded ">
                        <h4
                            className={`flex items-center justify-between cursor-pointer ${
                                faq.isOpen ? 'text-green-400 font-medium' : ''
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
        </div>
    );
}

export default FAQ;


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
        <div className="sticky inset-x-0 top-0 left-0 py-12mx-auto overflow-wrap mt-24">
             <Image
              src='/mccauley_7a26a24ef4.png'
              alt="Faqs background Image"
              className="dark:invert w-full h-[60vh] aspect-[4/5]"
              width={24000}
              height={2400}
              priority
            />
            {/* <image src={'/mccauley_7a26a24ef4.png'} className='w-full h-full'/> */}
           <div className='absolute inset-x-0  top-[6vh] left-0 px-6'>
            <div className="text-3xl text-2xl mb-8">Frequently asked questions.</div>
            <div className="mb-2 text-md">Lorem Ipsum ?</div>
            <div className="text-xs text-gray-600 text-lg">See our FAQ for more details</div>
            </div> 

            <div className="relative text-gray-600 mt-8  max-w-md  ring-1 ring-[var(--agedBlack)] mx-6">
                <input 
                    ref={searchFieldRef}
                    value={search}
                    onKeyDown={handleKeyDown}
                    onChange={(event) => setSearch(event.target.value)}
                    type="search" name="search" placeholder="Search" className="bg-white max-w-md h-10 px-5 rounded-full text-sm focus:outline-none"
                />
                <button type="submit" className="focus:outline-none absolute right-0 top-0 mt-3 mr-4">
                    <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" xmlSpace="preserve" width="512px" height="512px">
                        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}

