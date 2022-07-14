import Header from './components/Header'
import Form from './components/Form'
import List from './components/List';
import { useEffect, useState } from 'react';

function App() {

  const [contact, setContact] = useState([])

  useEffect(() => {
    console.log(contact)
  }, [contact])

  return (
    <>
    <Header />
    <Form contact={contact} setContact={setContact} />
    <List contact={contact} />
    </>
  );
}

export default App;
