import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import { Config } from "../../../../../config.js";

const linkStyle = {
    marginRight: 15
};

class Menu extends Component {
    constructor() {
        super();
        this.state = {
            menu: []
        };
    }
    componentDidMount() {
        const menuItemsURL = `${
            Config.apiUrl
        }/wp-json/menus/v1/menus/header-menu`;
        fetch(menuItemsURL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    menu: res.items
                });
            });
    }

    getSlug(url) {
        const parts = url.split("/");
        return parts.length > 2 ? parts[parts.length - 2] : "";
    }
    render() {
        const menuItems = this.state.menu.map((item, index) => {
            if (item.object === "custom") {
                return (
                    <Link href={item.url} key={item.ID}>
                        <a style={linkStyle}>{item.title}</a>
                    </Link>
                );
            }
            const slug = this.getSlug(item.url);
            const actualPage = item.object === "category" ? "category" : "post";
            return (
                <Link
                    as={`/${item.object}/${slug}`}
                    href={`/${actualPage}?slug=${slug}&apiRoute=${item.object}`}
                    key={item.ID}
                >
                    <a style={linkStyle}>{item.title}</a>
                </Link>
            );
        });
        return (
          <div className="menu">
              <Link href="/">
                  <a style={linkStyle}>Home</a>
              </Link>
              {menuItems}

              <style jsx global>{`
                .menu a {
                  width: 100%;
                  margin: 0.25em 0;
                  border-bottom: 1px solid #dedede;
                  text-decoration: none;
                  display: block;
                  padding: 0.25em;
                }
              `}</style>
          </div>
        );
    }
}

export default Menu;
