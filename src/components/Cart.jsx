import CartSVG from '../assets/images/basket-icon-bold.svg'


const Cart =({addItemCount}) =>{
    return (
        <div onClick={addItemCount}
        htmlFor="mobile-navigation"
        className="menu-togglee hover:ring-1 hover:ring-[var(--ds-gray-alpha-500)] rounded-full hover:ring-black h-8 w-8 mt-4  hover:bg-white"
        id="menu-togglee">
         <a className=" empty" href="/cart" title="Commander">
             <span class="header-link-icon pb-8 justify-center flex">
             {/* <CartSVG/> */}
              <svg  data-testid="geist-icon"
               height={16}
               strokeLinejoin="round"
              //  viewBox="0 0 16 16"
               width={16}
              viewBox="0 0 23 23" 
              fill="none" xmlns="http://www.w3.org/2000/svg" class="justify-center pt-2">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.07602 6C7.45086 3.59883 9.15419 2 10.9998 2C12.8453 2 14.5487 3.59883 14.9235 6H7.07602ZM5.06076 6C5.46053 2.73932 7.78975 0 10.9998 0C14.2098 0 16.539 2.73932 16.9388 6H19.8469C21.064 6 21.999 7.07797 21.8268 8.28284L20.1126 20.2828C19.9718 21.2681 19.128 22 18.1327 22H3.86725C2.87195 22 2.02811 21.2681 1.88735 20.2828L0.173065 8.28284C0.000941053 7.07798 0.935863 6 2.15296 6H5.06076ZM2.15296 8H19.8469L18.1327 20H3.86725L2.15296 8Z" fill="#595959"/>
            </svg>

              <span class="header-link-quantity-wrap">
             <span class="header-link-quantity">    
            </span>
          </span>
         </span>
        </a>
        </div>)

}

export const CartMobile =({addItemCount}) =>{
  return (
  
  <div onClick={addItemCount} id="CART-MOBILE" className='mx-2 sm:mx-2'>
    <label className="stack_stack__iZkUS stack inline-flex sm:mx-1 !-mr-[0.6em]  navTrigger menu-toggle_menuToggle__6OaWw mobile-menu-button_indicator__mGvzn avatar-mobile-menu_button__YEcob 
    rounded-full dark:!text-white" data-version="v1" 
    style={{
      '-stackFlex': 'initial',
      '-stackDirection': 'row',
      '-stackAlign': 'center',
      '-stackJustify': 'flex-start',
      '-stackPadding': '0px',
      '-stackGap': '8px'
    }}>
      <div className=''>
        <button    id="CART-CART-JS"
          className="bell_btn__yil2q  hover:ring-[var(--ds-gray-alpha-500)] text-black hover:shadow-xl sm:mr-1 mobile-search-magnifying-glass hover:bg-[--lightGrey] dark:stroke-gray-200 
          dark:hover:!stroke-white dark:bg-slate-800 dark:!text-white "
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-:rkl:"
          data-state="closed"
          aria-label="cart-mobile"
          data-testid="cart/mobile"
        >
          <span className="bell_buttonContent__IPiYG ">
            <div className="bell_icon__U0zUM">
            <hh-button class="header__utility-item header__utility-item--cart" theme="none" href="#cart" data-rerender="">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" class="icon icon-cart" viewBox="0 0 12 13" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.1614 3.1545C4.1614 2.10753 5.01014 1.25879 6.05711 1.25879C7.10408 1.25879 7.95281 2.10753 7.95281 3.1545V3.69447H4.1614V3.1545ZM3.1614 4.69447V5.61573H4.1614V4.69447H7.95281V5.61573H8.95281V4.69447H10.1099V11.4921H1.88672V4.69447H3.1614ZM3.1614 3.69447V3.1545C3.1614 1.55524 4.45785 0.258789 6.05711 0.258789C7.65636 0.258789 8.95281 1.55524 8.95281 3.1545V3.69447H10.1099H11.1099V4.69447V11.4921V12.4921H10.1099H1.88672H0.886719V11.4921V4.69447V3.69447H1.88672H3.1614Z" fill="currentColor"></path>
    </svg>
                
              </hh-button>
            </div>
          </span>
        </button>
      </div>
    
    </label>
</div>)
}
export default Cart