import React, { Component } from "react";
import s from "../InputContact/InputContact.module.css";

class InputContact extends Component {
  state = {
    name: "",
  };

  inputName = (ev) => {
    // console.dir(ev.target.value);
    this.setState({ name: ev.currentTarget.value });
  };

  reset = (e) => this.setState({ name: "" });

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={this.state.name}
          onChange={this.inputName}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
export default InputContact;
