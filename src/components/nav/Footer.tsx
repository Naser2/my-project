import { footerNavigation } from "@/data";

export function Footer() {
  return (
    <footer aria-labelledby="footer-heading flex-auto ">
        <div className="bg-slate-100 lg:p-smm px-5">
  <div className="flex justify-between flex-col-reverse lg:flex-row">
    <ul className="container py-10 lg:p-0 w-full lg:w-8/12 flex flex-col lg:grid lg:grid-cols-3 lg:gap-x-5">
      <li className="text-lg footer-tab">
        <input
          className="hidden"
          type="checkbox"
          id="footer-1"
          data-index={1}
        />
        <label
          htmlFor="footer-1"
          className="footer-label block py-4 lg:pt-0 lg:mb-4 text-lg font-sans uppercase"
        >
          Company
        </label>
        <div className="footer-content">
          <div className="font-serif mb-1  pt-1 lg:p-0">
            <a href="about" className="inline">
              About
            </a>
          </div>
          <div className="font-serif mb-1 ">
            <a href="store-locator" className="inline">
              Store Finder
            </a>
          </div>
          <div className="font-serif mb-1 ">
            <a href="/blog" className="inline">
              Journal
            </a>
          </div>
          <div className="font-serif mb-1 ">
            <a href="/pages/beauty-burden" className="inline">
            Massi Beauty
            </a>
          </div>
          <div className="font-serif mb-1 ">
            <a href="/gift-card" className="inline">
              Get $10 Off
            </a>
          </div>
        </div>
      </li>
      <li className="text-lg footer-tab">
        <input className="hidden" type="checkbox" id="footer-2" />
        <label
          htmlFor="footer-2"
          className="footer-label block py-4 lg:pt-0 lg:mb-4 text-lg font-sans uppercase"
        >
          Help
        </label>
        <div className="footer-content">
          <div className="font-serif mb-1  pt-1 lg:p-0">
            <a href="/faq" className="inline">
              FAQ
            </a>
          </div>
          <div className="font-serif mb-1 ">
            <a href="/concept" className="inline">
             Concept
            </a>
          </div>
          <div className="font-serif mb-1 ">
            <a href="/shipping-returns" className="inline">
              Shipping &amp; Returns
            </a>
          </div>
          <div className="font-serif mb-1 ">
            <a href="/contact-us" className="inline">
              Contact Us
            </a>
          </div>
        </div>
      </li>
      <li className="text-lg footer-tab">
        <input className="hidden" type="checkbox" id="footer-3" />
        <label
          htmlFor="footer-3"
          className="footer-label block py-4 lg:pt-0 lg:mb-4 font-sans uppercase"
        >
          Community
        </label>
        <div className="footer-content">
          <div className="font-serif mb-1  pt-1 lg:p-0">
            <a
              href="https://www.instagram.com/mbeauty/"
              className="inline"
              target="_blank"
            >
              Instagram
            </a>
          </div>
        </div>
      </li>
      <li className="block lg:hidden text-lg footer-tab">
        <input className="hidden" type="checkbox" id="footer-4" />
        <label
          htmlFor="footer-4"
          className="footer-label block py-4 lg:pt-0 lg:mb-4 font-sans uppercase"
        >
          Legal
        </label>
        <div className="footer-content">
          <div className="font-serif mb-1 pt-1 lg:p-0">
            <a href="/terms-conditions" className="inline">
              Terms and Conditions
            </a>
          </div>
          <div className="font-serif mb-1">
            <a href="/privacy-policy" className="inline">
              Privacy Policy
            </a>
          </div>
          <div className="font-serif mb-1">
            <a
              data-acsb-custom-trigger="true"
              className="inline cursor-pointer"
            >
              Accessibility
            </a>
          </div>
        </div>
      </li>
    </ul>
    <div className="container py-10 lg:p-0 w-full lg:w-4/12 bg-apricot">
    <h3 className="text-sm font-medium text-gray-900">
                LOGO HERE
              </h3>
      <form className="hidden sm:flex flex flex-col text-lg newsletter-form">
      <div className="mt-12 md:col-span-8 md:col-start-3 md:row-start-2 md:mt-0 lg:col-span-4 lg:col-start-9 lg:row-start-1">
              <h3 className="text-sm font-medium text-gray-900">
                Sign up for our newsletter
              </h3>
              <p className="mt-6 text-sm text-gray-500">
                The latest deals and savings, sent to your inbox weekly.
              </p>
              <form className="mt-2 flex sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  type="text"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 appearance-none  border border-[var(--agedBlack)]  bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-[var(--agedBlack)]"
                />
                <div className="ml-4 flex-shrink-0">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center border border-transparent bg-[var(--agedBlack)] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
      </form>
    </div>
  </div>
</div>
      {/* <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 py-20">
          <div className="grid grid-cols-1 md:grid-flow-col md:auto-rows-min md:grid-cols-12 md:gap-x-8 md:gap-y-16">
  
            <div className="col-span-1 max-w-lg md:col-span-2 lg:col-start-1 lg:row-start-1">
              <img
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
                className="h-8 w-auto"
              />
            </div>

          
            <div className="col-span-6 mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-8 md:col-start-3 md:row-start-1 md:mt-0 lg:col-span-6 lg:col-start-2">
              <div className="grid grid-cols-1 gap-y-12 sm:col-span-2 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    Products
                  </h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.products.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a
                          href={item.href}
                          className="text-gray-500 hover:text-gray-600"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Company</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a
                          href={item.href}
                          className="text-gray-500 hover:text-gray-600"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  Customer Service
                </h3>
                <ul role="list" className="mt-6 space-y-6">
                  {footerNavigation.customerService.map((item) => (
                    <li key={item.name} className="text-sm">
                      <a
                        href={item.href}
                        className="text-gray-500 hover:text-gray-600"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

     
            <div className="mt-12 md:col-span-8 md:col-start-3 md:row-start-2 md:mt-0 lg:col-span-4 lg:col-start-9 lg:row-start-1">
              <h3 className="text-sm font-medium text-gray-900">
                Sign up for our newsletter
              </h3>
              <p className="mt-6 text-sm text-gray-500">
                The latest deals and savings, sent to your inbox weekly.
              </p>
              <form className="mt-2 flex sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  type="text"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
                <div className="ml-4 flex-shrink-0">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 py-10 text-center">
          <p className="text-sm text-gray-500">
            &copy; 2021 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div> */}
    </footer>
  );
}
