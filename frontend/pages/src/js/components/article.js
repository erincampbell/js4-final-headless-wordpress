import React from 'react';

class Article extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const listTerms = typeof this.props.tags === 'string' ? this.props.tags : this.props.tags.map(tag => tag.name);
    return (
      <article key={this.props.id}>
        <div className="entry-thumbnail"><img src={this.props.image} /></div>
        <div className="entry-body">
        <div className="entry-meta">
          <span>Allison Worrall</span> | <span>8 hours ago</span>
        </div>
          <header className="entry-header">
            <h2 className="entry-title">
              <a href={this.props.slug}>{this.props.title}</a>
            </h2>
          </header>
          <footer class="entry-footer">
            <span className="cat-links"> {listTerms}</span>
          </footer>
        </div>

        <style jsx>{`
          article {
            clear:both;
            display: inline-block;
            margin: 0.5em 0;
          }

          .entry-thumbnail {
            display: block;
            position: relative;
            float: left;
            width: 150px;
            height: 100px;
            margin: 0 15px 0 0;
            overflow: hidden;
            background: #d8dade; }

          .entry-body {
            float:left;
          }

          .entry-meta {
            color: #979da7; }

          .entry-title {
            font-size: 20px;
            font-weight: 600;
            line-height: 24px;
            margin: 5px 0; }
          .entry-title a{
            color: #3c475b;
            text-underline: none;
          }

          .cat-links {
            display: inline-block;
            margin-right: 5px; }
          .cat-links a {
              padding: 3px 10px;
              margin-bottom: 8px;
              display: inline-block;
              color: #3c475b;
              background: #eaebed;
              border-radius: 2px; }
        `}</style>
      </article>
    );
  }
}

export default Article;
