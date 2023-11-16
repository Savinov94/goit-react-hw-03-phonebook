import css from './Contacts.module.css';
import ContactItem from '../ContactItem/ContactItem';

const Contacts = ({ contacts, deleteContact }) => (
  <ul className={css.contactsList}>
    {contacts.map(({ id, name, number }) => (
      <ContactItem
        key={id}
        id={id}
        name={name}
        number={number}
        onDeleteContact={deleteContact}
      />
    ))}
  </ul>
);
export default Contacts;
