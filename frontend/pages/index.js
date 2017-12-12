import Layout from "./src/js/components/Layout.js";
import AllhomesHeader from '@domain-group/fe-co-allhomes-header';
//import allhomesFooter from '@domain-group/fe-co-allhomes-footer';
import React from "react";
import { themeVariables } from '@domain-group/fe-brary';
import { themeRoot }  from '@domain-group/fe-co-theme';
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import { Config } from "../config.js";


class AllhomesNews extends React.Component {
    static async getInitialProps(context) {
        const pageRes = await fetch(
            `${Config.apiUrl}/wp-json/postlight/v1/page?slug=welcome`
        );
        const page = await pageRes.json();
        const postsRes = await fetch(
            `${Config.apiUrl}/wp-json/wp/v2/posts?_embed`
        );
        const posts = await postsRes.json();
        const pagesRes = await fetch(
            `${Config.apiUrl}/wp-json/wp/v2/pages?_embed`
        );
        const pages = await pagesRes.json();
        return { page, posts, pages };
    }

  test = () => {

     const desktopNavItems = [
        {
            'id':'nav-buy-residential',
            'text':'Buy',
            'href':'/sale/residential/'
        },
        {
            'id':'nav-new-homes',
            'text':'New Homes',
            'href':'/new-homes/residential/'
        },
        {
            'id':'nav-category-rent',
            'text':'Rent',
            'href':'/rent/residential/',
            'subItems':[
              {
                  'id':'nav-rent-residential',
                  'text':'Rent',
                  'href':'/rent/residential/'
                },
                {
                  'id':'nav-share-residential',
                  'text':'Share',
                  'href':'/share/residential/'
                }
            ]
          },
        {
          'id':'nav-category-commercial',
            'text':'Commercial',
            'href':'/rent/commercial/',
            'subItems': [
              {
                'id':'nav-lease-commercial',
                  'text':'For Lease',
                  'href':'/rent/commercial/'
                },
                {
                  'id':'nav-sale-commercial',
                  'text':'For Sale',
                  'href':'/sale/commercial/'
                },
                {
                  'id':'nav-sale-business',
                  'text':'Business',
                  'href':'/sale/business/'
                }
            ]
        },
        {
            'id':'nav-agents',
            'text':'Agents',
            'href':'/agents/',
            'hasNewTag':true
        },
        {
          'id':'nav-research',
            'text':'Research',
            'href':'/ah/research/property-and-past-sales',
            'subItems': [
              {
                  'id':'nav-auction-results',
                  'text':'Auction Results',
                  'href':'/auction-results/'
              },
              {
                  'id':'nav-property-past-sales',
                  'text':'Property & Past Sales',
                  'href':'/ah/research/property-and-past-sales'
                },
                {
                  'id':'nav-property-report',
                  'text':'ACT Property Report',
                  'href':'/ah/research/property-report'
                },
                {
                  'id':'nav-glossary',
                  'text':'Glossary',
                  'href':'/ah/research/glossary'
                },
                {
                  'id':'nav-calculators',
                  'text':'Calculators',
                  'href':'/ah/research/calculators'
                }
            ]
        },
        {
            'id':'nav-news-category',
            'text':'News',
            'href':'/news/',
            'isSelected':true,
            'subItems': [
               {
                  'id': 'nav-news-canberra',
                  'text': 'Canberra',
                  'href': '/news/act/'
                },
                {
                  'id': 'nav-news-latest',
                  'text': 'News',
                  'href': '/news/'
                },
                {
                  'id': 'nav-news-advice',
                  'text': 'Advice',
                  'href': '/advice/'
                },
                {
                  'id': 'nav-news-living',
                  'text': 'Living',
                  'href': '/living/'
                },
                {
                  'id': 'nav-news-market',
                  'text': 'Money & Markets',
                  'href': '/money-markets/'
                }
            ]
        }
      ];

      const myAllhomesMenuItems = [
        {
          'id':'my-watchlist',
          'text':'Watch list',
          'href':'/ah/myallhomes/watch-list/view'
        },
        {
          'id':'my-trip-plan',
          'text':'Trip plan',
          'href':'/ah/myallhomes/trip-plan/view'
        },
        {
          'id':'my-property-alerts',
          'text':'Property alerts',
          'href':'/ah/myallhomes/propertyalerts/manage'
        },
        {
          'id':'my-allclassifieds',
          'text':'allclassifieds',
          'href':'//www.allclassifieds.com.au',
          'target':'_blank'
        }
      ];

      const mobileNavItems = {
        group1: [
            {
                'id':'mob-research',
                'text':'Research',
                'href':'/ah/research/'
            },
            {
                'id':'mob-commercial',
                'text':'Commercial',
                'href':'/sale/commercial/'
            },
            {
                'id':'mob-agents',
                'text':'Agents',
                'href':'/agents/',
                'hasNewTag':true
            },
            {
                'id':'mob-news',
                'text':'News',
                'href':'/front-page/'
            },
          ],
          group2: [
            {
                'id':'mob-watch-lists',
                'text':'Watch lists',
                'href':'/ah/myallhomes/watch-list/view',
                'icon':'watchlist'
            },
            {
                'id':'mob-trip-planner',
                'text':'Trip Planner',
                'href':'/ah/myallhomes/trip-plan/view',
                'icon':'map-with-pin'
            },
            {
                'id':'mob-property-alerts',
                'text':'Property alerts',
                'href':'/ah/myallhomes/propertyalerts/manage',
                'icon':'notification'
            },
            {
                'id':'mob-login',
                'text':'Log in',
                'href':'/ah/myallhomes/secure/welcome/view',
                'icon':'profile'
            }
        ]
      };

      const fullArray = {
        'desktopNavItems': desktopNavItems,
        'myAllhomesMenuItems': myAllhomesMenuItems,
        'mobileNavItems': mobileNavItems,
        'homepageLink': '/',
        'oldHomepageLink' :'/',
        'searchProps': {
          'searchAutocompleteUrlBase': '//www.allhomes.com.au/svc/locality/searchallbyname/',
          'searchUrlBase': '/ah/search/',
          'context': 'residential',
          'defaultOption': 'developments-residential',
          'quickSearchCookieName': 'quickSearch',
          'criteriaSearchCookieName': '_ahasco_%context_dev'
        },
        'gaEventStyle': 'default',
        'myAhLandingLink': '/ah/myallhomes/secure/welcome/view',
        'myAhSignOutLink': '/ah/myallhomes/signout?url=www.allhomes.com.au',
        'showMediaBanner': true,
        'theme': "allhomes"
      };

      return fullArray;
    }

    render() {
    /*    const posts = this.props.posts.map((post, index) => {
            return (
                <ul key={index}>
                    <li>
                        <Link
                            as={`/post/${post.slug}`}
                            href={`/post?slug=${post.slug}&apiRoute=post`}
                        >
                            <a>{post.title.rendered}</a>
                        </Link>
                    </li>
                </ul>
            );
        });
        const pages = this.props.pages.map((page, index) => {
            return (
                <ul key={index}>
                    <li>
                        <Link
                            as={`/page/${page.slug}`}
                            href={`/post?slug=${page.slug}&apiRoute=page`}
                        >
                            <a>{page.title.rendered}</a>
                        </Link>
                    </li>
                </ul>
            );
        }); */
        const allhomesFooter = {
    			'homepageLink':'/',
    			'toolbarLinks':'test', //footerToolbarLinks,
    			'quickLinks': 'test2', //footerQuickLinks,
    			'copyrightInfo': [{
    				'domainGroupLink':'//www.domain.com.au/group/',
    				'copyrightLink':'/ah/act/info/site-map/view'
    			}]
    		};
        return (
            <Layout>
              <AllhomesHeader {... this.test()} />

            </Layout>
        );
    }
}

export const BaseAllhomesNews = AllhomesNews;
export default themeRoot(AllhomesNews, 'allhomes');
//export default themeRoot(AllhomesNews, 'domain');
