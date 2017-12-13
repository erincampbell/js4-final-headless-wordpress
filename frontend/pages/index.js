import React from 'react';
// import PropTypes from 'prop-types';
// import Layout from './src/js/components/Layout.js';
import AllhomesHeader from '@domain-group/fe-co-allhomes-header';
// import allhomesFooter from '@domain-group/fe-co-allhomes-footer';
// import { themeVariables } from '@domain-group/fe-brary';
import { themeRoot } from '@domain-group/fe-co-theme';
import fetch from 'isomorphic-unfetch';
// import Link from 'next/link';
import { Config } from './../config';
import { headerNavItems } from './src/js/components/nav-items';


class AllhomesNews extends React.Component {
  static async getInitialProps() {
    const pageRes = await fetch(
      `${Config.apiUrl}/wp-json/postlight/v1/page?slug=welcome`,
    );
    const page = await pageRes.json();
    const postsRes = await fetch(
      `${Config.apiUrl}/wp-json/wp/v2/posts?_embed`,
    );
    const posts = await postsRes.json();
    const pagesRes = await fetch(
      `${Config.apiUrl}/wp-json/wp/v2/pages?_embed`,
    );
    const pages = await pagesRes.json();
    return { page, posts, pages };
  }


  render() {
    return (
      <AllhomesHeader {...headerNavItems} />
    );
  }
}

export const BaseAllhomesNews = AllhomesNews;
export default themeRoot(AllhomesNews, 'domain');
