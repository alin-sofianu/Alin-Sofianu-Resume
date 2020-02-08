import React, { Component } from "react";

export default class Languages extends Component {
  constructor(props) {
    super(props);
    this.state = { lang: this.props.lang };
  }

  render() {
    return (
      <div>
        <select
          className="select-css"
          selected={this.props.lang}
          onChange={this.props.onChangeLanguage}
        >
          <option value="En">English</option>
          <option value="Ro">Română</option>
          <option value="No">Norsk</option>
          <option value="Ja">日本の</option>
        </select>
      </div>
    );
  }
}
