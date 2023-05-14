import { Component } from "react";
import Container from "./Container/Container";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./Contacts/ContactList/ContactList";
import ContactFilter from "./ContactFilter/ContactFilter";
import { nanoid } from "nanoid";

export class App extends Component {
    
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
}

  addNewContacts = contacts => {
    const { name, number } = contacts;

    const contactExists = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (contactExists) {
      alert(`${name} is already in contacts.`);
    } else {
      
      const newContact = {
        id: nanoid(),
        name: name,
        number: number,
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };


  handleChange = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  onDeleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  }

  render() {
    const { filter} = this.state;
    const arrContacts = this.getVisibleContacts();

    return (
      <Container>
        <h2>Phonebook</h2>
        <ContactForm
          onSubmit={this.addNewContacts}
        />
        <h2>Contacts</h2>
        <ContactFilter
          value={filter}
          onChange={this.handleChange}
        />
        <ContactList
          arrContacts={arrContacts}
          onDeleteContact={this.onDeleteContact}
        />
      </Container>
    );
  }
}

export default App;
