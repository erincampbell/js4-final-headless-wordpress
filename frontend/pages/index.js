import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { themeVariables } from '@domain-group/fe-brary';
import { themeRoot }  from '@domain-group/fe-co-theme';
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import { Config } from "../config.js";
import Layout from './src/js/components/layout';
import Article from './src/js/components/article';
import RightCol from './src/js/components/right-col';
import RelatedPosts from './related-posts';
import { getFeed, handleFeed } from './src/js/components/newsFeed';

class AllhomesNews extends Component {

  static async getInitialProps(context) {
    const pageRes = await fetch(
      `${Config.apiUrl}/wp-json/postlight/v1/page?slug=allhomes-page-content`
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
    console.log(page);
    return { page, posts, pages };
  }

  constructor(props) {
    super(props)

    this.state = {
      loadingFeed: false,
      articleList: [],
      fullList: [],
    }
  }

  componentDidMount() {
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
            articleList: handleFeed(results),
            fullList: results,
          })
        })
        .catch(err => console.log('Error with Feed', err))
    });
  }

    render() {
      const posts = this.props.posts.map((post, index) => {
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
      });

      return (
          <Layout>
            <div className="content">
              <header className="App-header">
                <h1 className="App-title">Latest News</h1>
              </header>
            </div>
            <div className="primary">
              <div className="article-list">
                {this.state.articleList.map(article => {
                  return <Article {...article} />
                })}

              </div>

              <style jsx>{`
                @font-face {
                  font-family: 'Source Sans Pro';
                  font-style: normal;
                  font-weight: normal;
                  src: local('Source Sans Pro'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v9/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format('woff');
                }

                .primary {
                  width: 66%;
                  display: inline-block;
                }
              `}</style>

            </div>

            <RightCol />

          </Layout>
      );
    }
}

export default AllhomesNews;
