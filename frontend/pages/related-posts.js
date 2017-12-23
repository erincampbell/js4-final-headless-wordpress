import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import { Config } from "../config.js";
import Layout from './src/js/components/layout';

class RelatedPosts extends Component {

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
            <div>
              <h2>Related Posts</h2>
              {posts}
              <h2>Related Pages</h2>
              {pages}
            </div>

          </Layout>
      );
    }
}

export default RelatedPosts;
