import { Contacto } from './Contacto.js';

document.addEventListener('DOMContentLoaded', () => {
  const contactos = [
      new Contacto('Juan Perez', '123456789'),
      new Contacto('Maria Gomez', '987654321'),
      new Contacto('Luis Martinez', '456123789'),
      new Contacto('Ana Lopez', '321654987')
  ];

  const contactList = document.getElementById('contactsList');
  const searchInput = document.getElementById('search');
  const searchButton = document.getElementById('searchButton');


  const renderContacts = (contacts) => {
      contactList.innerHTML = '';
      contacts.forEach(contact => {
          contactList.innerHTML += contact.toHtml();
      });
  };

  
  searchButton.addEventListener('click', () => {
    const searchText = searchInput.value.toLowerCase();
    const filteredContacts = contactos.filter(contacto =>
      contacto.getNombre().toLowerCase().includes(searchText)
    );

    if (filteredContacts.length > 0) {
      renderContacts(filteredContacts);
    } else {
      console.log("No se ha encontrado un contacto con el nombre indicado");
    }
  })

  renderContacts(contactos);
});



