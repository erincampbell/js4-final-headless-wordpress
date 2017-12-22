import React, { Component } from "react";
import Head from "next/head";
import { Config } from "../../../../config.js";
import { navItems } from './nav-items';
import AllhomesHeader from '@domain-group/fe-co-allhomes-header';

class Header extends Component {
    render() {
      return (
        <div>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta charSet="utf-8" />
            <link rel="stylesheet" href="https://renderizr-assets.domainstatic.com.au/@domain-group/fe-co-allhomes-header/@domain-group_fe-co-allhomes-header_8.1.6_3.0.1_client-allhomes.css" />
            <link rel="stylesheet" href='https://renderizr-assets.domainstatic.com.au/@domain-group/fe-co-allhomes-footer/@domain-group_fe-co-allhomes-footer_2.0.0_3.0.1_client-allhomes.css' />
            <title>
              Real Estate and Property Market News
            </title>
          </Head>
          <AllhomesHeader {...navItems()} />
          <style jsx global>{`
            body {
              font-family: "Source Sans Pro", sans-serif;
              color: #515b6e;
              margin: 0;
              padding: 0;
            }
          `}</style>
        </div>
      );
    }
}

export default Header;
