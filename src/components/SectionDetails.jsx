import { classNames } from '@/utils';
import Button from './headless/button';

function SectionDetails({announcer, title, description, cta , style  }){
        return   <div className={classNames(style && style ,"absolute inset-x-6 max-[687px]:bottom-10 sm:top-[43em]  lg:w-1/2 bottom-[8rem]  px-4 pb-16 lg:p-16")}>
                    <h1 class="relative !text-left flex flex-col text-lg md:text-2xl  text-white overlayed-text overlayed-text-shadow">
                        <span class="uppercase massi-anouncer text-white">{announcer}</span>
                        <span class="text-h2 text-white overlayed-text overlayed-text-shadow" style={{"letterSpacing": "normal"}}><span className='text-h3' style={{fontFamily:'var(--hh-font-family-primary)', 'fontSize': '0rem !important'}}>{title} </span> <br></br></span>
                        <h3 className='' >{description}</h3>
                    </h1> 
                    <div className={classNames("justify-center")}>
                    <Button className={"image-with-text__cta themeBtn bg-black !text-white no_high_contrast  hover:!bg-gray-700 hover:text-white"} 
                            href="/get-started" color="white" shape="roundedSm"><span>{cta} </span></Button>
                    </div>
                </div>

}

export default  SectionDetails