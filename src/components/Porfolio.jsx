// import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import Image from 'next/image'
// import { GridList, GridListItem } from '@/components/GridList'

export default function Porfolio({team}) {
    return (
  
        <div className="space-y-24  pb-12 sm:pb-24 mx-0 sm:mx-6 sm:px-24 pt-8  relative h-full">
            {/* <div><h2 class="image-with-text__heading">Porfolio</h2></div> */}
            <div class="sm:grid grid-cols-2 mx-4 space-between inline-flex py-8 -pt-6">
              <div class="text-left">
                <h2 class="text-[var(--hh-color-aged-black)]  text-left featured-product-grid__title">Portfolio</h2>
            <p class="-mt-2 sm:-mt-4 text-lg leading-8 text-gray-600 text-left ">An extessensive body of work Massi.</p></div>
            <div class="right massi-flex-end ">
                <button class="!mt-[-6.6vh] image-with-text__cta themeBtn bg-black !text-white no_high_contrast  hover:!bg-gray-700 hover:text-white px-16 hidden sm:flex" width="full" theme="primary" href="/pages/science-technology">View all</button></div></div>
          {team.map((group) => (
            <FadeInStagger key={group.title}>
              
              <div className="grid grid-cols-1 gap-6 pt-0 sm:pt-6 lg:grid-cols-3 xl:gap-8 -mt-24">
              
                <div className="lg:col-span-3 mx-[1em]">
                  <ul
                    role="list"
                    className="grid grid-cols-3 gap-[0.3em] xl:gap-x-12  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  xl:gap-8"
                  >
                    {group.people.map((person) => (
                      <li key={person.name} className='group'>
                        <FadeIn>
                          <div className="group relative overflow-hidden bg-neutral-100 sm:w-[32vh] xl:h-[40vh] sm:w-[38vh]">
                            <Image
                              alt=""
                              {...person.image}
                              className="h-[15vh] !w-[35vw]  !aspect-[3/5] w-full sm:h-[40vh] sm:w-[38vh] w-full object-cover  transition duration-500 motion-safe:group-hover:scale-105 sm:aspec-[2/4] sm:w-[32vh] xl:h-[40vh] sm:w-[38vh]"
                            />
                            {/* grayscale */}
                            <div className="hidden group-hover:!absolute hover:!inset-0 group-hover:!flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% px-6">
                              <p className="font-display text-base/6 font-semibold tracking-wide text-white group-hover:text-[#f1cc8f]">
                                {person.name}
                              </p>
                              <p className="-mt-4 text-sm text-white">
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
  
  export function BestSellers({bestSellers}) {
  
  
    return (
  
        <div className="max-[700px]:mt-[-12%] lg:space-y-24 mx-auto max-w-7xl">
          {bestSellers.map((group) => (
            <FadeInStagger key={group.title}>
                <FadeIn>
                  <h2 className="text-center mt-24 font-display text-2xl font-semibold text-neutral-950">
                    {group.title}
                  </h2>
                </FadeIn>
           
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
                           
                            <div className="relative inset-0  bottom-0 flex flex-col justify-end p-6">
                       
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

    )
  }
  