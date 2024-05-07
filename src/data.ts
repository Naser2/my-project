
import {
  CurrencyDollarIcon,
  GlobeAmericasIcon,
  BookOpenIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  NewspaperIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  UsersIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";

import MassiFleures from '@/assets/images/landing-images/massi-fleures.jpg';
import MassiFleuresRight from '@/assets/images/landing-images/massi-fleures-right.jpg';
import massi_hero_part3_mobile from "./assets/images/heros/massi_hero_part3_mobile.png";
import massi_hero_part3_desktop from "./assets/images/heros/massi_hero_part3_desktop.png";


export const navigation = {
  categories: [
    {
      id: "services",
      name: "Services",
      hero: {
        desktop: {
          srcSet: massi_hero_part3_desktop.src,
          sizes: '(min-width: 601px) 640px, 100vw',
        },
        mobile: {
          srcSet:massi_hero_part3_mobile.src,
          sizes: '320px',
        },
         alt: 'Hero Image',
         title: 'Services',
          subtitle: 'Natural | Currly | Straight',
          href: '/services',
          cta:'Discover all'
        },
      featured:[ 
        { id:"_jigazxdelt3",
          name: "Hair & Eyelashes Bundle",
          href: "/featured",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
            featured:"20%"
        }],
      sections: [
        [
          {
            id: "thingy1",
            name: "Wigs & extenssion & more",
            items: [
              { name: "13x4 Lace Frontal", href: "#" },
              { name: "5x5 Lace Closure", href: "#" },
              { name: "Deep Wave bundle", href: "#" },
              { name: "Wigs & Frontal Wig", href: "#" },
              { name: "13X4 Deep Curly Transparent Lace Frontal Wig", href: "#" },
              { name: "Eyelashes", href: "#" },
              { name: "Kits", href: "/kits" },
            ],
          },
          {
            id: "thingy2",
            name: "SECTION 2",
            items: [
              { name: "13x4 Lace Frontal", href: "#" },
              { name: "5x5 Lace Closure", href: "#" },
              { name: "Deep Wave bundle", href: "#" },
              { name: "Wigs & Frontal Wig", href: "#" },
              { name: "13X4 Deep Curly Transparent Lace Frontal Wig", href: "#" },
              { name: "Eyelashes", href: "#" },
              { name: "Kits", href: "/kits" },
            ],
          },
          {
            id: "thingy3",
            name: "SECTION 3",
            items: [
              { name: "13x4 Lace Frontal", href: "#" },
              { name: "5x5 Lace Closure", href: "#" },
              { name: "Deep Wave bundle", href: "#" },
              { name: "Wigs & Frontal Wig", href: "#" },
              { name: "13X4 Deep Curly Transparent Lace Frontal Wig", href: "#" },
              { name: "Eyelashes", href: "#" },
              { name: "Kits", href: "/kits" },
            ],
          },
          
          
          
        ]
      ]
    },
    {
      id: "accessories",
      name: "Accessories",
      hero: {
        desktop: {
          srcSet: 'https://example.com/desktop-image.jpg',
          sizes: '(min-width: 601px) 640px, 100vw',
        },
        mobile: {
          srcSet: 'https://example.com/mobile-image.jpg',
          sizes: '320px',
        },
         alt: 'Hero Image',
         title: 'MASSI ACCESSOIRIES',
          subtitle: 'New glow',
          href: '/services',
          cta:'Discover all'
        },
      featured: [
        { id:"_gdsigmzxdeler",
          name: "Season Discount",
          href: "/discounts",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg",
          imageAlt:
            "Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters.",
            discount:"20%"
        }],
        
      sections: [
        [
          {
            id: "accessories",
            name: " Accessories",
            items: [
              { name: " Lace Closure / Frontal", href: "/laces" },
              { name: "Shampoo", href: "/laces" },
              { name: "Deep Wave bundle", href: "/waves" },
              { name: "Split End Therapy", href: "#" },
              { name: "Healthy hair dryers", href: "#" },
              { name: "Mosturizer", href: "/moisturizer" },
              { name: "Eyelashes", href: "#" },
              { name: "rosemary Mint Scalp", href: "/kits" },
              { name: "Mosturizer", href: "/moisturizer" },
            ],
          },
          {
            id: "kits",
            name: "kits",
            items: [
              { name: "Massi's Picks", href: "#" },
              { name: "Core", href: "#" },
              { name: "New Arrivals", href: "#" },
              { name: "kits Sale", href: "#" },
            ],
          },
        ],
       
      ],
    },
  ],
  pages: [
    // { name: "Porfolio", href: "/portfolio" },
    // { name: "About", href: "/about" },
    // { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Login", href: "/api/auth" },
  ],
};

export const product = {
  name: "Basic Tee",
  price: "$35",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Women", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      id: 1,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
      imageAlt: "Back of women's Basic Tee in black.",
      primary: true,
    },
    {
      id: 2,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-01.jpg",
      imageAlt: "Side profile of women's Basic Tee in black.",
      primary: false,
    },
    {
      id: 3,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg",
      imageAlt: "Front of women's Basic Tee in black.",
      primary: false,
    },
  ],
  colors: [
    { name: "Black", bgColor: "bg-gray-900", selectedColor: "ring-gray-900" },
    {
      name: "Heather Grey",
      bgColor: "bg-gray-400",
      selectedColor: "ring-gray-400",
    },
  ],
  sizes: [
    { name: "XXS", inStock: true },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: false },
  ],
  description: `
    <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p>
    <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
  `,
  details: [
    "Only the best materials",
    "Ethically and locally made",
    "Pre-washed and pre-shrunk",
    "Machine wash cold with similar colors",
  ],
};

export const policies = [
  {
    name: "International delivery",
    icon: GlobeAmericasIcon,
    description: "Get your order in 2 years",
  },
  {
    name: "Loyalty rewards",
    icon: CurrencyDollarIcon,
    description: "Don't look at other tees",
  },
];

export const reviews = {
  average: 3.9,
  totalCount: 512,
  featured: [
    {
      id: 1,
      title: "Can't say enough good things",
      rating: 5,
      content: `
        <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
        <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
      `,
      author: "Risako M",
      date: "May 16, 2021",
      datetime: "2021-01-06",
    },
    // More reviews...
  ],
};

export const relatedProducts = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
    imageAlt: "Front of men's Basic Tee in white.",
    price: "$35",
    color: "Aspen White",
  },
  // More products...
];

export const footerNavigation = {
  products: [
    { name: "Bags", href: "#" },
    { name: "Tees", href: "#" },
    { name: "Objects", href: "#" },
    { name: "Home Goods", href: "#" },
    { name: "Accessories", href: "#" },
  ],
  company: [
    { name: "Who we are", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Press", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy", href: "#" },
  ],
  customerService: [
    { name: "Contact", href: "#" },
    { name: "Shipping", href: "#" },
    { name: "Returns", href: "#" },
    { name: "Warranty", href: "#" },
    { name: "Secure Payments", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Find a store", href: "#" },
  ],
};


export const allCategories = [
   { id:"products",
    name: "Products",
    categoryContent: [
      { section: "Item 1", sectionItems:  [{nav_link_name: "Shampoing homme", href: "/shampoing_homme"}] },
      { section: "Item 2",  sectionItems:  [ {nav_link_name: "Coiffant & Fixant", href: "/coiffant_&_fixant" }] }
    ]
  },
  
  {  id:"services",
     name: "Seuurvices",
     hero: {
      desktop: {
        srcSet: 'https://example.com/desktop-image.jpg',
        sizes: '(min-width: 601px) 640px, 100vw',
      },
      mobile: {
        srcSet: 'https://example.com/mobile-image.jpg',
        sizes: '320px',
      },
       alt: 'Hero Image',
       title: 'CHOCOLATE MADEMOISELLE',
        subtitle: 'New glow',
        href: '/coco-mademoiselle'
      },
    
  categoryContent: [  
 { section:"Overall", sectionItems: [ { nav_link_name: "Voir tout", href: "/voir_tout" }, { nav_link_name: "-25% sur une sélection soin cheveux", href: "/-25%_sur_une_selection_soin_cheveux" },
      { nav_link_name: "Beauty Days Cheveux", href: "/beauty_days_cheveux" }, { nav_link_name: "Nouveautés", href: "/nouveautes" },
      { nav_link_name: "Meilleures ventes 🔥", href: "/meilleures_ventes" },
       { nav_link_name: "Soin cheveux parapharmacie", href: "/soin_cheveux_parapharmacie" }, 
      { nav_link_name: "Coffret cheveux", href: "/coffret_cheveux" }, { nav_link_name: "Routine cheveux", href: "/routine_cheveux" } ]},
 {section: "Soin Cheveux" , sectionItems: [{ nav_link_name: "Shampoing", href: "/shampoing" },
    { nav_link_name: "Après-shampoing", href: "/apres_shampoing" }, 
    { nav_link_name: "Masque cheveux", href: "/masque_cheveux" }, { nav_link_name: "Soin sans rinçage", href: "/soin_sans_rinçage" }, { nav_link_name: "Huile cheveux", href: "/huile_cheveux" }, { nav_link_name: "Coloration cheveux", href: "/coloration_cheveux" }, { nav_link_name: "Shampoing sec", href: "/shampoing_sec" }, { nav_link_name: "Parfum cheveux", href: "/parfum_cheveux" }, { nav_link_name: "Shampoing solide", href: "/shampoing_solide" }, { nav_link_name: "Gommage cuir chevelu", href: "/gommage_cuir_chevelu" } ]},
 {section:"Accessoires", sectionItems: [
   { nav_link_name: "Brosse & peigne", href: "/brosse_&_peigne" }, { nav_link_name: "Lisseur & boucleur", href: "/lisseur_&_boucleur" }, 
   { nav_link_name: "Sèche cheveux", href: "/seche_cheveux" } ]
  },
 { section: "Coiffant et Fixant", sectionItems: [ { nav_link_name: "Spray", href: "/spray" },
     { nav_link_name: "Crème", href: "/creme" } ]},

{section:"Besoins", sectionItems: [
    { nav_link_name: "Anti-chute", href: "/anti-chute" }, { nav_link_name: "Hydratant & Nourrissant", href: "/hydratant_&_nourrissant" },
    { nav_link_name: "Volume", href: "/volume" },
    { nav_link_name: "Cuir chevelu", href: "/cuir_chevelu" }, 
    { nav_link_name: "Protection solaire", href: "/protection_solaire" }, 
    { nav_link_name: "Boucles et ondulations", href: "/boucles_et_ondulations" }, 
    { nav_link_name: "Brillance & lissage", href: "/brillance_&_lissage" },
    { nav_link_name: "Anti-pelliculaire & apaisant", href: "/anti-pelliculaire_&_apaisant" },
    { nav_link_name: "Cheveux colorés", href: "/cheveux_colores" }
   ]
  },
   
 {section:  "Type de cheveux",sectionItems: [{ nav_link_name: "Cheveux bouclés, frisés", href: "/cheveux_boucles_frises" }, 
 { nav_link_name: "Cheveux secs & abimés", href: "/cheveux_secs_abimes" }, 
 { nav_link_name: "Cheveux colorés & méchés", href: "/cheveux_colores_meches" },
  { nav_link_name: "Cheveux fins & sans volume", href: "/cheveux_fins_sans_volume" },
   { nav_link_name: "Cheveux blonds décolorés", href: "/cheveux_blonds_decolores" }, 
   { nav_link_name: "Cheveux normaux", href: "/cheveux_normaux" }, { nav_link_name: "Mixte à gras", href: "/mixte_a_gras" },
    { nav_link_name: "Cheveux ternes", href: "/cheveux_ternes" }
   ]
  },
  {ssection: "Compléments alimentaires cheveux", sectionItems:  []},
  { section: "Cheveux Homme", sectionItems: [
      { nav_link_name: "Shampoing homme", href: "/shampoing_homme" },
      { nav_link_name: "Coiffant & Fixant", href: "/coiffant_&_fixant" },
      { nav_link_name: "Soin pour cheveux", href: "/soin_pour_cheveux" } ]},
  {section: "Mini soin cheveux",  sectionItems: []},
  {section: "Massi collection Soin cheveux", sectionItems: []},
  {section:  "Guide soin cheveux", sectionItems:[]}
  ]

},
 
  // Add more categories as needed
];
export const dispatchData = [
  {
    title: "MODE & ACCESSOIRES",
    subtitle: "Commander",
    href: "/fr_fr/fashion",
    src: MassiFleures.src,
    alt: ""
  },
  {
    title: "PARFUM & BEAUTÉ",
    subtitle: "Commander",
    href: "/fr_fr/beauty",
    src:MassiFleuresRight.src,
    alt: ""
  }
];


 


export const proucdtsTeaser = [
  {
    title: "Grand flacon, au prix du petit",
    description: "Profitez du grand format au prix d'un plus petit.*",
    href: "https://www.sephora.fr/grand-flacon-petit-prix/",
    src: "https://www.sephora.fr/on/demandware.static/-/Library-Sites-SephoraV2/default/dwc1e011ba/SN-9383-FR-UNDERBANNER.jpg",
    alt: "Grand flacon, au prix du petit",
    ctaText: "Découvrir",
    legalMention: "*Sur une sélection de parfums.."
  },
  {
    title: "New IN Rare Beauty",
    description: "Couleur intense & fini soyeux pour un effet bonne mine.",
    href: "https://www.sephora.fr/p/718880.html",
    src: "https://www.sephora.fr/on/demandware.static/-/Library-Sites-SephoraV2/default/dwe435e125/SN-9293-FR-UNDERBANNER.jpg",
    alt: "New IN Rare Beauty",
    ctaText: "Découvrir",
    legalMention: "New in = nouveau."
  },{
    title: "Grand flacon, au prix du petit",
    description: "Profitez du grand format au prix d'un plus petit.*",
    href: "https://www.sephora.fr/grand-flacon-petit-prix/",
    src: "https://www.sephora.fr/on/demandware.static/-/Library-Sites-SephoraV2/default/dwc1e011ba/SN-9383-FR-UNDERBANNER.jpg",
    alt: "Grand flacon, au prix du petit",
    ctaText: "Découvrir",
    legalMention: "*Sur une sélection de parfums.."
  },
  {
    title: "New IN Rare Beauty",
    description: "Couleur intense & fini soyeux pour un effet bonne mine.",
    href: "https://www.sephora.fr/p/718880.html",
    src: "https://www.sephora.fr/on/demandware.static/-/Library-Sites-SephoraV2/default/dwe435e125/SN-9293-FR-UNDERBANNER.jpg",
    alt: "New IN Rare Beauty",
    ctaText: "Découvrir",
    legalMention: "New in = nouveau."
  }
];

export const allReviews = {
  servicesReviews: [
    {
      text: "Nas Design built some React Native mobile screen to be used in our mobile application. It was a smooth process and Nasser was willing to iterate as much to get the product we wanted. Really happy to have worked with NasDesign",
      author: "Komal Kehar",
      title: "CEO of Mira Project",
      image: "https://images.ctfassets.net/e5382hct74si/7mlje7mNxEK4jvgqWKu507/bc064f44b3a0fc67695e354003fb3d1c/image.png",
      featured: true, // Default value
    },
    {
      text: "NasDesign built a great website for me. I am honestly pleased to have worked with them, Nasser made it very straightforward and easy as a process. Thank you",
      author: "Amit",
      title: "Director and Cinematographer - Film Maker",
      image: "https://images.unsplash.com/photo-1507003211169-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      featured: true, // Featured review
    },
    {
      text: "Nas Design built some React Native mobile screen to be used in our mobile application. It was a smooth process and Nasser was willing to iterate as much to get the product we wanted. Really happy to have worked with NasDesign",
      author: "Andrew",
      title: "Position",
      image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80",
      featured: true, // Featured review
    },
    // Add more reviews...
  ],
  // Other information about reviews can be added here, such as average rating, total count, etc.
};



export const paradigm = {
  name:"Paradigm",
  resources: [
    { title:"Engagement", 
      resource: [
      { name: 'About', href: '#', icon: InformationCircleIcon },
      { name: 'Customers', href: '#', icon: UsersIcon },
      { name: 'Press', href: '#', icon: NewspaperIcon },
      { name: 'Careers', href: '#', icon: BriefcaseIcon },
      { name: 'Privacy', href: '#', icon: ShieldCheckIcon }]
     },
  { title:"Resources", 
     resource:[
      { name: 'Community', href: '#', icon: UserGroupIcon },
      { name: 'Partners', href: '#', icon: GlobeAltIcon },
      { name: 'Guides', href: '#', icon: BookOpenIcon },
      { name: 'Webinars', href: '#', icon: VideoCameraIcon },
      { name: 'Webinars', href: '#', icon: VideoCameraIcon },
    ]
    
  },
  
  ]
}
export const latestBlogs= 
  { title: "recentPosts",
    resources: [
      {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        date: 'Mar 16, 2023',
        datetime: '2023-03-16',
        category: { title: 'Marketing', href: '#' },
        imageUrl:
          'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
        description:
          'Et et dolore officia quis nostrud esse aute cillum irure do esse. Eiusmod ad deserunt cupidatat est magna Lorem.',
      },
      {
        id: 2,
        title: 'How to use search engine optimization to drive sales',
        href: '#',
        date: 'Mar 10, 2023',
        datetime: '2023-03-10',
        category: { title: 'Sales', href: '#' },
        imageUrl:
          'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
        description: 'Optio cum necessitatibus dolor voluptatum provident commodi et.',
      } 
    ]
   }


export const UserFlyoutLinks= {
  name:"My account",
  resources: [
    { title:"Engagement", 
      resource: [
      { name: 'About', href: '#', icon: InformationCircleIcon },
      { name: 'Customers', href: '#', icon: UsersIcon },
      { name: 'Press', href: '#', icon: NewspaperIcon },
      { name: 'Careers', href: '#', icon: BriefcaseIcon },
      { name: 'Privacy', href: '#', icon: ShieldCheckIcon }]
     },
  { title:"Resources", 
     resource:[
      { name: 'Community', href: '#', icon: UserGroupIcon },
      { name: 'Partners', href: '#', icon: GlobeAltIcon },
      { name: 'Guides', href: '#', icon: BookOpenIcon },
      { name: 'Webinars', href: '#', icon: VideoCameraIcon },
      { name: 'Webinars', href: '#', icon: VideoCameraIcon },
    ]
    
  },
  
  ]
}
  // "recentPosts": [
  //  {
  //    id: 1,
  //    title: 'Boost your conversion rate',
  //    href: '#',
  //    date: 'Mar 16, 2023',
  //    datetime: '2023-03-16',
  //    category: { title: 'Marketing', href: '#' },
  //    imageUrl:
  //      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
  //    description:
  //      'Et et dolore officia quis nostrud esse aute cillum irure do esse. Eiusmod ad deserunt cupidatat est magna Lorem.',
  //  },
  //  {
  //    id: 2,
  //    title: 'How to use search engine optimization to drive sales',
  //    href: '#',
  //    date: 'Mar 10, 2023',
  //    datetime: '2023-03-10',
  //    category: { title: 'Sales', href: '#' },
  //    imageUrl:
  //      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
  //    description: 'Optio cum necessitatibus dolor voluptatum provident commodi et.',
  //  },
//    ]
//  }

 

// const userAccoutFylout = [
//   {
//     itemName: "Se connecter",
//     href: "https://www.sephora.fr/connexion/",
//     svg: (
//       <svg
//         width={17}
//         height={21}
//         viewBox="0 0 20 24"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           fillRule="evenodd"
//           clipRule="evenodd"
//           d="M20 22.0741C20 23.1377 19.1046 24 18 24L2 24C1.46957 24 0.960859 23.7971 0.585787 23.4359C0.210714 23.0747 0 22.5849 0 22.0741C0 20.6616 0.243014 19.2573 0.720548 17.9389C1.19805 16.6207 1.90459 15.404 2.81332 14.3648C3.72252 13.3251 4.82059 12.4792 6.05578 11.8941C7.29265 11.3083 8.63412 11 10 11C11.3659 11 12.7073 11.3083 13.9442 11.8941C15.1794 12.4792 16.2775 13.3251 17.1867 14.3648C18.0954 15.404 18.8019 16.6207 19.2795 17.9389C19.757 19.2573 20 20.6616 20 22.0741ZM2.17929 20.1481C2.2805 19.6107 2.42411 19.0836 2.60896 18.5732C3.011 17.4633 3.60028 16.4548 4.34315 15.6054C5.08601 14.7559 5.96793 14.082 6.93853 13.6223C7.90914 13.1625 8.94942 12.9259 10 12.9259C11.0506 12.9259 12.0909 13.1625 13.0615 13.6223C14.0321 14.082 14.914 14.7559 15.6569 15.6054C16.3997 16.4548 16.989 17.4633 17.391 18.5732C17.5759 19.0836 17.7195 19.6107 17.8207 20.1481C17.9396 20.7796 18 21.4251 18 22.0741L2 22.0741C2 21.4251 2.06039 20.7796 2.17929 20.1481Z"
//           fill="black"
//         />
//         <path
//           fillRule="evenodd"
//           clipRule="evenodd"
//           d="M10 8C11.6569 8 13 6.65685 13 5C13 3.34315 11.6569 2 10 2C8.34315 2 7 3.34315 7 5C7 6.65685 8.34315 8 10 8ZM10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z"
//           fill="black"
//         />
//       </svg>
//     ),
//   },
//   {
//     itemName: "Mon beauty compte",
//     href: "https://www.sephora.fr/mon-compte/",
//     svg: (
//       <svg
//         className="svg-inline account-icon color-red"
//         xmlns="http://www.w3.org/2000/svg"
//         width={21}
//         height={22}
//         viewBox="0 0 21 22"
//       >
//         <path d="M9.9 10.5C6.2 10.5 2.8 12.7 1.4 16.2L0.7 18.1C0.6 18.4 0.5 18.7 0.5 19 0.5 20.4 1.6 21.5 3 21.5L18 21.5C18.3 21.5 18.6 21.4 18.9 21.3 20.2 20.8 20.8 19.3 20.3 18.1L19.6 16.2C18.2 12.7 14.8 10.5 11.1 10.5L9.9 10.5ZM10.2 0.5C8.3 0.5 6.7 2.1 6.7 4L6.7 4.4C6.7 6.3 8.3 7.9 10.2 7.9L10.7 7.9C12.6 7.9 14.2 6.3 14.2 4.4L14.2 4C14.2 2.1 12.6 0.5 10.7 0.5L10.2 0.5Z" />
//       </svg>
//     ),
//   },
//   {
//     itemName: "Mes achats",
//     href: "https://www.sephora.fr/mes-achats/",
//     svg: (
//       <svg
//         className="svg-inline basket-icon color-red"
//         xmlns="http://www.w3.org/2000/svg"
//         width={22}
//         height={18}
//         viewBox="0 0 22 18"
//       >
//         <path d="M0.7 5.5L4.4 17.2 18.2 17.2 21.3 5.5 0.7 5.5Z" />
//         <path d="M6.5 5.9C7 2.5 8.5 0.9 11.1 0.9 13.8 0.9 15.2 2.5 15.5 5.9" />
//       </svg>
//     ),
//   },
//   {
//     itemName: "Retours & échanges",
//     href: "https://www.sephora.fr/retours-exchanges/",
//     svg: (
//       <svg
//         width={21}
//         height={20}
//         viewBox="0 0 21 20"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M20.3333 7.66663H7.66667C7.02467 7.66663 6.5 8.1913 6.5 8.8333V12.1666C6.5 12.8086 7.02467 13.3333 7.66667 13.3333H20.3333C20.9753 13.3333 21.5 12.8086 21.5 12.1666V8.8333C21.5 8.1913 20.9753 7.66663 20.3333 7.66663ZM2.16667 16.5C1.18133 16.5 0.375 17.3063 0.375 18.2916C0.375 19.2769 1.18133 20.0833 2.16667 20.0833H18.8333C19.8187 20.0833 20.625 19.2769 20.625 18.2916C20.625 17.3063 19.8187 16.5 18.8333 16.5H2.16667ZM13.8333 0.75H7.16667C6.52317 0.75 6 1.27317 6 1.91663V4.66663H14V1.91663C14 1.27317 13.4768 0.75 13.8333 0.75Z"
//           fill="#222B45"
//         />
//       </svg>
//     ),
//   },
//   {
//     itemName: "Echantillons offerts",
//     href: "https://www.sephora.fr/e-shop/landing",
//     svg: (
//       <svg
//         width={22}
//         height={21}
//         viewBox="0 0 22 21"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M0.375 0.75C0.375 0.336579 0.711579 0 1.125 0H20.875C21.2884 0 21.625 0.336579 21.625 0.75V8.25H20.125V1.5H1.875V8.25H0.375V0.75ZM0.375 9.75C0.375 9.33658 0.711579 9 1.125 9H3V18.75H0.375C0.336579 18.75 0.3125 18.7322 0.296572 18.7121C0.280644 18.6921 0.272949 18.6714 0.27511 18.6504L0.703583 10.9004C0.711595 10.8551 0.732838 10.8128 0.764618 10.7786C0.796398 10.7445 0.836203 10.7206 0.879024 10.7092C0.921845 10.6978 0.966204 10.6995 1.00773 10.7142C1.04926 10.7289 1.08673 10.7566 1.11658 10.7945C1.14642 10.8324 1.16769 10.8792 1.17757 10.9304L1.60411 18.6804C1.61213 18.7257 1.63281 18.768 1.66467 18.8021C1.69653 18.8362 1.73639 18.8601 1.77921 18.8715C1.82203 18.8829 1.8668 18.8819 1.90937 18.8685C1.95195 18.8551 1.99117 18.8297 2.02442 18.7944C2.05767 18.759 2.08378 18.7147 2.10011 18.6652C2.11644 18.6157 2.12249 18.5634 2.11856 18.5111L1.69158 10.7611H20.125V9.75H13.625V11.25H10.375V9.75H3.375V11.25H0.375V9.75ZM21.625 19.5H0.375C0.336579 19.5 0.3125 19.5178 0.296572 19.5379C0.280644 19.558 0.272949 19.5786 0.27511 19.5996L0.703583 27.3496C0.711595 27.3949 0.732838 27.4372 0.764618 27.4714C0.796398 27.5055 0.836203 27.5294 0.879024 27.5408C0.921845 27.5522 0.966204 27.5505 1.00773 27.5358C1.04926 27.5211 1.08673 27.4934 1.11658 27.4555C1.14642 27.4176 1.16769 27.3708 1.17757 27.3196L1.60411 19.5696C1.61213 19.5243 1.63281 19.482 1.66467 19.4479C1.69653 19.4138 1.73639 19.3899 1.77921 19.3785C1.82203 19.3671 1.8668 19.3681 1.90937 19.3815C1.95195 19.3949 1.99117 19.4203 2.02442 19.4556C2.05767 19.491 2.08378 19.5353 2.10011 19.5848C2.11644 19.6343 2.12249 19.6866 2.11856 19.7389L1.69158 27.4889C1.69158 27.6925 1.78864 27.8919 1.96212 28.0632C2.13561 28.2345 2.37599 28.3676 2.63225 28.4436C2.88852 28.5195 3.15021 28.5354 3.40945 28.4899C3.66868 28.4444 3.91653 28.3398 4.13508 28.1866C4.35363 28.0335 4.53717 27.8363 4.67206 27.6087C4.80695 27.3812 4.88867 27.1285 4.91158 26.8666L5.33856 19.1166H20.625L21.054 26.8666C21.077 27.1285 21.1587 27.3812 21.2936 27.6087C21.4285 27.8363 21.612 28.0335 21.8305 28.1866C22.049 28.3398 22.2968 28.4444 22.556 28.4899C22.8153 28.5354 23.077 28.5195 23.3333 28.4436C23.5896 28.3676 23.8301 28.2345 24.0036 28.0632C24.1771 27.8919 24.2742 27.6925 24.2742 27.4889L23.8472 19.7389C23.8432 19.6866 23.8493 19.6343 23.8657 19.5848C23.882 19.5353 23.9081 19.491 23.9413 19.4556C23.9745 19.4203 24.0137 19.3949 24.0563 19.3815C24.0988 19.3681 24.1436 19.3671 24.1864 19.3785C24.2292 19.3899 24.269 19.4138 24.3009 19.4479C24.3328 19.482 24.3535 19.5243 24.3615 19.5696L24.788 27.3196C24.7979 27.3708 24.8192 27.4176 24.849 27.4555C24.8789 27.4934 24.9164 27.5211 24.9579 27.5358C24.9994 27.5505 25.0438 27.5522 25.0866 27.5408C25.1294 27.5294 25.1692 27.5055 25.201 27.4714C25.2328 27.4372 25.254 27.3949 25.262 27.3496L25.6895 19.5996C25.6927 19.5786 25.6849 19.558 25.6691 19.5379C25.6532 19.5178 25.6291 19.5 25.5917 19.5H21.625Z" fill="#222B45" />
//       </svg>
//     ),
//   },
//   {
//       itemName: "Suivre Ma commande",
//       href: "https://www.sephora.fr/track-order",
//       svg: (
//           <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width={27}
//           height={21}
//           viewBox="0 0 27 21"
//         >
//           <g fill="none" fillRule="evenodd">
//             <g stroke="#000">
//               <g>
//                 <g>
//                   <g>
//                     <g>
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M8.852 6.285V4.833c0-.552.448-1 1-1H24.52c.552 0 1 .448 1 1V19.5c0 .552-.448 1-1 1H9.852c-.552 0-1-.448-1-1v-1.773"
//                         transform="translate(-739 -9) translate(15 9) translate(623) translate(72) translate(29)"
//                       />
//                       <path
//                         strokeLinecap="round"
//                         d="M5.5 8.667L17.039 8.667M3 12L14.539 12M.5 15.333L12.039 15.333"
//                         transform="translate(-739 -9) translate(15 9) translate(623) translate(72) translate(29)"
//                       />
//                       <path
//                         strokeLinejoin="round"
//                         d="M14.852.5h4.465c.552 0 1 .448 1 1v2.333l-6.465-.029V1.5c0-.552.448-1 1-1z"
//                         transform="translate(-739 -9) translate(15 9) translate(623) translate(72) translate(29)"
//                       />
//                     </g>
//                   </g>
//                 </g>
//               </g>
//             </g>
//           </g>
//         </svg>
//       ),
//     },
//     {
//       itemName: "Mon programme de fidélité",
//       href: "https://www.sephora.fr/programme-fidelite",
//       svg: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="19"
//           height="14"
//           viewBox="0 0 19 14"
//         >
//           <path d="M16.4 14L3.1 14C1.5 14 0 12.7 0 11.2L0 2.6C0 1.2 1.5 0 3.1 0L16.4 0C17.9 0 19 1.2 19 2.6L19 11.2C19 12.7 17.9 14 16.4 14ZM16.4 13C17.3 13 18 12.3 18 11.4L18 2.6C18 1.7 17.3 1 16.4 1L2.8 1C1.9 1 1 1.7 1 2.6L1 11.4C1 12.3 1.9 13 2.8 13L16.4 13ZM9.2 7C8.9 6.1 8.8 4.7 11 3C10.4 3.7 10 4.7 10.9 7C11.5 8.7 10 10.3 9 11C9.4 10.5 10.1 9.6 9.2 7Z" />
//         </svg>
//       ),
//     },
//     {
//       itemName: "Prendre un rendez-vous",
//       href: "https://www.sephora.fr/rdv",
//       svg: (
//         <svg  xmlns="http://www.w3.org/2000/svg"  width="20"   height="20" viewBox="0 0 20 20" >
//           <path d="M14 3L16 5H4L6 3H4L3 2V18H17V2L16 3H14ZM14 14V16H12V14H10V16H8V14H6V12H14V14ZM14 10V12H6V10H14ZM8 7V9H6V7H8Z" />
//         </svg>
//       ),
//     },
//     {
//       itemName: "Mes communications",
//       href: "https://www.sephora.fr/communications",
//       svg: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="16"
//           viewBox="0 0 24 16"
//         >
//           <path d="M2 1A1 1 0 0 0 1 2v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm0-1h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm8.783 7.374l-.57.822-9.476-6.57.57-.822 9.476 6.57zm7.53-6.575l.61.792-8.581 6.61-.61-.792 8.581-6.61z" />
//         </svg>
//       ),
//     },
//     {
//       itemName: "Besoin d'aide",
//       href: "https://www.sephora.fr/aide",
//       svg: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="19"
//           height="19"
//           viewBox="0 0 19 19"
//         >
//           <path d="M9.5 19C4.3 19 0 14.7 0 9.5 0 4.3 4.3 0 9.5 0 14.7 0 19 4.3 19 9.5 19 14.7 14.7 19 9.5 19ZM9.5 18C14.2 18 18 14.2 18 9.5 18 4.8 14.2 1 9.5 1 4.8 1 1 4.8 1 9.5 1 14.2 4.8 18 9.5 18ZM9 12L10.1 12C10.1 11.2 10.3 10.5 10.8 10 11.7 9.2 12.2 8.7 12.2 7.8 12.2 6.2 11 5.1 9.5 5.1 8.6 5.1 7.7 5.5 7.2 6.2 6.8 6.7 6.6 7.2 6.6 8L7.7 8C7.7 7.5 7.8 7.3 7.9 7.1 8.2 6.7 8.9 6.2 9.5 6.2 10.3 6.2 11 6.9 11 7.8 11 8.2 10.8 8.5 10.2 9.1 9.6 9.7 9.4 10 9.4 10.3L9.3 10C9 10.1 9 10.2 9 10.3 9 10.6 9 11 9.5 11 9.8 11 10 11 10 11L11 11C11 11 11 11 11 11.1 11 11.3 11 11.4 10.9 11.5 10.7 11.7 10.5 11.9 10.2 12 10 12 9.7 12 9.5 12 9ZM8.5 15.4C8.5 15.7 8.3 15.9 8 15.9 7.7 15.9 7.5 15.7 7.5 15.4 7.5 15.1 7.7 14.9 8 14.9 8.3 14.9 8.5 15.1 8.5 15.4Z" />
//         </svg>
//       ),
//     },
//     { itemName: "Mes Information",
//     href: "https://www.sephora.fr/aide",
//       svg:( <svg
//           className="filter-icon color-red"
//           xmlns="http://www.w3.org/2000/svg"
//           width={20}
//           height={20}
//         >
//           <path
//             fill="#000"
//             d="M18.4 11.9l-.7-.5-.1-.2V8.8l.1-.2.7-.5c.7-.5.9-1.3.4-2l-1.3-2.2c-.4-.7-1.2-.9-1.9-.6a3 3 0 0 0-.8.4h-.2c-.6-.5-1.3-.9-2-1.2a.2.2 0 0 1-.2-.2l-.1-.9C12.2.6 11.6 0 10.8 0H8.1c-.7 0-1.2.5-1.4 1.2l-.1 1-.1.2c-.7.3-1.4.7-2 1.2-.1.1-.2.1-.2 0l-.9-.3-.5-.2c-.7 0-1.1.3-1.4.7L.2 6.1c-.4.7-.2 1.5.4 2l.7.5.1.2v2.4l-.1.2-.6.4c-.7.5-.9 1.3-.5 2L1.5 16c.4.7 1.2 1 1.9.6l.7-.3h.3c.6.5 1.3.9 2 1.2l.2.2.1.9c.1.7.7 1.3 1.4 1.3h2.7c.7 0 1.3-.5 1.4-1.2l.1-1 .1-.2c.7-.3 1.4-.7 2-1.2.1-.1.1-.1.2 0l.9.4c.7.3 1.4 0 1.8-.6l1.3-2.3c.6-.7.4-1.5-.2-1.9zm-.5 1.5l-1.2 2.2c-.2.4-.4.4-.8.3l-1.3-.6h-.2a7 7 0 0 1-2.8 1.6l-.1.2-.1 1.2v.3c0 .3-.2.4-.5.4H8.1c-.3 0-.5-.2-.5-.5L7.5 17c0-.1 0-.2-.2-.2-1-.3-1.9-.9-2.7-1.6h-.3l-1.3.6c-.3.1-.6.1-.7-.2L1 13.4c-.2-.3-.1-.5.2-.7l1.2-.8.1-.2a8.6 8.6 0 0 1 0-3.2l-.1-.2-1.2-1c-.3-.2-.3-.4-.1-.7l1.3-2.2c.1-.3.4-.4.7-.3l1.4.6.7-.5c.7-.5 1.4-.9 2.2-1.1l.2-.2.1-1.4c0-.3.2-.5.5-.5h2.6c.3 0 .5.2.5.5l.1 1.5.2.2c1 .3 1.9.9 2.7 1.6h.3l1.3-.6c.3-.1.6-.1.7.2l1.3 2.3c.2.3.1.5-.2.7l-1.2.8-.1.2c.2 1.1.2 2.1 0 3.2l.1.2 1.2.8c.3.2.4.5.2.8zM9.5 6a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4c.1-2.2-1.8-4-4-4zm0 7.1A3.1 3.1 0 0 1 6.4 10c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1z"
//           />
//         </svg>)
//     }
//   ];
  




export const images = [
  {
    id: 0,
    src: "/service-massi.JPG",
    title: "Shampooing, conditioning, and Scalp Treatments",
    sideDescription: false,
    imageTheme: { background: "bg-[rgb(48,38,39)]", text:"text-gray-200" },
    desc: "Experience the ultimate hair care with our rejuvenating shampooing, and scalp treatments. Our luxurious treatments leave your hair feeling revitalized and your scalp refreshed."
  },
  // public/service-massi-1.JPG public/service-massi-2.JPG
  {
    id: 0,
    src: "/service-massi-2.JPG",
    title: "Scalp Treatments",
    sideDescription: false,
    imageTheme: {background: "bg-[var(--massi-gray-2)]", text:"text-gray-500" },
    desc: "Massi gets to the needy greedy of treating the problems left for decades of unsolvable conditioning, and scalp treatments. Our luxurious treatments leave your hair feeling revitalized and your scalp refreshed."
  }, 
  {
    id: 11,
    src: "/service-11.jpeg",
    title: "Personalized  Wig Solutions for Your Unique Style",
    sideDescription: true,
    imageTheme: { background: "bg-[#f3d6c0]" },
    desc: "MAssi goes hand on herself to personalized finely selected wig strains with care, then customize it to your unique preferences. Whether you're looking for a natural-looking wig or a bold and fashion-forward style, our expert team will create the perfect wig for you."
  },
  {
    id: 1,
    src: "/services-init-0.jpeg",
    title: "Scalp Treatments ",
    sideDescription: true,
    imageTheme: { background: "bg-[var(---linkHoverColor)]", text: "text-rose-200" },
    desc: "Say goodbye to split ends and indulge in luxurious scalp treatments for healthier, more vibrant hair. Our expert solutions nourish your scalp and restore your hair's natural beauty."
  },
  {
    id: 1,
    src: "/Massi-Service-model.JPG",
    title: " Split Ends Solutions ",
    sideDescription: true,
    imageTheme: { background: "bg-[#b15b5b]", text: "text-rose-200" },
    desc: "Say goodbye to split ends and indulge in luxurious scalp treatments for healthier, more vibrant hair. Our expert solutions nourish your scalp and restore your hair's natural beauty."
  },
  {
    id: 2,
    src: "/services-init-1.jpeg",
    title: "Hair Coloring: Highlights, Lowlights, and More",
    sideDescription: true,
    imageTheme: { background: "bg-[var(--brave-color-brandBraveLigh)]", text: "text-green-300]" },
    desc: "Transform your look with our expert hair coloring services, including highlights, lowlights, and all-over color options. Whether you're seeking a subtle change or a bold new look, we have the perfect color for you."
  },
  {
    id: 2,
    src: "/massi-photo.JPG",
    title: "Hair Coloring: Highlights, Lowlights, and More",
    sideDescription: true,
    imageTheme: { background: "bg-[var(--massi-grey-1)]", text: "text-green-200" },
    desc: "Transform your look with our expert hair coloring services, including highlights, lowlights, and all-over color options. Whether you're seeking a subtle change or a bold new look, we have the perfect color for you."
  },
  {
    id: 3,
    src: "/service-1.jpeg",
    title: "Hair Styling: Regular and Formal Looks",
    sideDescription: true,
    imageTheme: { background: "bg-[var(---linkHoverColor)]", text: "text-gray-100" },
    desc: "Elevate your hairstyle with our professional styling services, from everyday looks to glamorous updos for special occasions. Our skilled stylists will create a look that perfectly complements your personality and lifestyle."
  },
  {
    id: 4,
    src: "/service-2.jpeg",
    title: "Chemical Treatments:",
    sideDescription: true,
    imageTheme: { background: "bg-[var(--themeColor)]", text: "text-[var(--oke-button-textColor: #FAF9F8)]" },
    desc: "Achieve your desired hair texture with our range of chemical treatments, including perms, relaxers, and keratin treatments. Our experienced stylists will customize a treatment plan to meet your unique needs and preferences."
  },
  {
    id: 9,
    src: "/rose-1.jpeg",
    title: "Perms, Relaxers and More",
    sideDescription: true,
    imageTheme: { background: "bg-[var(--themeColor)]", text: "text-[var(--oke-button-textColor: #FAF9F8)]" },
    desc: "Achieve your desired hair texture with our range of chemical treatments, including perms, relaxers, and keratin treatments. Our experienced stylists will customize a treatment plan to meet your unique needs and preferences."
  },
  {
    id: 5,
    src: "/service-8.jpeg",
    title: "Braids and More: Blowouts, Curling, Straightening, and Extensions",
    sideDescription: true,
    imageTheme: { text: "text-[text-gray-500]" },
    desc: "Treat yourself to flawless styling with our blowouts, curling, straightening, and extension services for picture-perfect hair. Whether you're looking for a sleek and polished look or beachy waves, our talented stylists have you covered."
  },
  {
    id: 6,
    src: "/service-3.jpeg",
    title: "Facials and Skin Care Treatments: Rejuvenate Your Skin",
    sideDescription: true,
    imageTheme:{
      background: "bg-white", text:"text-[rgb(134,86,64)]",
    },
    desc: "Enhance your natural beauty with our comprehensive range of facials and skin care treatments for a radiant complexion. Our personalized treatments target specific skin concerns to leave your skin looking and feeling refreshed and revitalized."
  },
  {
    id: 7,
    src: "/custom-wig.jpeg",
    title: "Custom Wigs: Personalized Solutions for Your Unique Style",
    sideDescription: true,
    imageTheme: { background: "bg-[#f3d6c0]" },
    desc: "Explore the world of personalized hair solutions with our custom wig services, tailored to your unique style and preferences. Whether you're looking for a natural-looking wig or a bold and fashion-forward style, our expert team will create the perfect wig for you."
  },
 
];