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
    if (this.state.contacts.find((el) => el.name === dataForm.name)) {
      alert(`${dataForm.name} is already in contacts.`);
    } else {
      return this.setState((prevState) => {
        return {
          contacts: [...prevState.contacts, dataForm],
        };
      });
    }
  };

  deleteContactList = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((el) => el.id !== contactId),
    }));
  };

  render() {
    return (
      <div className="App">
        <Section title="Phonebook">
          <InputContact onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title="Contacts">
          <Contacts
            contact={this.state.contacts}
            onDelete={this.deleteContactList}
          />
        </Section>
      </div>
    );
  }
}

export default App;
