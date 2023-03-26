import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Loader } from './Loader/Loader';
import { ContactList } from './ContactList/ContactList';
import { getIsLoading, getError } from 'redux/contacts/contactSelectors';

export function App() {
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
}
