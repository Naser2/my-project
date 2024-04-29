import CartSVG from '../assets/images/basket-icon-bold.svg'


const Cart =({addItemCount}) =>{
    return (
        <div onClick={addItemCount}
        htmlFor="mobile-navigation"
        className="menu-togglee ring-1 rounded-full hover:ring-black h-8 w-8 mt-4  hover:bg-white"
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
  
  <div onClick={addItemCount} id="CART-MOBILE" className='mx-2'>
    <label className="stack_stack__iZkUS stack inline-flex sm:mx-1 ring-transparent !-mr-[0.6em] hover:ring-[var(--google-grey-500)] navTrigger menu-toggle_menuToggle__6OaWw mobile-menu-button_indicator__mGvzn avatar-mobile-menu_button__YEcob rounded-full ring-1  hover:hover:ring-black " data-version="v1" 
    style={{
      '-stackFlex': 'initial',
      '-stackDirection': 'row',
      '-stackAlign': 'center',
      '-stackJustify': 'flex-start',
      '-stackPadding': '0px',
      '-stackGap': '8px'
    }}>
      <div className=''>
        <button 
          className="bell_btn__yil2q hover:ring-1 ring-transparent !pl-0.5 hover:ring-black rounded-full hover:bg-white"
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-:rkl:"
          data-state="closed"
          aria-label="cart-mobile"
          data-testid="cart/mobile"
        >
          <span className="bell_buttonContent__IPiYG">
            <div className="bell_icon__U0zUM">
            <svg 
               data-testid="geist-icon"
               height={16}
               strokeLinejoin="round"
              //  viewBox="0 0 16 16"
               width={16}
               viewBox="0 0 23 23" 
               className=''
               style={{ width: '17px', height: '17px', color: 'var(--ds-gray-900)' }} >
             <path fill-rule="evenodd" clip-rule="evenodd" d="M7.07602 6C7.45086 3.59883 9.15419 2 10.9998 2C12.8453 2 14.5487 3.59883 14.9235 6H7.07602ZM5.06076 6C5.46053 2.73932 7.78975 0 10.9998 0C14.2098 0 16.539 2.73932 16.9388 6H19.8469C21.064 6 21.999 7.07797 21.8268 8.28284L20.1126 20.2828C19.9718 21.2681 19.128 22 18.1327 22H3.86725C2.87195 22 2.02811 21.2681 1.88735 20.2828L0.173065 8.28284C0.000941053 7.07798 0.935863 6 2.15296 6H5.06076ZM2.15296 8H19.8469L18.1327 20H3.86725L2.15296 8Z" fill="#595959"/>
            </svg>
            </div>
          </span>
        </button>
      </div>
    
    </label>
</div>)
}
export default Cart