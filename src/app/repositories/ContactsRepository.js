const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Jonyelson',
    email: 'jonyelson2rerfd@gmail.com',
    phone: '42433636663',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
