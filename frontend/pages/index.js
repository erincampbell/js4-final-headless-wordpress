import React from 'react';
// import PropTypes from 'prop-types';
// import Layout from './src/js/components/Layout.js';
import AllhomesHeader from '@domain-group/fe-co-allhomes-header';
//import allhomesFooter from '@domain-group/fe-co-allhomes-footer';
import React from "react";
import { themeVariables } from '@domain-group/fe-brary';
import { themeRoot }  from '@domain-group/fe-co-theme';
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import { Config } from "../config.js";
import Article from './src/js/components/article';
import { getFeed, handleFeed } from './src/js/components/newsFeed';
import { navItems } from './src/js/components/nav-items'
//import './App.css';


class AllhomesNews extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loadingFeed: false,
      articleList: [],
      fullList: [],
    }
  }

  componentDidMount(){
    this.compileArticles();
  }

  compileArticles = () => {
    return new Promise((resolve, reject) => {
      this.setState({
        loadingFeed: true,
      })
       getFeed()
        .then(results => {
          setTimeout(resolve, 1000, handleFeed(results))
          this.setState({
            loadingFeed: false,
            articleList: results,
            fullList: results,
          })
          console.log(results);
        })
        .catch(err => console.log('Error with Feed', err))
    });

  }

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

        return (
            <Layout>
              <header className="App-header">
                <h1 className="App-title">Allhomes</h1>
              </header>
              <div className="content">
                {console.log(this.state.articleList)}
                <Article {...this.state.articleList} />
              </div>
              <AllhomesHeader {...navItems()} />

            </Layout>
        );
    }

}

export const BaseAllhomesNews = AllhomesNews;
export default themeRoot(AllhomesNews, 'domain');
