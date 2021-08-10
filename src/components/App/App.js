import React, { Component } from "react";

import "./App.css";

import Section from "../Section/Section";
import InputContact from "../InputContact/InputContact";
import Contacts from "../Contacts/Contacts";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  formSubmitHandler = (dataForm) =>
    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, dataForm.name],
      };
    });

  render() {
    return (
      <div className="App">
        <Section title="Phonebook">
          <InputContact onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title="Contacts">
          <Contacts name={this.state.contacts} />
        </Section>
      </div>
    );
  }
}

export default App;
