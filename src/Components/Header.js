import React, { Component } from "react";
import Languages from "./Languages";

class Header extends Component {
  render() {
    if (this.props.data) {
      var lang = this.props.lang;
      var iAm = this.props.data.iAm;
      var shortDescription = this.props.data.shortDescription;
      var name = this.props.data.name;
      //var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      //var city = this.props.data.address.city;
      var home = this.props.data.navButtons.home;
      var about = this.props.data.navButtons.about;
      var resume = this.props.data.navButtons.resume;
      var works = this.props.data.navButtons.works;
      var testimonials = this.props.data.navButtons.testimonials;
      var contact = this.props.data.navButtons.contact;
      var networks = this.props.data.social.map(function(network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>
          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                {home}
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                {about}
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                {resume}
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                {works}
              </a>
            </li>
            {/* <li>
              <a className="smoothscroll" href="#testimonials">
                {testimonials}
              </a>
            </li> */}
            <li>
              <a className="smoothscroll" href="#contact">
                {contact}
              </a>
            </li>
            <li className="current">
              <Languages
                lang={lang}
                onChangeLanguage={this.props.onChangeLanguage}
              />
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">
              {iAm} {name}.
            </h1>
            <h3>
              <span>{shortDescription}</span>. {description}.
            </h3>
            <hr />
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
