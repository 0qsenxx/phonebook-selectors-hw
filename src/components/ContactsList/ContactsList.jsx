import styles from "./ContactsList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsSlice";
import { selectContacts } from "../../redux/contacts/contactsSelectors";
import { selectFilter } from "../../redux/filter/filterSelectors";

const ContactsList = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  console.log(contacts);

  const handleDeleteContact = (evt) => {
    const idContactToDelete = evt.target.getAttribute("data-id");
    dispatch(deleteContact(idContactToDelete));
  };

  return (
    <ul>
      {filter.length !== 0
        ? contacts
            .filter((contact) =>
              contact.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map((contact) => (
              <li key={contact.id} className={styles.contactItem}>
                <p>
                  {contact.name}: {contact.number}
                </p>
                <button
                  type="button"
                  data-id={contact.id}
                  onClick={(evt) => deleteContact(evt)}
                >
                  Delete
                </button>
              </li>
            ))
        : contacts.map((contact) => (
            <li key={contact.id} className={styles.contactItem}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <button
                type="button"
                data-id={contact.id}
                onClick={(evt) => handleDeleteContact(evt)}
              >
                Delete
              </button>
            </li>
          ))}
    </ul>
  );
};

export default ContactsList;
