import type { Metadata } from "next";
// import "@/assets/styles/styles.css";
import '@/assets/styles/globals.css';
import {ThemeModeProvider} from "./ThemeModeProvider"
import clsx from 'clsx'
// import "./globals.css";

import { GlobalProvider } from '@/context/GlobalContext';
import AuthProvider from '@/components/AuthProvider';

import { MobileMenu } from "../components/nav/MobileMenuLinks";
// import { Header } from "@/components/nav/Header";
import { Footer } from "../components/nav/Footer";
import Navbar from "@/components/Navbar";
import Header, { MobileHeader } from '@/components/SephoHeader'; //
import HideableNavbar from '@/components/HideableNavbar'; 
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const items = [
  {
    id: 'account',
    href: 'https://www.sephora.fr/connexion/',
    text: 'Se connecter',
    tooltipText: 'Profitez de vos offres et vos bons plans',
  },
  // Add more items as needed
];
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (     

    <GlobalProvider>
      <AuthProvider>
        <html lang="en"  suppressHydrationWarning={true}  className='dark' style={{ colorScheme: 'dark' }}>
          <ThemeModeProvider>  
          <head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
              } else {
                document.documentElement.classList.remove('dark')
              }
              `,
            }}>
          </script>
        </head>
         <body id="app" className={clsx(inter.className, "max-w-screen font-sans antialiased text-gray-600 min-h-full flex flex-col [overflow-anchor:none] dark:bg-black")} style={{"transition":"all 0.4s ease !important"}}> 
          {/* <Header   items={items}/>  */}
          <HideableNavbar/>
          <main className="relative -mt-[5.75rem] overflow-hidden  flex-auto">
          {/* pb-16 pt-[5.75rem] */}
           {children} 
          <Footer />
           </main>
        
         </body> 
       </ThemeModeProvider>
      </html>
     </AuthProvider> 
    </GlobalProvider>  

  );
}
