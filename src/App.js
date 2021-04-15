import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar',
      lang: 'En',
      resumeDataEn: {},
      resumeDataRo: {},
      resumeDataNo: {},
      resumeDataJa: {},
    };
    this.handleChangeLanguage = this.handleChangeLanguage.bind(this);

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);
  }

  handleChangeLanguage(e) {
    this.setState({ lang: e.target.value });
  }

  getResumeDataEn() {
    $.ajax({
      url: '/resumeDataEn.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ resumeDataEn: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  getResumeDataRo() {
    $.ajax({
      url: '/resumeDataRo.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ resumeDataRo: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  getResumeDataNo() {
    $.ajax({
      url: '/resumeDataNo.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ resumeDataNo: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  getResumeDataJa() {
    $.ajax({
      url: '/resumeDataJa.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ resumeDataJa: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getResumeDataEn();
    this.getResumeDataRo();
    this.getResumeDataNo();
    this.getResumeDataJa();
  }

  getDataByLang(param) {
    switch (param) {
      case 'En':
        return this.state.resumeDataEn;
      case 'Ro':
        return this.state.resumeDataRo;
      case 'No':
        return this.state.resumeDataNo;
      case 'Ja':
        return this.state.resumeDataJa;
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="App">
        <Header
          data={this.getDataByLang(this.state.lang).main}
          onChangeLanguage={this.handleChangeLanguage}
          lang={this.state.lang}
        />
        <About data={this.getDataByLang(this.state.lang).main} />
        <Resume data={this.getDataByLang(this.state.lang).resume} />
        <Portfolio data={this.getDataByLang(this.state.lang).portfolio} />
        {/* <Testimonials data={this.getDataByLang(this.state.lang).testimonials} /> */}
        <Contact data={this.getDataByLang(this.state.lang).main} />
        <Footer data={this.getDataByLang(this.state.lang).main} />
      </div>
    );
  }
}

export default App;
