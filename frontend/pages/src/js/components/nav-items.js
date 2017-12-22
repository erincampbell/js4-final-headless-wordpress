
  export const navItems = () => {

     const desktopNavItems = [
        {
            id: 'nav-buy-residential',
            text: 'Buy',
            href: '/sale/residential/'
        },
        {
            id: 'nav-new-homes',
            text: 'New Homes',
            href: '/new-homes/residential/'
        },
        {
            id: 'nav-category-rent',
            text: 'Rent',
            href: '/rent/residential/',
            subItems: [
              {
                  id:'nav-rent-residential',
                  text:'Rent',
                  href:'/rent/residential/'
                },
                {
                  id:'nav-share-residential',
                  text:'Share',
                  href:'/share/residential/'
                }
            ]
          },
        {
          id:'nav-category-commercial',
            text:'Commercial',
            href:'/rent/commercial/',
            subItems: [
              {
                id:'nav-lease-commercial',
                  text:'For Lease',
                  href:'/rent/commercial/'
                },
                {
                  id:'nav-sale-commercial',
                  text:'For Sale',
                  href:'/sale/commercial/'
                },
                {
                  id:'nav-sale-business',
                  text:'Business',
                  href:'/sale/business/'
                }
            ]
        },
        {
            id:'nav-agents',
            text:'Agents',
            href:'/agents/',
            hasNewTag:true
        },
        {
          id:'nav-research',
            text:'Research',
            href:'/ah/research/property-and-past-sales',
            subItems: [
              {
                id: 'nav-auction-results',
                text: 'Auction Results',
                href: '/auction-results/'
              },
              {
                id: 'nav-property-past-sales',
                text: 'Property & Past Sales',
                href: '/ah/research/property-and-past-sales',
              },
              {
                id:'nav-property-report',
                text:'ACT Property Report',
                href:'/ah/research/property-report'
              },
              {
                id:'nav-glossary',
                text:'Glossary',
                href:'/ah/research/glossary'
              },
              {
                id:'nav-calculators',
                text:'Calculators',
                href:'/ah/research/calculators'
              }
            ]
        },
        {
            id:'nav-news-category',
            text:'News',
            href:'/news/',
            isSelected:true,
            subItems: [
               {
                  id: 'nav-news-canberra',
                  text: 'Canberra',
                  href: '/news/act/'
                },
                {
                  id: 'nav-news-latest',
                  text: 'News',
                  href: '/news/'
                },
                {
                  id: 'nav-news-advice',
                  text: 'Advice',
                  href: '/advice/'
                },
                {
                  id: 'nav-news-living',
                  text: 'Living',
                  href: '/living/'
                },
                {
                  id: 'nav-news-market',
                  text: 'Money & Markets',
                  href: '/money-markets/'
                }
            ]
        }
      ];

      const myAllhomesMenuItems = [
        {
          id:'my-watchlist',
          text:'Watch list',
          href:'/ah/myallhomes/watch-list/view'
        },
        {
          id:'my-trip-plan',
          text:'Trip plan',
          href:'/ah/myallhomes/trip-plan/view'
        },
        {
          id:'my-property-alerts',
          text:'Property alerts',
          href:'/ah/myallhomes/propertyalerts/manage'
        },
        {
          id:'my-allclassifieds',
          text:'allclassifieds',
          href:'//www.allclassifieds.com.au',
          target:'_blank'
        }
      ];

      const mobileNavItems = {
        group1: [
          {
            id:'mob-research',
            text:'Research',
            href:'/ah/research/',
          },
          {
            id:'mob-commercial',
            text:'Commercial',
            href:'/sale/commercial/',
          },
          {
            id:'mob-agents',
            text:'Agents',
            href:'/agents/',
            hasNewTag:true,
          },
          {
            id:'mob-news',
            text:'News',
            href:'/front-page/',
          }
        ],
      group2: [
          {
            id:'mob-watch-lists',
            text:'Watch lists',
            href:'/ah/myallhomes/watch-list/view',
            icon:'watchlist'
          },
          {
            id:'mob-trip-planner',
            text:'Trip Planner',
            href:'/ah/myallhomes/trip-plan/view',
            icon:'map-with-pin'
          },
          {
            id:'mob-property-alerts',
            text:'Property alerts',
            href:'/ah/myallhomes/propertyalerts/manage',
            icon:'notification'
          },
          {
            id:'mob-login',
            text:'Log in',
            href:'/ah/myallhomes/secure/welcome/view',
            icon:'profile'
          }
      ]
    };

      const fullArray = {
        desktopNavItems: desktopNavItems,
        myAllhomesMenuItems: myAllhomesMenuItems,
        mobileNavItems: mobileNavItems,
        homepageLink: '/',
        oldHomepageLink: '/',
        searchProps: {
          searchAutocompleteUrlBase: '//www.allhomes.com.au/svc/locality/searchallbyname/',
          searchUrlBase: '/ah/search/',
          context: 'residential',
          defaultOption: 'developments-residential',
          quickSearchCookieName: 'quickSearch',
          criteriaSearchCookieName: '_ahasco_%context_dev'
        },
        gaEventStyle: 'default',
        myAhLandingLink: '/ah/myallhomes/secure/welcome/view',
        myAhSignOutLink: '/ah/myallhomes/signout?url=www.allhomes.com.au',
        showMediaBanner: true,
        theme: "allhomes"
      };

      return fullArray;
    };


  export const allhomesFooter = {
      'homepageLink':'/',
      'toolbarLinks': {
        navItems: [
          {
            href: "/ah/help",
            text: "Help"
          },
          {
            href: "/ah/info/contact-us/view",
            text: "Contact"
          },
          {
            href: "//domain.com.au/group/",
            text: "About"
          },
          {
            href: "/ah/mobile",
            text: "Mobile"
          },
          {
            href: "/ah/act/advertise",
            text: "Place an ad"
          }
        ],
        social: [
          {
            href: "//www.facebook.com/allhomes/",
            icon: "facebook",
            text: "Facebook"
          },
          {
            href: "//www.twitter.com/allhomescomau/",
            icon: "twitter",
            text: "Twitter"
          }
        ]
      },
      'quickLinks': [
        {
          heading: "States",
          items: [
            {
              href: "/ah/act/sale-residential",
              text: "ACT"
            },
            {
              href: "/ah/nsw/sale-residential",
              text: "NSW"
            },
            {
              href: "/ah/nt/sale-residential",
              text: "Northern Territory"
            },
            {
              href: "/ah/qld/sale-residential",
              text: "Queensland"
            },
            {
              href: "/ah/sa/sale-residential",
              text: "South Australia"
            },
            {
              href: "/ah/tas/sale-residential",
              text: "Tasmania"
            },
            {
              href: "/ah/vic/sale-residential",
              text: "Victoria"
            },
            {
              href: "/ah/wa/sale-residential",
              text: "Western Australia"
            }
          ]
        },
        {
          heading: "Capital Cities",
          items: [
            {
              href: "/ah/act/sale-residential",
              text: "Canberra real estate"
            },
            {
              href: "/ah/nsw/sale-residential/inner-sydney/1027710",
              text: "Sydney real estate"
            },
            {
              href: "/ah/nt/sale-residential/darwin/1071110",
              text: "Darwin real estate"
            },
            {
              href: "/ah/nt/sale-residential/darwin/1071110",
              text: "Darwin real estate"
            },
            {
              href: "/ah/qld/sale-residential/inner-brisbane/1027510",
              text: "Brisbane real estate"
            },
            {
              href: "/ah/sa/sale-residential/eastern-adelaide/1023810",
              text: "Adelaide real estate"
            },
            {
              href: "/ah/tas/sale-residential/greater-hobart/1058710",
              text: "Hobart real estate"
            },
            {
              href: "/ah/vic/sale-residential/inner-melbourne/1027610",
              text: "Melbourne real estate"
            },
            {
              href: "/ah/wa/sale-residential/perth-and-western-suburbs/1072110",
              text: "Perth real estate"
            }
          ]
        },
        {
          heading: "Popular Areas",
          items: [
            {
              href: "/ah/act/sale-residential/kingston/121488910",
              text: "Kingston, ACT"
            },
            {
              href: "/ah/act/sale-residential/belconnen/121477710",
              text: "Belconnen, ACT"
            },
            {
              href: "/ah/act/sale-residential/harrison/121474810",
              text: "Harrison, ACT"
            },
            {
              href: "/ah/act/sale-residential/deakin/121478810",
              text: "Deakin, ACT"
            },
            {
              href: "/ah/act/sale-residential/kambah/121477510",
              text: "Kambah, ACT"
            },
            {
              href: "/ah/act/sale-residential/yarralumla/121469210",
              text: "Yarralumla, ACT"
            },
            {
              href: "/ah/act/sale-residential/oconnor/121479210",
              text: "O'Connor, ACT"
            },
            {
              href: "/ah/act/sale-residential/kaleen/121471110",
              text: "Kaleen, ACT"
            }
          ]
        },
        {
          heading: "Allhomes",
          items: [
            {
              href: "/ah/nsw/research/welcome/view",
              text: "Past Sales Data"
            },
            {
              href: "/ah/country/developments-residential",
              text: "New Homes"
            },
            {
              href: "/ah/act/agents",
              text: "Find an Agent"
            }
          ]
        },
        {
          heading: "More",
          items: [
            {
              href: "//oneflare.com.au",
              text: "Oneflare"
            },
            {
              href: "/ah/ah0120",
              text: "Privacy Policy"
            },
            {
              href: "/ah/ah0011",
              text: "Terms & Conditions"
            },
            {
              href: "/ah/ah0130",
              text: "Sitemap"
            }
          ]
        }
      ],
      'copyrightInfo': {
        'domainGroupLink':'//www.domain.com.au/group/',
        'copyrightLink':'/ah/act/info/site-map/view'
      }
    };
