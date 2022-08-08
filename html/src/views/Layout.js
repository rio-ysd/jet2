import React from 'react'
import { Link } from 'react-router-dom';

class Layout extends React.Component {
  render() {
    return <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <b>Devenue</b>
          </Link>
          <span role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </span>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/tweets" className="navbar-item">
              Tweets
            </Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <span className="navbar-link">
                More
              </span>
              <div className="navbar-dropdown">
                <Link to="/tweets" className="navbar-item">
                  About
                </Link>
                <Link to="/tweets" className="navbar-item">
                  Contact
                </Link>
                <hr className="navbar-divider" />
                <Link to="/tweets" className="navbar-item">
                  Report an issue
                </Link>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/tweets" className="button is-primary">
                  <strong>Sign up</strong>
                </Link>
                <Link to="/tweets" className="button is-light">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="container py-6">
        {this.props.children}
      </div>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Jet2</strong> by <a href="https://jgthms.com">Devenue</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </p>
        </div>
      </footer>
    </>
  }
}

export default Layout