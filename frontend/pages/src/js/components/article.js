import React from 'react';

class Article extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const listTerms = typeof this.props.tags === 'string' ? this.props.tags : this.props.tags.map(tag => tag.name);
    return (
      <article key={this.props.id}>
        <div className="thumb"><img src={this.props.image} /></div>
        <h2>
          <a href={this.props.slug}>{this.props.title}</a>
          <span> {listTerms}</span>
        </h2>

      </article>
    );
  }
}

export default Article;
