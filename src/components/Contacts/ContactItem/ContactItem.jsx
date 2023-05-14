import PropTypes from "prop-types";
import css from './ContactItem.module.css'

const ContactItem = ({ id, name, number, onDeleteContact }) => {

    return (
        <>
            <li className={css.item}>
                <span className={css.span}>{name}: </span>
                <span className={css.spanNum}>{number}</span>
                <button
                    className={css.itemBtn}
                    type="button"
                    onClick={() => onDeleteContact(id)}
                >X
                </button>
            </li >
        </>
    );
}

export default ContactItem;


ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired
};