const headerNavItems = () => {
  const desktopNavItems =
    [
      {
        id: 'nav-buy-residential',
        text: 'Buy',
        href: '/sale/residential/',
      },
      {
        id: 'nav-new-homes',
        text: 'New Homes',
        href: '/new-homes/residential/',
      },
      {
        id: 'nav-category-rent',
        text: 'Rent',
        href: '/rent/residential/',
        subItems: [
          {
            id: 'nav-rent-residential',
            text: 'Rent',
            href: '/rent/residential/',
          },
          {
            id: 'nav-share-residential',
            text: 'Share',
            href: '/share/residential/',
          },
        ],
      },
      {
        id: 'nav-category-commercial',
        text: 'Commercial',
        href: '/rent/commercial/',
        subItems: [
          {
            id: 'nav-lease-commercial',
            text: 'For Lease',
            href: '/rent/commercial/',
          },
          {
            id: 'nav-sale-commercial',
            text: 'For Sale',
            href: '/sale/commercial/',
          },
          {
            id: 'nav-sale-business',
            text: 'Business',
            href: '/sale/business/',
          },
        ],
      },
      {
        id: 'nav-agents',
        text: 'Agents',
        href: '/agents/',
        hasNewTag: true,
      },
      {
        id: 'nav-research',
        text: 'Research',
        href: '/ah/research/property-and-past-sales',
        subItems: [
          {
            id: 'nav-auction-results',
            text: 'Auction Results',
            href: '/auction-results/',
          },
          {
            id: 'nav-property-past-sales',
            text: 'Property & Past Sales',
            href: '/ah/research/property-and-past-sales',
          },
          {
            id: 'nav-property-report',
            text: 'ACT Property Report',
            href: '/ah/research/property-report',
          },
          {
            id: 'nav-glossary',
            text: 'Glossary',
            href: '/ah/research/glossary',
          },
          {
            id: 'nav-calculators',
            text: 'Calculators',
            href: '/ah/research/calculators',
          },
        ],
      },
      {
        id: 'nav-news-category',
        text: 'News',
        href: '/news/',
        isSelected: true,
        subItems: [
          {
            id: 'nav-news-canberra',
            text: 'Canberra',
            href: '/news/act/',
          },
          {
            id: 'nav-news-latest',
            text: 'News',
            href: '/news/',
          },
          {
            id: 'nav-news-advice',
            text: 'Advice',
            href: '/advice/',
          },
          {
            id: 'nav-news-living',
            text: 'Living',
            href: '/living/',
          },
          {
            id: 'nav-news-market',
            text: 'Money & Markets',
            href: '/money-markets/',
          },
        ],
      },
    ];

  const myAllhomesMenuItems =
    [
      {
        id: 'my-watchlist',
        text: 'Watch list',
        href: '/ah/myallhomes/watch-list/view',
      },
      {
        id: 'my-trip-plan',
        text: 'Trip plan',
        href: '/ah/myallhomes/trip-plan/view',
      },
      {
        id: 'my-property-alerts',
        text: 'Property alerts',
        href: '/ah/myallhomes/propertyalerts/manage',
      },
      {
        id: 'my-allclassifieds',
        text: 'allclassifieds',
        href: '//www.allclassifieds.com.au',
        target: '_blank',
      },
    ];

  const mobileNavItems =
    {
      group1:
      [
        {
          id: 'mob-research',
          text: 'Research',
          href: '/ah/research/',
        },
        {
          id: 'mob-commercial',
          text: 'Commercial',
          href: '/sale/commercial/',
        },
        {
          id: 'mob-agents',
          text: 'Agents',
          href: '/agents/',
          hasNewTag: true,
        },
        {
          id: 'mob-news',
          text: 'News',
          href: '/front-page/',
        },
      ],
      group2:
      [
        {
          id: 'mob-watch-lists',
          text: 'Watch lists',
          href: '/ah/myallhomes/watch-list/view',
          icon: 'watchlist',
        },
        {
          id: 'mob-trip-planner',
          text: 'Trip Planner',
          href: '/ah/myallhomes/trip-plan/view',
          icon: 'map-with-pin',
        },
        {
          id: 'mob-property-alerts',
          text: 'Property alerts',
          href: '/ah/myallhomes/propertyalerts/manage',
          icon: 'notification',
        },
        {
          id: 'mob-login',
          text: 'Log in',
          href: '/ah/myallhomes/secure/welcome/view',
          icon: 'profile',
        },
      ],
    };

  const fullArray = {
    desktopNavItems,
    myAllhomesMenuItems,
    mobileNavItems,
    homepageLink: '/',
    oldHomepageLink: '/',
    searchProps:
    {
      searchAutocompleteUrlBase: '//www.allhomes.com.au/svc/locality/searchallbyname/',
      searchUrlBase: '/ah/search/',
      context: 'residential',
      defaultOption: 'developments-residential',
      quickSearchCookieName: 'quickSearch',
      criteriaSearchCookieName: '_ahasco_%context_dev',
    },
    gaEventStyle: 'default',
    myAhLandingLink: '/ah/myallhomes/secure/welcome/view',
    myAhSignOutLink: '/ah/myallhomes/signout?url=www.allhomes.com.au',
    showMediaBanner: true,
    theme: 'allhomes',
  };

  return fullArray;
};

export default headerNavItems;
