import ContactElement from '../ContactItem/ContactItem';
import PropTypes from 'prop-types';

export const ContactList = ({contacts, deleteContact}) => {

  return (
    <>
        {(contacts.length !== 0)
          ? <ul>
              {contacts.map(c => <ContactElement key={c.id} id={c.id} name={c.name} number={c.number} deleteContact={deleteContact}/>)}
            </ul>
          : <p>No contacts in the phonebook</p>
        }
    </>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
}

export default ContactList;