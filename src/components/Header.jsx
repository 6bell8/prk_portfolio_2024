import React from 'react';
import Inner from './Inner';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header id="header">
        <h1 id="logo">
          <Link to="/">
            <img className="bg01" src="../assets/images/pjs01.svg" alt="" />
          </Link>
        </h1>
        <nav id="gnb">
          <div className="mainList">
            <ul className="list">
              <li>
                <Link to="/about" className="depth01">
                  about.js
                </Link>
              </li>
              <li>
                <Link to="/readme" className="depth01">
                  ReadMe
                </Link>
              </li>
              <li>
                <Link to="/repositories" className="depth01">
                  Repositories
                </Link>
              </li>
              <li>
                <Link to="/making" className="depth01">
                  Making
                </Link>
              </li>
              <li>
                <Link to="/contact" className="depth01">
                  ContactMe
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <button className="btnAll">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
      <Inner />
    </>
  );
};

export default Header;
