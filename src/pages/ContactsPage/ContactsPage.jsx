import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { getIsLoading } from 'redux/contacts/contactSelectors';
import { getError } from 'redux/contacts/contactSelectors';
import { fetchContacts } from 'redux/operations';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm />
      <div>
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error && <Loader />}
        <ContactList />
      </div>
    </div>
  );
};
