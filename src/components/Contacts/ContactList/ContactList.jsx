import PropTypes from "prop-types";
import ContactItem from "../ContactItem/ContactItem";
import css from './ContactList.module.css';


const ContactList = ({ arrContacts, onDeleteContact }) => {
    return (
        <>
            <ul className={css.list}>
                {arrContacts.map(({ id, name, number }) => (
                    <ContactItem
                        key={id}
                        id={id}
                        name={name}
                        number={number}
                        onDeleteContact={onDeleteContact}
                    />
                ))}
            </ul>
        </>
    );
};

export default ContactList;

ContactList.propTypes = {
    arrContacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
};