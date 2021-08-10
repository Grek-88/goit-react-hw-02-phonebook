import React, { Component } from "react";
// import s from "../InputContact/InputContact.module.css";

class Contacts extends Component {
  render() {
    console.log(this.props.name);
    return this.props.name.map((el) => <p>{el}</p>);
};
}

export default Contacts;