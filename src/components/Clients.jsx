'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'

import { Container } from '@/components/Container'
// import FadeInSection from '.@/components/FadeInSection'
import { FadeIn, FadeInStagger } from './FadeIn'
// import FadeInSection from '@/app/FadeInSection'

const reviews = [
  {
    title: 'It really works.',
    body: 'I downloaded Pocket today and turned $5000 into $25,000 in half an hour.',
    author: 'CrazyInvestor',
    rating: 5,
  },
  {
    title: 'You need this app.',
    body: 'I didn’t understand the stock market at all before Pocket. I still don’t, but at least I’m rich now.',
    author: 'CluelessButRich',
    rating: 5,
  },
  {
    title: 'This shouldn’t be legal.',
    body: 'Pocket makes it so easy to win big in the stock market that I can’t believe it’s actually legal.',
    author: 'LivingDaDream',
    rating: 5,
  },
  {
    title: 'Screw financial advisors.',
    body: 'I barely made any money investing in mutual funds. With Pocket, I’m doubling my net-worth every single month.',
    author: 'JordanBelfort1962',
    rating: 5,
  },
  {
    title: 'I love it!',
    body: 'I started providing insider information myself and now I get new insider tips every 5 minutes. I don’t even have time to act on all of them. New Lamborghini is being delivered next week!',
    author: 'MrBurns',
    rating: 5,
  },
  {
    title: 'Too good to be true.',
    body: 'I was making money so fast with Pocket that it felt like a scam. But I sold my shares and withdrew the money and it’s really there, right in my bank account. This app is crazy!',
    author: 'LazyRich99',
    rating: 5,
  },
  {
    title: 'Wish I could give 6 stars',
    body: 'This is literally the most important app you will ever download in your life. Get on this before it’s so popular that everyone else is getting these tips too.',
    author: 'SarahLuvzCash',
    rating: 5,
  },
  {
    title: 'Bought an island.',
    body: 'Yeah, you read that right. Want your own island too? Get Pocket.',
    author: 'ScroogeMcduck',
    rating: 5,
  },
  {
    title: 'No more debt!',
    body: 'After 2 weeks of trading on Pocket I was debt-free. Why did I even go to school at all when Pocket exists?',
    author: 'BruceWayne',
    rating: 5,
  },
  {
    title: 'I’m 13 and I’m rich.',
    body: 'I love that with Pocket’s transaction anonymization I could sign up and start trading when I was 12 years old. I had a million dollars before I had armpit hair!',
    author: 'RichieRich',
    rating: 5,
  },
  {
    title: 'Started an investment firm.',
    body: 'I charge clients a 3% management fee and just throw all their investments into Pocket. Easy money!',
    author: 'TheCountOfMonteChristo',
    rating: 5,
  },
  {
    title: 'It’s like a superpower.',
    body: 'Every tip Pocket has sent me has paid off. It’s like playing Blackjack but knowing exactly what card is coming next!',
    author: 'ClarkKent',
    rating: 5,
  },
  {
    title: 'Quit my job.',
    body: 'I downloaded Pocket three days ago and quit my job today. I can’t believe no one else thought to build a stock trading app that works this way!',
    author: 'GeorgeCostanza',
    rating: 5,
  },
  {
    title: 'Don’t download this app',
    body: 'Unless you want to have the best life ever! I am literally writing this from a yacht.',
    author: 'JeffBezos',
    rating: 5,
  },
]

function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index
              ? 'fill-cyan-100'
              : 'fill-cyan-500 group-hover:fill-orange-500'
          )}
        />
      ))}
    </div>
  )
}

function Review({ title, testimonial, reviewIndex, className, ...props }) {
  // console.log("testimonials", reviewIndex)
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in opacity-1 group rounded-2xl bg-slate-100 px-2 pb-3  shadow-md shadow-gray-900/5 hover:bg-indigo-300 sm:px-0',
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      {/* <p className="order-first  text-xl font-semibold  tracking-tight lg:text-3xl">
          {title}
        </p> */}

      {/* <FadeIn className="max-w-7xl" key={testimonial.author.handle}> */}

      <div
        key={testimonial.author.handle}
        className="pt-8 sm:inline-block sm:w-full sm:px-4"
      >
        <figure className="rounded-2xl !bg-[#ebeef0] bg-gray-50 p-8 text-sm leading-6 hover:bg-[#ebeef0]">
          <StarRating rating={testimonial.rating} />{' '}
          <blockquote className="text-gray-900">
            <p>{`“${testimonial.body}”`}</p>
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-x-4">
            <img
              className="h-10 w-10 rounded-full bg-gray-50"
              src={testimonial.author.imageUrl}
              alt=""
            />
            <div>
              <div className="font-semibold text-gray-900">
                {testimonial.author.name}
              </div>
              <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
            </div>
          </figcaption>
        </figure>
      </div>
      {/* </FadeIn> */}
    </figure>
  )
}

function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({
  className,
  reviews,
  reviewClassName = () => {},
  msPerPixel = 0,
}) {
  let columnRef = useRef()
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current.offsetHeight)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      id={columnRef}
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration }}
    >
      {/* {clients.concat(clients).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName(reviewIndex % reviews.length)}
          {...review}
        />
      ))} */}
      {testimonials.map((testimonial, reviewIndex) => (
        <Review
          key={reviewIndex}
          testimonial={testimonial}
          aria-hidden={reviewIndex >= testimonials.length}
          className={reviewClassName(reviewIndex % testimonials.length)}
          {...testimonial}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef()
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  columns = [columns[0], columns[1], splitArray(columns[2], 2)]

  return (
    <div
      ref={containerRef}
      className="relative -mx-4  mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-10  sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...columns[0], ...columns[2].flat(), ...columns[1]]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= columns[0].length + columns[2][0].length &&
                  'md:hidden',
                reviewIndex >= columns[0].length && 'lg:hidden'
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...columns[1], ...columns[2][1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= columns[1].length && 'lg:hidden'
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={columns[2].flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  )
}

export function Clients() {
  return (
    <section
      id="clients"
      aria-labelledby="reviews-title"
      className="group  py-6 sm:pb-24 sm:pt-4 lg:my-10"
    >
      {/* <Container className="px-6"> */}
      {/* <h2 className="text-left text-base font-semibold leading-8 text-blue-400 lg:text-center  lg:text-xl ">
          Our track record
        </h2> */}

      <div className="max-w-8xl group mx-8 mx-auto px-4 sm:px-2 lg:mx-12 lg:pb-12">
        <div classNAme="mx-auto pb-4 text-center  ">
          <span className="pb-4">
            <h2 className="headline typography-headline large-centered px-4 text-4xl font-bold tracking-tight dark:text-slate-100 dark:text-white sm:text-6xl">
              Recent Reviews
            </h2>
          </span>
        </div>
        {/* <p className="">
          <span className="lg:inline-flex">
            <div className="mt-[0.6rem]  inline-flex">
              <span>
                <h3 className='text-xl '>
                  <FadeInSection>
                    I had the priviledge to work with clients in diverse fields.
                  </FadeInSection>
                </h3>
              </span>
            </div>
          </span>
        </p> */}
      </div>

      <ReviewGrid />
      {/* </Container> */}
    </section>
  )
}
const clients = [
  { title: 'Shivan & Narresh' },
  { title: '1974 Jewelry' },
  { title: 'House of Brevard' },
  { title: 'Nagicia by Tricia Kim' },
  { title: 'Created Equal' },
  { title: 'Gianmarco Lorenzi' },

  { title: 'Upper Echelon Shoes (UES)' },
  { title: 'Nicolino' },
  { title: 'Giorgio Armani' },
  { title: 'Givenchy' },
  { title: 'John Richmond' },
  { title: 'J. Lindberg' },
  { title: 'Moschino' },

  { title: 'Alberto Ferretti' },
  { title: 'Jean Paul Gaultier' },
  { title: 'Narcisco Rodriguez' },
  { title: 'Guy Mattiolo' },

  { title: 'Sebastian Shoes' },
  { title: 'Stefano Maroni' },
  { title: 'Husky' },
  { title: 'Soledad Twombly' },
  { title: 'Jean Michel Cazabat' },
  { title: 'Shakti Himalaya' },
  { title: 'Annie Bioko' },
  { title: 'SOHO Brand , South Africa' },
  { title: 'Officina Bernardi' },
  { title: 'Aya Ruhr' },
]

const testimonials = [
  {
    body: 'NasDesign built a great website for me. I am honnestly pleased to have worked with them, Nasser made it very straight forward and easy as a process. Thank you',
    author: {
      name: 'Joe West',
      handle: 'lesliealexander',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'Leslie Alexander',
      handle: 'lesliealexander',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'Alexis Page',
      handle: 'lesliealexander',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'Ladawn Tailor ',
      handle: 'lesliealexander',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'Sojourner Coffee Inc',
      handle: 'lesliealexander',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'Omari Hills',
      handle: 'lesliealexander',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'Cam Fonte',
      handle: 'lesliealexander',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More testimonials...
]

export default function TestimonialSection() {
  return (
    <FadeInStagger>
      <div className="bg-transparent  py-10 sm:py-12">
        <div className="max-w-10xl mx-auto md:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            {/* <div class="mx-auto max-w-2xl lg:mx-0"> */}
            <div
              id="section-itro-wrap"
              className="mx-auto mt-2 max-w-7xl px-6 text-center lg:px-8 lg:text-left "
            >
              <h2 class="headline typography-headline large-centered text-4xl tracking-tight  dark:text-slate-100 dark:text-white sm:text-6xl">
                Testimonials
              </h2>

              {/* <h2 className="text-lg font-semibold leading-8 tracking-tight dark:text-slate-300">
              Testimonials
            </h2> */}
              {/* <FadeInSection> */}
              <p className=" -mt-4 pb-12 pt-4 font-bold tracking-tight  !text-slate-900 dark:text-white sm:-mt-0 sm:pb-14 sm:text-3xl sm:text-4xl lg:text-2xl">
                We have worked with hundreds of amazing people.
              </p>
              {/* </FadeInSection>  */}
            </div>
          </div>
          <section className="black-2-bg bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
                  <div className="logo flex text-2xl">
                    <span className="rounded-md bg-white px-2 py-2 font-extrabold  text-slate-800">
                      Mira{' '}
                    </span>
                    <span className="bg-transparent py-2 pl-1 font-extrabold text-slate-200">
                      Projects
                    </span>
                  </div>
                  <FadeIn className="fade-in animate-fade-in ">
                    <figure className="mt-10 flex flex-auto flex-col justify-between">
                      <blockquote className="text-lg leading-8 text-white">
                        <p>
                          “Nas Design built some React Native mobile screen to
                          be used in our mobile application. It was a smooth
                          process and Nasser was willing to iterate as much to
                          get the product we wanted. Really happy to have worked
                          with NasDesign ”
                        </p>
                      </blockquote>
                      <figcaption className="mt-10 flex items-center gap-x-6">
                        <img
                          className="h-14 w-14 rounded-full bg-gray-800"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <div className="text-base">
                          <div className="font-semibold text-white">
                            Komal Kehar
                          </div>
                          <div className="mt-1 text-gray-400">
                            CEO of Mira Projects
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </FadeIn>
                </div>
                <div className="flex flex-col border-t border-white/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
                  <div className="logo flex text-2xl">
                    <span className="rounded-md bg-white px-2 py-2 font-extrabold  text-slate-800">
                      Amit{' '}
                    </span>
                    <span className="bg-transparent py-2 pl-1 font-extrabold text-slate-200">
                      Kehar
                    </span>
                  </div>
                  <FadeIn className="fade-in animate-fade-in">
                    <figure className="mt-10 flex flex-auto flex-col justify-between">
                      <blockquote className="text-lg leading-8 text-white">
                        <p>
                          “NasDesign built a great website for me. I am
                          honnestly pleased to have worked with them, Nasser
                          made it very straight forward and easy as a process.
                          Thank you”
                        </p>
                      </blockquote>
                      {/* <FadeIn className="max-w-7xl fade-in-section" > */}
                      <figcaption className="mt-10 flex items-center gap-x-6">
                        <img
                          className="h-14 w-14 rounded-full bg-gray-800"
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <div className="text-base">
                          <div className="font-semibold text-white">Amit</div>
                          <div className="mt-1 text-gray-400">
                            Director and Cinematographe -Film Maker
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </FadeIn>
                </div>
              </div>
            </div>
          </section>
          <div className="!relative mx-auto flow-root max-w-3xl sm:mt-16 sm:mt-20 lg:mx-0 lg:max-w-none lg:px-[4%] xl:px-[10%]">
            <Clients />
          </div>
        </div>
      </div>
    </FadeInStagger>
  )
}
