import React, { Component } from 'react';
import Link from 'next/link';
import { Config } from '../../../../config.js';
import Menu from './right-col/menu';

class RightCol extends Component {
  render() {

    return (
      <div className="secondary">
        <Menu />

        <style jsx>{`
          .secondary {
            width: 30%;
            float: right;
            display: inline-block;
          }
        `}</style>
      </div>
    );
  }
}

export default RightCol;
