import React, { Component } from "react";

import "./App.css";

import Section from "../Section/Section";
import InputContact from "../InputContact/InputContact";
import Contacts from "../Contacts/Contacts";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  };

  formSubmitHandler = (dataForm) => {
    console.log(dataForm.name);
    // if (this.state.dataForm.name)

    // this.state.contacts.forEach((el) => {
    //   if (el.name === dataForm.name) {
    //     alert("aaa");
    //     return;
    //   }
    // });

    return this.setState((prevState) => {
      console.log(prevState.contacts);
      return {
        contacts: [...prevState.contacts, dataForm],
      };
    });
  };

  render() {
    return (
      <div className="App">
        <Section title="Phonebook">
          <InputContact onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title="Contacts">
          <Contacts contact={this.state.contacts} />
        </Section>
      </div>
    );
  }
}

export default App;
