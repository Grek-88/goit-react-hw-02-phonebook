import React, { Component } from "react";
// import s from "../InputContact/InputContact.module.css";

import FindContact from "../FindContact/FindContact";

class Contacts extends Component {
  state = {
    filter: "",
  };
  filterContact = (filterContact) => this.setState({ filter: filterContact });

  render() {
    // console.log(this.props.contact);
    // console.log(this.props.contact);
    return (
      <>
        <FindContact onChange={this.filterContact} />
        <ul>
          {this.props.contact.map((el) => {
            if (this.state.filter) {
              if (el.name.toLowerCase().includes(this.state.filter)) {
                return (
                  <li key={el.id} style={{ fontWeight: "bold" }}>
                    {el.name} {el.number}
                  </li>
                );
              }
            } else {
              return (
                <li key={el.id} style={{ fontWeight: "bold" }}>
                  {el.name} {el.number}
                </li>
              );
            }
          })}
        </ul>
      </>
    );
  }
}

export default Contacts;
