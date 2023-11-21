const contactList = document.getElementById('contactList');


function loadContacts() {
  contactList.innerHTML = '';
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const contact = JSON.parse(localStorage.getItem(key));

    const listItem = document.createElement('li');
    listItem.innerHTML = ` ${contact.name} - ${contact.number} <button onclick="deleteContact('${key}')">Eliminar</button>`;
    contactList.appendChild(listItem);
  }
}

function addContact() {
  const name = document.getElementById('nameInput').value;
  const number = document.getElementById('numberInput').value;

  if (name && number) {
    const contact = { name, number };
    localStorage.setItem(name, JSON.stringify(contact));
    loadContacts();
    document.getElementById('nameInput').value = '';
    document.getElementById('numberInput').value = '';
  } else {
    alert('Por favor ingresa un nombre y un número.');
  }
}

function deleteContact(key) {
  localStorage.removeItem(key);
  loadContacts();
}
loadContacts();