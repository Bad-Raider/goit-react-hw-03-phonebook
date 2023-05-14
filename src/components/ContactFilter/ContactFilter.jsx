import PropTypes from "prop-types";
import css from './ContactFilter.module.css';

const ContactFilter = ({value, onChange}) => {
  return (
      <>
          <p>Find contacts by name</p>
          <input
          className={css.contactFilter}
              type="text"
              value={value}
              onChange={onChange}
          />
            </>
        )  
};


export default ContactFilter;


  ContactFilter.propTypes = {
      value: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
};